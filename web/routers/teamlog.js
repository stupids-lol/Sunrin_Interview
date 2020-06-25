const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/', function (req, res) {
    console.log('[GET] /teamlog');
    res.sendFile(__dirname + '/views/index.html');
});

router.post('/', function (req, res) {
    console.log('[POST] /teamlog')
    let club = 'tl';
    let name = req.body.name;
    let number = req.body.number;
    let phone_number = req.body.phone;
    let email = req.body.email;
    let content01 = '질문 1 TeamLog에 지원한 동기에 대하여 서술하여 주세요 : ' + '<br/>' + req.body.textarea01.replace(/(?:\r\n|\r|\n)/g, '<br/>').replace("<", "&lt;").replace(">", "&gt;").replace("&lt;br/&gt;", "<br/>");
    let content02 = '질문 2 본인이 전공(C언어, 파이썬, HTML/CSS, 리눅스 등)을 어디까지 공부하였는지 서술하여 주세요 : ' + '<br/>' + req.body.textarea02.replace(/(?:\r\n|\r|\n)/g, '<br/>').replace("<", "&lt;").replace(">", "&gt;").replace("&lt;br/&gt;", "<br/>");
    let content03 = '질문 3 자신이 TeamLog에서 희망하는 전공(ex: 네트워크, 웹, 서버)과 그 이유에 관하여 서술하여 주세요 : ' + '<br/>' + req.body.textarea03.replace(/(?:\r\n|\r|\n)/g, '<br/>').replace("<", "&lt;").replace(">", "&gt;").replace("&lt;br/&gt;", "<br/>");
    let content04 = '질문 4 TeamLog에 입부하면 자신이 어떠한 노력을 할 것인지 서술해 주세요 : ' + '<br/>' + req.body.textarea04.replace(/(?:\r\n|\r|\n)/g, '<br/>').replace("<", "&lt;").replace(">", "&gt;").replace("&lt;br/&gt;", "<br/>");
    let content05 = '질문 5 포트폴리오가 있으시다면 이 문항에 구글 드라이브 링크를 기재해 주세요. (없을 시 없음 입력) : ' + '<br/>' + req.body.textarea05.replace(/(?:\r\n|\r|\n)/g, '<br/>').replace("<", "&lt;").replace(">", "&gt;").replace("&lt;br/&gt;", "<br/>");
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
        if (!err && (httpResponse.statusCode == 200 || httpResponse.statusCode == 201)) {
            res.send('<script type="text/javascript">alert("제출 완료 되었습니다.");window.location.href = "/"</script>');
        } else {
            console.log(err);
            res.send('<script type="text/javascript">alert("[서버 오류] 제출 실패.");window.location.href = "/"</script>');
        }
    })
})

module.exports = router;