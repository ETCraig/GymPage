const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    text: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    routine: {
        type: Schema.Types.ObjectId,
        ref: 'routine'
    },
    exercises: [
        {
            exercise: {
                type: Schema.Types.ObjectId,
                ref: 'exercise'
            }
        }
    ],
    avatar: {
        type: String
    },
    favorites: [
        {
            favorite: {
                type: Schema.Types.ObjectId,
                ref: 'user'
            }
        }
    ],
    comments: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: user
            },
            text: {
                String,
                required: true
            },
            avatar: {
                type: String
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('article', ArticleSchema);