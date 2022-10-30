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
    path: '/terms',
    name: 'TermsPage',
    component: () => import('@/pages/TermsPage.vue'),
  },
  {
    path: '/jobs',
    name: 'JobsPage',
    component: () => import('@/pages/JobsPage.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/NotFoundPage.vue'),
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
