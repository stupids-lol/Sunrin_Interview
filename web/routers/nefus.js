const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/', function (req, res) {
    console.log('[GET] /nefus');
    res.sendFile(__dirname + '/views/index.html');
});

router.post('/', function (req, res) {
    console.log('[POST] /nefus')
    let club = 'nf';
    let name = req.body.name;
    let number = req.body.number;
    let phone_number = req.body.phone;
    let email = req.body.email;
    let content01 = '질문 1 NEFUS에 지원을 하게 된 동기에 대해서 서술 하시오 : ' + '<br/>' + req.body.textarea01.replace(/(?:\r\n|\r|\n)/g, '<br/>').replace("<", "&lt;").replace(">", "&gt;").replace("&lt;br/&gt;", "<br/>");
    let content02 = '질문 2 자기소개서를 자유롭게 작성하시오 : ' + '<br/>' + req.body.textarea02.replace(/(?:\r\n|\r|\n)/g, '<br/>').replace("<", "&lt;").replace(">", "&gt;").replace("&lt;br/&gt;", "<br/>");
    let content03 = '질문 3 자신의 전공 실력 및 분야를 작성하시오 : ' + '<br/>' + req.body.textarea03.replace(/(?:\r\n|\r|\n)/g, '<br/>').replace("<", "&lt;").replace(">", "&gt;").replace("&lt;br/&gt;", "<br/>");
    let content04 = '질문 4 자신이 네퓨즈에 들어와서 배우고 싶은 것을 적고, 이유를 같이 적어주세요. : ' + '<br/>' + req.body.textarea04.replace(/(?:\r\n|\r|\n)/g, '<br/>').replace("<", "&lt;").replace(">", "&gt;").replace("&lt;br/&gt;", "<br/>");
    let content05 = '질문 5 아래에 포토폴리오를 공유한 구글 드라이브 링크를 기재해주세요 : ' + '<br/>' + req.body.textarea05.replace(/(?:\r\n|\r|\n)/g, '<br/>').replace("<", "&lt;").replace(">", "&gt;").replace("&lt;br/&gt;", "<br/>");
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
            console.log(httpResponse.statusCode)
            res.send('<script type="text/javascript">alert("제출 완료 되었습니다.");window.location.href = "/"</script>');
        } else {
            console.log(err);
            res.send('<script type="text/javascript">alert("[서버 오류] 제출 실패.");window.location.href = "/"</script>');
        }
    })
})

module.exports = router;