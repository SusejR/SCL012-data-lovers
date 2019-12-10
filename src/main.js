import POKEMON from './data/pokemon/pokemon.js';

let poke = document.getElementById("pokemones");
const tipos = document.getElementById("types");

tipos.onchange = () => {
  let filtrados = filterPokemon(POKEMON, tipos.value);
  clearPokemons();
 showCards(filtrados);
 }
 

 
// Aqui empiezan las funciones

const showCards = (data) => {
  data.forEach(pok => {
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
  });
}

const clearPokemons = () => {
  poke.innerHTML = '';
}


const filterPokemon = (data, type) => {
  let filtered = data.filter((pokemon) => pokemon.type.includes(type));
  return filtered;
}

showCards(POKEMON);

