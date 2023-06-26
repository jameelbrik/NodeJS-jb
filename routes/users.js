const express = require('express')
const router = express.Router();


const dashboard = (req, res, next) => {
    res.send('Users Home-Page');
}

const logout = (req, res, next) => {
    res.send('Logout');
}

const symbol = (req, res, next) => {
    res.send('Symbol');
}

router.get('/dashboard', dashboard);
router.get('/logout', logout);
router.post('/symbol', symbol);

router.exports = router;
