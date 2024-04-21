import { createStore } from 'vuex'
import { pokedexService } from '@/api'
console.log('Teste: store/index.js')

export default createStore({
  state: {
    pokemons: []
  },
  getters: {},
  actions: {
    async fetchPokemons({ commit }) {
      try {
        const response = await pokedexService.getPokemons()
        commit('setPokemons', response.data)
        console.log('API sendo consumida com sucesso!')
        console.log(response.data)
      } catch (error) {
        console.error('Erro ao buscar pokemons', error)
      }
    }
  },
  mutations: {
    setPokemons(state, pokemons) {
      state.pokemons = pokemons
    }
  }
})
