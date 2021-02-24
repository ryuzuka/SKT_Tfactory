<template>
  <div class="wrap pay">
    <Header type="home" :title="$t('pay.pay-complete')"></Header>
    <pay-complete></pay-complete>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import PayComplete from '../../components/pay/PayComplete'

export default {
  name: 'page-complete',
  components: {
    Header,
    PayComplete
  }
}
</script>
