<template>
  <div class="contents" ref="contents">
    <!-- slide -->
    <div class="slider-prd">
      <img src="../../../assets/images/program/class56-slide1.jpg" alt="">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details bottom-sticky">
      <div class="details-header">
        <kakao-share
          title="ADOY를 영화처럼 담아줄 팬분을 찾습니다."
          description="찐팬이 보는 ADOY의 공연은 어떨까? [덕콘 x 아이폰13 | ADOY]를 영화처럼 담아주실 팬분을 찾습니다."
        ></kakao-share>

        <em class="flag-solid7">CONCERT</em>
        <h2 class="details-tit">
          ADOY를 영화처럼<br>
          담아줄 팬분을 찾습니다.
        </h2>
        <div class="tags">
          <span class="flag-basic">인디밴드</span>
          <span class="flag-basic">아이폰13</span>
          <span class="flag-basic">덕콘</span>
        </div>
        <p class="desc type2">
          찐팬이 보는 ADOY의 공연은 어떨까?<br>
          &#91;덕콘 x 아이폰13 | ADOY&#93;를 <br>
          영화처럼 담아주실 팬분을 찾습니다.
        </p>
      </div>
      <div class="details-inner">
        <h3 class="subtit">모집 안내</h3>
        <div class="thumb"><img src="../../../assets/images/program/class56-conts.jpg" alt=""></div>
        <p>
          팬 분들의 시점을 대표해주실 팬 세분을 찾습니다.<br>
          이번 덕콘은 비대면 온라인으로 진행되며, <br>
          T Factory 인스타그램을 통해 아이폰13으로 찍은 공연 사진, 영상이 공유될 예정입니다.
        </p>
        <p style="margin-top:22px">
          애정이 듬뿍 담긴 팬의 시선으로<br>
          아이폰13을 활용해 ADOY를 영화처럼 담아주실 팬분을 찾습니다.<br>
          성덕이 될 수 있는 기회! ADOY의 매력을 널리 알릴 자신이 있다면, 바로 지원해주세요.
        </p>
        <p style="margin-top:22px">
          선정된 세분은 10월 15일 ADOY 덕콘 당일,<br>
          아이폰13으로 ADOY의 멋진 모습을 담아주시면 됩니다.<br>
          당일 아이폰13 촬영 사전교육 및 리허설, 본 공연에 참여되며, 아래와 같이 혜택을 드립니다.
        </p>
        <p style="margin-top:22px">※ 본 행사는 코로나19 방역 수칙을 준수하여 진행됩니다.</p>
        <h3 class="subtit">혜택 안내</h3>
        <ol class="step-list" start="margin-top:20px">
          <li>현장에서 ADOY의 공연을 실시간으로 관람하며, <br>
            애정을 담은 사진과 영상을 직접 촬영할 수 있습니다.
          </li>
          <li>ADOY 굿즈(티셔츠+싸인CD) 및
            T Factory 굿즈 세트를 드립니다.
          </li>
          <li>ADOY와 단독 사진 촬영의 기회를 드립니다.</li>
        </ol>
        <h3 class="subtit">응모 방법</h3>
        <p style="margin-top:12px">
          하단의 지원서 응모버튼을 눌러,
          내가 잘 할 수 있는 이유와
          직접 찍은 사진과 영상 파일 첨부하여
          skt.tfactory@gmail.com으로 보내주세요.
        </p>
        <ul class="texts-info" style="margin-top:18px">
          <li>* ADOY를 찍은 사진/영상을 보내주시면 가산점이 있습니다.</li>
        </ul>
        <h3 class="subtit">일정 및 장소</h3>
        <ul class="texts-list">
          <li>응모기간 : 10월 8일(금)~10월 11일(월)</li>
          <li>당첨자 발표 : 10월 12일(화) 메일로 회신</li>
          <li>행사진행 : 10월 15일(금) 오후 3시 ~ 9시</li>
          <li>장소 : T Factory 2층, 0 Stage</li>
        </ul>
        <div class="notice">
        <h4 class="subtit">{{ $t('prd.notice')}}</h4>
        <ul class="texts-info">
          <li>* 선정되신 분은 당첨자 발표일에 보내주신 메일 주소로 회신드리며, 당일 확인 응답이 없으시면 선정이 취소될 수 있습니다.</li>
          <li>* 선정되신 분은 공연 당일 진행되는 사전교육(오후3시)에 필수로 참석하셔야합니다.</li>
          <li>* 오후 4시에 진행되는 리허설부터 본 공연까지 촬영이 진행됩니다.(저녁 제공)</li>
        </ul>
      </div>
      </div>
    </div>
    <!-- //details -->

    <div class="btn-wrap sticky">
      <a href="mailto:skt.tfactory@gmail.com?Subject=덕콘ADOY 팬 촬영 지원" class="btn-solid">지원서 응모</a>
    </div>
  </div>
</template>

<script>
import KakaoShare from '../../common/KakaoShare'
import ProgramButton from './components/ProgramButton'

export default {
  name: 'Program56',
  components: {
    KakaoShare,
    ProgramButton
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
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/product';
  .texts-list li:nth-child(2):before {
    content: '-' !important;
    margin-left: -9px;
  }
</style>
