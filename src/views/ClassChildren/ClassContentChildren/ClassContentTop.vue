<!-- 内容部分上部区域 -->
<template>
  <div class="class-content-top">
    <div class="name">课程名称</div>
    <div class="title">
      <div class="top-left">
        <div>课程评分：--</div>
        <ul>
          <li>加课二维码</li>
          <li>加课码:</li>
          <li>成员:</li>
          <li>成绩</li>
          <li>数据分析</li>
        </ul>
      </div>
      <div class="top-right">
        <div>
          <div class="count">0</div>
          <div>发布作业</div>
        </div>
        <div>
          <div class="count">0</div>
          <div>发布测试</div>
        </div>
        <div>签到</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClassContentTop",
  components: {},
  data() {
    return {};
  },
};
</script>
<style scoped>
.class-content-top {
  height: 230px;
  color: #fff;
  background: url("~assets/img/Class/背景.png") no-repeat;
  background-size: 100% 100%;
  border-radius: 8px 8px 0 0;
}

.name {
  padding-top: 45px;
  margin-left: 40px;
  font-size: 34px;
}

.title {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  height: 80px;
  margin: 12px 30px 0 40px;
}
.top-left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.top-left ul {
  display: flex;
}
.top-left ul li {
  background-color: hsla(0, 0%, 100%, 0.2);
  height: 30px;
  line-height: 30px;
  margin-right: 15px;
  padding: 0 8px;
}

.top-left ul li:nth-child(1)::before {
  content: "\e951";
  font-family: "iconfont";
  margin-right: 6px;
}

.top-left ul li:nth-child(2)::before {
  content: "\e7b0";
  font-family: "iconfont";
  margin-right: 6px;
}

.top-left ul li:nth-child(2)::after {
  content: "\e900";
  font-family: "icomoon1";
  margin-left: 4px;
  display: inline-block;
  vertical-align: middle;
}

.top-left ul li:nth-child(3)::before {
  content: "\e619";
  font-family: "iconfont";
  margin-right: 6px;
}

.top-left ul li:nth-child(4)::before {
  content: "\e633";
  font-family: "iconfont";
  margin-right: 6px;
}
.top-left ul li:nth-child(5)::before {
  content: "\e61a";
  font-family: "iconfont";
  margin-right: 6px;
}
.top-right {
  display: flex;
  align-items: center;
}

.top-right .count {
  font-size: 30px;
  padding: 2px 0 8px 0;
}

.top-right > div {
  height: 65px;
  width: 80px;
  text-align: center;
}

.top-right > div:last-child {
  width: 50px;
  margin: 0 20px 0 20px;
  border-radius: 3px;
  background-color: #f8e516;
  color: #333;
}

.top-right > div:last-child::before {
  display: block;
  content: "\e7b7";
  font-family: "iconfont";
  font-size: 30px;
  padding: 5px 0;
}
</style>