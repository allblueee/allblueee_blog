<template>
  <div class="home">
    <div class="article_wrap" v-for="item in articleList" :key="item._id">
      <div class="article_title" @click="getArticleById">{{ item.title }}</div>
      <div class="article_date">{{ item.date }}</div>
    </div>
  </div>
</template>

<script>
import { get } from "@/utils/request";
export default {
  name: "HomeView",
  data() {
    return {
      articleList: [],
    };
  },
  created() {
    this.getArticleList();
  },
  methods: {
    async getArticleList() {
      let res = await get("/api/user/articlelist");
      this.articleList = res.data;
      console.log(this.articleList);
    },
  },
};
</script>
<style scoped>
.home {
  position: relative;
  top: 60px;
  width: 100%;
}
.article_title {
  display: inline;
  width:40%;
}
.article_date {
  display: inline;
  position: absolute;
  right:0;
  width:120px;
}
.blogs {
  width: 80%;
}
</style>