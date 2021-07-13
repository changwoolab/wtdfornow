var operation = {
        getTemplate: function(css, description, retryOrTry) {
        return `
        <!DOCTYPE html>
        <html lang="kr">
        <head>
            <meta charset="UTF-8">
            <title>선택장애해결기</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
            <link rel="stylesheet" href="/css/style.css">
            <style>
                ${css}
            </style>
        </head>
        <body>
            <a href="/" class="title"><h1 class="title">선택장애해결기</h1></a><br>
            <div class="container">
                <a href="/?id=eat"><button type="button" class="btn btn-secondary">음식완전랜덤뽑기</button></a>
                <a href="/?id=lotto"><button type="button" class="btn btn-secondary">로또번호랜덤뽑기</button></a>                
                <div class="howtouse">
                    <p>고민되는 품목들을 열거해주세요</p>
                    <p>띄어쓰기로 각 품목들을 구분해주세요</p>
                    <p>EX) 자갈치 꼬깔콘 다이제 초코송이</p>
                </div>
                <form action="/res" method="post">
                    <div class="mt-4 mx-auto search-bar input-group mb-3">
                        <input name="id" type="text" class="form-control rounded-pill" placeholder="품목 입력" aria-label="Recipient's username" aria-describedby="button-addon2">
                    </div>
                    <div class="d-grid gap-2 col-6 mx-auto">
                        <button class="btn btn-primary" type="submit">${retryOrTry}!</button>
                    </div>
                </form>
                <div class="result">
                    <h5>결과</h5>
                    <h1 class="des">${description}</h1>
                </div>
                <p>피드백 주기</p>
                <form action="/feedback" method="post">
                    <div>
                        <input type="text" name="title" placeholder="피드백 제목">
                    </div>
                    <div>
                        <textarea name="description" placeholder="피드백 내용"></textarea>
                    </div>
                        <input type="submit" value="제출">
                </form>
                <br><br><br><br>
                <p>ChangWoo's First Website.</p>
                <p>If you want to contact me, please send an email to "cwyoo01@naver.com"</p>
            </div>
        </body>
        </html>
        `
    }
}

module.exports = operation;