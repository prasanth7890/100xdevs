const express = require('express');
const router = express.Router();
const {z} = require('zod');
const {User} = require('../db');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config');

const ValidUser = z.object({
    username: z.string().email(),
    firstName: z.string(),
    lastName: z.string(),
    password: z.string()
});

router.post('/singup', async (req, res)=>{
    const details = req.body;
    const ParsedUser = ValidUser.safeParse(details);
    if(ParsedUser.success) {
        const userData = ParsedUser.data;
        const found = await User.findOne({username: userData.username});
        
        if(found) {
            return res.status(411).json({
                message: "Email already taken / Incorrect inputs"
            })
        }

        const newUser = await User.create(userData);

        const token = jwt.sign({
            userId: newUser._id
        }, JWT_SECRET);

        
        res.json({
            message: "User created succesfully",
            token: token
        });

        
    }
    else if(!ParsedUser.success) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs",
        })
    }
    
});

const signIn = z.object({
    username: z.string().email(),
    password: z.string()
})


router.post('/singin', async (req, res)=>{
    const parsedUser = signIn.safeParse(req.body);

    if(!parsedUser.success) {
        return res.status(411).json({
            message: "Error while logging in"
        });
    }
    
    const doc = await User.findOne(parsedUser.data);
    
    if(!doc) {
        return res.status(411).json({
            message: "Error while logging in"
        })
    }

    const token = jwt.sign({
        userId: doc._id
    }, JWT_SECRET);

    res.status(200).json({
        token: token
    });

});


module.exports = router;