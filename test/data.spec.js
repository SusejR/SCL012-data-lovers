// importamos la función `example`
import { filterPokemon } from '../src/data';

describe('filterPokemon', () => {
  it('debería ser una función', () => {
    expect(typeof filterPokemon).toBe('function');
  });
  // describe('example', () => {
  // escribe aquí tu test
  // });
});
