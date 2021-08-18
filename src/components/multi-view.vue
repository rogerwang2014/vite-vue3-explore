<template>
  <div class="top">
    <router-view class="view one"></router-view>
  </div>
  <div class="middle">
    <router-view class="view two" name="a"></router-view>
  </div>
  <div class="bottom">
    <router-view class="view three" name="b"></router-view>
  </div>
</template>

<script>

  export default {
    name: 'MultiPage',
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
