<script>
import { getID } from '@/utils/functionsUtils'
import { mapActions, mapState } from 'vuex'
// import SeeMorePokemon from './SeeMorePokemon.vue'
export default {
  name: 'ListPokemons',
  components: {
    // SeeMorePokemon
  },
  data() {
    return {
      filter: {
        id: null,
        name: '',
        type: '',
        species: ''
      }
    }
  },
  mounted() {
    this.fetchPokemons()
  },
  computed: {
    pokemons() {
      return this.$store.state.pokemons
    },
    ...mapState(['filteredPokemons'])
  },
  methods: {
    getID,
    ...mapActions(['filterPokemons']),
    applyFilter() {
      this.filterPokemons(this.filter)
      // this.$store.dispatch('filterPokemons', this.filter)
    },
    fetchPokemons() {
      this.$store.dispatch('fetchPokemons')
    },
    fetchPokemon(pokemon) {
      this.$store.dispatch('fetchPokemon', getID(pokemon))
    }
  }
}
</script>

<template>
  <!-- <div>
    <h1>Lista de Usuários Filtrados</h1>
    <div>
      <label for="name">Nome:</label>
      <input type="text" id="name" v-model="filter.name" />
    </div>
    <div>
      <label for="id">ID:</label>
      <input type="number" id="id" v-model.number="filter.id" />
    </div>
    <div>
      <label for="type">Tipo:</label>
      <input type="text" id="type" v-model="filter.type" />
    </div>
    <div>
      <label for="species">Espécie:</label>
      <input type="text" id="species" v-model="filter.species" />
    </div>
    <button @click="`${applyFilter()}`">Aplicar Filtro</button>
    {{ console.log(filteredPokemons) }}
    <ul v-if="filteredPokemons.length > 0">
      <li v-for="pokemon in filteredPokemons" :key="pokemon.id">
        {{ pokemon.name }} ({{ pokemon.type }}, {{ pokemon.species }})
      </li>
    </ul>
    <div v-else></div>
    -->
  <div v-for="pokemon in pokemons" :key="pokemon.name" class="item-pokemon">
    <div class="info-pokemon">
      <img
        :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getID(pokemon)}.png`"
      />
      <span>
        {{ pokemon.name }}
      </span>
    </div>
    <button class="see-pokemon" v-on:click="`${fetchPokemon(pokemon)}`">Saber mais</button>
  </div>
</template>

<style>
.list-pokemons {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0;
}
.item-pokemon {
  display: flex;
  width: 250px;
  border: 1px solid #000;
  border-radius: 5px;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  flex-direction: column;
}
.info-pokemon {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.see-pokemon {
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: var(--accent);
  color: #ffffff;
}
</style>
