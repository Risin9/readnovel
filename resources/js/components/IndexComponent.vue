<template>
<div>
  <el-main>
    <el-row>
      <el-col :span="4"> <div class="grid-content"></div></el-col>
      <el-col :span="16">
        <!-- <el-row class="top-header"> -->
          <div class="inline-block" style="width:70%;float:left;">
            <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
            <el-carousel height="150px" width="300px;">
              <el-carousel-item v-for="item in 4" :key="item">
                <h3 class="small">{{ item }}</h3>
              </el-carousel-item>
            </el-carousel>
          </div>
        <div class="inline-block" style="width:30%;float:right">
          <el-table :data="tableData">
            <el-table-column prop="adData" label="公告"></el-table-column>
          </el-table>
        </div>
      </el-col>
      <el-col :span="4"><div class="grid-content"></div></el-col>
    </el-row>

  </el-main>
  <div>
    <recommend-Component></recommend-Component>
  </div>
</div>
  
    
</template>
<script>
import RecommendComponent from './RecommendComponent.vue'
export default {
    computed: {
    username() {
      // 我们很快就会看到 `params` 是什么
      console.log(this.$route.params.username)
      return this.$route.params.username
    }
  },
  data() {
    return {
      tableData:[
        {
          adData:'[公告] 11111111111'
        },
        {
          adData:'[公告] 2222222222222'
        },
        {
          adData:'[公告] 333333333333'
        },
        {
          adData:'[公告] 444444444'
        }
      ]
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  },
  components: {
    RecommendComponent
  }
}
</script>

<style>
  .bg-purple {
    background: #d3dce6;
  }
  .el-main {
    /* background-color: #E9EEF3; */
    /* color: #333; */
    text-align: center;
    height: auto;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 85px;
  }
  .el-carousel__item {
    background-color: red;
  }
</style>