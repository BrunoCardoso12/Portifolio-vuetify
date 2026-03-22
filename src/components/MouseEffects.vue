<template>
  <!-- Cursor neon -->
  <div class="neon-cursor" :style="{ left: mouse.x + 'px', top: mouse.y + 'px' }" />
  <div class="neon-cursor-dot" :style="{ left: mouse.x + 'px', top: mouse.y + 'px' }" />

  <!-- Constellation canvas -->
  <canvas ref="canvas" class="constellation-canvas" />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const mouse = ref({ x: -200, y: -200 })
const canvas = ref(null)

// ---- Cursor + Code trail ----
let lastCharTime = 0

function onMouseMove(e) {
  mouse.value.x = e.clientX
  mouse.value.y = e.clientY

  const now = Date.now()
  if (now - lastCharTime > 60) {
    lastCharTime = now
    spawnCodeChar(e.clientX, e.clientY)
  }
}

// ---- A: Code trail ----
const codeChars = ['0', '1', '<', '>', '/', '{', '}', ';', '#', '&', '()', '=>']

function spawnCodeChar(x, y) {
  const el = document.createElement('span')
  el.className = 'fx-code-char'
  el.textContent = codeChars[Math.floor(Math.random() * codeChars.length)]
  el.style.left = x + 'px'
  el.style.top = y + 'px'
  el.style.color = `hsl(${260 + Math.random() * 60}, 80%, 70%)`
  el.style.fontSize = (10 + Math.random() * 8) + 'px'
  document.body.appendChild(el)
  setTimeout(() => el.remove(), 1000)
}

// ---- Click particles ----
function onMouseClick(e) {
  for (let i = 0; i < 12; i++) spawnParticle(e.clientX, e.clientY)
}

function spawnParticle(x, y) {
  const el = document.createElement('div')
  el.className = 'fx-click-particle'
  const angle = Math.random() * Math.PI * 2
  const distance = 40 + Math.random() * 70
  el.style.left = x + 'px'
  el.style.top = y + 'px'
  el.style.setProperty('--tx', Math.cos(angle) * distance + 'px')
  el.style.setProperty('--ty', Math.sin(angle) * distance + 'px')
  el.style.background = `hsl(${250 + Math.random() * 70}, 80%, 70%)`
  document.body.appendChild(el)
  setTimeout(() => el.remove(), 800)
}

// ---- B: Constellation ----
let ctx, particles = [], animFrame

function initConstellation() {
  const c = canvas.value
  c.width = window.innerWidth
  c.height = window.innerHeight
  ctx = c.getContext('2d')
  particles = Array.from({ length: 70 }, () => ({
    x: Math.random() * c.width,
    y: Math.random() * c.height,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    r: 1.5 + Math.random() * 2,
  }))
  draw()
}

function draw() {
  const c = canvas.value
  ctx.clearRect(0, 0, c.width, c.height)
  const mx = mouse.value.x, my = mouse.value.y

  for (let i = 0; i < particles.length; i++) {
    const p = particles[i]
    p.x += p.vx; p.y += p.vy
    if (p.x < 0 || p.x > c.width) p.vx *= -1
    if (p.y < 0 || p.y > c.height) p.vy *= -1

    ctx.beginPath()
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(124,58,237,0.7)'
    ctx.fill()

    const dx = mx - p.x, dy = my - p.y
    const distMouse = Math.sqrt(dx * dx + dy * dy)
    if (distMouse < 160) {
      ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mx, my)
      ctx.strokeStyle = `rgba(124,58,237,${(1 - distMouse / 160) * 0.8})`
      ctx.lineWidth = 1; ctx.stroke()
    }

    for (let j = i + 1; j < particles.length; j++) {
      const p2 = particles[j]
      const d = Math.sqrt((p2.x-p.x)**2 + (p2.y-p.y)**2)
      if (d < 110) {
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y)
        ctx.strokeStyle = `rgba(124,58,237,${(1 - d / 110) * 0.25})`
        ctx.lineWidth = 0.5; ctx.stroke()
      }
    }
  }
  animFrame = requestAnimationFrame(draw)
}

function onResize() {
  if (canvas.value) {
    canvas.value.width = window.innerWidth
    canvas.value.height = window.innerHeight
  }
}

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('click', onMouseClick)
  window.addEventListener('resize', onResize)
  initConstellation()
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('click', onMouseClick)
  window.removeEventListener('resize', onResize)
  cancelAnimationFrame(animFrame)
})
</script>

<style scoped>
/* B: Canvas */
.constellation-canvas {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 1;
}

/* C: Cursor neon */
.neon-cursor {
  position: fixed;
  width: 30px;
  height: 30px;
  border: 2px solid #7C3AED;
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 99999;
  animation: neonPulse 1.5s ease-in-out infinite;
}

.neon-cursor-dot {
  position: fixed;
  width: 6px;
  height: 6px;
  background: #7C3AED;
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 99999;
  box-shadow: 0 0 6px #7C3AED;
}

@keyframes neonPulse {
  0%, 100% { box-shadow: 0 0 6px #7C3AED, 0 0 16px rgba(124, 58, 237, 0.4); }
  50%       { box-shadow: 0 0 14px #7C3AED, 0 0 36px rgba(124, 58, 237, 0.8); }
}
</style>

<style>
* { cursor: none !important; }

.fx-code-char {
  position: fixed;
  pointer-events: none;
  font-family: 'Courier New', monospace;
  font-weight: bold;
  z-index: 99998;
  transform: translate(-50%, -50%);
  animation: codeFall 1s ease forwards;
  user-select: none;
}

@keyframes codeFall {
  0%   { opacity: 1; transform: translate(-50%, -50%); }
  100% { opacity: 0; transform: translate(-50%, calc(-50% + 50px)); }
}

.fx-click-particle {
  position: fixed;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 99998;
  transform: translate(-50%, -50%);
  animation: particleExplode 0.8s ease forwards;
}

@keyframes particleExplode {
  0%   { opacity: 1; transform: translate(-50%, -50%) translate(0, 0) scale(1); }
  100% { opacity: 0; transform: translate(-50%, -50%) translate(var(--tx), var(--ty)) scale(0); }
}

</style>
