<template>
  <div class="wrap">
    <Header type="back" title="프로그램 신청"></Header>
    <Application></Application>

    <modals-container></modals-container>
    <v-dialog></v-dialog>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import Application from '../../components/service/application/Application'

export default {
  name: 'page-program-application',
  components: {
    Header,
    Application
  },
  data () {
    return {
    }
  },
  created () {
  }
}
</script>
