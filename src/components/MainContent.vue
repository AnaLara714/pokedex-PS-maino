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
    <div class="items-pokemon">
      <ListPokemons />
    </div>
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

main h1,
h3 {
  text-align: center;
  margin-bottom: 0;
}
.items-pokemon {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 20px 5px 5px 5px;
  gap: 10px;
}
</style>
