<template>
  <div class="wrap" :class="{'mytag-login': !isCertify, 'mytag': isCertify}">
    <Header v-if="!isCertify" type="logo"></Header>
    <Header v-else-if="isCertify" type="back" :title="$t('mytag.certification')"></Header>
    <MyTagCertify></MyTagCertify>
    <modals-container></modals-container>
    <v-dialog></v-dialog>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import MyTagCertify from '../../components/mytag/Certify'

export default {
  name: 'page-tag-certify',
  components: {
    Header,
    MyTagCertify
  },
  data: function () {
    return {
      isCertify: false
    }
  },
  methods: {
  },
  created () {
    this.$on('start-certify', () => {
      this.isCertify = true
    })
  }
}
</script>
