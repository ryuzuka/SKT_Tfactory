<template>
  <div class="wrap type2">
    <Header type="back" :title="$t('mytag.certification')"></Header>
    <JoinCertify></JoinCertify>

    <modals-container></modals-container>
    <v-dialog></v-dialog>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import JoinCertify from '../../components/etc/JoinCertify'

export default {
  name: 'page-join-certify',
  components: {
    Header,
    JoinCertify
  },
  methods: {
  }
}
</script>
