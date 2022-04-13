<template>
  <div id="content">
      <div class="article_title article_detail_title"><h1>{{ article.title }}</h1></div>
        <span class="article_info_date">{{ article.date }}</span>
      <div class="article_detail_content" v-html="compiledMarkdown()"></div>
  </div>
</template>

<script>
import {marked} from "marked";
import { get } from "@/utils/request";
export default {
  name: "articleDetail",
  data() {
    return {
      article: {},
    };
  },
  mounted: function () {
    let id = this.$route.params.id;
    let _this = this;
    get("/api/articleDetail/" + id).then((res)=>{
        if(res.data.code ==1) {
            _this.$message.error(res.data.message);
        }
        else {
            this.article = res.data.docs;
        }
    });
  },
  methods: {
    compiledMarkdown: function () {
      return marked(this.article.content || "", { sanitize: true });
    },
  },
};
</script>

<style>
#content{
    position: relative;
    top:60px;
}
</style>