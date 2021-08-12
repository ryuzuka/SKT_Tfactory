<template src="../../assets/html/etc/setting.html"></template>

<script>
import * as TID from '../../js/tid.js'
import * as NATIVE from '../../js/native.js'
import * as USER from '../../js/user.js'
import VueJwtDecode from 'vue-jwt-decode'

export default {
  name: 'Setting',
  data () {
    return {
      isLogin: '',
      myInfo: {},
      signInType: null,
      mobileOS: '',
      FACE_REGIST_YN: false
    }
  },
  created () {
    this.mobileOS = this.$cookies.get('platform')
  },
  mounted () {
    this.$store.watch(() => {
      if (this.$store.getters.CONSTANTS.session_alive) {
        this.myInfo = this.$cookies.get('MY_INFO')
        this.signInType = VueJwtDecode.decode(this.$cookies.get('USER_AUTH').ACCESS_TOKEN).SIGNIN_TYPE
        this.isLogin = true
      } else if (!this.$store.getters.CONSTANTS.session_alive) {
        this.isLogin = false
      }
    })
  },
  methods: {
    tidLoginRedirect () {
      let callback = window.location.origin + '/main/store'

      if (this.mobileOS === 'A' || this.mobileOS === 'I') {
        NATIVE.tidLogin_native(this.mobileOS, callback)
      } else {
        TID.tidLoginRedirect(callback)
      }
    },
    tidLogout () {
      this.$cookies.remove('USER_AUTH')
      document.cookie = encodeURIComponent('MY_INFO') + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
      let callback = window.location.origin + '/'

      if (this.mobileOS === 'A' || this.mobileOS === 'I') {
        NATIVE.tidLogout_native(this.mobileOS, callback)
      } else {
        TID.tidLogout(callback)
      }
    },
    passLogout () {
      this.$cookies.remove('USER_AUTH')
      document.cookie = encodeURIComponent('MY_INFO') + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
      window.location.href = '/'
    },
    settingOpen () {
      NATIVE.settingsOpen(this.mobileOS)
    },
    deleteCheckinInfo () {
      if (!this.FACE_REGIST_YN) {
        // 얼굴등록 정보 없는 경우 - 등록된 정보가 없습니다.
        this.$modal.show('dialog', {
          title: this.$t('etc.none-checkin-info'),
          buttons: [
            {
              title: this.$t('comm.confirm'),
              handler: () => {
                this.$modal.hide('dialog')
              }
            }
          ]
        })
      }

      this.$modal.show('dialog', {
        title: this.$t('sso.delete-photo-confirm'),
        buttons: [
          {
            title: this.$t('comm.confirm'),
            handler: () => {
              USER.unregistFace().then((result) => {
                if (result.RET_CODE === 0) {
                  this.FACE_REGIST_YN = false
                  this.$modal.hide('dialog')
                  this.deleteCompleteModal()
                }
              }).catch(e => {
                alert('얼굴 삭제 실패')
              })
            }
          },
          {
            title: this.$t('comm.cancel')
          }
        ]
      })
    },
    deleteCompleteModal () {
      this.$modal.show('dialog', {
        title: '삭제 되었습니다.',
        buttons: [
          {
            title: this.$t('comm.confirm'),
            handler: () => {
              this.$modal.hide('dialog')
            }
          }
        ]
      })
    }
  }
}
</script>

<style lang="scss">
  @import '../../assets/css/etc';
</style>
