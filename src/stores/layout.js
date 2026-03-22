// src/stores/layout.js
import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout', {
  state: () => ({
    showFooter: true,
    tvOffActive: false,
    tvOffPhase: '',
  }),
  actions: {
    toggleFooter() {
      this.showFooter = !this.showFooter
    },
    startTvOff() {
      if (this.tvOffActive) return
      this.tvOffActive = true
      this.tvOffPhase = 'phase-collapse'
      setTimeout(() => { this.tvOffPhase = 'phase-dot'   }, 600)
      setTimeout(() => { this.tvOffPhase = 'phase-black' }, 1050)
      setTimeout(() => {
        this.tvOffActive = false
        this.tvOffPhase  = ''
      }, 2200)
    },
  },
})
