<template>
  <div class="contents" ref="contents">
	  <!-- slide -->
    <div class="slider-prd">
      <img ref="shareImage" src="../../../../assets/images/program/class111-slide1.jpg" alt="T University Music Festival">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 31px 12px 40px 20px;">
        <kakao-share
          title="T University Music Festival"
          description="인기 뮤지션과 대학생 뮤지션이 꾸미는 스페셜 무대! - 크래늄"
        ></kakao-share>

        <em class="main-subtitle">T University Music Festival</em>
        <h2 class="main-title" style="margin-top:4px;">인기 뮤지션과<br>대학생 뮤지션이 꾸미는<br>스페셜 무대</h2>
        <p class="desc2">
          6월 덕콘에서는 인기뮤지션과 대학생 뮤지션들이 함께 합니다.<br>더욱 풍성해진 THECON의 무대 기대해 주세요.<br>T Factory에 방문하고 나의 뮤지션들의 소중한 관객이 되어 축제를 즐겨주세요.
        </p>
      </div>
      <div class="line">
        <span style="margin: 1px 59px;">2022. 06. 10 PM 5:00<em style="margin-left: 12px;">CRANIUM</em></span>
        <img src="../../../../assets/images/program/line-bg.png" alt="THECON line-bg">
      </div>
      <div class="details-header" style="padding: 40px 20px;">
        <em class="main-subtitle">대학생 뮤지션 소개</em>
        <h2 class="main-title" style="margin-top:4px;">크래늄</h2>
        <div class="thumbnail"><img src="../../../../assets/images/program/tuf_tumf12_musician.jpg" alt="tuf_tumf12_musician"></div>
        <p style="margin-top: 8px; line-height: 20px;">
          팀 이름인 '크래늄'의 어원은 유니크한 이름을 찾던 중,<br> '중머리'를 의미하는 의학용어를 이름으로 하자는 의견에 모두 동의해 채택하였다. 각자 다른 동아리에서 활동을 하다 만났고, 팀보다는 뜻이 맞는 인물들과 모두 함께하는 크루입니다. 지금 공연하는 천우, 재민, 동윤, 현태가 초창기에 모였던 멤버다.
        </p>
        <p style="margin-top: 22px; line-height: 20px;">
          2018년 7월 상상마당 홍대 공연을 기점으로 모였고 팀의 첫 결성과 공연은 2019년 2월에 이루어졌다. 그 이후로 세번의 공연을 하였고 각자 현생을 바쁘게 살아가기 전, 팀의 1막 마지막 공연을 덕콘으로 장식하게 되었다.
        </p>
      </div>
      <div class="details-inner">
        <h2 class="main-title">일정</h2>
        <dl>
          <dd>
            <span class="sub_title" style="width: 63px;">공연 기간</span>
            <span class="desc">6월 10일 (금) 오후 5:00</span>
          </dd>
           <dd>
            <span class="sub_title" style="width: 63px;">장소</span>
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
					<li>※덕콘은 14세 미만의 고객도 보호자 동반 하에 당첨 및 참여가 가능하나, 보호자도 함꼐 응모에 당첨되어야 하는 점 유의부탁드립니다.</li>
				</ul>
			</div>
      <div class="details-inner" style="padding: 40px 0 59px">
				<h2 class="main-title" style="padding: 0 20px; color: #000;">다른 프로그램도 있어요!</h2>
				<div class="program">
					<div class="program">
						<router-link to="/experience/program111?classId=154">
							<div class="desc">
								<p class="detail">대학생 뮤지션이 꾸미는<br>덕콘의 스페셜 무대<br>THECON X University</p>
								<span class="topic">TUMF</span>
							</div>
							<div class="images">
								<img src="../../../../assets/images/program/class107-conts1.jpg" alt="TUMF">
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
							<img src="../../../../assets/images/program/class107-conts2.jpg" alt="T대학 우주 축제, TUF">
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
							<img src="../../../../assets/images/program/class107-conts3.jpg" alt="POP-UP Exhibition X University">
						</div>
					</router-link>
				</div>
			</div>
    </div>
  </div>
</template>

<script>
import * as NATIVE from '../../../../js/native'
import KakaoShare from '../../../common/KakaoShare'

export default {
  name: 'Tumf12',
  components: {
	  KakaoShare
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
  .details{
    &-header {
      .thumbnail img {
        height: 340px;
      }
    }
  }
</style>
