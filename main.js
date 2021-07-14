const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');
const temp = require('./modules/template.js');
const rand = require('./modules/random.js');



function output(list, string, res) {
    fs.readFile('./css/style.css', 'utf-8', (err, css) => {
        var template = temp.getTemplate(css, `${list}`, string);
        res.writeHead(200);
        res.end(template);
    });
}

var app = http.createServer(function(req, res) {
    // url 가져오기
    const baseURL = 'http://' + req.headers.host + '/';
    var _url = new URL(req.url, baseURL);
    var queryData = _url.searchParams.get('id');
    // 메인 홈페이지 방문
    if (_url.href == baseURL) {
        output([], '랜덤뽑기', res);
    }
    // 음식완전랜덤뽑기
    else if (queryData == 'eat') {
        // 음식 리스트 불러와서 랜덤처리
        fs.readFile('./data/foods', 'utf-8', (err, data) => {
            var foodlist = data.split(' ');
            var pickedfood = rand.getRandom(foodlist, foodlist.length);
            output(pickedfood, '랜덤뽑기', res);
        });
    }
    // 로또번호랜덤뽑기
    else if (queryData == 'lotto') {
        var lottolist = [0, 0, 0, 0, 0, 0];
        for(i = 0; i < 6; i++) {
            lottolist[i] = rand.getRandomNum(1, 46);
        }
        output(lottolist, '랜덤뽑기', res);
    }
    // 리스트에서 랜덤 뽑기
    else if (_url.pathname == '/res') {
        var body = '';
        req.on('data', (data) => {body += data});
        req.on('end', () => {
            var datalist = qs.parse(body)['id'];
            datalist = datalist.split(' ');
            var picked = rand.getRandom(datalist, datalist.length);
            output(picked, '다시뽑기', res);
        });
    }
    // 피드백 받기
    else if (_url.pathname == '/feedback') {
        var body = '';
        req.on('data', (data)=>{body+=data});
        console.log(body);
        req.on('end', () => {
            var title = qs.parse(body)['title'];
            var description = qs.parse(body)['description'];
            fs.writeFile(`./feedback/${title}`, description, 'utf-8', (err) => {
                res.writeHead(200);
                res.write(`<script> alert('Feedback Completed');
                window.location.href="${baseURL}"; </script>`);
            });
        });
    }
    else {
        res.writeHead(404);
        res.end('Not Legal Access');
    }
});
app.listen(3000);
