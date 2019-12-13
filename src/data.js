// Función de Filtrar
export function filterPokemon(data, type) {
  const filtered = data.filter((pokemon) => pokemon.type.includes(type));
  return filtered;
}

export function sortByName(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  return 1;
}

export const sortData = (data, condition) => {
  let sorted = [];

  if (condition === 'az') {
    sorted = data.sort(sortByName);
  }
  if (condition === 'za') {
    sorted = data.sort(sortByName).reverse();
  }
  return sorted;
};
