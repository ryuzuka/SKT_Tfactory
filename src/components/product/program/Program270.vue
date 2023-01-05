<template>
	<div class="contents" :class="{'bottom-sticky': isBookingYn}" ref="contents">
		<!-- slide -->
		<div class="slider-prd">
			<img ref="shareImage" src="../../../assets/images/program/class270-slide1.jpg" alt="T Factory x FLO 덕콘 | 2023.1 김수영">
		</div>
		<!-- //slide -->
		<!-- details -->
		<div class="details sticky">
			<div class="details-header" style="padding: 31px 20px 40px 20px;">
				<kakao-share
          title="1월의 덕콘 | 김수영"
          description="T Factory와 FLO가 함께 만드는 팬 초청 소규모 콘서트"
        ></kakao-share>

        <em class="main-subtitle">T Factory x FLO</em>
        <h2 class="main-title" style="margin-top:9px;">1월의 덕콘</h2>
        <p class="desc2" style="margin-top:8px;">
					T Factory와 FLO가 함께 만드는 팬 초청 소규모 콘서트!<br />
					지친 일상 속 힐링을 선사하기 위해 <br />매월 다양한 아티스트의 무료 콘서트를 진행합니다.<br />
					덕콘에 참여하고 싶은 이유를 사연으로 적고, 콘서트 <br />초청의 기회를 잡아보세요.<br />
        </p>
			</div>
			<div class="line">
				<span style="margin: 0px 44px;">2023. 1. 13 PM 7:00<em style="margin-left:12px;">KIM SUYOUNG</em></span>
				<img src="../../../assets/images/program/line-bg.png" alt="THECON line-bg">
			</div>
			<div class="details-header" style="padding: 40px 20px;">
				<em class="main-subtitle">아티스트 소개</em>
				<h2 class="main-title" style="margin-top:4px;">김수영</h2>
				<div class="thumbnail"><img style="height: 340px;" src="../../../assets/images/program/class270-conts1.jpg" alt=""></div>
				<p class="desc_20" style="margin-top: 8px;">
					진실된 목소리와 기타 소리로 만들어내는 음악이 주는 위로, 김수영
				</p>
				<p class="desc_20" style="margin-top: 24px;">
					중저음의 감미로운 음색 단 하나로 단숨에 수많은 리스너들을 매료시킨 장본인, 김수영의 음악에는 한치의 꾸밈없이도 드러나는 자신감이 느껴진다.<br />
					덤덤한 듯 솔직하게 써내려간 ‘일기’를 닮아 있는 그녀의 곡들은 특별할 날 없는 우리의 모습과 닮아 있으면서도, 어느새 드러낸 꽤나 솔직한 마음에 맞장구를 치며 감성에 젖어 있는 내 모습을 발견하게 만든다.<br />
					그 목소리만큼이나 우리를 동하게 만드는 건 그녀의 뛰어난 송라이팅 실력과 기타 연주다. 아이유의 5집 앨범 ‘LILAC’의 10번 트랙인 ‘에필로그’에 작곡, 편곡, 기타 연주 등으로 이름을 올리며 실력파 싱어송라이터로의 면모를 입증하고 있는 그녀는 다수의 라이브 영상들을 통해 가감없는 매력과 실력을 보여주며 탄탄한 마니아층을 구축해 나가고 있다.
				</p>
			</div>
			<div class="details-inner">
				<h2 class="main-title">일정</h2>
				<dl>
					<dd>
						<span class="sub_title" style="width: 65px; margin-bottom: 6px;">공연일</span>
						<span class="desc">1월 13일 (금) 오후 7시</span>
					</dd>
					<dd>
						<span class="sub_title" style="width: 65px; margin-bottom: 6px;">신청기간</span>
						<span class="desc">1월 6일 (금) ~ 1월 10일 (화)</span>
					</dd>
					<dd>
						<span class="sub_title" style="width: 65px; margin-bottom: 6px;">당첨자발표</span>
						<span class="desc">1월 11일 (수) 오후 3시</span>
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
					<li>※ 본 공연은 덕콘에 가고싶은 사연을 작성하신 분들 중 추첨을 <br />통해 선정되며, 선정자는 개별 연락드립니다.</li>
					<li>※ 당첨자 중 무단 노쇼하시는 경우, 추후 콘서트 당첨에서 제외 <br />됩니다. </li>
					<li>※ 당첨자 본인 외의 양도는 불가하며, 신분증 확인 후 입장이 <br />가능합니다.</li>
					<li>※ 정부의 방역지침 변경이 있을 시 공연의 주요내용도 변경이 <br />있을 수 있습니다</li>
					<li>※덕콘은 14세 미만의 고객도 보호자 동반 하에 당첨 및 참여가 <br />가능하나, 보호자도 함께 응모에 당첨되어야 하는점 유의부탁 <br />드립니다.</li>
				</ul>
			</div>
      <div class="details-bottom details-inner" style="padding: 40px 20px 12px;">
        <em class="main-subtitle">23년 1월의 덕콘</em>
        <h2 class="main-title" style="margin:4px 0 0;">라인업</h2>
      </div>
	    <div class="lineup" style="padding: 0px 18px 12px 24px;">
        <ul>
          <li>
	          <div class="date">
		          <span style="width:36.2px;">1.13<br>FRI</span>
	          </div>
	          <router-link to="/experience/program270?classId=231">
		          <div class="card" Style="margin-left: 0px;">
			          <div class="text">
				          <p class="name">김수영</p>
				          <p class="time">PM 7:00</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/class269-musician1.png" alt="musician">
			          </div>
		          </div>
	          </router-link>
          </li>
          <li>
	          <div class="date">
		          <span>1.20<br>FRI</span>
	          </div>
	          <router-link to="/experience/program271?classId=232">
		          <div class="card" Style="margin-left: 19px;">
			          <div class="text" Style="padding: 10px 19px 17px;">
				          <p class="name">후추스 <br />X SOFIA MILLS  </p>
				          <p class="time">PM 7:00</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/class269-musician2.png" alt="musician">
			          </div>
		          </div>
	          </router-link>
          </li>
          <li>
	          <div class="date">
		          <span>1.27<br>FRI</span>
	          </div>
	          <router-link to="/experience/program272?classId=233">
		          <div class="card" Style="margin-left: 19px;">
			          <div class="text">
				          <p class="name">맥거핀</p>
				          <p class="time">PM 7:00</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/class269-musician3.png" alt="musician">
			          </div>
		          </div>
	          </router-link>
          </li>
        </ul>
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
  name: 'Program270',
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
