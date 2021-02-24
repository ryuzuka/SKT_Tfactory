<template>
<div class="wrap">
    <Header type="native" :title="$t('etc.terms') + ' ' + $t('etc.detail-view')"></Header>
    <PolicyBio></PolicyBio>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import PolicyBio from '../../components/etc/PolicyBio'

export default {
  name: 'page-policy-bio',
  components: {
    Header,
    PolicyBio
  },
  methods: {
    clicked () {
      console.log('clicked')
    }
  }
}
</script>
