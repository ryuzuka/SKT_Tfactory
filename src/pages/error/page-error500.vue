<template>
  <div class="wrap error">
    <error500></error500>
  </div>
</template>

<script>
import Error500 from '../../components/error/Error500'

export default {
  name: 'page-error500',
  components: {
    Error500
  }
}
</script>
