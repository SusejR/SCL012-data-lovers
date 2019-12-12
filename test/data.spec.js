// importamos la función `example`
import * as mod from '../src/data.js';

import POKEMON from '../src/data/pokemon/pokemon.js';

describe('filterPokemon', () => {
  it('Debe retornar Bulbasaur en la posición 0 de la data', () => {
    const filtrados = mod.filterPokemon(POKEMON, 'Grass');
    expect(filtrados[0].name).toBe('Bulbasaur');
  });
});
