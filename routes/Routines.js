const express = require('express');
const router = express.Router();

const Authentication = require('../middleware/Authentication');
const { check, validationResult } = require('express-validator');
const Exercise = require('../models/Exercise');
const Profile = require('../models/Profile');
const Routine = require('../models/Routine');
const User = require('../models/User');
const Workout = require('../models/Workout');

//@Route    POST api/routine
//@Desc     Create a Routine
//@Access   Private
router.post('/', [Authentication, [
    check('name', 'Routine Name is Required.').not().isEmpty(),
    check('type', 'Routine Type is Required.').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }

    let { name, type, description, public } = req.body;
    let { creator } = req.user.id;
    try {
        let routine = await new Routine({
            creator,
            name,
            type,
            description,
            public
        });

        await routine.save();

        res.json(routine)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error.');
    }
});

//@Route    POST api/routine/workout/:routine_id
//@Desc     Create a Workout in the Routine
//@Access   Private
router.post('/workout/:routine_id', [Authentication, [
    check('day_num', 'Day 0r Number is Required.').not().isEmpty(),
    check('name', 'Workout Name is Required.').not().isEmpty()
]], async (req, res) => {
    let { day_num, name } = req.body;
    let routine = req.params.routine_id;
    try {
        let workout = await new Workout({
            routine,
            day_num,
            name
        });

        await workout.save();

        res.json(workout);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error.');
    }
});

//@Route    GET api/routine
//@Desc     Get Routines
//@Access   Private
router.get('/', Authentication, async (req, res) => {
    try {
        let routines = await Routine.find({public: true});

        res.json(routines);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error.');
    }
});

//@Route    GET api/routine
//@Desc     Get Routines
//@Access   Private
router.get('/private', Authentication, async (req, res) => {
    try {
        let routines = await Routine.find({creator: req.user.id});

        res.json(routines);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error.');
    }
});

//@Route    DELETE api/routine/:routine_id
//@Desc     Delete a Routine
//@Access   Private
router.delete('/:routine_id', Authentication, async (req, res) => {
    const routineId = req.params.routine_id;
    try {
        await Workout.deleteMany({ routine: routineId });

        await Routine.findOneAndDelete({ _id: routineId });

        res.json({ msg: 'Routine Removed.' });
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Routine Not Found.' });
        }
        res.status(500).send('Server Error.');
    }
});

//@Route    DELETE api/routine/workout/:workout_id
//@Desc     Delete a Routine's Workout
//@Access   Private
router.delete('/workout/:workout_id', Authentication, async (req, res) => {
    try {
        //CHECK IF REMOVES FOR REF AS WELL...?
        const workout = await Workout.findById(req.params.workout_id);

        if (!workout) {
            return res.status(404).json({ msg: 'Workout Not Found.' });
        }

        await workout.remove();

        res.json({ msg: 'Workout Removed.' });
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Workout Not Found.' });
        }
        res.status(500).send('Server Error.');
    }
});

