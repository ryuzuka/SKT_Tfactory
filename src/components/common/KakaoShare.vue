<template>
  <div class="share">
    <button @click="openShare" class="share-btn"><span class="blind">카카오 링크 공유</span></button>
  </div>
</template>

<script>
import ModalKakaoShare from './ModalKakaoShare'

export default {
  name: 'KaKaoShare',
  props: {
    title: {
      type: String,
      default: undefined
    },
    description: {
      type: String,
      default: undefined
    },
    thumbnail: {
      type: String,
      default: undefined
    }
  },
  data () {
    return {
      localTitle: this.title,
      localDescription: this.description,
      localThumbnail: this.thumbnail
    }
  },
  created () {
    this.$parent.$on('kakao-share-image', src => {
      this.localThumbnail = src
    })
    this.$EventBus.$on('get-class-info', data => {
      if (!this.title) {
        this.localTitle = data['PROGRAM_CLASS_NAME']
      }
      if (!this.thumbnail) {
        this.localThumbnail = data['PROGRAM_CLASS_THUMBNAIL_IMAGE_URL']
      }
    })

    this.$EventBus.$on('complete-link-copy', e => {
      this.$modal.show('dialog', {
        title: '링크가 복사되었습니다.',
        buttons: []
      })
      setTimeout(() => {
        this.$modal.hide('dialog')
      }, 800)
    })
  },
  methods: {
    openShare () {
      console.log(this.localThumbnail)
      this.$modal.show(ModalKakaoShare, {
        // component props
        title: this.localTitle,
        description: this.localDescription,
        thumbnail: this.localThumbnail,
        link: window.document.location.href
      }, {
        // modal props
      }, {
        // event
      })
    }
  }
}
</script>

<style lang="scss">
</style>
