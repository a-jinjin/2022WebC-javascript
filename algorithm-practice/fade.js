let value = 0;
// 변수 선언과 동시에 값을 대입했다 == "초기화"했다.
// ==> init, initialize

// value = 100;
// 값을 새로 할당했다 == "assignment"
// "=" 대입 연산자를 활용해 할당함


// ==> 여기까지가 fade in의 '기본형'
// 값이 0이었던 변수에 100을 대입한 것
// console.log(value);



// setInterval(function{}, interval);
// 첫 번째 파라미터(매개변수)가 함수다.
// 매개변수 자리에 실행할 '함수'가 자리잡은 것을 '콜백함수'라고 한다.
// ==> callback function
// callback function hell ==> 콜백함수 시련이 오게 될 것.

let interval = 100;
const timer = setInterval(function(){
// ==> 함수 리터럴 : 함수를 변수에 담는 패턴 (== 함수 표현식)
// setInterval을 끄기 위한 clearInterval함수를 사용하기 위해 setInterval을 식별할 필요가 있다. 그래서 변수에 setInterval 함수를 대입한 것!
// 변수 timer는 함수 setInterval을 가리킨다.

  console.log(value);
  // value가 증가하는지 콘솔에서 확인하겠다.
  value++;
  // 1초마다 value값이 1씩 증가했으면 좋겠다.

  if(value > 100){
    clearInterval(timer);

  }
}, interval);