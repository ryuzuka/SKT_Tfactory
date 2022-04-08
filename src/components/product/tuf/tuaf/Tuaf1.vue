<template>
  <div class="contents" ref="contents">
	  TUAF1
  </div>
</template>

<script>
import * as NATIVE from '../../../../js/native'

export default {
  name: 'Tuaf1',
  components: {
  },
  data () {
    return {
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    clickButton () {
      const redirectURL = 'https://www.instagram.com/tfactory_sampler/'
      const mobileOS = this.$cookies.get('platform')
      if (mobileOS === 'A' || mobileOS === 'I') {
        NATIVE.sysBrowserOpen(mobileOS, redirectURL)
      } else {
        window.open(redirectURL, '_blank')
      }
    }
  }
}
</script>

<style lang="scss">
  //@import 'src/assets/css/product';
</style>
<style lang="scss" scoped>
</style>
