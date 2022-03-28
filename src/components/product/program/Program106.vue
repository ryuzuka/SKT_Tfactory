<template>
  <div class="contents bottom-sticky" ref="contents">
    <!-- slide -->
    <div class="slider-prd">
      <img src="../../../assets/images/program/class106-slide2.png" alt="LCK 스프링 결승전 응원전">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 32px 12px 48px 20px;">
        <kakao-share
         title="LCK 스프링 결승전 응원전"
          description="'Untara'박의진님과 함께하는 LCK 스프링 결승전 응원 Event가 진행됩니다."
        ></kakao-share>

        <em class="main-subtitle">T Factory X T1</em>
        <h2 class="main-title" style="margin-top: 4px;">LCK 스프링<br>결승전 응원전</h2>
        <p class="desc2" style="margin-top: 0px;">
          'Untara'박의진님과 함께하는<br>LCK 스프링 결승전 응원 Event가 진행됩니다.
        </p>
      </div>
      <div class="details-inner">
        <h2 class="main-title" style="line-height: 40px;">Untara<br>박의진 코치 소개
        </h2>
        <p style="line-height: 20px;">
          - Anarchy (2014.04 ~ 2014.08)<br>
          - Energy Pacemaker.Carries<br>
            (2014.12.08 ~ 2015.05.19)<br>
          - Star Horn Royal club (2015.05.19 ~ 2015.12.27)<br>
          - CJ Entus (2015.12.28 ~ 2016. 11.30)<br>
          - SK Telecom T1 (2017.05.24 ~ 2018.11.20)<br>
          - 1907 Fenerbahçe Espor<br>
            (2019.05.09 ~ 2019.09.10)<br>
          - Griffin (2019.12.05 ~ 2020.05.18)<br>
          - 현 T1 Esports Academy 코치
        </p>
      </div>
      <div class="details-inner" style="padding: 40px 11px 40px 20px;">
        <h2 class="main-title" style="margin-bottom: 13px;">일정</h2>
        <dl>
          <dd>
            <span class="sub_title" style="width: 65px;">응모기간</span>
            <span class="desc"> 22.3.27(일) ~ 22.3.31(목)</span>
          </dd>
          <dd>
            <span class="sub_title" style="width: 65px;">당첨자발표</span>
            <span class="desc">22.4.1(금) 오후 3시</span>
          </dd>
        </dl>
      </div>
      <div class="details-bottom" style="border-top:12px solid #f0f0f0; padding: 40px 36px 48px 20px;">
        <h2 class="title">다른 프로그램도 있어요!</h2>
        <div class="other-programs">
          <div class="program">
	          <a href="/experience/program84?classId=138">
	            <div class="desc">
	              <p class="topic">LOL클래스</p>
	              <span class="date">주2회</span>
	            </div>
	            <div class="images">
	              <img src="../../../assets/images/program/class106-conts1.jpg" alt="LOL클래스">
	            </div>
	          </a>
          </div>
          <div class="program">
	          <a href="/experience/program96?classId=130">
	            <div class="desc">
	              <p class="topic">채광진코치초청</p>
	              <span class="date">2022.01</span>
	            </div>
	            <div class="images">
	              <img src="../../../assets/images/program/class106-conts2.jpg" alt="채광진코치초청">
	            </div>
	          </a>
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
  name: 'Program106',
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
  }
}
</style>
