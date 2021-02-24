<template src="../../assets/html/inc/header.html"></template>

<script>
import * as NATIVE from '../../js/native.js'
export default {
  name: 'Header',
  props: {
    type: {
      type: String
    },
    routeName: {
      type: String,
      default: ''
    },
    routeParams: {
      type: Object
    },
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isSearchFocus: false,
      hasSearchText: false,
      searchText: ''
    }
  },
  methods: {
    callNativeBack () {
      NATIVE.faceRegistTermsClose(this.$cookies.get('platform'))
    },
    goBack (routeName, routeParams = {}) {
      if (routeName) {
        this.$router.push({name: routeName, params: routeParams})
      } else {
        this.$router.go(-1)
      }
    },
    inputEvent (e) {
      if (e.type === 'keyup') {
        if (e.target.value.length > 0) {
          this.hasSearchText = true
        } else {
          this.hasSearchText = false
        }
      } else if (e.type === 'keypress') {
        if (e.keyCode === 13) {
          this.clickSearch(this.searchText)
          this.$refs.input.blur()
        }
      } else if (e.type === 'focusin') {
        this.isSearchFocus = true
        this.$common.blockBodyScroll(true, 'focus')
      } else if (e.type === 'focusout') {
        this.isSearchFocus = false
        this.$common.blockBodyScroll(false, 'focus')
      }
    },
    clickDelete () {
      this.searchText = ''
      this.hasSearchText = false
      this.$EventBus.$emit('find-shop-focus', {type: 'focusin'})
      this.$refs.input.focus()
    },
    clickSearch (searchText) {
      if (searchText) {
        this.$EventBus.$emit('find-shop', {KEYWORD: searchText})
      }
    }
  },
  created () {
    window.addEventListener('scroll', e => {
      if (this.isSearchFocus) {
        this.$refs.input.blur()
      }
    })
  }
}
</script>

<style lang="scss">
</style>
