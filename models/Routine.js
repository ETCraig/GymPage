const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoutineSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String
    },
    workouts: [
        {
            workout: {
                type: Schema.Types.ObjectId,
                ref: 'workout'
            }
        }
    ],
    public: {
        type: Boolean,
        default: false
    },
    saves: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'user'
            }
        }
    ],
    comments: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'user'
            },
            text: {
                String,
            },
            rating: {
                type: Number,
            },
            avatar: {
                type: String
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ]
});

module.exports = mongoose.model('routine', RoutineSchema);