const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/', function (req, res) {
    console.log('[GET] /view');
    console.log('[ID] ' + req.session.id);
    if (req.session.user === undefined) {
        res.sendFile(__dirname + '/views/login.html');
    } else {
        var headerData = {
            Authorization: 'Token ' + req.session.user.token
        };
        request.get({
            url: 'http://funnyga.me:14104/application/',
            headers: headerData
        }, function (err, httpResponse, body) {
            if (!err) {
                var detailbody = JSON.parse(body);
                res.render('view', {
                    count: detailbody.length,
                    data: detailbody.data
                });
            } else {
                console.log(err);
            }
        })
    }
});

module.exports = router;