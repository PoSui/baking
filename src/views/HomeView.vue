<template xmlns="">
  <el-container>
    <el-header height="80px" style="background-color: white">
      <div style="width: 1200px;margin: 0 auto;">
        <el-row :gutter="20">
          <el-col :span="6">
            <router-link to="/">
              <img src="/imgs/icon.png"/>
            </router-link>
          </el-col>
          <el-col :span="10">
            <el-menu mode="horizontal" active-text-color="orange">
              <el-menu-item index="1">首页</el-menu-item>
              <el-menu-item index="2">食谱</el-menu-item>
              <el-menu-item index="3">视频</el-menu-item>
              <el-menu-item index="4">资讯</el-menu-item>
            </el-menu>
          </el-col>
          <el-col :span="6">
            <el-input style="position:relative; top:15px" placeholder="搜索">
              <template #append>
                <el-icon>
                  <search/>
                </el-icon>
              </template>
            </el-input>
          </el-col>
          <el-col :span="2">
            <el-popover
                placement="top-start"
                title="欢迎来到烘焙坊"
                :width="200"
                trigger="hover"
            >
              <!--                content="this is content, this is content, this is content"-->
              <template #reference>
                <el-icon style="position:relative;top:15px" :size="30">
                  <user/>
                </el-icon>
              </template>
              <el-button type="info" @click="router.push('/reg')">注册</el-button>
              <el-button type="warning" @click="router.push('/login')">登录</el-button>
            </el-popover>
          </el-col>
        </el-row>
      </div>
    </el-header>
    <!--  -->
    <el-main>
      <router-view/>
    </el-main>
    <!--  -->
    <el-footer style="background-color: black;height: 280px;padding: 50px 0">
      <div style="width: 1200px;margin: 0 auto;color:#666;text-align: center">
      <el-row>
        <el-col :span="8">
          <img src="/imgs/icon.png">
          <p>教程灵感就看烘焙坊</p>
          <p>烘焙行业网络社区平台</p>
          <p>全国百城上千个职位等着你</p>
        </el-col>
        <el-col :span="8" id="footer-center">
          <el-row>
            <el-col :span="8">
              <h3>关于我们</h3>
              <p>烘焙学院</p>
              <p>烘焙食谱</p>
              <p>分类信息</p>
              <p>社区交流</p>
            </el-col>
            <el-col :span="8">
              <h3>服务与支持</h3>
              <p>联系我们</p>
              <p>广告投放</p>
              <p>用户协议</p>
              <p>友情链接</p>
              <p>在线反馈</p>
            </el-col>
            <el-col :span="8">
              <h3>底部导航</h3>
              <p>Archiver</p>
              <p>手机版</p>
              <p>小黑屋</p>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="8">
          <p style="font-size: 60px;margin: 0">
            <span style="color:orange">烘焙</span>坊</p>
          <p>烘焙行业网络社区平台</p>
        </el-col>
      </el-row>
      </div>
    </el-footer>
  </el-container>
</template>

<script setup>
import {
  Search
} from '@element-plus/icons-vue'
import router from "@/router";


</script>

<style>
 footer h3{
   color:white;
 }
 #footer-center p{
   margin: 5px 0;
 }
</style>