<template>
  <div class="wrap">
    <Header type="back" :title="$t('etc.leave')"></Header>
    <Leave></Leave>

    <modals-container></modals-container>
    <v-dialog></v-dialog>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import Leave from '../../components/etc/Leave'

export default {
  name: 'page-leave',
  components: {
    Header,
    Leave
  }
}
</script>
