<template src="../../assets/html/pay/pay-complete.html"></template>

<script>
import Footer from '../../components/common/Footer'
import ModalPayReceipt from '../mypage/ModalPayReceipt'
import * as USER from '../../js/user.js'
import * as PAY from '../../js/pay.js'

export default {
  name: 'PayComplete',
  components: {
    Footer
  },
  props: {},
  data () {
    return {
      isOpen: false,
      isVm: false,
      inv_no: '',
      item_nm: '',
      receipt: {}
    }
  },
  methods: {
    clickReadReceipt () {
      this.$modal.show(ModalPayReceipt, {
        data: {
          receipt: this.receipt
        }
      }, {
        type: 'full'
      }, {})
    }
  },
  mounted () {
    if (this.$route.query.status === '0') {
      this.$router.push('/pay/fail')
    }

    if (this.$route.query.poc_code === 'POC_VEN') {
      this.isVm = true
    }

    if (this.$route.query.coupon_num) {
      USER.useCoupon(this.$route.query.coupon_num)
    }

    this.item_nm = this.$route.query.itemNames

    if (this.$route.query.inv_no) {
      this.inv_no = this.$route.query.inv_no
      PAY.getReceiptId(this.inv_no).then((result) => {
        this.receipt = result.RECEIPT
      })
    }
  }
}
</script>

<style lang="scss">
  @import '../../assets/css/pay';
</style>
