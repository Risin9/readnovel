<template>
    <div>
        <el-main>
          <div class="index-book-wrap type-new-list">
            <el-row>
                <el-col :span=4><div class="grid-content"></div></el-col>
                <el-col :span=16>
                  <div class="left-wrap">
                    <h3>热门推荐</h3>
                    <div></div>
                    <ul>
                      <li v-for="book in bookInfo" v-bind:key="book.bookId">
                        <div class="book-img">
                          <a :href="book.bookURL">
                            <img :src="book.bookImg" :alt="book.bookName"/>
                          </a>
                        </div>
                        <div class="book-info">
                          <h4>
                            <a href="" target="_blank">{{book.bookName}}</a>
                          </h4>
                          <p>{{book.bookSummary}}</p>
                          <div class="book-tag">
                            <p class="author">{{book.bookAuthor}}</p>
                            <i>{{book.bookTag}}</i>
                            <!-- <a href="" target="_blank"></a> -->
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="right-wrap">
                    <h3>本周强推</h3>
                    <div class="book-list" style="txt-align:left;">
                      <!-- <booklistli-Component></booklistli-Component> -->
                      <ul>
                        <li v-for="book in bookList" v-bind:key="book.bookId">
                          <a :href="book.bookURL" target="_blank">
                            <em style="font-style:normal;font-size:12px">「</em>
                            {{book.bookTag}}
                            <em style="font-style:normal;">」</em>
                          </a>
                          <a href="http://" target="_blank" rel="noopener noreferrer" style22="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;max-width: 154px;float: left;">{{book.bookSummary}}</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </el-col>
                <el-col :span=4><div class="grid-content"></div></el-col>
            </el-row>
          </div>
        </el-main>
    </div>
</template>

