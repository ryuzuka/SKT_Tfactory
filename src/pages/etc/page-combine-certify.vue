<template>
  <div class="wrap type2">
    <Header type="back" :title="$t('mytag.certification')"></Header>
    <CombineCertify></CombineCertify>

    <modals-container></modals-container>
    <v-dialog></v-dialog>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import CombineCertify from '../../components/etc/CombineCertify'

export default {
  name: 'page-combine-certify',
  components: {
    Header,
    CombineCertify
  },
  methods: {
  }
}
</script>
