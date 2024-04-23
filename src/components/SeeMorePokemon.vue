<script>
import { getName } from '@/utils/functionsUtils'

export default {
  name: 'SeeMorePokemon',
  props: {
    selected_pokemon: {}
  },
  data() {
    return getName(this.selected_pokemon)
  }
}
</script>

<template>
  <div>{{ data() }}</div>
</template>

<style></style>
