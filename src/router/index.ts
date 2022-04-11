import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import fetchLogin from "../components/plugins/fetch";
import { useTokenStore } from "../stores/token";
import { useRoute, useRouter } from "vue-router";


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
    {
      path: '/itsno',
      name: 'itsno',
      component: () => import('../components/school/ItsNo.vue')
    },
    {
      path: '/addUser',
      name: 'addUser',
      component: () => import('../components/school/addUser.vue')
    },
  ]
})

// const tokenStore = useTokenStore();
// const route = useRouter();

// let tableauRoles = tokenStore.roles;
// route.beforeEach((to, from, next) => {
//   if (to.name !== "login" && tableauRoles.indexOf("ROLE_DIRECTEUR") !== -1) {
//     next({ name: "login" });
//   } else {
//     if (to.name === "login" && tableauRoles.indexOf("ROLE_DIRECTEUR") == -1) {
//       next({ name: "itsno" });
//     }

//     next();
//   }
// });

export default router
