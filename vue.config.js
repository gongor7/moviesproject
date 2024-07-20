// vue.config.js
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: ['vuetify'],
  devServer: {
    port: 8083 // Configura el puerto aquí
  },
  configureWebpack: {
    resolve: {
      alias: {
        'vuetify$': 'vuetify/lib',
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  }
});
