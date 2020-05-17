<template>
  <div id="app">
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
    }
  },
  created() {
      document.getElementById('loading')&&document.getElementById('loading').remove()
  },
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">

</style>
