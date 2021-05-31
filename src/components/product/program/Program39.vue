<template src="../../../assets/html/product/program/program39.html"></template>

<script>
import _ from 'lodash'
import * as STORE from '../../../js/store'

export default {
  name: 'Program39',
  components: {},
  data () {
    return {
      classIdList: [56, 58, 59, 60],
      programClass: [{}, {}, {}, {}]
    }
  },
  mounted () {
    this.$store.watch(() => {
      if (this.$store.getters.CONSTANTS.session_alive === true) {
        this.isLogin = true
      }
    })

    _.forEach(this.classIdList, (classId, index) => {
      STORE.getProgramClass(classId).then(result => {
        this.programClass[index] = result['PROGRAM_CLASS']
        this.$forceUpdate()
      })
    })
  },
  methods: {
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/product';
</style>
