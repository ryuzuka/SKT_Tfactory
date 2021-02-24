<template>
  <div class="wrap">
    <Header type="back" :title="$t('comm.setting')"></Header>
    <Setting></Setting>

    <modals-container></modals-container>
    <v-dialog></v-dialog>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import Setting from '../../components/etc/Setting'

export default {
  name: 'page-terms',
  components: {
    Header,
    Setting
  }
}
</script>
