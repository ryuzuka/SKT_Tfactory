<template>
  <div class="contents bottom-sticky" ref="contents">
    <!-- slide -->
    <div class="slider-prd">
      <img ref="shareImage" src="../../../assets/images/program/class117-slide2.jpg" alt="T Factory x FLO 덕콘 | 미스몰리">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 31px 12px 40px 20px;">
        <kakao-share
          title="6월의 덕콘"
          description="인기 뮤지션과 대학생 뮤지션이 꾸미는 스페셜 무대 - 미스몰리"
        ></kakao-share>

        <em class="main-subtitle">T University Music Festival</em>
        <h2 class="main-title" style="margin-top:4px;">인기 뮤지션과<br>대학생 뮤지션이 꾸미는<br>스페셜 무대</h2>
        <p class="desc2">
          6월 덕콘에서는 인기뮤지션과 대학생 뮤지션들이 함께 합니다.<br>더욱 풍성해진 THECON의 무대 기대해 주세요.<br>T Factory에 방문하고 나의 뮤지션들의 소중한 관객이 되어 축제를 즐겨주세요.
        </p>
      </div>
      <div class="line">
        <span style="margin: 1px 56px;">2022. 06. 25 PM 3:00 <em style="margin-left:10px;">MISMOLLY</em></span>
        <img src="../../../assets/images/program/line-bg.png" alt="THECON line-bg">
      </div>
      <div class="details-header" style="padding: 40px 20px;">
        <em class="main-subtitle">아티스트 소개</em>
        <h2 class="main-title" style="margin-top:4px;">미스몰리</h2>
        <div class="thumbnail"><img src="../../../assets/images/program/class117-conts2.jpg" alt=""></div>
        <p style="margin-top: 8px;">
          ‘미스몰리’는 광주, 정읍 지역의 아이엠스튜디오 소속 전공 입시반 고등학생들로 이루어져 있는 올장르 청소년 퍼포먼스팀이다.<br>
          스트릿댄스를 기반으로 하여 매년 특별한 컨셉의 다양한 퍼포먼스를 선보이는 팀이다.
        </p>
      </div>
      <div class="details-inner">
        <h2 class="main-title">일정</h2>
        <dl>
          <dd>
            <span class="sub_title" style="width: 65px;">공연일</span>
            <span class="desc">6월 25일 (토) 오후 3시</span>
          </dd>
          <dd>
            <span class="sub_title" style="width: 65px;">응모기간</span>
            <span class="desc">5월 31일(화) ~ 6월 19일(일)</span>
          </dd>
          <dd>
            <span class="sub_title" style="width: 65px;">당첨자발표</span>
            <span class="desc">6월 20일(월) 오후 3시</span>
          </dd>
           <dd>
            <span class="sub_title" style="width: 65px;">장소</span>
            <span class="desc">T Factory 2층, 0 Stage</span>
          </dd>
        </dl>
      </div>
      <div class="details-inner notification">
				<h2 class="main-title">안내사항</h2>
				<ul>
					<li>※대학생 뮤지션이 아닌 인기 뮤지션 공연은 덕력고사를 완료하신 분들 추첨을 통해 선정되며, 선정자는 개별 연락드립니다.</li>
					<li>※당첨자 중 무단 노쇼하시는 경우, 추후 콘서트 당첨에서 제외됩니다.</li>
					<li>※선착순 스탠딩<br>
					- 스탠딩은 별도 대기 없이 T팩토리 방문 후 덕콘 스탠딩으로 방문하셨다고 말씀하시면, 번호표를 부여합니다.<br>
					- 번호표는 3시 이후 방문하신 선착순 50분께 배정됩니다.<br>
					- 번호표를 받으신 분은 6시 이후에 2층의 공연장 입구에서 번호표를 보여주시면 스탠딩 입장이 가능 합니다.</li>
					<li>※정부의 방역지침 변경이 있을 시 공연의 주요 내용도 변경이 있을 수 있습니다.</li>
					<li>※덕콘은 14세 미만의 고객도 보호자 동반 하에 당첨 및 참여가 가능하나, 보호자도 함꼐 응모에 당첨되어야 하는 점 유의 부탁드립니다.</li>
				</ul>
			</div>
      <div class="details-inner" style="padding: 40px 0 20px">
        <h2 class="main-title" style="padding: 0 20px; color: #000;">다른 프로그램도 있어요!</h2>
        <div class="program">
	        <div class="program">
            <router-link to="/experience/program111?classId=154">
              <div class="desc">
                <p class="detail">대학생 뮤지션이 꾸미는<br>덕콘의 스페셜 무대<br>THECON X University</p>
                <span class="topic">TUMF</span>
                <!-- <img style= "bottom: -7px; right: 85px;" src="../../../assets/images/program/leftarrow-bk.png" alt="leftarrow"> -->
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
	            <!-- <img style="right: -61px;" src="../../../assets/images/program/leftarrow-bk.png" alt="leftarrow"> -->
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
	            <!-- <img style="bottom: -7px; right: 165px;" src="../../../assets/images/program/leftarrow-bk.png" alt="leftarrow"> -->
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
  name: 'Program117',
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
