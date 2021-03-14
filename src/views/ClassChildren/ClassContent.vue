<!-- 内容部分 -->
<template>
  <div class="class-content">
    <!-- 上部区域 -->
    <class-content-top />
    <!-- 中部分类栏 -->
    <div class="tab-control">
      <router-link to="/class/interaction">课堂互动</router-link>
      <router-link to="/class/homework">作业</router-link>
      <router-link to="/class/test">测试</router-link>
      <router-link to="/class/experiment">实验</router-link>
      <router-link to="/class/course">课程大纲</router-link>
      <router-view />
    </div>
  </div>
</template>

<script>
import ClassContentTop from "./ClassContentChildren/ClassContentTop";

export default {
  name: "ClassContent",
  components: { ClassContentTop },
  data() {
    return {};
  },
};
</script>
<style scoped>
::v-deep input::placeholder {
  font-size: 14px;
}

.class-content {
  width: 1200px;
  margin: 0 auto;
}

.tab-control {
  height: 54px;
  line-height: 54px;
  font-size: 16px;
  background-color: #f5f5f5;
}

.tab-control > a {
  display: inline-block;
  color: #333;
  height: 54px;
  margin: 0 34.5px;
}

.tab-control > a:first-child {
  margin-left: 65px;
}

.router-link-active {
  border-bottom: 2px solid #f4de21;
}
</style>