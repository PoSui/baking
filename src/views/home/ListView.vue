<template>
  <!--  -->
  <div style="width: 1200px;margin:0 auto;">

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

  </div>
</template>

<script setup>

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

.el-menu-item:hover{
  background: white !important;
  color:black !important;
}
</style>