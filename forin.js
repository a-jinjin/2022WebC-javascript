const pokemon = {
  a: "피카츄",
  b: "라이츄",
  c: "파이리",
  d: "꼬부기",
};

/*
for() -> 기본형

~~ 파생형 ~~
for in()
for of()
*/

console.log(pokemon.a);
console.log(pokemon["a"]);

console.log(pokemon.length);

let pokemonArr = [];
for (let key in pokemon) {
  console.log(pokemon[key]);
  pokemonArr.push(pokemon[key]);
}
console.log(pokemonArr);
