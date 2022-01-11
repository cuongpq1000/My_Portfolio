<template>
  <div id="app">
    <Portfolio ref="portfolio" class="nav"/>
    <router-view></router-view>
  </div>
</template>

<script>
import Portfolio from './components/Portfolio.vue'

export default {
  name: 'App',
  components: {
    Portfolio
  }
}
</script>

<style>
#app{
  background-color: white;
}
</style>
