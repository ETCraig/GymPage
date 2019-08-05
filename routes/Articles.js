const express = require('express');
const router = express.Router();

const Article = require('../models/Article');
const Authentication = require('../middleware/Authentication');
const AWS = require('aws-sdk');
const { check, validationResult } = require('express-validator');
const config = require('config');
const multer = require('multer');
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

//@Route    POST api/articles
//@Desc     Create a Article
//@Access   Private
router.post('/', [Authentication, [
    check('name', 'Name is Required.').not().isEmpty(),
    check('text', 'Article Content is Required.').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        let user = await User.findById(req.user.id).select('-password');

        upload(req, res, async (err) => {
            let { name, text, routine_id, product_id, exercises_id } = req.body;
            let product = null;
            let routine = null;
            let exercises = null;
            if (routine_id) routine = routine_id;
            if (product_id) product = product_id;
            if (exercises_id) exercises = exercises_id;
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
                        Key: `user/${req.params.id}/articles/${Date.now()}.png`,
                        ContentType: mimetype,
                        ACL: 'public-read'
                    };
                    S3.upload(params, async (err, data) => {
                        if (err) {
                            errors.endpoint = "Create New Post.";
                            errors.unsave_creator_image = "Failed at S3.upload().";
                            return res.status(500).json(errors);
                        }
                        const article = new Article({
                            user: req.user.id,
                            name: name,
                            text: text,
                            image: data.Location,
                            routine: routine,
                            product: product,
                            exercises: exercises,
                            avatar: user.avatar
                        });

                        await article.save();

                        res.json(article);
                    });
                }
            } else {

                const article = new Article({
                    user: req.user.id,
                    name: name,
                    text: text,
                    routine: routine,
                    product: product,
                    exercises: exercises,
                    avatar: user.avatar
                });

                await article.save();

                res.json(article);
            }
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error.');
    }
});

//@Route    GET api/articles
//@Desc     Get User's Articles
//@Access   Private
router.get('/', Authentication, async (req, res) => {
    try {
        let articles = await Article.find({ user: req.user.id }).sort({ date: -1 });

        if (!articles) {
            return res.status(404).json({ msg: 'Articles Not Found.' });
        }

        res.json(articles);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error.');
    }
});

//@Route    GET api/articles/:id
//@Desc     Get a Specific Articles
//@Access   Private
router.get('/:id', Authentication, async (req, res) => {
    try {
        let article = await Article.findById(req.params.id);

        if (!article) {
            return res.status(404).json({ msg: 'Article Not Found.' });
        }

        res.json(article);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error.');
    }
});

//@Route    GET api/articles/community/all
//@Desc     Get Community Articles
//@Access   Private
router.get('/community/all', Authentication, async (req, res) => {
    try {
        const articles = await Article.find();

        if (!articles) {
            return res.status(404).json({ msg: 'No Articles Found.' });
        }

        res.json(articles);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error.');
    }
});

//@Route    PATCH api/articles/:article_id
//@Desc     Edit Article by ID
//@Access   Private
router.patch('/:article_id', [Authentication,], async (req, res) => {
    try {
        let user = await User.findById(req.user.id).select('-password');

        upload(req, res, async (err) => {
            let { name, text, routine_id, product_id, exercises_id } = req.body;
            let product = null;
            let routine = null;
            let exercises = null;
            let avatar = req.user.avatar;
            if (routine_id) routine = routine_id;
            if (product_id) product = product_id;
            if (exercises_id) exercises = exercises_id;
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
                        Key: `user/${req.params.id}/articles/${Date.now()}.png`,
                        ContentType: mimetype,
                        ACL: 'public-read'
                    };
                    S3.upload(params, async (err, data) => {
                        if (err) {
                            errors.endpoint = "Create New Post.";
                            errors.unsave_creator_image = "Failed at S3.upload().";
                            return res.status(500).json(errors);
                        }

                        let image = data.Location;

                        let UpdatedArticle = await Article.findOneAndUpdate(
                            { _id: req.params.article_id, user: req.user.id },
                            { $set: { name, text, image, routine, product, exercises, avatar } }
                        );

                        await UpdatedArticle.save();

                        res.json(UpdatedArticle);
                    });
                }
            } else {

                let UpdatedArticle = await Article.findOneAndUpdate(
                    { _id: req.params.article_id, user: req.user.id },
                    { $set: { name, text, routine, product, exercises, avatar } }
                );

                await UpdatedArticle.save();

                res.json(UpdatedArticle);
            }
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error.');
    }
});

//@Route    PUT api/articles/favorite/:id
//@Desc     Favorite Article by ID
//@Access   Private
router.put('/favorite/:id', Authentication, async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);

        if (article.favorites.filter(fav => fav.user.toString() === req.user.id).length > 0) {
            return res.status(400).json({ msg: 'Article Already Favorited.' });
        }

        article.favorites.unshift({ user: req.user.id });

        await article.save();

        res.json(article.favorites);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error.');
    }
});

//@Route    POST api/articles/unfavorite/:id
//@Desc     Unfavorite Article by ID
//@Access   Private
router.put('/unfavorite/:id', Authentication, async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);

        if (article.favorites.filter(fav => fav.user.toString() === req.user.id).length === 0) {
            return res.status(400).json({ msg: "Article Hasn't Been Favorited." });
        }

        const removeIndex = article.favorites.map(fav => fav.user.toString()).indexOf(req.user.id);

        article.favorites.splice(removeIndex, 1);

        await article.save();

        res.json(article.favorites);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error.');
    }
});

//@Route    POST api/articles/comment/:id
//@Desc     Comment on Article
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

        const article = await Article.findById(req.params.id);

        const newComment = {
            user: req.user.id,
            text: req.body.text,
            name: profile.username,
            avatar: user.avatar
        };

        article.comments.unshift(newComment);

        await article.save();

        res.json(article.comments);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error.');
    }
});

//@Route    POST api/articles/comment/:id/:article_id
//@Desc     Delete Comment from Article
//@Access   Private
router.delete('/comment/:id/:comment_id', Authentication, async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);

        const comment = article.comments.find(comment => comment.id == req.params.comment_id);

        if (!comment) {
            return res.status(404).json({ msg: 'Comment Not Found.' });
        }

        if (comment.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Account Not Authorized.' });
        }

        const removeIndex = article.comments.map(comment => comment.user.toString()).indexOf(req.user.id);

        article.comments.splice(removeIndex, 1);

        await article.save();

        res.json(article.comments);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error.');
    }
});

module.exports = router;