<template>
  <h1>page A</h1>
</template>

<script>

  export default {
    name: 'PageA',
    created () {
      console.log(this.$route)
    },
    data () {
      const User = {
        template: '<div>User {{ $route.params.id }}</div>',
      }
      return {
        User
      }
    },
    beforeRouteEnter () {
      console.log('beforeRouteEnter')
    },
    beforeRouteLeave (to, from, next) {
      console.log('beforeRouteLeave')
      const confirm = window.confirm('are you sure to leave')
      if (confirm) {
        next()
      }
      return false
    }
  }
</script>
