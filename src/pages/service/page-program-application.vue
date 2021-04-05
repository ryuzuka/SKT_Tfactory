<template>
  <div class="wrap">
    <Header type="back" title="프로그램 신청"></Header>
    <program-application></program-application>

    <modals-container></modals-container>
    <v-dialog></v-dialog>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import ProgramApplication from '../../components/service/ProgramApplication'

export default {
  name: 'page-program-application',
  components: {
    Header,
    ProgramApplication
  },
  data () {
    return {
      bookingType: this.$route.params.type,
      selectType: this.$route.params.selectType,
      selectedService: this.$route.params.selectedService
    }
  },
  created () {
  }
}
</script>
