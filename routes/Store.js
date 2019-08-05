const express = require('express');
const router = express.Router();

const Authentication = require('../middleware/Authentication');
const { check, validationResult } = require('express-validator');
const config = require('config');
const Product = require('../models/Product');
const Receipt = require('../models/Receipt');
const User = require('../models/User');

//Stripe Set up
const secret_key = config.get('secretKey');
const stripe = require('stripe')(secret_key);

//@Route    POST api/store
//@Desc     Create a Product
//@Access   Admin
router.post('/', Authentication, async (req, res) => {
    try {

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error.');
    }
});

//@Route    GET api/store
//@Desc     Get all Products
//@Access   Private
router.get('/', Authentication, async (req, res) => {
    try {
        let products = await Product.find().sort({ name: -1 });

        if (!products || products.length < 1) {
            return res.status(404).json({ msg: 'No Products Found.' });
        }

        res.json(products);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'No Products Found.' });
        }
        res.status(500).send('Server Error.');
    }
});

//@Route    GET api/store/:id
//@Desc     Get Specific Product by ID
//@Access   Private
router.get('/:id', Authentication, async (req, res) => {
    try {
        let product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ msg: 'Product Not Found.' });
        }

        res.json(product);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Product Not Found.' });
        }
        res.status(500).send('Server Error.');
    }
});

//@Route    GET api/store/methods
//@Desc     Get User's Payment Methods
//@Access   Private
router.get('/methods', Authentication, async (req, res) => {
    let { stripe_id } = req.user;
    try {
        let sources = await stripe.customers.listSources(stripe_id);

        if (!sources) {
            return res.status(404).json({ msg: 'No Payment Methods Found.' });
        }

        res.json(sources);
    } catch (err) {
        console.error(err)
        res.status(500).send('Server Error');
    }
});

//@Route    POST api/store/method
//@Desc     Create Payment Method
//@Access   Private
router.post('/method', Authentication, async (req, res) => {
    let { email, stripe_id } = req.user;
    let { tokenId } = req.body;
    try {
        stripe.sources.create({
            type: 'card',
            currency: 'usd',
            token: tokenId.id,
            owner: {
                email: email
            }
        }, async (err, source) => {
            stripe.customers.createSource(
                stripe_id,
                { source: source.id },
                async (err, newSource) => {
                    if (newSource.id) {
                        res.sendStatus(200);
                    } else {
                        console.log('Server Err.', err);
                        res.sendStatus(500);
                    }
                }
            );
        });
    } catch (err) {
        console.error(err)
        res.status(500).send('Server Error');
    }
});

//@Route    DELETE api/store/method/:id
//@Desc     Delete User Payment Method
//@Access   Private
router.delete('/method/:id', Authentication, async (req, res) => {
    let { sourceId } = req.params;
    let { stripe_id } = req.user;
    try {
        await stripe.customers.deleteSource(
            stripe_id,
            sourceId,
            async (err, source) => {
                if (source === null) {
                    res.sendStatus(200);
                } else {
                    console.log('Server Err.', err);
                    res.sendStatus(500);
                }
            }
        )
    } catch (err) {
        console.error(err)
        res.status(500).send('Server Error');
    }
});

//@Route    POST api/store/checkout
//@Desc     Purchase Product's
//@Access   Private
router.post('/checkout', Authentication, async (req, res) => {

});

//@Route    GET api/store/receipts
//@Desc     Get User's Receipts & Past Orders
//@Access   Private
router.get('/receipts', Authentication, async (req, res) => {
    let { limit } = req.query;
    let user = req.user.id;
    try {
        let maxLength = await Receipt.find({ user: user }).countDocuments();

        let receipt = await Receipt.find({ user: user }).populate(
            'user', [
                'amount',
                'currency',
                'receipt_url',
                'time'
            ]
        ).sort({ date: -1 }).limit(Number(limit));

        let data = {
            receipt,
            maxLength,
            limit
        }

        res.status(200).json(data);
    } catch (err) {
        console.error(err)
        res.status(500).send('Server Error');
    }
});

module.exports = router;