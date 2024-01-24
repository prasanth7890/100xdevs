const express = require('express');
const router = express.Router();
const {authMiddleware} = require('../middleware');
const {Account} = require('../db');

router.get('/balance', authMiddleware, async (req, res)=>{
    const account = await Account.findOne({
        userId: req.userId,
    });

    res.status(200).json({
        balance: account.balance
    });
});

router.post('/transfer', authMiddleware , async (req, res)=>{
    const session = await Account.startSession();

    session.startTransaction();
    const {amount, to} = req.body;

    const account = await Account.findOne({userId: req.userId}).session(session);

    if(!account || account.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient balance"
        });
    }

    const toAccount = await Account.findOne({userId: to}).session(session);

    if(!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid Account"
        });
    }


    await Account.updateOne({ userId: req.userId }, { $inc: {balance: -amount}}).session(session);
    await Account.updateOne({ userId: to }, { $inc: {balance: amount}}).session(session);

    await session.commitTransaction();
    res.json({
        message: "Transfer succesful"
    });

})


module.exports = router;