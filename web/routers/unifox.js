const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/', function (req, res) {
    console.log('[GET] /unifox');
    res.sendFile(__dirname + '/views/index.html');
});

router.post('/', function (req, res) {
    console.log('[POST] /unifox')
    let club = 'uf';
    let name = req.body.name;
    let number = req.body.number;
    let phone_number = req.body.phone;
    let email = req.body.email;
    let content01 = '질문 1 자기소개를 해주세요. ' + '<br/>' + req.body.textarea01.replace(/(?:\r\n|\r|\n)/g, '<br/>').replace("<", "&lt;").replace(">", "&gt;").replace("&lt;br/&gt;", "<br/>");
    let content02 = '질문 2 동아리 지원 동기를 작성해 주세요.  ' + '<br/>' + req.body.textarea02.replace(/(?:\r\n|\r|\n)/g, '<br/>').replace("<", "&lt;").replace(">", "&gt;").replace("&lt;br/&gt;", "<br/>");
    let content03 = '질문 3 동아리를 들어온다면 어떤 역할을 담당할 수 있는지 작성해 주세요.  ' + '<br/>' + req.body.textarea03.replace(/(?:\r\n|\r|\n)/g, '<br/>').replace("<", "&lt;").replace(">", "&gt;").replace("&lt;br/&gt;", "<br/>");
    let content04 = '질문 4 동아리에 들어와서 가장 하고 싶은 것이 무엇인지 작성해 주세요.  ' + '<br/>' + req.body.textarea04.replace(/(?:\r\n|\r|\n)/g, '<br/>').replace("<", "&lt;").replace(">", "&gt;").replace("&lt;br/&gt;", "<br/>");
    let content05 = '질문 5 팀으로 진행하는 프로젝트가 있다면 어떤 프로젝트를 해보고 싶은지 또 어떤 역할을 하고 싶은지 이유와 함께 작성해 주세요. ' + '<br/>' + req.body.textarea05.replace(/(?:\r\n|\r|\n)/g, '<br/>').replace("<", "&lt;").replace(">", "&gt;").replace("&lt;br/&gt;", "<br/>");
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

router.get('/drive', function (req, res) {
    console.log('[GET] /unifox/drive')
    res.download(__dirname + '/../구글_드라이브_사용법.pdf');
});

module.exports = router;