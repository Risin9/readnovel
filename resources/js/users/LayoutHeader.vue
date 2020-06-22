<template>
  <el-row>
      <el-col :span="24">
          <el-image :src="image_url"></el-image>
          <el-divider class="header-divider"></el-divider>
      </el-col>
  </el-row>
</template>

<script>
export default {
    data() {
        return {
            image_url: '/image/logo.d9db9.png'
        }
    }
}
</script>

<style>
.el-divider{
    height: 2px;
    background-color:#fc4850;
}
.el-image{
    width: 133.5px;
    height: 28.86px;
    top: 20px;
    left: 30px;
    margin-bottom: 15px;
}
</style>