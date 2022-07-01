// this : 유연해서 어렵다.
// => 무엇일지 모르니 console을 잘 확인하면 오케이

function one(elem) {
  elem.addEventListener("click", function() {
    console.log(this);
  });
};
// this는 '주체'가 되는 것을 가리킨다.
// 여기서 this === elem

function two(element) {
  element.addEventListener("click", () => {
    console.log(this);
  });
};
// function one이랑 같아보이지만 () => (arrow function)을 쓰면
// this === function two()

// function()을 굳이 명시해서 썼다면 그 코드에서는 'this'를 사용할 가능성이 높다.
// () => {} 화살표함수가 가지는 편의성 : 사용을 다르게 하려고 this의 역할을 바꾸어놓았다.

// 선언문 function() {} this => okay
// 리터럴(표현식) this => 지양하는 편

// this의 사용
// => 여러 함수를 한번에 묶어서 처리할 때


// event.object => 안에 this가 들어있다.


// 최근의 동향(?) : "this"는 어지간하면 쓰지 말자!
// => 코드 가독성이 너무 떨어진다. 
// => 이 this는 저 this인가 새로운 this인가만 하루종일 찾아야 될 수도 있음.


function three(elem) {
  // let getValue = elem.map((elem) => {elem});
  let getValue = elem.map(elem => elem);
}

// 화살표함수는 매개변수가 하나일때 소괄호를 쓰지 않아도 된다.
// !!! 두 개 부터는 써야됨 !!!
// (a) => {}

// return 키워드를 안써도 리턴이 되는 경우가 있다.
// {return data} : 아무 변형 없이 리턴만 할 것이라면 키워드를 삭제해도 된다.
// => {앞 중괄호 다음에 rturn이 붙어있는 경우} : 지워도 됨
// => 하지만 권장하지 않음. *** 비권장