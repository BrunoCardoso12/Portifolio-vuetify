<template>
  <v-navigation v-model="drawer"
    :permanent="lgAndUp"
    :temporary="!lgAndUp" 
    class="navegation"
  >
    <v-container class="-top-bar">
      <v-btn icon @click="toggleLanguage" variant="plain" aria-label="Mudar idioma">
        <v-icon size="20" >mdi-translate</v-icon>
      </v-btn>

      <v-btn icon @click="toggleTheme" variant="plain" aria-label="Alternar tema">
        <v-icon size="20" >mdi-theme-light-dark</v-icon>
      </v-btn>
    </v-container>

    <!-- Imagem de perfil -->
    <img class="profile-image"
      src="https://res.cloudinary.com/dj2ugb4h8/image/upload/v1772291835/1772239485697_bo9o4z.png"
    />

    <v-list nav dense class="text-center">
      <v-list-item to="/" :title="$t('Início')" value="home" link />
      <v-list-item to="/academicTraining" :title="$t('Formação')" value="academicTraining" link />
      <v-list-item to="/projects" :title="$t('Projetos e Atividades')" value="projects" link />
      <v-list-item to="/experience" :title="$t('Experiência')" value="experience" link />
      <v-list-item :title="$t('Sobre')" @click.stop="openAbout" />
      <!-- <v-list-item to="/feedback" :title="$t('Feedback')" value="feedback" link /> -->
  </v-list>
  </v-navigation>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useDisplay, useTheme } from 'vuetify';
import { useThemeStore } from '../stores/theme';

const emit = defineEmits(['open-about']);

const { locale } = useI18n({ useScope: 'global' });
const vuetifyTheme = useTheme();
const themeStore = useThemeStore();
const { lgAndUp } = useDisplay();


const drawer = ref(true);
watch(lgAndUp, (val) => {
  drawer.value = val
});

function toggleLanguage() { 
  locale.value = locale.value === 'pt' ? 'en' : 'pt';
  localStorage.setItem('language', locale.value);
}

function toggleTheme() {
  themeStore.toggle(vuetifyTheme);
}

function openAbout() {
  emit('open-about');
}

onMounted(() => {
  const savedLanguage = localStorage.getItem('language');

  if (savedLanguage) {
    locale.value = savedLanguage;
  }

  themeStore.initialize(vuetifyTheme);
});
</script>

<style scoped>
.main {
  background-color: var(--v-theme-background);
  color: var(--v-theme-background);
}
.-top-bar {
  display: flex;
  justify-content: space-between;
  padding: 10px 8px;
}

.profile-image {
  display: block;
  width: 120px;
  height: 120px;
  margin: 20px auto;
  border-radius: 50%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  object-fit: cover;
}

.button-menu{
  color: white;
}
</style>
