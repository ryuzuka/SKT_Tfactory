<template>
  <div class="contentss" ref="contents">
    <!-- slide -->
    <div class="slider-prd" style="padding-top: 56px;">
      <img src="../../../assets/images/program/class105-slide1.jpg" alt="T Factory POP-UP Exhibition">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 32px 12px 40px 20px;">
        <kakao-share
          title="T Factory POP-UP Exhibition"
          description="SK텔레콤 플래그십스토어 T Factory 2층 POP-UP Zone에서는 트렌디한 팝업전시가 펼쳐집니다."
        ></kakao-share>

        <em class="flag-solid7">EXHIBITION</em>
        <h2 class="details-tit" style="margin-top: 10px;">
         T Factory POP-UP Exhibition
        </h2>
        <div class="tags">
          <span class="flag-basic">전시</span>
          <span class="flag-basic">체험</span>
          <span class="flag-basic">이벤트</span>
        </div>
        <p class="desc type2">
         SK텔레콤 플래그십스토어 T Factory 2층 POP-UP Zone에서는 트렌디한 팝업전시가 펼쳐집니다.
        </p>
        <p class="desc type2" style="margin-top: 22px;">
         iPhone13출시기념 하시시박 사진전, Apple TV 미디어아트전, 출시기념 단말전시부터 브랜드 콜라보레이션까지!
        </p>
        <p class="desc type2" style="margin-top: 22px;">
         늘 변화하는 팝업전시를 기대해주세요.
        </p>
      </div>
      <div class="details-inner">
        <h3 class="subtit">POP-UP EXHIBITION x UNIVERSITY<br>대학생 일러스트 팝업전시<br>
        참가자를 모집합니다.</h3>
        <p>
        작품 전시 기회가 줄어든 요즘,<br>
        미술 전공 대학생들을 응원하고자 T Factory에서<br>
        팝업 전시 공간을 무료로 제공해드립니다.
        </p>
        <p style="margin-top: 22px;">
        전시 기회 제공과 함께 다양한 온/오프라인 채널을 통한 홍보. 그리고 전시작품 판매 기회까지 제공되니 미술 전공 대학생들의 많은 참여 신청 바랍니다.
        </p>
      </div>
      <div class="details-inner">
        <h3 class="subtit">전시 안내</h3>
        <ul class="texts-list" style="padding-right: 34px;">
          <li>전시 기간 : 22.4.11(월) ~ 6월말</li>
          <li style="display:flex;">전시 장소 :<span style="margin-left: 4px;"> SK텔레콤 플래그십스토어<br>T Factory POP-UP ZONE</span></li>
        </ul>
        <ul style="padding-right: 34px;">
          <li>※ 전시 운영 방식은 미정이며, 추후 재공지 예정</li>
        </ul>
        <h4 class=small-subtit style="margin-bottom: 4px;">참여 해택</h4>
        <ul class="texts-list" style="padding-right: 34px;">
          <li>전시 공간 무료제공</li>
          <li>전시 홍보지원 : SK텔레콤,<br>T Factory 공식 SNS 채널을 활용한 홍보</li>
          <li>작가 인터뷰 영상 제작</li>
          <li>전시 작품 판매 기회 제공</li>
        </ul>
        <span>* 전시 작품 수익금은 전액 작가에게 지급되며,<br><em style="padding-left: 8px;">T Factory는 판매대 업무만 담당합니다.</em></span>
      </div>
      <div class="details-inner">
        <h3 class="subtit">전시 접수 방법</h3>
        <ul class="texts-list">
          <li>모집 기간: ’22. 3.14(월)~3.27(일)</li>
          <li>결과 발표: ’22. 3.30(수), 개별연락</li>
        </ul>
        <span>※ T Factory 내부 기준에 따른 선발 방식</span>
        <ul class="texts-list" style="margin-top: 24px;">
          <li>대상: 전국 대학교 재학생 및 휴학생</li>
          <li>인원: 00명</li>
          <li>주제: ‘축제(Festival)’ 또는 ‘나의 우주(Universe)’</li>
        </ul>
        <h4 class=small-subtit>제출 자료 (필수)</h4>
        <ul>
          <li>[필수] 작가정보(대학명/학과/이름) 및 작품 포트폴리오</li>
          <li style="display: flex;">[필수] <span style="margin-left: 4px;">전시 원하는 작품 파일 및 작품 소개글<br>
          ㄴ 작품 규격: A2또는A3 사이즈<br>
          (회화: W420 이하x H594 이하)</span></li>
          <li>[선택] 작가 작품활동 담은 SNS 계정</li>
        </ul>
        <ul class="texts-list" style="margin-top: 0px;">
          <li>제출 방법</li>
          <li>제출 자료를 skt.tfactory@gmail.com으로<br>이메일 접수</li>
        </ul>
        <h3 class="subtit" style="margin-top: 40px;">다른 프로그램도 있어요!</h3>
        <div class="btn-wrap" style="margin: 12px 0;"><button class="btn-line big">3월의 덕콘</button></div>
        <div class="btn-wrap" style="margin: 12px 0px 0px;"><button class="btn-line big">하시시박 사진전</button></div>
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
  name: 'Program105',
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
