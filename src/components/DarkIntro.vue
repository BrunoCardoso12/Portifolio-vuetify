<template>
  <Teleport to="body">
    <div v-show="visible" class="dark-intro" :class="{ 'fade-out': flashing }">

      <!-- Canvas da lanterna -->
      <canvas ref="canvas" class="dark-canvas" />

      <!-- Overlay TV-ON -->
      <div v-if="tvOn" class="tv-on-overlay" />

      <!-- Interruptor escondido -->
      <div
        class="switch-wrapper"
        :class="{ 'switch-near': isNear, 'switch-on': flashing }"
        :style="{ left: switchPos.x + 'px', top: switchPos.y + 'px' }"
        @click="turnOn"
        @touchend.prevent="turnOn"
      >
        <div class="switch-label">{{ isNear ? 'Ligar?' : '' }}</div>
        <div class="switch-btn">
          <span class="switch-icon">⏻</span>
        </div>
        <div class="switch-glow" />
      </div>

      <!-- Dica que aparece depois de um tempo -->
      <div v-if="showHint" class="dark-hint">
        {{ $t('Encontre o interruptor...') }}
      </div>

    </div>
  </Teleport>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const emit = defineEmits(['unlocked'])

const visible = ref(false)
const flashing = ref(false)
const tvOn = ref(false)
const canvas = ref(null)
const isNear = ref(false)
const showHint = ref(false)

const mouse = ref({ x: -999, y: -999 })

// Posição aleatória do interruptor (evita bordas e funciona em telas pequenas)
const minX = 120
const minY = 120
const maxX = Math.max(minX + 1, window.innerWidth  - 180)
const maxY = Math.max(minY + 1, window.innerHeight - 180)
const switchPos = {
  x: Math.floor(Math.random() * (maxX - minX)) + minX,
  y: Math.floor(Math.random() * (maxY - minY)) + minY,
}

const SWITCH_RADIUS = 80  // distância que revela o interruptor
const LIGHT_RADIUS  = 130 // raio da lanterna

let animFrame = null
let ctx = null
let hintTimer = null

function initCanvas() {
  const c = canvas.value
  c.width  = window.innerWidth
  c.height = window.innerHeight
  ctx = c.getContext('2d')
  drawDark()
}

function drawDark() {
  if (!canvas.value) return
  const c = canvas.value
  const mx = mouse.value.x
  const my = mouse.value.y

  ctx.clearRect(0, 0, c.width, c.height)

  // Fundo totalmente preto
  ctx.fillStyle = '#000'
  ctx.fillRect(0, 0, c.width, c.height)

  // "Furo" da lanterna usando destination-out
  const gradient = ctx.createRadialGradient(mx, my, 0, mx, my, LIGHT_RADIUS)
  gradient.addColorStop(0,    'rgba(0,0,0,1)')
  gradient.addColorStop(0.55, 'rgba(0,0,0,0.7)')
  gradient.addColorStop(0.85, 'rgba(0,0,0,0.15)')
  gradient.addColorStop(1,    'rgba(0,0,0,0)')

  ctx.globalCompositeOperation = 'destination-out'
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, c.width, c.height)
  ctx.globalCompositeOperation = 'source-over'

  // Checa proximidade com o interruptor
  const dx = mx - switchPos.x
  const dy = my - switchPos.y
  isNear.value = Math.sqrt(dx * dx + dy * dy) < SWITCH_RADIUS

  animFrame = requestAnimationFrame(drawDark)
}

function onMouseMove(e) {
  mouse.value.x = e.clientX
  mouse.value.y = e.clientY
}

function onTouchMove(e) {
  if (!e.touches.length) return
  e.preventDefault()
  mouse.value.x = e.touches[0].clientX
  mouse.value.y = e.touches[0].clientY
}

function onTouchStart(e) {
  if (!e.touches.length) return
  mouse.value.x = e.touches[0].clientX
  mouse.value.y = e.touches[0].clientY
}

