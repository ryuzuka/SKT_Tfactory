<template>
  <div></div>
</template>

<script>
import * as USER from '../../js/user.js'

export default {
  name: 'page-success',
  mounted () {
    this.confirmCheckIn(this.$route.query.certKey)
  },
  methods: {
    async confirmCheckIn (certKey) {
      try {
        const result = await USER.confirmCheckIn(certKey)
        this.$cookies.set('USER_AUTH', result)
        this.$router.push('/main/mytag')
      } catch (e) {
        this.$router.push('/main/store')
      }
    }
  }
}
</script>
