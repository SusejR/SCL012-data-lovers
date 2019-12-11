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
    let debilidades = pok.weaknesses.slice();
    // console.log(variable.join(" "))

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
          <p class="nombres">${pok.name}</p><br>
          <p> Caramelos para evolucionar: ${pok.candy_count ? pok.candy_count : "No Evoluciona"}</p>
           ${pok.egg == "Not in Eggs"? "" :"<p> Huevo:"+pok.egg+ "</p>"}
          <p> Posibilidad de aparición: ${pok.spawn_chance}</p>
          <p> Tiempo de generación: ${pok.spawn_time}</p>
          <p> Debilidades: ${debilidades.join(", ")}</p>
        </span>
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


