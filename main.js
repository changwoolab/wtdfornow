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
    // 음식완전랜덤뽑기
    else if (queryData == 'eat') {
        var body = '';
        req.on('data', (data) => {body += data});
        req.on('end', () => {
            var post = qs.parse(body);
            
        });

        var title = '어떤게 고민이세요?';
        var template = temp.getTemplate(title, 'aaa', '다시뽑기');
        res.writeHead(404);
        res.end(template);
    }
    // 로또번호랜덤뽑기
    else if (queryData == 'lotto') {
        var title = '어떤게 고민이세요?';
        var template = temp.getTemplate(title, 'aaa', '다시뽑기');
        res.writeHead(404);
        res.end(template);
    }
    // 리스트에서 랜덤 뽑기
    else if (queryData == 'res') {
        var title = '어떤게 고민이세요?';
        var template = temp.getTemplate(title, 'aaa', '다시뽑기');
        res.writeHead(404);
        res.end(template);
    }
    else {
        res.writeHead(404);
        res.end('Not Legal Access');
    }
});
app.listen(3000);
