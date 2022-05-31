
function delay(sec){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(new Date().toISOString());
    }, sec * 1000);
  });
}


// delay(1).then((result) => {
//   console.log(1, result);

//   delay(1).then((result) => {
//     console.log(2, result);
//   })

// })
// ==> 콜백 패턴이랑 별로 다를 것이 없음.


// ** 콜백 안에서 콜백하는 방식이 X / 콜백을 '순차적으로 지정'
delay(1).then((result) => {
  console.log(1, result);
  return delay(1);
  // 첫 번째 반환 : 1초 뒤에 1 실행

}).then((result) => {
  console.log(2, result);
  return delay(1);
  // 두 번째 반환 : 1초 뒤에 2 실행

}).then((result) => {
  console.log(3, result);
  // 세 번째 반환 : 1초 뒤에 3 실행
  // return을 하지 않고 then을 하면?

}).then((result) => {
  console.log(4, result);
  // undefined가 뜬다.
  // ==> return값이 없어서 resolve하지 않았기 때문!
})

