<template>
  <div class="wrap checkin">
    <Header type="back" :title="$t('comm.checkin')"></Header>
    <CheckinRegister></CheckinRegister>

    <modals-container></modals-container>
    <v-dialog></v-dialog>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import CheckinRegister from '../../components/mypage/CheckinRegister'

export default {
  name: 'page-checkin-register',
  components: {
    Header,
    CheckinRegister
  }
}
</script>
