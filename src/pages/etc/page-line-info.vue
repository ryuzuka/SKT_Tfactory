<template>
<div class="wrap">
  <Header type="back" :title="$t('etc.line-info-management')"></Header>
  <LineInfo></LineInfo>
  <modals-container></modals-container>
  <v-dialog></v-dialog>
</div>
</template>

<script>
import Header from '../../components/common/Header'
import LineInfo from '../../components/etc/LineInfo'

export default {
  name: 'page-line-info',
  components: {
    Header,
    LineInfo
  }
}
</script>
