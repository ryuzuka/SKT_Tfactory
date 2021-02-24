<template src="../../assets/html/etc/join.html"></template>

<script>
import _ from 'lodash'
import * as USER from '../../js/user.js'

export default {
  name: 'Join',
  data () {
    return {
      selectedLine: {},
      lineData: [],
      isOpen: false
    }
  },
  methods: {
    openList () {
      this.isOpen = true
    },
    selectList (index) {
      this.isOpen = false
      _.forEach(this.lineData, (data, idx) => {
        if (index === idx) {
          data.selected = true
          this.selectedLine = data
        } else {
          data.selected = false
        }
      })
      this.$forceUpdate()
    },
    certifyMDN () {
      USER.requestMDNCheck(this.selectedLine.ENCRYPTED_MDN, true).then(result => {
        if (result.RET_CODE === 0) {
          this.$router.push('/join/certify?mdn=' + this.selectedLine.ENCRYPTED_MDN + '&cert_key=' + result.CERT_KEY + '&user=' + this.selectedLine.MDN_USER_YN)
        } else {
          // FIXME: error
        }
      })
    }
  },
  mounted () {
    this.lineData = JSON.parse(this.$route.query.line_list)
    this.selectList(0)
    document.addEventListener('click', e => {
      if (e.target.nodeName !== 'BUTTON') {
        this.isOpen = false
      }
      this.$forceUpdate()
    })
  },
  filters: {
    mdnFilter (data) {
      let temp = ''
      if (data) {
        temp = data.slice(0, 3) + '-' + data.slice(3, 7) + '-' + data.slice(7, 11)
      }
      return temp
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/css/etc';
</style>
