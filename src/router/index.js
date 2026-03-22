import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home.vue'
import Inicio from '../pages/inicio.vue'
import Experience from '../pages/experience.vue'
import Formcao from '../pages/academicTraining.vue'
import ProjetosEAtividades from '../pages/projects.vue'
// import Feedback from '../pages/Feedback.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'intro',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Inicio
    },
    {
      path: '/experience',
      name: 'experience',
      component: Experience
    },
    {
      path: '/academicTraining',
      name: 'academicTraining',
      component: Formcao
    },
    {
      path: '/projects',
      name: 'projects',
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