//@Route    POST api/routine/exercise/:id
//@Desc     Create Or Update User's Record
//@Access   Private
router.post('/exercise/:id', Authentication, async (req, res) => {
    let { max_reps, max_weight } = req.body;
    try {
        let exer = await Exercise.find({ _id: req.params.id, "user_record.holder": req.user.id });

        if (exer.length < 1) {

            let exercise = await Exercise.findById(req.params.id);

            const newRecord = {
                holder: req.user.id,
                max_reps,
                max_weight
            };

            exercise.user_record.unshift(newRecord);

            await exercise.save();

            res.json(exercise);
        } else {

            let exercise = await Exercise.findOneAndUpdate(
                { _id: req.params.id, "user_record.holder": req.user.id },
                { $set: { "user_record.$.max_reps": max_reps, "user_record.$.max_weight": max_weight } },
                { new: true }
            );

            res.json(exercise);
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error.');
    }
});

//@Route    PATCH api/routine/:id
//@Desc     Edit Routine
//@Access   Private
router.patch('/:id', [Authentication, [
    check('name', 'Routine Name is Required.').not().isEmpty(),
    check('type', 'Routine Type is Required.').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }

    const routineId = req.params.id;
    let { name, type, description, public } = req.body;

    try {
        let routine = await Routine.findByIdAndUpdate(
            { _id: routineId },
            { $set: { name, type, description, public } },
            { new: true }
        );

        res.json(routine);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error.');
    }
});

//@Route    PATCH api/routine/workout/:id
//@Desc     Edit Routine Workout
//@Access   Private
router.patch('/workout/:id', [Authentication, [
    check('day_num', 'Day Or Number is Required.').not().isEmpty(),
    check('name', 'Workout Name is Required.').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }

    const routineId = req.params.id;
    let { day_num, name } = req.body;

    try {
        let workout = await Workout.findByIdAndUpdate(
            { _id: routineId },
            { $set: { day_num, name } },
            { new: true }
        );

        res.json(workout);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error.');
    }
});

//@Route    PUT api/routine/workout/:id/:exercise_id
//@Desc     Add Exercise to Workout
//@Access   Private
router.put('/workout/:id/:exercise_id', Authentication, async (req, res) => {
    let { sets, reps } = req.body;
    try {
        let workout = await Workout.findById(req.params.id);

        let exercise = await Exercise.findById(req.params.exercise_id)

        //Check if Exercise Already In Workout

        let newExercise = {
            exercise,
            reps,
            sets
        };

        workout.exercises.unshift(newExercise);

        await workout.save();

        res.json(workout.exercises);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error.');
    }
});

//@Route    PUT api/routine/workout/:id/:exercise_id
//@Desc     Remove Exercise from Workout
//@Access   Private
router.delete('/workout/:id/:exercise_id', Authentication, async (req, res) => {
    try {
        const workout = await Workout.findById(req.params.id);

        const exercise = workout.exercises.find(exer => exer.exercise == req.params.exercise_id);

        if (!exercise) {
            return res.status(404).json({ msg: 'Exercise Not Found.' });
        }

        //Check User Ownership
        // if (exercise.user.toString() !== req.user.id) {
        //     return res.status(401).json({ msg: 'Account Not Authorized.' });
        // }

        const removeIndex = workout.exercises.map(exer => exer.exercise.toString()).indexOf(req.params.exercise_id);

        workout.exercises.splice(removeIndex, 1);

        await workout.save();

        res.json(workout.exercises);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error.');
    }
});

//@Route    PUT api/routine/save/:id
//@Desc     Save Routine to User
//@Access   Private
router.put('/save/:id', Authentication, async (req, res) => {
    try {
        const routine = await Routine.findById(req.params.id);

        if (routine.saves.filter(save => save.user.toString() === req.user.id).length > 0) {
            return res.status(400).json({ msg: 'Routine Already Liked.' });
        }

        routine.saves.unshift({ user: req.user.id });

        await routine.save();

        res.json(routine.saves);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error.');
    }
});

//@Route    PUT api/routine/unsave/:id
//@Desc     Unsave Routine from User
//@Access   Private
router.put('/unsave/:id', Authentication, async (req, res) => {
    try {
        const routine = await Routine.findById(req.params.id);

        if (routine.saves.filter(save => save.user.toString() === req.user.id).length === 0) {
            return res.status(400).json({ msg: "Routine Hasn't Been Liked." });
        }

        const removeIndex = routine.saves.map(save => save.user.toString()).indexOf(req.user.id);

        routine.saves.splice(removeIndex, 1);

        await routine.save();

        res.json(routine.saves);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error.');
    }
});

//@Route    POST api/routine/comment/:id
//@Desc     Add Comment to Routine
//@Access   Private
router.post('/comment/:id', [Authentication, [
    check('text', 'Comment Text is Required.').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }

    let { text, rating } = req.body;

    try {
        const user = await User.findById(req.user.id).select('-password');

        const profile = await Profile.findOne({ user: req.user.id });

        const routine = await Routine.findById(req.params.id);

        const newComment = {
            user: req.user.id,
            text: text,
            rating: rating,
            name: profile.username,
            avatar: user.avatar
        };

        routine.comments.unshift(newComment);

        await routine.save();

        res.json(routine.comments);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error.');
    }
});

//@Route    DELETE api/routine/comment/:id/:comment_id
//@Desc     Delete Comment from Routine
//@Access   Private
router.delete('/comment/:id/:comment_id', Authentication, async (req, res) => {
    try {
        const routine = await Routine.findById(req.params.id);

        const comment = routine.comments.find(comment => comment.id == req.params.comment_id);

        if (!comment) {
            return res.status(404).json({ msg: 'Comment Not Found.' });
        }

        if (comment.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Account Not Authorized.' });
        }

        const removeIndex = routine.comments.map(comment => comment.user.toString()).indexOf(req.user.id);

        routine.comments.splice(removeIndex, 1);

        await routine.save();

        res.json(routine.comments);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error.');
    }
});

module.exports = router;