<template src="../../../assets/html/service/application/program-application-complete.html"></template>

<script>
import * as STORE from '../../../js/store.js'

export default {
  name: 'ProgramApplicationComplete',
  data () {
    return {
      surveyAnswer: [],
      errMsg: null
      // debugMsg: ''
    }
  },
  methods: {
    getSurvey () {
      // this.debugMsg = this.debugMsg + ' getSurvey() =>'
      // this.debugMsg = this.debugMsg + ' saleCnslGrpId=' + this.$route.query.saleCnslGrpId + '=>'

      if (!this.$route.query.saleCnslGrpId) {
        this.$loading.stop()
        this.errMsg = 'saleCnslGrpId is undefined'
      }
      if (this.$route.query.saleCnslGrpId) {
        // this.debugMsg = this.debugMsg + ' getCounselingSurveyInfo =>'
        STORE.getCounselingSurveyInfo(this.$route.query.saleCnslGrpId).then(response => {
          // this.debugMsg = this.debugMsg + '[Result]' + JSON.stringify(response)
          this.$loading.stop()
          this.surveyAnswer = response.BASIC_SURVEY
        }).catch(err => {
          // this.debugMsg = this.debugMsg + '[Error]' + err
          this.$loading.stop()
          this.errMsg = err + '/n' + err.response.data
        })
      }
    }
  },
  mounted () {
    this.$loading.start()
    this.getSurvey()

    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'visible') {
        window.app.$children[0].$children[0].$children[1].getSurvey()
      }
    })
  },
  created () {
    // this.debugMsg = this.debugMsg + 'created =>'
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/service';
</style>
