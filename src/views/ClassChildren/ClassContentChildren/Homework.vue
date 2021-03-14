<!-- 作业 -->
<template>
  <div class="homework">
    <button class="bz-btn" @click="bz_click()">布置作业</button>
    <!-- <div v-for="(item, index) in this.workarr" :key="index"> -->
    <!-- 布置作业表单 -->
    <!-- :ref="'form' + index" -->
    <form
      :id="'aa' + index"
      action=""
      target="hideIframe"
      ref="form"
      :class="{ formshow: !formActive }"
    >
      <!-- 作业名称输入框 -->
      <input
        type="text"
        placeholder="请输入作业名称"
        class="name"
        name="title"
      />
      <!-- 富文本编辑器 -->
      <div id="wEdit" name="wEdit">
        <!-- <input
          type="text"
          class="placeholder-style"
          :class="{ isshow: !isActive }"
          placeholder="请输入作业简介"
        /> -->
      </div>
      <!-- 截止日期/时间 -->
      <div class="data">
        <div class="data-fir">截至日期:</div>
        <el-date-picker
          v-model="value1"
          type="date"
          placeholder="选择日期"
          name="date"
        >
        </el-date-picker>
        <el-time-picker v-model="value2" placeholder="任意时间点" name="time">
        </el-time-picker>
      </div>
      <div class="data-ex">(截止后公布作业的解体思路及答案)</div>
      <!-- 取消/确定按钮 -->
      <div class="last">
        <input type="button" value="取消" />
        <input type="submit" value="确定" @click="fini_click(index)" />
      </div>
    </form>
    <!-- form表单提交，页面不跳转 -->
    <iframe id="myIframe" name="hideIframe" style="display: none"></iframe>
    <!-- 生成作业内容 -->
    <div class="creat-work" :class="{ creatshow: !creatActive }">
      <!-- 顶部 - 状态、时间、编辑 -->
      <div class="creat-top">
        <div>
          <span class="creat-state">未发布</span>
          <span>{{ current }}</span>
        </div>
        <el-dropdown trigger="click" placement="top-end" class="edit">
          <div></div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="edit()">编辑</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <!-- 中间内容 -->
      <div class="creat-content">
        <div class="creat-text">
          <div class="creat-title">{{ title }}</div>
          <div class="text" v-html="text"></div>
        </div>
        <div class="creat-num">
          <div>
            <div class="count">0</div>
            <div>已批</div>
          </div>
          <div>
            <div class="count">0</div>
            <div>未批</div>
          </div>
          <div>
            <div class="count">1</div>
            <div>未交</div>
          </div>
        </div>
      </div>
      <!-- 底部截止日期、发布 -->
      <div class="creat-bottom">
        <div>截止日期： {{ date }} {{ time }}</div>
        <button>发布</button>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import E from "wangeditor"; //富文本
import "common/custom-menu"; //富文本配置菜单Ω
import { formatDate } from "common/current-time"; //当前时间

export default {
  name: "Homework",
  components: {},
  data() {
    return {
      value1: "", // 截至日期
      value2: "", // 截至时间
      current: formatDate(), // 当前时间
      workarr: [{}], // 一个布置作业
      formActive: false, // 布置作业表单 -- 显示/隐藏
      creatActive: false, // 生成作业表单 -- 显示/隐藏
      // isActive: true, // 富文本编辑器里提示文字的input显示/隐藏
      title: "",
      date: "",
      time: "",
      text: "",
    };
  },
  mounted() {
    this.editor();
  },
  methods: {
    // 点击布置作业按钮
    bz_click() {
      this.formActive = true;
    },
    // 富文本编辑器
    editor() {
      const editor = new E("wEdit");
      // 编辑器配置菜单
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
      const that = this;
      // 编辑区域内容变化时，实时打印出当前内容
      editor.onchange = function () {
        // that.isActive = false;
        that.text = this.$txt.html();
      };
      editor.create();
    },
    // 点击 布置作业表单-完成按钮
    fini_click(index) {
      // 获取form表单提交的内容
      // let forms = this.$refs["form" + index];
      // let forms = document.querySelector(["aa" + index]);
      const formData = new FormData(this.$refs.form);
      // console.log(formData);
      const data = [];
      for (let [key, val] of formData.entries()) {
        data.push({ name: key, value: val });
      }
      console.log(data);
      // 标题
      this.title = data.filter((item) => item.name == "title")[0].value;
      // 截止日期
      let date1 = data.filter((item) => item.name == "date")[0].value;
      this.date = date1.replace(/\-/g, "/"); //日期格式转换 mm-dd → mm/dd
      // 截止时间
      this.time = data.filter((item) => item.name == "time")[0].value;
      // 布置作业表单/生成作业内容 隐藏/显示
      this.formActive = false;
      this.creatActive = true;
    },
    // 鼠标点击"..."中的编辑
    edit() {
      this.formActive = true;
      this.creatActive = false;
    },
  },
};
</script>
<style scoped>
.homework {
  line-height: 1;
  height: 2000px;
}
/* 布置作业按钮 */
.bz-btn {
  width: 174px;
  height: 48px;
  font-size: 14px;
  border: none;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  margin: 30px 0 20px 0;
}

