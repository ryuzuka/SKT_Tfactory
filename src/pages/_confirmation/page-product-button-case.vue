<template>
  <div class="wrap product-details">
    <Header type="home" :class="{scrolled: headerScrolled}" :title="productName"></Header>

    <div class="contents">
      <!-- slide -->
      <div class="slider-prd">
      </div>
      <!-- //slide -->
      <!-- details -->
      <div class="details">
        <hr>
        <!-- info -->
        <section class="info">
          <h1 class="tit-prd">iPhone 11 Pro</h1>
          <span class="btn-favorite"><input type="checkbox" name="chk-favorite" id="favorite"><label
            for="favorite" class="blind">찜하기</label></span>
          <button type="button" class="btn-favorite"><span class="blind">찜하기</span></button>
          <ul class="list-colorchip">
            <li><input type="radio" name="colorchip" id="color1" style="background-color:#6E7A71" checked><label for="color1">미드나이트 그린</label></li>
            <li><input type="radio" name="colorchip" id="color2" style="background-color:#FBD7BE"><label for="color2">골드</label></li>
            <li><input type="radio" name="colorchip" id="color3" style="background-color:#EBEBE3"><label for="color3">실버</label></li>
            <li><input type="radio" name="colorchip" id="color4" style="background-color:#52514F"><label for="color4">스페이스 그레이</label></li>
            <li><input type="radio" name="colorchip" id="color5" style="background-color:#52514F"><label for="color5">스페이스 그레이2</label></li>
            <li><input type="radio" name="colorchip" id="color6" style="background-color:#52514F"><label for="color6">스페이스 그레이3</label></li>
          </ul>
          <ul class="list-option">
            <li><input type="radio" name="option" id="option1" checked><label for="option1">64GB</label></li>
            <li><input type="radio" name="option" id="option2"><label for="option2">256GB</label></li>
            <li><input type="radio" name="option" id="option3"><label for="option3">512GB</label></li>
          </ul>
          <div class="price">
            <span>출고가</span><em>1,248,500</em><span class="unit">원</span>
          </div>
        </section>
        <!-- //info -->
        <!-- button set -->
        <div class="btn-wrap sticky">
          <router-link to="/sev/consult" class="btn-call">{{ $t('prd.apply-counseling') }}</router-link>
        </div>
        <!-- //button set -->
        <hr>
        <h2 class="blind">상품 정보</h2>
        <div class="tab-wrap">
          <ul class="tabs">
            <li><button type="button">차트</button></li>
            <li class="active"><button type="button">갤러리</button></li> <!-- 활성클래스 active -->
            <li><button type="button">상세 스펙</button></li>
          </ul>
          <section class="tab-conts">
            <h3 class="blind">차트</h3>
          </section>
          <section class="tab-conts active"> <!-- 활성클래스 active -->
            <h3 class="tit-tab">갤럭시 S10+로 찍은<br>바로 그 컷</h3>
            <div class="gallery">
              <div class="slider-gallery">

              </div>
            </div>
          </section>
          <section class="tab-conts">
            <h3 class="blind">상품사양</h3>
          </section>
        </div>
      </div>
      <!-- //details -->
    </div>
    <modals-container></modals-container>
    <v-dialog></v-dialog>
  </div>
</template>

<script>
import Header from '../../components/common/Header'

export default {
  name: 'page-product',
  components: {
    Header
  },
  data () {
    return {
      headerScrolled: false,
      productName: ''
    }
  },
  methods: {
    toggleHeaderScrolled (e) {
      this.headerScrolled = e.isScrolled
    },
    setProductName (e) {
      this.productName = e.productName
    },
    clickCounselingBtn () {
      this.$modal.show('dialog', {
        title: this.$t('prd.alert-contact-number-guide') + '<br><br>010-1234-1234', // 고객님의 연락처로<br>예약 안내 문자가 전송됩니다.
        buttons: [{
          title: this.$t('prd.change-contact-number'),
          handler: () => {
            this.$modal.hide('dialog')
            this.$router.push({path: '/sev/consult'})
          }
        }, {
          title: this.$t('prd.apply-counseling'),
          handler: () => {
            this.$modal.hide('dialog')
            this.$router.push({path: '/sev/consult/complete'})
          }
        }]
      })
    }
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/product';
</style>
