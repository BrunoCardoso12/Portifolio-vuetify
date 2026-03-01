<template>
  <v-dialog :model-value="modelValue" max-width="900" @update:model-value="emit('update:modelValue', $event)">
    <v-card class="about-card">
      <v-card-title class="about-title">BrunoCardoso</v-card-title>

      <v-card-text>
        <p class="text-center about-text">{{ $t('AboutStory') }}</p>
      </v-card-text>

      <v-card-actions class="justify-end">
        <v-btn style="font-size: x-small;" variant="text" @click="emit('update:modelValue', false)">{{ $t('Fechar') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue'])
</script>

<style scoped>
.about-title {
  text-align: center;
  font-size: 40px;
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
}

.about-card {
  border-radius: 20px;
}

.about-text {
  font-size: 16px;
  line-height: 1.6;
}
</style>
