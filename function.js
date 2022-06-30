// function one(ipgoo="아버지가", ipgootoo="방에들어가신다") {

//   let munjang = [];
//   munjang.push(ipgoo);
//   munjang.push(ipgootoo);
//   let abuji = munjang.join(' ');

//   return abuji;
  
// }

// console.log(one());

// function one(ipgoo="아버지가", ipgootoo="방에들어가신다", count=5) {
//   let strings = `${ipgoo} ${ipgootoo}`;
//   for(let i = 0; i < count; i++) {
//     console.log(strings);
//   }

//   return "메롱";
// }

// console.log(one("어머니도", "방에들어가신다", 3));

function munjang(a,b) {
  return a + b;
}

function consoleLoop(string, count) {
  for(let i = 0; i < count; i++) {
    console.log(string);
  }
}

function one(ipgoo, ipgootoo, count=5) {
  let abuji = munjang(ipgoo, ipgootoo);
  consoleLoop(abuji, count);

  return "메롱";
}

console.log(one("어머니도", "방에들어가신다", 3));