<template>
  <div class="contents bottom-sticky" ref="contents">
    <MainStore :scroll-top="scrollTop" v-if="menuName === 'store'"></MainStore>
    <MainProgram :scroll-top="scrollTop" v-else-if="menuName === 'program'"></MainProgram>
    <MainTag :scroll-top="scrollTop" v-else-if="menuName === 'mytag'"></MainTag>
    <MainMenu :scroll-top="scrollTop" v-else-if="menuName === 'menu'"></MainMenu>

    <Footer></Footer>
  </div>
</template>

<script>
import MainStore from './MainStore'
import MainProgram from './MainProgram'
import MainTag from './MainTag'
import MainMenu from './MainMenu'
import Footer from '../common/Footer'

import * as NATIVE from '../../js/native.js'

export default {
  name: 'Main',
  components: {
    MainStore,
    MainProgram,
    MainTag,
    MainMenu,
    Footer
  },
  data () {
    return {
      scrollTop: 0,
      menuName: this.$route.params.menu || 'store',
      mainIndex: -1
    }
  },
  methods: {
    changeMenu (menu) {
      if (menu === 'store') {
        this.mainIndex = 0
        if (!this.$route.params.menu || this.$route.params.menu !== 'store') {
          this.$router.push('/main/store')
        }
        this.menuName = menu
      } else if (menu === 'program') {
        this.mainIndex = 1
        if (this.$route.params.menu !== 'program') {
          this.$router.push('/main/program')
        }
        this.menuName = menu
      } else if (menu === 'qr') {
        let mobileOS = this.$cookies.get('platform')
        if (mobileOS === 'A' || mobileOS === 'I') {
          NATIVE.qrScanOpen(mobileOS)
        } else {
          this.$router.push({name: 'MainAppDown'})
        }
      } else if (menu === 'mytag') {
        this.mainIndex = 3
        if (this.$route.params.menu !== 'mytag') {
          this.$router.push('/main/mytag')
        }
        this.menuName = menu
      } else if (menu === 'menu') { // 08.21 추가
        this.mainIndex = 4
        if (this.$route.params.menu !== 'menu') {
          this.$router.push('/main/menu')
        }
        this.menuName = menu
      }
    }
  },
  mounted () {
    this.changeMenu(this.menuName)
    this.$EventBus.$emit('toggle-bottom-nav', this.mainIndex)

    window.addEventListener('scroll', e => {
      this.scrollTop = e.currentTarget.scrollY
    })
  },
  created () {
    this.$EventBus.$on('change-main-menu', menu => {
      this.changeMenu(menu)
    })
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/main';
</style>
