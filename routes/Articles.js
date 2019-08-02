const express = require('express');
const router = express.Router();

const Article = require('../models/Article');
const Authentication = require('../middleware/Authentication');
const AWS = require('aws-sdk');
const { check, validationResult } = require('express-validator');
const config = require('config');
const Exercise = require('../models/Exercise');
const multer = require('multer');
const Product = require('../models/Product');
const Routine = require('../models/Routine');
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

//@Route    GET api/articles/community
//@Desc     Get Community Articles
//@Access   Private
router.get('/community', Authentication, async (req, res) => {
    try {
        let articles = await Article.find().sort({ date: -1 });

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

});

//@Route    PUT api/articles/favorite/:id
//@Desc     Favorite Article by ID
//@Access   Private
router.post('/favorite/:id', Authentication, async (req, res) => {
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
router.post('/unfavorite/:id', Authentication, async (req, res) => {
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
        const article = await Post.findById(req.params.id);

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