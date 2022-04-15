<template>
  <div class="contents" ref="contents">
	  <!-- slide -->
    <div class="slider-prd swiper-top">
      <swiper :options="swiperOption">
        <swiper-slide>
          <div class="thumb"><img src="../../../../assets/images/program/tuf-tuaf19-slide1.jpg" alt=""></div>
        </swiper-slide>
        <swiper-slide>
          <div class="thumb"><img src="../../../../assets/images/program/tuf-tuaf19-slide2.jpg" alt=""></div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 40px 20px;">
        <kakao-share
         title="T University Art Festival - PART1"
          description="대학생들의 작품으로 꾸며진 팝업 전시 - 배세아"
        ></kakao-share>

        <em class="main-subtitle">작품소개</em>
        <h2 class="main-title" style="margin-top: 4px;">Countless presents</h2>
        <p class="introduce">
          사진 속 인물이 바라보는 방향은 서로 다르다.<br>
          이는 미래를 미리 알 수 없음을 뜻한다.<br>
          그런데도 이들은 앞으로의 ‘현재’를 계속해서 반복할 것이다.<br>
          모든 반복은 연결되어 자신 내면의 거대한 우주를 개척한다.<br>
          우리는 자신이 개척한 내면세계에서 무의식 상태로 다음 목적지를 향해 내달리고 있다.
        </p>
      </div>
      <div class="details-inner">
        <h2 class="main-title">작가소개</h2>
        <p class="introduce" style="margin-bottom: 24px;">
          <b>작가 배세아</b>는 디렉팅, 포토그래피 활동을 하는 시각디자이너이다.<br>
          멈추어져 있는 것이 아닌 ‘스토리’가 보이는 시각물을 추구한다.
        </p>
        <div class="instagram">
          <span class="sns">작가 SNS</span>
          <a href="www.instagram.com/pearbirdport">www.instagram.com/pearbirdport</a>
        </div>
      </div>
    </div>
    <!-- //details -->
  </div>
</template>

<script>
import * as NATIVE from '../../../../js/native'

export default {
  name: 'Tuaf19',
  components: {
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination'
        }
      }
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
.swiper-pagination-bullets {
  bottom: 16px;
}
</style>
