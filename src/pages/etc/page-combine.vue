<template>
  <div class="wrap type2">
    <Header type="back" :title="$t('etc.combine')"></Header>
    <Combine></Combine>

    <modals-container></modals-container>
    <v-dialog></v-dialog>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import Combine from '../../components/etc/Combine'

export default {
  name: 'page-combine',
  components: {
    Header,
    Combine
  }
}
</script>
