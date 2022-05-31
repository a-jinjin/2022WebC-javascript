function a(){
  return 'function';
}
// function
// ==> 일반적인 함수. return값인 'function'을 반환한다.

async function b() {
  return 'async';
}
// { 'async' }
// ==> async를 붙이면 함수는 promise를 반환한다.
// ==> b의 promise의 resolve값으로 'async'가 들어있다.
// ==> promise를 반환한다 == then()을 사용할 수 있다.

console.log(a());
console.log(b());

b().then((result) => {
  console.log(result);
})
// async
// 여게서 result는 b의 promise의 resolve값
// b의 promise의 resolve에 있던 'async'을 출력한 것.


function delay(sec) {
// delay라는 함수

  return new Promise((resolve, reject) => {
  // delay함수는 Promise를 리턴함
  // resolve, reject는 Promise의 반환값
  // 성공하면 resolve, 에러가 나면 reject를 반환한다.
    
    setTimeout(() => {
    // setTimeout은 대표적인 비동기 함수
      resolve(new Date().toISOString());
      // Promise는 newDate를 sec*1000초 뒤에 실행한다.
    }, sec * 1000);

  })
}
// delay(3) ==> 3초 뒤에 newDate를 실행

async function asyncA(){
  // 비동기 함수 asyncA

  delay(3).then((time) => {
  // delay(3) ==> 3초 후에 newDate를 실행한다.
    console.log(time);
    // 콘솔에 출력
  });
    return 'asyncA';
    // asyncA 함수는 'asyncA'를 반환한다.
}
// delay의 리턴값을 출력하는 asyncA함수
// asyncA의 리턴값은 asyncA이다.

asyncA().then((result) => {
  console.log(result);
})
// result는 A의 promise(delay(3))의 리턴값(time, === newDate)
// return을 먼저 출력하고 result를 출력한다.
// 따라서, 
// 'asyncA'가 먼저 찍히고, 3초 뒤에 newDate가 출력된다.
// ===> 1. return을 먼저 한 뒤 2. resolve를 실행


// ** await == 1. resolve값을 기다렸다가 2. return을 하도록 바꿔주는 것
async function asyncB(){
  await delay(3)
  return 'asyncB';
}

asyncB().then((result) => {
  console.log(result); // 3초 뒤에 asyncB의 return 출력
})

// delay는 3초 뒤에 newDate를 출력
// dealy(3) ==> 3초 뒤에 newDate를 출력
// await delay(3) ==> 3초 뒤에 newDate를 출력하는걸 기다렸다가 asyncB의 return을 출력해라.
// asyncB의 return은 'asyncB'
// 따라서,
// 3초 뒤에 newDate를 출력하고 바로 이어서 'asyncB'를 출력한다.
