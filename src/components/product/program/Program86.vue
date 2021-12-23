<template>
  <div class="contents" ref="contents">
  <!-- slide -->
  <div class="slider-prd">
      <img src="../../../assets/images/program/class86-slide1.jpg" alt="T Factory X FLO 덕후콘 | 1월의 덕콘">
    </div>
  <!-- //slide -->
  <!-- details -->
  <div class="details sticky">
    <!-- <kakao-share
      title="12월의 덕콘"
      description="T Factory와 FLO가 함께 만드는 팬 초청 소규모 콘서트를 소개합니다."
    ></kakao-share> -->

    <div class="details-header">
      <em class="flag-solid7">CONCERT</em>
      <h2 class="details-tit">1월의 덕콘</h2>
      <div class="tags">
        <span class="flag-basic">공연관람형</span>
        <span class="flag-basic">소규모콘서트</span>
        <span class="flag-basic">덕력고사</span>
      </div>
    </div>
    <div class="details-inner">
      <h3 class="subtit">1월의 덕콘</h3>
      <p>
        22년을 여는 1월의 덕콘도<br>
        다양한 아티스트와 함께합니다.<br>
        라인업에 최애아티스트가 있다면<br>
        눈앞에서 직관하며 응원할 수 있는<br>
        덕콘을 놓치지마세요!
      </p>
      <ul class="desc-list" style="margin-top:32px;">
        <li><em style="font-weight:500;">1월의 덕콘 라인업</em></li>
        <li style="margin-top:4px;"><span class="day" style="width:36px;">1.7</span> 모브닝</li>
        <li><span class="day" style="width:36px;">1.8</span> 터치드</li>
        <li style="margin-top:4px;"><span class="day" style="width:36px;">1.14</span> 안녕바다</li>
        <li><span class="day" style="width:36px;">1.15</span> W24</li>
        <li style="margin-top:4px;"><span class="day" style="width:36px;">1.21</span> 언오피셜보이</li>
        <li><span class="day" style="width:36px;">1.22</span> 너드커넥션</li>
        <li><span class="day" style="width:36px;">1.23</span> 데이브레이크</li>
      </ul>
    </div>
    <div class="details-inner">
      <h3 class="subtit">T Factory x FLO 덕콘(THECON)</h3>
      <div class="thumb"><img src="../../../assets/images/program/class86-conts1.jpg" alt="T Factory x FLO 입덕후콘서트"></div>
      <p>
        T Factory와 FLO가 함께 만드는 팬 초청 소규모 콘서트를 소개합니다.<br>
        콘서트가 사라진 요즘, 홍대 인디문화 부흥과 일상의 작은 위로를 전하고자 T Factory에서 매월 다양한 아티스트를 선정하여 무료 콘서트를 진행합니다.<br>
        아티스트가 직접 낸 덕력고사를 통과한 팬들 중 추첨을 통해 콘서트 초청의 기회를 드립니다.
      </p>
      <ul style="margin-top: 22px;">
        <li>※ 본 콘서트는 코로나19 방역 수칙을 준수하여 진행됩니다.</li>
        <li>※ 사회적 거리두기 단계에 따라 비대면으로 전환될 수 있습니다.</li>
      </ul>
      <h3 class="subtit">1월의 덕콘 라인업</h3>
      <program-lineup
        :class-id-list="['120', '121', '122', '123', '124', '125', '126']"
      ></program-lineup>
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
        <p class="texts-notice" style="margin-top:8px;">덕콘은 14세 미만의 고객도 보호자 동반 하에 당첨 및 참여가 가능하나, 보호자도 함께 응모에 당첨되어야 하는점 유의부탁드립니다.</p>
      </div>
      <!-- <ul class="list-program wide">
        <li>
          <a href="./program41?classId=64">
            <div class="thumb">
              <img src="../../../assets/images/program/class63-conts1.jpg" alt="">
              </div>
            <div class="info">
              <span class="flag-solid8">모집중</span>
              <p class="tit"><em>11월의 덕콘 | 딕펑스</em></p>
              <p class="subtext">11월 5일(금) 오후 8시</p>
            </div>
          </a>
        </li>
        <li>
          <a href="./program61?classId=83">
            <div class="thumb">
              <img src="../../../assets/images/program/class63-conts2.jpg" alt="">
              </div>
            <div class="info">
              <span class="flag-solid8">모집중</span>
              <p class="tit"><em>11월의 덕콘 | 김제형</em></p>
              <p class="subtext">11월 12일(금) 오후 8시</p>
            </div>
          </a>
        </li>
        <li>
          <a href="./program62?classId=84">
            <div class="thumb">
              <img src="../../../assets/images/program/class63-conts3.jpg" alt="">
              </div>
            <div class="info">
              <span class="flag-solid10">모집예정</span>
              <p class="tit"><em>11월의 덕콘 | 너드커넥션</em></p>
              <p class="subtext">11월 19일(금) 오후 8시</p>
            </div>
          </a>
        </li>
        <li>
          <a href="./program42?classId=65">
            <div class="thumb">
              <img src="../../../assets/images/program/class63-conts4.jpg" alt="">
              </div>
            <div class="info">
              <span class="flag-solid10">모집예정</span>
              <p class="tit"><em>11월의 덕콘 | 윤현상</em></p>
              <p class="subtext">11월 26일(금) 오후 8시</p>
            </div>
          </a>
        </li>
      </ul> -->
    </div>
  </div>
</div>
</template>

<script>
import KakaoShare from '../../common/KakaoShare'
import ProgramLineup from './components/ProgramLineup'
import * as NATIVE from '../../../js/native'

export default {
  name: 'Program68',
  components: {
    KakaoShare,
    ProgramLineup
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
  .texts-list li:nth-child(2):before {
    content: '-' !important;
    margin-left: -9px;
  }
</style>
