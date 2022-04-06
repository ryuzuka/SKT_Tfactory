<template>
  <div class="contents bottom-sticky" ref="contents">
    <!-- slide -->
    <div class="slider-prd">
      <img src="../../../assets/images/program/class85-slide1.jpg" alt="F.Y.i OFFICE : FOR YOUR iNTERNSHIP">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header">
        <kakao-share
          title="F.Y.i OFFICE : FOR YOUR iNTERNSHIP"
          description="SKT 1020 브랜드 0(young)와 모베러웍스의 콜라보 팝업"
        ></kakao-share>

        <em class="flag-solid7">EXHIBITION</em>
        <h2 class="details-tit">F.Y.i OFFICE<br>: FOR YOUR iNTERNSHIP</h2>
        <div class="tags">
          <span class="flag-basic">전시</span>
          <span class="flag-basic">체험</span>
          <span class="flag-basic">이벤트</span>
        </div>
        <p class="desc type2">SKT 1020 브랜드 0(young)와 모베러웍스의 콜라보 팝업</p>
      </div>
      <div class="details-inner">
        <h3 class="subtit">전시 소개</h3>
        <p>
          SKT 0과 모베러웍스의 콜라보 팝업,<br>
          세상에서 가장 유쾌한 사무실 &#60;F.Y.i OFFICE&#62;가 오픈합니다.
        </p>
        <p style="margin-top:22px;">단 하나뿐인, 특별한 제품을 기획하는 iNTERNSHIP을 경험하고, 아이키와 이무진, 모춘의 오피스도 구경하세요!</p>
        <p style="margin-top:22px;">0X모베러웍스 한정판 굿즈도 오직 F.Y.i OFFICE에서만 만나볼 수 있습니다.</p>
        <div class="btn-wrap" style="margin-top: 24px;">
          <button @click="clickButton" class="btn-line big">상세보기</button>
        </div>
      </div>
      <div class="details-inner">
        <h3 class="subtit">일정 및 장소</h3>
        <p>
          2021년 12월 18일(토) ~ 2021년 12월 31일(금)<br>
          홍대 T Factory 2층 (서울 마포구 양화로 144)
        </p>
        <div class="notice">
          <h4 class="subtit">유의사항</h4>
          <ul class="texts-info">
            <li>* 본 전시는 T Factory 홍대점을 방문하여 스마트폰으로 체크인 한 경우에만 참여 가능합니다. (체크인 가능 연령: 만 14세 이상)</li>
            <li style="margin-top:12px">* 본 이벤트 프로그램 세부 사항들은 업체 사정에 따라 별도의 안내 없이 중단 또는 변경될 수 있습니다.</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- //details -->

    <!-- button set -->
    <program-button></program-button>
    <!-- // button set -->
  </div>
</template>

<script>
import KakaoShare from '../../common/KakaoShare'
import ProgramButton from './components/ProgramButton'
import * as NATIVE from '../../../js/native'

export default {
  name: 'Program84',
  components: {
    KakaoShare,
    ProgramButton
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
      const redirectURL = 'https://www.0handong-fyi.com/iphone13.do'
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
.texts-list li:before {
  content: '-' !important;
  margin-left: -9px;
}
.step-list>li:first-child::before {
    margin: 3px 6px 0 -22px;
}
</style>
