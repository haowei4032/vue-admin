<style lang="scss">
  html,body {
    margin: 0;
    padding: 0;
    #app {
      background: #ccc;
    }
  }
</style>
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
