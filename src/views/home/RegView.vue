<template>
  <div style="width: 1200px;margin: 0 auto;">
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card>
          <img src="imgs/reg.png" style="width: 100%;background-color: transparent;"/>
        </el-card>
      </el-col>


      <el-col :span="12">
        <el-form label-width="100px" style="margin-top: 30px">
          <el-form-item>
            <h1 style="font-size: 40px">立即注册
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <router-link to="/login" style="font-size: 20px;color:#0aa1ed;text-decoration: none;">已有账号?立即登录
              </router-link>
            </h1>
          </el-form-item>
          <el-form-item label="用户名">
            <el-input type="text" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="text" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item label="昵称">
            <el-input type="text" placeholder="请输入昵称"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">注册</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>