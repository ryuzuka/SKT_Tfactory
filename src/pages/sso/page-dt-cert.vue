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
        this.$cookies.remove('USER_AUTH')
        const result = await USER.confirmCheckIn(certKey)
        this.$cookies.set('USER_AUTH', result)
        await USER.updateMyInfo()
        this.$store.getters.CONSTANTS.session_alive = true
        this.$router.push('/main/mytag')
      } catch (e) {
        this.$router.push('/main/store')
      }
    }
  }
}
</script>
