<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <!-- Conteúdo do drawer, se tiver -->
      <Footer :drawer="drawer" />
    </v-navigation-drawer>
    <v-main class="main">
      <v-btn icon variant="text" class="button-menu" @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import Footer from './components/Footer.vue'
import { ref } from 'vue'

const drawer = ref(false)

</script>
<style scoped>

.main {
  background-color:var(--v-theme-background);
  min-height: 100vh;
}

.button-menu {
  position: fixed;
  z-index: 10;
  display: flex;
}
</style>
