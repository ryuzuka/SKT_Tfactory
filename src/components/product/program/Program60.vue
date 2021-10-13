<template>
  <div class="contents" ref="contents">
  <!-- slide -->
  <div class="slider-prd">
      <img src="../../../assets/images/program/class60-slide1.jpg" alt="T Factory X FLO 덕후콘 | 2021.10 THAMA">
    </div>
  <!-- //slide -->
  <!-- details -->
  <div class="details sticky">
    <kakao-share
      title="10월의 덕콘"
      description="THAMA, 허성현(Huh!), 위아더나잇"
      thumbnail="https://tshop-public-image.s3.ap-northeast-2.amazonaws.com/X7Uc32PCOg3t_1624324161132"
    ></kakao-share>

    <div class="details-header">
      <em class="flag-solid7">CONCERT</em>
      <h2 class="details-tit">10월의 덕콘</h2>
      <div class="tags">
        <span class="flag-basic">공연관람형</span>
        <span class="flag-basic">소규모콘서트</span>
        <span class="flag-basic">덕력고사</span>
      </div>
    </div>
    <div class="details-inner">
      <h3 class="subtit">T Factory x FLO 덕콘</h3>
      <div class="thumb"><img src="../../../assets/images/program/class34-conts1.jpg" alt="T Factory x FLO 입덕후콘서트"></div>
      <p>
        T Factory와 FLO가 함께 만드는 팬 초청 소규모 콘서트를 소개합니다.<br>
        콘서트가 사라진 요즘, 홍대 인디문화 부흥과 일상의 작은 위로를 전하고자 T Factory에서 매월 다양한 아티스트를 선정하여 무료 콘서트를 진행합니다.<br>
        아티스트가 직접 낸 덕력고사를 통과한 팬들 중 추첨을 통해 콘서트 초청의 기회를 드립니다.
      </p>
      <ul style="margin-top: 22px;">
        <li>※ 본 콘서트는 코로나19 방역 수칙을 준수하여 진행됩니다.</li>
        <li>※ 사회적 거리두기 단계에 따라 비대면으로 전환될 수 있습니다.</li>
      </ul>
      <h3 class="subtit">10월의 덕콘 라인업</h3>
      <p>
        돌아온 덕콘! 특별한 아티스트들과 함께합니다.<br>
        아티스트가 낸 덕력고사 풀고 콘서트 초청의 기회를 잡으세요!
      </p>
      <program-lineup
        :class-id-list="[79, 80, 81]"
      ></program-lineup>
      <ul class="list-program wide">
        <li>
          <a href="./program40?classId=62">
            <div class="thumb">
              <img src="../../../assets/images/program/class60-conts1.jpg" alt="">
              </div>
            <div class="info">
              <span class="flag-solid8">모집중</span>
              <p class="tit"><em>10월의 덕콘 | THAMA</em></p>
              <p class="subtext">10월 22일 오후 8시</p>
            </div>
          </a>
        </li>
        <li>
          <a href="./program41?classId=63">
            <div class="thumb">
              <img src="../../../assets/images/program/class60-conts2.jpg" alt="">
              </div>
            <div class="info">
              <span class="flag-solid8">모집중</span>
              <p class="tit"><em>10월의 덕콘 | 허성현(Huh!)</em></p>
              <p class="subtext">10월 23일 오후 8시</p>
            </div>
          </a>
        </li>
        <li>
          <a href="./program42?classId=64">
            <div class="thumb">
              <img src="../../../assets/images/program/class60-conts3.jpg" alt="">
              </div>
            <div class="info">
              <span class="flag-solid8">모집중</span>
              <p class="tit"><em>10월의 덕콘 | 위아더나잇</em></p>
              <p class="subtext">10월 29일 오후 8시</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <!-- //details -->
</div>
</template>

<script>
import KakaoShare from '../../common/KakaoShare'
import ProgramButton from './components/ProgramButton'

export default {
  name: 'Program57',
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
