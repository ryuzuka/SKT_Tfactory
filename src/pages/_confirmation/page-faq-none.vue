<template>
  <div class="wrap">
    <Header type="back" :title="$t('sev.faq')"></Header>
    <div class="contents" ref="contents">
      <section class="row faq-header">
        <div class="tit-wrap">
          <h2 class="subtit">고객센터</h2>
        </div>
        <p class="desc">휴대폰 국번없이 <em>114</em> 또는 <em>080-011-6000(무료)</em> <br>국번없이 <em>1599-0011(유료)</em></p>
      </section>
      <section class="row faq-contents">
        <div class="tit-wrap">
          <h2 class="subtit">FAQ</h2>
        </div>
        <div class="tab-wrap">
          <ul class="tabs scroll">
            <li class="active"><button type="button">전체</button></li>
            <li><button type="button">매장 이용</button></li>
            <li><button type="button">로그인</button></li>
            <li><button type="button">상담/예약</button></li>
            <li><button type="button">구매/취소</button></li>
          </ul>
          <section class="tab-conts" style="display: block">
            <p class="no-content">등록된 자주 묻는 질문이 없습니다.</p>
          </section>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Header from '../../components/common/Header'

export default {
  name: 'page-faq',
  components: {
    Header
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
