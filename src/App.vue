<template>
  <v-app>
    <v-container fluid>
      <!-- Buscador -->
      <v-row>
        <v-col>
          <v-text-field
            v-model="search"
            label="Buscar película"
            prepend-icon="mdi-magnify"
            outlined
            dense
            @input="searchMovies"
          ></v-text-field>
        </v-col>
      </v-row>

      <!-- Tarjeta de Película -->
      <v-row>
        <v-col v-if="loading" cols="12">
          <v-alert type="info" border="left" colored-border>
            Loading...
          </v-alert>
        </v-col>
        <v-col v-else>
          <v-row>
            <v-col
              v-for="(movie, index) in movies"
              :key="index"
              cols="12" md="4" lg="3"
            >
              <AppCard
                :title="movie.Title"
                :year="movie.Year"
                :imdbID="movie.imdbID"
                :Type="movie.Type"
                :poster="movie.Poster"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import axios from 'axios';
import AppCard from './components/AppCard.vue'

export default {
  name: 'App',
  components: {
    AppCard
  },
  data() {
    return {
      movie: [],
      loading: true,
      search: ''
    }
  },
  computed: {
    filteredMovie() {
      return this.movie || null;
    }
  },
  methods: {
    async searchMovies() {
      if (this.search.length >= 3) {
        this.loading = true;
        try {
          const response = await axios.get(`http://www.omdbapi.com/?apikey=f4248097&s=${this.search}`);
          if (response.data && response.data.Search && response.data.Search.length > 0) {
            this.movies = response.data.Search;
          } else {
            this.movie = null;
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          this.loading = false;
        }
      } else {
        this.movie = [];
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
