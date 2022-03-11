<template>
  <div class="contentss" ref="contents">
    <!-- slide -->
    <div class="slider-prd" style="padding-top:56px;">
      <img src="../../../assets/images/program/class104-slide1.jpg" alt="T Factory x FLO 덕콘">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 32px 20px 40px;">
        <kakao-share
          title="T Factory x FLO 덕콘"
          description="T Factory와 FLO가 함께 만드는 팬 초청 소규모 콘서트!"
        ></kakao-share>

        <em class="flag-solid7">CONCERT</em>
        <h2 class="details-tit" style="margin-top: 11px;">
         T Factory x FLO 덕콘
        </h2>
        <div class="tags" style="margin-top: 1px;">
          <span class="flag-basic">공연관람형</span>
          <span class="flag-basic">소규모콘서트</span>
          <span class="flag-basic">아티스트</span>
        </div>
        <p class="desc type2" style="margin-top: 22px;">
          T Factory와 FLO가 함께 만드는 팬 초청 소규모 콘서트!
          홍대 인디문화를 응원하고 일상의 작은 위로를 전하고자 매월 다양한 아티스트를 선정하여 무료 콘서트를 진행합니다. 아트스트가 직접 낸 덕력고사를 통과하신 팬 중 추첨을 통해 콘서트 초청의 기회를 드립니다.
        </p>
      </div>
      <div class="details-inner">
        <h3 class="subtit">THECON X UNIVERSITY<br>
        덕콘에서 우리학교를 만나다</h3>
        <p>
          T Factory에서 만든 콘서트 무대 '덕콘'에서 우리학교 대표 뮤지션을 만나다!<br>
          4월과 5월 덕콘 무대를 빛내줄 대학생 뮤지션 참가자를 모집합니다. 2인 이상으로 구성된 전국 대학교의 댄스, 밴드, 보컬, 랩 등 음악 퍼포먼스 동아리/팀은 모두 참가신청 가능합니다. (음악 장르 무관)
        </p>
      </div>
      <div class="details-inner">
        <h3 class="subtit">공연 일정</h3>
        <ul class="texts-list" style="padding-right: 34px;">
          <li>행사 기간 : 22.4.11 ~ 6월 말</li>
          <li style="display: flex;">공연 무대 :<span style="margin-left: 4px;"> SK텔레콤 플래그십스토어<br>
                       T Factory 덕콘 무대</span></li>
          <li>공연 일정 : 행사 기간 매주 수요일~금요일 저녁 중 1회 / 팀당 30분~60분 공연</li>
        </ul>
        <ul style="padding-right: 34px;">
          <li>※ 라인업은 4월의 덕콘, 5월의 덕콘, 6월의 덕콘에 공식 섭외 된 뮤지션 약 10여 팀과 대학생 참여팀으로 구성됩니다.</li>
          <li>※ 관객석 40석 이상 마련되어 있으며 친구, 가족, 지인 등 초대 가능합니다.</li>
          <li>※ T Factory 방문 고객들의 자유 관람이 있을 수 있습니다.</li>
        </ul>
        <h4 class=small-subtit style="margin-bottom: 4px;">참여 해택</h4>
        <ul style="padding-right: 34px;">
          <li style="display: flex;">1) <span style="margin-left: 3px;">SK텔레콤 및 T Factory 공식 SNS 채널 활용한 온라인 홍보 (사전/사후)</span></li>
          <li style="display: flex;">2) <span style="margin-left: 3px;">T Factory 내외부 대형 LED Wall<br>실시간 라이브 송출</span></li>
          <li>3) 팀별 무대 Customizing 지원</li>
          <li>4) 소정의 참가비</li>
        </ul>
      </div>
      <div class="details-inner">
        <h3 class="subtit">참여 신청 방법</h3>
        <ul class="texts-list">
          <li>모집 대상 : 2인이상으로 구성된 전국 대학교 밴드, 댄스, 보컬, 랩 등 음악 퍼포먼스 관련 동아리/팀</li>
          <li>접수 기간 : 22.3.11(금) ~ 3.24(목)</li>
          <li>대상자 결과 발표 : 22.3.28(월)</li>
        </ul>
        <h4 class=small-subtit>제출 자료</h4>
        <ul class="texts-list">
          <li>(필수) 대학명/동아리,팀명/멤버 소개 자료</li>
          <li>(필수) 공연영상 or 연습영상 최소 1개 이상</li>
          <li>(선택) 활동 모습을 볼 수 있는 SNS 계정</li>
        </ul>
         <h4 class=small-subtit>제출 방법</h4>
        <span>- 제출 서류를 포함해 skt.tfactory@gmail.com으로<br><em style="padding-left: 8px;"> 이메일 접수</em></span>
        <h3 class="subtit" style="margin-top: 40px;">다른 프로그램도 있어요!</h3>
        <div class="btn-wrap" style="margin: 12px 0;"><a href="/experience/program101?classId=149" class="btn-line big">3월의 덕콘</a></div>
        <div class="btn-wrap" style="margin: 12px 0px 0px;"><a href="/experience/program97?classId=131" class="btn-line big">next트레이서</a></div>
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
  name: 'Program104',
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
  padding:32px 20px 40px;
  }
}
</style>
