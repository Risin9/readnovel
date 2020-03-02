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
                        <div class="book-img"></div>
                        <div class="book-info">
                          <h4>
                            <a href="" target="_blank">{{book.bookName}}</a>
                          </h4>
                          <p>{{book.bookSummary}}</p>
                          <div class="boox-tag">

                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </el-col>
                <el-col :span=4><div class="grid-content"></div></el-col>
            </el-row>
          </div>
          <div class="right-wrap">
            <div class="book-list-wrap">
              <el-row>
                <el-col>
                  
                </el-col>
              </el-row>
            </div>
            
          </div>
        </el-main>
    </div>
</template>

<script>
export default {
     data() {
        return {
          bookInfo: [
            {
            bookId: '1',
            bookName: '帝妃凰图1',
            bookImg: '/public/image/90.jpg',
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
            bookImg: '/public/image/90.jpg',
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
            bookImg: '/public/image/90.jpg',
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
            bookImg: '/public/image/90.jpg',
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
            bookImg: '/public/image/90.jpg',
            bookSummary: '南姒是个让人又爱又恨的人，被皇上宠得无法无天。堂堂男儿仗着一张祸国殃民的脸去当祸水，\
            让皇上陷入魔障似的空置六宫，简直孰不可忍！云雨之后，吃饱餍足的帝王温软慵懒开口：“南姒，做朕的皇后。\
            ”南姒单膝跪地，声线清冷：“皇上是天上云，臣是地下泥，尘泥登不上九霄。”帝王好心情顷刻间烟消云散：“……”被群臣劝谏选秀时，\
            帝王软声相商：“南姒，做朕的皇后。”南姒不为所动：“皇上是天上云，臣是地下泥，尘泥登不上九霄',
            bookAuthor: 'Risin9',
            bookTag: '古代言情'
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
</style>