const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    console.log('[GET] /emotion');
    res.sendFile(__dirname + '/views/emotion.html');
});

module.exports = router;