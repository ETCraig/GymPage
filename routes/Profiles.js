const express = require('express');
const router = express.Router();

const Article = require('../models/Article');
const Authentication = require('../middleware/Authentication');
const { check, validationResult } = require('express-validator');
const Post = require('../models/Post');
const Profile = require('../models/Profile');
const Routine = require('../models/Routine');
const User = require('../models/User');

//@Route    POST api/profile
//@Desc     Create or Change Profile Fields 
//@Access   Private
router.post('/', [Authentication, [
    check('username', 'A Username is Required.').not().isEmpty(),
    check('exp', 'Please Select an Experience Level.').not().isEmpty()
]], async (req, res) => {
    console.log('INSIDE', req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }

    const {
        username,
        exp,
        bio,
        weight,
        feet,
        inches,
        bmi
    } = req.body;

    const profileFields = {};

    profileFields.user = req.user.id;
    if (username) profileFields.username = username;
    if (exp) profileFields.exp = exp;
    if (bio) profileFields.bio = bio;
    if (weight) profileFields.weight = weight;
    if (feet) profileFields.feet = feet;
    if (inches) profileFields.inches = inches;
    if (bmi) profileFields.bio = bio;

    try {
        let profile = await Profile.findOne({ user: req.user.id });

        if (profile) {
            profile = await Profile.findOneAndUpdate(
                { user: req.user.id },
                { $set: profileFields },
                { new: true }
            );
            return res.json(profile);
        }

        profile = new Profile(profileFields);

        await profile.save();

        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error.');
    }
});

//@Route    GET api/profile
//@Desc     Get User's Profile
//@Access   Private
router.get('/', Authentication, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate('user', ['name', 'avatar']);

        if (!profile) {
            res.status(400).json({ msg: 'There is no Profile for this user.' });
        }

        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error.');
    }
});

//@Route    GET api/profile/community
//@Desc     Get all Profiles
//@Access   Public
router.get('/community', async (req, res) => {
    try {
        const profiles = await Profile.findOne().populate('user', ['name', 'avatar']);

        res.json(profiles);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error.');
    }
});

//@Route    GET api/profile/user/:profile_id
//@Desc     Get Profile by ID
//@Access   Public
router.get('/user/:profile_id', async (req, res) => {
    try {
        const profile = await Profile.findOne({ _id: req.params.profile_id }).populate('user', ['name', 'avatar']);

        if (!profile) {
            return res.status(400).json({ msg: 'There is no Profile for this User.' });
        }

        res.json(profile);
    } catch (err) {
        console.error(err.message);
        if (err.kind == 'ObjectId') {
            return res.status(400).json({ msg: 'Profile is not Found.' });
        }
        res.status(500).send('Server Error.');
    }
});

//@Route    POST api/profile/session
//@Desc     Record Workout Session
//@Access   Private
router.post('/session', Authentication, async (req, res) => {
    const {
        routine,
        weight,
        exercises,
        newRecord,
        duration
    } = req.body;

    const newSes = {
        routine,
        weight,
        exercises,
        newRecord,
        duration
    }

    try {
        const profile = await Profile.findOne({ user: req.user.id });

        profile.sessions.unshift(newSes);

        await profile.save();

        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error.');
    }
});

//@Route    DELETE api/profile
//@Desc     Deletes Profile, User, Posts, Articles, & Routines
//@Access   Private
router.delete('/', Authentication, async (req, res) => {
    try {
        await Post.deleteMany({ user: req.user.id });
        await Article.findByIdAndRemove({ user: req.user.id });
        await Routine.findByIdAndRemove({ user: req.user.id });
        await Profile.findOneAndRemove({ user: req.user.id });
        await User.findByIdAndRemove({ _id: res.user.id });

        res.json({ msg: 'User Deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error.');
    }
});

module.exports = router;