<template>
  <!--=================================================   확인용   =================================================-->
  <div class="wrap">
    <Header type="back" :title="$t('comm.wish')"></Header>
    <div class="contents" ref="contents">
      <div class="wish">
        <p style="display: block" class="no-content">{{ $t('my.wish-list-none') }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import Wish from '../../components/mypage/Wish'

export default {
  name: 'page-wish-none',
  components: {
    Header,
    Wish
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/mypage';
</style>
