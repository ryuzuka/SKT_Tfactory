<template>
  <!--=================================================   확인용   =================================================-->
  <div>
    <Gnb :is-login="false"></Gnb>
    <bottom></bottom>

    <modals-container></modals-container>
    <v-dialog></v-dialog>
  </div>
</template>

<script>
import Gnb from '../../components/main/MainMenu'
import Bottom from '../../components/common/Bottom'

export default {
  name: 'page-all-menu',
  components: {
    Gnb,
    Bottom
  },
  mounted () {
    this.$EventBus.$emit('toggle-gnb')
  }
}
</script>
