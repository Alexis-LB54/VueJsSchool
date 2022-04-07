import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/school/LoginView.vue')
    },
    {
      path: '/director',
      name: 'director',
      component: () => import('../views/school/DirectorView.vue')
    },
    {
      path: '/eleve',
      name: 'eleve',
      component: () => import('../views/school/EleveView.vue')
    },
    {
      path: '/prof',
      name: 'prof',
      component: () => import('../views/school/ProfView.vue')
    },
  ]
})

export default router
