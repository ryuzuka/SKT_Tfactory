<template>
  <div class="contents bottom-sticky" ref="contents">
    <!-- slide -->
    <div class="slider-prd">
      <img src="../../../assets/images/program/class109-slide1.jpg" alt="T Factory x FLO 덕콘 | 2022.4 전진희">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 31px 12px 40px 20px;">
        <kakao-share
          title="4월의 덕콘"
          description="T Factory와 FLO가 함께 만드는 팬 초청 소규모 콘서트! - 전진희"
        ></kakao-share>

        <em class="main-subtitle">T University Music Festival</em>
        <h2 class="main-title" style="margin-top:4px;">인기 뮤지션과<br>대학생 뮤지션이 꾸미는<br>스페셜 무대</h2>
        <p class="desc2">
          4월 덕콘에서는 대학생 뮤지션들과 함께 합니다.<br>
          우리 학교 뮤지션이 꾸며줄 THECON의 무대와 함께하세요. T Factory에 방문하고 대학생 뮤지션들의 소중한 관객이 되어 축제를 즐겨주세요.
        </p>
      </div>
      <div class="line">
        <span style="margin: 1px 57px;">2022.4.29.PM 7:00<b style="margin-left: 12px;">JEONJINHEE</b></span>
        <img src="../../../assets/images/program/line-bg.png" alt="THECON line-bg">
      </div>
      <div class="details-header" style="padding: 40px 20px;">
        <em class="main-subtitle">아티스트 소개</em>
        <h2 class="main-title" style="margin-top:4px;">전진희</h2>
        <div class="thumbnail"><img src="../../../assets/images/program/class109-conts1.jpg" alt=""></div>
        <p style="margin-top: 8px;">
          전진희는 연주가, 싱어송라이터이다. 밴드 하비누아주의 리더로 활동을 시작해 많은 뮤지션들의 녹음과 공연 세션으로 참여했으며, 밴드 활동과 병행하며 2014년 '쓸쓸'로 솔로 활동을 시작했다. 2017년에 첫 솔로 정규작 [피아노와 목소리]로 부드러운 피아노 선율에 호흡까지 느껴지는 꾸밈없는 음색을 담아냈고 2년 후 2집 [우리의 사랑은 여름이었지]를 발매, 더욱 섬세하게 채워진 미니멀 사운드의 정수를 보여주었다. 이후 2020년에는 MBC 다큐 "너를 만났다"의 음악감독으로 참여하여 극의 몰입도를 높였고 이어 가사 한 줄 없는 연주 앨범임에도 불구하고 섬세하게 감정선을 표현한 [Breathing], 여름밤에 어울리는 EP [summer,night] 등을 발표해 활발한 활동을 펼쳤다. 그리고 올해인 2022년 봄, 새로운 앨범의 시작을 알리는 single [그대여]를 발매하며 활동을 이어나가는 중이다.
        </p>
      </div>
      <div class="details-inner">
        <h2 class="main-title" style="margin-bottom: 12px;">일정</h2>
        <dl>
          <dd>
            <span class="sub_title" style="width: 65px;">공연일</span>
            <span class="desc">4월 29일(금) 오후 7시</span>
          </dd>
           <dd>
            <span class="sub_title" style="width: 65px;">신청기간</span>
            <span class="desc">4월 18일(월) ~4월 24일(일)</span>
          </dd>
           <dd>
            <span class="sub_title" style="width: 65px;">당첨자발표</span>
            <span class="desc">4월 25일(월) 오후 3시</span>
          </dd>
          <dd>
            <span class="sub_title" style="width: 65px;">장소</span>
	          <span class="desc">
	            <a href="/shop/detail/store14 ">T Factory 2층 O Stage<em class="flag-basic">공간보기</em></a>
            </span>
          </dd>
        </dl>
      </div>
      <div class="line">
        <span style="margin: 1px 57px;">2022.4.29.PM 7:00<b style="margin-left: 12px;">JEONJINHEE</b></span>
        <img src="../../../assets/images/program/line-bg.png" alt="THECON line-bg">
      </div>
      <div class="details-bottom" style="padding: 40px 20px;">
        <h2 class="main-title">안내사항</h2>
        <p class="about">당첨자 안내</p>
        <ul>
          <li>※ 대학생 뮤지션이 아닌 인기 뮤지션 공연은 덕력고사를 완료하신 분들 중 추첨을 통해 선정되며, 선정자는 개별 연락드립니다.</li>
          <li>※ 당첨자 중 무단 노쇼하시는 경우, 추후 콘서트 당첨에서 제외됩니다.</li>
          <li>※ 정부의 방역지침 변경이 있을 시 공연의 주요내용도 변경이 있을 수 있습니다.</li>
          <li>※덕콘은 14세 미만의 고객도 보호자 동반 하에 당첨 및 참여가 가능하나, 보호자도 함께 응모에 당첨되어야 하는점 유의부탁드립니다.</li>
        </ul>
      </div>
      <div class="details-inner" style="padding: 32px 20px 12px;">
        <em class="main-subtitle">4월의 덕콘</em>
        <h2 class="main-title" style="margin:4px 0 0;">라인업</h2>
      </div>
	    <program-lineup-new style="padding: 0 18px 36px 24px;"
        :line-list="[
					{
						classId: 145,
						date: '4.15',
						day: 'FRI',
						name: '손태진',
						time: 'PM 7:00'
					},
					{
						classId: 144,
						date: '4.29',
						day: 'FRI',
						name: '전진희',
						time: 'PM 7:00'
					}]">
	    </program-lineup-new>
      <div class="details-inner" style="padding: 40px 0 20px">
        <h2 class="main-title" style="padding: 0 20px; color: #000;">다른 프로그램도 있어요!</h2>
        <div class="program">
	        <div class="program">
            <a href="/experience/program111?classId=154">
              <div class="desc">
                <p class="detail">대학생 뮤지션이 꾸미는<br>덕콘의 스페셜 무대<br>THECON X University</p>
                <span class="topic">TUMF</span>
                <img style= "bottom: -7px; right: 85px;" src="../../../assets/images/program/leftarrow-bk.png" alt="leftarrow">
              </div>
              <div class="images">
                <img src="../../../assets/images/program/class107-conts1.jpg" alt="TUMF">
              </div>
            </a>
          </div>
        </div>
        <div class="program">
	        <a href="/experience/program110?classId=156">
	          <div class="desc">
	            <p class="detail" style="margin-bottom: 25px;">Woluld you, 우주?</p>
	            <span class="topic">T대학 우주 축제, TUF</span>
	            <img style="right: -61px;" src="../../../assets/images/program/leftarrow-bk.png" alt="leftarrow">
	          </div>
	          <div class="images">
	            <img src="../../../assets/images/program/class107-conts2.jpg" alt="T대학 우주 축제, TUF">
	          </div>
	        </a>
        </div>
        <div class="program">
	        <a href="/experience/program112?classId=155">
	          <div class="desc">
	            <p class="detail">미술 전공 대학생들의<br>일러스트로 꾸며진 팝업전시<br>POP-UP Exhibition X University</p>
	            <span class="topic">TUAF</span>
	            <img style="bottom: -7px; right: 165px;" src="../../../assets/images/program/leftarrow-bk.png" alt="leftarrow">
	          </div>
	          <div class="images">
	            <img src="../../../assets/images/program/class107-conts3.jpg" alt="POP-UP Exhibition X University">
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
import programLineupNew from './components/ProgramLineupNew'
import * as NATIVE from '../../../js/native'

export default {
  name: 'Program109',
  components: {
    KakaoShare,
    ProgramButton,
	  programLineupNew
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
  &-header {
    p{
      line-height: 20px;
    }
  }
  &-inner {
  padding:40px 20px;
  }
  &-bottom {
    font-size: 12px;
    line-height: 19px;
    color: #787878;
  }
}
</style>
