<template>
  <div class="edit_wrap">
    <div class="edit_head">内容 (Markdown编辑器)</div>
    <div class="markdown">
      <textarea
        class="markdown_input"
        v-model="content"
        @input="update"
      ></textarea>
      <div class="markdown_compiled" v-html="compiledMarkdown()"></div>
      <div class="clear"></div>
    </div>
    <div class="save_button">
      <!-- <el-button type="primary" @click="saveArticle">保存</el-button> -->
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import { marked } from "marked";
export default {
  data() {
    return {
      content: "# dasdasdsadas",
    };
  },
  methods: {
    // 编译Markdown
    compiledMarkdown: function () {
      return marked(this.content, { sanitize: true });
    },
    // 延时赋值给content
    update: _.debounce(function (e) {
      this.content = e.target.value;
    }, 300),
  },
};
</script>

<style scoped>
.edit_wrap {
  padding: 40px;
  font-size: 16px;
  width: 90%;
}
.edit_head {
  margin: 20px 0;
  text-align: left;
}

.markdown {
  text-align: left;
  border: 1px solid #bfcbd9;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  width: 100%;
  height: 800px;
  vertical-align: top;
  background: #f5f7f9;
  overflow: hidden;
}

.markdown textarea {
  border: none;
  resize: none; /*不可拖动*/
}

.markdown_input {
  height: 100%;
  width: 50%;
  float: left;
}

.markdown_compiled {
  float: right;
}

.save_button {
  padding: 40px 0;
}
</style>