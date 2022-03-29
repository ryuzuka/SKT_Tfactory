<template>
  <div class="contents bottom-sticky" ref="contents">
    <!-- slide -->
    <div class="slider-prd">
      <img src="../../../assets/images/program/class111-slide1.jpg" alt="THECON X University">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 28px 12px 40px 20px;">
        <kakao-share
         title="THECON X University"
          description="대학생 뮤지션이 꾸미는 덕콘의 스페셜 무대"
        ></kakao-share>

        <em class="main-subtitle">대학생 뮤지션이 꾸미는 덕콘의 스페셜 무대</em>
        <h2 class="main-title" style="margin-top: 5px;">THECON X University</h2>
        <p class="desc2" style="margin-top: 0px;">
          무대에 설 기회를 잃은 대학생 뮤지션들을 위해 T Factory가 올봄 선물을 준비했습니다. T대학 우주 축제 기간 동안 T Factory에서 만든 콘서트 무대 '덕콘'를 대학생 뮤지션도 함께 채워 줄 예정입니다. 대학 뮤지션만의 열정적인 무대를 함께 즐겨주세요.
        </p>
      </div>
      <div class="details-inner">
        <h2 class="main-title" style="margin-bottom: 13px;">일정</h2>
        <dl>
          <dd>
            <span class="sub_title" style="width: 52px;">전시기간</span>
            <span class="desc" style="margin-left: 24px;">2022년 4월 중</span>
          </dd>
          <dd>
            <span class="sub_title" style="width: 52px;">장소</span>
            <span class="desc" style="margin-left: 24px;">SK텔레콤 플래그십스토어<br>T Factory 2층 0 stage<em class="flag-basic" style="margin: 0 11px;">공간보기</em><br>(홍대입구역 9번 출구)</span>
          </dd>
          <dd style="margin-top: 16px">
            <span>※대학생 뮤지션 라인업은 추가 공지될 예정입니다.</span>
          </dd>
        </dl>
      </div>
      <div class="details-inner">
        <h2 class="main-title">안내사항</h2>
        <ul>
          <li>※ 본 전시는 T Factory 홍대점을 방문하여 스마트폰으로 체크인 한 경우에만 참여 가능합니다. (체크인 가능 연령: 만 14세 이상)</li>
          <li>※ 본 전시 세부 사항들은 업체 사정에 따라 별도의 안내 없이 중단 또는 변경될 수 있습니다.</li>
        </ul>
      </div>
      <div class="details-inner" style="padding: 40px 0 20px">
        <h2 class="main-title" style="padding: 0 20px; color: #000;">함께즐겨요!</h2>
        <div class="program">
          <div class="desc">
            <p class="detail" style="margin-bottom: 25px;">Woluld you, 우주?</p>
            <span class="topic">T대학 우주 축제, TUF</span>
            <img style="right: -61px;" src="../../../assets/images/program/leftarrow-bk.png" alt="leftarrow">
          </div>
          <div class="images">
            <img src="../../../assets/images/program/class111-conts1.jpg" alt="T대학 우주 축제, TUF">
          </div>
        </div>
        <div class="program">
          <div class="desc">
            <p class="detail" style="margin-bottom: 16px;">미술 전공 대학생들의<br>일러스트로 꾸며진 팝업전시</p>
            <span class="topic">POP-UP Exhibition<br>X University</span>
            <img style="bottom: 2px; right: -42px;" src="../../../assets/images/program/leftarrow-bk.png" alt="leftarrow">
          </div>
          <div class="images">
            <img src="../../../assets/images/program/class110-conts2.jpg" alt="POP-UP Exhibition X University">
          </div>
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
  name: 'Program111',
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
  padding:40px 20px;
  ul{
    font-size: 12px;
    line-height: 19px;
    color: #787878;
    }
  }
}
</style>
