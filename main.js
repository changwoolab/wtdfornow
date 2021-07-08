const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');
const temp = require('./modules/template.js');


var app = http.createServer((req, res) => {
    // url 가져오기
    const baseURL = 'http://' + req.headers.host + '/';
    var _url = new URL(req.url, baseURL);
    var queryData = _url.searchParams.get('id');
    // 메인 홈페이지 방문
    if (_url.href == baseURL) {
        var title = '어떤게 고민이세요?';
        var template = temp.getTemplate(title, '', '랜덤뽑기');
        res.writeHead(200);
        res.end(template);
    }
    else {
        res.writeHead(404);
        res.end('Not Legal access');
    }
});
app.listen(3000);
