const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/', function (req, res) {
    console.log('[GET] /unifox');
    res.sendFile(__dirname + '/views/unifox.html');
});

router.post('/', function (req, res) {
    console.log('[POST] /unifox')
    let club = 'uf';
    let name = req.body.name;
    let number = req.body.number;
    let phone_number = req.body.phone;
    let email = req.body.email;
    let content01 = '질문 1 UniFox에 지원한 동기에 대해서 서술해주시기 바랍니다. : ' + req.body.textarea01;
    let content02 = '질문 2 UniFox에 지원전에 한 남다른 노력에 대해서 서술해주시기 바랍니다. : ' + req.body.textarea02;
    let content03 = '질문 3 UniFox에서 배우고 싶은 것과 그에 맞는 이유를 서술해주시기 바랍니다. : ' + req.body.textarea03;
    let content04 = '질문 4 UniFox에서 자신이 어떤 존재가 될 것인지 서술해주시기 바랍니다. : ' + req.body.textarea04;
    let content05 = '질문 5 (선택) 포트폴리오(자신을 자랑할 수 있는 것) (구글드라이브 링크 제출) : ' + req.body.textarea05;
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

router.get('/drive', function (req, res) {
    console.log('[GET] /unifox/drive')
    res.download(__dirname + '/../구글_드라이브_사용법.pdf');
});

module.exports = router;