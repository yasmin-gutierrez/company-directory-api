import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'
import CardDetail from './views/CardDetail.vue'
import LoginPage from './views/LoginPage.vue'
import SettingsPage from './views/SettingsPage.vue'

import { useAuth } from './composables/useAuth'
const { isAuthenticated } = useAuth()


const routes = [
  { path: '/company-directory-api/', name: 'Home', component: HomePage },
  { path: '/company-directory-api/other', name: 'Other', component: () => import('@/views/OtherPage.vue') },
  { path: '/company-directory-api/employees/:id', name: 'CardDetail', component: CardDetail },
  { path: '/company-directory-api/login', name: 'LoginPage', component: LoginPage },
  { path: '/company-directory-api/settings', name: 'SettingsPage', component: SettingsPage, meta: {requiresAuth: true} },
] 

const router = createRouter({
  history: createWebHistory(),
  routes,
})

//navigation guard 
router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    next({name: 'LoginPage', query: {redirect: to.fullpath}})
  } else {
    next()
  }
})

export default router
