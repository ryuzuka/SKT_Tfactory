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
      default: '내일을 만나는 곳 T Factory | T팩토리'
    },
    description: {
      type: String,
      default: 'SK텔레콤 플래그십 스토어 T팩토리에서 내일의 문화를 만나보세요.'
    },
    thumbnail: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      localThumbnail: this.thumbnail
    }
  },
  created () {
    if (this.thumbnail === null) {
      this.$EventBus.$on('get-class-info', data => {
        this.localThumbnail = data['PROGRAM_CLASS_THUMBNAIL_IMAGE_URL']
      })
    }
  },
  methods: {
    openShare () {
      this.$modal.show(ModalKakaoShare, {
        // component props
        title: this.title,
        description: this.description,
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
