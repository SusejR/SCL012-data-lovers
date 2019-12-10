import POKEMON from './data/pokemon/pokemon.js';

let poke = document.getElementById("pokemones");
for(let pok of POKEMON){
  
  poke.innerHTML += `
    <div class="cajaPokemon" id="cajaPokemon">      
      <img class="fotos" src="${pok.img}">
      <div class="descripcion">
      <p class="nombres">${pok.name}</p><br>
      <p> # ${pok.num}</p>
      <p> Tipo: ${pok.type}</p>
      <p> Altura: ${pok.height}</p>
      <p> Peso: ${pok.weight}</p>
    
      <span>
        <p class="nombres"> Características </p><br>
        <p> Caramelos para evolucionar: ${pok.candy_count}</p>
        <p> Huevo: ${pok.egg}</p>
        <p> Posibilidad de aparición: ${pok.spawn_chance}</p>
        <p> Tiempo de generación: ${pok.spawn_time}</p>
        <p> Debilidades: ${pok.weaknesses}</p>
      </span>
    </div>
    `
} 