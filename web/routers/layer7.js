const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/', function (req, res) {
    console.log('[GET] /layer7');
    res.sendFile(__dirname + '/views/index.html');
});

router.post('/', function (req, res) {
    console.log('[POST] /layer7')
    let club = 'l7';
    let name = req.body.name;
    let number = req.body.number;
    let phone_number = req.body.phone;
    let email = req.body.email;
    let content01 = '질문 1 (*필수) 본인은 어떤 사람인지 소개해주세요' + '<br/>' + req.body.textarea01.replace(/(?:\r\n|\r|\n)/g, '<br/>').replace("<", "&lt;").replace(">", "&gt;").replace("&lt;br/&gt;", "<br/>");
    let content02 = '질문 2 (*필수) 동아리 지원 동기를 작성해주세요' + '<br/>' + req.body.textarea02.replace(/(?:\r\n|\r|\n)/g, '<br/>').replace("<", "&lt;").replace(">", "&gt;").replace("&lt;br/&gt;", "<br/>");
    let content03 = '질문 3 (*필수) 주분야 또는 전공에 대한 자신의 경험을 서술해주세요' + '<br/>' + req.body.textarea03.replace(/(?:\r\n|\r|\n)/g, '<br/>').replace("<", "&lt;").replace(">", "&gt;").replace("&lt;br/&gt;", "<br/>");
    let content04 = '질문 4 (*필수) 자신의 특기를 서술해주시기 바랍니다' + '<br/>' + req.body.textarea04.replace(/(?:\r\n|\r|\n)/g, '<br/>').replace("<", "&lt;").replace(">", "&gt;").replace("&lt;br/&gt;", "<br/>");
    let content05 = '질문 5 (*선택) 동아리 합격 후 하고싶은 공부와 포부에 대하여 서술해주세요' + '<br/>' + req.body.textarea05.replace(/(?:\r\n|\r|\n)/g, '<br/>').replace("<", "&lt;").replace(">", "&gt;").replace("&lt;br/&gt;", "<br/>");
    let content06 = '질문 6 (*선택) 포트폴리오가 있으시다면 아래 구글드라이브 링크로 제출해주시기 바랍니다' + '<br/>' + req.body.textarea06.replace(/(?:\r\n|\r|\n)/g, '<br/>').replace("<", "&lt;").replace(">", "&gt;").replace("&lt;br/&gt;", "<br/>");
    var formData = {
        club: club,
        name: name.slice(0, 5),
        number: number.slice(0, 5),
        phone_number: phone_number.slice(0, 11),
        email: email,
        content: JSON.stringify([content01, content02, content03, content04, content05, content06])
    };
    request.post({
        url: 'http://funnyga.me:14104/application/apply/',
        form: formData
    }, function (err, httpResponse, body) {
        if (!err && (httpResponse.statusCode == 200 || httpResponse.statusCode == 201)) {
            console.log(httpResponse.statusCode)
            res.send('<script type="text/javascript">alert("제출 완료 되었습니다.");window.location.href = "/"</script>');
        } else {
            console.log(err);
            res.send('<script type="text/javascript">alert("[서버 오류] 제출 실패.");window.location.href = "/"</script>');
        }
    })
})

module.exports = router;