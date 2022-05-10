// * 선언 declaration
function typeA(a, b) {
  console.log(a+b);
}
// ==> 전역 스코프 global
// ==> 기명함수 (typeA라는 이름이 있는 함수) 선언방식

typeA(2, 3);



// * 익명함수 annonymous function / 함수 리터럴 literal(값을 직접 새긴다/쓴다)
// * 함수 표현식 function expression
const typeB = function(a, b) {
  console.log(a+b);
}
// ==> 익명함수에 식별자(스티커)를 붙인 것
// ==> 권장하는 방식. (제작자는 알지만 외부사람들은 알아보기 힘들기 때문에!)

typeB(1, 2);
// 호출 방식은 기명함수와 같다.



// * 화살표 함수 arrow function
// * 구조는 함수 리터럴(표현식)과 같다. 같은 기능을 한다.
// ==> 하지만 더 '축약형' (개발자들이 귀찮아해서)
// 특정 작동때문에 만들어진 최신 문법 중 하나.
const typeC = (a,b) => {console.log(a+b)}
// ==> 비교연산자랑 헷갈리지 않기 !!!! : 비교연산자는 >=
const typeD = function(a,b) {console.log(a+b)}
// ==> typeC와 typeD는 같은 내용!



// 함수의 매개변수가 하나일때는 소괄호마저 안써도 된다.
const typeE = a => {console.log(a*a)}
const typeF = function(a) {console.log(a*a)} // 같은 것!



// * 즉시 실행 함수
// (function() {})();
// ==> 선언이고 호출이고 모르겠고 '즉시 실행'하겠다.
// ==> 문서 시작할 때 볼 수 있다. 
// ====> 거의 볼 일이 없기는 할 것. 그래도 존재는 알아두기!!



let test;
// test.addEventListener('type', function(){});
// 함수의 매개변수 자리에 함수가 들어가있는 것 ==> '콜백함수'**
// ==> 콜백함수는 '익명함수'가 기본이다.
// ==> 매우 많이 사용하는 함수이기때문에, '눈에 익힐' 필요가 있다.

// test.addEventListener('test', testFunction); 
// ==> 콜백함수를 기명함수로 사용할 경우에는 function()같이 소괄호를 쓰지 않는다!
// function testFunction(){

// }
// ==> 44와 같은 콜백함수를 안에 넣지 않고 밖으로 빼낸 형태.
// ==> 콜백함수를 '기명함수'로 바꾼 것!