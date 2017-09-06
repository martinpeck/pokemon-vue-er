<template>
  <div id="app">
    <img class="logo" src="./assets/pokeball.png">
    <h1>{{title}}</h1>
    <p>A sample app, written in Vue.js, that calls
      the Pokemon API <a href="https://pokeapi.co" target="_blank">pokeapi.co</a></p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',

  data () {
    return {
      title: 'Pokemon Vue-er'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo {
  width:200px;
  height:200px;
}

</style>
