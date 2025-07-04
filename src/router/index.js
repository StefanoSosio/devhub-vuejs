import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/TestView.vue'),
    },
    {
      path: '/direttive',
      name: 'direttive',
      component: () => import('../views/DirettiveView.vue'),
    },
    {
      path: '/lifecycle',
      name: 'lifecycle',
      component: () => import('../views/LifecycleView.vue'),
    },
    {
      path: '/http',
      name: 'http',
      component: () => import('../views/HttpView.vue'),
    },
    {
      path: '/pinia',
      name: 'pinia',
      component: () => import('../views/PiniaView.vue'),
    },
  ],
})

export default router
