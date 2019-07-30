const express = require('express');
const router = express.Router();

//@Route    PATCH api/user/avatar
//@Desc     Update User's Avatar
//@Access   Private
router.patch('/avatar', Authentication, async (req, res) => {

});

//@Route    PATCH api/user/password
//@Desc     Update User's Password
//@Access   Private
router.patch('/password', Authentication, async (req, res) => {

});

//@Route    PATCH api/user/email
//@Desc     Update User's Email Address
//@Access   Private
router.patch('/email', Authentication, async (req, res) => {

});

module.exports = router;