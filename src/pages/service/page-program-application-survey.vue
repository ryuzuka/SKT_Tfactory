<template>
  <div class="wrap">
    <Header type="back" :title="$t('sev.survey')"></Header>
    <program-application-survey></program-application-survey>
    <modals-container></modals-container>
    <v-dialog></v-dialog>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import ProgramApplicationSurvey from '../../components/service/application/ProgramApplicationSurvey'

export default {
  name: 'page-program-application-survey',
  components: {
    Header,
    ProgramApplicationSurvey
  },
  data () {
    return {
    }
  },
  created () {
  }
}
</script>
