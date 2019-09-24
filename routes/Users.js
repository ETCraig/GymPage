const express = require('express');
const router = express.Router();

const Authentication = require('../middleware/Authentication');
const AWS = require('aws-sdk');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const config = require('config');
const multer = require('multer');
const User = require('../models/User');

//AWS Configuration
const bucketName = config.get('AwsBuckets');

var AvatarDatauri = require('datauri'),
    storage = multer.memoryStorage(),
    upload = multer({
        storage: storage
    }).any();

AWS.config.update({
    accessKeyId: config.get('accessKeyId'),
    secretAccessKey: config.get('secretAccessKey'),
    region: config.get('region')
});

const S3 = new AWS.S3({ useAccelerateEndpoint: true });

//@Route    PATCH api/user/avatar
//@Desc     Update User's Avatar
//@Access   Private
router.patch('/avatar', Authentication, async (req, res) => {
    upload(req, res, async (err) => {
        try {
            let uri = req.files[0];
            var datauri = new AvatarDatauri();
            datauri.format('.png', uri.buffer);
            let { mimetype } = datauri;

            if (mimetype === 'image/png' || mimetype === 'image/jpg') {
                let { content } = datauri;
                buf = new Buffer(content.replace(/^data:image\/\w+;base64,/, ""), "base64");
                let params = {
                    Bucket: bucketName,
                    Body: buf,
                    Key: `user/${req.user.id}/avatars/${Date.now()}.png`,
                    ContentType: mimetype,
                    ACL: 'public-read'
                };
                S3.upload(params, (err, data) => {
                    if (err) {
                        errors.endpoint = "update_user_avatar.";
                        errors.unsave_creator_image = "Failed at S3.upload().";
                        return res.status(500).json(errors);
                    }
                    User.findOneAndUpdate(
                        { _id: req.user.id },
                        { $set: { "avatar": data.Location } },
                        { new: true }
                    ).then(user => res.status(200).json(user));
                });
            }
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error.');
        }
    });
});

//@Route    PATCH api/user/password
//@Desc     Update User's Password
//@Access   Private
router.patch('/password', [Authentication, [
    check('password', 'New Password is Required.').exists()
]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }

    try {
        const { password } = req.body;

        const salt = await bcrypt.genSalt(10);

        let hashedPassword = await bcrypt.hash(password, salt);

        let user = await User.findOneAndUpdate(
            { _id: req.user.id },
            { $set: { hashedPassword } },
            { new: true }
        );

        res.status(200).json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error.');
    }
});

//@Route    PATCH api/user/email
//@Desc     Update User's Email Address
//@Access   Private
router.patch('/email', [Authentication, [
    check('email', 'New Email is Required.').isEmail()
]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }

    try {
        const { email } = req.body;

        let user = await User.findOneAndUpdate(
            { _id: req.user.id },
            { $set: { email } },
            { new: true }
        );

        res.status(200).json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error.');
    }
});

module.exports = router;