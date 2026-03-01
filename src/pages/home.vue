<template>
  <v-container class="home-main">
    <h1 class="home-title page-title">BrunoCardoso</h1>

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
        href="https://github.com/BrunoCardoso12"
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

    <v-row justify="center">
      <v-col cols="12" sm="12" md="8" lg="6" xl="4">
        <v-card class="mx-auto home-card">
          <p class="text-center py-4">
            {{ $t('sobreMim', { idade: age }) }}
          </p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const dateOfBirth = new Date('1997-09-23');
const now = new Date();

let age = now.getFullYear() - dateOfBirth.getFullYear();
const mes = now.getMonth() - dateOfBirth.getMonth();

if (mes < 0 || (mes === 0 && now.getDate() < dateOfBirth.getDate())) {
  age--;
}

</script>
<style scoped>
.home-main {
  display: flex;
  flex-direction: column;
  padding: 200px 20px;
}
.menu-btn {
  position: absolute;
  top: 20px;
  left: 20px;
}

.home-title {
  margin-bottom: 0;
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
  font-size: 16px;
  line-height: 1.6;
}
</style>
