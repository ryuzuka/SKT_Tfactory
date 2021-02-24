/** 2020-01-20 minji.han@sk.com
 * index.js
 * */

import Vue from 'vue'
import router from './router'
import {i18n} from './locales/i18n'

import App from './App.vue'
import Swiper from './plugins/vue-awesome-swiper'
import gsap from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import moment from 'vue-moment'
import VLoading from './plugins/vue-loading-overlay'
import VModal from './plugins/vue-js-modal'
import VueGeolocation from 'vue-browser-geolocation'
import VueCookies from 'vue-cookies'
import Vuex from 'vuex'
import d3 from 'vue-d3'
import VueClipboard from 'vue-clipboard2'

import constants from './constant'
import Common from './plugins/common'

Vue.use(Swiper)
Vue.use(gsap)
Vue.use(moment)
Vue.use(VModal, {
  dialog: true,
  dynamic: true,
  dynamicDefaults: {clickToClose: false}
})
Vue.use(VueGeolocation)
Vue.use(VueCookies)
Vue.use(Vuex)
Vue.use(d3)
Vue.use(VueClipboard)

Vue.config.productionTip = false

gsap.registerPlugin(ScrollToPlugin)

/* eslint-disable no-new */
Vue.prototype.$EventBus = new Vue()

const store = new Vuex.Store({
  state: {
    'constants': constants,
    'isLoading': false
  },
  getters: {
    CONSTANTS: state => {
      return state.constants
    }
  },
  mutations: {
    toggleIsLoading (state, payload) {
      state.isLoading = !state.isLoading
    }
  }
})

Vue.use(VLoading, store)
Vue.use(Common, store)

window.app = new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
