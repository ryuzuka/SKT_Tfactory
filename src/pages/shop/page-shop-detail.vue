<template>
  <div class="wrap shop-detail">
    <Header type="back" :title="headerTitle" :class="{'scrolled': headerTitle}"></Header> <!-- 21.01.08 수정 -->

    <shop-detail v-if="!storeId"></shop-detail>
    <!--<Store1 v-else-if="storeId === 'store1'"></Store1>-->
    <Store2 v-else-if="storeId === 'store2'"></Store2>
    <Store3 v-else-if="storeId === 'store3'"></Store3>
    <Store4 v-else-if="storeId === 'store4'"></Store4>
    <Store5 v-else-if="storeId === 'store5'"></Store5>
    <Store6 v-else-if="storeId === 'store6'"></Store6>
    <Store7 v-else-if="storeId === 'store7'"></Store7>
    <Store8 v-else-if="storeId === 'store8'"></Store8>
    <Store9 v-else-if="storeId === 'store9'"></Store9>
    <Store10 v-else-if="storeId === 'store10'"></Store10>
    <Store11 v-else-if="storeId === 'store11'"></Store11>
    <Store12 v-else-if="storeId === 'store12'"></Store12>
    <Store13 v-else-if="storeId === 'store13'"></Store13>
    <Store14 v-else-if="storeId === 'store14'"></Store14>
    <Store15 v-else-if="storeId === 'store15'"></Store15>
    <Store16 v-else-if="storeId === 'store16'"></Store16>
    <Store17 v-else-if="storeId === 'store17'"></Store17>
    <Store18 v-else-if="storeId === 'store18'"></Store18>
    <Store19 v-else-if="storeId === 'store19'"></Store19>
    <Store20 v-else-if="storeId === 'store20'"></Store20>

    <Footer></Footer> <!-- 21.01.08 추가 -->

    <modals-container></modals-container>
    <v-dialog></v-dialog>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
import ShopDetail from '../../components/shop/ShopDetail'

// import Store1 from '../../components/shop/detail/Store1'
import Store2 from '../../components/shop/detail/Store2'
import Store3 from '../../components/shop/detail/Store3'
import Store4 from '../../components/shop/detail/Store4'
import Store5 from '../../components/shop/detail/Store5'
import Store6 from '../../components/shop/detail/Store6'
import Store7 from '../../components/shop/detail/Store7'
import Store8 from '../../components/shop/detail/Store8'
import Store9 from '../../components/shop/detail/Store9'
import Store10 from '../../components/shop/detail/Store10'
import Store11 from '../../components/shop/detail/Store11'
import Store12 from '../../components/shop/detail/Store12'
import Store13 from '../../components/shop/detail/Store13'
import Store14 from '../../components/shop/detail/Store14'
import Store15 from '../../components/shop/detail/Store15'
import Store16 from '../../components/shop/detail/Store16'
import Store17 from '../../components/shop/detail/Store17'
import Store18 from '../../components/shop/detail/Store18'
import Store19 from '../../components/shop/detail/Store19'
import Store20 from '../../components/shop/detail/Store20'

export default {
  name: 'page-shop-detail',
  components: {
    Header,
    Footer,
    ShopDetail,
    // Store1,
    Store2,
    Store3,
    Store4,
    Store5,
    Store6,
    Store7,
    Store8,
    Store9,
    Store10,
    Store11,
    Store12,
    Store13,
    Store14,
    Store15,
    Store16,
    Store17,
    Store18,
    Store19,
    Store20
  },
  data () {
    return {
      headerTitle: '',
      title: '',
      storeId: this.$route.params.storeId
    }
  },
  beforeMount () {
    if (!this.storeId) this.title = this.$t('shop.shop-detail-factory')
    else if (this.storeId === 'store2') this.title = 'Factory Gate'
    else if (this.storeId === 'store3') this.title = 'FLEX Stage'
    else if (this.storeId === 'store4') this.title = 'Bestsellers'
    else if (this.storeId === 'store5') this.title = 'Security Pod'
    else if (this.storeId === 'store6') this.title = 'Media Pod'
    else if (this.storeId === 'store7') this.title = '0 Favorite'
    else if (this.storeId === 'store8') this.title = 'Media Zone'
    else if (this.storeId === 'store9') this.title = 'Factory Garden'
    else if (this.storeId === 'store10') this.title = 'Consulting Lounge'
    else if (this.storeId === 'store11') this.title = '11 STREET'
    else if (this.storeId === 'store12') this.title = 'Data Station'
    else if (this.storeId === 'store13') this.title = 'Apple Zone'
    else if (this.storeId === 'store14') this.title = '0 Stage'
    else if (this.storeId === 'store15') this.title = 'Accessory Zone'
    else if (this.storeId === 'store16') this.title = 'T1'
    else if (this.storeId === 'store17') this.title = '5GX Cloud Game'
    else if (this.storeId === 'store18') this.title = 'Giant Face'
    else if (this.storeId === 'store19') this.title = 'T Factory 24'
    else if (this.storeId === 'store20') this.title = ''
  },
  mounted () {
    window.addEventListener('scroll', e => {
      if (e.currentTarget.scrollY > 0) {
        this.headerTitle = this.title
      } else {
        this.headerTitle = ''
      }
    })
  }
}
</script>
