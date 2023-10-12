<template>
  <div style="width:1200px;margin: 0 auto">
    <el-row :gutter="20">
      <el-col :span="4">
        <el-card style="height: 100%">
        <el-menu active-text-color="orange" router style="border-right: 0px">
          <el-menu-item index="/personal/pindex">个人信息</el-menu-item>
          <el-menu-item index="/personal/management">稿件管理</el-menu-item>
        </el-menu>
        </el-card>
      </el-col>
      <el-col :span="20">
          <router-view/>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>