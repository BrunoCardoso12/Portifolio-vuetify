<template>
  <section class="exp-main page-section">
      <!-- Título -->
      <h1 class="exp-title page-title">{{$t('Experiência')}}</h1>
      <v-container class="page-content">
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
            <v-card class="exp-card d-flex flex-column" height="100%">
              <h2 class="exp-card-title">{{ $t(card.titulo) }}</h2>
              <h3 class="exp-card-subtitle">{{ $t(card.descricao) }}</h3>

              <p class="exp-card-text">
                {{ getPreview($t(card.apresentacao)) }}
              </p>

              <p class="exp-card-data">
                {{ $t(card.data) }}
              </p>

              <v-spacer />

              <v-btn
                v-if="$t(card.apresentacao).length > PREVIEW_LIMIT"
                variant="text"
                class="expand-btn"
                @click="openDialog(card)"
              >
                {{ $t('Ver mais') }}
              </v-btn>
            </v-card> 
          </v-col>
        </v-row>
      </v-container>

      <v-dialog
        v-model="dialog"
        max-width="760"
        class="experience-dialog"
      >
        <v-card class="exp-dialog-card">
          <v-card-title class="exp-card-title">
            {{ selectedCard ? $t(selectedCard.titulo) : '' }}
          </v-card-title>

          <v-card-subtitle class="exp-card-subtitle">
            {{ selectedCard ? $t(selectedCard.descricao) : '' }}
          </v-card-subtitle>

          <v-card-text class="exp-card-text">
            {{ selectedCard ? $t(selectedCard.apresentacao) : '' }}
          </v-card-text>

          <v-card-text class="exp-card-data">
            {{ selectedCard ? $t(selectedCard.data) : '' }}
          </v-card-text>

          <v-card-actions>
            <v-spacer />
            <v-btn variant="text" @click="dialog = false"
            style="font-size: x-small;">
              {{ $t('Fechar') }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const PREVIEW_LIMIT = 220;
const dialog = ref(false);
const selectedCard = ref(null);

function openDialog(card) {
  selectedCard.value = card;
  dialog.value = true;
}

function getPreview(text) {
  if (text.length <= PREVIEW_LIMIT) {
    return text;
  }

  return `${text.slice(0, PREVIEW_LIMIT)}...`;
}

const cards = [
  {
    titulo: 'Farmina Pet Foods',
    descricao: 'Operador pleno',
    apresentacao: 'InfoFarmina',
    data: '11/10/2017 - 08/11/2021',
  },
  {
    titulo: 'Starclave',
    descricao: 'Técnico em Mecatrônica II',
    apresentacao: 'InfoStarclave',
    data: '22/11/2021 - 31/07/2023',
  },
  {
    titulo: 'Concept',
    descricao: 'Eletricísta Industrial',
    apresentacao: 'InfoConcept',
    data: '15/08/2023 - 19/01/2025',
  },
   {
    titulo: 'Treetech',
    descricao: 'Estágiario de Engenharia de Middleware',
    apresentacao: 'InfoTreetech',
    data: '03/02/2025 - Atual',
  }
]

const cardsReversed = [...cards].reverse();
</script>

<style scoped>
.exp-title {
  margin-bottom: 0;
}

.exp-card {
  border-radius: 20px;
  padding: 30px;
}

.exp-card-title {
  margin-bottom: 8px;
}

.exp-card-subtitle {
  margin-bottom: 16px;
  opacity: 0.8;
}

.exp-card-text {
  font-size: small;
  line-height: 1.6;
}

.expand-btn {
  font-size: x-small;
  align-self: flex-start;
  padding-left: 2;
}
  
:deep(.experience-dialog .v-overlay__scrim) {
  backdrop-filter: blur(4px);
}

.exp-dialog-card {
  border-radius: 20px;
}

.exp-card-data {
 font-size: x-small;
  opacity: 0.6;
  margin-bottom: 4px;
}
</style>
