<template>
  <v-app class="app-layout">
    <v-navigation-drawer v-model="drawer" app>
      <!-- Conteúdo do drawer, se tiver -->
      <Navbar :drawer="drawer" @open-about="aboutDialog = true" />
    </v-navigation-drawer>
    <v-main class="main">
      <div class="content-wrapper">
        <v-btn icon variant="text" class="button-menu" @click="drawer = !drawer">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
        <router-view />
      </div>
    </v-main>

    <About v-model="aboutDialog" />
    <Footer />
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import About from './views/About.vue'
import Footer from './components/Footer.vue'

const drawer = ref(false)
const aboutDialog = ref(false)

</script>
<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  background-color:var(--v-theme-background);
  flex: 1;
  min-height: 0;
}

.content-wrapper {
  min-height: 100%;
}

.button-menu {
  position: fixed;
  z-index: 10;
  display: flex;
}
</style>
