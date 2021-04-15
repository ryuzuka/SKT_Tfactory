<template>
  <div class="wrap">
    <Header type="back" :title="''"></Header>
    <Application-Survey></Application-Survey>
    <modals-container></modals-container>
    <v-dialog></v-dialog>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import ApplicationSurvey from '../../components/service/application/ApplicationSurvey'

export default {
  name: 'page-application-survey',
  components: {
    Header,
    ApplicationSurvey
  },
  data () {
    return {
    }
  },
  created () {
  }
}
</script>
