// for(let i = 1; i<= 55; i++){
//   console.log('hello');
// };


// 함수 선언
// function textMachine(startValue, endValue, textValue){
  // for(let i = startValue; i<=endValue; i++){
    // console.log(textValue);
  // }
// };

// 함수 호출
// textMachine(1, 20, 'hello');
// textMachine(3,10,'bye');

// ====> "기명 함수"방식, "함수 선언"방식


// console.log(textMachine(2,2,'test'));
// ====> "undefined"
// ====> 리턴값이 없다. 그냥 '실행'만 한 것


// function textMachine(startValue, endValue, textValue){
//   for(let i = startValue; i<=endValue; i++){
//     console.log(textValue);
//   }
//   return '메롱';
// };
// console.log(textMachine(2,2,'test'));


// function textMachine(startValue, endValue, textValue){
//   let result = textValue;
//   for(let i = startValue; i<=endValue; i++){
//   }
//   return result;
// };

// console.log(textMachine(1,2,'console'));
// textMachine(1,2,'console');

// function a(){
  // console.log('test');
  // return 'boo';
// };
// a();
// console.log(a());


// function b(first, second){
  // console.log(first+second);
  // return first + second;
// }
// b(1,2);
// console.log(b(1,2));


function b (first, second){
  if(typeof first === 'number'){
  // 만약 first의 데이터타입이 'number'라면
  // 인수로 'number'타입의 데이터만 받는다.
  // ==> '타입 체크'
    
    return first + second;
  }else{
    console.log('첫번째 매개변수의 데이터타입이 number가 아닙니다.');
  }
}
console.log(b('1',2));