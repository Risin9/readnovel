<template>
    <el-header height="auto"> 
      <el-row>
        <el-col :span="4"><div class="grid-content"></div></el-col>
        <el-col :span="16" >
          <div>
              <el-row class="top-header">
                  <el-col :span="8" class="grid-content">
                  
                      <a href="http://readnoval.test/"><h1 class="logo"></h1></a>
                  <!-- <span class="my-icon-book"></span> -->
                  </el-col>
                  
                  <el-col :span="8" class="grid-content">
                    <!-- <el-input v-model="searchData" class="search-input" suffix-icon="my-icon-search"  placeholder="建设新时代"></el-input> -->
                    <el-input class="search-input" suffix-icon="my-icon-search"  placeholder="建设新时代"></el-input>
                  </el-col>
                  <el-col :span="8" class="grid-content">
                    <ul class="header-ul">
                      <li>
                        <span>
                          <!-- <span class="my-icon-book"></span> -->
                          <el-link href="#" icon="my-icon-book">我的书架</el-link>
                        </span>
                      </li>
                      <li >
                        <a href="javascript:">
                          <em class="my-icon-email"></em>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:">
                          <em class="my-icon-user"></em>
                        </a>
                      </li>
                    </ul>
                  </el-col>
              </el-row>
          </div>
          <div class="top-nav-wrap">
            <div class="left-nav">
              <el-menu mode="horizontal">
                <el-submenu  index="1-1">
                  <template slot="title">全部分类</template>
                  <!-- 全部分类 -->
                  <el-menu-item v-for="classify in bookClassify" :key="classify.index">{{classify.name}}</el-menu-item>
                </el-submenu >
                <el-menu-item v-for="classify in headerClassify" :key="classify.index">{{classify.name}}</el-menu-item>

              </el-menu> 
            </div>
            
            <div class="right-nav">
              <el-link href="#" icon="my-icon-money">充值</el-link>
              <!-- <i class="my-icon-money">充值</i> -->
              <el-link href="#" icon="my-icon-money">作家专区</el-link>
              <!-- <span>作家专区</span> -->
            </div>
          </div>
        </el-col>
        <el-col :span="4"><div class="grid-content"></div></el-col>
      </el-row>
    </el-header>

</template>

<script>
export default {
  name: 'html-header',
  data() {
      return {
        // bookClassify:[
        //   {index:'1-1',name:"现代言情12222"},
        //   {index:'1-2',name:"古代言情2"},
        //   {index:'1-3',name:"浪漫青春"},
        //   {index:'1-4',name:"玄幻言情"},
        //   {index:'1-5',name:"仙侠奇缘"},
        //   {index:'1-6',name:"悬疑"},
        //   {index:'1-7',name:"科幻空间"},
        //   {index:'1-8',name:"游戏竞技"},
        //   {index:'1-9',name:"短篇小说"},
        //   {index:'1-10',name:"轻小说"},
        // ],
        bookClassify : [],
        headerClassify:[
          {index:'2-1',name:"排行榜1"},
          {index:'2-2',name:"免费2"},
          {index:'2-3',name:"完本"},
          {index:'2-4',name:"现言青春"},
          {index:'2-5',name:"神秘幻想"},
        ]

      }
    },
  methods:{
    getBookClassify(){
      axios.get('/index/bookClassifySys')
        .then(response => {
          console.log(response);
            this.bookClassify = response;
        });
    }
  }
}
</script>

<style>

    body,li{
      font-size: 16px;
    }


    .el-header{
      background: #fefefe;
      width: 100%;
      box-shadow: 0 1px 4px rgba(0,0,0,.1);
      text-align: center;
  }

  
  .el-col {
    border-radius: 4px;
  }
  .el-row {
    /* margin-bottom: 20px;*/
    &:last-child {
      margin-bottom: 0;
    }
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    min-height: 85px;
  }
  .logo {
    width: 180px;
    height: 33px;
    margin-top: 26px;
    margin-right: 168px;
    background: url(/image/logo.d9db9.png) no-repeat;
  }
  h1 {
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }

  .search-input {
    /*border-radius: 30px;*/
    font: 14px/34px PingFangSC-Regular,'-apple-system',Simsun;
    /*width: 244px;
    height: 34px;*/
    width: auto;
    height: 34px;
    margin-top: 19px;
    padding: 0 10px 0 18px;
    border: 2px solid #ff3955;
    /*border-right: none;*/
    border-radius: 100px 100px;
    background: 0 0;
  }
  .search-input input {
    border: 0px solid transparent;
    width: 90%;
    height: 34px;
    margin-left: -5px;
  }
  .search-input .my-icon-search {
    zoom: 150%;
    display: block;
    width: 18px;
    margin: -8px auto;
  }
  .header-ul {
    display: block;
    list-style-type: disc;
    float: left;
    list-style: none outside none;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    margin: 23px 10px 0 95px;
    padding: 0;
  }
  .header-ul li{
    display: list-item;
    float: left;
    text-align: -webkit-match-parent;
    list-style: none outside none;
    margin-left: 20px;
  }
  .header-ul li .my-icon-book{
    zoom:170%;
  }
  .el-link {
    margin-bottom: 10px;
    text-decoration: none;
  }
  .el-link:link {
    color:  #ff3955;
    text-decoration: none;
  }
  .el-link:visited  {
    color:  #ff3955;
    text-decoration: none;
  }
  .el-link:hover {
    color:  #ff3955;
    text-decoration: none;
  }
  .my-icon-email {
    zoom: 170%;
  }
  .my-icon-user {
    zoom: 2;
    color:#d3dce6;
    padding-left: 5px; 
  }
  .top-nav-wrap {
    margin-top: -20px;
  }
  .top-nav-wrap .el-menu{
    font-size: 16px;
  }
 .top-nav-wrap .left-nav{
    display: block;
    width: 80%;
  }
  .top-nav-wrap .right-nav{
    display: block;
    float: right;
    height: 40px;
    width: 20%;
    border: 1px solid red;
    margin: -50px 0px 0px 116px;
    /*text-align: center;*/
    line-height: 40px;
    text-align: -webkit-match-parent;
  } 
  /**/

</style>