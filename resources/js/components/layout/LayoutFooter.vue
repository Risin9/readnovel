<template>
  <!-- <el-container> -->
    <el-footer height="auto">
      <el-row>
        <el-col :span="4" class="grid-content bg-purple"></el-col>
        <el-col :span="16" class="grid-content">
          <div class="friend-link">
              <em>
                <a class="yuewen" href="//www.yuewen.com" target="_blank">阅文集团</a>
              <cite>旗下网站：</cite>
            </em>
        
            <span>
              <a v-for="friendLink in friendLinks" :href="friendLink.link" v-bind:key="friendLink.link" target="_blank">{{ friendLink.name }}</a>
            </span>
            <div class="footer-menu">
              <a v-for="menuInfo in footMenusInfo" :href="menuInfo.link" v-bind:key="menuInfo.link" target="_blank">{{ menuInfo.name }}</a>
            </div>

            <div class="copy-right">
              <p><span>Copyright © 2002-2019 www.readnovel.com All Rights Reserved</span>版权所有 北京网文欣阅科技有限公司</p>
              <p>北京网文欣阅科技有限公司 京ICP证100530号<a href="http://beian.miit.gov.cn/publish/query/indexFirst.action" target="_blank" style="margin: 0 5px">网站备案/许可证号：京ICP备11018996号-2</a>京网文[2013]0135-029</p>
              <p>请所有作者发布作品时务必遵守国家互联网信息管理办法规定，我们拒绝任何色情小说，一经发现，即作删除！客服电话：010-59357051</p>
              <p>联系方式 总机 010-83050798-6000 地址：北京市朝阳区天城天辰东路7号楼-2至8层101内北区7层701室</p>
              <p>本站所收录作品、社区话题、书库评论及本站所做之广告均属个人行为，与本站立场无关</p>
            </div>
          </div>

        </el-col>
        <el-col :span="16" class="grid-content bg-purple"></el-col>
      </el-row>
    </el-footer>
  <!-- </el-container> -->
</template>

<script>
export default {
    data() {
        return {
            msg: 'I\'m the app.Vue',
            searchData:'',
            friendLinks: [
              {
                name:'起点女生网',
                link:"https://www.qdmm.com/",
              },
              {
                name:'创世中文网',
                link:"http://chuangshi.qq.com/",
              },
              {
                name:'云起书院',
                link:"http://yunqi.qq.com/",
              },
              {
                name:'榕树下',
                link:"http://www.rongshuxia.com/",
              },
              {
                name:'红袖添香',
                link:"https://www.hongxiu.com",
              },
              {
                name:'小说阅读网',
                link:"https://www.readnovel.com",
              },
              {
                name:'言情小说吧',
                link:"https://www.xs8.cn",
              },
              {
                name:'潇湘书院',
                link:"http://www.xxsy.net",
              },
              {
                name:'天方听书网',
                link:"http://www.tingbook.com",
              },
              {
                name:'懒人听书',
                link:"http://www.lrts.me",
              },
              {
                name:'阅文悦读',
                link:"http://yuedu.yuewen.com",
              },
              {
                name:'QQ阅读',
                link:"https://www.yuewen.com/app.html#appqq",
              },
              {
                name:'起点读书',
                link:"https://www.yuewen.com/app.html#appqd",
              },
              {
                name:'作家助手',
                link:"https://www.yuewen.com/app.html#appzj",
              },
              {
                name:'起点中文网国际版',
                link:"https://www.webnovel.com",
              },
            ],
            footMenusInfo: [
              {
                name: '关于我们',
                link: 'https://www.yuewen.com'
              },
              {
                name: '联系我们',
                link: 'https://www.yuewen.com/#&contact'
              },
              {
                name: '帮助中心',
                link: 'https://www.readnovel.com/help?id=11017'
              },
              {
                name: '客服中心',
                link: 'https://www.yuewen.com/service.html'
              },
              {
                name: '加入我们',
                link: 'https://join.yuewen.com'
              },
              {
                name: '作家专区',
                link: 'https://write.qq.com/public/login.html?siteid=5'
              },
              {
                name: '动漫频道',
                link: 'http://comic.readnovel.com'
              },
              {
                name: '游戏频道',
                link: 'http://game.readnovel.com'
              },
              {
                name: '举报中心',
                link: 'https://jubao.yuewen.com'
              },
            ]

        }
    }
}
</script>

<style>


  .el-footer {
    width: 100%;
    text-align: center;
  }
  
  .el-col {
    border-radius: 4px;
  }
  /* .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  } */

  .grid-content {
    border-radius: 4px;
    min-height: 85px;
  }
  
  .friend-link,.friend-link span a,.footer-menu a{
    font-family: PingFangSC-Regular,'-apple-system',Simsun;
    font-size: 12px;
    line-height: 18px;
    margin-right: 16px;
    margin-bottom: 10px;
    color: #1a1a1a;
    display: inline-block;
  }
  em, a, cite {
    font-style: normal;
    margin:0 0;
    line-height:0;
  }
  .footer-menu a {
    color: #666;
  }
  .el-fotter .copy-right {
    padding-bottom: 20px;
  }
  .el-fotter .copy-right p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    margin: 0;
    padding: 0;
    color: #666;
  }

</style>