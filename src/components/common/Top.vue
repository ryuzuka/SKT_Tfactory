<template>
  <button type="button" class="btn-top" @click="clickButton"><span class="blind">{{ $t('comm.top-text') }}</span></button>
</template>

<script>
import { TweenMax, Cubic } from 'gsap'

export default {
  name: 'Top',
  data () {
    return {
      startY: 0
    }
  },
  methods: {
    clickButton () {
      this.startY = window.pageYOffset
      TweenMax.to(window, 0.5, {
        scrollTo: {y: 0},
        ease: Cubic.easeInOut,
        onComplete: () => {
          if (this.startY !== window.pageYOffset) {
            this.$emit('complete-scroll')
          }
        }
      })
      // this.scrollTo(0, () => {})
    },
    scrollTo (offset, callback) {
      const onScroll = function () {
        if (window.pageYOffset === offset) {
          window.removeEventListener('scroll', onScroll)
          callback()
        }
      }
      window.addEventListener('scroll', onScroll)
      onScroll()
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="scss">
</style>
