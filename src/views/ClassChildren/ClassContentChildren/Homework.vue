<!-- 作业 -->
<template>
  <div class="">
    <button class="bz-btn">布置作业</button>
    <!-- 布置作业表单 -->
    <form action="">
      <!-- 作业名称输入框 -->
      <input type="text" placeholder="请输入作业名称" class="name" />
      <!-- 富文本编辑器 -->
      <div id="wEdit">
        <!-- <div id="toolbar-container" class="toolbar"></div>
        <div id="text-container" class="text"></div> -->
      </div>
      <!-- 截止日期/时间 -->
      <div class="data">
        <div class="data-fir">截至日期:</div>
        <el-date-picker v-model="value1" type="date" placeholder="选择日期">
        </el-date-picker>
        <el-time-picker v-model="value2" placeholder="任意时间点">
        </el-time-picker>
      </div>
      <div class="data-ex">(截止后公布作业的解体思路及答案)</div>
      <!-- 取消/确定按钮 -->
      <div class="last">
        <input type="button" value="取消" />
        <input type="submit" value="确定" />
      </div>
    </form>
  </div>
</template>

<script>
import E from "wangeditor";

export default {
  name: "Homework",
  components: {},
  data() {
    return {
      value1: "",
      value2: "",
    };
  },
  mounted() {
    this.editor();
  },
  methods: {
    // 富文本编辑器
    editor() {
      const editor = new E("wEdit");
      // editor.config.zIndex = 1;
      editor.config.menus = [
        "source",
        "|",
        "lineheight",
        "indent",
        "bold",
        "underline",
        "italic",
        "strikethrough",
        "eraser",
        "forecolor",
        "bgcolor",
        "|",
        "quote",
        "fontfamily",
        "fontsize",
        "head",
        "unorderlist",
        "orderlist",
        "alignleft",
        "aligncenter",
        "alignright",
        "|",
        "link",
        "unlink",
        "emotion",
        "|",
        "img",
        "video",
        "symbol",
        "insertcode",
        "|",
        "undo",
        "redo",
        "fullscreen",
      ];
      editor.create();
      editor.$txt.html("<p>请输入作业简介</p>");
    },
  },
};
</script>
<style scoped>
.bz-btn {
  width: 0.881944rem;
  height: 0.236111rem;
  border: none;
  border-radius: 0.020833rem;
  background-color: #fff;
  box-shadow: 0 0.013889rem 0.020833rem 0.013889rem rgb(0 0 0 / 10%);
  margin: 0.152778rem 0 0.104167rem 0;
}

/* 布置作业表单 */
form {
  border: 0.006944rem solid #e0e0e0;
  border-radius: 0.034722rem;
  padding: 0.222222rem 0.083333rem 0.222222rem 0.083333rem;
  line-height: 0;
}

.name {
  height: 30px;
  width: 100%;
  text-indent: 0.076389rem;
  border-radius: 0.020833rem;
  border: 0.006944rem solid #dcdfe6;
}
.name::-webkit-input-placeholder {
  color: #c4c9db;
}

.data {
  display: flex;
  height: 0.208333rem;
  line-height: 0.208333rem;
}

.data-fir {
  width: 0.472222rem;
}

.data-ex {
  height: 0.111111rem;
  line-height: 0.111111rem;
  margin: 0.052083rem 0 0 0.472222rem;
}

::v-deep.el-date-editor .el-input__inner {
  height: 0.194444rem;
  width: 1.041667rem;
  font-size: 0.083333rem;
}
::v-deep.el-date-editor .el-input__icon {
  line-height: 0.194444rem;
}
::v-deep.el-date-editor--date {
  width: 1.041667rem;
}
::v-deep.el-date-editor--time {
  margin-left: 0.104167rem;
  width: 1.041667rem;
}
.last {
  display: flex;
  justify-content: flex-end;
}
.last input {
  height: 0.208333rem;
  width: 0.5rem;
  border: none;
  border-radius: 0.020833rem;
}

.last input:first-child {
  color: #fff;
  background-color: #333;
  margin-right: 0.291667rem;
}

.last input:last-child {
  color: #333;
  background-color: #f6e54d;
}
/* 富文本编辑器 */
::v-deep .wangEditor-container {
  height: 1.472222rem;
  margin: 0.138889rem 0 0.138889rem 0;
}

::v-deep .wangEditor-menu-container .menu-item {
  height: 0.159722rem;
  width: 0.180556rem;
}
</style>
