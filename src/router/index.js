import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DapilView from '../views/DapilView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ValidationView from '../views/ValidationView.vue'
import ResetPasswordView from '../views/ResetPasswordView.vue'
import PollingView from '../views/PollingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/dapil',
      name: 'dapil',
      component: DapilView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/polling',
      name: 'polling',
      component: PollingView
    },
    {
      path: '/validate',
      name: 'validate',
      component: ValidationView
    },
    {
      path: '/reset',
      name: 'reset',
      component: ResetPasswordView
    },
  ]
})

export default router
