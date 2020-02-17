const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/', function (req, res) {
    console.log('[GET] /layer7');
    res.sendFile(__dirname + '/views/layer7.html');
});

router.post('/', function (req, res) {
    console.log('[POST] /layer7')
    let club = 'l7';
    let name = req.body.name;
    if(name.length > 5){
        name = name.slice(0, 5);
    }
    let number = req.body.number;
    if(number.length > 5){
        number = number.slice(0, 5);
    }
    let phone_number = req.body.phone;
    if(phone_number > 11){
        phone_number.slice(0, 11);
    }
    let email = req.body.email;
    let content01 = '질문 1 (*필수) Layer7에 지원한 동기를 서술해 주시기 바랍니다 : ' + req.body.textarea01;
    let content02 = '질문 2 (*필수) 주분야 또는 전공 대한 자신의 경험을 서술해주시기 바랍니다 : ' + req.body.textarea02;
    let content03 = '질문 3 (*필수) 자신의 특기를 서술해주시기 바랍니다 : ' + req.body.textarea03;
    let content04 = '질문 4 (*필수) 자신의 취미를 서술해주시기 바랍니다 : ' + req.body.textarea04;
    let content05 = '질문 5 (*선택) 해킹 대회 출전 경험을 서술해주시기 바랍니다 : ' + req.body.textarea05;
    let content05 = '질문 6 (*선택) 포트폴리오가 있으시다면 아래 구글드라이브 링크로 제출해주시기 바랍니다 : ' + req.body.textarea06;
    var formData = {
        club: club,
        name: name,
        number: number,
        phone_number: phone_number,
        email: email,
        content: JSON.stringify([content01, content02, content03, content04, content05, content06])
    };
    request.post({
        url: 'http://funnyga.me:14104/application/apply/',
        form: formData
    }, function (err, httpResponse, body) {
        if (!err) {
            console.log(httpResponse.statusCode)
            res.send('<script type="text/javascript">alert("제출 완료 되었습니다.");window.location.href = "/"</script>');
        } else {
            console.log(err);
        }
    })
})

module.exports = router;