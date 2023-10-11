<template>
  <div id="main-div">
    <el-card style="width: 500px;height: 300px;margin:50px auto">
      <el-form label-width="80px" style="margin-top: 50px;width: 430px">
        <el-form-item label="用户名">
          <el-input type="text" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item style="position: relative;left:120px">
          <el-button type="primary" style="">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>

</script>

<style scoped>
#main-div {
  height: 500px;
  background-image: url("/public/imgs/loginbg.gif");
  /*设置背景图片为封面*/
  background-size: cover;
  /*设置背景图片居中*/
  background-position: center;
  overflow: hidden;
}
</style>