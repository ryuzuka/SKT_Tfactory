<template>
  <div class="contents bottom-sticky" ref="contents">
    <!-- slide -->
    <div class="slider-prd">
      <img src="../../../assets/images/program/class82-slide1.jpg" alt="DJ 퍼포먼스 <SOUND Factory>:음악을 즐기는 N가지 방법">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header">
        <kakao-share
          title="DJ 퍼포먼스 <SOUND Factory> : 음악을 즐기는 N가지 방법"
          description="음악을 즐기는 N가지 방법"
        ></kakao-share>

        <em class="flag-solid7">EXHIBITION</em>
        <h2 class="details-tit">
          DJ 퍼포먼스<br>
          &#60;SOUND Factory&#62;:<br>
          음악을 즐기는 N가지 방법
        </h2>
        <div class="tags">
          <span class="flag-basic">공연</span>
          <span class="flag-basic">디제잉</span>
          <span class="flag-basic">이벤트 프로그램</span>
        </div>
        <p class="desc type2">이벤트 프로그램</p>
      </div>
      <div class="details-inner">
        <h3 class="subtit">DJ 퍼포먼스 소개</h3>
        <p>체험형 음악전시 &#60;사운드 팩토리&#62;에서 특별한 연말 무대를 준비했어요!</p>
        <p style="margin-top:20px;">
          매주 목요일 저녁, DJ페스티벌을 방불케 하는 6명의 DJ 라인업과 단독 퍼포먼스로<br>
          &#60;SOUND Factory&#62;를 더욱 재밌게 즐겨보세요!
        </p>
        <h3 class="subtit" style="margin-top:48px;">DJ 라인업</h3>
        <div class="thumb"><img src="../../../assets/images/program/class82-conts1.jpg" alt=""></div>
        <p>12월</p>
        <div class="thumb"><img src="../../../assets/images/program/class82-conts2.jpg" alt=""></div>
        <p>1월</p>
        <h3 class="subtit" style="margin-top:48px;">DJ 공연일정</h3>
        <p>매주 목요일 저녁 7시</p>
        <ul class="desc-list">
          <li><span class="day">12월 23일</span> 전용현</li>
          <li><span class="day">12월 30일</span> NEEDLE</li>
          <li><span class="day">1월 06일</span> CONAN</li>
          <li><span class="day">1월 13일</span> BEEJAY</li>
          <li><span class="day">1월 20일</span> SCHEDULE 1</li>
          <li><span class="day">1월 27일</span> BAGAGEE VIPHEX13</li>
        </ul>
      </div>
      <div class="details-inner">
        <h3 class="subtit">{{ $t('prd.schedule-place')}}</h3>
        <p>
          2021년 12월 23일(목) ~ 2022년 1월 27일(목)<br>
          매주 목요일 저녁 7시<br>
          홍대 T Factory 1층 Flex Stage
        </p>
        <div class="notice">
          <h4 class="subtit">{{ $t('prd.notice')}}</h4>
          <ul class="texts-info">
            <li>* 본 전시는 T Factory 홍대점을 방문하여 스마트폰으로 체크인 한 경우에만 참여 가능합니다. (체크인 가능 연령: 만 14세 이상)</li>
            <li style="margin-top:12px">* 본 이벤트 프로그램 세부 사항들은 업체 사정에 따라 별도의 안내 없이 중단 또는 변경될 수 있습니다.</li>
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
  name: 'Program82',
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
.texts-list li:before {
  content: '-' !important;
  margin-left: -9px;
}
</style>
