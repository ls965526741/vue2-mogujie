import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from '@/api/index'

import toast from '@/components/common/toast'
import Fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'

import '@/assets/iconfont/iconfont.css'
import '@/mock/index'

Vue.use(toast)
Vue.prototype.$bus = new Vue()
Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.config.devtools = true
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Fastclick.attach(document.body)
Vue.use(VueLazyload, { loading: '/img/goods/g11.webp' })
