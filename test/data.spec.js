import * as mod from '../src/data.js';

import POKEMON from '../src/data/pokemon/pokemon.js';

describe('filterPokemon', () => {
  it('Debe retornar Bulbasaur en la posición 0 de la data', () => {
    const filtrados = mod.filterPokemon(POKEMON, 'Grass');
    expect(filtrados[0].name).toBe('Bulbasaur');
  });
});

describe('sortData', () => {
  it('Debería retornar Abra en la posición 0 de la data cuando ordena de A-Z', () => {
    const sorted = mod.sortData(POKEMON, 'az');
    expect(sorted[0].name).toBe('Abra');
  });
  it('Debería retornar Zubat en la posición 0 de la data cuando ordena de Z-A', () => {
    const sorted = mod.sortData(POKEMON, 'za');
    expect(sorted[0].name).toBe('Zubat');
  });
});
