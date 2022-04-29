<template>
  <div class="contentss" ref="contents">
    <!-- slide -->
    <div class="slider-prd" style="padding-top:56px;">
      <img src="../../../assets/images/program/class119_crew_class_slide1.jpg" alt="어린이날 스페셜 프로그램">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 31px 12px 27px 20px;">
        <kakao-share
          title="어린이날 스페셜 프로그램"
          description="T Factory에서 최고의 어린이날을 보내세요!"
        ></kakao-share>

        <em class="main-subtitle">어린이날 스페셜 프로그램</em>
        <h2 class="main-title" style="margin-top:3px;">T Factory에서 최고의<br>어린이날을 보내세요!</h2>
      </div>
      <div class="details-inner">
        <p class="desc3">
          어린이날을 맞아 T Factory에서 온 가족이 함께 즐길 수 있는 다양한 프로그램을 준비했습니다.<br>특별한 체험으로 가족의 소중한 추억을 만들어보세요!
        </p>
        <ul class="desc3" style="margin-top:22px; letter-spacing:-0.3px;">
          <li>1. 어린이를 위한 숲 속 피아노 음악회</li>
          <li>2. 온가족이 함께하는 크루 클래스 4가지 (사전 예약 필수)
            <ul class="crew_class" style="padding-left:27px;">
              <li>1 - [음악] 우리가족 노래 만들기</li>
              <li>2 - [드로잉] 우리가족 얼굴 서로 그려주기</li>
              <li>3 - [릴스] 우리가족 첫 릴스 만들기</li>
              <li>4 - [영상] 우리가족 첫 브이로그 만들기</li>
            </ul>
          </li>
          <li>3. MS Xbox 게임 토너먼트 가족 대항전!</li>
          <li>4. 우리가족 모바일라이프 컨설팅 받기</li>
        </ul>
      </div>
      <div class="details-inner">
        <em class="main-subtitle">프로그램 1.</em>
        <h2 class="main-title" style="margin-top:3px; letter-spacing:-0.5px;">어린이를 위한<br>숲 속 피아노 음악회<em class="main-subtitle"> (현장참여)</em></h2>
        <p class="desc4" style="margin-bottom: 22px;">진짜 숲, Factory Garden에서 피아니스트가 직접 동요, 재즈, 뮤지컬 음악을 연주합니다. 한시간 동안 도심 속 힐링 연주회를 즐겨보세요.</p>
        <dl>
          <dd>
            <span class="sub_title" style="width: 39px;">시간</span>
            <span class="desc">5월 5일 (목) 15시, 18시 (60분)</span>
          </dd>
           <dd>
            <span class="sub_title" style="width: 39px;">장소</span>
            <span class="desc">1.5층 Factory Garden</span>
          </dd>
           <dd>
            <span class="sub_title" style="width: 39px;">연주자</span>
            <span class="desc">재즈 피아니스트 백혜은 (혜니스윗)</span>
          </dd>
        </dl>
      </div>
      <div class="details-inner">
        <em class="main-subtitle">프로그램 2.</em>
        <h2 class="main-title" style="margin-top:3px; letter-spacing:-0.1px;">온가족이 함께하는<br>크루클래스<em class="main-subtitle">&nbsp; (사전예약 필수)</em></h2>
        <ul class="desc4" style="margin-bottom: 32px;">
          <li>※ 신청방법 : 클래스 시간 확인 후 하단 ‘프로그램 예약’ 에서 해당 시간 선택</li>
          <li>※ 가족 대표 1인만 예약하면 되며, 어린이 포함 동반가족 4인까지 참석 가능합니다.</li>
          <li>※ 클래스는 선착순 마감이며, 1회에 한하여 신청 가능합니다.</li>
        </ul>
        <div class="children_program">
          <em class="main-subtitle">1 - [음악] 우리 가족 노래 만들기</em>
          <p class="desc4" style="margin-bottom:16px;">우리 가족 이야기를 노래로 만들어 보세요.</p>
          <dl>
            <dd>
              <span class="sub_title" style="width: 39px;">시간</span>
              <span class="desc">5월 5일 (목) 15시, 18시 (50분)</span>
            </dd>
            <dd>
              <span class="sub_title" style="width: 39px;">준비물</span>
              <span class="desc">아이패드 또는 아이폰, 이어폰 (유선 권장)</span>
            </dd>
          </dl>
          <p style= "line-height: 24px; margin-top: 16px;">* 없을 시 크루의 아이패드 화면을 함께 보며 진행합니다.<br>*가족의 이야기를 사전에 수집하기 위하여 음악 클래스 신청 고객 대상 사전에 연락을 드릴 예정입니다.</p>
          <div class="button_area">
            <div class="btn-wrap" style="margin: 22px 12px; 40px;">
              <router-link class="btn-line big" to="">우리 가족 노래 만들기 예약하기</router-link>
            </div>
          </div>
        </div>
        <div class="children_program">
          <em class="main-subtitle">2 - [드로잉] 우리 가족 얼굴 서로 그려주기</em>
          <p class="desc4" style="margin-bottom:16px;">아이패드로 우리 가족의 얼굴을 서로 그리며 추억을 만들어보세요.</p>
          <dl>
            <dd>
              <span class="sub_title" style="width: 39px;">시간</span>
              <span class="desc">5월 5일 (목) 14시, 17시 (50분)</span>
            </dd>
            <dd>
              <span class="sub_title" style="width: 39px;">준비물</span>
              <span class="desc">가족사진(이미지파일), Procreate 앱이 설<br>치된 아이패드와 펜슬</span>
            </dd>
          </dl>
          <p style= "line-height: 24px; margin-top: 16px;">* 없을 시 현장 대여 가능합니다.</p>
          <div class="button_area">
            <div class="btn-wrap" style="margin: 22px 12px; 40px;">
              <router-link class="btn-line big" to="">우리가족 얼굴 서로 그려주기 예약하기</router-link>
            </div>
          </div>
        </div>
        <div class="children_program">
          <em class="main-subtitle">3 - [릴스] 우리 가족 첫 릴스 만들기</em>
          <p class="desc4" style="margin-bottom:16px;">T Factory의 모든 공간이 릴스의 배경이 됩니다. 가족들과 함께 첫 릴스 촬영에 도전해보세요.<p>
          <dl>
            <dd>
              <span class="sub_title" style="width: 39px;">시간</span>
              <span class="desc">5월 5일 (목) 13시, 16시 (50분)</span>
            </dd>
            <dd>
              <span class="sub_title" style="width: 39px;">준비물</span>
              <span class="desc">인스타그램 app이 설치된 휴대폰</span>
            </dd>
          </dl>
          <div class="button_area">
            <div class="btn-wrap" style="margin: 22px 12px; 40px;">
              <router-link class="btn-line big" to="">우리 가족 첫 릴스 만들기 예약하기</router-link>
            </div>
          </div>
        </div>
        <div class="children_program">
          <em class="main-subtitle">4 - [영상] 우리 가족 첫 브이로그 만들기</em>
          <p class="desc4" style="margin-bottom:16px;">휴대폰 하나로 가장 쉽고 빠르게 우리 가족 추억의 첫 브이로그를 만들어 보세요!</p>
          <dl>
            <dd>
              <span class="sub_title" style="width: 39px;">시간</span>
              <span class="desc">5월 5일 (목) 12시, 15시 (50분)</span>
            </dd>
            <dd>
              <span class="sub_title" style="width: 39px;">준비물</span>
              <span class="desc">휴대폰</span>
            </dd>
          </dl>
          <p style= "line-height: 24px;">* 없을 시 현장 대여 가능합니다.</p>
          <div class="button_area">
            <div class="btn-wrap" style="margin: 22px 12px; 0 0;">
              <router-link class="btn-line big" to="">우리 가족 첫 브이로그 만들기 예약하기</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="details-inner">
        <em class="main-subtitle">프로그램 3.</em>
        <h2 class="main-title" style="margin-top:3px; letter-spacing:-0.1px;">MS Xbox 게임 토너먼트<br>가족 대항전!<em class="main-subtitle">&nbsp; (현장참여)</em></h2>
        <p class="desc4" style="margin-bottom:16px;">게임을 좋아하는 가족이라면 Xbox 게임에 도전해보세요. 토너먼트 형식으로 2:2 가족 대전이 펼쳐집니다.</p>
        <dl>
          <dd>
            <span class="sub_title" style="width: 55px;">시간</span>
            <span class="desc" style="margin-left: 21px;">5월 5일 (목) 13시, 15시, 17시</span>
          </dd>
           <dd>
            <span class="sub_title" style="width: 55px;">게임 종목</span>
            <span class="desc" style="margin-left: 21px;">FOOTBALL (13시, 17시)<br>MELEE (15시)</span>
          </dd>
           <dd>
            <span class="sub_title" style="width: 55px;">참여 방법</span>
            <span class="desc" style="margin-left: 21px;">시간에 맞춰 현장 신청</span>
          </dd>
          <dd>
            <span class="sub_title" style="width: 55px;">선물</span>
            <span class="desc" style="margin-left: 36px;">1등 - RC카 혹은 케어베어 중 선택 (어린이 고객에게만 증정)<br>참가상 - 웰컴 키트</span>
          </dd>
        </dl>
      </div>
      <div class="details-inner">
        <em class="main-subtitle">프로그램 4.</em>
        <h2 class="main-title" style="margin-top:3px; letter-spacing:-0.1px;">우리가족 모바일라이프<br>컨설팅받기<em class="main-subtitle">&nbsp; (사전예약 필수)</em></h2>
        <p class="desc4" style="margin-bottom:16px;">※ 신청방법 : 컨설팅 시간 확인 후 하단 ‘프로그램 예약’에서 해당 시간 선택<br>※ 가족 대표 1인만 예약하면 되며, 어린이 포함 동반가족 4인까지 참석 가능합니다.</p>
        <p class="desc4" style="margin-bottom:16px;">우리 가족의 모바일라이프는 똑똑하게 설계되어 있을까요? 전문크루와 함께 우리 가족 모바일라이프를 체크하고 통신비 컨설팅도 받아보세요!</p>
        <dl>
          <dd>
            <span class="sub_title" style="width: 55px;">시간</span>
            <span class="desc" style="margin-left: 21px;">10시 30분 ~ 18시 30분, 매시 30분</span>
          </dd>
           <dd>
            <span class="sub_title" style="width: 55px;">상담 장소</span>
            <span class="desc" style="margin-left: 21px;">2층 CS존</span>
          </dd>
        </dl>
        <div class="button_area">
            <div class="btn-wrap" style="margin: 22px 12px; 0 0;">
              <router-link class="btn-line big" to="">우리가족 모바일라이프 컨설팅 예약하기</router-link>
            </div>
          </div>
      </div>
      <div class="details-inner">
        <p style="line-height: 24px">* 본 전시 세부 사항들은 업체 사정에 따라 별도의 안내 없이 중단 또는 변경될 수 있습니다.</p>
      </div>
      <div class="details-inner" style="padding: 40px 0">
        <h2 class="main-title" style="padding: 0 20px; color: #000;">다른 프로그램도 있어요!</h2>
        <div class="program">
	        <div class="program">
            <a href="/experience/program111?classId=154">
              <div class="desc">
                <p class="detail">대학생 뮤지션이 꾸미는<br>덕콘의 스페셜 무대<br>THECON X University</p>
                <span class="topic">TUMF</span>
                <!-- <img style= "bottom: -7px; right: 85px;" src="../../../assets/images/program/leftarrow-bk.png" alt="leftarrow"> -->
              </div>
              <div class="images">
                <img src="../../../assets/images/program/class107-conts1.jpg" alt="TUMF">
              </div>
            </a>
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
    <program-button :visible="false"></program-button>
    <!-- // button set -->
  </div>
</template>

<script>
import KakaoShare from '../../common/KakaoShare'
import ProgramButton from './components/ProgramButton'
import programLineupNew from './components/ProgramLineupNew'
import * as NATIVE from '../../../js/native'

export default {
  name: 'Program119',
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
    dl{
      dd{
        .desc{margin-left: 37px;}
      }
    }
    .desc4{
      line-height: 19px;
    }
  }
  &-bottom {
    font-size: 12px;
    line-height: 19px;
    color: #787878;
  }
}
</style>
