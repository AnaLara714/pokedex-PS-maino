export function getID(pokemon) {
  return Number(pokemon.url.split('/')[6])
}
