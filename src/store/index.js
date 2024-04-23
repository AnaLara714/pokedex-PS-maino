import { createStore } from 'vuex'
import { pokedexService } from '@/api'
import { getName } from '@/utils/functionsUtils'

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
    },
    filterPokemons({ state, commit }, filter) {
      const { id, name, species, type } = filter

      const filteredPokemons = state.pokemons.filter((pokemon) => {
        if (id && pokemon.id != id) return false
        if (name && !pokemon.name.toLowerCase().includes(name.toLowerCase())) return false
        if (type && !pokemon.type.toLowerCase().includes(type.toLowerCase())) return false
        if (species && !pokemon.species.toLowerCase().includes(species.toLowerCase())) return false
        return true
      })
      commit('setPokemonsFiltered', filteredPokemons)
    }
  },
  mutations: {
    setPokemons(state, pokemons) {
      state.pokemons = pokemons
    },
    setPokemon(state, pokemon) {
      state.pokemon = pokemon
      alert('pokemon capturdo:' + getName(pokemon) + 'mais info' + pokemon.id)
    },
    setPokemonsFiltered(state, pokemons) {
      state.filteredPokemons = pokemons
    }
  }
})
