<template>
  <v-app>
    <v-main class="home-main">
      <h1 class="home-title">BrunoCardoso</h1>

      <v-container class="social-container">
        <v-btn
          icon
          href="https://linkedin.com/in/brunosantoscardoso/"
          target="_blank"
          rel="noopener"
          variant="plain"
        >
          <v-icon size="30">mdi-linkedin</v-icon>
        </v-btn>

        <v-btn
          icon
          href="https://instagram.com/bcardoso___/"
          target="_blank"
          rel="noopener"
          variant="plain"
        >
          <v-icon size="30">mdi-instagram</v-icon>
        </v-btn>

        <v-btn
          icon
          href="https://github.com/BrunoCardoso"
          target="_blank"
          rel="noopener"
          variant="plain"
        >
          <v-icon size="30">mdi-github</v-icon>
        </v-btn>

        <v-btn
          icon
          href="mailto:bruno-cardoso12@hotmail.com"
          target="_blank"
          rel="noopener"
          variant="plain"
        >
          <v-icon size="30">mdi-email</v-icon>
        </v-btn>
      </v-container>

      <!-- Card principal -->
      <v-card class="mx-auto home-card">
        <p class="text-center py-4">
          {{ $t('Bruno texto aqui, estudante de Engenharia de Software na Universidade Federal do Maranhão (UFMA). Sou um desenvolvedor web com experiência em Vue.js e React.js. Estou sempre buscando aprender novas tecnologias e aprimorar minhas habilidades. Além disso, sou apaixonado por resolver problemas e criar soluções inovadoras.')}}
        </p>
      </v-card>
    </v-main>
  </v-app>
</template>

<script setup>

</script>

<style scoped>
.menu-btn {
  position: absolute;
  top: 20px;
  left: 20px;
}

.home-title {
  text-align: center;
  font-size: 60px;
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  margin-top: 120px;
}

.social-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 16px;
}

.home-card {
  margin-top: 20px;
  border-radius: 20px;
  max-width: 600px;
  padding: 20px;
}
</style>
