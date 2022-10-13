//1. express 불러오기 -> 불러와서 express라는 변수에 대입.
const express = require('express');

//2. express 실행
// express 함수를 호출해서 만들어진 express aplication이다.
const app = express();

const PORT = 8080; // 포트번호

app.set('view engine', 'ejs'); //app에 view engine을 ejs로 설정
app.use('/views', express.static(__dirname + '/views')); // ejs 파일을 저장할 views 폴더의 경로

//브라우저가 ip:port/stztic/image/cat.jpg
//해당 파일을 ip:port/static/image/cat.jpg 에 존재하는지 찾음
app.use('/static', express.static(__dirname + '/static'));

//여기서 / 는 경로이다. 주소 경로를 의미함. 두번째 인자로는 함수를 받는다.
//함수가 또 인자를 받는다. 보통 req res를 많이 쓴다.
//res.send(')로 메세지를 한다.
// 이 과정을 Routing(라우팅) -> 요청(request)과 응답(response) 경로를 설정한다. 
// 이 경로를 설정하는 것을 "Routing"이라고 한다.
// 그리고 응답이 들어왔을 때 보낼 것이다. 무엇을? send를 send 안에 있는 메서지를 .
//클라이어트가 get  요청을 보내면 -> 응답으로 hello express 메서지를 띄운다.

//get 요청 : 리소스 검색하고 반환받기 위해 사용되는 메서드
app.get('/', function(request, response){
    // 그리고 응답이 들어왔을 때 보낼 것이다. 무엇을? send를 send 안에 있는 메서지를 .
    //클라이어트가 get  요청을 보내면 -> 응답으로 hello express 메서지를 띄운다.
    response.send('hello express')
})

app.get('/test', function (request, response) {
//   response.send('test page');
  response.render('test');
})

//브라우저가 test2에 들어왔을 때 응답.
app.get('/test2', function (request, response) {
    //   response.send('test page');
      response.render('test2');
    })

//3. 로컬 서버 동작
//app.linsten도 매개변수(인지)를 두 개 받는다.
//서버를 실행시켰을 떄 이 포트번호로 실행시킨다.
app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
  });

