import POKEMON from './data/pokemon/pokemon.js';
const pokemones = document.getElementById('pokemones');
for (let i = 0; i < POKEMON.length; i+=1) {
    pokemones.innerHTML +=`
    <img src="${POKEMON[i].img}">
    <p>"${POKEMON[i].name}"</p>`;
}