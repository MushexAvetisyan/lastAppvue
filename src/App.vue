<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Home from "@/components/Home";
import Aboutme from "@/components/Aboutme";
export default {
  components: {
    Navbar,
    Home,
    Aboutme,
  }
}
</script>

<style lang="scss">
*{
  margin: 0 auto;
  padding: 0;
}
</style>