function turnOn() {
  if (flashing.value) return
  flashing.value = true
  cancelAnimationFrame(animFrame)

  // Mostra a linha branca expandindo (TV-on)
  tvOn.value = true

  // Emite logo para o conteúdo começar a aparecer por baixo
  sessionStorage.setItem('intro-done', '1')
  setTimeout(() => emit('unlocked'), 200)

  // Esconde tudo após a animação terminar
  setTimeout(() => {
    visible.value = false
    tvOn.value = false
  }, 1400)
}

function onResize() {
  if (canvas.value) {
    canvas.value.width  = window.innerWidth
    canvas.value.height = window.innerHeight
  }
}

onMounted(() => {
  // Só mostra se ainda não foi desbloqueado nessa sessão
  if (sessionStorage.getItem('intro-done')) {
    emit('unlocked')
    return
  }

  visible.value = true
  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('touchmove', onTouchMove, { passive: false })
  window.addEventListener('touchstart', onTouchStart, { passive: true })
  window.addEventListener('resize', onResize)

  // Aguarda o canvas montar
  setTimeout(() => initCanvas(), 50)

  // Mostra dica após 5s
  hintTimer = setTimeout(() => { showHint.value = true }, 5000)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('touchmove', onTouchMove)
  window.removeEventListener('touchstart', onTouchStart)
  window.removeEventListener('resize', onResize)
  cancelAnimationFrame(animFrame)
  clearTimeout(hintTimer)
})
</script>

<style scoped>
.dark-intro {
  position: fixed;
  inset: 0;
  z-index: 999990;
  pointer-events: all;
  overflow: hidden;
}

.dark-canvas {
  position: absolute;
  inset: 0;
  display: block;
  touch-action: none;
}

/* ---- Interruptor ---- */
.switch-wrapper {
  position: absolute;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.4s ease;
  user-select: none;
}

.switch-near {
  opacity: 1;
}

.switch-btn {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  border: 2px solid rgba(255, 220, 80, 0.8);
  background: rgba(30, 20, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.15s ease, box-shadow 0.3s ease;
  box-shadow: 0 0 16px rgba(255, 200, 50, 0.3);
}

.switch-near .switch-btn {
  box-shadow: 0 0 30px rgba(255, 200, 50, 0.9), 0 0 60px rgba(255, 200, 50, 0.3);
}

.switch-btn:hover {
  transform: scale(1.12);
}

.switch-icon {
  font-size: 28px;
  color: rgba(255, 220, 80, 0.9);
  line-height: 1;
}

.switch-label {
  font-family: monospace;
  font-size: 12px;
  color: rgba(255, 220, 80, 0.9);
  letter-spacing: 1px;
  height: 16px;
  text-shadow: 0 0 8px rgba(255, 200, 50, 0.8);
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}

.switch-glow {
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,200,50,0.15), transparent 70%);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.switch-near .switch-glow {
  opacity: 1;
}

.switch-on .switch-btn {
  box-shadow: 0 0 80px rgba(255, 255, 200, 1), 0 0 200px rgba(255, 255, 200, 0.8);
  background: rgba(255, 240, 150, 0.9);
}

/* ---- TV-ON overlay ---- */
.tv-on-overlay {
  position: absolute;
  inset: 0;
  background: white;
  z-index: 2;
  pointer-events: none;
  animation: tvTurnOn 1.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

@keyframes tvTurnOn {
  0%   { clip-path: inset(50% 0 50% 0); opacity: 1; }
  45%  { clip-path: inset(0%  0 0%  0); opacity: 1; }
  70%  { clip-path: inset(0%  0 0%  0); opacity: 0.6; }
  100% { clip-path: inset(0%  0 0%  0); opacity: 0; }
}

/* ---- Fade de saída ---- */
.fade-out {
  animation: fadeOutDark 1.6s ease forwards;
  pointer-events: none;
}

@keyframes fadeOutDark {
  0%   { opacity: 1; }
  40%  { opacity: 1; }
  100% { opacity: 0; }
}

/* ---- Dica ---- */
.dark-hint {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  font-family: monospace;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.35);
  letter-spacing: 2px;
  animation: fadeHint 1s ease forwards;
  pointer-events: none;
}

@keyframes fadeHint {
  from { opacity: 0; transform: translateX(-50%) translateY(10px); }
  to   { opacity: 1; transform: translateX(-50%) translateY(0); }
}
</style>
