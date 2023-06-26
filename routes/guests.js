const express = require('express')
const router = express.Router();


const welcome = (req, res, next) => {
    res.send('Home Page for guests');
}

router.get('/welcome', welcome);

router.exports = router;
