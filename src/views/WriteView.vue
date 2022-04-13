<template>
  <div class="wrap">
    <el-input
      v-model="title"
      style="width: 200px"
      placeholder="请输入标题"
    ></el-input>
    <div class="editor">
      <textarea v-model="content" @input="update"></textarea>
      <div v-html="compiledMarkdown()"></div>
    </div>
    <el-button type="primary" @click="saveArticle">保存</el-button>
  </div>
</template>

<script>
import _ from "lodash";
import { marked } from "marked";
import { post } from "../utils/request";
export default {
  data() {
    return {
      title: "",
      content: "",
      data: "",
    };
  },
  methods: {
    // 编译Markdown
    compiledMarkdown() {
      return marked(this.content, { sanitize: true });
    },
    // 延时赋值给content
    update: _.debounce(function (e) {
      this.content = e.target.value;
    }, 300),
    getDate() {
      let mydate, y, m, d;
      mydate = new Date();
      y = mydate.getFullYear();
      m = mydate.getMonth();
      d = mydate.getDate();
      if (m < 10) m = "0" + m;
      if (d < 10) d = "0" + d;
      this.date = y + "-" + m + "-" + d ;
    },
    async saveArticle() {
      this.getDate();
      let _this = this;
      let res = await post("/api/user/newarticle", {
        articleInformation: { title: this.title, content: this.content, date:this.date },
      });
      if (res.data.code == 1) {
        _this.$message.error(res.data.message);
      } else {
        _this.$message.success(res.data.message);
      }
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.wrap {
  position: relative;
  top: 60px;
  margin: 0;
  height: 100%;
  font-family: "Helvetica Neue", Arial, sans-serif;
  color: #333;
}
.editor {
  margin: 0;
  height: 100%;
  font-family: "Helvetica Neue", Arial, sans-serif;
  color: #333;
}

textarea,
.editor div {
  display: inline-block;
  width: 49%;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 20px;
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: "Monaco", courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
}
</style>