<!-- 顶部导航栏 -->
<template>
  <div class="ClassNav">
    <!-- 顶部导航栏 -->
    <div class="nav-bar">
      <div @click="backClick" class="nav-bar-left">课堂</div>
      <div class="nav-bar-right">
        <span class="circle"></span>
        <span>测试老师</span>
      </div>
    </div>
    <!-- 顶部导航栏下部空白部分 -->
    <div class="nav-tab"></div>
  </div>
</template>

<script>
export default {
  name: "ClassNav",
  components: {},
  data() {
    return {};
  },
  methods: {
    backClick() {
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
.nav-bar {
  display: flex;
  justify-content: space-between;
  height: 0.381944rem;
  line-height: 0.381944rem;
  background-color: #27292d;
  font-size: 0.097222rem;
  color: #ffffff;
  padding: 0 0.416667rem 0 0.208333rem;
}

.nav-bar-left {
  cursor: pointer;
}

.nav-bar-left::before {
  content: "\e901";
  font-family: "icomoon";
  display: inline-block;
  vertical-align: top;
  margin-right: 0.034722rem;
}

.nav-bar-right::before {
  content: "\e904";
  font-family: "icomoon";
  display: inline-block;
  vertical-align: top;
  font-size: 0.125rem;
}

.nav-bar-right .circle {
  display: inline-block;
  height: 0.111111rem;
  width: 0.111111rem;
  background-color: #c0c4cc;
  border-radius: 0.055556rem;
  vertical-align: text-top;
  margin: 0 0.034722rem 0 0.138889rem;
}

.nav-tab {
  height: 0.381944rem;
}
</style>