<template>
    <div>
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
</template>

<style>
ul {
    list-style: none outside none;
    text-align: left;
    margin-top: -4px;
}

</style>

<script>
export default {
    data() {
        return {
            bookInfo: [
            {
              bookId: '1',
              bookName: '帝妃凰图1',
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
          ]
        }
    },
}
</script>