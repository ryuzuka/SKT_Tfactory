<template>
  <div class="contents" ref="contents">
    <!-- slide -->
    <div class="slider-prd">
      <img src="../../../assets/images/program/class54-slide1.jpg" alt="">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header">
        <kakao-share
          title="Thanks 티팩 Day!"
          description="소중한 나의 휴대폰, 더 오래 쓰시라고 준비했어요. 지금 T Factory를 방문하시면 휴대폰 액세서리를 최대 80% 할인가에 구매할 수 있습니다."
        ></kakao-share>

        <em class="flag-solid7">Promotion</em>
        <h2 class="details-tit">
          Thanks 티팩 Day!
        </h2>
        <div class="tags">
          <span class="flag-basic">폰케이스</span>
          <span class="flag-basic">악세서리</span>
          <span class="flag-basic">혜택 제공</span>
        </div>
        <p class="desc type2">소중한 나의 휴대폰, 더 오래 쓰시라고 준비했어요. 지금 T Factory를 방문하시면 휴대폰 액세서리를 최대 80% 할인가에 구매할 수 있습니다.</p>
      </div>
      <div class="details-inner">
        <h3 class="subtit">이벤트 안내</h3>
        <p>
          Thanks 티팩 Day!에서 구매하실 수 있는<br>
          휴대폰 액세서리를 소개합니다.
        </p>
        <div class="thumb"><img src="../../../assets/images/program/class54-conts.jpg" alt=""></div>
        <ul class="texts-list">
          <li>품목 : 휴대폰 케이스(갤럭시 S20/노트20 시리즈, 아이폰 X/11/SE 시리즈), 버즈/에어팟 케이스, 그립톡</li>
          <li>브랜드 : SK텔레콤 NEWTRO&RETRO, T1, Urban Sophistication, GRAFOLIO, 슈피겐, 아라리, 엘라고, 위글위글 등</li>
          <li>할인율 : 60~80% (브랜드별 상이)</li>
        </ul>
        <ul class="texts-info type3" style="margin-top:4px;">
          <li>※ 일부 품목은 조기 소진될 수 있습니다.</li>
        </ul>
        <h3 class="subtit">일정 및 장소</h3>
        <p>
          10월 1일(금) ~ 11월 30일(화)<br>
          T Factory 2층
        </p>
        <ul class="texts-info type3" style="margin-top:4px;">
          <li>※ 재고 현황에 따라 조기 종료될 수 있습니다.</li>
        </ul>
        <div class="notice">
          <h4 class="subtit">{{ $t('prd.notice')}}</h4>
          <ul class="texts-info">
            <li>* 카드 결제만 가능합니다. (재난지원금 사용 불가)</li>
          </ul>
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
