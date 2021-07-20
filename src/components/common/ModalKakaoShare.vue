<template>
  <div class="popup">
    <header>
      <button class="btn-close" @click="$emit('close')"><span class="blind">닫기</span></button>
    </header>
    <div class="layer-cont popup-share">
      <div class="btn-kakao"><button @click="shareLink"></button><p>카카오톡</p></div>
      <div class="btn-share"><button @click="copyLink"></button><p>URL 복사</p></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalKakaoShare',
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
      default: 'https://www.tfactory.co.kr/static/img/main_banner_01.bdfc21c.jpg'
    },
    link: {
      type: String,
      default: 'https://www.tfactory.co.kr'
    }
  },
  data () {
    return {}
  },
  methods: {
    copyLink () {
      let linkUrl = window.document.location.href
      this.$copyText(linkUrl)
      this.$emit('close')
      this.$EventBus.$emit('complete-link-copy')
    },
    shareLink () {
      let kakao = window.Kakao
      kakao['Link']['sendDefault']({
        objectType: 'feed',
        content: {
          title: this.title,
          description: this.description,
          imageUrl: this.thumbnail,
          link: {
            mobileWebUrl: this.link,
            webUrl: this.link
          }
        }
      })
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
</style>
