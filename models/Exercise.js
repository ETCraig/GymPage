const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    images: {
        type: String
    },
    muscle: {
        type: String,
        required: true
    },
    type: {
        type: String,
    },
    difficulty: {
        type: String
    },
    equipments: [
        {
            equipment: {
                type: String
            }
        }
    ],
    steps: [
        {
            step: {
                type: String
            }
        }
    ],
    user_record: [
        {
            holder: {
                type: Schema.Types.ObjectId,
                ref: 'user'
            },
            max_reps: {
                type: Number
            },
            max_weight: {
                type: Number
            }
        }
    ]
});

module.exports = mongoose.model('exercise', ExerciseSchema);