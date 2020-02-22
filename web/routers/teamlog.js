const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/', function (req, res) {
    console.log('[GET] /teamlog');
    res.sendFile(__dirname + '/views/teamlog.html');
});

router.post('/', function (req, res) {
    console.log('[POST] /teamlog')
    let club = 'tl';
    let name = req.body.name;
    let number = req.body.number;
    let phone_number = req.body.phone;
    let email = req.body.email;
    let content01 = '질문 1 TeamLog에 지원한 동기에 대하여 서술하여 주세요 : ' + req.body.textarea01;
    let content02 = '질문 2 본인이 전공(C언어, 파이썬, HTML/CSS, 리눅스 등)을 어디까지 공부하였는지 서술하여 주세요 : ' + req.body.textarea02;
    let content03 = '질문 3 자신이 TeamLog에서 희망하는 전공과 자신의 포부에 대해 서술하여 주세요 : ' + req.body.textarea03;
    let content04 = '질문 4 위의 문항 외에 따로 하고싶은 말이 있으시면 여기에 서술하여 주세요. (없을 시 없음 입력) : ' + req.body.textarea04;
    let content05 = '질문 5 포트폴리오가 있으시다면 이 문항에 구글 드라이브 링크를 기재해 주세요. (없을 시 없음 입력) : ' + req.body.textarea05;
    var formData = {
        club: club,
        name: name.slice(0, 5),
        number: number.slice(0, 5),
        phone_number: phone_number.slice(0, 11),
        email: email,
        content: JSON.stringify([content01, content02, content03, content04, content05])
    };
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