<template>
  <div class="contents" ref="contents">
    <!-- slide -->
    <div class="slider-prd swiper-top">
      <div class="thumb"><img src="../../../assets/images/program/class50-slide1.jpg" alt=""></div>
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details">
      <div class="details-header">
        <kakao-share
          title="JUST PLAY. iPhone13. 활용 꿀팁 마스터 (60min)"
        ></kakao-share>

        <em class="flag-solid7">SPECIAL CLASS</em>
        <h2 class="details-tit">
          JUST PLAY. iPhone13.<br>
          활용 꿀팁 마스터 (60min)
        </h2>
        <div class="tags">
          <span class="flag-basic">iPhone13</span>
          <span class="flag-basic">원데이클래스</span>
          <span class="flag-basic">경품이벤트</span>
        </div>
        <p class="desc type2">
          크루와 함께 iPhone13의 일상을 위한 비상한 능력을<br>
          체험해보세요.<br>
          iPhone13의 스펙부터, 사진 촬영, 영상 촬영까지<br>
          모든 기능을 핵심만 모아 알려드립니다. <br>
          체험 후 아이폰 덕력고사를 통한 아이패드 프로와<br>
          애플 펜슬, 에어팟, 정품 충전케이블 등 푸짐한 선물<br>
          당첨 기회도 놓치지 마세요.
        </p>
      </div>
      <div class="details-inner">
        <h3 class="subtit">클래스 소개</h3>
        <p>
          iPhone13 런칭 기념, iPhone13의 모든 것을 체험해 볼 수 있는 스페셜 클래스를 소개합니다.<br>
          내 마음에 드는 iPhone13 기기를 골라 60분 동안 마음껏 체험해보세요. 부담없이 iPhone13을 만져보고, 비교하고, 사용해볼 수 있어요!<br>
          각 분야 전문 크루들이 iPhone13을 더 잘 PLAY할 수 있도록 도와드려요.
        </p>
        <h3 class="subtit"><span class="num">1.</span> iPhone13 스펙 총정리</h3>
        <p>
          새로운 기능이 무엇인지, iPhone13 시리즈 모델 별 차이점은 무엇인지, 가성비는 무엇이 좋을지,<br>
          가장 인기있는 컬러는 무엇인지….<br>
          아이폰 13의 모든 궁금증을 13분 만에 총정리해드립니다.
        </p>
        <h3 class="subtit"><span class="num">2.</span> iPhone13으로 감각적인 사진 찍기</h3>
        <p>
          접사, 저조도 촬영, 야간 인물 촬영까지<br>
          새로워진 iPhone13의 카메라 기능부터<br>
          촬영 구도와 보정 등 촬영 기법도 알려드려요.<br>
          크루와 함께 iPhone13으로 감각적인 사진을 찍어보세요.
        </p>
        <h3 class="subtit"><span class="num">3.</span> iPhone13으로 영화같은 영상 찍기</h3>
        <p>
          iPhone13의 시네마틱모드를 활용하여,<br>
          심도 효과있는 영상을 찍어보세요.<br>
          영상 전문 크루가 iPhone13의 동영상 촬영 방법부터 편집까지 알려드립니다.
        </p>
        <h3 class="subtit"><span class="num">4.</span> iPhone13 덕력고사 이벤트 참여</h3>
        <p>클래스를 끝까지 잘 들었다면, iPhone13 덕력고사를 풀어보세요. 정답을 모두 맞힌 고객님을 대상으로 추첨을 통해 다양한 애플 제품을 선물로 드립니다.</p>
        <div class="thumb"><img src="../../../assets/images/program/class50-conts.jpg" alt=""></div>
        <p class="subtit type2" style="margin:16px 0 4px">이벤트 경품</p>
        <p style="margin-top:4px">
          1명 : 아이패드 에어 64GB & Apple 펜슬(2세대) <br>
          4명 : 에어팟 프로<br>
          20명 : Apple 20W USB-C 전원 어댑터 &<br>
          <span style="padding-left:36px">USB-C-라이트닝 케이블(1m)</span>
        </p>
        <ul class="texts-info" style="margin-top: 16px;">
          <li>* 본 이벤트는 클래스 수강 완료자에 한해 응모 가능합니다.</li>
          <li>* 본 이벤트 경품은 재고 사정에 따라 변경될 수 있습니다.</li>
          <li>* 본 이벤트 참여와 관련하여 자세한 내용은 현장 안내를<br>참조해주세요.</li>
        </ul>
        <h3 class="subtit">추천 대상</h3>
        <ul class="texts-list">
          <li>iPhone13이 뭐가 달라졌는지 자세히 알고 싶으신 분</li>
          <li>iPhone13을 제대로 알고 직접 체험하고 싶으신 분</li>
          <li>부담없이 iPhone13을 오래 체험하고 싶으신 분</li>
          <li>iPhone13의 사진, 영상 촬영에 관심있으신 분</li>
          <li>애플에 진심이신 분</li>
        </ul>
        <h3 class="subtit">소요시간 및 장소</h3>
        <ul class="texts-list">
          <li>일정 : 10월 8일(금) ~ 10월 21일(목)</li>
          <li>소요시간 : 60분 가량</li>
          <li>장소 : T Factory 2층, Apple Zone</li>
        </ul>
        <p style="margin-top:4px">※ 본 클래스는 사회적 거리두기, T Factory 상황에 따라 취소/축소 운영될 수 있습니다.</p>
      </div>
    </div>

    <!-- //details -->
    <program-button></program-button>
  </div>
</template>

<script>
import KakaoShare from '../../common/KakaoShare'
import ProgramButton from './components/ProgramButton'

export default {
  name: 'Program50',
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
