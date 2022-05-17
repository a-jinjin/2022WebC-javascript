const pokemon = require('pokemon'); // pokemon API

console.log(typeof(pokemon)); // object
// console.log(pokemon);
console.log(pokemon.getName(1, 'ko')); // 이상해씨
console.log(pokemon.getId('이상해씨', 'ko')); // 1
console.log(pokemon.all('ko')); // ('ko')언어로 된 내용물 전부 가져오기
console.log(pokemon.random('ko')); // 랜덤으로 하나 가져오기 ('ko'언어로 된 것)

let randomPoke = pokemon.random('ko');
// console.log(randomPoke);

if (pokemon.getId(randomPoke, 'ko')%2 === 0) {
  console.log(pokemon.getId(randomPoke, 'ko'))
  console.log(randomPoke+'의 도감 번호는 짝수');
}else{
  console.log(pokemon.getId(randomPoke, 'ko'))
  console.log(randomPoke+'의 도감 번호는 홀수');
}

console.log(pokemon.getId('두두', 'ko'));


// 이름이 가장 긴 포켓몬 찾기
console.log(pokemon.all('ko').length); // 전체 포켓몬 905개

//   // from() => 문자열을 쪼갠다
let one = pokemon.getName(1, 'ko');
console.log(Array.from(one).length); // one = 이상해씨, length는 4

// const arr = [ ];
for(let i = 1; i < pokemon.all('ko').length; i++) {
  let pokeName = pokemon.getName(i, 'ko');
  let pokeLenght = Array.from(pokeName).length;
  
  // arr.push(pokeLenght);

  if(pokeLenght >= 6){
      console.log(`이름이 가장 긴 포켓몬은 : ${pokeName}`);
    }
  }
  // arr.sort();
  // console.log(arr.at(-1));
  // 포켓몬 이름의 길이 중에서는 6이 가장 큰 숫자