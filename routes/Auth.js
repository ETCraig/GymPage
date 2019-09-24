const express = require('express');
const router = express.Router();

const Authentication = require('../middleware/Authentication');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const config = require('config');
const jwt = require('jsonwebtoken');
const User = require('../models/User');


//Stripe Set up
const secret_key = config.get('secretKey');
const stripe = require('stripe')(secret_key);

// @route   GET api/auth
// @desc    Get Logged in user
// @access  Private
router.get('/', Authentication, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');

        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error.');
    }
});

//@Route    POST api/auth/login
//@Desc     Authenticate User & Decode Token
//@Access   Public
router.post('/login', [
    check('email', 'Please Enter a Valid Email.').isEmail(),
    check('password', 'Password Required.').exists()
], async (req, res) => {
    console.log('IN')
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { email, password } = req.body;

        let user = await User.findOne({ email });
        console.log(user)
        if (!user) {
            res.status(400).json({ errors: [{ msg: 'Invalid Credentials.' }] });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            res.status(400).json({ errors: [{ msg: 'Invalid Credentials.' }] });
        }

        const payload = {
            user: {
                id: user.id
            }
        }
        console.log(user)
        jwt.sign(
            payload,
            config.get('jwtSecret'),
            { expiresIn: 3600 },
            (err, token) => {
                if (err) throw err;
                console.log(token)
                res.status(200).json({ token });
            }
        );
    } catch (err) {
        console.error(err)
        res.status(500).send('Server Error');
    }
});

//@Route    POST api/auth/register
//@Desc     Register a new User && Authenticate
//@Access   Public
router.post('/register', [
    check('name', 'Name is Required.').not().isEmpty(),
    check('email', 'Valid Email is Required.').isEmail(),
    check('password', 'Please Enter a password with 6 or more Characters.').isLength({ min: 6 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { name, email, password } = req.body;

        let user = await User.findOne({ email });

        if (user) {
            res.status(400).json({ errors: [{ msg: 'Email Already in Use.' }] });
        }

        user = new User({
            name,
            email,
            password
        });

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        stripe.customers.create({ email: email }, async function (err, customer) {
            console.log(customer.id)
            user.stripe_id = customer.id

            await user.save();
            console.log(user)
            const payload = {
                user: {
                    id: user.id
                }
            }

            jwt.sign(
                payload,
                config.get('jwtSecret'),
                { expiresIn: 3600 },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                }
            );
        });
    } catch (err) {
        console.error(err)
        res.status(500).send('Server Error');
    }
});

module.exports = router;