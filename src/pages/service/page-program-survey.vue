<template>
  <div class="wrap">
    <Header type="back" title="기초 설문"></Header>
    <Program-Survey></Program-Survey>

    <modals-container></modals-container>
    <v-dialog></v-dialog>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import ProgramSurvey from '../../components/service/ProgramSurvey'

export default {
  name: 'page-application-survey',
  components: {
    Header,
    ProgramSurvey
  },
  data () {
    return {
    }
  },
  created () {
  }
}
</script>
