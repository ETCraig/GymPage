const express = require('express');
const router = express.Router();

const Authentication = require('../middleware/Authentication');
const { check, validationResult } = require('express-validator');
const config = require('config');
const Product = require('../models/Product');
const User = require('../models/User');

//@Route    GET api/store
//@Desc     Get all Products
//@Access   Private
router.get('/', Authentication, async (req, res) => {

});

//@Route    GET api/store/:id
//@Desc     Get Specific Product by ID
//@Access   Private
router.get('/:id', Authentication, async (req, res) => {

});

//@Route    GET api/store/methods
//@Desc     Get User's Payment Methods
//@Access   Private
router.get('/methods', Authentication, async (req, res) => {

});

//@Route    POST api/store/method
//@Desc     Create Payment Method
//@Access   Private
router.post('/method', Authentication, async (req, res) => {

});

//@Route    DELETE api/store/method/:id
//@Desc     Delete User Payment Method
//@Access   Private
router.delete('/method/:id', Authentication, async (req, res) => {

});

//@Route    POST api/store
//@Desc     Purchase Product/s
//@Access   Private
router.post('/', Authentication, async (req, res) => {

});

//@Route    GET api/store/receipts
//@Desc     Get User's Receipts
//@Access   Private
router.get('/receipts', Authentication, async (req, res) => {

});

module.exports = router;