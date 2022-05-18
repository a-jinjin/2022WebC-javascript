/*
const memberOne = {
  name : '피카츄',
  gender : '포켓몬',
  age : 88,
  deskNumber : 11,
  glasses : false,
  coffee : 'americano',
  color : 'yellow',
  cellphone : false
}

const memberTwo = {
  name : '아구몬',
  gender : '디지몬',
  age : 13,
  deskNumber : 12,
  glasses : false,
  coffee : 'cafelatte',
  color : 'orange',
  cellphone : true
}

console.log(memberOne.name);
console.log(memberTwo.name);
 */


// *** 생성자 함수 *** : constructor function
// 객체를 찍어내는 거푸집, 틀
// 석고 뜨는 함수

// 생성자 함수는 보통 첫글자를 대문자로 쓴다.
function Member(name, gender, age, deskNumber, glasses, coffee, color, cellphone){
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.deskNumber = deskNumber;
  this.glasses = glasses;
  this.coffee = coffee;
  this.color = color;
  this.cellphone = cellphone;
}

const memberOne = new Member('라이츄', '포켓몬', 22, 21, false, 'vanilla-latte', 'orange', false);
console.dir(memberOne);

const testOne = new Date();
console.dir(testOne.getHours());

// 오전오후 계산기 
function ampm(hour, msg){
  if(hour > 12){
    console.log(msg + '오후 ' + (hour-12) + '시');
    console.log(memberOne.cellphone);
  }else{
    console.log(msg + '오전 ' + hour + '시');
  }
}

ampm(testOne.getHours(), '현재시간 : ');

const today = new Date();
console.log(typeof(today.setFullYear()))
console.log(today.setFullYear())