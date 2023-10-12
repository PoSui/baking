<template>
  <div style="width: 1200px;margin:0 auto">
    <el-row :gutter="20">
      <el-col :span="18">
        <el-card>
          <h1 style="color:orange;text-align:center;">枣泥花式面包,隔壁小孩儿都馋哭了!</h1>
          <p style="text-align: center;font-size: 12px;color:#666">
            作者:传奇哥 | 发布时间:2023/8/9 15:40:50 | 阅读次数:356
          </p>
          <hr>
          <el-card>
            <b style="color:#0aa1ed">摘要:</b>之前做了枣泥馅，配上花式面包，好吃到爆。 枣泥花式面包的用料: 肉松面包面团等
          </el-card>
          <p style="height: 500px">正文内容</p>
        </el-card>


<!--        -->
        <el-card style="margin-top: 20px">
            <p>发一条友善的评论</p>
            <hr>
            <el-row>
              <el-col :span="22">
                <el-input placeholder="请输入评论的内容..."></el-input>
              </el-col>
              <el-col :span="2">
                <el-button>发布</el-button>
              </el-col>
            </el-row>

          <el-row style="margin: 20px;" v-for="item in 4">
            <el-col :span="2">
              <el-avatar src="/imgs/head.jpg"></el-avatar>
            </el-col>
            <el-col :span="22">
              <p style="color: orange;font-weight: bold;margin: 0">传奇哥:</p>
              <p style="margin: 5px 0">这个非常好吃!我喜欢!</p>
              <p style="color: #666;font-size: 12px">2023/10/12 10:50:00</p>
            </el-col>
          </el-row>

        </el-card>
      </el-col>

<!--      -->
      <el-col :span="6">
        <el-card>
          <div id="head_div">

          </div>
          <div style="text-align: center; position:relative;top:-45px">
            <img src="/imgs/head.jpg" style="width: 90px;height: 90px;border:5px solid white">
            <p style="font-size: 20px;font-weight: bold;margin: 0">传奇哥</p>
            <br>
            <el-icon><Edit/></el-icon>本文作者<br>
            <br>
            <el-icon><clock/></el-icon>2023/8/9/ 16:30:40
          </div>

          </el-card>
        <el-card style="margin-top: 20px">
          <p style="font-size: 20px;font-weight: bold;margin: 0">作者其他文章</p>
          <br>
          <hr>
          <el-row :gutter="20" v-for="item in 4">
            <el-col :span="10" >
              <img src="/imgs/a.jpg" style="width:100%;height: 70px"/>
            </el-col>
            <el-col :span="14">
              <p style="height: 40px;margin: 0">枣泥面包好吃到爆!</p>
              <el-icon><clock/></el-icon>
              <span style="font-size:12px;color:#666">2023/8/9</span>
            </el-col>
          </el-row>
        </el-card>
<!---->
        <el-card style="margin-top: 20px">
          <p style="font-size: 20px;font-weight: bold;margin: 0">热门文章</p>
          <br>
          <hr>
          <el-row :gutter="20" v-for="item in 4">
            <el-col :span="10" >
              <img src="/imgs/a.jpg" style="width:100%;height: 70px"/>
            </el-col>
            <el-col :span="14">
              <p style="height: 40px;margin: 0">枣泥面包好吃到爆!</p>
              <el-icon><clock/></el-icon>
              <span style="font-size:12px;color:#666">2023/8/9</span>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>

</script>

<style scoped>
  #head_div{
    height:90px;
    background-image: url("/public/imgs/avarbg.jpg");
  }
</style>