.bz-btn:hover {
  background-color: #f4de21;
  color: #fff;
}
/* 布置作业表单 */
.formshow {
  display: none;
}

form {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 43px 16px;
  line-height: 0;
}

.name {
  height: 40px;
  width: 100%;
  text-indent: 15px;
  border-radius: 3px;
  border: 1px solid #dcdfe6;
}

.name::-webkit-input-placeholder {
  color: #c4c9db;
  font-size: 14px;
}

/* 截止日期/时间 */
.data {
  display: flex;
  color: #000;
  height: 45px;
  line-height: 45px;
}

.data-fir {
  width: 90px;
}

::v-deep.el-date-editor .el-input__inner {
  height: 40px;
  width: 200px;
  font-size: 12px;
}

::v-deep.el-date-editor--date {
  width: 200px;
}
::v-deep.el-date-editor--time {
  margin-left: 20px;
  width: 200px;
}

.data-ex {
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  color: #000;
  margin: 10px 0 0 90px;
}

/* 取消/确定按钮 */
.last {
  display: flex;
  justify-content: flex-end;
}
.last input {
  height: 40px;
  width: 100px;
  border: none;
  border-radius: 5px;
}

.last input:first-child {
  color: #fff;
  background-color: #333;
  margin-right: 56px;
}

.last input:last-child {
  color: #333;
  cursor: pointer;
  background-color: #f6e54d;
}
/* 富文本编辑器 */
::v-deep .wangEditor-container {
  margin: 20px 0;
}

::v-deep .wangEditor-container .clearfix {
  position: static !important;
}

::v-deep .wangEditor-menu-container .menu-item {
  height: 31px;
  width: 35px;
}

::v-deep .wangEditor-container .wangEditor-txt {
  /* display: none; */
  height: auto !important;
  min-height: 245px !important;
  margin-top: 5px;
  padding: 0 15px 15px 15px;
}

/* .isshow {
  display: none !important;
}

.placeholder-style {
  border: none;
  width: 100%;
  margin: 10px 0 0 4px;
}
.placeholder-style::-webkit-input-placeholder {
  color: #aaa;
  font-size: 16px;
} */

/* 生成作业内容 */
.creatshow {
  display: none;
}

.creat-work {
  margin-top: 20px;
  margin-bottom: 40px;
  padding: 20px;
  border-radius: 4px;
  border: 1px solid #ebeef5;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
}

.creat-top {
  display: flex;
  justify-content: space-between;
  color: #000;
  padding: 10px 20px;
}

.creat-state {
  color: #f4de21;
  margin-right: 10px;
}
.edit {
  font-family: "icomoon1";
  cursor: pointer;
}

.creat-content {
  display: flex;
  padding: 10px 20px;
}

.creat-text {
  width: 70%;
}

.creat-title {
  font-size: 18px;
  color: #000;
  cursor: pointer;
}

.text {
  width: 80%;
  height: 50px;
  line-height: 25px;
  font-size: 14px;
  color: #999;
  margin-top: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.creat-num {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  line-height: 1.3;
  text-align: center;
}

.count {
  font-size: 30px;
  color: #111;
}

.count:hover {
  color: #f4de21;
}
.creat-num > div:hover {
  cursor: pointer;
  color: #f4de21;
}

.creat-bottom {
  display: flex;
  color: #999;
  padding: 10px 20px;
  line-height: 30px;
}

.creat-bottom button {
  height: 30px;
  width: 80px;
  color: #111;
  background-color: #f4de21;
  border: none;
  border-radius: 20px;
  margin-left: 10px;
}
</style>
