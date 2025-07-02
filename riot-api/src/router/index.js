import { createRouter, createWebHistory } from 'vue-router'

import CampeoesView from '../views/campeoes/CampeoesView.vue'
import FeiticosView from '../views/feiticos/FeiticosView.vue'
import IconesView from '../views/icones/IconesView.vue'
import ItensView from '../views/itens/ItensView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'campeões',
      component: CampeoesView
    },
    {
      path: '/feiticos',
      name: 'feitiços',
      component: FeiticosView
    },
    {
      path: '/icones',
      name: 'ícones',
      component: IconesView
    },
    {
      path: '/itens',
      name: 'itens',
      component: ItensView
    }
  ]
})

export default router
