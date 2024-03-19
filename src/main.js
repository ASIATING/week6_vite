// import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap'
import './assets/all.scss'
import Loading from 'vue-loading-overlay'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import {
  Form, Field, ErrorMessage, defineRule, configure
} from 'vee-validate'
import * as AllRules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives
})

// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/css'
// axios
// import axios from 'axios'

// bootstrap icon
// import 'material-icons/iconfont/material-icons.css'
// import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App)

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})

configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true // 當輸入任何內容直接進行驗證
})

// 設定預設語系
setLocale('zh_TW')

// app.ues(bootstrap)
app.use(createPinia())
app.use(router)
app.use(vuetify)
// app.use(VueAwesomeSwiper)
// app.use(axios)
app.component('VueLoading', Loading)
app.component('VForm', Form)
app.component('VField', Field)
app.component('ErrorMessage', ErrorMessage)
app.mount('#app')
