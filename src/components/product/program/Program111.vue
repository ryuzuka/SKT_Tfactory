<template>
  <div class="contents" ref="contents">
    <!-- slide -->
    <div class="slider-prd">
	    <img ref="shareImage" src="../../../assets/images/program/class111-slide3.jpg" alt="THECON X University">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 28px 12px 40px 20px;">
        <kakao-share
         title="T University Music Festival "
         description="인기 뮤지션과 대학생 뮤지션이 꾸미는 스페셜 무대 "
        ></kakao-share>

        <em class="main-subtitle">T University Music Festival</em>
	      <h2 class="main-title" style="margin-top: 5px;">인기 뮤지션과<br>대학생 뮤지션이 꾸미는<br>스페셜 무대</h2>
        <p class="desc2" style="margin-top: 0px;">
          무대에 설 기회가 적어진 대학생 뮤지션들에게 T Factory의 덕콘 무대를 오픈합니다.<br>T대학 우주 축제 기간 동안 진행되는 '덕콘'은 인기 뮤지션과 대학생 뮤지션으로 라인업이 풍성하게 구성됩니다!<br>보다 더 특별하고 열정적인 덕콘을 기대하세요!
        </p>
      </div>
	    <div class="line">
		    <span>THECON&nbsp;&nbsp;&nbsp; THECON&nbsp;&nbsp;&nbsp; THECON&nbsp;&nbsp;&nbsp; THECON&nbsp;&nbsp;&nbsp; THE</span>
		    <img src="../../../assets/images/program/line-bg.png" alt="THECON line-bg">
	    </div>
	    <div class="details-bottom" style="padding: 40px 20px 12px;">
        <h2 class="main-title" style="margin-bottom: 0px;">참여 뮤지션 보기</h2>
      </div>
      <div class="lineup" style="padding: 0px 18px 12px 24px;">
        <ul>
          <li>
            <div class="date">
	            <span>6.10<br>FRI</span>
            </div>
            <router-link to="/experience/tua/tumf12">
              <div class="card" Style="margin-left: 27px;">
                <div class="text">
	                <p class="name">크래늄</p>
	                <p class="time">PM 5:00</p>
                </div>
                <div class="image">
                  <img src="../../../assets/images/program/musician12.png" alt="musician">
                </div>
              </div>
            </router-link>
          </li>
          <li>
            <div class="date"></div>
            <router-link to="/experience/tua/tumf5">
	            <div class="card" Style="margin-left: 69px;">
		            <div class="text">
			            <p class="name">다하다</p>
			            <p class="time">PM 8:00</p>
		            </div>
		            <div class="image">
			            <img src="../../../assets/images/program/musician5.png" alt="musician">
		            </div>
	            </div>
            </router-link>
          </li>
          <li>
	          <div class="date">
		          <span>6.11<br>SAT</span>
	          </div>
	          <router-link to="/experience/program118?classId=">
		          <div class="card" Style="margin-left: 27px;">
			          <div class="text">
				          <p class="name">라쿠나</p>
				          <span class="flag-solid10">MUSICIAN</span>
				          <p class="time">PM 7:00</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/class111-musician611.png" alt="musician">
			          </div>
		          </div>
	          </router-link>
          </li>
          <li>
	          <div class="date">
		          <span>6.17<br>FRI</span>
	          </div>
	          <router-link to="/experience/program200?classId=39">
		          <div class="card" Style="margin-left: 27px;">
			          <div class="text">
				          <p class="name">세이수미</p>
				          <span class="flag-solid10">MUSICIAN</span>
				          <p class="time">PM 7:00</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/class111_musician1.png" alt="musician">
			          </div>
		          </div>
	          </router-link>
          </li>
           <li>
	           <div class="date">
		           <span>6.24<br>FRI</span>
	           </div>
	           <router-link to="/experience/program201?classId=41">
		           <div class="card" Style="margin-left: 27px;">
			           <div class="text">
				           <p class="name">요조</p>
				           <span class="flag-solid10">MUSICIAN</span>
				           <p class="time">PM 7:00</p>
			           </div>
			           <div class="image">
				           <img src="../../../assets/images/program/class111_musician2.png" alt="musician">
			           </div>
		           </div>
	           </router-link>
          </li>
          <li>
	          <div class="date">
		          <span>6.25<br>SAT</span>
	          </div>
	          <router-link to="/experience/program117?classId=44">
		          <div class="card" Style="margin-left: 27px;">
			          <div class="text">
				          <p class="name">미스몰리</p>
				          <span class="flag-solid10">DANCER</span>
				          <p class="time">PM 3:00</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/special_musician3.png" alt="musician">
			          </div>
		          </div>
	          </router-link>
          </li>
        </ul>
      </div>
      <div class="details-inner">
        <h2 class="main-title">일정</h2>
        <dl>
          <dd>
            <span class="sub_title" style="width: 55px; margin-bottom: 14px;">공연 기간</span>
	          <span class="desc" style="margin-left: 24px;">6월 10일 (금) ~ 6월 25일 (토)</span>
          </dd>
          <dd>
            <span class="sub_title" style="width: 55px;">장소</span>
            <span class="desc" style="margin-left: 24px;">
	            SK텔레콤 플래그십스토어 T Factory<br>(홍대입구역 9번 출구)
            </span>
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
        <h2 class="main-title" style="padding: 0 20px; color: #000;">함께즐겨요!</h2>
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
  </div>
</template>

<script>
import KakaoShare from '../../common/KakaoShare'
import * as NATIVE from '../../../js/native'

export default {
  name: 'Program111',
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
.lineup{
  ul li{
      .card{
      margin-left: 19px;
        .text{
          .flag-solid10{
            padding: 1px 5px;
            margin: 3px 4px;
          }
         }
        }
      }
    }
</style>
