<template>
  <div class="wrap counselor">
    <div class="contents" ref="contents">
      <div class="assign">
        <div>
          <p class="tit">
            <span v-html="$t('sev.counselor-guide3')"><strong>상담 직원</strong>이<br><strong>배정</strong>되었습니다</span>
          </p>
        </div>
        <div class="inner">
          <!-- 상담사 -->
          <div class="adviser">
            <p class="info"><i class="ico-map"></i><strong>단말 비교존 A</strong>에서 잠시만 기다려 주세요.</p>
            <figure>
              <img src="../../assets/images/dummy/@counselor.png" alt="" />
              <figcaption>"안녕하세요!<br>언제나 최선을 다하는 김상담입니다.<br>잠시만 기다려 주시면 곧 찾아 뵙겠습니다."</figcaption>
            </figure>
          </div>
        </div>
        <div class="btn-wrap">
          <a href="#" class="btn-line big">{{ $t('sev.counselor-retry') }}</a> <!-- 배정 완료 / 재호출 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'page-counselor',
  components: {
  },
  data () {
    return {
    }
  },
  created () {
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/service';
</style>
