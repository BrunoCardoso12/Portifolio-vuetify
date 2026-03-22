<template>
  <v-app class="app-layout">
    <!-- TV-OFF overlay global (persiste entre rotas) -->
    <Teleport to="body">
      <div v-if="layoutStore.tvOffActive" class="tv-off-overlay">
        <div class="tv-scanline" :class="layoutStore.tvOffPhase" />
      </div>
    </Teleport>

    <!-- Toast de inatividade global -->
    <Teleport to="body">
      <Transition name="idle-toast">
        <div v-if="idleToast" class="idle-toast">
          💡 {{ $t('Desligando a por inatividade...') }}
        </div>
      </Transition>
    </Teleport>
    <v-navigation-drawer v-if="!isIntroRoute" v-model="drawer" app>
      <!-- Conteúdo do drawer, se tiver -->
      <Navbar :drawer="drawer" @open-about="aboutDialog = true" />
    </v-navigation-drawer>
    <v-main :class="['main', themeStore.currentTheme === 'dark' ? 'main-dark' : 'main-light']">
      <div class="content-wrapper">
        <v-btn v-if="!isIntroRoute" icon variant="text" class="button-menu" @click="drawer = !drawer">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
        <RouterView v-slot="{ Component }">
          <Transition name="fade" mode="out-in">
            <component :is="Component" :key="$route.path" />
          </Transition>
        </RouterView>
      </div>
    </v-main>

    <About v-model="aboutDialog" />
    <Footer />
    <MouseEffects />
  </v-app>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Navbar from './components/Navbar.vue'
import About from './views/About.vue'
import Footer from './components/Footer.vue'
import { useThemeStore } from './stores/theme'
import { useLayoutStore } from './stores/layout'
import MouseEffects from './components/MouseEffects.vue'

const drawer = ref(true)
const aboutDialog = ref(false)
const themeStore = useThemeStore()
const layoutStore = useLayoutStore()
const route = useRoute()
const router = useRouter()

const isIntroRoute = computed(() => route.path === '/')

// ---- Timer de inatividade global ----
const idleToast = ref(false)
let idleTimer = null

function resetIdleTimer() {
  clearTimeout(idleTimer)
  if (layoutStore.tvOffActive || isIntroRoute.value) return
  idleTimer = setTimeout(() => {
    idleToast.value = true
    setTimeout(() => {
      idleToast.value = false
      triggerTvOff()
    }, 2000)
  }, 15000)
}

function triggerTvOff() {
  if (layoutStore.tvOffActive) return
  clearTimeout(idleTimer)
  layoutStore.startTvOff()
  setTimeout(() => {
    sessionStorage.removeItem('intro-done')
    router.push('/')
  }, 1750)
}

const activityEvents = ['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll']

onMounted(() => {
  activityEvents.forEach(e => window.addEventListener(e, resetIdleTimer, { passive: true }))
  resetIdleTimer()
})

onUnmounted(() => {
  activityEvents.forEach(e => window.removeEventListener(e, resetIdleTimer))
  clearTimeout(idleTimer)
})

// reinicia o timer ao mudar de rota (sai da intro)
watch(isIntroRoute, (val) => {
  if (!val) resetIdleTimer()
  else clearTimeout(idleTimer)
})

</script>

<style>
/* ---- TV-OFF overlay global ---- */
.tv-off-overlay {
  position: fixed;
  inset: 0;
  background: black;
  z-index: 999995;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: overlayIn 0.5s ease forwards;
}
@keyframes overlayIn {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}
.tv-scanline {
  width: 100%;
  height: 2px;
  background: white;
  box-shadow: 0 0 12px 4px rgba(255,255,255,0.8);
}
.tv-scanline.phase-collapse {
  animation: scanAppear 0.5s ease forwards;
}
@keyframes scanAppear {
  0%   { width: 0%;   opacity: 0; }
  100% { width: 100%; opacity: 1; }
}
.tv-scanline.phase-dot {
  animation: scanShrink 0.4s ease forwards;
}
@keyframes scanShrink {
  0%   { width: 100%; height: 2px; border-radius: 2px; }
  100% { width: 6px;  height: 6px; border-radius: 50%; box-shadow: 0 0 24px 12px rgba(255,255,255,1); }
}
.tv-scanline.phase-black {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  animation: dotFade 0.6s ease forwards;
}
.idle-toast {
  position: fixed;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999999;
  background: rgba(30,10,50,0.92);
  color: #e0c4ff;
  border: 1px solid rgba(140,80,220,0.5);
  border-radius: 12px;
  padding: 14px 24px;
  font-size: 15px;
  white-space: nowrap;
  box-shadow: 0 4px 24px rgba(100,40,180,0.4);
  pointer-events: none;
}
.idle-toast-enter-active,
.idle-toast-leave-active {
  transition: opacity 0.4s, transform 0.4s;
}
.idle-toast-enter-from,
.idle-toast-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(16px);
}
</style>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1;
  min-height: 0;
}

.main-light {
  background: linear-gradient(135deg, #E8D5FF, #C7D2FE, #F3E8FF, #7C3AED);
  background-size: 400% 400%;
  animation: gradientLight 8s ease infinite;
}

.main-dark {
  background: linear-gradient(135deg, rgba(40,13,64,1), rgb(86, 39, 117), #3b0764, rgba(40,13,64,1));
  background-size: 400% 400%;
  animation: gradientDark 8s ease infinite;
}

@keyframes gradientLight {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes gradientDark {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.content-wrapper {
  min-height: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-leave-active {
  position: absolute;
  width: 100%;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

.button-menu {
  position: fixed;
  z-index: 10;
  display: flex;
}
</style>
