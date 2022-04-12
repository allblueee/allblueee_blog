<template>
  <div></div>
</template>
<script>
import post from "../utils/request";
export default {
  data() {},
  created() {
    post("/api/sign");
  },
};
</script>