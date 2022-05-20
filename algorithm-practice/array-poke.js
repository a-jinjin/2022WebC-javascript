const pokeArr = [
  "무우마",
  "안농",
  "마자용",
  "키링키",
  "피콘",
  "쏘콘",
  "노고치",
  "글라이거",
  "강철톤",
  "블루",
  "그랑블루",
  "침바루",
  "핫삼",
  "단단지",
  "헤라크로스",
  "포푸니",
  "깜지곰",
  "링곰",
  "마그마그",
  "마그카르고",
];

// Q1. '안농'부터 다섯개를 추출
console.log(pokeArr.indexOf("안농")); //'안농'은 1에 있음
console.log(pokeArr.slice(1, 6));

// Q2. '강철톤'이 있나? 있으면 몇 번째?
console.log(pokeArr.includes("강철톤")); // true
if (pokeArr.includes("강철톤") === true) {
  let ton = pokeArr.indexOf("강철톤");
  console.log(`강철톤은 ${ton}번째에 있음`);
} else {
  console.log("강철톤은 없음");
}

// 데이터 가공
// pokeArr[0] = { type: 0 };
// console.log(pokeArr[0]);
const hera = pokeArr.indexOf("헤라크로스");
pokeArr[hera] = {
  type: "벌레",
  category: "외뿔포켓몬",
  status: "벌레의 알림과 근성",
  secret: "자기괴신",
};
console.log(pokeArr);
