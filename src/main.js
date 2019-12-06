
import POKEMON from './data/pokemon/pokemon.js';


//for (let i = 0; i < POKEMON.length; i++) {
  const elemento = document.getElementById('cont');
  elemento.innerHTML += `<p>${POKEMON[0].name}</p>
   <p>${POKEMON[0].type}</p>
    <img src= "${POKEMON[0].img}">`;
//}
