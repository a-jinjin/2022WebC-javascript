const arr = ["a", "b", "c"];

// Q1. a를 c의 뒤로 보내기
// arr.push(arr[0]);
// arr.shift();
// console.log(arr);

// Q2. c를 a의 앞으로 놓기
// arr.unshift(arr.at(-1));
// arr.pop();
// console.log(arr);

// Q3. ['b','a','c']로 바꾸기
let arrA = arr.at(0);
let arrB = arr.at(1);
arr.splice(0, 2, arrB, arrA);

console.log(arr);
