import POKEMON from './data/pokemon/pokemon.js';

let poke = document.getElementById("pokemones");
const tipos = document.getElementById ("types");
console.log(tipos);
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
  
  if (tipos === 'Fire') {
    poke.innerHTML += cajaPokemon.incluides('Fire');
  };

}
tipos.addEventListener('click', function(){
  if (tipos === 'Fire') {
    poke.innerHTML += cajaPokemon.incluides('Fire');
  };
}) 
