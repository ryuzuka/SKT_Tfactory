<template>
  <div class="wrap">
    <Header type="back" title="프로그램 신청"></Header>
    <My-Application-Modify></My-Application-Modify>

    <modals-container></modals-container>
    <v-dialog></v-dialog>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import MyApplicationModify from '../../components/mypage/application/ApplicationModify'

export default {
  name: 'page-my-program-application-modify',
  components: {
    Header,
    MyApplicationModify
  },
  data () {
    return {
    }
  },
  created () {
  }
}
</script>
