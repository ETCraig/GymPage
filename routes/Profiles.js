const express = require('express');
const router = express.Router();

const Authentication = require('../middleware/Authentication');
const { check, validationResult } = require('express-validator');
const config = require('config');
const Post = require('../models/Post');
const Profile = require('../models/Profile');
const Routine = require('../models/Routine');
const User = require('../models/User');

//@Route    POST api/profile
//@Desc     Create or Change Profile Fields 
//@Access   Private
router.post('/', Authentication, async (req, res) => {

});

//@Route    GET api/profile
//@Desc     Get User's Profile
//@Access   Private
router.get('/', Authentication, async (req, res) => {

});

//@Route    GET api/profile/community
//@Desc     Get all Profiles
//@Access   Public
router.get('/community', async (req, res) => {

});

//@Route    GET api/profile/user/:user_id
//@Desc     Get Profile by ID
//@Access   Public
router.get('/user/:user_id', async (req, res) => {

});

//@Route    DELETE api/profile
//@Desc     Deletes Profile, User, Articles, & Routines
//@Access   Private
router.delete('/', Authentication, async (req, res) => {

});

module.exports = router;