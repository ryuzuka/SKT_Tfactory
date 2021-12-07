<template>
  <div class="contents" ref="contents">
    <!-- slide -->
    <div class="slider-prd">
      <img src="../../../assets/images/program/class57-slide1.jpg" alt="">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details bottom-sticky">
      <div class="details-header">
        <kakao-share
          title="하시시박의 일주일 Ordinary week, extraordinary iPhone13"
          description="아이폰13으로 담은 하시시박의 일주일을 들여다보세요"
        ></kakao-share>

        <em class="flag-solid7">Exhibition</em>
        <h2 class="details-tit">
          하시시박의 일주일<br>
          Ordinary week,<br>
          extraordinary iPhone13
        </h2>
        <div class="tags">
          <span class="flag-basic">특별사진전</span>
          <span class="flag-basic">아이폰13</span>
        </div>
        <p class="desc type2">
          아이폰13으로 담은 하시시박의 일주일을 들여다보세요.<br>
          &#60;하시시박의 일주일 : Ordinary week, extraordinary iPhone13&#62;은 아이폰13 출시를 기념하여 <br>
          SK텔레콤 플래그십 스토어 T Factory에서 준비한
          특별 사진 전시회입니다.
        </p>
      </div>
      <div class="details-inner">
        <h3 class="subtit">전시 소개</h3>
        <div class="thumb"><img src="../../../assets/images/program/class57-conts.jpg" alt=""></div>
        <p>
          지극히 평범한 일상도 아이폰13과 함께하면 영화의 한 장면으로 다시 태어난다. <br>
          이 것은 일상에서 찍은 사진들을 모아 자연스럽게 주제나 스토리를 만드는 포토그래퍼 하시시박의 평소 작업 스타일과도 많이 닮아 있다. <br>
          그녀가 아이폰13을 들자 육아와 살림의 평범한 단면이 작품이 되어 돌아왔다. <br>
          어쩌면 전문 사진 작가도 일상에서 아이폰을 사진기로 가장 많이 사용하고 있지 않을까. <br>
          그렇기 때문에 그녀의 사진들은 또다시 누구라도 아이폰13과 함께라면 포토그래퍼가 될 수 있음을 말해준다.
        </p>
        <p style="margin-top:22px">
          아이폰13의 여러가지 사진 기능을 다루다 보면 ‘빛’을 다루는 세밀한 작업부터 피사체의 흔들림 보정까지 넓은 스펙트럼을 경험할 수 있다.<br>
          이제 저마다의 하루를 작품으로 담아보자.
        </p>
        <h3 class="subtit">작가 소개</h3>
        <p>
          하시시박&#40;Hasisi Park&#41;은 필름 카메라 특유의 아날로그적 감성과 예리한 화법으로 일상의 다양한 표정을 찍는 사진가이다.<br>
          &#60;바이스&#62; 매거진 영국판에서 데뷔 후 서울을 기반으로 활동하고 있다. 브랜드와의 협업, 매체 및 화보 등 커머셜 촬영과 개인 작업을 넘나 들며 자신만의 세계를 독보적으로 쌓고 있다.
        </p>
        <h3 class="subtit">한정판 포토스티커 이벤트</h3>
        <p>
          &#60;하시시박의 일주일&#62; A WEEK 포토존에서 멋진 사진을 남기시고,<br>
          아래 해시태그와 함께 인스타그램에 올려주세요.<br>
          <span style="color:#3617ce;">#하시시박의일주일 #아이폰13사진전 #T팩토리</span><br>
          업로드된 게시물을 크루에게 보여주시면, <br>
          현장에서 한정판 하시시박 포토 스티커를 드립니다.
        </p>
        <ul class="texts-info" style="margin-top:18px">
          <li>* 본 이벤트는 상품 재고 사정에 따라 조기 마감될 수 있습니다.</li>
          <li>* 본 이벤트 참여와 관련하여 자세한 내용은 현장 안내를 참조해주세요. </li>
        </ul>
        <h3 class="subtit">일정 및 장소</h3>
        <ul class="texts-list">
          <li>일정 : 10월 8일(금) ~ 11월 중순 </li>
          <li>장소 : T Factory 2층, 모바일 Acc 존</li>
        </ul>
        <ul class="texts-info" style="margin-top:18px">
          <li>* 본 전시는 사전 예약 없이 관람이 가능한 아이폰13 출시기념 무료 전시회입니다.</li>
          <li>* 본 사진전은 코로나19 방역수칙을 준수하여 운영됩니다. </li>
        </ul>
        <div class="notice">
          <h4 class="subtit">방역패스 안내사항</h4>
          <ul class="texts-info">
            <li style="display:flex;">1. 백신 접종 완료자 :<span style="margin-left:4px;">COOV / 카카오톡 /<br>네이버 동의 증명서 / 예방접종 스티커</span></li>
            <li>2. PCR 음성 확인서 (48시간 이내)</li>
            <li>3. 만 18세 이하 청소년</li>
            <li>4. 확진 후 완치자 (격리해제 확인서)</li>
            <li>5. 백신접종 예외자 (보건소 발급소견서)</li>
          </ul>
          <p class="texts-notice" style="margin-top:20px;">본 클래스/투어/덕콘은 방역수칙 준수를 위해<br>방역패스 인증자에 한해 참여가 가능합니다.</p>
        </div>
      </div>
    </div>
    <!-- //details -->
  </div>
</template>

<script>
import KakaoShare from '../../common/KakaoShare'
import ProgramButton from './components/ProgramButton'

export default {
  name: 'Program57',
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
