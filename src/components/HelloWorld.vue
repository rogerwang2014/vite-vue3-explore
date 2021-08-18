<template>
  <img alt="Vue logo" src="../assets/logo.png" />
  <h1>{{ msg }}</h1>
  <div>{{ name }}</div>
  <button @click="count++">count is: {{ count }}</button>
  <div class="navigator_bar">
    导航栏 |
    <button @click="$router.push('/login')">登录页</button> |
    <button @click="toHome">首页</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0,
      name: 'Hi there~ please click the button'
    }
  },
  methods: {
    toHome () {
      this.$router.push({
        name: 'home',
        query: {
          id: '123'
        },
        function (to, from) {
          console.log(to, from)
        }
      })
    }
  }
}
</script>
<style>
  .navigator_bar {
    margin-top: 20px;
  }
</style>
