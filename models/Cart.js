const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    items: [
        {
            item: {
                type: Object
            },
            count: {
                type: Number,
                default: 1
            }
        }
    ]
});

module.exports = mongoose.model('cart', CartSchema);