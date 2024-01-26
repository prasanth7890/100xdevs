const express = require('express');
const router = express.Router();
const {z} = require('zod');
const {User, Account} = require('../db');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config');
const {authMiddleware} = require('../middleware');

const ValidUser = z.object({
    username: z.string().email(),
    firstName: z.string(),
    lastName: z.string(),
    password: z.string()
});

router.post('/signup', async (req, res)=>{
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
            userId: newUser._id,
            username: newUser.firstName
        }, JWT_SECRET);

        Account.create({
            userId: newUser._id,
            balance: 1 + Math.random() * 10000
        });

        
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


router.post('/signin', async (req, res)=>{
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
        userId: doc._id,
        username: doc.firstName,
    }, JWT_SECRET);

    res.status(200).json({
        token: token
    });

});

const updateBody = z.object({
    password: z.string().min(5).optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
})


router.put('/', authMiddleware , async (req, res) => {
    const {success} = updateBody.safeParse(req.body);
    if(!success) {
        res.status(411).json({
            message: "Error while updating information"
        })
    }

    await User.updateOne(req.body, {
        id: req.userId
    });

    res.json({
        message: "Updated successfully"
    });

});

router.get('/bulk', async (req, res)=> {
    const filter = req.query.filter || "";

    const users = await User.find({
      $or: [
        {
          firstName: {
            $regex: filter
          },
        },
        {
            lastName: {
                $regex: filter
            } 
        }
      ],
    });

    res.json({
        users: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id,
        }))
    })
   
})



module.exports = router;