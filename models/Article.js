const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    name: {
        type: String,
    },
    text: {
        type: String,
    },
    image: {
        type: String
    },
    routine: {
        type: Schema.Types.ObjectId,
        ref: 'routine'
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'product'
    },
    exercises: {
        type: Schema.Types.ObjectId,
        ref: 'exercise'
    },
    avatar: {
        type: String
    },
    favorites: [
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