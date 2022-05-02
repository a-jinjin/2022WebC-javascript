console.log(1=='1');
// ==> 문제. 숫자 1과 문자 1을 true라고 해버린다.

console.log(1==='1');
// ==> 이게 맞음. 당연히 false가 나와야된다.


/*

** 비교 연산자 **

1. '==' 동등 연산자 : 옛날에 쓰던 방식. 숫자와 문자를 구분하지 못한다. 완전 똥멍청이. 사용하지 말 것. 완전 비권장

2. '===' 일치 연산자 : 데이터 타입까지 모두 체크를 한다. 숫자와 문자를 구분할 수 있다. 

*/


let a = 1;
// let b = 2;
let b = '2';

console.log(a===b);
// ===> flase가 나옴. (같지 않다는 뜻.)
console.log(typeof a === typeof b);
// ===> true가 나옴. (같다는 뜻.)
// 'typeof' ==> 데이터의 '타입'을 알려주는 것.
// a와 b는 모두 숫자타입의 데이터가 대입되어있기 때문에 true가 나온다.
console.log(typeof b);

let changeN = Number(b);
console.log(typeof changeN);
// Number() ==> ()의 데이터타입을 number로 바꿔주는 것
let changeS = String(a);
console.log(typeof changeS);
// String() ==> ()의 데이터타입을 string으로 바꿔주는 것

/*
자바스크립트가 지원하는 형변환 메서드가 있다.
파스칼 케이스로 되어있다. (첫번째 글자가 대문자)
String
Number
문자열 ==> 숫자로 바꾸는 경우가 굉장히 많으니 꼭 알아두기.
문서 자체가 문자로 이루어진 데이터다보니 생기는 현상.
 */


/*
** 형 변환 **
==> 데이터 타입을 바꾸는 행위

사용자가 입력하는 데이터는 '숫자일리가 없다.'
사용자의 입력행위 (로그인 등등)는 거의 대부분 문자열로 input행위가 일어난다.
*/
