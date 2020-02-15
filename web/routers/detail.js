const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/:idx', function (req, res) {
    console.log('[GET] /detail');
    if (req.session.user === undefined) {
        res.sendFile(__dirname + '/views/login.html');
    } else {
        var idx = req.params.idx
        var headerData = {
            Authorization: 'Token ' + req.session.user.token
        };
        request.get({
            url: `http://funnyga.me:14104/application/${idx}/`,
            headers: headerData
        }, function (err, httpResponse, body) {
            if (!err) {
                var detailbody = JSON.parse(body);
                res.render('detail', {
                    name: detailbody.name,
                    data: detailbody.content
                });
            } else {
                console.log(err);
            }
        })
    }
});

module.exports = router;