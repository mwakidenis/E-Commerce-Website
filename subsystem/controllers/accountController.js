const User = require('../models/userModel');
const userService = require('../service/userService');
const paymentHistoryService = require('../service/paymentHistoryService')
const payAccountService = require('../service/payAccountService');

exports.index = async (req, res, next) => {
    try {
        const account = req.account;
        const user = await userService.getById(req.user._id);
        const paymentHistory = await paymentHistoryService.getById(account.id);
        if (!user) {
            return res.status(404).send('User not found.');
        }
        res.render('account/index', {
            user,
            balance: account.remainingBalance.toFixed(2),
            paymentHistory
        });
    } catch (error) {
        console.error('Error rendering add money page:', error);
        res.status(500).send('Internal server error.');
    }
};

exports.addMoney = async (req, res, next) => {
    try {
        const { amount } = req.body;
        if (typeof amount !== 'number' || !amount || amount <= 0) {
            return res.status(400).send('Invalid amount.');
        }
        const userAccount = await payAccountService.findById(req.user._id);
        if (!userAccount) {
            return res.status(404).send('Pay account not found.');
        }
        userAccount.remainingBalance += amount;
        await userAccount.save();
        res.status(200).json({ message: `Successfully added $${amount} to your balance.` });
    } catch (error) {
        console.error('Error adding money:', error);
        res.status(500).send('Internal server error.');
    }
};