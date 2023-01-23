import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/login',
      component: () => import('../view/login/Login.vue')
    },
    {
      path: '/main',
      component: () => import('../view/main/Main.vue')
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('../view/not-found/NotFound.vue')
    }
  ]
})

export default router
