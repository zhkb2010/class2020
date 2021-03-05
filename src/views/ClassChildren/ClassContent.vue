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
.class-content {
  width: 6.25rem;
  margin: 0 auto;
}

.tab-control {
  height: 0.277778rem;
  line-height: 0.277778rem;
  background-color: #f5f5f5;
}

.tab-control > a {
  display: inline-block;
  color: #333;
  height: 0.277778rem;
  margin: 0 0.180556rem 0 0.180556rem;
}

.tab-control > a:first-child {
  margin-left: 0.333333rem;
}

.router-link-active {
  border-bottom: 0.013889rem solid #f4de21;
}
</style>