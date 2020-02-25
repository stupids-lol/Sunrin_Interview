const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/', function (req, res) {
    console.log('[GET] /login');
    if (req.session.user === undefined) {
        res.sendFile(__dirname + '/views/login.html');
    } else {
        res.redirect('/view');
    }
});

router.post('/', function (req, res) {
    console.log('[POST] /login');
    let id = req.body.id;
    let pw = req.body.password;
    if (id.length > 80) {
        id = id.slice(0, 80);
    }
    if (pw.length > 80) {
        pw = pw.slice(0, 80);
    }
    var formData = {
        username: id,
        password: pw
    };
    request.post({
        url: 'http://funnyga.me:14104/custom_user/auth/',
        form: formData
    }, function (err, httpResponse, body) {
        if (!err) {
            var detailbody = JSON.parse(body);
            if (detailbody.token) {
                req.session.user = {
                    id: id,
                    token: detailbody.token,
                    authorized: true
                };
                res.send('<script type="text/javascript">alert("로그인 성공.");window.location.href = "/view"</script>');
            } else {
                res.send('<script type="text/javascript">alert("로그인 실패.");window.location.href = "/login"</script>');
            }
        } else {
            console.log(err);
        }
    })
});

module.exports = router;