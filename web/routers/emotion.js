const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/', function (req, res) {
    console.log('[GET] /emotion');
    res.sendFile(__dirname + '/views/emotion.html');
});

router.post('/', function (req, res) {
    console.log('[POST] /emotion')
    let club = 'em';
    let name = req.body.name;
    let number = req.body.number;
    let phone_number = req.body.phone;
    let day = '';
    if (req.body.first == 'first') {
        day = '면접 가능 날짜 : 3월 1일';
        if (req.body.second == 'second') {
            day = day + ', 3월 2일';
        }
    } else if (req.body.second == 'second') {
        day = '면접 가능 날짜 : 3월 2일';
    }
    let email = req.body.email;
    let content01 = '질문 1 지원동기 : ' + req.body.textarea01;
    let content02 = '질문 2 자신의 포부 : ' + req.body.textarea02;
    let content03 = '질문 3 자신의 장단점 : ' + req.body.textarea03;
    let content04 = '질문 4 이모션에 들어와서 가장 배우고 싶은 것 : ' + req.body.textarea04;
    let content05 = '질문 5 가장 열정적으로 임했던 일과 이를 통해서 이룬 것 : ' + req.body.textarea05;
    let content06 = '질문 6 자신에게 주어졌던 일 중 가장 어려웠던 경험 : ' + req.body.textarea06;
    let content07 = '질문 6 마지막으로 하고 싶은 말을 자유롭게 작성해주세요 : ' + req.body.textarea07;
    var formData = {
        club: club,
        name: name.slice(0, 5),
        number: number.slice(0, 5),
        phone_number: phone_number.slice(0, 11),
        email: email,
        content: JSON.stringify([day, content01, content02, content03, content04, content05, content06, content07])
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