<template>
    <v-container fluid>
     <!-- Botón de Volver -->
     <v-btn @click="goBack" color="secondary" class="mb-4" fab dark>
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
      <v-row>
        <v-col>
          <v-card>
            <v-card-title>{{ movie.Title }}</v-card-title>
            <v-card-subtitle>{{ movie.Year }}</v-card-subtitle>
            <v-card-text>
              <img :src="movie.Poster" alt="Poster" />
              <p>{{ movie.Plot }}</p>
              <p><strong>Director:</strong> {{ movie.Director }}</p>
              <p><strong>Writer:</strong> {{ movie.Writer }}</p>
              <p><strong>Actors:</strong> {{ movie.Actors }}</p>
              <p><strong>Genre:</strong> {{ movie.Genre }}</p>
              <p><strong>Language:</strong> {{ movie.Language }}</p>
              <p><strong>Country:</strong> {{ movie.Country }}</p>
              <p><strong>Awards:</strong> {{ movie.Awards }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>

<script>
import axios from 'axios';

export default {
  name: 'MovieDetail',
  data() {
    return {
      movie: {}
    };
  },
  created() {
    this.fetchMovieDetails();
  },
  methods: {
    async fetchMovieDetails() {
      const { id } = this.$route.params;
      try {
        const response = await axios.get(`http://www.omdbapi.com/?apikey=f4248097&i=${id}`);
        this.movie = response.data;
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    },
    goBack() {
      this.$router.push({ name: 'home' });
    }
  }
};
</script>

  <style scoped>
  img {
    width: 100%;
    max-width: 300px;
    margin-bottom: 20px;
  }
  </style>
