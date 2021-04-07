<template>
  <div class="wrap">
    <Header type="back" title="프로그램 신청"></Header>
    <Program-application></Program-application>

    <modals-container></modals-container>
    <v-dialog></v-dialog>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import ProgramApplication from '../../components/service/application/ProgramApplication'

export default {
  name: 'page-program-application',
  components: {
    Header,
    ProgramApplication
  },
  data () {
    return {
    }
  },
  created () {
  }
}
</script>
