import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Experience from '../views/Experience.vue'
import Formcao from '../views/Formacao.vue'
import ProjetosEAtividades from '../views/ProjetosEAtividades.vue'
import Feedback from '../views/Feedback.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/experience',
      name: 'experience',
      component: Experience
    },
    {
      path: '/formacao',
      name: 'formacao',
      component: Formcao
    },
    {
      path: '/projetosEAtividades',
      name: 'projetosEAtividades',
      component: ProjetosEAtividades
    },
    // {
    //   path: '/feedback',
    //   name: 'feedback',
    //   component: Feedback
    // },
  ]
})

export default router
