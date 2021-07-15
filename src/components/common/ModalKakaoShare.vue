<template>
  <div class="popup">
    <div class="layer-cont">
      <div><button>공유</button></div>
      <div><button>복사</button></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ModalKakaoShare',
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
    copyLink () {
      let linkUrl = window.document.location.href
      this.$copyText(linkUrl)
    },
    setKakaoShare () {
      let kakao = window.Kakao

      kakao['Link']['createDefaultButton']({
        container: '#kakaoShare',
        objectType: 'feed',
        content: {
          title: this.title,
          description: this.description,
          imageUrl: this.shareImage,
          link: {
            webUrl: this.shareLink,
            mobileWebUrl: this.shareLink
          }
        },
        buttons: [
          {
            title: '웹으로 보기',
            link: {
              webUrl: this.shareLink,
              mobileWebUrl: this.shareLink
            }
          }
        ]
        // social: {
        //   likeCount: 10,
        //   commentCount: 20,
        //   sharedCount: 30
        // },
      })
    }
  },
  created () {
  },
  mounted () {
  }
}
</script>

<style lang="scss">
</style>
