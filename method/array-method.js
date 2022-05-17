const dummyText = ["Lorem", "Ipsum", "is", "simply", "dummy", "text", "of", "the", "printing", "and", "typesetting", "industry.", "Lorem", "Ipsum", "has", "been", "the", "industry's", "standard", "dummy", "text", "ever", "since", "the", "1500s,", "when", "an", "unknown", "printer", "took", "a", "galley", "of", "type", "and", "scrambled", "it", "to", "make", "a", "type", "specimen", "book.", "It", "has", "survived", "not", "only", "five", "centuries", "but", "also", "the", "leap", "into", "electronic", "typesetting,", "remaining", "essentially", "unchanged.", "It", "was", "popularised", "in", "the", "1960s", "with", "the", "release", "of", "Letraset", "sheets", "containing", "Lorem", "Ipsum", "passages", "and", "more", "recently", "with", "desktop", "publishing", "software", "like", "Aldus", "PageMaker", "including", "versions", "of", "Lorem", "Ipsum.","been", "the", "industry's", "standard", "dummy", "text", "ever", "since", "the", "1500s,", "when", "an", "unknown", "printer", "took", "a", "galley", "of", "type", "and", "scrambled", "it", "to", "make", "a", "type", "specimen", "book.", "It", "has", "survived", "not", "only", "five", "centuries", "dummy", "text", "of", "the", "printing", "and", "typesetting", "industry.", "Lorem", "Ipsum", "has", "been", "the", "industry's", "standard", "dummy", "text", "ever", "since", "the", "1500s,", "when", "an", "unknown", "printer", "took", "a", "galley", "of", "type", "and", "scrambled", "it", "to", "make", "a", "type", "printer", "took", "a", "galley", "of", "type", "and", "scrambled", "it", "to", "make", "a", "type", "specimen", "book.", "It", "has", "survived", "not", "only", "five", "centuries", "but", "also", "the", "leap", "into", "electronic", "typesetting,", "remaining", "essentially", "unchanged.", "It"];

// Todo : Q-1. "of" 라는 문자열이 몇번 나오는지 console에 출력하세요.
// let count = 0;
// for(let i = 0; i < dummyText; i++){
//   if(dummyText[i] === 'of'){
//     count++;
//   }
// };
// console.log(count);

let count = 0;
let result = dummyText.filter(function(index) {
  if(index === "of"){
    count++;
    return count;
  }
});
console.log(result);
// => filter는 참일 경우 배열로 반환한다.

/*
let test1 = dummyText.filter(index => {
  if(index === 'of'){
    count++;
    return count;
  }
});
// => result와 같음

let test2 = dummyText.filter(index => index === 'of');
// => 더 축약하면 이렇게 됨

 */


// Todo : Q-2. "dummy" 라는 문자열 원소를 모두 "sementic" 이라는 단어로 바꾸세요.
// ★★★★ map() 써보기 ★★★★
// map => '배열 재조립'

let mapping = dummyText.map(function(value, index) {
  if(value === 'dummy'){
    value = 'sementic';
  };
});


let text = dummyText.map(value => {if(value === 'dummy') {value = 'sementic'} });
// mapping을 줄여서 쓰면 이렇게 된다. (화살표 함수 쓰기)



// Todo : Q-3. "the" 라는 원소 다음에 "web" 이라는 단어가 추가되도록 배열을 조정하세요.

dummyText.forEach(function(value, index) {
  if(value === 'the'){
    dummyText[index+1] = 'web';
  }
});
// console.log(dummyText);



// Todo : Q-5. 배열 속 원소들의 총 글자 갯수를 console에 출력하세요.

// 1. reduce()를 써보자
const countTextLength = dummyText.reduce(function(pre, cur) { return pre + cur; } );
// console.log(countTextLength);
console.log(countTextLength.length);

// join()도 한 번 사용해보기
const textJoin = dummyText.join('');
// console.log(textJoin);
console.log(textJoin.length);