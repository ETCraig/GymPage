const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    primary_image: {
        type: String
    },
    images: [
        {
            image: {
                type: String,
            }
        }
    ],
    description: {
        type: String
    },
    category: {
        type: String,
        required: true
    },
    brand: {
        type: String
    },
    sizes: [
        {
            size: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
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
            rating: {
                type: Number,
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
});

module.exports = mongoose.model('product', ProductSchema);