const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/layer7.html');
});

module.exports = router;