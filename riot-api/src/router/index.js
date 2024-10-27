import { createRouter, createWebHistory } from 'vue-router'

import CampeaoView from '../views/CampeaoView.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'campeões',
      component: HomeView
    },
    {
      path: '/campeao',
      name: 'detalhes do campeão',
      component: CampeaoView
    }
  ]
})

export default router
