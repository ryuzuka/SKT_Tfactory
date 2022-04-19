<template>
  <div class="contents" ref="contents">
	  <!-- slide -->
    <div class="slider-prd">
      <img ref="shareImage" src="../../../../assets/images/program/tuf-tuaf37-slide1.jpg" alt="tuf-tuaf37-slide1">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 40px 20px;">
        <kakao-share
         title="T University Art Festival - PART2"
          description="대학생들의 작품으로 꾸며진 팝업 전시 - 한국소년"
        ></kakao-share>

        <em class="main-subtitle">작품소개</em>
        <h2 class="main-title" style="margin-top: 4px;">
          행운을 주는<br>비니를 쓴 소녀<br>(Lucky Beanie Girl)
        </h2>
        <p class="introduce">
          작품 속에 등장하는 '머니 미(Money Me)'는 장난꾸러기 소녀이다. 이는 대부분의 사람들이 어렸을 적 아무 걱정 없이 살았던 달콤한 추억을 대변한다. 머니 미의 눈꺼풀 위에는 달라 표시, 양 볼은 “한국”을 상징하는 태극 무늬 볼터치(파란색, 빨간색)가 있다. 착용한 옷들은 사람들이 좋아하는 명품 브랜드가 주를 이루며, 머니 미의 치아는 동양의 오복 중 하나인 '건치'를 중국에서 부를 상징하는 숫자 "8"을 차용해 8개의 건치로 표현했으며, 이러한 소재는 궁극적은 긍정적인 상징과 메시지를 담고 있다.
       </p>
      </div>
      <div class="details-inner">
        <h2 class="main-title">작가소개</h2>
        <p class="introduce" style="margin-bottom: 24px;">
         <b>한국소년 작가</b>는 "행운"과 "돈"을 부르는 행운화를 그린다. 작가의 작품은 보기만 해도 직관적이고 유쾌함이 느껴진다. 일본의 카툰화와 미국의 카툰화 스타일을 섞은 작가만의 그림체는 기존 미술시장에서 볼 수 없는 독특한 느낌을 선사한다. 그림 교육을 받고 싶었으나 그러지 못하고 벽에 낙서를 하며 꿈을 키워온 작가는, ‘돈’으로 인<br>해 발생하는 불평등한 사회적 문제에 대한 고민에 빠진다. '돈'이 긍정적으로 쓰이면 좋은 영향력을 발휘할 수<br> 있다고 생각하며, '행운, 성공, 부, 돈, 희망, 꿈'을 그림에 담고 있다.
        </p>
        <div class="instagram">
          <span class="sns">작가 SNS</span>
          <a href="#" @click.prevent="snsLink('https://www.instagram.com/plus82boy')">www.instagram.com/plus82boy</a>
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
  name: 'Tuaf37',
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
	  this.$emit('kakao-share-image', this.$refs.shareImage.src)
  },
  methods: {
    snsLink (snsUrl) {
      const mobileOS = this.$cookies.get('platform')
      if (mobileOS === 'A' || mobileOS === 'I') {
        NATIVE.sysBrowserOpen(mobileOS, snsUrl)
      } else {
        window.open(snsUrl, '_blank')
      }
    },
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
