import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from '@/App.vue'
import SectionMain from '@/sections/SectionMain.vue'

// const routes = [
//   {
//     path: '/',
//     name: 'SectionMain',
//     component: SectionMain,
//   },
//   {
//     path: '/privacy-policy',
//     name: 'PrivacyPolicyPage',
//     component: PrivacyPolicyPage,
//   },
// ]

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
//   scrollBehavior(to, from, savedPosition) {
//     if (savedPosition) {
//       return savedPosition
//     }
//     if (to.hash) {
//       return { el: to.hash, behavior: "smooth" }
//     }
//     return { x: 0, y: 0 }
//   },
// })

// createApp(App).use(router).mount('#root')
createApp(App).mount('#root')
