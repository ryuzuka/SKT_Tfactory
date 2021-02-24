<template>
  <div class="wrap type2">
    <Header type="back" :title="$t('etc.join')"></Header>
    <Join></Join>

    <modals-container></modals-container>
    <v-dialog></v-dialog>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import Join from '../../components/etc/Join'

export default {
  name: 'page-join',
  components: {
    Header,
    Join
  }
}
</script>
