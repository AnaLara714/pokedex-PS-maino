<script>
import FooterContent from './FooterContent.vue'
import ListPokemons from './ListPokemons.vue'

export default {
  name: 'MainContent',
  components: {
    FooterContent,
    ListPokemons
  }
}
</script>

<template>
  <main>
    <h1>Você acaba de entrar na pokédex!</h1>
    <h3>Que tal conhecer alguns pokémons? 😄</h3>
    <ListPokemons />
  </main>
  <footer>
    <FooterContent />
  </footer>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

main h1 {
  margin-bottom: 0;
}
</style>
