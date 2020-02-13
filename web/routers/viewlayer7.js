const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    if (req.session.user === undefined) {
        res.sendFile(__dirname + '/views/login.html');
    } else if (req.session.user.id === 'layer7') {
        res.sendFile(__dirname + '/views/view.html');
    } else {
        req.session.destroy();
        res.redirect('/')
    }
});

module.exports = router;