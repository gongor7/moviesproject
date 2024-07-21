<template>
    <v-container>
      <v-card>
        <v-card-title>
          <span class="headline">Iniciar Sesión</span>
        </v-card-title>
        <v-card-text>
          <v-form @submit.prevent="login">
            <v-text-field
              v-model="email"
              label="Email"
              type="email"
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              label="Contraseña"
              type="password"
              required
            ></v-text-field>
            <v-btn type="submit" class="submit-btn" color="">Iniciar Sesión</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'UserLogin',
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      login() {
        // Aquí puedes agregar la lógica de autenticación
        console.log('Iniciando sesión con', this.email, this.password);
        // Redirigir a la página de inicio o al dashboard después del inicio de sesión
        this.$router.push({ name: 'home' });
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos opcionales para el formulario de inicio de sesión */
  .v-card {
    max-width: 400px;
    margin: auto;
    padding: 20px;
  }
  </style>
  