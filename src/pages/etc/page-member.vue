<template>
<div class="wrap">
    <Header type="back" :title="$t('etc.id-member-info-management')"></Header>
    <Member></Member>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import Member from '../../components/etc/Member'

export default {
  name: 'page-member',
  components: {
    Header,
    Member
  }
}
</script>
