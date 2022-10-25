import { createApp } from 'vue'
import VueSmoothScroll from 'vue3-smooth-scroll'

import { router } from '@/router/index.js'

import App from '@/App.vue'

createApp(App)
  .use(router)
  .use(VueSmoothScroll, {
    offset: -90,
    updateHistory: false,
  })
  .mount('#root')
