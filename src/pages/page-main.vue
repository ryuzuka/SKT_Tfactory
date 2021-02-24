<template>
  <div class="wrap main">
    <!--<Gnb></Gnb>--> <!-- 08.21 삭제 -->
    <Main></Main>
    <bottom></bottom>
    <modals-container></modals-container>
    <v-dialog></v-dialog>
  </div>
</template>

<script>
// import Gnb from '../../components/common/Gnb'  // 08.21 삭제
import Bottom from '../components/common/Bottom'
import Main from '../components/main/Main'
import * as NATIVE from '../js/native.js'

export default {
  name: 'page-main',
  components: {
    // Gnb,  // 08.21 삭제
    Bottom,
    Main
  },
  methods: {
    onBackPressedCallback () {
      this.$modal.show('dialog', {
        title: '앱을 종료하시겠습니까?',
        buttons: [
          {
            title: '취소'
          },
          {
            title: '확인',
            handler: () => {
              NATIVE.appFinish(this.$cookies.get('platform'))
            }
          }
        ]
      })
    }
  }
}
</script>
