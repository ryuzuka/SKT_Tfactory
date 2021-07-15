<template>
  <div>
    <button @click="openShare">카카오 링크 공유</button>
  </div>
</template>

<script>
import ModalKakaoShare from './ModalKakaoShare'

export default {
  name: 'KaKaoShare',
  props: {
    title: {
      type: String,
      default: 'T Factory'
    },
    description: {
      type: String,
      default: ''
    },
    shareImage: {
      type: String,
      default: ''
    },
    shareLink: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  methods: {
    openShare () {
      this.$modal.show(ModalKakaoShare, {
        // component props
      }, {
        // modal props,
        clickToClose: true
      }, {
        // event
        'before-open': () => { console.log('before-open') },
        'opened': () => { console.log('opened') },
        'before-close': () => { console.log('before-close') },
        'closed': () => { console.log('closed') },
        'event-test': (e) => { console.log('event-test', e) }
      })
    }
  },
  mounted () {
  },
  created () {
  }
}
</script>

<style lang="scss">
</style>
