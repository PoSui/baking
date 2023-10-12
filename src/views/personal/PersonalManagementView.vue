<template>
<el-card>
  <h1>稿件管理页面</h1>
  <el-radio-group v-model="type">
    <el-radio-button label="1">烘焙食谱</el-radio-button>
    <el-radio-button label="2">烘焙视频</el-radio-button>
    <el-radio-button label="3">行业资讯</el-radio-button>
  </el-radio-group>
  <el-button style="position: relative;top:3px;left:10px" type="success" @click="router.push('/post')">发布内容</el-button>
  <el-table :data="contentArr">
    <el-table-column type="index" label="编号" width="60px"></el-table-column>
    <el-table-column prop="title" label="标题" width="150px"></el-table-column>
    <el-table-column prop="brief" label="摘要" width="200px"></el-table-column>
    <el-table-column label="封面" width="80px">
      <template #default="scope">
        <img :src="scope.row.imgUrl" style="width: 75px"/>
      </template>
    </el-table-column>
    <el-table-column prop="categoryName" label="分类" ></el-table-column>
    <el-table-column prop="viewCount" label="浏览量"></el-table-column>
    <el-table-column prop="commentCount" label="评论量"></el-table-column>
    <el-table-column prop="createTime" label="发布时间" width="100px"></el-table-column>
    <el-table-column  label="操作" width="170px" fixed="right">
      <template #default="scope">
        <el-button type="success" @click="">编辑</el-button>
        <el-button type="danger" @click="">删除</el-button>
      </template>
    </el-table-column>

  </el-table>
</el-card>
</template>

<script setup>
  import {ref} from "vue";
  import router from "@/router";

  const type=ref(1);
  const contentArr = ref( [
    {
      "id": 11,
      "title": "入口即酥的超浓花生酱酥饼a",
      "brief": "花生酱+花生油=超浓郁花生香 没有糖粉，用了白砂糖 本是入口即酥 却又在酥后留下些许颗粒感 花生浓香",
      "imgUrl": "imgs/a.jpg",
      "type": 1,
      "categoryName": "家常菜",
      "viewCount": 8,
      "commentCount": 0,
      "createTime": "2023/03/27 19:51:45"
    },
    {
      "id": 12,
      "title": "枣泥花式面包,好吃到爆",
      "brief": "之前做了枣泥馅，配上花式面包，好吃到爆。 枣泥花式面包的用料 肉松面包面团 见肉松面包配方，枣泥",
      "imgUrl": "imgs/b.jpg",
      "type": 1,
      "categoryName": "面包",
      "viewCount": 1,
      "commentCount": 0,
      "createTime": "2023/03/28 16:12:42"
    },
    {
      "id": 13,
      "title": "酥脆培根吐司芝士卷，人见人爱",
      "brief": "人见人爱的培根平时一般都是放吐司里面做三文治吃今天培根要露脸啦哈哈哈哈简单快手酥脆可口的培根吐司芝士",
      "imgUrl": "imgs/c.jpg",
      "type": 1,
      "categoryName": "家常菜",
      "viewCount": 1,
      "commentCount": 0,
      "createTime": "2023/03/28 16:15:43"
    },
    {
      "id": 14,
      "title": "开放式三明治,一份小清新快手早餐",
      "brief": " 昨夜下了很怕人的骤雨，清晨办公桌上的薄荷微微抖动它的叶子。一份小清新快手早餐，让生活简洁不简单。 ",
      "imgUrl": "imgs/d.jpg",
      "type": 1,
      "categoryName": "小食",
      "viewCount": 1,
      "commentCount": 0,
      "createTime": "2023/03/28 16:16:24"
    },
    {
      "id": 15,
      "title": "核桃葡萄干软欧：蔓越莓种面",
      "brief": "干，来款核桃葡萄干软欧吧！核桃是个宝，好处太多，不一一列举啦！ 蔓越莓种面的用料 主面团， 蔓越",
      "imgUrl": "imgs/a.jpg",
      "type": 1,
      "categoryName": "面包",
      "viewCount": 2,
      "commentCount": 0,
      "createTime": "2023/03/28 16:16:56"
    },
    {
      "id": 16,
      "title": "蔓越莓绿豆糕，味道还不错值得一试!",
      "brief": "全家都很喜欢吃绿豆糕，但楼下甜品店的绿豆糕太甜了，那就自己动手做吧。之前尝试过带皮绿豆，颜色做出来没",
      "imgUrl": "imgs/b.jpg",
      "type": 1,
      "categoryName": "面包",
      "viewCount": 4,
      "commentCount": 0,
      "createTime": "2023/03/28 16:17:35"
    },
    {
      "id": 17,
      "title": "心形火龙果椰蓉面包,任谁都抗拒不了",
      "brief": "椰蓉的香味 任谁都抗拒不了吧正好还有半个红心火龙果做成了***嫩的小爱心面包可爱又好吃可以做9个。 ",
      "imgUrl": "imgs/c.jpg",
      "type": 1,
      "categoryName": "小食",
      "viewCount": 15,
      "commentCount": 1,
      "createTime": "2023/03/28 16:18:12"
    },
    {
      "id": 18,
      "title": "爆浆抹茶甜甜圈面包，自带幸福感的小甜甜",
      "brief": "爆浆抹茶甜甜圈面包好吃的起飞的爆浆抹茶甜甜圈，从里到外被抹茶包裹着，自带幸福感的小甜甜，抹茶控们完全",
      "imgUrl": "imgs/d.jpg",
      "type": 1,
      "categoryName": "家常菜",
      "viewCount": 15,
      "commentCount": 1,
      "createTime": "2023/03/28 16:20:26"
    }
  ]);
</script>

<style scoped>

</style>