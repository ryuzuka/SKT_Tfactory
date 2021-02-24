<template>
  <div class="wrap pay">
    <Header type="back" route-name="Main" :title="$t('pay.pay-detail')"></Header>
    <pay></pay>

    <modals-container></modals-container>
    <v-dialog></v-dialog>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import Pay from '../../components/pay/Pay'

export default {
  name: 'page-pay',
  components: {
    Header,
    Pay
  }
}
</script>
