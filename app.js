const express = require("express");
const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="ko">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            여기는 루트입니다
        </body>
    </html>
    `);
});

app.get("/login", (req, res) => {
    res.send("로그인 페이지 입니다.");
});

app.listen(4000, function() {
    console.log("서버 가동쓰!!");
});