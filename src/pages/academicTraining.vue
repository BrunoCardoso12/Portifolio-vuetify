<template>
  <section class="formacao-main page-section">
      <h1 class="formacao-title page-title">{{$t('Formação')}}</h1>
      <v-container class="formacao-container page-content" >
        <!-- Card -->
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
            <v-card class="formacao-card d-flex flex-column" height="100%">
              <h3 class="formacao-card-title">{{ $t(card.titulo) }}</h3>
              <p class="formacao-card-subtitle">{{ $t(card.descricao) }}</p>
              <p class="formacao-card-text">{{ getPreview($t(card.mensagem)) }}</p>
              <p class="formacao-card-subtitle-data">{{ $t(card.data) }}</p>

              <v-spacer />

              <v-btn
                v-if="$t(card.mensagem).length > PREVIEW_LIMIT"
                variant="text"
                class="expand-btn"
                @click="openDialog(card)"
              >
                {{ $t('Ver mais') }}
              </v-btn>

              <v-btn
                v-if="card.link"
                :href="card.link"
                target="_blank"
                variant="text"
                class="mt-2"
                color="primary"
              >
                {{ $t('Ver Projeto') }}
              </v-btn>
            </v-card> 
          </v-col>
        </v-row>
      </v-container>

      <v-dialog
        v-model="dialog"
        max-width="760"
        class="formacao-dialog"
      >
        <v-card class="formacao-dialog-card">
          <v-card-title class="formacao-card-title">
            {{ selectedCard ? $t(selectedCard.titulo) : '' }}
          </v-card-title>

          <v-card-subtitle class="formacao-card-subtitle">
            {{ selectedCard ? $t(selectedCard.descricao) : '' }}
          </v-card-subtitle>
          
          <v-card-text class="formacao-card-text">
            {{ selectedCard ? $t(selectedCard.mensagem) : '' }}
          </v-card-text>
          
          <v-card-subtitle class="formacao-card-subtitle-data">
            {{ selectedCard ? $t(selectedCard.data) : '' }}
          </v-card-subtitle>

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
    titulo: 'AT_1_TITLE',
    descricao: 'AT_1_DESC',
    mensagem: 'AT_1_MSG',
    link: '',
    data: '10/01/2015 - 27/02/2016',
  },
  {
    titulo: 'AT_2_TITLE',
    descricao: 'AT_2_DESC',
    mensagem: 'AT_2_MSG',
    link: '',
    data: '23/01/2016 - 22/10/2016',
  },
  {
    titulo: 'AT_3_TITLE',
    descricao: 'AT_3_DESC',
    mensagem: 'AT_3_MSG',
    link: '',
    data: '08/10/2016 - 01/07/2017',
  },
  {
    titulo: 'AT_4_TITLE',
    descricao: 'AT_4_DESC',
    mensagem: 'AT_4_MSG',
    link: '',
    data: '10/08/2019 - 08/07/2021',
  },
  {
    titulo: 'AT_5_TITLE',
    descricao: 'AT_5_DESC',
    mensagem: 'AT_5_MSG',
    link: '',
    data: '08/02/2025 - 19/07/2025',
  },
  {
    titulo: 'AT_6_TITLE',
    descricao: 'AT_6_DESC',
    mensagem: 'AT_6_MSG',
    link: '',
    data: '10/08/2023 - Atual',
  },
]

const cardsReversed = [...cards].reverse();
</script>

<style scoped>
.formacao-title {
  margin-bottom: 0;
}

.formacao-card {
  border-radius: 20px;
  padding: 30px;
}

.formacao-card-title {
  margin-bottom: 8px;
}

.formacao-card-subtitle {
  margin-bottom: 16px;
  opacity: 0.8;
}

.formacao-card-text {
  font-size: small;
  line-height: 1.6;
}

.expand-btn {
  font-size: x-small;
  align-self: flex-start;
  padding-left: 2;
}

:deep(.formacao-dialog .v-overlay__scrim) {
  backdrop-filter: blur(4px);
}

.formacao-dialog-card {
  border-radius: 20px;
}

.formacao-card-subtitle-data {
  font-size: x-small;
  opacity: 0.6;
  margin-bottom: 4px;
}
</style>
