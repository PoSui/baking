<template>
  <el-card>
  <h1 style="color:orange">发布内容页面</h1>
  <el-form label-width="80px">
    <el-form-item label="文章标题">
      <el-input placeholder="请输入文章标题" v-model="c.title"></el-input>
    </el-form-item>
    <el-form-item label="文章分类">
      <el-radio-group v-model="c.type">
        <el-radio-button label="1">食谱</el-radio-button>
        <el-radio-button label="2">视频</el-radio-button>
        <el-radio-button label="3">资讯</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="二级分类">
      <el-select v-model="c.categoryId">
        <el-option label="面包" value="1"></el-option>
        <el-option label="蛋糕" value="2"></el-option>
        <el-option label="家常菜" value="3"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="封面">
      <!--上传组件开始-->
      <el-upload
          v-model:file-list="fileList"
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
      >
        <el-icon>
          <Plus/>
        </el-icon>
      </el-upload>

      <el-dialog v-model="dialogVisible">
        <img w-full :src="dialogImageUrl" alt="Preview Image"/>
      </el-dialog>
      <!--上传组件结束-->
    </el-form-item>
    <el-form-item label="文章内容"></el-form-item>
    <el-form-item>
      <el-button type="primary">发布内容</el-button>
    </el-form-item>
  </el-form>
  </el-card>
</template>

<script setup>
import {ref} from 'vue';
//和页面元素绑定的内容对象
const c = ref({title: "", type: "1", categoryId: "1"})


//上传
const fileList = ref([])

const dialogImageUrl = ref('')
const dialogVisible = ref(false)

const handleRemove = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles)
}

const handlePictureCardPreview= (uploadFile) => {
  dialogImageUrl.value = uploadFile.url
  dialogVisible.value = true
}
//上传结束
</script>

<style scoped>

</style>