let lee = null;
// null === '존재는 하지만 비어있는 값'
// ==> 프로그래밍에만 있는 개념. '빈공간'
// ==> null이라는 값이 존재한다 === '아직 값이 정해지지 않았다'는 뜻

console.log(typeof lee);
// ==> object라고 뜸.

/*
null이라는 값은 number, string, object와 같은 레벨의 '데이터 타입'이다.
그러나 typeof로 type체크를 하면 'object'를 뱉어내는 이상한 현상이 일어난다.
====> 아주 대표적인 자바스크립트의 '버그'
====> 없애지 못하는 버그 중 하나다.

null과 ''(혹은 "")
비어있는 값과 비어있는 문자열
====> 둘은 전혀 다른 개념이다.
*/



let arr = ['떡볶이', '튀김', '순대', '쿨피스'];

console.log(typeof arr);
// ==> object라고 뜸.
// ==> 이건 버그가 아님!

/*
array(배열)은 사실 객체이다.
객체에서 순서만 필요할 때 쓰려고 나누어놓은 것.
*/

console.log(Array.isArray(arr));
// ==> true라고 뜸. 'array 맞아'

/*
배열이 맞는지 확인하고싶다면 Array.isArray(배열)을 사용하는 것이 좋다.
*/


/*
배열의 원래 본체는 객체다.
그래서 타입체크를 다르게 해놓은 것이 있다. ==> .isArray()매서드

** 'is'로 시작하는 매서드는 암묵적으로 '불리언'으로 리턴하게끔 되어있다.
ex)
console.log(tyoeof a); 문자열 'object'라는 단어를 뱉어낸다.
console.log(isArray(a)); 불리언 타입 'true'로 뱉어낸다.
*/