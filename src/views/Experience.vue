<template>
  <v-app>
    <v-main class="exp-main">
      <!-- Título -->
      <h1 class="exp-title">Experiência</h1>
      <v-container>
        <!-- Card -->
        <v-row justify="center" align="stretch" class="mt-4">
          <v-col 
            cols="12"
            sm="6"
            md="4"
            v-for="(card, index) in cards"
            :key="index"
          >
            <v-card class="exp-card">
              <h3>{{ card.titulo }}</h3>
              <p>{{ card.descricao }}</p>
              <p>{{ card.apresentacao }}</p>
              <v-btn
                v-if="card.link"
                :href="card.link"
                target="_blank"
                variant="text"
                class="mt-2"
                color="primary"
              >
                Ver Projeto
              </v-btn>
            </v-card> 
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
const cards = [
  {
    titulo: 'Instituto Federal SP-BRA',
    descricao: 'Análise e Desenvolvimento de Sistemas',
    apresentacao: 'Bruno dos Santos Cardoso, 24 anos, estudante de Engenharia de Software na Universidade Federal do Maranhão (UFMA). Sou um desenvolvedor web com experiência em Vue.js e React.js. Estou sempre buscando aprender novas tecnologias e aprimorar minhas habilidades. Além disso, sou apaixonado por resolver problemas e criar soluções inovadoras.',
    link: '',
  },
  {
    titulo: 'Instituto Federal SP-BRA',
    descricao: 'Análise e Desenvolvimento de Sistemas',
    apresentacao: 'Bruno dos Santos Cardoso, 24 anos, estudante de Engenharia de Software na Universidade Federal do Maranhão (UFMA). Sou um desenvolvedor web com experiência em Vue.js e React.js. Estou sempre buscando aprender novas tecnologias e aprimorar minhas habilidades. Além disso, sou apaixonado por resolver problemas e criar soluções inovadoras.',
    link: '',
  },
  {
    titulo: 'Instituto Federal SP-BRA',
    descricao: 'Análise e Desenvolvimento de Sistemas',
    apresentacao: 'Bruno dos Santos Cardoso, 24 anos, estudante de Engenharia de Software na Universidade Federal do Maranhão (UFMA). Sou um desenvolvedor web com experiência em Vue.js e React.js. Estou sempre buscando aprender novas tecnologias e aprimorar minhas habilidades. Além disso, sou apaixonado por resolver problemas e criar soluções inovadoras.',
    link: '',
  }
]

</script>

<style scoped>
.exp-title {
  display: flex;
  text-align: center;
  justify-content: center;
  font-size: 50px;
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  margin-top: 20px;
}

.exp-card {
  border-radius: 20px;
  padding: 30px;
}
</style>
