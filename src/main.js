import POKEMON from './data/pokemon/pokemon.js';
import * as mod from './data.js';
// Declaro variables
const poke = document.getElementById('pokemones');
const tipos = document.getElementById('types');
const orden = document.getElementById('order');

// Función para mostrar todos los pokemones con su HTML dinamico
const showCards = (data) => {
  data.forEach((pok) => {
    poke.innerHTML += `
  <div class='cajaPokemon' id='cajaPokemon'> 
    <img class="fotos" src="${pok.img}">
    <div class='descripcion'>
    <p class='nombres'>${pok.name}</p><br>
    <p> # ${pok.num}</p>
    <p> Tipo: ${pok.type}</p>
    <p> Altura: ${pok.height}</p>
    <p> Peso: ${pok.weight}</p>
  
    <span>
      <p class='nombres'>${pok.name}</p><br>
      <p> Caramelos para evolucionar: ${pok.candy_count ? pok.candy_count : 'No Evoluciona'}</p>
      <p> Huevo: ${pok.egg === 'Not in Eggs' ? 'No tiene huevos' : pok.egg}</p>
      <p> Posibilidad de aparición: ${pok.spawn_chance}</p>
      <p> Tiempo de generación: ${pok.spawn_time}</p>
      <p> Debilidades: ${pok.weaknesses.join(', ')}</p>
      <p> Evolución: ${pok.next_evolution ? pok.next_evolution[0].name : 'No tiene'}</p>
    </span>
  </div>`;
  });
};
showCards(POKEMON);

// Función para borrar los pokemones filtrados
const clearPokemons = () => {
  poke.innerHTML = '';
};

// Función para cambiar el valor del select y llamado de la función de filtrar

tipos.onchange = () => {
  const filtrados = mod.filterPokemon(POKEMON, tipos.value);
  clearPokemons();
  showCards(filtrados);
};

// Función para cambiar el valor del select y llamado de la función de ordenar
orden.onchange = () => {
  const ordenados = mod.sortData(POKEMON, orden.value);
  clearPokemons();
  showCards(ordenados);
};
