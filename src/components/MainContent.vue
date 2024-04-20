<script setup>
import FooterContent from './FooterContent.vue'
</script>

<template>
  <main>
    <h1>Você acaba de entrar na pokédex!</h1>
    <h3>Que tal conhecer alguns pokémons? 😄</h3>
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
