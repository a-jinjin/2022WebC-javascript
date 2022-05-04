let a = 1;
// console.log(a);

// function b () {
// 함수 b의 목적은 'a'의 값을 콘솔에 찍어주는 것이다. 
// return값은 없다. ==> undefind 값이 리턴된다.

  // console.log(a);
  // let c = '토마토';
// }

// b();
// 콘솔을 찍은 것이 아니고 함수를 호출한 것.
// 하지만 함수b는 콘솔을 찍는 기계이기 때문에, 
// 함수b를 호출하면 콘솔이 찍힌다.

// console.log(c);
// c is not definde == c는 정의되지 않았다.
// ====> c는 '지역변수'



// ★★ 지역변수 ★★
/*
let a는 'global 변수'
==> 글로벌 스코프, 전역변수. 문서 안에서는 언제든 꺼내 쓸 수 있다.

let c는 'local 변수'
==> 지역변수. 리턴하지 않으면 절대로 꺼내서 쓸 수 없다.
*/



// function d() {
  
//     console.log(a);
//     let e = '토마토';
//     return e;
//   }
  
//   console.log(d());
// ==> 지역변수를 값으로 가져오기 위해서는 return이 필요하다.


function d() {
  
  console.log(a);
  var e = '토마토';
}

console.log(d());