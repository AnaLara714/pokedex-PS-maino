export function getID(pokemon) {
  return Number(pokemon.url.split('/')[6])
}

export function getName(pokemon) {
  return pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
}
