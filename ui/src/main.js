import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVfm } from 'vue-final-modal' // https://vue-final-modal.org/get-started/guide/setup#plugin-registration

import 'vue-final-modal/style.css' // https://vue-final-modal.org/get-started/guide/setup#import-required-css

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(createVfm())

app.mount('#app')
