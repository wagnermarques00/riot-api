import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/home/HomeView.vue'
import IconesView from '../views/icones/IconesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'campeões',
      component: HomeView
    },
    {
      path: '/icones',
      name: 'ícones',
      component: IconesView
    }
  ]
})

export default router
