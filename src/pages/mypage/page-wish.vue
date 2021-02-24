<template>
  <div class="wrap">
    <Header type="back" :title="$t('comm.wish')"></Header>
    <wish></wish>

    <modals-container></modals-container>
    <v-dialog></v-dialog>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import Wish from '../../components/mypage/Wish'

export default {
  name: 'page-wish',
  components: {
    Header,
    Wish
  },
  data () {
    return {
    }
  },
  created () {
  }
}
</script>
