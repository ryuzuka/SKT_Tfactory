<template>
  <div class="contentss" ref="contents">
    <!-- slide -->
    <div class="slider-prd" style="padding-top:56px;">
      <img ref="shareImage" src="../../../assets/images/program/class110-slide2.jpg" alt="T대학 우주 축제">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 28px 12px 40px 20px;">
        <kakao-share
         title="T대학 우주 축제"
          description="TUF에 여러분을 초대합니다."
        ></kakao-share>

        <h2 class="main-title">&lt;T대학 우주축제&gt;에<br>여러분을 초대합니다.</h2>
        <p class="desc2" style=" 0px;">
          축제의 계절 봄,<br>
          힙한 라이프스타일을 배우는 학교 ‘T대학’에서<br>
          유명 브랜드 10곳과 함께 &lt;T대학 우주축제&gt;를<br>
          열었습니다.
        </p>
        <p class="desc2" style="margin-top: 20px;">
          축제 부스에서 진행하는 색다른 게임 이벤트 뿐만 아니라<br>
          유명 뮤지션과 대학밴드들의 콘서트 무대,<br>
          그리고 미술 대학생들의 작품전시도<br>
          놓치지 마세요!
        </p>
        <p class="desc2" style="margin-top: 20px;">
          지난 2년간 사라진 대학 축제를 T Factory에서<br>다시 즐겨보세요!
        </p>
        <p class="desc2" style="margin-top: 20px;">
          Would you 우주?
        </p>
      </div>
      <div class="details-inner">
        <ul class="festival_events">
          <li>
            <p class="main_event">&lt;T대학 우주축제, TUF&gt;</p>
            <span>
              T대학이 T Factory 1층에 3개 캠퍼스를 구성하고<br>
              10개의 축제부스를 마련했습니다.<br>
              인기 브랜드를 축제 부스에서는 진짜 대학축제에서 즐길 법한 색다른 게임 이벤트를 준비했는데요, 모든 축제 부스에서 게임에 많이 참여해보세요!<br>
              풍성한 혜택이 여러분을 기다리고 있습니다.
            </span>
          </li>
          <li>
            <p class="sub_event">Enterainment Campus</p>
            <span>
              롯데시네마 : 초성 보고 영화제목 맞히기<br>
              플로(Flo) : 0.5초 전주 듣고 노래제목 맞히기<br>
              사운드짐 : 천국의 로잉머신!
            </span>
          </li>
          <li>
            <p class="sub_event">F&B Campus</p>
            <span>
              파리바게트 : 인기빵 3종 레시피대로 빵굽기 게임<br>
              베스킨라빈스 : 확대사진 보고 아이스크림 이름 맞히기<br>
              허닭 : 팔씨름을 이겨라!
            </span>
          </li>
          <li style="margin-bottom:40px;">
            <p class="sub_event">Lifestyle Campus</p>
            <span>
              생활연구소 : 생활연구소 인기물품 최대 70% 할인 판매<br>
              청소연구소 : 방 사진을 보고 청소 안된 틀린그림 찾기!
            </span>
          </li>
          <li style="margin-bottom:40px;">
            <p class="main_event">&lt;음악 페스티발, TUMF&gt;</p>
            <span>
              전국 13개 대학밴드가 덕콘 무대에 선다!<br>
              T대학 우주 축제의 연계 프로그램으로 T Factory 의 대표 프로그램 ‘덕콘’을 대학밴드에게 오픈했습니다.<br>
              공연 라인업과 일정은 TUMF 페이지를 확인해주세요!
            </span>
          </li>
          <li style="margin-bottom:0;">
            <p class="main_event">&lt;미술 작품전시, TUAF&gt;</p>
            <span>
              T Factory 2층 POP-UP Zone에서 전국 미술대학생 38명의 미술작품이 전시회가 열립니다.<br>
              참여 작가와 작품은 웹도록에서 확인할 수 있으며, 보다 자세한 내용은 TUAF 페이지를 확인해주세요!
            </span>
          </li>
        </ul>
      </div>
      <div class="details-inner">
        <h2 class="main-title" style="margin-bottom: 13px;">일정</h2>
        <dl>
          <dd>
            <span class="sub_title" style="width: 52px; margin-bottom: 14px;">전시일정</span>
            <span class="desc" style="margin-left: 24px;">2022년 4월 11일 (월) ~ 6월 30일 (목)</span>
          </dd>
          <dd>
            <span class="sub_title" style="width: 52px;">장소</span>
            <span class="desc" style="margin-left: 24px;">SK텔레콤 플래그십스토어 T Factory<br>(홍대입구역 9번 출구)</span>
          </dd>
        </dl>
      </div>
      <div class="details-inner">
        <h2 class="main-title">안내사항</h2>
        <ul class="info_text">
          <li>※ 본 전시는 T Factory 홍대점을 방문하여 스마트폰으로 체크인 한 경우에만 참여 가능합니다. (체크인 가능 연령: 만 14세 이상)</li>
          <li>※ 본 전시 세부 사항들은 업체 사정에 따라 별도의 안내 없이 중단 또는 변경될 수 있습니다.</li>
        </ul>
      </div>
      <div class="details-bottom" style="border-top:12px solid #f0f0f0; padding: 40px 36px 48px 20px;">
        <h2 class="main-title">TUF X University</h2>
        <div class="other-programs">
          <div class="program">
	          <router-link to="/experience/program111?classId=154">
	            <div class="desc">
	              <p class="topic">TUMF.</p>
	              <span class="date">THE CON x University</span>
	            </div>
	            <div class="images">
	              <img src="../../../assets/images/program/class110_conts3.jpg" alt="TUMF.">
	            </div>
	          </router-link>
          </div>
          <div class="program">
	          <router-link to="/experience/program112?classId=155">
	            <div class="desc">
	              <p class="topic" style="line-height: 29px;">TUAF.</p>
	              <p class="date" style="line-height:14px;">POP-UP Exhibition</p>
                <p class="date">x University</p>
	            </div>
	            <div class="images">
	              <img src="../../../assets/images/program/class110_conts4.jpg" alt="TUAF.">
	            </div>
	          </router-link>
          </div>
        </div>
      </div>
      <div class="details-inner" style="padding: 40px 0">
        <h2 class="main-title" style="padding: 0 20px; color: #000;">함께즐겨요!</h2>
        <div class="program">
          <router-link to="/experience/program111?classId=154">
            <div class="desc">
              <p class="detail">대학생 뮤지션이 꾸미는<br>덕콘의 스페셜 무대<br>THECON X University</p>
              <span class="topic">TUMF</span>
              <img style= "bottom: -7px; right: 85px;" src="../../../assets/images/program/leftarrow-bk.png" alt="leftarrow">
            </div>
            <div class="images">
              <img src="../../../assets/images/program/class107-conts1.jpg" alt="TUMF">
            </div>
          </router-link>
        </div>
        <div class="program">
	        <router-link to="/experience/program112?classId=155">
	          <div class="desc">
	            <p class="detail">미술 전공 대학생들의<br>일러스트로 꾸며진 팝업전시<br>POP-UP Exhibition X University</p>
	            <span class="topic">TUAF</span>
	            <img style="bottom: -7px; right: 165px;" src="../../../assets/images/program/leftarrow-bk.png" alt="leftarrow">
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
  name: 'Program110',
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
  &-inner {
    padding:40px 20px;
    .festival_events{
      font-size: 14px;
      line-height: 20px;
      li{
        margin-bottom:32px;
        .main_event{
          color:#3617ce;
          margin-bottom: 16px;
          font-weight: bold;
        }
        .sub_event{
          color:#000;
          margin-bottom: 12px;
          font-weight: bold;
        }
        p{margin-top:0;}
      }
    }
    .info_text{
      font-size: 12px;
      line-height: 19px;
      color: #787878;
    }
  }
}
</style>
