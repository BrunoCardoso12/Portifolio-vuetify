<template>
  <v-app>
    <v-main class="projeto-main">
      <h1 class="projeto-title">{{$t('Projetos e Atividades')}}</h1>

      <v-container>
        <v-row justify="center" align="stretch" class="mt-4">
          <v-col
            cols="12"
            sm="6"
            md="4"
            v-for="(card, index) in cards"
            :key="index"
          >
            <v-card class="projeto-card">
              <v-img
                :src="card.img"
                height="200"
                class="mb-3"
                cover
              ></v-img>
              <h3>{{ card.titulo }}</h3>
              <p>{{ card.descricao }}</p>
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
import pokedexImg from '@/assets/projetoPokedex.png';

const cards = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW7N_K5TKeLlFFsGr8LFuXWfI8Ewmpe2E0jg&s',
    titulo: 'Instituto Federal SP-BRA',
    descricao: 'Análise e Desenvolvimento de Sistemas',
    link: '',
  },
  {
    img: 'https://ifsp.edu.br/images/2024/04_abril/Interif_2024.png',
    titulo: 'Instituto Federal SP-BRA',
    descricao: 'Técnico em Mecatrônica',
    link: '',
  },
  {
    img: pokedexImg,
    titulo: 'Senai - Bragança Paulista',
    descricao: 'Excel Avançado',
    link: 'https://github.com/BrunoCardoso12/pokedex_vuejs.git',
  },
  
];
</script>

<style scoped>
.projeto-title {
  text-align: center;
  font-size: 50px;
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  margin-top: 20px;
}

.projeto-card {
  border-radius: 20px;
  padding: 20px;
  height: 100%;
}

v-img {
  border-radius: 20px;
}
</style>
