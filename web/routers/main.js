const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    console.log('[GET] /main');
    res.sendFile(__dirname + '/views/main.html');
});

module.exports = router;