<template>
  <div class="contents bottom-sticky" ref="contents">
    <!-- slide -->
    <div class="slider-prd">
      <img ref="shareImage" src="../../../assets/images/program/class118-slide2.jpg" alt="T Factory x FLO 덕콘 | 2022.6 라쿠나">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 31px 12px 40px 20px;">
        <kakao-share
          title="5월의 덕콘"
          description="인기 뮤지션과 대학생 뮤지션이 꾸미는 스페셜 무대 - 2022.6 라쿠나"
        ></kakao-share>

        <em class="main-subtitle">T University Music Festival</em>
        <h2 class="main-title" style="margin-top:4px;">인기 뮤지션과<br>대학생 뮤지션이 꾸미는<br>스페셜 무대</h2>
        <p class="desc2" style="padding: 0; line-height: 20px;">
          6월의 덕콘 무대는 인기 뮤지션과 대학생 뮤지션이 함께 합니다.<br>핫한 뮤지션과 우리 학교 뮤지션이 꾸며줄 THECON의 무대와 함께하세요.<br>T Factory에 방문하고 대학생 뮤지션들의 소중한 관객이 되어 축제를 즐겨주세요.
        </p>
      </div>
      <div class="line">
        <span style="margin: 1px 65px;">2022. 06. 11 PM 7:00<em style="margin-left:11px;">LACUNA</em></span>
        <img src="../../../assets/images/program/line-bg.png" alt="THECON line-bg">
      </div>
      <div class="details-header" style="padding: 40px 20px;">
        <em class="main-subtitle">아티스트 소개</em>
        <h2 class="main-title" style="margin-top:4px;">라쿠나</h2>
        <div class="thumbnail"><img src="../../../assets/images/program/class118-conts1.jpg" alt=""></div>
        <p style="margin-top: 8px; line-height: 20px;">
          ‘라쿠나’는 영화 ‘이터널 션샤인’의 기억을 지워주는 회사 ‘라쿠나’에서 모티브를 얻어 밴드 이름을 결정했다.<br>
          2018년 12월 EP [끝이 없는 꿈을 그대에게 줄게요]를 발표하며 본격적인 활동을 시작했고, 민트페이퍼 컴필레이션 [Bright #8], 그랜드 민트 페스티벌 2019에 연이어 참여하면서 이름을 알렸다.
        </p>
        <p style="margin-top: 22px; line-height: 20px;">
          ‘라쿠나’의 음악은 그들도 가보지 못한 초현실적 장면들을 담고 있다. 소외되거나 외로운, 주류에 속하지 않은 사람들의 서사를 위해, 상상력과 이미지를 요하는 동화적 화법을 사용한다. 몽환적이고 가끔은 극단적일 만큼 과감한 그들만의 사운드와 이야기는 듣는 이들을 서서히 퇴로 없는 라비린스로 이끌어간다.
        </p>
      </div>
      <div class="details-inner">
        <h2 class="main-title">일정</h2>
        <dl>
          <dd>
            <span class="sub_title" style="width: 63px;">공연일</span>
            <span class="desc">6월 11일 (금) 오후 7시</span>
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
          <li>※ 라쿠나 덕콘 당첨자는 추가 선정 없이 5.27 덕콘의 최초 당첨자가 그대로 유지되며, 개별로 참석 가능 여부 확인 연락을 드릴 예정입니다.</li>
          <li>※ 대학생 뮤지션이 아닌 인기 뮤지션 공연은 덕력고사를 완료하신 분들 중 추첨을 통해 선정되며, 선정자는 개별 연락드립니다.</li>
          <li>※ 당첨자 중 무단 노쇼하시는 경우, 추후 콘서트 당첨에서 제외됩니다.</li>
          <li>※ 선착순 스탠딩<br>
          - 스탠딩은 별도 대기 없이 T팩토리 방문 후 덕콘 스탠딩으로 방문하셨다고 말씀하시면, 번호표를 부여합니다.
          - 번호표는 3시 이후 방문하신 선착순 50분께 배정됩니다.
          - 번호표를 받으신 분은 6시 이후에 2층의 공연장 입구에서 번호표를 보여주시면 스탠딩 입장이 가능 합니다.</li>
          <li>※ 정부의 방역지침 변경이 있을 시 공연의 주요내용도 변경이 있을 수 있습니다
          <li>※ 덕콘은 14세 미만의 고객도 보호자 동반 하에 당첨 및 참여가 가능하나, 보호자도 함께 응모에 당첨되어야 하는점 유의부탁드립니다.</li>
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
  name: 'Program118',
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
