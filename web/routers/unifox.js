const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    console.log('[GET] /unifox');
    res.sendFile(__dirname + '/views/unifox.html');
});

module.exports = router;