<template src="../../assets/html/mypage/pop-receipt.html"></template>

<script>
import * as PAY from '../../js/pay.js'
import Barcode from 'vue-barcode'

export default {
  name: 'PayReceipt',
  components: {
    Barcode
  },
  data () {
    return {
      RECEIPT: {},
      invoicNumber: '',
      originalSum: 0
    }
  },
  props: {
    data: {
      type: Object
    }
  },
  mounted () {
    PAY.getReceiptInfo(this.data.receipt.RECEIPT_ID).then(response => {
      response.RECEIPT.EDIT_YMDT = this.$moment(response.RECEIPT.EDIT_YMDT).format('YYYY.MM.DD HH:mm')
      this.RECEIPT = response.RECEIPT
      if (this.RECEIPT.CREDIT_CARD.PAY_MONTH === '00' || this.RECEIPT.CREDIT_CARD.PAY_MONTH === '0') {
        this.RECEIPT.CREDIT_CARD.PAY_MONTH = '일시불'
      } else {
        this.RECEIPT.CREDIT_CARD.PAY_MONTH = this.RECEIPT.CREDIT_CARD.PAY_MONTH + '개월'
      }
      this.invoicNumber = this.RECEIPT.INV_NUMBER

      this.RECEIPT.ITEM_LIST.forEach((item) => {
        this.originalSum += (item.PRICE * item.QUANTITY)
      })
    })
  },
  filters: {
    currency: value => {
      if (!value) return ''
      let num = Number(value)
      return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,')
    }
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/mypage';
</style>
