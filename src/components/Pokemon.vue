<template>
  <div class="pokemon">
    <h2>{{title}}</h2>

    <form v-on:submit.prevent="search">
      <label for="search">Enter Pokemon ID:</label>
      <input type="text" name="" id="search" v-model="pokemon_id">
      <button type="submit">Go!</button>
    </form>

    <hr>

    <pokemon-details v-if="pokemon_details"></pokemon-details>

  </div>
</template>

<script>
  import Detail from '@/components/Detail'

  export default {
    name: 'pokemon',

    data () {
      return {
        title: 'Search',
        pokemon_id: 1,
        pokemon_details: null
      }
    },

    methods: {
      search: function () {
        console.log(`TODO: perform search for id=${this.pokemon_id}!`)
        this.pokemon_details = {name: 'foo', id: 1}
      }
    },

    components: {
      'pokemon-details': Detail
    }

}

</script>
