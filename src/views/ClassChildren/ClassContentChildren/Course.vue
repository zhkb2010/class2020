<!-- 课程大纲 -->
<template>
  <div class="course">
    <!-- 课程号 -->
    <form class="password">
      <div>课程号</div>
      <input type="text" placeholder="请输入验证码" @input="valueChange" />
      <input v-if="inputv" type="submit" value="提交" />
    </form>
    <!-- 课程大纲 -->
    <div class="course-know">
      <div>课程大纲</div>
      <button>添加章节及知识点</button>
    </div>
    <!-- 添加章节及知识点 -->
    <form action="" class="add">
      <table>
        <tr>
          <td colspan="3">
            <input type="text" placeholder="请输入章节名称" class="name" />
          </td>
        </tr>
        <tr>
          <td><input type="text" placeholder="知识点1" class="content" /></td>
          <td>
            <input
              type="radio"
              name="类型"
              id="type1"
              checked="checked"
            /><label for="type1">普通</label>
            <input type="radio" name="类型" id="type2" /><label for="type2"
              >一般重点</label
            >
            <input type="radio" name="类型" id="type3" /><label for="type3"
              >重点、难点</label
            >
          </td>
          <td><button>+</button></td>
        </tr>
        <tr>
          <td>（编辑完成后，敲击“回车键”可继续添加知识点)</td>
        </tr>
      </table>
    </form>
    <!-- <div>111</div> -->
  </div>
</template>

<script>
export default {
  name: "Course",
  components: {},
  data() {
    return { inputv: false };
  },
  methods: {
    valueChange() {
      this.inputv = true;
    },
  },
};
</script>
<style scoped>
.course {
  line-height: 1.5;
  height: 600px;
}

/* 课程号 */
.password {
  margin: 0.083333rem 0 0.138889rem 0;
  height: 0.381944rem;
}

.password input[type="text"] {
  margin-top: 0.027778rem;
  width: 100%;
  height: 0.208333rem;
  text-indent: 0.069444rem;
  border: 0.006944rem solid #e8e8e8;
}

.password input[type="submit"] {
  float: right;
  margin-top: 0.055556rem;
  height: 0.194444rem;
  width: 0.541667rem;
  background-color: #f4de21;
  border: none;
  border-radius: 0.020833rem;
  cursor: pointer;
}

/* 课程大纲 */
.course-know {
  height: 0.388889rem;
}

.course-know button {
  text-align: left;
  margin-top: 0.041667rem;
  background-color: #fff;
  border: none;
  height: 0.208333rem;
  width: 100%;
  text-indent: 0.069444rem;
  box-shadow: 0 0.013889rem 0.020833rem 0.013889rem rgb(0 0 0 / 10%);
}

.course-know button:hover {
  background-color: #f4de21;
}
.course-know button::before {
  content: "\e602";
  font-family: "iconfont";
  color: #333;
  padding-right: 0.034722rem;
}

/* 添加章节及知识点 */
.add {
  display: block;
  border: 0.006944rem solid #e8e8e8;
  border-radius: 0.034722rem;
  margin-top: 0.083333rem;
  width: 100%;
  height: 138px;
}

table {
  margin: 0.138889rem 0 0 0.118056rem;
  width: 5.972222rem;
  height: 80px;
  border: 1px solid red;
}

table input {
  height: 0.208333rem;
}

.name {
  width: 100%;
  text-indent: 0.055556rem;
  border: 0.006944rem solid #e8e8e8;
}

.content {
  width: 615px;
  text-indent: 0.055556rem;
  border: 0.006944rem dashed #e8e8e8;
}
</style>