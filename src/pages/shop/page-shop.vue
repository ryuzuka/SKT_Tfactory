<template>
  <div class="wrap shop">
    <Header type="shop"></Header>
    <!--<Gnb></Gnb>--> <!-- 08.21 삭제 -->
    <div class="contents bottom-sticky">
      <Shop></Shop>
    </div>
    <bottom></bottom>

    <modals-container></modals-container>
    <v-dialog></v-dialog>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
// import Gnb from '../../components/common/Gnb'  // 08.21 삭제
import Shop from '../../components/shop/Shop'
import Bottom from '../../components/common/Bottom'

export default {
  name: 'page-shop',
  components: {
    Header,
    // Gnb,  // 08.21 삭제
    Shop,
    Bottom
  }
}
</script>
