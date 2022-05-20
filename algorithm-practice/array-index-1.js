const arr = ["a", "b", "c"];
// 위와 같은 배열이 있다.
// 1. 원소값 중 "a"를 "c" 다음으로 놓는 방법이 있을까?
// 2. 원소값중 "c"를 "a" 앞으로 놓는 방법이 있을까?
// 3. 혹은 ["b", "a", "c"] 형태로 바꿀 수 있을까?

// let temp;
// temp = arr[0];
// 임시 데이터. temp에 arr[0]을 '임시로'넣어놓는다.

// arr.shift();
// arr의 첫번째 요소를 지운다.
// index[0]이었던 a가 지워졌기때문에 => b가 index[0]으로 오게 된다.
// arr.push(temp);
// temp에 있었던 a를 push(마지막에 넣기)
// console.log(arr);

//Q3
let temp;
temp = {
  0: arr[0], // a
  1: arr[1], // b
};

console.log(temp[0]);
arr.splice(0, 2, temp[1], temp[0]);
console.log(arr);
// 임시변수를 만들었다.
// 배열을 즉석에서 재조립하는 과정 : map()
// 변수를 만들어서 사용하는 테크닉 : 디자인패턴
// Q. 배열을 어떤 객체로 만드는 작업
// Q. 객체를 어떤 배열로 만드는 작업
