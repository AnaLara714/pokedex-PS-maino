<script>
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
    }
  }
}
</script>
<template>
  {{ this.$store.state.pokemons }}
</template>
