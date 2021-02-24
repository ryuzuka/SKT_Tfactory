<template src="../../assets/html/etc/line-info.html"></template>

<script>
import _ from 'lodash'
import * as USER from '../../js/user.js'

export default {
  name: 'LineInfo',
  components: {},
  data () {
    return {
      isLogin: '',
      lineList: []
    }
  },
  methods: {
    showMore (index) {
      if (this.lineList[index].isMore) {
        this.lineList[index].isMore = false
      } else {
        this.closeMore()
        this.lineList[index].isMore = true
      }
      this.$forceUpdate()
    },
    closeMore () {
      _.forEach(this.lineList, data => {
        data.isMore = false
      })
    },
    setStandardLine (line) {
      USER.updateRepresentLine(line.LINE_ID).then(() => {
        location.reload()
      })
    },
    deleteLine (line) {
      let mdn = line.MDN.slice(0, 3) + '-' + line.MDN.slice(3, 7) + '-' + line.MDN.slice(7, 11)
      this.$modal.show('dialog', {
        title: mdn + '<br>회선 정보가 삭제됩니다.<br>삭제하시겠습니까?',
        buttons: [
          {
            title: this.$t('comm.cancel')
          },
          {
            title: this.$t('comm.delete'),
            handler: () => {
              USER.deleteLine(line.LINE_ID).then(result => {
                console.log(result)
                this.$modal.hide('dialog')
                location.reload()
              })
            }
          }
        ]
      })

      this.closeMore()
    }
  },
  mounted () {
    this.$store.watch(() => {
      if (this.$store.getters.CONSTANTS.session_alive === true) {
        this.isLogin = true
      } else if (this.$store.getters.CONSTANTS.session_alive === false) {
        this.isLogin = false
      }
    })

    document.addEventListener('click', e => {
      if (e.target.className !== 'btn-layer') {
        this.closeMore()
      }
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
  },
  watch: {
    isLogin: function () {
      if (this.isLogin) {
        this.lineList = this.$cookies.get('MY_INFO').LINE_LIST
      }
    }
  }
}
</script>

<style lang="scss">
  @import '../../assets/css/etc';
</style>
