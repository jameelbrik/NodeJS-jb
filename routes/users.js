const express = require('express');
const { usersValidator } = require('../controllers/users/usersValidator');
const joi = require('../middlewares/input-validator');
const connectDB = require('../middlewares/connectDB');
const {dashboard, logout, symbol} = require('../controllers/users/userController');
router = express.Router();

router.use(connectDB);

// const dashboard = (req, res, next) => {
//     res.send('Users Home-Page');
// }

// const logout = (req, res, next) => {
//     res.send('Logout');
// }

// const symbol = (req, res, next) => {
//     res.send('Symbol');
// }

router.get('/dashboard', dashboard);
router.get('/logout', logout);
router.post('/symbol', joi(usersValidator), symbol);

module.exports = router;
