<template>
  <div class="contentss" ref="contents">
    <!-- slide -->
    <div class="slider-prd" style="padding-top:56px;">
      <img src="../../../assets/images/program/class110-slide1.jpg" alt="T대학 우주 축제">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 28px 12px 40px 20px;">
        <kakao-share
         title="T대학 우주 축제"
          description="TUF에 여러분을 초대합니다."
        ></kakao-share>

        <em class="main-subtitle">T대학 우주 축제</em>
        <h2 class="main-title" style="margin-top: 3px;">TUF에<br>여러분을 초대합니다.</h2>
        <p class="desc2" style="margin-top: 0px;">
          지난 2년간 사라진 대학교 축제가 T대학에서 다시 시작됩니다. T대학 우주 축제에서는 개인화 트렌드에 맞춰 나에게 딱 맞는 라이프스타일을 배울 수 있습니다.<br>
          T대학교에서 힙한 라이프스타일을 체험하고 T Factory에서 준비한 다양한 이벤트를 경험해보세요.
        </p>
        <p class="desc2" style="margin: 22px 0;">
          2022년 봄, 함께 즐길 수 있는 T대학 우주 축제가 여러분을 기다립니다.<br>Would you 우주?
        </p>
        <div class="btn-wrap" style="padding-right: 8px;">
          <button class="btn-line big" @click="clickButton('https://www.instagram.com/tfactory_sampler/')">
            공식 인스타그램 방문하기
          </button>
      </div>
      </div>
      <div class="details-inner">
        <h2 class="main-title" style="margin-bottom: 13px;">일정</h2>
        <dl>
          <dd>
            <span class="sub_title" style="width: 52px;">전시기간</span>
            <span class="desc" style="margin-left: 24px;">2022년 4월 11일(월) ~ 6월 30일 (목)</span>
          </dd>
          <dd>
            <span class="sub_title" style="width: 52px;">장소</span>
            <span class="desc" style="margin-left: 24px;">SK텔레콤 플래그십스토어 T Factory<br>(홍대입구역 9번 출구)</span>
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
      <div class="details-inner" style="padding: 40px 0">
        <h2 class="main-title" style="padding: 0 20px; color: #000;">함께즐겨요!</h2>
        <div class="program">
<!--          <a href="/experience/program111?classId=154">-->
            <div class="desc">
              <p class="detail">대학생 뮤지션이 꾸미는<br>덕콘의 스페셜 무대<br>THECON X University</p>
              <span class="topic">TUMF</span>
              <img style= "bottom: -7px; right: 85px;" src="../../../assets/images/program/leftarrow-bk.png" alt="leftarrow">
            </div>
            <div class="images">
              <img src="../../../assets/images/program/class107-conts1.jpg" alt="TUMF">
            </div>
<!--          </a>-->
        </div>
        <div class="program">
<!--	        <a href="/experience/program112?classId=155">-->
	          <div class="desc">
	            <p class="detail">미술 전공 대학생들의<br>일러스트로 꾸며진 팝업전시<br>POP-UP Exhibition X University</p>
	            <span class="topic">TUAF</span>
	            <img style="bottom: -7px; right: 165px;" src="../../../assets/images/program/leftarrow-bk.png" alt="leftarrow">
	          </div>
	          <div class="images">
	            <img src="../../../assets/images/program/class107-conts3.jpg" alt="POP-UP Exhibition X University">
	          </div>
<!--	        </a>-->
        </div>
      </div>
    </div>
    <!-- //details -->

    <!-- button set -->
    <program-button style="display: none"></program-button>
    <!-- // button set -->
  </div>
</template>

<script>
import KakaoShare from '../../common/KakaoShare'
import ProgramButton from './components/ProgramButton'
import * as NATIVE from '../../../js/native'

export default {
  name: 'Program110',
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
