<template>
  <v-card class="mx-auto my-4" max-width="344"  @click="handleClick">
    <v-img :src="poster" height="200px"></v-img>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-subtitle>{{ year }}</v-card-subtitle>
    <v-card-text>
      <p><strong>imdbID:</strong> {{ imdbID }}</p>
      <p><strong>Type:</strong> {{ Type }}</p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'AppCard',
  props: {
    poster: String,
    title: String,
    year: String,
    imdbID: String,
    Type: String
  },
  methods: {
    handleClick() {
      this.$emit('card-clicked', this.imdbID);
      console.log(this.imdbID)
    }
  }
}
</script>

<style scoped>
/* Puedes añadir estilos adicionales aquí si es necesario */
</style>
