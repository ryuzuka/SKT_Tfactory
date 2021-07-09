<template>
  <div class="btn-wrap">
    <button class="btn-line big" id="kakaoShare">카카오 공유하기</button>
    <button class="btn-solid big" @click="copyLink">링크 복사</button>
  </div>
</template>

<script>
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
      default: 'https://www.tfactory.co.kr/static/img/main_banner_01.bdfc21c.jpg'
    },
    shareLink: {
      type: String,
      default: 'https://www.tfactory.co.kr'
    }
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
  mounted () {
    this.setKakaoShare()
  },
  created () {
  }
}
</script>

<style lang="scss">
</style>
