<template>
  <div class="wrap" style="background-color: #11132e; height: inherit">
  <img src="../assets/images/QR_proxy_bg_sample.png"/>
  </div>
</template>

<script>
import axios from 'axios'
import * as MYTAG from '../js/mytag.js'

export default {
  name: 'page-redirect',
  mounted () {
    // TODO: addTimeline
    let URL = process.env.SERVER_URL + '/security/r?qr=' + this.$route.query.QR_CODE

    axios.get(URL).then(result => {
      if (this.$cookies.get('USER_AUTH') === null) {
        window.location.href = result.data.data.redirectUrl
        return
      }

      let INFO = {
        NAME: result.data.data.mcd
      }

      if (result.data.data.lcd) {
        MYTAG.addTimeline(result.data.data.lcd, INFO).then((response) => {
          window.location.href = result.data.data.redirectUrl
        }).catch(e => {
          window.location.href = result.data.data.redirectUrl
        })
      } else {
        window.location.href = result.data.data.redirectUrl
      }
    })
  }
}
</script>
