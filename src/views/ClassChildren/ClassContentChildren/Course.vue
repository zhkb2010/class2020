<!-- 课程大纲 -->
<template>
  <div class="course">
    <!-- 课程号 -->
    <form class="password">
      <div>课程号</div>
      <input
        type="number"
        placeholder="请输入课程号"
        @input="valueChange($event)"
        ref="inputnum"
      />
      <input v-if="inputv" type="submit" value="提交" />
    </form>
    <!-- 课程大纲 -->
    <div class="course-know">
      <div>课程大纲</div>
      <button @click="cClick">添加章节及知识点</button>
    </div>
    <!-- 添加章节及知识点 -->
    <form
      action=""
      class="add"
      :class="{ show: isActive }"
      target="hideIframe"
      ref="form"
    >
      <table v-for="(item, num) in taArr" :key="num">
        <tr>
          <td colspan="4">
            <input
              type="text"
              placeholder="请输入章节名称"
              class="name"
              :name="'numn' + num"
              v-model="item.val"
            />
          </td>
        </tr>
        <!-- 知识点 -->
        <tr class="add-know" v-for="(item, index) in trArr[num]" :key="index">
          <td>
            <input
              type="text"
              :placeholder="'知识点' + (index + 1)"
              class="content"
              :name="'konw' + num + index"
              v-model="item.val"
            />
          </td>
          <td class="radio">
            <input
              type="radio"
              :name="'ty' + num + index"
              :id="'type1' + num + index"
              checked="checked"
            />
            <label :for="'type1' + num + index">普通</label>
            <input
              type="radio"
              :name="'ty' + num + index"
              :id="'type2' + num + index"
            />
            <label :for="'type2' + num + index">一般重点</label>
            <input
              type="radio"
              :name="'ty' + num + index"
              :id="'type3' + num + index"
            />
            <label :for="'type3' + num + index">难点</label>
          </td>
          <td class="space"></td>
          <td>
            <input
              type="button"
              value="+"
              class="addknow"
              @click="trclick(num, index)"
            />
          </td>
        </tr>
        <tr>
          <td colspan="4">
            <div>（编辑完成后，敲击“回车键”可继续添加知识点)</div>
          </td>
        </tr>
      </table>
      <div class="last">
        <input type="submit" value="完成" @click="submitform()" />
        <input type="button" value="继续添加" @click="taclick()" />
      </div>
    </form>
    <iframe id="myIframe" name="hideIframe" style="display: none"></iframe>
    <!-- 章节内容 -->
    <ul class="ccontent" :class="{ cshow: cisActive }">
      <li v-for="(item, index) in this.formarr" :key="index">
        <h4>{{ index + 1 }}.{{ item[0].value }}</h4>
        <div class="knowitem">
          <div>知识点:</div>
          <table>
            <tr v-for="(val, num) in item.slice(1)" :key="num">
              <td>{{ val.value }}</td>
            </tr>
          </table>
        </div>
        <el-dropdown trigger="click" placement="top-end" class="edit">
          <div></div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="edit()">编辑</el-dropdown-item>
            <el-dropdown-item @click.native="dele(index)"
              >删除</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </li>
    </ul>
    <!-- 弹出框部分 -->
    <el-button
      type="text"
      ref="inputResult"
      @click="copen"
      style="display: none"
      >点击打开 Message Box</el-button
    >
  </div>
</template>

