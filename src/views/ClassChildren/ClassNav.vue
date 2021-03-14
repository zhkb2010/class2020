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
  height: 72px;
  line-height: 72px;
  background-color: #27292d;
  font-size: 20px;
  color: #ffffff;
  padding: 0 60px 0 30px;
}

.nav-bar-left {
  cursor: pointer;
}

.nav-bar-left::before {
  content: "\e901";
  font-family: "icomoon1";
  display: inline-block;
  vertical-align: top;
  margin-right: 5px;
}

.nav-bar-right::before {
  content: "\e904";
  font-family: "icomoon1";
  display: inline-block;
  vertical-align: top;
  font-size: 20px;
}

.nav-bar-right .circle {
  display: inline-block;
  height: 22px;
  width: 22px;
  background-color: #c0c4cc;
  border-radius: 50%;
  vertical-align: text-top;
  margin: 0 5px 0 20px;
}

.nav-tab {
  height: 74px;
}
</style>