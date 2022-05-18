let time = 480;
let min = '';
let sec = '';

// const timer = setInterval(function(){
//   time--;
//   console.log(time);

//   if(time === 0){
//     console.log('1분 경과. 종료합니다.');
//     clearInterval(time);
//   }
// }, 1000);

// ==> 1분으로 잘 되는지 테스트 : 잘 작동함!

// *** parsint와 %, /로 1분 10초를 출력해보자.
console.log(time/60); //분
// => 소수점을 제거하기 위해 parsInt를 사용한다.
console.log(parseInt(time/60)); //분
console.log(time%60); //초

const timer = setInterval(function(){
  
  if(time%60 < 10){
    console.log(`0${parseInt(time/60)} : 0${time%60}`);
    time--;
  }else{
    console.log(`0${parseInt(time/60)} : ${time%60}`);
    time--;
  }

  if(time === 0){
    console.log('1분 경과. 종료합니다.');
    clearInterval(timer);
  }
}, 1000);
