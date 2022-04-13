<template>
  <div class="home">
    <h1>Hi,I am allblueee. Welcome to myplace</h1>
    <h1>Coding, Travel, curious</h1>
    <div class="article_wrap" v-for="item in articleList" :key="item._id">
      <div class="article_title" @click="getArticleById(item._id)"><h3>{{ item.title }}</h3></div>
      <div class="article_date"><h3>{{ item.date }}</h3></div>
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
    getArticleById(id){
      this.$router.push('/articleDetail/'+id)
    }
  },
};
</script>
<style scoped>
.home {
  position: relative;
  top: 60px;
  width: 100%;
  text-align: center;
}
.article_wrap {
  margin-left: 20%;
  margin-right: 20%;
  display: flex;
  justify-content: space-between;
}
.article_title {
  width:40%;
}
.article_date {
  width:120px;
}
.blogs {
  width: 80%;
}
</style>