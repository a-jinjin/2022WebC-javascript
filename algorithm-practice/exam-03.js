
let current = 0;

let timer = setInterval(function(){
// 자바스크립트의 '코어 매서드'
// clearInterval()과 세트!

  console.log(current);
  current++;
  if(current === 60){
    console.log('1분이 경과되었습니다');

    clearInterval(timer);
  }

}, 100);
// 1000 == 1초
// interval을 종료시키는 방법 == clearInterval();

// 익명함수
// setInterval은 '익명함수'이다.
// ==> 식별자가 없어서 사용할 수 있다.
// setInterval(function(){}, 1000); 까지만 써도 제대로 작동한다.
// setInterval을 종료시키기 위해 clearInterval이 사용되는데,
// setInterval에 이름이 없기 때문에 식별해서 종료시켜줄 수가 없다.
// ====> 따라서 let a = setInterval과 같이 식별하기 위해 변수를 달아 clearInterval(a);로 종료시켜준다.