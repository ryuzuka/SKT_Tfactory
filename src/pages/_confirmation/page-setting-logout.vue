<template>
  <div class="wrap">
    <Header type="back" :title="$t('comm.setting')"></Header>
    <div class="contents" ref="contents">
      <div class="setting">
        <div class="setting-header">
          <p>{{ $t('etc.please-login') }}</p>
          <a href="#" class="btn-basic xsmall">{{ $t('comm.login') }}</a>
        </div>
        <ul class="list-setting">
          <li>
            <a href="#">
              <em>{{ $t('etc.app-setting') }}</em>
              <p>{{ $t('etc.app-setting-text') }}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../components/common/Header'

export default {
  name: 'page-terms',
  components: {
    Header
  }
}
</script>
