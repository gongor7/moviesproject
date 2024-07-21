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
              @input="onSearchInput"
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
                  @card-clicked="goToMovieDetail"
                />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
         <!-- Paginación -->
         <v-row>
              <v-col>
                <v-pagination
                  v-model="currentPage"
                  :length="totalPages"
                  @input="searchMovies"
                ></v-pagination>
              </v-col>
            </v-row>
      </v-container>
    </v-app>
  </template>

  <script>
  import axios from 'axios';
  import AppCard from '../components/AppCard.vue'
  
  export default {
    name: 'App',
    components: {
      AppCard
    },
    data() {
      return {
        movies: [],
        loading: false,
        search: '',
        currentPage: 1,
        totalResults: 0
      }
    },
    computed: {
      totalPages() {
        return Math.ceil(this.totalResults / 10); // 10 resultados por página
      }
    },
    methods: {
      onSearchInput() {
        this.currentPage = 1; // Reiniciar a la primera página con cada nueva búsqueda
        this.searchMovies();
      },
      async searchMovies() {
        if (this.search.length >= 3) {
          this.loading = true;
          try {
            const response = await axios.get(`http://www.omdbapi.com/?apikey=f4248097&s=${this.search}&page=${this.currentPage}`);
            if (response.data && response.data.Search && response.data.Search.length > 0) {
              this.movies = response.data.Search;
              this.totalResults = parseInt(response.data.totalResults, 10) || 0;
              console.log(this.movies);
              console.log(this.totalResults);
            } else {
              this.movies = [];
              this.totalResults = 0;
            }
          } catch (error) {
            console.error('Error fetching data:', error);
            this.movies = [];
            this.totalResults = 0;
          } finally {
            this.loading = false;
          }
        } else {
          this.movies = [];
          this.totalResults = 0;
        }
      },
      goToMovieDetail(imdbID) {
      this.$router.push({ name: 'movie-detail', params: { id: imdbID } });
      console.log("hola")
    }
    },

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
  