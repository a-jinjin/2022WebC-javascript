let a = 1;
let b = 1;
let c = 2;
// ==> 전역변수 

// 함수를 한 번 써보자!
function valueTest(){
  // console.log(a);
  // ==> 전역변수이기때문에 접근이 가능하다!
  
  if(typeof a === 'number'){
    console.log('변수 a는 데이터 타입이 숫자입니다.');
  // }else if(typeof b === 'number'){
  //   console.log('변수 b는 데이터 타입이 숫자입니다.');
  // }
  }else{
    console.log('변수 a는 데이터 타입이 숫자가 아닙니다.');
  }
  // ==> if가 참이면 else if와 else를 무시하고 출력한다.
  // ==> b도 검사를 하고싶다면 if를 또 만들어줘야 한다.


  if(typeof b === 'number'){
    console.log('변수 b는 데이터 타입이 숫자입니다.');

  }else{
    console.log('변수 b는 데이터 타입이 숫자가 아닙니다.');
  }

}

// valueTest();


function valueTestTwo(){
  /*
  if(typeof a === 'number' && typeof b === 'string'){
    // ==> 조건식이 훨씬 더 까다로워진다 (똑똑해진다)
    // ==> 두 조건 모두를 충족해야 true라고 판단한다.
    // ==> || 연산자(or연산자)를 사용할 경우, '둘 중 하나만 맞아도' true를 반환한다.
    console.log('변수 a와 b는 모두 number 타입입니다.')
  }else{
    console.log('변수 a와 b 둘 중 하나는 number 타입이 아니거나, 둘 다 number 타입이 아닐 수 있습니다.')
  }
   */

  if(typeof a === 'string') {
    console.log('a는 string입니다.');

  }else{

    if(typeof a === 'number'){
      console.log('a는 number입니다.');

      if(a === 1){
        console.log('a는 1입니다.');
      }else{
        console.log('a는 1이 아닙니다.');
      }

    }else{
      console.log('a는 number가 아닙니다.');
    }

  } 

}

// valueTestTwo();


// a와 c가 같은가?
// a와 c가 같을 경우, b와도 같은가?

function valueTestThree(){
  if(typeof a === 'number'){
    console.log('a는 number 타입');

    if(typeof c === 'number'){
      console.log('c는 number 타입');

      if(a === 1){
        console.log('a는 1.');

        if(c === 1){
          console.log('c는 1. a는 c와 같다');
        }else{
          console.log('c는 1이 아님. a와 c는 같지 않다.');

          if(typeof b === 'number'){
            console.log('b는 number 타입');

            if(b === 1){
              console.log('b는 1. a와 b는 같다');
            }else{
              console.log('b는 1이 아님. a와 b는 같지 않다.')
            }
            
          }else{
            console.log('b는 number 타입이 아님. a와 b는 같지 않다.');
          }

        }

      }else{
        console.log('a는 1이 아님');
      }

    }else{
      console.log('c는 number 타입이 아님');
    }

  }else{
    console.log('a는 number 타입이 아님');
  }
};

valueTestThree();