const express = require('express');
const router = express.Router();

const Authentication = require('../middleware/Authentication');
const AWS = require('aws-sdk');
const { check, validationResult } = require('express-validator');
const config = require('config');
const multer = require('multer');
const Post = require('../models/Post');
const Profile = require('../models/Profile');
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

//@Route    POST api/posts
//@Desc     Create New Post
//@Access   Private
router.post('/', [Authentication, [
    check('text', 'Text is Required.').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        console.log(req.files)
        const profile = await Profile.findOne({ user: req.user.id });

        upload(req, res, async (err) => {
            console.log(req.body, req.files[0].mimetype)
            if (req.files && req.files.length) {
                console.log('IN', req.files[0].mimetype)
                if (req.files[0].mimetype === 'image/jpg' || req.files[0].mimetype === 'image/png') {
                    let uri = req.files[0];
                    var datauri = new AvatarDatauri();
                    datauri.format('.png', uri.buffer);
                    let { mimetype } = datauri;
                    console.log(mimetype)
                    let { content } = datauri;
                    buf = new Buffer(content.replace(/^data:image\/\w+;base64,/, ""), "base64");
                    let params = {
                        Bucket: bucketName,
                        Body: buf,
                        Key: `user/${req.user.id}/posts/${Date.now()}.png`,
                        ContentType: mimetype,
                        ACL: 'public-read'
                    };
                    S3.upload(params, async (err, data) => {
                        if (err) {
                            errors.endpoint = "Create New Post.";
                            errors.unsave_creator_image = "Failed at S3.upload().";
                            return res.status(500).json(errors);
                        }
                        const newPost = new Post({
                            text: req.body.text,
                            name: profile.username,
                            avatar: profile.avatar,
                            user: req.user.id,
                            images: await data.Location
                        });

                        const post = await newPost.save();
                        console.log('ZZZ')
                        res.status(200).json(post);
                    });
                } else if (req.files[0].mimetype === 'video/mp4') {
                    let uri = req.files[0];
                    var datauri = new AvatarDatauri();
                    datauri.format('.mp4', uri.buffer);
                    let { mimetype } = datauri;
                    console.log(mimetype)
                    let { content } = datauri;
                    buf = new Buffer(content.replace(/^data:video\/\w+;base64,/, ""), "base64");
                    let params = {
                        Bucket: bucketName,
                        Body: buf,
                        Key: `user/${req.user.id}/posts/${Date.now()}.mp4`,
                        ContentType: mimetype,
                        ACL: 'public-read'
                    };
                    console.log('DDD')
                    S3.upload(params, async (err, data) => {
                        if (err) {
                            errors.endpoint = "Create New Post.";
                            errors.unsave_creator_image = "Failed at S3.upload().";
                            return res.status(500).json(errors);
                        }
                        console.log(data.Location)
                        const newPost = new Post({
                            text: req.body.text,
                            name: profile.username,
                            avatar: profile.avatar,
                            user: req.user.id,
                            videos: data.Location
                        });

                        const post = await newPost.save();

                        res.json(post);
                    });
                }
            } else {
                console.log('PASSED')
                const newPost = new Post({
                    text: req.body.text,
                    name: profile.username,
                    avatar: profile.avatar,
                    user: req.user.id
                });

                const post = await newPost.save();

                res.json(post);
            }

        })
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error.');
    }
});

//@Route    GET api/posts
//@Desc     Gets sll Posts
//@Access   private
router.get('/', Authentication, async (req, res) => {
    try {
        const posts = await Post.find().sort({ date: -1 });

        res.json(posts);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Post Not Found.' });
        }
        res.status(500).send('Server Error.');
    }
});


//@Route    GET api/posts/:id
//@Desc     Gets Post by id
//@Access   private
router.get('/:id', Authentication, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(404).json({ msg: 'Post Not Found' });
        }

        res.json(post);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Post Not Found.' });
        }
        res.status(500).send('Server Error.');
    }
});

//@Route    DELETE api/posts/:id
//@Desc     Deletes Post by id
//@Access   Private
router.delete('/:id', Authentication, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(404).json({ msg: 'Account Not Authorized.' });
        }

        await post.remove();

        res.json({ msg: 'Post Removed.' });
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Post Not Found.' });
        }
        res.status(500).send('Server Error.');
    }
});

//@Route    PUT api/posts/like/:id
//@Desc     Adds a Like to the Post
//@Access   Private
router.put('/like/:id', Authentication, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (post.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
            return res.status(400).json({ msg: 'Post Already Liked.' });
        }

        post.likes.unshift({ user: req.user.id });

        await post.save();

        res.json(post.likes);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error.');
    }
});

//@Route    PUT api/posts/unlike/:id
//@Desc     Removes Like from Post
//@Access   Private
router.put('/unlike/:id', Authentication, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (post.likes.filter(like => like.user.toString() === req.user.id).length === 0) {
            return res.status(400).json({ msg: "Post Hasn't Been Liked." });
        }

        const removeIndex = post.likes.map(like => like.user.toString()).indexOf(req.user.id);

        post.likes.splice(removeIndex, 1);

        await post.save();

        res.json(post.likes);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error.');
    }
});

//@Route    POST api/posts/comment/:id
//@Desc     Add Comment to Post
//@Access   Private
router.post('/comment/:id', [Authentication, [
    check('text', 'Text is Required.').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const user = await User.findById(req.user.id).select('-password');

        const profile = await Profile.findOne({ user: req.user.id });

        const post = await Post.findById(req.params.id);

        upload(req, res, async (err) => {

            if (req.files && req.files.length) {
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
                        Key: `user/${req.params.id}/posts/${Date.now()}.png`,
                        ContentType: mimetype,
                        ACL: 'public-read'
                    };
                    S3.upload(params, async (err, data) => {
                        if (err) {
                            errors.endpoint = "Create New Post.";
                            errors.unsave_creator_image = "Failed at S3.upload().";
                            return res.status(500).json(errors);
                        }
                        const newComment = {
                            user: req.user.id,
                            text: req.body.text,
                            name: profile.username,
                            avatar: user.avatar,
                            image: data.Location
                        };

                        post.comments.unshift(newComment);

                        await post.save();

                        res.json(post.comments);
                    });
                }
            } else {

                const newComment = {
                    user: req.user.id,
                    text: req.body.text,
                    name: profile.username,
                    avatar: user.avatar
                };

                post.comments.unshift(newComment);

                await post.save();

                res.json(post.comments);
            }
        })

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error.');
    }
});

//@Route    DELETE api/posts/comment/:id/:comment_id
//@Desc     Delete Comment from Post
//@Access   Private
router.delete('/comment/:id/:comment_id', Authentication, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        const comment = post.comments.find(comment => comment.id == req.params.comment_id);

        if (!comment) {
            return res.status(404).json({ msg: 'Comment Not Found.' });
        }

        if (comment.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Account Not Authorized.' });
        }

        const removeIndex = post.comments.map(comment => comment.user.toString()).indexOf(req.user.id);

        post.comments.splice(removeIndex, 1);

        await post.save();

        res.json(post.comments);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error.');
    }
});

module.exports = router;