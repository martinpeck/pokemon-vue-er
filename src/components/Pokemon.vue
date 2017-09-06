<template>
  <div class="pokemon">
    <h2>{{title}}</h2>
    <label for="search">Enter Pokemon ID:</label>
    <input type="text" name="" id="search" v-model="pokemon_id">
    <button v-on:click="search(1)">Go</button>
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
      search: (id) => {
        alert(`TODO: perform search for id=${id}!`)
      }
    }

}

</script>

<style scoped>

</style>
