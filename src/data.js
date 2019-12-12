// Función de Filtrar
export function filterPokemon(data, type) {
  const filtered = data.filter((pokemon) => pokemon.type.includes(type));
  return filtered;
}
