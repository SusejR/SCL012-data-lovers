import POKEMON from './data/pokemon/pokemon.js';

let poke = document.getElementById("pokemones");
for(let pok of POKEMON){
  poke.innerHTML += `
    <div class="cajaPokemon" id="cajaPokemon">      
    <img class="fotos" src="${pok.img}">
    <div class="descripcion">
    <p class="nombres">${pok.name}</p><br>
    <p> Tipo: ${pok.type}</p>
    <p> Altura: ${pok.height}</p>
    <p> Peso: ${pok.weight}</p>
    </div>
    `
}


// const pokemones = document.getElementById('pokemones');
// for (let i = 0; i < POKEMON.length; i+=1) {
//     pokemones.innerHTML +=`
//     <img src="${POKEMON[i].img}">
//     <p>${POKEMON[i].name}</p>`;
// }