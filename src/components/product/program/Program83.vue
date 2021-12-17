<template>
  <div class="contents bottom-sticky" ref="contents">
    <!-- slide -->
    <div class="slider-prd">
      <img src="../../../assets/images/program/class83-slide1.jpg" alt="T Factory X FLO 덕후콘 | 2021.12 PL">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header">
        <kakao-share
          title="메타버스에서 나의 아티스트를 만나다 | 던밀스 X ifland 팬미팅"
          description="덕콘만으로는 부족했던 찐팬들을 위해 ifland 팬미팅을 준비했어요."
        ></kakao-share>

        <em class="flag-solid7">EXHIBITION</em>
        <h2 class="details-tit">
          메타버스에서<br>
          나의 아티스트를 만나다<i class="pipe"></i><br>
          던밀스 X ifland 팬미팅
        </h2>
        <div class="tags">
          <span class="flag-basic">팬미팅</span>
          <span class="flag-basic">쌍방향소통</span>
          <span class="flag-basic">아티스트</span>
        </div>
        <p class="desc type2">
          [ifland X FLO 덕콘]<br>
          덕콘만으로는 부족했던 찐팬들을 위해<br>
          ifland 팬미팅을 준비했어요.
        </p>
      </div>
      <div class="details-inner">
        <h3 class="subtit">12월의 덕콘 - Special Event</h3>
        <p>
          "덕콘 라이브만으로는 아쉬웠던 찐팬들을 위해<br>
          덕콘이 깜짝 선물을 준비했습니다.<br>
          메타버스 플랫폼 ifland에서 진행되는 팬미팅을 통해<br>
          무대 뒷얘기 부터 그동안 아티스트에게 궁금했던 점들을 물어보세요.
        </p>
        <p style="margint-top:22px;">그리고 아티스트와 똑닮은 아바타와 함께 사진도 찍고, 춤추며 색다른 추억을 만들어요.</p>
        <div class="btn-wrap" style="margin: 24px 0 16px;"><button @click="clickButton('instagram')" class="btn-line big">공식 인스타그램 방문하기</button></div>
        <div class="btn-wrap"><button @click="clickButton('ifland')" class="btn-line big">ifland 다운로드 하기</button></div>
        <h3 class="subtit" style="margin-top: 48px;">던밀스 소개</h3>
        <div class="thumb"><img src="../../../assets/images/program/class83-conts1.png" alt=""></div>
        <p>VMC 소속의 아티스트 던밀스 (Don Mills)는 자신만의 개성있는 랩스타일로 힙합 팬들 뿐만이 아니라 대중들에게도 많은 관심과 사랑을 받고있다. 올해 정규 2집, EP, 여러개의 싱글을 발매하였으며 쇼미더머니10에 참가하여 다양한 모습을 보여주며 꾸준한 행보를 이어가고있다.</p>
      </div>
      <div class="details-inner">
        <h3 class="subtit">{{ $t('prd.schedule-place')}}</h3>
        <p>2021년 12월 18일(토) 오후 9시</p>
        <ul class="texts-info" style="margin-top:8px;">
          <li style="font-size:12px;"><span style="font-family: 'Noto Sans KR';">*</span> ifland 주소는 추후 공지 예정</li>
        </ul>
        <div class="notice">
          <h4 class="subtit">{{ $t('prd.notice')}}</h4>
          <ul class="texts-info">
            <li><span style="font-family: 'Noto Sans KR';">*</span> 참여인원 : 선착순 130명</li>
            <li><span style="font-family: 'Noto Sans KR';">*</span> 본 팬미팅으로 선착순 입장으로 진행되며, 정원 마감 시 입장이 제한될 수 있습니다.</li>
            <li><span style="font-family: 'Noto Sans KR';">*</span> 참석 전 ifland(이프랜드) 앱 미리 다운로드하여 설치 부탁드립니다.</li>
          </ul>
        </div>
        <div class="notice">
          <h4 class="subtit">방역패스 안내사항</h4>
          <ul class="texts-info">
            <li style="display:flex;">1. 백신 접종 완료자 :<span style="margin-left:4px;">COOV / 카카오톡 /<br>네이버 동의 증명서 / 예방접종 스티커</span></li>
            <li>2. PCR 음성 확인서 (48시간 이내)</li>
            <li>3. 만 18세 이하 청소년</li>
            <li>4. 확진 후 완치자 (격리해제 확인서)</li>
            <li>5. 백신접종 예외자 (보건소 발급소견서)</li>
          </ul>
          <p class="texts-notice" style="margin-top:20px;">본 클래스/투어/덕콘은 방역수칙 준수를 위해<br>방역패스 인증자에 한해 참여가 가능합니다.</p>
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
  name: 'Program83',
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
    clickButton (type) {
      let redirectURL = ''
      if (type === 'instagram') {
        redirectURL = 'https://www.instagram.com/tfactory_sampler/'
      } else if (type === 'ifland') {
        redirectURL = 'https://ifland.io/?utm_source=ifland&utm_medium=AppDownload&utm_campaign=AppDownload&utm_content=ifland'
      }
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
</style>
