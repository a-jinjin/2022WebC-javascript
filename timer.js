// * let a = 0
// * 일정시간이 지나면 a는 1씩 증가한다.
// * a가 10이 되면 증가하는 것이 멈춘다.


// for(a = 0; a <= 10; a++){
//   console.log(a);
// }


// let a = 0;

// const timer = setInterval(function(){
  
//   if(a >= 10){
//     clearInterval(timer);
//   } else {
//     a++;
//     console.log(a);
//   }

// }, 1000);


/*
** 함께 해보기

setInterval() : 인터벌을 쓰면 될 것 같은데?
시도를 한 번 해보자 (=/= 한번에 안써진다 힝구)

1. 1씩 증가시킨다 => 검색 ====> a++ 하면 된다.
2. '주기적으로'는 어떻게? => 검색 ====> setInterval();
3. setInterval();은 어떻게 쓰는건데? => 검색

*/

let b = 0;
// console.log(b+1);

let test = setInterval(function(){
  // console.log(b);
  // ==> b가 0이니까 계속 0만 찍어준다.
  b++;
  // ==> b++ / ++을 하면 1씩 증가가 된다.
  console.log(b);
  // ==> 확인 완료

  if(b === 10){
    // console.log('hello 10!')
    // ==> 조건식은 잘 작동한다는 것을 확인
    // ?? 그럼 어떻게 setInterval을 종료하나? ==> 검색
    clearInterval(test);
    // ==> clearInterval을 사용하면 된다는 것을 확인
    // ==> 식별자가 필요하다는 것을 알게됨 ==> setInterval을 test에 대입해 식별한다.
    
    // ** 10까지 올라가면 다시 0이 되어서 무한반복하게 가능?
    b = 0;
    console.log(b);
    // ==> 0이 되기는 하는데 종료되어버린다.
    // ==> 위아래로 console.log를 움직여 본 결과 clearInterval을 지우면 된다는 것을 확인!
  }
},1000);