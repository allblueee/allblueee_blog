<template>
  <div class="home">
    <router-view class="blogs">
      <HelloWorld msg="Welcome to Myplace" />
    </router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
<style scoped>
.home {
  display: flex;
  flex-wrap: nowrap;
  width:100%;
}
.catalogue{
  width:20%;
  font-size: 22px;
}

.blogs{
  width:80%;
}
</style>