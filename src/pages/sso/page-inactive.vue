<template>
  <div class="wrap login">
    <Header style="margin: 0 auto" type="logo_color"></Header>
    <Inactive></Inactive>

    <modals-container></modals-container>
    <v-dialog></v-dialog>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import Inactive from '../../components/sso/Inactive'

export default {
  name: 'page-inactive',
  components: {
    Header,
    Inactive
  }
}
</script>
