<template>
  <div class="wrap mytag-reissue">
<!--    <Header v-if="!this.couponFlag"></Header>-->
    <Header v-if="!this.couponFlag" type="back" :title="$t('mytag.reissue')"></Header>
    <MyTagReissue></MyTagReissue>

    <modals-container></modals-container>
    <v-dialog></v-dialog>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import MyTagReissue from '../../components/mytag/Reissue'

export default {
  name: 'page-tag-certify',
  components: {
    Header,
    MyTagReissue
  },
  data () {
    return {
      couponFlag: false
    }
  },
  mounted () {
    if (this.$route.query.couponFlag === 'true') {
      this.couponFlag = true
    }
  }
}
</script>
