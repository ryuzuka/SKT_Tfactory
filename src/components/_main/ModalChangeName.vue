<template src="../../assets/html/main/pop-change-name.html"></template>

<script>
import * as USER from '../../js/user.js'
export default {
  name: 'ModalMyTagName',
  data () {
    return {
      changeNickname: ''
    }
  },
  props: {
    nickname: String
  },
  mounted () {
    this.changeNickname = this.$props.nickname
  },
  methods: {
    clickApply () {
      let patternKor = /([^가-힣\x20|a-z|A-Z|0-9|])/i
      let patternSpc = /[~!@#$%^&*()_+|<>?:{}]/

      if (this.changeNickname === '') {
        this.$modal.show('dialog', {
          title: this.$t('mytag.name-title'),
          buttons: [{
            title: this.$t('comm.confirm'),
            handler: () => {
              this.$modal.hide('dialog')
            }
          }]
        })
        return
      }

      // console.log(patternKor.test(this.changeNickname.replace(/[0-9]/g, '')))

      if (patternKor.test(this.changeNickname.replace(/[0-9]/g, '')) || patternSpc.test(this.changeNickname) ||
        parseInt(this.changeNickname.replace(/[^0-9]/g, '')) > 99) {
        this.$modal.show('dialog', {
          title: this.$t('mytag.name-info'),
          buttons: [{
            title: this.$t('comm.confirm'),
            handler: () => {
              this.$modal.hide('dialog')
            }
          }]
        })
        return
      }

      if (this.changeNickname.length > 7) {
        this.$modal.show('dialog', {
          title: this.$t('mytag.name-over-7word'),
          buttons: [{
            title: this.$t('comm.confirm'),
            handler: () => {
              this.$modal.hide('dialog')
            }
          }]
        })
        return
      }

      USER.updateUserProfile(this.changeNickname).then(() => {
        this.$parent.$emit('change-name', {name: this.changeNickname})
        this.$emit('close')
        location.reload()
      })
    }
  }
}
</script>
