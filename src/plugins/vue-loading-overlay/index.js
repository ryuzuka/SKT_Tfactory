import Component from './Component.vue'
import LoadingApi from './js/api.js'
// import './css/index.css';

const Plugin = (Vue, $store, props = {}, slots = {}) => {
  let api = LoadingApi(Vue, props, slots)
  let _loading = null

  api.start = () => {
    if (!_loading) {
      _loading = api.show()
      $store.commit('toggleIsLoading')
      document.body.classList.add('v--modal-block-scroll-loading')
    }
  }
  api.stop = () => {
    if (_loading) {
      _loading.hide()
      _loading = null
      $store.commit('toggleIsLoading')
      document.body.classList.remove('v--modal-block-scroll-loading')
    }
  }
  Vue.$loading = api
  Vue.prototype.$loading = api
}

Component.install = Plugin

export default Component
