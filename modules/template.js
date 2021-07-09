var operation = {
        getTemplate: function(title, description, retryOrTry) {
        return `
        <!DOCTYPE html>
        <html lang="kr">
        <head>
            <meta charset="UTF-8">
            <title>선택장애해결기</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
            <link rel="stylesheet" href="css/style.css">
            <script src="random.js" type="text/javascript"></script>
        </head>
        <body>
            <a href="/"><button type="button">${title}</button></a><br>
            <a href="/?id=eat"><button type="button" class="btn btn-secondary">음식완전랜덤뽑기</button></a>
            <a href="/?id=lotto"><button type="button" class="btn btn-secondary">로또번호랜덤뽑기</button></a>
            <p>고민되는 품목들을 열거해주세요</p>
            <p>띄어쓰기로 각 품목들을 구분해주세요</p>
            <p>EX) 자갈치 꼬깔콘 다이제 초코송이</p>
            <form action="/?id=res" method="post">
                <div class="mt-4 mx-auto search-bar input-group mb-3">
                    <input name="id" type="text" class="form-control rounded-pill" placeholder="품목 입력" aria-label="Recipient's username" aria-describedby="button-addon2">
                </div>
                <input type="submit" value=${retryOrTry}>
            </form>
            ${description}
            </body>
        </html>
        `
    }
}

module.exports = operation;