<script>
export default {
  name: "Course",
  components: {},
  data() {
    return {
      inputv: false, // 课程号提交按钮显示/隐藏
      isActive: true, // 添加章节及知识点部分显示/隐藏
      cisActive: true, // 章节内容显示/隐藏
      formarr: [], // submit提交的表单数据
      taArr: [{}], // 添加知识点
      trArr: [], // 添加章节及知识点
    };
  },
  methods: {
    // 课程号弹出框
    copen() {
      this.$confirm(
        <div style="margin-top: 23px; margin-bottom: 33px">
          请先输入"<span style="color:#f3cf0a;">课程号</span>
          "再添加课程大纲
        </div>,
        {
          customClass: "ccustomClass",
          confirmButtonText: "确定",
          cancelButtonClass: "ccancelButton",
          cancelButtonText: "取消",
          confirmButtonClass: "cconfirmButton",
          center: true,
        }
      )
        .then(() => {})
        .catch(() => {});
    },
    // 显示课程号提交按钮
    valueChange() {
      this.inputv = true;
    },
    // 添加章节及知识点
    cClick() {
      // 判断是否输入课程号
      if (this.$refs.inputnum.value == "") {
        // 弹出弹框
        this.$refs.inputResult.$emit("click");
      } else {
        this.isActive = false;
        this.cisActive = true;
        // 清空重置form
        this.$refs.form.reset();
        this.trArr.splice(0, this.trArr.length);
        // 添加第一个空知识点栏
        this.taArr = [{}];
        this.trArr.push([{}]);
      }
    },
    // 鼠标按"+"添加知识点
    trclick(num, index) {
      // console.log(this.trArr[num]);
      this.trArr[num].splice(index + 1, 0, {});
    },
    // 鼠标点击"继续添加"
    taclick() {
      this.taArr.push({});
      this.trArr.push([{}]);
    },
    // 鼠标点击"完成"
    submitform() {
      // 获取form的数据
      const formData = new FormData(this.$refs.form);
      const data = [];
      const namearr = [];
      for (let [key, val] of formData.entries()) {
        // Object.assign(data, { [key]: val });
        data.push({ name: key, value: val });
      }
      for (let i in data) {
        const arr = data.filter((item) => item.name.substr(4, 1) == i);
        if (arr.length !== 0) {
          namearr.push(arr);
        }
      }
      this.formarr = namearr;
      // 编辑菜单及生成的内容显示与隐藏
      this.cisActive = false;
      this.isActive = true;
    },
    // 鼠标点击"..."中的删除
    dele(index) {
      this.taArr.splice(index, 1);
      this.trArr.splice(index, 1);
      this.formarr.splice(index, 1);
    },
    // 鼠标点击"..."中的编辑
    edit() {
      this.cisActive = true;
      this.isActive = false;
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

.password input[type="number"] {
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
.show {
  display: none;
}

.add {
  border: 0.006944rem solid #e8e8e8;
  border-radius: 0.034722rem;
  margin-top: 0.083333rem;
  width: 100%;
}

.add table {
  margin: 0.138889rem 0 0 0.118056rem;
  width: 5.972222rem;
}

.name {
  width: 100%;
  height: 0.208333rem;
  text-indent: 0.055556rem;
  border: 0.006944rem solid #e8e8e8;
  margin-bottom: 0.118056rem;
}

.add-know {
  display: block;
  margin-bottom: 0.069444rem;
}
.content {
  width: 4.270833rem;
  height: 0.208333rem;
  text-indent: 0.055556rem;
  border: 0.006944rem dashed #e4e2e2;
}

.radio {
  width: 2.083333rem;
  text-align: center;
  background-color: #f5f5f5;
  border: 0.006944rem dashed #e4e2e2;
}
.radio input {
  vertical-align: text-top;
  margin-right: 0.020833rem;
  margin-left: 0.083333rem;
}

.space {
  width: 0.055556rem;
}
.addknow {
  font-family: "iconfont";
  font-size: 0.138889rem;
  width: 0.208333rem;
  height: 0.208333rem;
  border: 0.006944rem dashed #e4e2e2;
  background-color: #fff;
}

.addknow:hover {
  background-color: #f4de21;
}
.add table div {
  padding-bottom: 0.083333rem;
  font-size: 0.0625rem;
}

.last {
  text-align: right;
  border-top: 0.006944rem solid #e8e8e8;
  height: 0.347222rem;
  line-height: 0.347222rem;
  background-color: #f0f0f0;
}
.last input {
  height: 0.1875rem;
  width: 0.527778rem;
  cursor: pointer;
  margin-right: 0.208333rem;
  border: none;
  border-radius: 0.020833rem;
}

.last input:first-child {
  background: #fff;
}

.last input:last-child {
  background: #f4de21;
}
/* 章节内容 */
.cshow {
  display: none;
}

.ccontent {
  margin-top: 0.083333rem;
}

.ccontent li {
  border-bottom: 0.006944rem solid #e8e8e8;
}

.ccontent li:first-child {
  border-top: 0.006944rem solid #e8e8e8;
}

.ccontent li h4 {
  color: #111111;
  font-size: 0.104167rem;
  font-weight: normal;
  margin: 0.138889rem 0 0.069444rem 0;
}

.ccontent .knowitem {
  display: flex;
  margin-left: 0.090278rem;
}

.ccontent .knowitem div:first-child {
  width: 0.333333rem;
}

.edit {
  display: flex;
  justify-content: flex-end;
  font-family: "icomoon";
  height: 0.159722rem;
  line-height: 0.159722rem;
  margin-right: 0.125rem;
  cursor: pointer;
}

::v-deep.el-dropdown-menu {
  height: 0.430556rem;
  width: 0.430556rem;
  padding: 0.041667rem 0 0.041667rem 0;
  margin: 0;
}
::v-deep.el-dropdown-menu__item {
  padding: 0;
  text-align: center;
  height: 0.173611rem;
  line-height: 0.173611rem;
  font-size: 0.072917rem;
}
::v-deep.el-popper .popper__arrow::after {
  content: none;
}
</style>
<style>
/* 课程号 el-button弹框样式 */
.ccustomClass {
  width: 310px;
  height: 212px;
  padding: 0 !important;
}

.ccancelButton {
  width: 77px;
  height: 32px;
  color: #fff;
  background-color: #333 !important;
  border: none !important;
}

.cconfirmButton {
  width: 77px;
  height: 32px;
  margin-left: 38px !important;
  color: #333 !important;
  background-color: #f4de21 !important;
  border: none !important;
}
</style>