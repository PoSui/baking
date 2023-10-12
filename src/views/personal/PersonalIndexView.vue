<template>
  <el-card style="height: 500px">
    <el-form label-width="80px" style="width:500px">
      <el-form-item label="头像">
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
      <el-form-item label="昵称">
        <el-input placeholder="请输入昵称" size="large"></el-input>
      </el-form-item>
      <el-form-item label="用户名">
        <el-input placeholder="tom" disabled size="large"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="large">保存修改</el-button>
      </el-form-item>
    </el-form>

  </el-card>
</template>

<script setup>
import { ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'


const fileList = ref([
  {
    name: 'fcq',
    url: '/imgs/head.jpg' }
])

const dialogImageUrl = ref('')
const dialogVisible = ref(false)

const handleRemove = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles)
}

const handlePictureCardPreview= (uploadFile) => {
  dialogImageUrl.value = uploadFile.url
  dialogVisible.value = true
}
</script>

<style scoped>

</style>