<template>
  <div class="wrap">
    <Header title="프로그램 신청"></Header>
    <Program-application-complete></Program-application-complete>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import ProgramApplicationComplete from '../../components/service/application/ProgramApplicationComplete'

export default {
  name: 'page-program-application-complete',
  components: {
    Header,
    ProgramApplicationComplete
  },
  data () {
    return {
    }
  },
  created () {
  }
}
</script>
