<template>
  <div class="wrap checkin">
    <Header type="home" :title="$t('comm.checkin')"></Header> <!-- 08.21 수정 -->
    <Checkin></Checkin>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import Checkin from '../../components/mypage/Checkin'

export default {
  name: 'page-checkin',
  components: {
    Header,
    Checkin
  }
}
</script>
