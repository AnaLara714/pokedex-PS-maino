<script>
import { getID } from '@/utils/functionsUtils'
export default {
  name: 'ListPokemons',

  mounted() {
    this.fetchPokemons()
  },
  computed: {
    pokemons() {
      return this.$store.state.pokemons
    }
  },
  methods: {
    fetchPokemons() {
      this.$store.dispatch('fetchPokemons')
    },
    getID,
    fetchPokemon(pokemon) {
      this.$store.dispatch('fetchPokemon', getID(pokemon))
    }
  }
}
</script>

<template>
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
