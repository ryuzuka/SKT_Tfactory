<template>
  <div class="nav-footer">
    <button type="button" class="btn-accor" :class="{'active': isInfo}"
            @click="isInfo = isInfo ? Boolean(false) : Boolean(true)">{{ $t('comm.sktelecom-info-notice') }} <i></i>
    </button>
    <div class="accor-contents" :class="{'active': isInfo}">
      <div class="links">
        <router-link to="/familysite">{{ $t('comm.family-site') }}</router-link>
        <router-link to="/corpinfo">{{ $t('comm.business-information') }}</router-link>
      </div>
    </div>
    <ul class="list-footer">
      <li><a href="/policy/service">{{ $t('comm.terms') }}</a></li>
      <li><a href="https://privacy.sktelecom.com/view.do?ctg=policy&name=policy"><strong>
        {{$t('comm.personal-information') }} {{ $t('comm.policy') }}</strong></a>
      </li>
      <li><a href="/policy/conflict">{{ $t('comm.conflict-process') }}</a></li>
    </ul>
    <p class="copy">@ SK TELECOM., LTD</p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      isInfo: false
    }
  }
}
</script>

<style lang="scss">
</style>
