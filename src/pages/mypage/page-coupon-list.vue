<template>
  <div class="wrap">
    <Header type="back" :title="$t('comm.coupon-management')"></Header>
    <CouponList></CouponList>

    <modals-container></modals-container>
    <v-dialog></v-dialog>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import CouponList from '../../components/mypage/CouponList'

export default {
  name: 'page-pay',
  components: {
    Header,
    CouponList
  },
  data () {
    return {
    }
  },
  created () {
  }
}
</script>
