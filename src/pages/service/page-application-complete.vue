<template>
  <div class="wrap">
    <Header title="프로그램 신청"></Header>
    <Application-Complete></Application-Complete>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import ApplicationComplete from '../../components/service/application/ApplicationComplete'

export default {
  name: 'page-application-complete',
  components: {
    Header,
    ApplicationComplete
  },
  data () {
    return {
    }
  },
  created () {
  }
}
</script>
