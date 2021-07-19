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
        this.localDescription = data['PROGRAM_CLASS_SCHEDULE_GUIDE']
      }
      if (!this.thumbnail) {
        this.localThumbnail = data['PROGRAM_CLASS_THUMBNAIL_IMAGE_URL']
      }
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
