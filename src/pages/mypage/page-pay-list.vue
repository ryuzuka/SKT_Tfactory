<template>
  <div class="wrap">
    <Header type="back" :title="$t('my.pay-list')"></Header>
    <my-pay-list></my-pay-list>

    <modals-container></modals-container>
    <v-dialog></v-dialog>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import MyPayList from '../../components/mypage/PayList'

export default {
  name: 'page-pay',
  components: {
    Header,
    MyPayList
  },
  data () {
    return {
    }
  },
  created () {
  }
}
</script>
