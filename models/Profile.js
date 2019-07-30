const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    username: {
        type: String
    },
    bio: {
        type: String
    },
    exp: {
        type: String
    },
    weight: {
        type: Number
    },
    height: {
        type: Number
    },
    bmi: {
        type: Number
    },
    routines: [
        {
            routine: {
                type: Schema.Types.ObjectId,
                ref: 'routine'
            }
        }
    ],
    sessions: [
        {
            routine: {
                type: Schema.type.ObjectId,
                ref: 'routine'
            },
            weight: {
                type: Number
            },
            exercises: {
                type: String
            },
            newRecord: {
                type: Number
            },
            duration: {
                type: Number
            }
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('profile', ProfileSchema);