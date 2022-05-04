let a = '똑';
let b = '딱';

// console.log(a);
// console.log(b);

let isStatus = true;

// if(isStatus === true){
//   console.log(a);
//   isStatus = false;
//   console.log(isStatus);
// }else{
//   console.log(b);
//   isStatus = true;
// }


// setInterval(function(){
//   if(isStatus === true){
//     console.log(a);
//     isStatus = false;
//   }else{
//     console.log(b);
//     isStatus = true;
//   };
// }, 1000);


let current = 0;

const tictocTimer = setInterval(function(){
  if(isStatus === true){
    console.log(a);
    isStatus = false;
  }else{
    console.log(b);
    isStatus = true;
    current++;
    console.log('똑딱 횟수는'+current);
  };

  if(current > 10){
    clearInterval(tictocTimer);
  }
}, 500);