<script>
// import booklistli from './BookListLi'
export default {
    components:{
      // booklistli
    },
     data() {
        return {
          bookInfo: [
            {
              bookId: '1',
              bookName: '帝妃凰图111',
              bookImg: '/image/90.jpg',
              bookURL: '/image/90.jpg',
              bookSummary: '南姒是个让人又爱又恨的人，被皇上宠得无法无天。堂堂男儿仗着一张祸国殃民的脸去当祸水，\
              让皇上陷入魔障似的空置六宫，简直孰不可忍！云雨之后，吃饱餍足的帝王温软慵懒开口：“南姒，做朕的皇后。\
              ”南姒单膝跪地，声线清冷：“皇上是天上云，臣是地下泥，尘泥登不上九霄。”帝王好心情顷刻间烟消云散：“……”被群臣劝谏选秀时，\
              帝王软声相商：“南姒，做朕的皇后。”南姒不为所动：“皇上是天上云，臣是地下泥，尘泥登不上九霄',
              bookAuthor: 'Risin9',
              bookTag: '古代言情'
            }, 
            {
              bookId: '2',
              bookName: '帝妃凰图2',
              bookImg: '/image/90.jpg',
              bookURL: '/image/90.jpg',
              bookSummary: '南姒是个让人又爱又恨的人，被皇上宠得无法无天。堂堂男儿仗着一张祸国殃民的脸去当祸水，\
              让皇上陷入魔障似的空置六宫，简直孰不可忍！云雨之后，吃饱餍足的帝王温软慵懒开口：“南姒，做朕的皇后。\
              ”南姒单膝跪地，声线清冷：“皇上是天上云，臣是地下泥，尘泥登不上九霄。”帝王好心情顷刻间烟消云散：“……”被群臣劝谏选秀时，\
              帝王软声相商：“南姒，做朕的皇后。”南姒不为所动：“皇上是天上云，臣是地下泥，尘泥登不上九霄',
              bookAuthor: 'Risin9',
              bookTag: '古代言情'
            }, 
            {
              bookId: '3',
              bookName: '帝妃凰图3',
              bookImg: '/image/90.jpg',
              bookURL: '/image/90.jpg',
              bookSummary: '南姒是个让人又爱又恨的人，被皇上宠得无法无天。堂堂男儿仗着一张祸国殃民的脸去当祸水，\
              让皇上陷入魔障似的空置六宫，简直孰不可忍！云雨之后，吃饱餍足的帝王温软慵懒开口：“南姒，做朕的皇后。\
              ”南姒单膝跪地，声线清冷：“皇上是天上云，臣是地下泥，尘泥登不上九霄。”帝王好心情顷刻间烟消云散：“……”被群臣劝谏选秀时，\
              帝王软声相商：“南姒，做朕的皇后。”南姒不为所动：“皇上是天上云，臣是地下泥，尘泥登不上九霄',
              bookAuthor: 'Risin9',
              bookTag: '古代言情'
            }, 
            {
              bookId: '4',
              bookName: '帝妃凰图4',
              bookImg: '/image/90.jpg',
              bookURL: '/image/90.jpg',
              bookSummary: '南姒是个让人又爱又恨的人，被皇上宠得无法无天。堂堂男儿仗着一张祸国殃民的脸去当祸水，\
              让皇上陷入魔障似的空置六宫，简直孰不可忍！云雨之后，吃饱餍足的帝王温软慵懒开口：“南姒，做朕的皇后。\
              ”南姒单膝跪地，声线清冷：“皇上是天上云，臣是地下泥，尘泥登不上九霄。”帝王好心情顷刻间烟消云散：“……”被群臣劝谏选秀时，\
              帝王软声相商：“南姒，做朕的皇后。”南姒不为所动：“皇上是天上云，臣是地下泥，尘泥登不上九霄',
              bookAuthor: 'Risin9',
              bookTag: '古代言情'
            }, 
            {
              bookId: '5',
              bookName: '帝妃凰图5',
              bookImg: '/image/90.jpg',
              bookURL: '/image/90.jpg',
              bookSummary: '南姒是个让人又爱又恨的人，被皇上宠得无法无天。堂堂男儿仗着一张祸国殃民的脸去当祸水，\
              让皇上陷入魔障似的空置六宫，简直孰不可忍！云雨之后，吃饱餍足的帝王温软慵懒开口：“南姒，做朕的皇后。\
              ”南姒单膝跪地，声线清冷：“皇上是天上云，臣是地下泥，尘泥登不上九霄。”帝王好心情顷刻间烟消云散：“……”被群臣劝谏选秀时，\
              帝王软声相商：“南姒，做朕的皇后。”南姒不为所动：“皇上是天上云，臣是地下泥，尘泥登不上九霄',
              bookAuthor: 'Risin9',
              bookTag: '古代言情'
            }, 
          ],
          bookList:[
            {
              bookId: 1,
              bookTag: '现代言情',
              bookSummary: '失业之后我继承了亿万家业',
              bookURL: '/###'
            },
            {
              bookId: 2,
              bookTag: '现代言情',
              bookSummary: '穿成偏执反派的小仙女',
              bookURL: '/###'
            },
            {
              bookId: 3,
              bookTag: '现代言情',
              bookSummary: '我被八个大佬争着宠',
              bookURL: '/###'
            },
            {
              bookId: 4,
              bookTag: '现代言情',
              bookSummary: '在国民男神心尖上放肆撒野',
              bookURL: '/###'
            },
            {
              bookId: 5,
              bookTag: '现代言情',
              bookSummary: '穿书之女配只想修仙',
              bookURL: '/###'
            },
            {
              bookId: 6,
              bookTag: '现代言情',
              bookSummary: '重生之最佳再婚',
              bookURL: '/###'
            },
          ]
        }
      }
}
</script>
<style>
  .grid-content {
    border-radius: 4px;
    min-height: 85px;
    /* background-color: red; */
  }
  .left-wrap {
    width:675px;
    float:left;
  }
  .right-wrap {
    width:30%;
    float:right
  }
  h3 {
    font: 700 20px/1 PingFangSC-Regular,HelveticaNeue-Light,'Helvetica Neue Light','Microsoft YaHei',sans-serif;
    text-align:left;
    margin:0;
    padding:0;
  }
  .left-wrap h3 {
    font: 700 20px/1 PingFangSC-Regular,HelveticaNeue-Light,'Helvetica Neue Light','Microsoft YaHei',sans-serif;
    padding-bottom: 12px;
    border-bottom: 1px solid #1a1a1a;
}
  li, ol, ul {
  list-style: none outside none;
  text-align: left;
  margin-top: -4px;
}
  .type-new-list li {
    float: left;
    width: 225px;
    margin-right: 20px;
    padding: 23px 0;
    margin-left: -40px;
  }
  .book-img {
  width: 72px;
  height: 96px;
  margin-right: 12px;
  border: 1px solid #e6e6e6;
  float: left;
}
.type-new-list li .book-info {
  width: 130px;
  float: left;
}
.type-new-list li .book-info p{
  word-wrap: break-word;
  word-break: break-all;
  font: 12px/20px PingFangSC-Regular,'-apple-system',Simsun;
  overflow: hidden;
  height: 40px;
  margin-bottom: 10px;
  color: #666;
}
  .type-new-list li .book-info h4 {
	overflow: hidden;
	height: 21px;
	margin-top: -3px;
	margin-bottom: 8px;
}
h4 a{
  text-decoration: none;
  color: #262626;
  outline: 0;
}
.book-tag i {
  float: right;
  overflow: hidden;
  max-width: 52px;
  height: 18px;
  padding: 0 3px;
  text-align: center;
  color: #a6a6a6;
  border: 1px solid #e7e7e7;
  border-radius: 1px;
  font-style: normal;
  font-size: 12px;
  line-height: 18px;
}
.book-tag .author{
  display: block;
  overflow: hidden;
  height: 18px;
  margin-top: 1px;
  padding-right: 10px;
  white-space: nowrap;
  color: #a6a6a6;
  transition: color .3s,background-color .3s,border .3s;
  cursor: text;
	font-family: PingFangSC-Regular,'-apple-system',Simsun;
	font-size: 12px;
	line-height: 18px;
  text-align: left;
}

li, ol, ul {
	list-style: none outside none;
}
.book-list li:first-child{
      border-top: none;
}
.book-list li{
  height: 31px;
  border-top: 1px solid #e6e6e6;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
</style>