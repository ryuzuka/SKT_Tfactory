<template>
  <div class="contents bottom-sticky" ref="contents">
    <!-- slide -->
    <div class="slider-prd">
      <img ref="shareImage" src="../../../assets/images/program/class204-slide1.jpg" alt="T Factory x FLO 덕콘">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 31px 20px 40px 20px;">
        <kakao-share
          title="7월의 덕콘"
          description="TUMF 마지막 라인업의 피날레 무대"
        ></kakao-share>

        <em class="main-subtitle">T University Music Festival</em>
        <h2 class="main-title" style="margin-top:4px;">TUMF 마지막 <br>라인업의 피날레 무대</h2>
        <p class="desc2">
          인기 뮤지션들과 함께하는 7월의 덕콘 무대. <br>TUMF의 마지막을 장식할 인기 뮤지션들의 소중한 관객이 되어 축제를 즐겨주세요.
        </p>
      </div>
      <div class="line">
        <span>THECON&nbsp;&nbsp;&nbsp; THECON&nbsp;&nbsp;&nbsp; THECON&nbsp;&nbsp;&nbsp; THECON&nbsp;&nbsp;&nbsp; THE</span>
        <img src="../../../assets/images/program/line-bg.png" alt="THECON line-bg">
      </div>
      <div class="details-header" style="padding: 40px 20px;">
				<h2 class="main-title" style="margin-top:4px;">T University <br>Music Festival</h2>
				<p class="desc_20">
				인기 뮤지션들과 함께하는 7월의 덕콘 무대.<br>TUMF의 마지막을 장식할 인기 뮤지션들의 소중한 관객이 되어 축제를 즐겨주세요.
        </p>
			</div>
      <div class="details-bottom details-inner" style="padding: 40px 20px 12px;">
        <em class="main-subtitle">7월의 덕콘</em>
        <h2 class="main-title" style="margin:4px 0 0;">라인업</h2>
      </div>
	    <div class="lineup" style="padding: 0px 18px 12px 24px;">
        <ul>
          <li>
	          <div class="date">
		          <span>7.1<br>FRI</span>
	          </div>
	          <router-link to="/experience/program205?classId=166">
		          <div class="card" Style="margin-left: 19px;">
			          <div class="text">
				          <p class="name">해서웨이</p>
				          <p class="time">PM 7:00</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/class204-musician1.png" alt="musician">
			          </div>
		          </div>
	          </router-link>
          </li>
          <li>
	          <div class="date">
		          <span>7.15<br>FRI</span>
	          </div>
	          <router-link to="/experience/program206?classId=167">
		          <div class="card" Style="margin-left: 19px;">
			          <div class="text">
				          <p class="name">소수빈</p>
				          <p class="time">PM 7:00</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/class204-musician2.png" alt="musician">
			          </div>
		          </div>
	          </router-link>
          </li>
        </ul>
      </div>
      <div class="details-inner notification">
				<h2 class="main-title">안내사항</h2>
				<ul>
					<li>※대학생 뮤지션이 아닌 인기 뮤지션 공연은 덕력고사를 완료하신 분들 중 추첨을 통해 선정되며, 선정자는 개별 연락드립니다.</li>
					<li>※당첨자 중 무단 노쇼하시는 경우, 추후 콘서트 당첨에서 제외됩니다.</li>
					<li>※미당첨 고객도 당일 선착순 스탠딩 관람 가능합니다.</li>
					<li>※정부의 방역지침 변경이 있을 시 공연의 주요 내용도 변경이 있을 수 있습니다.</li>
					<li>※덕콘은 14세 미만의 고객도 보호자 동반 하에 당첨 및 참여가 가능하나, 보호자도 함께 응모에 당첨되어야 하는점 유의부탁드립니다.</li>
				</ul>
			</div>
      <div class="details-inner" style="padding: 40px 0 20px">
        <h2 class="main-title" style="padding: 0 20px; color: #000;">함께즐겨요!</h2>
        <div class="program">
	        <div class="program">
            <router-link to="/experience/program111?classId=154">
              <div class="desc">
                <p class="detail">대학생 뮤지션이 꾸미는<br>덕콘의 스페셜 무대<br>THECON X University</p>
                <span class="topic">TUMF</span>
              </div>
              <div class="images">
                <img src="../../../assets/images/program/class107-conts1.jpg" alt="TUMF">
              </div>
            </router-link>
          </div>
        </div>
        <div class="program">
	        <router-link to="/experience/program110?classId=156">
	          <div class="desc">
	            <p class="detail" style="margin-bottom: 25px;">Woluld you, 우주?</p>
	            <span class="topic">T대학 우주 축제, TUF</span>
	          </div>
	          <div class="images">
	            <img src="../../../assets/images/program/class107-conts2.jpg" alt="T대학 우주 축제, TUF">
	          </div>
	        </router-link>
        </div>
        <div class="program">
	        <router-link to="/experience/program112?classId=155">
	          <div class="desc">
	            <p class="detail">미술 전공 대학생들의<br>일러스트로 꾸며진 팝업전시<br>POP-UP Exhibition X University</p>
	            <span class="topic">TUAF</span>
	          </div>
	          <div class="images">
	            <img src="../../../assets/images/program/class107-conts3.jpg" alt="POP-UP Exhibition X University">
	          </div>
	        </router-link>
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
  name: 'Program204',
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
	  this.$emit('kakao-share-image', this.$refs.shareImage.src)
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
</style>
