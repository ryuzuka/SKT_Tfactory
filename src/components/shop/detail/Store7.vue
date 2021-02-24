<template src="../../../assets/html/shop/detail/details7.html"></template>

<script>
import * as STORE from '../../../js/store.js'

export default {
  name: 'Store7',
  data () {
    return {
      classList: []
    }
  },
  mounted () {
    STORE.getProgramClassList().then(result => {
      result.CLASSES.forEach((crewClass) => {
        if (crewClass.TYPE === 'class') {
          this.classList.push(crewClass)
        }
      })
    })
  }
}
</script>

<style lang="scss">
@import 'src/assets/css/shop';
@import 'src/assets/css/main';
</style>
