const CommonPlugins = {}

CommonPlugins.install = function (Vue, store) {
  Vue.prototype.$common = {
    blockBodyScroll (isBlock, type) {
      let className = 'v--modal-block-scroll'
      className += type ? '-' + type : ''

      if (isBlock) {
        document.body.classList.add(className)
      } else {
        document.body.classList.remove(className)
      }
    }

  }
}

export default CommonPlugins
