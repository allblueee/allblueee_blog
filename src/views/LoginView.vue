<template>
  <div class="wrap">
    <el-form class="elform" :model="userInfo" label-width="120px">
      <el-form-item label="用户名">
        <el-input v-model="userInfo.name" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="userInfo.password" type="password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="signup">注册 </el-button>
        <el-button type="primary" @click="signin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { post } from "../utils/request";
export default {
  data() {
    return {
      userInfo: {
        name: "",
        password: "",
      },
    };
  },
  methods: {
    async signup() {
      let res = await post("/api/user/signup", { userInfo: this.userInfo });
      
      let _this = this;
      if (res.data.code == 1) {
        _this.$message.error(res.data.message)
      }
      else {
        _this.$message.success(res.data.message)
        _this.$router.push('/')
      }
    },
    async signin() {
      let res = await post("/api/user/signin", { userInfo: this.userInfo });
      
      let _this = this;
      if (res.data.code == 1) {
        _this.$message.error(res.data.message)
      }
      else {
        _this.$message.success(res.data.message)
        _this.$router.push('/')
      }
    },
  },
};
</script>
<style scoped>
.wrap {
  position: relative;
  top: 60px;
}
.elform {
  width: 320px;
  margin: auto;
}
</style>