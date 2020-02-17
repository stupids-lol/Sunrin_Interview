const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/', function (req, res) {
    console.log('[GET] /nefus');
    res.sendFile(__dirname + '/views/nefus.html');
});

router.post('/', function (req, res) {
    console.log('[POST] /nefus')
    let club = 'nf';
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
    let content01 = '질문 1 NEFUS에 지원을 하게 된 동기에 대해서 서술 하시오 : ' + req.body.textarea01;
    let content02 = '질문 2 자기소개서를 자유롭게 작성하시오 : ' + req.body.textarea02;
    let content03 = '질문 3 자신의 전공 실력 및 분야를 작성하시오 : ' + req.body.textarea03;
    let content04 = '질문 4 자신이 배우고 싶은 분야에 대해서 작성하시오. 또한 그에 맞는 이유를 작성하시오 : ' + req.body.textarea04;
    let content05 = '질문 5 자신의 포부에 대해서 서술 하시오 : ' + req.body.textarea05;
    let content06 = '질문 6 아래에 포토폴리오를 공유한 구글 드라이브 링크를 기재해주세요 : ' + req.body.textarea06;
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