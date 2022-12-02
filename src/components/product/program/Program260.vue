<template>
	<div class="contents" :class="{'bottom-sticky': isBookingYn}" ref="contents">
		<!-- slide -->
		<div class="slider-prd">
			<img ref="shareImage" src="../../../assets/images/program/class260-slide1.jpg" alt="T Factory x FLO 덕콘 | 2022.12 쏜애플">
		</div>
		<!-- //slide -->
		<!-- details -->
		<div class="details sticky">
			<div class="details-header" style="padding: 31px 20px 40px 20px;">
				<kakao-share
          title="12월의 덕콘 | 쏜애플"
          description="T Factory와 FLO가 함께 만드는 팬 초청 소규모 콘서트"
        ></kakao-share>

        <em class="main-subtitle">T Factory x FLO</em>
        <h2 class="main-title" style="margin-top:9px;">12월의 덕콘</h2>
        <p class="desc2" style="margin-top:16px;">
          &lt;덕콘 winter 스페셜&gt;
        </p>
        <p class="desc2" style="margin-top:8px;">
					T Factory와 FLO가 함께 만드는 팬 초청 소규모 콘서트!<br />
					지친 일상 속 힐링을 선사하기 위해 매월 다양한 아티스트의 무료 콘서트를 진행합니다.<br />
					아티스트가 낸 덕력고사를 풀고 콘서트 초청의 기회를<br />
					잡아보세요.
        </p>
			</div>
			<div class="line">
				<span style="margin: 0px 44px;">2022. 12. 10 PM 7:00<em style="margin-left:12px;">THORNAPPLE</em></span>
				<img src="../../../assets/images/program/line-bg.png" alt="THECON line-bg">
			</div>
			<div class="details-header" style="padding: 40px 20px;">
				<em class="main-subtitle">아티스트 소개</em>
				<h2 class="main-title" style="margin-top:4px;">쏜애플</h2>
				<div class="thumbnail"><img style="height: 340px;" src="../../../assets/images/program/class260-conts1.jpg" alt=""></div>
				<p class="desc_20" style="margin-top: 8px;">
					흉내 낼 수 없는 독특한 감성의 가사와 몽환적인 사운드를 가진 밴드 쏜애플은 프론트맨 윤성현(보컬, 기타)과 심재현(베이스)을 중심으로 결성되었다.
				</p>
				<p class="desc_20" style="margin-top: 24px;">
					2010년 데뷔 앨범 [난 자꾸 말을 더듬고 잠드는 법도<br />잊었네]가 입소문만으로 초판이 절판되며, ‘음악 그 자체의 힘’으로 자신들이 설 땅을 굳건히 만들어 냈다.
				</p>
				<p class="desc_20" style="margin-top: 24px;">
					2014년, 군 제대 후 방요셉(드럼)이 참여한 2집[이상기후] 발표 이후에는 악스코리아(현 예스24 라이브홀)의 연말공연을 비롯한 모든 콘서트를 티켓 오픈 동시에 매진시키며 공연 시장의 블루칩으로 떠올랐고, 일본 'Summer Sonic', 태국 'Melody of Life', 아시아 밴드 연합 투어 'Far East Union' 등 다수의 해외 공연까지 초청받았다.
				</p>
				<p class="desc_20" style="margin-top: 24px;">
					2016년, 포트스록 밴드 출신의 연주자 홍동균(기타)이<br />정규 멤버로 참여한 EP [서울병] 발표 이후에는 관객이<br />밴드를 둘러싼 형태로 진행되는 장기 공연 ‘불구경’을<br />런칭, 현재까지도 쏜애플의 대표 브랜드 콘서트로 큰<br />인기를 이어가고 있다.
				</p>
				<p class="desc_20" style="margin-top: 24px;">
					2019년, 각고의 노력 끝에 완성된 3집 [계몽]은 제17회 한국대중음악상 2개 부문 노미네이트 되며 대체 불가한 팀 고유의 색채를 다시 한번 평단으로부터 인정받았고, 대만의 시상식 ‘Golden Indie Music Awards’에 한국 아티스트 최초로 후보에 오르기도 했다.
				</p>
				<p class="desc_20" style="margin-top: 24px;">
					최근 이들의 정교한 연주와 실험적인 사운드는 수많은<br />아마추어 밴드들의 필수 교과서가 되어 많은 카피 영상을 만날 수 있다. 현재 쏜애플은 새로운 음반을 준비함과<br />동시에 더 진해진 음악적 색채와 깊어진 세계관을 확장시킬 준비를 하고 있다.
				</p>
			</div>
			<div class="details-inner">
				<h2 class="main-title">일정</h2>
				<dl>
					<dd>
						<span class="sub_title" style="width: 65px; margin-bottom: 6px;">공연일</span>
						<span class="desc">12월 10일 (토) 오후 7시</span>
					</dd>
					<dd>
						<span class="sub_title" style="width: 65px; margin-bottom: 6px;">신청기간</span>
						<span class="desc">12월 2일 (금) ~ 12월 5일 (월)</span>
					</dd>
					<dd>
						<span class="sub_title" style="width: 65px; margin-bottom: 6px;">당첨자발표</span>
						<span class="desc">12월 6일 (화) 오후 3시</span>
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
					<li>※본 공연은 덕력고사를 완료하신 분들 중 추첨을 통해 선정되며, 선정자는 개별 연락드립니다.</li>
					<li>※당첨자 중 무단 노쇼하시는 경우, 추후 콘서트 당첨에서 제외<br />됩니다.</li>
					<li>※안전한 공연 관람을 위해 스탠딩 좌석은 운영하지 않습니다.</li>
					<li>※정부의 방역지침 변경이 있을 시 공연의 주요 내용도 변경이<br />있을 수 있습니다.</li>
					<li>※덕콘은 14세 미만의 고객도 보호자 동반 하에 당첨 및 참여가<br />가능하나, 보호자도 함께 응모에 당첨되어야 하는 점 유의 부탁<br />드립니다.</li>
				</ul>
			</div>
      <div class="details-bottom details-inner" style="padding: 40px 20px 12px;">
        <em class="main-subtitle">22년 12월의 덕콘</em>
        <h2 class="main-title" style="margin:4px 0 0;">라인업</h2>
      </div>
	    <div class="lineup" style="padding: 0px 18px 12px 24px;">
        <ul>
          <li>
	          <div class="date">
		          <span style="width:36.2px;">12.10<br>SAT</span>
	          </div>
	          <router-link to="/experience/program260?classId=221">
		          <div class="card" Style="margin-left: 19px;">
			          <div class="text">
				          <p class="name">쏜애플</p>
				          <p class="time">PM 7:00</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/class259-musician1.png" alt="musician">
			          </div>
		          </div>
	          </router-link>
          </li>
          <li>
	          <div class="date">
		          <span>12.11<br>SUN</span>
	          </div>
	          <router-link to="/experience/program261?classId=222">
		          <div class="card" Style="margin-left: 19px;">
			          <div class="text">
				          <p class="name">데이브레이크</p>
				          <p class="time">PM 7:00</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/class259-musician2.png" alt="musician">
			          </div>
		          </div>
	          </router-link>
          </li>
          <li>
	          <div class="date">
		          <span>12.16<br>FRI</span>
	          </div>
	          <router-link to="/experience/program262?classId=223">
		          <div class="card" Style="margin-left: 19px;">
			          <div class="text">
				          <p class="name">유다빈밴드</p>
				          <p class="time">PM 7:00</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/class259-musician3.png" alt="musician">
			          </div>
		          </div>
	          </router-link>
          </li>
          <li>
	          <div class="date">
		          <span>12.17<br>SAT</span>
	          </div>
	          <router-link to="/experience/program263?classId=224">
		          <div class="card" Style="margin-left: 19px;">
			          <div class="text">
				          <p class="name">SURL</p>
				          <p class="time">PM 7:00</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/class259-musician4.png" alt="musician">
			          </div>
		          </div>
	          </router-link>
          </li>
          <li>
	          <div class="date">
		          <span>12.23<br>FRI</span>
	          </div>
	          <router-link to="/experience/program264?classId=225">
		          <div class="card" Style="margin-left: 19px;">
			          <div class="text">
				          <p class="name">LUCY</p>
				          <p class="time">PM 7:00</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/class259-musician5.png" alt="musician">
			          </div>
		          </div>
	          </router-link>
          </li>
          <li>
	          <div class="date">
		          <span>12.24<br>SAT</span>
	          </div>
	          <router-link to="/experience/program265?classId=226">
		          <div class="card" Style="margin-left: 19px;">
			          <div class="text">
				          <p class="name">ADOY</p>
				          <p class="time">PM 7:00</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/class259-musician6.png" alt="musician">
			          </div>
		          </div>
	          </router-link>
          </li>
          <li>
	          <div class="date">
		          <span>12.30<br>FRI</span>
	          </div>
	          <router-link to="/experience/program266?classId=227">
		          <div class="card" Style="margin-left: 19px;">
			          <div class="text">
				          <p class="name">홍이삭</p>
				          <p class="time">PM 7:00</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/class259-musician7.png" alt="musician">
			          </div>
		          </div>
	          </router-link>
          </li>
          <li>
	          <div class="date">
		          <span>12.31<br>SAT</span>
	          </div>
						<div>
							<router-link to="/experience/program267?classId=228">
								<div class="card" Style="margin-left: 19px;">
									<div class="text">
										<p class="name">크리스탈티</p>
										<p class="time">PM 3:00</p>
									</div>
									<div class="image">
										<img src="../../../assets/images/program/class259-musician8.png" alt="musician">
									</div>
								</div>
							</router-link>
							<router-link to="/experience/program268?classId=229">
								<div class="card" Style="margin-left: 19px; margin-top:12px;">
									<div class="text">
										<p class="name">윤석철트리오</p>
										<p class="time">PM 7:00</p>
									</div>
									<div class="image">
										<img src="../../../assets/images/program/class259-musician9.png" alt="musician">
									</div>
								</div>
							</router-link>
						</div>
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
  name: 'Program260',
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
