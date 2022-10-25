import { createRouter, createWebHistory } from 'vue-router'

import MainPage from '@/pages/MainPage.vue'

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicyPage',
    component: () => import('@/pages/PrivacyPolicyPage.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/NotFoundPage.vue')
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
