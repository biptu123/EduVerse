const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fast2sms = require('fast-two-sms');
const { body, validationResult } = require('express-validator');
const User = require('../models/User');

const jwtSecret = "THISISAJSONWEBTOKENFORSECURITYPURPOSE";



router.post('/createuser',
    [body('password').isLength({ min: 5 })],
    async (req, res) => {
        // validation 
        console.log(req.body);
        
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors);
            return res.status(400).json({ errors: 'Enter Valid Data' });
        }


        const user = await User.findOne({ rollno: req.body.rollno });

        if (user) {
            return res.status(400).json({ errors: "User already exists" });
        }


        const salt = await bcrypt.genSalt(10);
        const securePass = await bcrypt.hash(req.body.password, salt);
        try {
            await User.create({
                name: req.body.name,
                rollno: req.body.rollno,
                password: securePass,
                otp
            });
        }
        catch (err) {
            res.json({ success: false , message: 'Something Went Wrong'});
        }
        res.json({ success: true , message: 'User Registered Successfully'});
    })

router.post('/updatepassword', async (req, res) => {
    const user = req.body;
    const salt = await bcrypt.genSalt(10);
    const securePass = await bcrypt.hash(req.body.password, salt);
    user.password = securePass;
    try {
        await User.findOneAndUpdate({ phone_no: user.phone_no, otp: user.otp }, user);
        return res.json({ success: true });
    }
    catch (err) {
        console.log(err);
        return res.json({ success: false, message: "Internal server error" });
    }
})
router.post('/loginuser',
    async (req, res) => {
        try {
            let user = await User.findOne({ phone_no: req.body.phone_no, status: 'verified' });
            if (!user) {
                return res.status(400).json({ errors: "Invalid Credentials" });
            }
            const passwordMatched = await bcrypt.compare(req.body.password, user.password);
            if (!passwordMatched) {
                return res.status(400).json({ errors: "Invalid Credentials" });
            }

            const data = user._doc;
            const authToken = jwt.sign({ _id: data._id }, jwtSecret);
            return res.json({ success: true, authToken: authToken });
        }
        catch (err) {
            console.log(err);
            res.json({ success: false });
        }
    })




module.exports = router;