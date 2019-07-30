const express = require('express');
const router = express.Router();

const Article = require('../models/Article');
const Authentication = require('../middleware/Authentication');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');

//@Route    POST api/articles
//@Desc     Create a Article
//@Access   Private
router.post('/', [Authentication, ], async (req, res) => {

});

//@Route    GET api/articles
//@Desc     Get User's Articles
//@Access   Private
router.get('/', Authentication, async (req, res) => {

});

//@Route    GET api/articles/:id
//@Desc     Get a Specific Articles
//@Access   Private
router.get('/:id', Authentication, async (req, res) => {

});

//@Route    GET api/articles/community
//@Desc     Get Community Articles
//@Access   Private
router.get('/community', Authentication, async (req, res) => {

});

//@Route    PATCH api/articles/:article_id
//@Desc     Edit Article by ID
//@Access   Private
router.patch('/:article_id', [Authentication, ], async (req, res) => {

});

//@Route    PUT api/articles/favorite/:id
//@Desc     Favorite Article by ID
//@Access   Private
router.post('/favorite/:id', Authentication, async (req, res) => {

});

//@Route    POST api/articles/unfavorite/:id
//@Desc     Unfavorite Article by ID
//@Access   Private
router.post('/unfavorite/:id', Authentication, async (req, res) => {

});

//@Route    POST api/articles/comment/:id
//@Desc     Comment on Article
//@Access   Private
router.post('/comment/:id', [Authentication, ], async (req, res) => {

});

//@Route    POST api/articles/comment/:id/:article_id
//@Desc     Delete Comment from Article
//@Access   Private
router.delete('/comment/:id/:article_id', Authentication, async (req, res) => {

});

module.exports = router;