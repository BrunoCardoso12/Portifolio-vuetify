// src/stores/layout.js
import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout', {
  state: () => ({
    showFooter: true,
  }),
  actions: {
    toggleFooter() {
      this.showFooter = !this.showFooter
    },
  },
})
