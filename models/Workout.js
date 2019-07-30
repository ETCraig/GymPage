const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    routine: {
        type: Schema.Types.ObjectId,
        ref: 'routine'
    },
    day_num: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    exercises: [
        {
            exercise: {
                type: Schema.Types.ObjectId,
                ref: 'exercise'
            },
            sets: {
                type: Number,
                required: true
            },
            reps: {
                type: Number,
                required: true
            }
        }
    ],
});

module.exports = mongoose.model('workout', WorkoutSchema);