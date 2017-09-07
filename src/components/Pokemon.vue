<template>
  <div class="pokemon">
    <h2>{{title}}</h2>

    <form v-on:submit.prevent="search">
      <label for="search">Enter Pokemon ID:</label>
      <input type="text" name="" id="search" v-model="pokemon_id">
      <button type="submit">Go!</button>
    </form>

  </div>
</template>

<script>
  export default {
    name: 'pokemon',

    data () {
      return {
        title: 'Search',
        pokemon_id: 1
      }
    },

    methods: {
      search: function () {
        console.log(`TODO: perform search for id=${this.pokemon_id}!`)
      }
    }

}

</script>

<style scoped>

</style>
