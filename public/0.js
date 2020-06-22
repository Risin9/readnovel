(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/index/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/index/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Recommend_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Recommend.vue */ "./resources/js/index/Recommend.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    username: function username() {
      // 我们很快就会看到 `params` 是什么
      console.log(this.$route.params.username);
      return this.$route.params.username;
    }
  },
  data: function data() {
    return {
      tableData: [{
        adData: '[公告] index'
      }, {
        adData: '[公告] 2222222222222'
      }, {
        adData: '[公告] 333333333333'
      }, {
        adData: '[公告] 444444444'
      }]
    };
  },
  methods: {
    goBack: function goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
    }
  },
  components: {
    RecommendComponent: _Recommend_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/index/Recommend.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/index/Recommend.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import booklistli from './BookListLi'
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {// booklistli
  },
  data: function data() {
    return {
      bookInfo: [{
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
      }, {
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
      }, {
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
      }, {
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
      }, {
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
      }],
      bookList: [{
        bookId: 1,
        bookTag: '现代言情',
        bookSummary: '失业之后我继承了亿万家业',
        bookURL: '/###'
      }, {
        bookId: 2,
        bookTag: '现代言情',
        bookSummary: '穿成偏执反派的小仙女',
        bookURL: '/###'
      }, {
        bookId: 3,
        bookTag: '现代言情',
        bookSummary: '我被八个大佬争着宠',
        bookURL: '/###'
      }, {
        bookId: 4,
        bookTag: '现代言情',
        bookSummary: '在国民男神心尖上放肆撒野',
        bookURL: '/###'
      }, {
        bookId: 5,
        bookTag: '现代言情',
        bookSummary: '穿书之女配只想修仙',
        bookURL: '/###'
      }, {
        bookId: 6,
        bookTag: '现代言情',
        bookSummary: '重生之最佳再婚',
        bookURL: '/###'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/index/Index.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/index/Index.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.bg-purple {\n  background: #d3dce6;\n}\n.el-main {\n  /* background-color: #E9EEF3; */\n  /* color: #333; */\n  text-align: center;\n  height: auto;\n}\n.grid-content {\n  border-radius: 4px;\n  min-height: 85px;\n}\n.el-carousel__item {\n  background-color: red;\n}\n.left-wrap {\n  width:655px;\n  float:left;\n}\n.right-wrap {\n  width:205px;\n  float:right;\n}\n/* .focus-slider-wrap {\n  width:70%;\n  float:left;\n} */\n.focus-notice-wrap{\n  width:205px;\n  float:right\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/index/Recommend.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/index/Recommend.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.grid-content {\n    border-radius: 4px;\n    min-height: 85px;\n    /* background-color: red; */\n}\n.left-wrap {\n    width:675px;\n    float:left;\n}\n.right-wrap {\n    width:30%;\n    float:right\n}\nh3 {\n    font: 700 20px/1 PingFangSC-Regular,HelveticaNeue-Light,'Helvetica Neue Light','Microsoft YaHei',sans-serif;\n    text-align:left;\n    margin:0;\n    padding:0;\n}\n.left-wrap h3 {\n    font: 700 20px/1 PingFangSC-Regular,HelveticaNeue-Light,'Helvetica Neue Light','Microsoft YaHei',sans-serif;\n    padding-bottom: 12px;\n    border-bottom: 1px solid #1a1a1a;\n}\nli, ol, ul {\n  list-style: none outside none;\n  text-align: left;\n  margin-top: -4px;\n}\n.type-new-list li {\n    float: left;\n    width: 225px;\n    margin-right: 20px;\n    padding: 23px 0;\n    margin-left: -40px;\n}\n.book-img {\n  width: 72px;\n  height: 96px;\n  margin-right: 12px;\n  border: 1px solid #e6e6e6;\n  float: left;\n}\n.type-new-list li .book-info {\n  width: 130px;\n  float: left;\n}\n.type-new-list li .book-info p{\n  word-wrap: break-word;\n  word-break: break-all;\n  font: 12px/20px PingFangSC-Regular,'-apple-system',Simsun;\n  overflow: hidden;\n  height: 40px;\n  margin-bottom: 10px;\n  color: #666;\n}\n.type-new-list li .book-info h4 {\n\toverflow: hidden;\n\theight: 21px;\n\tmargin-top: -3px;\n\tmargin-bottom: 8px;\n}\nh4 a{\n  text-decoration: none;\n  color: #262626;\n  outline: 0;\n}\n.book-tag i {\n  float: right;\n  overflow: hidden;\n  max-width: 52px;\n  height: 18px;\n  padding: 0 3px;\n  text-align: center;\n  color: #a6a6a6;\n  border: 1px solid #e7e7e7;\n  border-radius: 1px;\n  font-style: normal;\n  font-size: 12px;\n  line-height: 18px;\n}\n.book-tag .author{\n  display: block;\n  overflow: hidden;\n  height: 18px;\n  margin-top: 1px;\n  padding-right: 10px;\n  white-space: nowrap;\n  color: #a6a6a6;\n  -webkit-transition: color .3s,background-color .3s,border .3s;\n  transition: color .3s,background-color .3s,border .3s;\n  cursor: text;\n\tfont-family: PingFangSC-Regular,'-apple-system',Simsun;\n\tfont-size: 12px;\n\tline-height: 18px;\n  text-align: left;\n}\nli, ol, ul {\n\tlist-style: none outside none;\n}\n.book-list li:first-child{\n      border-top: none;\n}\n.book-list li{\n  height: 31px;\n  border-top: 1px solid #e6e6e6;\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/index/Index.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/index/Index.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/index/Index.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/index/Recommend.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/index/Recommend.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Recommend.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/index/Recommend.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/index/Index.vue?vue&type=template&id=dc1610b2&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/index/Index.vue?vue&type=template&id=dc1610b2& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-main",
        [
          _c(
            "el-row",
            [
              _c("el-col", { attrs: { span: 4 } }, [
                _c("div", { staticClass: "grid-content" })
              ]),
              _vm._v(" "),
              _c("el-col", { attrs: { span: 16 } }, [
                _c("div", { staticClass: "left-wrap" }, [
                  _c(
                    "div",
                    { staticClass: "inline-block focus-slider-wrap" },
                    [
                      _c(
                        "el-carousel",
                        { attrs: { height: "150px", width: "300px;" } },
                        _vm._l(4, function(item) {
                          return _c("el-carousel-item", { key: item }, [
                            _c("h3", { staticClass: "small" }, [
                              _vm._v(_vm._s(item))
                            ])
                          ])
                        }),
                        1
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "right-wrap" }, [
                  _c(
                    "div",
                    { staticClass: "inline-block focus-notice-wrap" },
                    [
                      _c(
                        "el-table",
                        { attrs: { data: _vm.tableData } },
                        [
                          _c("el-table-column", {
                            attrs: { prop: "adData", label: "公告" }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ])
              ]),
              _vm._v(" "),
              _c("el-col", { attrs: { span: 4 } }, [
                _c("div", { staticClass: "grid-content" })
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", [_c("recommend-Component")], 1)
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/index/Recommend.vue?vue&type=template&id=612217de&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/index/Recommend.vue?vue&type=template&id=612217de& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("el-main", [
        _c(
          "div",
          { staticClass: "index-book-wrap type-new-list" },
          [
            _c(
              "el-row",
              [
                _c("el-col", { attrs: { span: 4 } }, [
                  _c("div", { staticClass: "grid-content" })
                ]),
                _vm._v(" "),
                _c("el-col", { attrs: { span: 16 } }, [
                  _c("div", { staticClass: "left-wrap" }, [
                    _c("h3", [_vm._v("热门推荐")]),
                    _vm._v(" "),
                    _c("div"),
                    _vm._v(" "),
                    _c(
                      "ul",
                      _vm._l(_vm.bookInfo, function(book) {
                        return _c("li", { key: book.bookId }, [
                          _c("div", { staticClass: "book-img" }, [
                            _c("a", { attrs: { href: book.bookURL } }, [
                              _c("img", {
                                attrs: { src: book.bookImg, alt: book.bookName }
                              })
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "book-info" }, [
                            _c("h4", [
                              _c(
                                "a",
                                { attrs: { href: "", target: "_blank" } },
                                [_vm._v(_vm._s(book.bookName))]
                              )
                            ]),
                            _vm._v(" "),
                            _c("p", [_vm._v(_vm._s(book.bookSummary))]),
                            _vm._v(" "),
                            _c("div", { staticClass: "book-tag" }, [
                              _c("p", { staticClass: "author" }, [
                                _vm._v(_vm._s(book.bookAuthor))
                              ]),
                              _vm._v(" "),
                              _c("i", [_vm._v(_vm._s(book.bookTag))])
                            ])
                          ])
                        ])
                      }),
                      0
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "right-wrap" }, [
                    _c("h3", [_vm._v("本周强推")]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "book-list",
                        staticStyle: { "txt-align": "left" }
                      },
                      [
                        _c(
                          "ul",
                          _vm._l(_vm.bookList, function(book) {
                            return _c("li", { key: book.bookId }, [
                              _c(
                                "a",
                                {
                                  attrs: {
                                    href: book.bookURL,
                                    target: "_blank"
                                  }
                                },
                                [
                                  _c(
                                    "em",
                                    {
                                      staticStyle: {
                                        "font-style": "normal",
                                        "font-size": "12px"
                                      }
                                    },
                                    [_vm._v("「")]
                                  ),
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(book.bookTag) +
                                      "\n                        "
                                  ),
                                  _c(
                                    "em",
                                    { staticStyle: { "font-style": "normal" } },
                                    [_vm._v("」")]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  attrs: {
                                    href: "http://",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    style22:
                                      "overflow: hidden;text-overflow: ellipsis;white-space: nowrap;max-width: 154px;float: left;"
                                  }
                                },
                                [_vm._v(_vm._s(book.bookSummary))]
                              )
                            ])
                          }),
                          0
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("el-col", { attrs: { span: 4 } }, [
                  _c("div", { staticClass: "grid-content" })
                ])
              ],
              1
            )
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/index/Index.vue":
/*!**************************************!*\
  !*** ./resources/js/index/Index.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_dc1610b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=dc1610b2& */ "./resources/js/index/Index.vue?vue&type=template&id=dc1610b2&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/index/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&lang=css& */ "./resources/js/index/Index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_dc1610b2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_dc1610b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/index/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/index/Index.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/index/Index.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/index/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/index/Index.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************!*\
  !*** ./resources/js/index/Index.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/index/Index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/index/Index.vue?vue&type=template&id=dc1610b2&":
/*!*********************************************************************!*\
  !*** ./resources/js/index/Index.vue?vue&type=template&id=dc1610b2& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_dc1610b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=dc1610b2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/index/Index.vue?vue&type=template&id=dc1610b2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_dc1610b2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_dc1610b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/index/Recommend.vue":
/*!******************************************!*\
  !*** ./resources/js/index/Recommend.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Recommend_vue_vue_type_template_id_612217de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Recommend.vue?vue&type=template&id=612217de& */ "./resources/js/index/Recommend.vue?vue&type=template&id=612217de&");
/* harmony import */ var _Recommend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Recommend.vue?vue&type=script&lang=js& */ "./resources/js/index/Recommend.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Recommend_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Recommend.vue?vue&type=style&index=0&lang=css& */ "./resources/js/index/Recommend.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Recommend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Recommend_vue_vue_type_template_id_612217de___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Recommend_vue_vue_type_template_id_612217de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/index/Recommend.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/index/Recommend.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/index/Recommend.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Recommend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Recommend.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/index/Recommend.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Recommend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/index/Recommend.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************!*\
  !*** ./resources/js/index/Recommend.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Recommend_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Recommend.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/index/Recommend.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Recommend_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Recommend_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Recommend_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Recommend_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Recommend_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/index/Recommend.vue?vue&type=template&id=612217de&":
/*!*************************************************************************!*\
  !*** ./resources/js/index/Recommend.vue?vue&type=template&id=612217de& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Recommend_vue_vue_type_template_id_612217de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Recommend.vue?vue&type=template&id=612217de& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/index/Recommend.vue?vue&type=template&id=612217de&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Recommend_vue_vue_type_template_id_612217de___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Recommend_vue_vue_type_template_id_612217de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);