<template>
  <v-app>
    <v-main class="about-main">
      <h1 class="about-title">BrunoCardoso</h1>

      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="10" md="8" lg="6">
            <v-card
              class="about-card"
            >
              <p class="text-center">
                Bruno dos Santos Cardoso, 24 anos, estudante de Engenharia de Software na Universidade 
                Federal do Maranhão (UFMA). Sou um desenvolvedor web com experiência em Vue.js e React.js.
                Estou sempre buscando aprender novas tecnologias e aprimorar minhas habilidades. Além disso, 
                sou apaixonado por resolver problemas e criar soluções inovadoras.
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<style scoped>
.about-title {
  text-align: center;
  font-size: 50px;
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  margin-top: 20px;
}

.about-card {
  margin-top: 20px;
  border-radius: 20px;
  padding: 24px;
  font-size: 16px;
  line-height: 1.6;
}
</style>
