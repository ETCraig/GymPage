const express = require('express');
const router = express.Router();

const Authentication = require('../middleware/Authentication');
const AWS = require('aws-sdk');
const { check, validationResult } = require('express-validator');
const config = require('config');
const Exercise = require('../models/Exercise');
const multer = require('multer');
const Routine = require('../models/Routine');
const Workout = require('../models/Workout');

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

//@Route    POST api/exercise
//@Desc     Create a Exercises
//@Access   Admin
router.post('/', [Authentication, [
    check('name', 'Exercise Name is Required.').not().isEmpty(),
    check('muscle', 'Muscle Group is Required.').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        upload(req, res, async (err) => {
            let { name, muscle, type, difficulty, equipments, steps } = req.body;
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
                        Key: `exercises/${req.params.id}/exercise/${Date.now()}.png`,
                        ContentType: mimetype,
                        ACL: 'public-read'
                    };
                    S3.upload(params, async (err, data) => {
                        if (err) {
                            errors.endpoint = "Create New Post.";
                            errors.unsave_creator_image = "Failed at S3.upload().";
                            return res.status(500).json(errors);
                        }

                        let exercise = new Exercise({
                            name,
                            images: data.Location,
                            muscle,
                            type,
                            difficulty,
                            equipments: [],
                            steps: []
                        });

                        let equip = {
                            equipment: ""
                        };
                        if (equipments && equipments.length > 0) {
                            equipments.map(item => {
                                equip.equipment = item;
                                exercise.equipments.unshift(equip);
                            });
                        }

                        let stps = {
                            step: ""
                        };
                        if (steps && steps.length > 0) {
                            steps.map(item => {
                                stps.step = item;
                                exercise.steps.unshift(stps);
                            });
                        }

                        await exercise.save();

                        res.status(200).json(exercise);
                    });
                }
            } else {
                let exercise = new Exercise({
                    name,
                    muscle,
                    type,
                    difficulty,
                    equipments: [],
                    steps: []
                });

                let equip = {
                    equipment: ""
                };
                equipments.map(item => {
                    equip.equipment = item;
                    exercise.equipments.unshift(equip);
                });

                let stps = {
                    step: ""
                };
                steps.map(item => {
                    stps.step = item;
                    exercise.steps.unshift(stps);
                });

                await exercise.save();

                res.status(200).json(exercise);
            }
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error.');
    }
});

//@Route    GET api/exercise
//@Desc     Get All Exercises
//@Access   Private
router.get('/', Authentication, async (req, res) => {
    try {
        const exercises = await Exercise.find().sort({ 'name': 1 });

        res.json(exercises);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Exercises Not Found.' });
        }
        res.status(500).send('Server Error.');
    }
});

//@Route    GET api/exercise/muscle/:muscle
//@Desc     Get All Exercises of Muscle Group
//@Access   Private
router.get('/muscle/:muscle', Authentication, async (req, res) => {
    try {
        console.log(req.params.muscle)
        const exercises = await Exercise.find({ muscle: req.params.muscle });

        if (!exercises) {
            return res.status(404).json({ msg: 'No Exercises Found.' });
        }

        res.json(exercises);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'No Exercises Found.' });
        }
        res.status(500).send('Server Error.');
    }
});

//@Route    GET api/exercise/:id
//@Desc     Get Exercise by ID
//@Access   Private
router.get('/:id', Authentication, async (req, res) => {
    try {
        const exercise = await Exercise.findById(req.params.id);

        if (!exercise) {
            return res.status(404).json({ msg: 'Exercise Not Found.' });
        }

        res.json(exercise);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Exercise Not Found.' });
        }
        res.status(500).send('Server Error.');
    }
});

//@Route    PUT api/exercise/:workout_id/:id
//@Desc     Add Exercise to Routine
//@Access   Private
router.put('/:workout_id/:id', Authentication, async (req, res) => {
    let { sets, reps } = req.body;
    try {
        let workout = await Workout.findById(req.params.workout_id);

        let exercise = await Exercise.findById(req.params.id);

        workout.exercises.unshift({
            exercise,
            sets,
            reps
        });

        await workout.save();

        res.json(workout.exercises);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error.');
    }
});

//@Route    PUT api/exercise/:workout_id/:id
//@Desc     Delete Exercise from Workout
//@Access   Private
router.put('/:workout_id/:id', Authentication, async (req, res) => {
    try {
        const workout = await Workout.findById(req.params.workout_id);

        const removeIndex = workout.exercises.map(exr => exr.exercise.toString()).indexOf(req.params.id);

        workout.exercises.splice(removeIndex, 1);

        await workout.save();

        res.json(workout.exercises);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error.');
    }
});


//@Route    PATCH api/exercise/:workout_id/:id
//@Desc     Edit Exercise in Workout
//@Access   Private
router.put('/:workout_id/:id', Authentication, async (req, res) => {
    let { sets, reps } = req.body;
    try {
        await Workout.update(
            { "_id": req.params.workout_id, "exercises._id": req.params.id },
            { $set: { reps, sets } }
        );

        const workout = await Workout.findById(req.params.workout_id);

        res.json(workout.exercises);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error.');
    }
});

module.exports = router;