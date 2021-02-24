<template>
  <div class="wrap">
    <Gnb :is-login="isLogin"></Gnb>
    <Main :is-login="isLogin"></Main>
    <bottom></bottom>

    <modals-container></modals-container>
    <v-dialog></v-dialog>
  </div>
</template>

<script>
import Gnb from '../../components/main/MainMenu'
import Bottom from '../../components/common/Bottom'
import Main from '../../components/main/Main'

export default {
  name: 'page-main',
  components: {
    Gnb,
    Bottom,
    Main
  },
  props: {},
  data () {
    return {
      isLogin: false
    }
  },
  created () {
    this.isLogin = true
  }
}
</script>
