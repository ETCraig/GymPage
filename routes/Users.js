const express = require('express');
const router = express.Router();

const Authentication = require('../middleware/Authentication');
const AWS = require('aws-sdk');
const { check, validationResult } = require('express-validator');
const config = require('config');
const multer = require('multer');
const User = require('../models/User');

//AWS Configuration
const bucketName  = config.get('AwsBuckets');

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

    const { password } = req.body;

    try {
        let user = User.findOneAndUpdate(
            { _id: req.user.id },
            { $set: { password } },
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

    const { email } = req.body;

    try {
        let user = User.findOneAndUpdate(
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