<template>
  <div class="intro-page">
    <DarkIntro @unlocked="onUnlocked" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import DarkIntro from '../components/DarkIntro.vue'

const router = useRouter()

function onUnlocked() {
  router.push('/home')
}

onMounted(() => {
  // Se já desbloqueado nessa sessão, vai direto para a home
  if (sessionStorage.getItem('intro-done')) {
    router.push('/home')
  }
})
</script>

<style scoped>
.intro-page {
  position: fixed;
  inset: 0;
  pointer-events: none;
}
</style>