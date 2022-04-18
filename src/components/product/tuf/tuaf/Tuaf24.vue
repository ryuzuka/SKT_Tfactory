<template>
  <div class="contents" ref="contents">
	  <!-- slide -->
    <div class="slider-prd">
      <img src="../../../../assets/images/program/tuf-tuaf24-slide1.jpg" alt="tuf-tuaf24-slide1">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 40px 20px;">
        <kakao-share
         title="T University Art Festival - PART2"
          description="대학생들의 작품으로 꾸며진 팝업 전시 - 유민진"
        ></kakao-share>

        <em class="main-subtitle">작품소개</em>
        <h2 class="main-title" style="margin-top: 4px;">
          태초의 우주
        </h2>
        <p class="introduce">
          우주인의 안전 끈과 아기의 탯줄, 우주 속과 양수 속 서로 같은 듯 다른 세계. 엄마의 뱃속에서부터 시작된 '나의 우주'<br>
          악동뮤지션 이수현의 &lt;ALIEN&gt; 中 "My mama told me I'm ALIEN", "따뜻한 물에서 수영하는 걸 좋아했던 널 내가 데려온 거야"
       </p>
      </div>
      <div class="details-inner">
        <h2 class="main-title">작가소개</h2>
        <p class="introduce" style="margin-bottom: 24px;">
          숭실대학교 글로벌미디어학부 2학년에 재학 중인 21살 <b>유민진 작가</b>는 디자이너를 꿈꾸고 있다.<br>
          노래와 작품을 연결 짓는 것을 좋아하며, 이번 전시작인<br>&lt;태초의 우주&gt; 또한 악동뮤지션 이수현의 &lt;ALIEN&gt; 이라는 노래를 함께 들으시면 작품을 더 공감하면서 감상할 수 있다고 한다.
        </p>
        <div class="instagram">
          <span class="sns">작가 SNS</span>
          <a href="www.instagram.com/yum_mydesign">www.instagram.com/yum_mydesign</a>
        </div>
      </div>
    </div>
    <!-- //details -->
  </div>
</template>

<script>
import * as NATIVE from '../../../../js/native'
import KakaoShare from '../../../common/KakaoShare'

export default {
  name: 'Tuaf24',
  components: {
    KakaoShare
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
  @import 'src/assets/css/product';
</style>
<style lang="scss" scoped>
.details{
  &-inner {
  padding: 40px 20px;
  }
  .introduce{
    margin-top: 0;
    line-height: 20px;
  }
  .instagram{
    line-height: 24px;
    .sns{
      margin-right: 19px;
      font-weight: bold;
      color: #000;
    }
  }
}
</style>
