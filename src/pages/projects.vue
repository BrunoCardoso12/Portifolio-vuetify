<template>
  <section class="projeto-main page-section">
      <h1 class="projeto-title page-title">{{$t('Projetos e Atividades')}}</h1>

      <v-container class="page-content">
        <v-row justify="center" align="stretch" class="mt-4">
          <v-col
            cols="12"
            sm="12"
            md="6"
            lg="6"
            xl="4"
            v-for="(card, index) in cardsReversed"
            :key="index"
          >
            <v-card class="projeto-card">
              <v-img
                :src="card.img"
                height="200"
                class="mb-3"
                cover
              ></v-img>
              <h3>{{ $t(card.titulo) }}</h3>
              <p>{{ getPreview($t(card.descricao)) }}</p>
              <v-container justify="center " class="pa-0 mt-2">

                <v-btn
                v-if="$t(card.descricao).length > PREVIEW_LIMIT"
                variant="text"
                class="expand-btn"
                style="font-size: x-small;"
                @click="openDialog(card)"
                >
                {{ $t('Ver mais') }}
              </v-btn>
              
              <v-btn
              v-if="card.link"
              :href="card.link"
              target="_blank"
              variant="text"
              style=" font-size: x-small;"
              >
              {{$t('Ver Projeto')}}
            </v-btn>
          </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-dialog
        v-model="dialog"
        max-width="760"
        class="projeto-dialog"
      >
        <v-card class="projeto-dialog-card">
          <v-card-title>
            {{ selectedCard ? $t(selectedCard.titulo) : '' }}
          </v-card-title>
          <v-card-subtitle>
            {{ selectedCard ? $t(selectedCard.data) : '' }}
          </v-card-subtitle>

          <v-card-text>
            {{ selectedCard ? $t(selectedCard.descricao) : '' }}
          </v-card-text>

          <v-card-actions>
            <v-spacer />
            <v-btn variant="text" @click="dialog = false" style="font-size: x-small;">
              {{ $t('Fechar') }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import pokedexImg from '@/assets/projetoPokedex.png';

const PREVIEW_LIMIT = 220
const dialog = ref(false)
const selectedCard = ref(null)

function openDialog(card) {
  selectedCard.value = card
  dialog.value = true
}

function getPreview(text) {
  if (text.length <= PREVIEW_LIMIT) {
    return text
  }

  return `${text.slice(0, PREVIEW_LIMIT)}...`
}

const cards = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW7N_K5TKeLlFFsGr8LFuXWfI8Ewmpe2E0jg&s',
    titulo: 'PROJECT_1_TITLE',
    data: '2023',
    descricao: 'PROJECT_1_DESC',
    link: '',
  },
  {
    img: 'https://ifsp.edu.br/images/2024/04_abril/Interif_2024.png',
    titulo: 'PROJECT_2_TITLE',
    data: '2024',
    descricao: 'PROJECT_2_DESC',
    link: 'https://ifsp.edu.br/interif',
  },
  {
    img: pokedexImg,
    titulo: 'PROJECT_3_TITLE',
    data: '2024',
    descricao: 'PROJECT_3_DESC',
    link: 'https://github.com/BrunoCardoso12/pokedex_vuejs.git',
  },
  
];

const cardsReversed = [...cards].reverse();
</script>

<style scoped>
.projeto-title {
  margin-bottom: 0;
}

.projeto-card {
  border-radius: 20px;
  padding: 20px;
  height: 100%;
  font-size: small;
  line-height: 1.6;
}

.expand-btn {
  align-self: flex-start;
}

:deep(.projeto-dialog .v-overlay__scrim) {
  backdrop-filter: blur(4px);
}

.projeto-dialog-card {
  border-radius: 20px;
}

v-img {
  border-radius: 20px;
}
</style>
