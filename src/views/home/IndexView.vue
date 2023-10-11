<template>
  <div style="width: 1200px;margin: 0 auto;">
    <el-carousel trigger="click">
      <el-carousel-item v-for="item in carouselArr" :key="item">
        <img :src="item" style="height:100%;width: 100%"/>
      </el-carousel-item>
    </el-carousel>
  </div>

  <!--  -->
  <div style="width: 1200px;margin:0 auto;">
    <el-row style="background: white">
      <el-col :span="3">
        <p style="font-size: 28px; margin: 15px;">烘焙食谱</p>
      </el-col>
      <el-col :span="21">
        <el-menu
            mode="horizontal"
            active-text-color="orange"
            default-active="1"
            style="margin-top: 5px;color:#909399;"

        >
          <el-menu-item @hover="f()" index="1">全部</el-menu-item>
          <el-menu-item index="2">面包</el-menu-item>
          <el-menu-item index="3">零食</el-menu-item>
          <el-menu-item index="4">家常菜</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
<!--    -->
    <el-row :gutter="20">
      <el-col :span="6" v-for="pic in recipeArr" style="margin: 10px 0">
        <el-card style="width: 100%;height: 100%;">
          <img :src="pic.imgUrl" style="width: 100%;height:145px"/>
          <p style="height: 40px;">{{pic.title}}</p>
          <div style="width: 28px;height: 28px;float: left;margin-right: 5px">
            <img style="width: 28px;height: 28px;border-radius: 14px" :src="pic.userImgUrl" />
          </div>
          <div style="text-size:12px;line-weight:100%;float: left;font-color:#909399">{{pic.nickName}}</div>
          <div style="text-size:12px;line-weight:100%;float: right;font-color:#909399">{{pic.categoryName}}</div>
        </el-card>
      </el-col>
    </el-row>
    <div style="text-align: center">
      <el-button>点击加载更多食谱</el-button>
    </div>
    <!--    -->
    <el-row style="background: white">
      <el-col :span="3">
        <p style="font-size: 28px; margin: 15px;">烘焙视频</p>
      </el-col>
      <el-col :span="21">
        <el-menu
            mode="horizontal"
            active-text-color="orange"
            default-active="1"
            style="margin-top: 5px;color:#909399;"

        >
          <el-menu-item index="1">全部</el-menu-item>
          <el-menu-item index="2">面包教学</el-menu-item>
          <el-menu-item index="3">零食鉴赏</el-menu-item>
          <el-menu-item index="4">家常菜教程</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6" v-for="pic in recipeArr" style="margin: 10px 0">
        <el-card style="width: 100%;height: 100%;">
          <img :src="pic.imgUrl" style="width: 100%;height:145px"/>
          <p style="height: 40px;">{{pic.title}}</p>
          <div style="width: 28px;height: 28px;float: left;margin-right: 5px">
            <img style="width: 28px;height: 28px;border-radius: 14px" :src="pic.userImgUrl" />
          </div>
          <div style="text-size:12px;line-weight:100%;float: left;font-color:#909399">{{pic.nickName}}</div>
          <div style="text-size:12px;line-weight:100%;float: right;font-color:#909399">{{pic.categoryName}}</div>
        </el-card>
      </el-col>
    </el-row>
    <div style="text-align: center">
      <el-button>点击加载更多视频</el-button>
    </div>
    <!--    -->
    <el-row style="background: white">
      <el-col :span="3">
        <p style="font-size: 28px; margin: 15px;">行业资讯</p>
      </el-col>
      <el-col :span="21">
        <el-menu
            mode="horizontal"
            active-text-color="orange"
            default-active="1"
            style="margin-top: 5px;color:#909399;"

        >
          <el-menu-item index="1">全部</el-menu-item>
          <el-menu-item index="2">美食资讯</el-menu-item>
          <el-menu-item index="3">店家咨资讯</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6" v-for="pic in recipeArr" style="margin: 10px 0">
        <el-card style="width: 100%;height: 100%;">
          <img :src="pic.imgUrl" style="width: 100%;height:145px"/>
          <p style="height: 40px;">{{pic.title}}</p>
          <div style="width: 28px;height: 28px;float: left;margin-right: 5px">
            <img style="width: 28px;height: 28px;border-radius: 14px" :src="pic.userImgUrl" />
          </div>
          <div style="text-size:12px;line-weight:100%;float: left;font-color:#909399">{{pic.nickName}}</div>
          <div style="text-size:12px;line-weight:100%;float: right;font-color:#909399">{{pic.categoryName}}</div>
        </el-card>
      </el-col>
    </el-row>
    <div style="text-align: center">
      <el-button>点击加载更多资讯</el-button>
    </div>
  </div>
</template>

<script setup>
const carouselArr = ["/imgs/banner1.jpg", "/imgs/banner2.jpg", "/imgs/banner3.jpg"]
const recipeArr = [
  {
    "id": 27,
    "title": "家常面包",
    "imgUrl": "imgs/a.jpg",
    "categoryName": "面包",
    "nickName": "汤姆",
    "userImgUrl": "imgs/head.jpg"
  },
  {
    "id": 18,
    "title": "爆浆抹茶甜甜圈面包，自带幸福感的小甜甜",
    "imgUrl": "imgs/b.jpg",
    "categoryName": "家常菜",
    "nickName": "汤姆",
    "userImgUrl": "imgs/head.jpg"
  },
  {
    "id": 17,
    "title": "心形火龙果椰蓉面包,任谁都抗拒不了",
    "imgUrl": "imgs/c.jpg",
    "categoryName": "小食",
    "nickName": "汤姆",
    "userImgUrl": "imgs/head.jpg"
  },
  {
    "id": 16,
    "title": "蔓越莓绿豆糕，味道还不错值得一试!",
    "imgUrl": "imgs/d.jpg",
    "categoryName": "面包",
    "nickName": "汤姆",
    "userImgUrl": "imgs/head.jpg"
  },
]
</script>

<style scoped>
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-menu-item:hover{
  background: white !important;
  color:black !important;
}
</style>