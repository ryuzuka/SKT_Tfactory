<template>
  <div class="wrap checkin">
    <Header type="back" :title="$t('comm.checkin')"></Header> <!-- 08.21 수정 -->
    <CheckinModify></CheckinModify>

    <modals-container></modals-container>
    <v-dialog></v-dialog>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import CheckinModify from '../../components/mypage/CheckinModify'

export default {
  name: 'page-checkin',
  components: {
    Header,
    CheckinModify
  }
}
</script>
