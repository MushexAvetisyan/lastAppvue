<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar,
  }
}
</script>

<style lang="scss">
*{
  margin: 0 auto;
  padding: 0;
}
</style>
