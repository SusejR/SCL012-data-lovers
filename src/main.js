
import POKEMON from './data/pokemon/pokemon.js';

// console.log(POKEMON);
// console.log(POKEMON[0].type);

// let con = document.getElementById("con")
// cont.innerHTML = POKEMON[0].next_evolution[0].name;


// for (const poke of POKEMON) {
//   // console.log(poke.name)
//   if () {

//}


for (const poke of POKEMON) {
  console.log(poke.name)
  if (poke.candy_count > 25) {
    con.innerHTML += `
    <p>${poke.name}</p>
    <img src= "${poke.img}">
  `
  }
}

// for (let i=0; i< POKEMON.length; i++){
//     // console.log(POKEMON[i].name);
//     con.innerHTML += `
//     <p>${POKEMON[i].name}</p>
//     <img src= "${POKEMON[i].img}">
//     `
// }
