const express = require('express');
const router = express.Router();

const Authentication = require('../middleware/Authentication');
const { check, validationResult } = require('express-validator');
const Exercise = require('../models/Exercise');
const Routine = require('../models/Routine');
const Workout = require('../models/Workout');

//@Route    POST api/routine
//@Desc     Create a Routine
//@Access   Private
router.post('/', Authentication, async (req, res) => {

});

//@Route    POST api/routine/workout/:routine_id
//@Desc     Create a Workout in the Routine
//@Access   Private
router.post('/workout/:routine_id', Authentication, async (req, res) => {

});

//@Route    DELETE api/routine
//@Desc     Delete a Routine
//@Access   Private
router.delete('/', Authentication, async (req, res) => {

});

//@Route    DELETE api/routine/workout/:routine_id
//@Desc     Delete a Routine's Workout
//@Access   Private
router.delete('/workout/:routine_id', Authentication, async (req, res) => {

});

//@Route    POST api/routine/exercise/:id
//@Desc     Create Or Update User's Record
//@Access   Private
router.post('/exercise.:id', Authentication, async (req, res) => {

});

//@Route    PATCH api/routine/workout/:id
//@Desc     Edit Routine Workout
//@Access   Private
router.patch('/workout/:id', Authentication, async (req, res) => {

});

//@Route    PATCH api/routine/:id
//@Desc     Edit Routine
//@Access   Private
router.patch('/:id', Authentication, async (req, res) => {

});

//@Route    PUT api/routine/save/:id
//@Desc     Save Routine to User
//@Access   Private
router.put('/save/:id', Authentication, async (req, res) => {

});

//@Route    PUT api/routine/unsave/:id
//@Desc     Unsave Routine from User
//@Access   Private
router.put('/unsave/:id', Authentication, async (req, res) => {

});

//@Route    POST api/routine/comment/:id
//@Desc     Add Comment to Routine
//@Access   Private
router.post('/comment/:id', [Authentication,], async (req, res) => {

});

//@Route    DELETE api/routine/comment/:id/:comment_id
//@Desc     Delete Comment from Routine
//@Access   Private
router.delete('/comment/:id/:comment_id', Authentication, async (req, res) => {

});

module.exports = router;