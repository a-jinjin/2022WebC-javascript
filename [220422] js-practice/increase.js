const arr = ["에스프레소", "아메리카노", "카페라떼", "카푸치노", "바닐라라떼", "카페모카"];

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);
// console.log(arr.length);

let count = 0;
let indexValue = 0;
// 인덱스 자리에 사칙연산을 써먹기 위해 변수를 만들어둠.

let timer = setInterval(function() {
  if(indexValue < arr.length){
    console.log(arr[indexValue]);
    indexValue++;

  }else{
    indexValue = 0;
    count++;
  }
  
  if(count > 3) {
    clearInterval(timer);
    
  }
}, 1000);