<template>
  <div class="pokemon">
    <h2>{{title}}</h2>

    <form v-on:submit.prevent="search">
      <label for="search">Enter Pokemon ID:</label>
      <input type="number" v-model.number="pokemon_id" placeholder="enter pokemon ID">
      <button type="submit">Go!</button>
    </form>

    <hr>
    <div v-if="pokemon_details">
      <pokemon-details v-bind:details="pokemon_details" ></pokemon-details>
    </div>

    <div v-if="api_message">{{api_message}}</div>
  </div>

</template>

<script>
  import Detail from '@/components/Detail'
  import axios from 'axios'

  var pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
  })

  export default {
    name: 'pokemon',

    data () {
      return {
        title: 'Search',
        pokemon_id: 1,
        pokemon_details: null,
        api_message: ''
      }
    },

    methods: {
      search: function () {
        var vm = this

        vm.api_message = 'loading data...'
        vm.pokemon_details = null

        pokemonApi.get(`pokemon/${this.pokemon_id}`)
          .then(function (response) {
            vm.api_message = ''
            vm.pokemon_details = response.data
          })
          .catch(function (error) {
            vm.api_message = `Failed to load Pokemon data! ${error.message}`
          })
      }
    },

    components: {
      'pokemon-details': Detail
    }

}

</script>
