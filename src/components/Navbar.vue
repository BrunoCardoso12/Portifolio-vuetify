<template>
  <v-navigation v-model="drawer" class="navegation">
    <v-container class="drawer-top-bar">
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
      <v-list-item to="/about" :title="$t('Sobre')" value="about" link />
      <v-list-item to="/experience" :title="$t('Experiência')" value="experience" link />
      <v-list-item to="/formacao" :title="$t('Formação')" value="formacao" link />
      <v-list-item to="/projetosEAtividades" :title="$t('Projetos e Atividades')" value="projetoEAtividades" link />
      <!-- <v-list-item to="/feedback" :title="$t('Feedback')" value="feedback" link /> -->
  </v-list>
  </v-navigation>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useTheme } from 'vuetify';

const { locale } = useI18n();
const vuetifyTheme = useTheme();

const drawer = ref(false);
const theme = ref(localStorage.getItem('theme') || vuetifyTheme.global.name.value);


function toggleLanguage() { 
  locale.value = locale.value === 'pt' ? 'en' : 'pt';
  localStorage.setItem('language', locale.value);
}

function toggleTheme() {
  const newTheme = theme.value === 'dark' ? 'light' : 'dark';
  theme.value = newTheme;
  vuetifyTheme.global.name.value = newTheme;
  localStorage.setItem('theme', newTheme);
}

onMounted(() => {
  const savedLanguage = localStorage.getItem('language');
  const savedTheme = localStorage.getItem('theme');

  if (savedLanguage) {
    locale.value = savedLanguage;
  }

  if (savedTheme === 'light' || savedTheme === 'dark') {
    theme.value = savedTheme;
    vuetifyTheme.global.name.value = savedTheme;
  }
});
</script>

<style scoped>
.main {
  background-color: var(--v-theme-background);
  color: var(--v-theme-background);
}
.drawer-top-bar {
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
