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
  height: 1.194444rem;
  color: #fff;
  background: url("~assets/img/Class/背景.png") no-repeat;
  background-size: 100% 100%;
  border-radius: 0.041667rem 0.041667rem 0 0;
}

.name {
  padding-top: 0.291667rem;
  margin-left: 0.194444rem;
  font-size: 0.177083rem;
}

.title {
  display: flex;
  justify-content: space-between;
  font-size: 0.072917rem;
  height: 0.319444rem;
  margin: 0.069444rem 0.194444rem 0 0.194444rem;
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
  height: 0.166667rem;
  line-height: 0.166667rem;
  margin-right: 0.076389rem;
  padding: 0 0.041667rem 0 0.041667rem;
}

.top-left ul li:nth-child(1)::before {
  content: "\e951";
  font-family: "iconfont";
  margin-right: 0.027778rem;
}

.top-left ul li:nth-child(2)::before {
  content: "\e7b0";
  font-family: "iconfont";
  margin-right: 0.027778rem;
}

.top-left ul li:nth-child(2)::after {
  content: "\e900";
  font-family: "icomoon";
  margin-left: 0.027778rem;
  display: inline-block;
  vertical-align: middle;
}

.top-left ul li:nth-child(3)::before {
  content: "\e619";
  font-family: "iconfont";
  margin-right: 0.027778rem;
}

.top-left ul li:nth-child(4)::before {
  content: "\e633";
  font-family: "iconfont";
  margin-right: 0.027778rem;
}
.top-left ul li:nth-child(5)::before {
  content: "\e61a";
  font-family: "iconfont";
  margin-right: 0.027778rem;
}
.top-right {
  display: flex;
}

.top-right .count {
  font-size: 0.15625rem;
  padding-bottom: 0.020833rem;
}

.top-right > div {
  width: 0.416667rem;
  text-align: center;
}

.top-right > div:last-child {
  width: 0.277778rem;
  margin: 0 0.069444rem 0 0.069444rem;
  border-radius: 0.020833rem;
  background-color: #f8e516;
  color: #333;
}

.top-right > div:last-child::before {
  display: block;
  content: "\e7b7";
  font-family: "iconfont";
  font-size: 0.15625rem;
  padding-bottom: 0.020833rem;
}
</style>