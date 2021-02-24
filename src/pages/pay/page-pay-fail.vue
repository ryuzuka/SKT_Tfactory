<template>
  <div class="wrap pay">
    <Header type="home" :title="$t('pay.pay-fail')"></Header>
    <pay-fail></pay-fail>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import PayFail from '../../components/pay/PayFail'

export default {
  name: 'page-fail',
  components: {
    Header,
    PayFail
  }
}
</script>
