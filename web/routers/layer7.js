const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/', function (req, res) {
    console.log('[GET] /layer7');
    res.sendFile(__dirname + '/views/layer7.html');
});

router.post('/', function (req, res) {
    console.log('[POST] /layer7')
    let club = 'Layer7';
    let name = req.body.name;
    if(name.length > 4){
        name = name.slice(0, 4);
    }
    let number = req.body.number;
    if(number.length > 5){
        number = number.slice(0, 5);
    }
    let phone_number = req.body.phone;
    let email = req.body.email;
    let content01 = req.body.textarea01;
    let content02 = req.body.textarea02;
    let content03 = req.body.textarea03;
    let content04 = req.body.textarea04;
    let content05 = req.body.textarea05;
    var formData = {
        club: club,
        name: name,
        number: number,
        phone_number: phone_number,
        email: email,
        content: [
            content01,
            content02,
            content03,
            content04,
            content05
        ]
    };
    console.log(formData)
    request.post({
        url: 'http://funnyga.me:14104/application/apply/',
        form: formData
    }, function (err, httpResponse, body) {
        if (!err) {
            res.send('<script type="text/javascript">alert("제출 완료 되었습니다.");window.location.href = "/"</script>');
        } else {
            console.log(err);
        }
    })
})

module.exports = router;