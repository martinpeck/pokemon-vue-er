<template>
  <div class="pokemon_detail">
    <dl>
      <dt>Name</dt>
      <dd>{{details.name}} ({{details.id}})</dd>
      <dt v-if="details.height">Height</dt>
      <dd v-if="details.height">{{details.height}}</dd>
      <dt v-if="details.weight">Weight</dt>
      <dd v-if="details.weight">{{details.weight}}</dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'pokemon_detail',
  props: ['details']
}
</script>
