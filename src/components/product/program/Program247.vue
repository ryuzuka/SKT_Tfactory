<template>
	<div class="contents" :class="{'bottom-sticky': isBookingYn}" ref="contents">
		<!-- slide -->
		<div class="slider-prd">
			<img ref="shareImage" src="../../../assets/images/program/class247-slide1.jpg" alt="수능 이벤트 | 얘드라 책 덮고 클래스 챙겨!">
		</div>
		<!-- //slide -->
		<!-- details -->
		<div class="details sticky">
			<div class="details-header" style="padding: 31px 20px 40px 20px;">
				<kakao-share
          title="수능 이벤트 | 얘드라 책 덮고 클래스 챙겨!"
          description="수험생을 위한 <스페셜 덕콘>"
        ></kakao-share>

        <em class="main-subtitle">[수능 이벤트] 얘드라 콘서트 챙겨!</em>
        <h2 class="main-title" style="margin-top:4px;">수험생을 위한<br>&lt;스페셜 덕콘&gt;</h2>
        <p class="desc2">
          그동안 열심히 달려온 수험생들을 위해 T Factory에서<br>
					많은 아티스트들과 함께 &lt;스페셜 덕콘&gt;을 준비했어요!<br>
					만나고 싶은 최애 아티스트가 라인업에 있다면,<br>
					아티스트가 낸 덕력고사를 풀고 콘서트 초청의 기회를<br>
					잡아보세요!<br><br>
					※11월 17일부터 신청 가능합니다
        </p>
			</div>
			<div class="line">
        <span>THECON&nbsp;&nbsp;&nbsp; THECON&nbsp;&nbsp;&nbsp; THECON&nbsp;&nbsp;&nbsp; THECON&nbsp;&nbsp;&nbsp; THE</span>
				<img src="../../../assets/images/program/line-bg.png" alt="THECON line-bg">
			</div>
			<div class="details-header" style="padding: 40px 20px;">
				<em class="main-subtitle">얘드라 콘서트 챙겨!</em>
				<h2 class="main-title" style="margin-top:4px;">수험생을 위한<br>스페셜 덕콘</h2>
				<p class="desc_20" style="margin-top: 8px;">
					다양한 장르의 아티스트들과 함께하는 덕콘 스페셜<br />
					무대에 수험생 여러분을 초대합니다.<br />
					모든 순간이 빛날 여러분들과 스페셜한 아티스트와<br />
					함께 소중한 추억 만들어 보세요!
				</p>
			</div>
			<div class="details-inner notification">
				<h2 class="main-title">유의사항</h2>
				<ul>
					<li>※ 덕콘 Special은 70석의 지정좌석으로만 운영됩니다.</li>
					<li>※ 덕콘 Special은 일반 관객도 응모가 가능하지만, 수험표를<br />보유한 수험생을 우선 추첨합니다.</li>
					<li>※ 수험생 관객으로 70석이 미달될 경우에 한해 잔여석을 일반<br />관객 응모자 중 추첨합니다.</li>
					<li>※ 현장에서 노쇼좌석은 별도 운영하지 않으며, 안전한 공연 관람<br />을 위해 스탠딩 좌석 또한 운영하지 않습니다.</li>
					<li>※ 본 전시는 T Factory를 방문하여 스마트폰으로 본인인증 한<br />경우에만 참여 가능합니다. (본인인증 가능 연령: 만 14세 이상)</li>
					<li>※ 본 전시 세부 사항들은 업체 사정에 따라 별도의 안내 없이 중단<br />또는 변경될 수 있습니다.</li>
				</ul>
			</div>
      <div class="details-bottom details-inner" style="padding: 40px 20px 12px;">
        <em class="main-subtitle">수험생 스페셜 덕콘</em>
        <h2 class="main-title" style="margin:4px 0 0;">라인업</h2>
      </div>
	    <div class="lineup" style="padding: 0px 18px 12px 24px; margin-bottom: 20px;">
        <ul>
          <li>
	          <div class="date">
		          <span style="width:36.2px;">11.25<br>FRI</span>
	          </div>
	          <router-link to="/experience/program248?classId=207">
		          <div class="card" Style="margin-left: 19px;">
			          <div class="text">
				          <p class="name">옥상달빛</p>
				          <p class="time">PM 7:00</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/class247-musician1.png" alt="musician">
			          </div>
		          </div>
	          </router-link>
          </li>
          <li>
	          <div class="date">
		          <span style="width:36.2px;">11.26<br>SAT</span>
	          </div>
	          <router-link to="/experience/program249?classId=208">
		          <div class="card" Style="margin-left: 19px;">
			          <div class="text">
				          <p class="name">데자부그룹</p>
				          <p class="time">PM 6:00</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/class247-musician2.png" alt="musician">
			          </div>
		          </div>
	          </router-link>
          </li>
					<li>
	          <div class="date">
		          <span style="width:36.2px;">11.27<br>SUN</span>
	          </div>
	          <router-link to="/experience/program250?classId=209">
		          <div class="card" Style="margin-left: 19px;">
			          <div class="text">
				          <p class="name">구만</p>
				          <p class="time">PM 3:00</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/class247-musician3.png" alt="musician">
			          </div>
		          </div>
	          </router-link>
          </li>
          <li>
	          <div>
		          <span style="display: inline-block; width:50.2px;"><br></span>
	          </div>
	          <router-link to="/experience/program251?classId=210">
		          <div class="card" Style="margin-left: 19px;">
			          <div class="text">
				          <p class="name">소란</p>
				          <p class="time">PM 7:00</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/class247-musician4.png" alt="musician">
			          </div>
		          </div>
	          </router-link>
          </li>
          <li>
	          <div class="date">
		          <span>11.28<br>MON</span>
	          </div>
	          <router-link to="/experience/program252?classId=211">
		          <div class="card" Style="margin-left: 19px;">
			          <div class="text">
				          <p class="name">치즈</p>
				          <p class="time">PM 7:00</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/class247-musician5.png" alt="musician">
			          </div>
		          </div>
	          </router-link>
          </li>
        </ul>
      </div>
		</div>
		<!-- //details -->

		<!-- button set -->
		<!--program-button></program-button-->
		<!-- // button set -->
	</div>
</template>

<script>
import KakaoShare from '../../common/KakaoShare'
import ProgramButton from './components/ProgramButton'
import * as NATIVE from '../../../js/native'

export default {
  name: 'Program247',
  components: {
    KakaoShare,
	  ProgramButton
  },
  data () {
    return {
	    isLogin: false,
	    isBookingYn: false
    }
  },
  created () {
	  this.$store.watch(() => {
		  if (this.$store.getters.CONSTANTS.session_alive === true) {
			  this.isLogin = true
		  }
	  })
  },
  mounted () {
	  if (this.$refs.shareImage) {
		  this.$emit('kakao-share-image', this.$refs.shareImage['src'])
	  }
	  this.$EventBus.$on('get-class-info', data => {
		  if (data['PROGRAM_CLASS_BOOKING_YN'] === 1) {
			  this.isBookingYn = true
		  }
	  })
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
