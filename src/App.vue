<template>
  <div id="app">
    <router-view />
    <router-link to="/class">课堂</router-link>
    <router-link to="/practical">实训案例库</router-link>
  </div>
</template>
<script>
export default {
  components: {},
};
</script>
<style>
@import "./assets/css/bass.css";
</style>
