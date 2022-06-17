// 1~6까지의 숫자중 랜덤으로 하나의 숫자가 출력된다.
// Math.random() ==> 리턴이 소숫점이 있는 정수
// 함수 => 함수 호출로


// console.log(Math.random() * (2-1) + 1);

// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }

// let numOne = getRandomArbitrary(1, 2);
// console.log(numOne);

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   // floor : 소숫점 자리를 버린다(반내림). 1.6 ==> 1
//   // ceil : 소숫점 자리를 반올림한다. 1.6 ==> 2
//   return Math.floor(Math.random() * (max - min)) + min;
//   // ==> 최대값은 제외하고 최솟값은 포함할 것
// }

// let numTwo = getRandomInt(1,2);
// console.log(numTwo);
// // ==> 최대값이 제외되었기때문에 무조건 1만 출력됨

// function getRandomIntMax(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);

//   return Math.floor(Math.random() * (max - min + 1)) + min;
//   // 최대값과 최솟값 모두를 포함
// }

// let numThree = getRandomIntMax(1,2);
// console.log(numThree);
// // ==> 1과 2 모두 나온다.

function randomDice(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

let diceNumber = randomDice(1, 6);
console.log(`주사위 숫자는 ${diceNumber}입니디.`);

for(let i = 0; i < diceNumber; i++) {
  console.log(i);
}