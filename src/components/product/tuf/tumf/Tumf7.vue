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
          description="인기 뮤지션과 대학생 뮤지션이 꾸미는 스페셜 무대! - 당신의 취향을 담는, 취향상점"
        ></kakao-share>

        <em class="main-subtitle">T University Music Festival</em>
        <h2 class="main-title" style="margin-top:4px;">인기 뮤지션과<br>대학생 뮤지션이 꾸미는<br>스페셜 무대</h2>
        <p class="desc2">
          대학생 뮤지션들이 꾸미는 THECON의 무대.<br>T Factory에 방문하셔서 대학생 뮤지션들과 함께 축제를 즐겨주세요.
        </p>
      </div>
      <div class="line">
        <span>THECON&nbsp;&nbsp;&nbsp; THECON&nbsp;&nbsp;&nbsp; THECON&nbsp;&nbsp;&nbsp; THECON&nbsp;&nbsp;&nbsp; THE</span>
        <img src="../../../../assets/images/program/line-bg.png" alt="THECON line-bg">
      </div>
      <div class="details-header" style="padding: 40px 20px;">
        <em class="main-subtitle">대학생 뮤지션 소개</em>
        <h2 class="main-title" style="margin-top:4px; font-family: 'NOTO SANS KR';">당신의 취향을 담는,<br>취향상점</h2>
        <div class="thumbnail"><img src="../../../../assets/images/program/tuf_tumf7_musician.jpg" alt="tuf_tumf7_musician"></div>
        <p style="margin-top: 8px;">
          ‘취향상점’은 도제현(보컬), 주지호(베이스), 강정혜(드럼)으로 이루어진 인디밴드이다.<br>
         구나 겪을 수 있는 일상의 여러 이야기를 밝은 멜로디에 담아 노래하는 취향상점은 재즈를 기반으로 하는 멜로디와, 일상의 이야기를 담는 가사를 통해 겉으로는 아무렇지 않아 보이지만 복잡하고 상처투성이인 내면의 감정을 노래하며 듣는 이의 마음속에 숨겨진 진심을 발견할 수 있는 음악을 만들고자 한다.
        </p>
        <p style="margin-top: 22px;">
         단국대학교 생활음악과 동문으로 이루어진 밴드<br>‘취향상점’은 2018년 ‘정은수와 친구들’이라는 이름으로 활동을 시작하며 제 2회 충남음악창작소 제작 지원 사업 'I'M A tumf' 에서 대상을 수상하고 첫 번째 EP 앨범 ‘1집 24.4℃’를 발매 하며 한국 인디 음악 시장에 첫 발을 내딛었다. 이듬해 한국콘텐츠진흥원에서 주최한 ‘2019 뮤즈온’의 TOP 20에 진출하며 두 번째 앨범 ‘모든 그대’를 발매한 이들은 당신의 취향을 담는다는 뜻의 ‘취향상점’으로 밴드명을 변경하며 보다 다양한 장르를 폭넓게 담고자 하는 의지를 내보였다.<br>
        그 밖에도 ‘2020 올스타 뮤지션 페스티벌’ 본선 진출, ‘2021 인디스땅스’ TOP 20 진출, '2021 대한민국 문화의 달' 신 가객대첩 우수상 수상, 카카오TV '히든 : 더 퍼포먼스' 퍼포머 선정, '2022 경록절' 참여 등 꾸준한 활동을 이어가고 있으며, 2021년 크리스마스를 맞아 발매한 앨범 ‘Blue Christmas’에서는 엑소, 슈퍼주니어 등 다양한 곡을 작사한 작사가 ‘이스란’과 협업하여 기존의 어쿠스틱한 색깔에서 벗어나 ‘Tasty Shop’ 이라는 이름으로 새로운 모습을 선보이며 다양한 장르에서 취향상점만의 독특한 음악적 색채를 펼치고 있다.
        </p>
      </div>
      <div class="details-inner">
        <h2 class="main-title">일정</h2>
        <dl>
          <dd>
            <span class="sub_title" style="width: 55px;">공연 기간</span>
            <span class="desc">2022년 5월 6일 (금) PM 8:00</span>
          </dd>
           <dd>
            <span class="sub_title" style="width: 55px;">장소</span>
            <span class="desc">SK텔레콤 플래그십스토어 T Factory<br>(홍대입구역 9번 출구)</span>
          </dd>
        </dl>
      </div>
      <div class="details-inner" style="padding: 40px 20px;">
        <h2 class="main-title">안내사항</h2>
        <ul>
          <li>※ 본 전시는 T Factory 홍대점을 방문하여 스마트폰으로 체크인 한 경우에만 참여 가능합니다. (체크인 가능 연령: 만 14세 이상)</li>
          <li>※ 본 전시 세부 사항들은 업체 사정에 따라 별도의 안내 없이 중단 또는 변경될 수 있습니다.</li>
        </ul>
      </div>
      <div class="details-inner" style="padding: 40px 0 20px">
        <h2 class="main-title" style="padding: 0 20px; color: #000;">함께즐겨요!</h2>
        <div class="program">
	        <router-link to="/experience/program110?classId=156">
	          <div class="desc">
	            <p class="detail" style="margin-bottom: 25px;">Woluld you, 우주?</p>
	            <span class="topic">T대학 우주 축제, TUF</span>
              <img style="right: -61px;" src="../../../../assets/images/program/leftarrow-bk.png" alt="leftarrow">
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
              <img style="bottom: -7px; right: 165px;" src="../../../../assets/images/program/leftarrow-bk.png" alt="leftarrow">
	          </div>
	          <div class="images">
	            <img src="../../../../assets/images/program/class107-conts3.jpg" alt="POP-UP Exhibition X University">
	          </div>
	        </router-link>
        </div>
        <div class="program">
	        <router-link to="/experience/program4?classId=63">
	          <div class="desc">
	            <p class="detail">나도 작곡가!<br>아이패드로 곡 만들기</p>
	            <span class="topic">크루 클래스-음악</span>
              <img style="bottom: -7px; right: -48px;" src="../../../../assets/images/program/leftarrow-bk.png" alt="leftarrow">
	          </div>
	          <div class="images">
	            <img src="../../../../assets/images/program/class111-conts3.jpg" alt="크루 클래스-음악">
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
  name: 'Tumf7',
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
      p{
        margin-top: 0;
        line-height: 20px;
      }
    }
    &-inner {
      padding:40px 20px;
      dl dd .desc{
        margin-left: 21px;
      }
      dl dd .desc em{
        color: #3617ce;
      }
      ul{
        font-size: 12px;
        line-height: 19px;
        color: #787878;
      }
    }
  }
</style>
