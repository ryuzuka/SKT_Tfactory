<template>
  <div class="wrap checkin">
    <Header type="back" title="만족도 조사"></Header> <!-- 08.21 수정 -->
    <satisfaction-Survey></satisfaction-Survey>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import SatisfactionSurvey from '../../components/mypage/SatisfactionSurvey'

export default {
  name: 'page-checkin',
  components: {
    Header,
    SatisfactionSurvey
  }
}
</script>
