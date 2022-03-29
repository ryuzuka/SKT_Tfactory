<template>
  <div class="contents bottom-sticky" ref="contents">
    <!-- slide -->
    <div class="slider-prd">
      <img src="../../../assets/images/program/class112-slide1.jpg" alt="THECON X University">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 28px 12px 40px 20px;">
        <kakao-share
         title="POP-UP Exhibition X University"
          description="미술 전공 대학생들이 축제, 나의 우주를 주제로 작업한 일러스트로 꾸며진 팝업전시"
        ></kakao-share>

        <em class="main-subtitle">미술 전공 대학생들이 축제, 나의 우주를<br>주제로 작업한 일러스트로 꾸며진 팝업전시</em>
        <h2 class="main-title" style="margin-top: 5px;">POP-UP Exhibition<br>X University</h2>
        <p class="desc2" style="margin-top: 0px;">
          T Factory와 FLO가 함께 만드는 팬 초청 소규모 콘서트! 홍대 인디문화를 응원하고 일상의 작은 위로를 전하고자 매월 다양한 아티스트를 선정하여 무료 콘서트를 진행합니다. 아트스트가 직접 낸 덕력고사를 통과하신 팬 중 추첨을 통해 콘서트 초청의 기회를 드립니다.
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
            <span class="desc" style="margin-left: 24px;">SK텔레콤 플래그십스토어<br>T Factory 2층 POP-UP 전시존<br>(홍대입구역 9번 출구)</span>
          </dd>
          <dd style="margin-top: 16px">
            <span>※전시 작품은 추가 공지될 예정입니다.</span>
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
	        <a href="/experience/program111?classId=154">
	          <div class="desc">
	            <p class="detail">대학생 뮤지션이 꾸미는<br>덕콘의 스페셜 무대</p>
	            <span class="topic">THECON X University</span>
	            <img src="../../../assets/images/program/leftarrow-bk.png" alt="leftarrow">
	          </div>
	          <div class="images">
	            <img src="../../../assets/images/program/class110-conts1.jpg" alt="THECON X University">
	          </div>
	        </a>
        </div>
        <div class="program">
	        <a href="/experience/program112?classId=155">
	          <div class="desc">
	            <p class="detail" style="margin-bottom: 16px;">미술 전공 대학생들의<br>일러스트로 꾸며진 팝업전시</p>
	            <span class="topic">POP-UP Exhibition<br>X University</span>
	            <img style="bottom: 2px; right: -42px;" src="../../../assets/images/program/leftarrow-bk.png" alt="leftarrow">
	          </div>
	          <div class="images">
	            <img src="../../../assets/images/program/class110-conts2.jpg" alt="POP-UP Exhibition X University">
	          </div>
	        </a>
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
  name: 'Program112',
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
