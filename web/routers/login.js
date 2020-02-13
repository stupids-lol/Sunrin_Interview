const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/login.html');
});

router.post('/', function (req, res) {
    let id = req.body.id;
    if (id.length > 80) {
        id = id.slice(0, 80);
    }
    req.session.user = {
        id: id,
        authorized: true
    };
    res.send('<script type="text/javascript">alert("로그인 성공.");window.location.href = "/viewlayer7"</script>');
});

module.exports = router;