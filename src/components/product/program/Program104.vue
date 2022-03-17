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

        <em class="main-subtitle">T Factory x FLO</em>
        <h2 class="main-title" style="margin-top:4px;">덕콘</h2>
        <p class="desc2">
          T Factory와 FLO가 함께 만드는 팬 초청 소규모 콘서트!
          홍대 인디문화를 응원하고 일상의 작은 위로를 전하고자 매월 다양한 아티스트를 선정하여 무료 콘서트를 진행합니다. 아트스트가 직접 낸 덕력고사를 통과하신 팬 중 추첨을 통해 콘서트 초청의 기회를 드립니다.
        </p>
      </div>
      <div class="details-header" style="padding: 16px 20px 48px;">
        <em class="main-subtitle">THECON X University</em>
        <h2 class="main-title" style="margin-top: 2px; line-height: 40px;">덕콘에서<br>우리학교를 만나다</h2>
        <p style="line-height: 20px;">
          T Factory에서 만든 콘서트 무대 '덕콘'에서 우리학교 대표 뮤지션을 만나다!<br>
          4월과 5월 덕콘 무대를 빛내줄 대학생 뮤지션 참가자를 모집합니다. 2인 이상으로 구성된 전국 대학교의 댄스, 밴드, 보컬, 랩 등 음악 퍼포먼스 동아리/팀은 모두 참가신청 가능합니다. (음악 장르 무관)
        </p>
      </div>
      <div class="details-inner">
        <h2 class="main-title" style="margin-bottom: 12px;">공연 일정</h2>
        <dl>
          <dd>
            <span class="sub_title">행사 기간</span>
            <span class="desc">22.4.11 ~ 6월 말</span>
          </dd>
           <dd>
            <span class="sub_title">공연 무대</span>
            <span class="desc">SK텔레콤 플래그십스토어<br>T Factory 덕콘 무대</span>
          </dd>
           <dd>
            <span class="sub_title">공연 일정</span>
            <span class="desc">행사 기간 매주 수요일~금요일 저녁 중 1회 /<br>팀당 30분~60분 공연</span>
          </dd>
        </dl>
        <h4 class="sub_title">참여 혜택</h4>
        <ol class="step-list" style="margin-bottom: 40px;">
          <li class="benefit">
            SK텔레콤 및 T Factory 공식 SNS 채널 활용한<br>
            온라인 홍보 (사전/사후)
          </li>
          <li class="benefit">
            T Factory 내외부 대형 LED Wall<br>
            실시간 라이브 송출
          </li>
          <li class="benefit">
            팀별 무대 Customizing 지원
          </li>
          <li class="benefit">
            소정의 참가비
          </li>
        </ol>
        <h2 class="main-title" style="margin-bottom: 12px;">참여 신청 방법</h2>
        <dl>
          <dd>
            <span class="sub_title">모집 대상</span>
            <span class="desc">2인이상으로 구성된 전국 대학교 밴드, 댄스,<br>보컬, 랩 등 음악 퍼포먼스 관련 동아리/팀</span>
          </dd>
          <dd>
            <span class="sub_title">접수 기간</span>
            <span class="desc">22.3.11(금) ~ 3.24(목)</span>
          </dd>
          <dd>
            <span class="sub_title">대상자 결과 발표</span>
            <span class="desc">22.3.28(월)</span>
          </dd>
        </dl>
        <h4 class="sub_title">제출 자료</h4>
        <ul>
          <li class="benefit">- (필수) 대학명/동아리,팀명/멤버 소개 자료</li>
          <li class="benefit">- (필수) 공연영상 or 연습영상 최소 1개 이상</li>
          <li class="benefit">- (선택) 활동 모습을 볼 수 있는 SNS 계정</li>
        </ul>
         <h4 class="sub_title">제출 방법</h4>
        <span>제출 서류를 포함해 skt.tfactory@gmail.com으로 이메일 접수</span>
      </div>
      <div class="line">
        <span>THECON&nbsp;&nbsp;&nbsp; THECON&nbsp;&nbsp;&nbsp; THECON&nbsp;&nbsp;&nbsp; THECON&nbsp;&nbsp;&nbsp; THE</span>
        <img src="../../../assets/images/program/line-bg.png" alt="THECON line-bg">
      </div>
      <div class="details-bottom">
        <h2 class="title">다른 프로그램도 있어요!</h2>
        <div class="other-programs">
          <div class="program">
            <div class="desc">
              <a href="/experience/program101?classId=149">
                <span class="topic">3월의 덕콘</span>
              </a>
              <span class="date">2022.03</span>
            </div>
            <div class="images">
              <img src="../../../assets/images/program/class104-conts1.jpg" alt="3월의 덕콘">
            </div>
          </div>
          <div class="program">
            <div class="desc">
              <a href="/experience/program97?classId=131">
                <span class="topic">NEXT트레이서</span>
              </a>
              <span class="date">2022.02~04</span>
            </div>
            <div class="images">
              <img src="../../../assets/images/program/class104-conts2.jpg" alt="NEXT 트레이서">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- //details -->

    <!-- button set -->
    <program-button :visible="false"></program-button>
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
  padding:48px 20px;
  line-height: 19px;
  }
}
</style>
