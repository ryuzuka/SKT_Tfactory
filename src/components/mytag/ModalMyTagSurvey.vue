<template src="../../assets/html/mytag/pop-survey.html"></template>

<script>
import * as MYTAG from '../../js/mytag.js'
import * as USER from '../../js/user.js'

export default {
  name: 'PopMyTagServey',
  data () {
    return {
      isStart: false,
      isSelect: false,
      selectedNow: false,
      sexageKnownFlag: false,
      selectedTag: [],
      selectedAge: null,
      selectedSex: null,
      recoTagForColor: []
    }
  },
  props: {
    tagList: {
      type: Array
    },
    myTag: {
      type: Array
    },
    recommendTag: {
      type: Array
    }
  },
  methods: {
    start () {
      this.isStart = true
    },
    close () {
      this.$emit('close')
    },
    prev (type) {
      console.log(type)
      if (type === 'start') {
        this.isStart = false
      } else if (type === 'age') {
        if (this.selectedNow) {
          this.sexageKnownFlag = false
        } else {
          this.isStart = false
        }
      }
    },
    next () {
      // TODO: 성별연령 정보 추가 API (서버)
      if (!this.selectedSex) {
        this.$modal.show('dialog', {
          title: this.$t('mytag.select-my-sex'),
          buttons: [{
            title: this.$t('comm.confirm'),
            handler: () => {
              this.$modal.hide('dialog')
            }
          }]
        })
        return
      }

      if (!this.selectedAge) {
        this.$modal.show('dialog', {
          title: this.$t('mytag.select-my-age'),
          buttons: [{
            title: this.$t('comm.confirm'),
            handler: () => {
              this.$modal.hide('dialog')
            }
          }]
        })
        return
      }

      USER.updateUserProfile(null, this.selectedSex, parseInt(this.$moment().format('YYYY') - this.selectedAge - 1)).then(result => {
        this.sexageKnownFlag = true
        this.selectedNow = true
      })
    },
    selectComplete () {
      if (this.selectedTag.length === 0) {
        this.$modal.show('dialog', {
          title: this.$t('mytag.select-my-tag'),
          buttons: [{
            title: this.$t('comm.confirm'),
            handler: () => {
              this.$modal.hide('dialog')
            }
          }]
        })
        return
      }

      this.$modal.show('dialog', {
        title: this.$t('mytag.save-my-tag'),
        buttons: [{
          title: this.$t('comm.confirm'),
          handler: () => {
            let updateTagArray = []
            this.selectedTag.forEach(tag => {
              updateTagArray.push(tag.MYTAG_ID)
            })
            MYTAG.chooseMyTags(updateTagArray).then(result => {
              this.$modal.hide('dialog')
              this.$parent.$emit('change-tag', {tag: this.selectedTag})
              this.close()
            })
          }
        }]
      })
    }
  },
  mounted () {
    if (this.$cookies.get('MY_INFO').GENDER && this.$cookies.get('MY_INFO').BIRTH_YEAR) {
      this.sexageKnownFlag = true
    }
    // this.selectedTag = this.$props.recommendTag

    console.log(this.$props.recommendTag)
    console.log(this.$props.tagList)
    let tagID = []
    this.$props.recommendTag.forEach((recommendTag) => {
      // tagID.push(recommendTag.MYTAG_ID)
      this.recoTagForColor.push(recommendTag.MYTAG_ID)
    })

    console.log(this.recoTagForColor)
    this.$props.myTag.forEach((selectedTag) => {
      if (!tagID.includes(selectedTag.MYTAG_ID)) {
        this.selectedTag.push(selectedTag)
      }
    })
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/mytag';
</style>
