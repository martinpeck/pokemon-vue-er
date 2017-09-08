<template>
  <div class="pokemon_detail box">
    <table class="table">
      <tbody>
        <tr>
          <th>Pokemon ID</th>
          <td>{{details.id}}</td>
        </tr>
        <tr>
          <th>Name</th>
          <td>{{details.name}}</td>
        </tr>
        <tr v-if="details.height">
          <th>Height</th>
          <td v-if="details.height">{{details.height}}</td>
        </tr>
        <tr v-if="details.weight">
          <th>Weight</th>
          <td v-if="details.weight">{{details.weight}}</td>
        </tr>




      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'pokemon_detail',
  props: ['details']
}
</script>
