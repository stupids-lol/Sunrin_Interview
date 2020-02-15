const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    console.log('[GET] /nefus');
    res.sendFile(__dirname + '/views/nefus.html');
});

module.exports = router;