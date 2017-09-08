<template>
  <div id="app" class="container is-fluid">
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container">

          <img class="logo" src="./assets/pokeball.png">

          <h1 class="title">
            {{title}}
          </h1>
          <h2 class="subtitle">
            A sample app, written in Vue.js, that calls
      the Pokemon API <a href="https://pokeapi.co" target="_blank">pokeapi.co</a>
          </h2>
        </div>
      </div>
    </section>





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

.logo {
  width:200px;
  height:200px;
}

</style>
