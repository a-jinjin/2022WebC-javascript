// ** 고차함수 : 제작자가 만들어 사용하는 함수
// ==> higher order function
// ==> "알고리즘 제작법"

function typeA() {
  console.log('i was car');
}

function typeB() {
  // * typeB의 함수 알고리즘은
  // 무슨 문자열을 콘솔에 찍은 다음,
  // 함수 typeA()를 호출해준다.

  console.log('life is boiled egg');
  typeA();
}

// typeB();



function typeC(target) {

  target.addEventListenser('click', ()=>{});
  target.addEventListenser('scroll', ()=>{});
  target.addEventListenser('wheel', ()=>{});

}

// typeC(root);



const typeT = {
  objectA: function(string) { // ==> 매서드
    console.log(string);},
  objectB: function() {}
};

// typeT.objectA('hello');

// ==> 객체로 묶어서 관리한다. 객체지향형 방식


console.log(console.table('hello, test'));