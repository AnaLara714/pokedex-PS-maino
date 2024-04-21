import axios from 'axios'
import config from './config'
import endpoints from './endpoints'

const instance = axios.create({
  baseURL: config.URLbase
})

export const pokedexService = {
  getPokemons() {
    return instance.get(endpoints.pokemon)
  }
}
