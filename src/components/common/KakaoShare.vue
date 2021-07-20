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
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    thumbnail: {
      type: String,
      default: ''
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
    this.$EventBus.$on('get-class-info', data => {
      if (!this.title) {
        this.localTitle = data['PROGRAM_CLASS_NAME']
      }
      if (!this.description) {
        this.localDescription = ''
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
