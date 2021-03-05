<template>
  <div id="app">
    <router-view />
    <router-link to="/class" tag="button">课堂</router-link>
    <router-link to="/practical" tag="button">实训案例库</router-link>
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
