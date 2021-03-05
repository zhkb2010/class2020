<!-- 课堂部分 -->
<template>
  <div class="">
    <!-- 顶部导航栏 -->
    <class-nav></class-nav>
    <!-- 内容部分 -->
    <class-content></class-content>
  </div>
</template>

<script>
import ClassContent from "views/ClassChildren/ClassContent";
import ClassNav from "views/ClassChildren/ClassNav";

export default {
  name: "Class",
  components: { ClassNav, ClassContent },
  data() {
    return {};
  },
};
</script>
<style scoped>
</style>