<template>
  <div>
    <el-form :model="userInfo" label-width="120px">
      <el-form-item label="用户名">
        <el-input v-model="userInfo.name" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="userInfo.password" type="password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="signup">注册 </el-button>
        <el-button type="primary">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {post} from "../utils/request";
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
    signup() {
        post('/api/user/signup',{userInfo:this.userInfo})
        
    },
  },
};
</script>