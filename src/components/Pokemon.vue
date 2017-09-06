<<template>
  <div class="pokemon">
    <h1>{{title}}</h1>
    <p>This is a sample app, written in Vue.js, that calls
      the Pokemon API <a href="https://pokeapi.co" target="_blank">pokeapi.co</a></p>
    <p>It allows you to Vue (sic) the details for a given Pokemon.</p>
  </div>
</template>

<script>
  export default {
    name: 'pokemon',

    data () {
      return {
        title: 'Pokemon Vue-er'
      }
    }
  }

</script>

<style scoped>

</style>
