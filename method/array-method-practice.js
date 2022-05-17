const dummyText = ["Lorem", "Ipsum", "is", "simply", "dummy", "text", "of", "the", "printing", "and", "typesetting", "industry.", "Lorem", "Ipsum", "has", "been", "the", "industry's", "standard", "dummy", "text", "ever", "since", "the", "1500s,", "when", "an", "unknown", "printer", "took", "a", "galley", "of", "type", "and", "scrambled", "it", "to", "make", "a", "type", "specimen", "book.", "It", "has", "survived", "not", "only", "five", "centuries", "but", "also", "the", "leap", "into", "electronic", "typesetting,", "remaining", "essentially", "unchanged.", "It", "was", "popularised", "in", "the", "1960s", "with", "the", "release", "of", "Letraset", "sheets", "containing", "Lorem", "Ipsum", "passages", "and", "more", "recently", "with", "desktop", "publishing", "software", "like", "Aldus", "PageMaker", "including", "versions", "of", "Lorem", "Ipsum.","been", "the", "industry's", "standard", "dummy", "text", "ever", "since", "the", "1500s,", "when", "an", "unknown", "printer", "took", "a", "galley", "of", "type", "and", "scrambled", "it", "to", "make", "a", "type", "specimen", "book.", "It", "has", "survived", "not", "only", "five", "centuries", "dummy", "text", "of", "the", "printing", "and", "typesetting", "industry.", "Lorem", "Ipsum", "has", "been", "the", "industry's", "standard", "dummy", "text", "ever", "since", "the", "1500s,", "when", "an", "unknown", "printer", "took", "a", "galley", "of", "type", "and", "scrambled", "it", "to", "make", "a", "type", "printer", "took", "a", "galley", "of", "type", "and", "scrambled", "it", "to", "make", "a", "type", "specimen", "book.", "It", "has", "survived", "not", "only", "five", "centuries", "but", "also", "the", "leap", "into", "electronic", "typesetting,", "remaining", "essentially", "unchanged.", "It"];

// Todo : Q-1. "of" 라는 문자열이 몇번 나오는지 console에 출력하세요.
const dummyFilter = dummyText.filter(value => value === 'of');
console.log(dummyFilter);
console.log('of는 '+dummyFilter.length+'번 나온다.');



// Todo : Q-2. "dummy" 라는 문자열 원소를 모두 "sementic" 이라는 단어로 바꾸세요.
/*
1. dummyText는 dummy라는 문자열 원소를 갖고있나?
2. 갖고있다면 몇 개 갖고있나?
3. dummy라는 원소의 인덱스 값을 가져온다.
4. 해당 인덱스를 삭제하고
5. 그 위치에 'sementic'이라는 원소를 대입한다.
*/

// dummy를 sementic으로 바꾸는 과정을 반복한다 == for문을 사용해본다. 

// for(i = 0; i < dummyText.length; i++){
//   if(dummyText[i] === 'dummy'){
//     console.log(i+'번째에 dummy가 들어있다');
//     dummyText[i] = 'sementic';
//   }
// };
// console.log(dummyText);

// for문으로 반복하면 모두 바꿀 수 있다.
// => forEach로도 가능하지 않을까?


// console.log(dummyText.includes('dummy')); //true
console.log(dummyText.indexOf('dummy')); 
//4번 인덱스에 dummy라는 원소가 있다.

const dummy = dummyText.indexOf('dummy');
// 찾아온 dummyText의 인덱스 4를 변수로 선언해줬다.
console.log(dummy); // 현재 dummy = 4가 대입되어있음.
dummyText[dummy] = 'sementic';
console.log(dummyText);
// dummyText의 dummy번째 원소가 'sementic'으로 바뀌었다. 잘 됨!
// ==> 하지만 이 방법으로는 가장 첫번째 dummy만 sementic으로 변경된다. 
// ==> 모두 변경하려면 반복문이 필요하다.

// for는 사용해봤으니 forEach도 사용해보기.
const dummyEach = dummyText.forEach((textValue, index) => {
  if(textValue === 'dummy'){
    console.log(index);
    // 'dummy'라는 값을 갖고있는 index를 콘솔에 출력
    // 19, 95, 126, 141번째에 있다고 출력된다.
    // ==> 이것들에 'sementic'을 대입해 바꿔준다.
    dummyText[index] = 'sementic';
  }
});
console.log(dummyText);



// Todo : Q-3. "the" 라는 원소 다음에 "web" 이라는 단어가 추가되도록 배열을 조정하세요.
/*
1. the라는 원소의 인덱스값을 찾는다.
2. 1의 인덱스값에 +1을 한 인덱스에 'web'을 대입
*/
for(let i = 0; i<dummyText.length; i++){
  
  if(dummyText[i].includes('the') === true){
    // console.log(i+'번째에 the가 있다.');
    dummyText.splice(i, 1, 'the', 'web');
    // 배열의 인덱스 i로부터 하나를 삭제(=== i를 삭제) / 'the'와 'web'을 추가 
  }

}
console.log(dummyText);



// Todo : Q-5. 배열 속 원소들의 총 글자 갯수를 console에 출력하세요.
console.log(Array.from(dummyText[0]).length);
// ==> 를 반복해서 전부 더해버리면?
// ==> reduce()

// ==> reduce()를 쓰려면 배열로 반환받아야 한다.
// ==> 배열이 필요하다.
const blankLengthArr = [ ];
// 빈 배열을 만들어준다. (for로 반복한 값들을 넣어줄 빈 배열)

for(let i = 0; i < dummyText.length; i++){
  // console.log(Array.from(dummyText[i]).length);
  blankLengthArr.push(Array.from(dummyText[i]).length);
  // blankLengthArr(빈 배열)의 마지막에 dummyText요소 하나하나의 글자갯수를 추가해준다.
  // console.log(blankLengthArr); // 잘 작동하는 것을 확인
};
console.log(blankLengthArr);

const dummyLength = blankLengthArr.reduce((preValue, curValue) => preValue+curValue);
// reduce()를 써서 배열 안의 모든 값을 더해준다.

console.log('배열 속 원소들의 총 글자 갯수는 '+dummyLength);