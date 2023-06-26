const express = require('express')
const router = express.Router();

const authanticate = (req, res, next) => {
    res.send('AUTH');
}

const callback = (req, res, next) => {
    res.send('CALLBACK');
}

router.get('/', authanticate);

router.get('/callback', callback);

module.exports = router;
