const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    username: {
        type: String,
        required: true
    },
    exp: {
        type: String,
        required: true
    },
    bio: {
        type: String
    },
    weight: {
        type: Number
    },
    feet: {
        type: Number
    },
    inches: {
        type: Number
    },
    bmi: {
        type: Number
    },
    sessions: [
        {
            routine: {
                type: Schema.Types.ObjectId,
                ref: 'routine'
            },
            weight: {
                type: Number,
                required: true
            },
            exercises: {
                type: String,
                required: true
            },
            newRecord: {
                type: Number,
                required: true
            },
            duration: {
                type: Number,
                required: true
            }
        }
    ],
    address: [
        {
            name: {
                type: String,
                required: true
            },
            street: {
                type: String,
                required: true
            },
            city: {
                type: String,
                required: true
            },
            state: {
                type: String,
                required: true
            },
            zip: {
                type: String,
                required: true
            }
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('profile', ProfileSchema);