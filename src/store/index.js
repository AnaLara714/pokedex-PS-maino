import { createStore } from 'vuex'
import { pokedexService } from '@/api'

export default createStore({
  state: {
    pokemons: [],
    pokemon: {},
    filteredPokemons: []
  },
  getters: {},
  actions: {
    async fetchPokemons({ commit }) {
      try {
        const response = await pokedexService.getPokemons()
        commit('setPokemons', response.data.results)
        console.log('API sendo consumida com sucesso!')
        console.log(response.data.results)
      } catch (error) {
        console.error('Erro ao buscar pokemons', error)
      }
    },
    async fetchPokemon({ commit }, id) {
      try {
        const response = await pokedexService.getPokemon(id)
        console.log(response.data)
        commit('setPokemon', response.data)
        console.log('Pegou o pokemon!', id)
      } catch (error) {
        console.error('Erro ao buscar pokemons', error)
      }
    }
  },
  mutations: {
    setPokemons(state, pokemons) {
      state.pokemons = pokemons
    },
    setPokemon(state, pokemon) {
      state.pokemon = pokemon
    },
    setPokemonsFiltered(state, pokemons) {
      state.filteredPokemons = pokemons
    }
  }
})
