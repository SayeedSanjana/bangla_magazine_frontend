<script setup>
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <MainLayout />
</template>

<script>
import MainLayout from "./views/MainLayout.vue";
export default {
  name: "App",
  components: {
    MainLayout,
  },
};
</script>
<style scoped>
body {
  font-family: "Roboto", sans-serif;
}
</style>
