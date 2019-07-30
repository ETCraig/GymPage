const express = require('express');
const router = express.Router();

const Authentication = require('../middleware/Authentication');
const { check, validationResult } = require('express-validator');
const Post = require('../models/Post');
const Profile = require('../models/Profile');
const User = require('../models/User');

//@Route    POST api/posts
//@Desc     Create New Comment
//@Access   Private
router.post('/', [Authentication, ], async (req, res) => {

});

//@Route    GET api/posts/:id
//@Desc     Gets Post by id
//@Access   private
router.get('/:id', Authentication, async (req, res) => {

}); 

//@Route    DELETE api/posts/:id
//@Desc     Deletes Post by id
//@Access   Private
router.delete('/:id', Authentication, async (req, res) => {

});

//@Route    PUT api/posts/like/:id
//@Desc     Adds a Like to the Post
//@Access   Private
router.put('/like/:id', Authentication, async (req, res) => {

});

//@Route    PUT api/posts/unlike/:id
//@Desc     Removes Like from Post
//@Access   Private
router.put('/unlike/:id', Authentication, async (req, res) => {

});

//@Route    POST api/posts/comment/:id
//@Desc     Add Comment to Post
//@Access   Private
router.post('/comment/:id', [Authentication, ], async (req, res) => {
    
});

//@Route    DELETE api/posts/comment/:id/:comment_id
//@Desc     Delete Comment from Post
//@Access   Private
router.delete('/comment/:id/:comment_id', Authentication, async (req, res) => {
    
});

module.exports = router;