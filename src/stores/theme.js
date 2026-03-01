import { defineStore } from 'pinia'

const VALID_THEMES = ['light', 'dark']

export const useThemeStore = defineStore('theme', {
  state: () => ({
    currentTheme: 'dark',
  }),
  actions: {
    initialize(vuetifyTheme) {
      const savedTheme = localStorage.getItem('theme')

      if (VALID_THEMES.includes(savedTheme)) {
        this.currentTheme = savedTheme
      } else {
        this.currentTheme = 'dark'
      }

      this.apply(vuetifyTheme)
    },
    toggle(vuetifyTheme) {
      this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark'
      this.apply(vuetifyTheme)
    },
    apply(vuetifyTheme) {
      vuetifyTheme.global.name.value = this.currentTheme
      localStorage.setItem('theme', this.currentTheme)
    },
  },
})