(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/plugins/Draggable.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/plugins/Draggable.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_mq__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-mq */ "./node_modules/vue-mq/dist/vue-mq.es.js");
/* harmony import */ var vue_resize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-resize */ "./node_modules/vue-resize/dist/vue-resize.esm.js");
/* harmony import */ var vue_resize_dist_vue_resize_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-resize/dist/vue-resize.css */ "./node_modules/vue-resize/dist/vue-resize.css");
/* harmony import */ var vue_resize_dist_vue_resize_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_resize_dist_vue_resize_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue_grid_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-grid-layout */ "./node_modules/vue-grid-layout/dist/vue-grid-layout.common.js");
/* harmony import */ var vue_grid_layout__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_grid_layout__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_layouts */ "./resources/js/src/views/plugins/_layouts.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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






var GridLayout = vue_grid_layout__WEBPACK_IMPORTED_MODULE_5__["GridLayout"];
var GridItem = vue_grid_layout__WEBPACK_IMPORTED_MODULE_5__["GridItem"];
var breakpoints = {
  xs: 575,
  sm: 767,
  md: 991,
  lg: 1199,
  xl: Infinity
};
var gridCols = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 3,
  xl: 3
};
var localStorageKey = 'CoreUI-Vue-Draggable-Layouts';
vue__WEBPACK_IMPORTED_MODULE_1___default.a.use(vue_mq__WEBPACK_IMPORTED_MODULE_2__["default"], {
  breakpoints: breakpoints,
  defaultBreakpoint: 'xs'
});
vue__WEBPACK_IMPORTED_MODULE_1___default.a.component('resize-observer', vue_resize__WEBPACK_IMPORTED_MODULE_3__["ResizeObserver"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Draggable',
  components: {
    GridLayout: GridLayout,
    GridItem: GridItem
  },
  data: function data() {
    return {
      layouts: JSON.parse(localStorage.getItem(localStorageKey) || JSON.stringify(_layouts__WEBPACK_IMPORTED_MODULE_6__["default"])),
      gridCols: gridCols,
      margin: [10, 10],
      rowHeight: 1
    };
  },
  mounted: function mounted() {
    this.$nextTick( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.updateLayout();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));
  },
  computed: {
    mqCols: function mqCols() {
      var mq = this.$mq;
      return this.gridCols[mq];
    },
    mqLayout: function mqLayout() {
      var mq = this.$mq;
      var layouts = this.layouts;
      return layouts[mq];
    }
  },
  methods: {
    handleResize: function () {
      var _handleResize = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(item) {
        var mq, layout, size;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                mq = this.$mq;
                layout = this.layouts[mq][item.i];

                if (!layout) {
                  _context2.next = 8;
                  break;
                }

                _context2.next = 5;
                return this.getSize(item.i);

              case 5:
                size = _context2.sent;
                layout.h = Math.round((size.height - this.rowHeight) / 10);
                this.updateLayout();

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function handleResize(_x) {
        return _handleResize.apply(this, arguments);
      }

      return handleResize;
    }(),
    getSize: function () {
      var _getSize = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(itemId) {
        var card, height, width;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return document.getElementById("coreui-dnd-card-no-".concat(itemId));

              case 2:
                card = _context3.sent;
                height = parseInt(window.getComputedStyle(card).getPropertyValue('height'), 10);
                width = parseInt(window.getComputedStyle(card).getPropertyValue('width'), 10);
                return _context3.abrupt("return", {
                  height: height,
                  width: width
                });

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getSize(_x2) {
        return _getSize.apply(this, arguments);
      }

      return getSize;
    }(),
    layoutUpdatedEvent: function layoutUpdatedEvent()
    /*newLayout*/
    {
      localStorage.setItem(localStorageKey, JSON.stringify(this.layouts));
    },
    resetLayout: function resetLayout() {
      this.layouts = JSON.parse(JSON.stringify(_layouts__WEBPACK_IMPORTED_MODULE_6__["default"]));
      localStorage.removeItem(localStorageKey);
      this.updateLayout();
    },
    updateLayout: function updateLayout() {
      this.$refs.coreuiGridLayout.layoutUpdate();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/plugins/Draggable.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/plugins/Draggable.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.main {\r\n  overflow: hidden;\n}\n.vue-grid-item.vue-grid-placeholder {\r\n  background: gray!important;\r\n  border: thin dashed!important;\n}\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n.vue-grid-item .card.flex-fill {\r\n    display: block;\n}\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/plugins/Draggable.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/plugins/Draggable.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Draggable.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/plugins/Draggable.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/plugins/Draggable.vue?vue&type=template&id=786cf924&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/plugins/Draggable.vue?vue&type=template&id=786cf924& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
    { staticClass: "animated fadeIn" },
    [
      _c(
        "grid-layout",
        {
          ref: "coreuiGridLayout",
          attrs: {
            layout: _vm.mqLayout,
            "col-num": _vm.mqCols,
            "is-draggable": true,
            "is-resizable": false,
            "is-mirrored": false,
            "vertical-compact": true,
            margin: _vm.margin,
            "use-css-transforms": true,
            "row-height": _vm.rowHeight
          },
          on: {
            "update:layout": function($event) {
              _vm.mqLayout = $event
            },
            "update:colNum": function($event) {
              _vm.mqCols = $event
            },
            "update:col-num": function($event) {
              _vm.mqCols = $event
            },
            "update:rowHeight": function($event) {
              _vm.rowHeight = $event
            },
            "update:row-height": function($event) {
              _vm.rowHeight = $event
            },
            "layout-updated": _vm.layoutUpdatedEvent
          }
        },
        _vm._l(_vm.mqLayout, function(item) {
          return _c(
            "grid-item",
            {
              key: item.i,
              staticClass: "d-flex align-items-start",
              attrs: {
                x: item.x,
                y: item.y,
                w: item.w,
                h: item.h,
                i: item.i,
                dragAllowFrom: ".card-header",
                dragIgnoreFrom: ".card-body",
                isDraggable: item.static ? false : true
              }
            },
            [
              _c("resize-observer", {
                on: {
                  notify: function($event) {
                    return _vm.handleResize(item)
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "b-card",
                {
                  staticClass: "flex-fill",
                  class: item.cardClass,
                  attrs: {
                    "no-body": "",
                    "header-tag": "header",
                    id: "coreui-dnd-card-no-" + item.i
                  }
                },
                [
                  _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                    _vm._v(
                      "\n          " +
                        _vm._s(
                          (item.cardHeader || "Drag & Drop") + " " + item.i
                        ) +
                        "\n          "
                    ),
                    _c(
                      "a",
                      {
                        staticClass: "badge badge-danger ml-1",
                        attrs: {
                          href: "https://coreui.io/pro/vue/",
                          rel: "noreferrer noopener",
                          target: "_blank"
                        }
                      },
                      [_vm._v("CoreUI Pro")]
                    ),
                    _vm._v(" "),
                    item.i === "0"
                      ? _c("div", { staticClass: "card-header-actions" }, [
                          _c(
                            "small",
                            [
                              _c(
                                "b-link",
                                {
                                  attrs: { variant: "link" },
                                  on: { click: _vm.resetLayout }
                                },
                                [_vm._v("Reset Layouts")]
                              )
                            ],
                            1
                          )
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("b-card-body", [
                    _vm._v(
                      "\n          " +
                        _vm._s(
                          item.cardBody ||
                            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."
                        ) +
                        "\n        "
                    )
                  ])
                ],
                1
              )
            ],
            1
          )
        }),
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/plugins/Draggable.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/views/plugins/Draggable.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Draggable_vue_vue_type_template_id_786cf924___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Draggable.vue?vue&type=template&id=786cf924& */ "./resources/js/src/views/plugins/Draggable.vue?vue&type=template&id=786cf924&");
/* harmony import */ var _Draggable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Draggable.vue?vue&type=script&lang=js& */ "./resources/js/src/views/plugins/Draggable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Draggable_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Draggable.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/plugins/Draggable.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Draggable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Draggable_vue_vue_type_template_id_786cf924___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Draggable_vue_vue_type_template_id_786cf924___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/plugins/Draggable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/plugins/Draggable.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/plugins/Draggable.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Draggable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Draggable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/plugins/Draggable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Draggable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/plugins/Draggable.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/plugins/Draggable.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Draggable_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Draggable.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/plugins/Draggable.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Draggable_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Draggable_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Draggable_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Draggable_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Draggable_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/plugins/Draggable.vue?vue&type=template&id=786cf924&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/plugins/Draggable.vue?vue&type=template&id=786cf924& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Draggable_vue_vue_type_template_id_786cf924___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Draggable.vue?vue&type=template&id=786cf924& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/plugins/Draggable.vue?vue&type=template&id=786cf924&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Draggable_vue_vue_type_template_id_786cf924___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Draggable_vue_vue_type_template_id_786cf924___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/plugins/_layouts.js":
/*!****************************************************!*\
  !*** ./resources/js/src/views/plugins/_layouts.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// layout is an array of objects
var layoutLg = [{
  i: '0',
  x: 0,
  y: 0,
  w: 1,
  h: 17,
  "static": true,
  cardClass: 'card-accent-primary',
  cardHeader: 'Static'
}, {
  i: '1',
  x: 1,
  y: 0,
  w: 1,
  h: 17,
  cardClass: 'card-accent-secondary'
}, {
  i: '2',
  x: 2,
  y: 0,
  w: 1,
  h: 17,
  cardClass: 'card-accent-success'
}, {
  i: '3',
  x: 0,
  y: 1,
  w: 1,
  h: 17,
  cardClass: 'card-accent-info'
}, {
  i: '4',
  x: 1,
  y: 1,
  w: 1,
  h: 17,
  cardClass: 'card-accent-warning'
}, {
  i: '5',
  x: 2,
  y: 1,
  w: 1,
  h: 17,
  cardClass: 'card-accent-danger'
}];
var layoutMd = [{
  i: '0',
  x: 0,
  y: 0,
  w: 1,
  h: 24,
  "static": true,
  cardClass: 'card-accent-primary',
  cardHeader: 'Static'
}, {
  i: '1',
  x: 1,
  y: 0,
  w: 1,
  h: 24,
  cardClass: 'card-accent-secondary'
}, {
  i: '2',
  x: 2,
  y: 0,
  w: 1,
  h: 24,
  cardClass: 'card-accent-success'
}, {
  i: '3',
  x: 0,
  y: 1,
  w: 1,
  h: 24,
  cardClass: 'card-accent-info'
}, {
  i: '4',
  x: 1,
  y: 1,
  w: 1,
  h: 24,
  cardClass: 'card-accent-warning'
}, {
  i: '5',
  x: 2,
  y: 1,
  w: 1,
  h: 24,
  cardClass: 'card-accent-danger'
}];
var layoutSm = [{
  i: '0',
  x: 0,
  y: 0,
  w: 1,
  h: 1,
  "static": true,
  cardClass: 'card-accent-primary',
  cardHeader: 'Static'
}, {
  i: '1',
  x: 1,
  y: 0,
  w: 1,
  h: 1,
  cardClass: 'card-accent-secondary'
}, {
  i: '2',
  x: 0,
  y: 1,
  w: 1,
  h: 1,
  cardClass: 'card-accent-success'
}, {
  i: '3',
  x: 1,
  y: 1,
  w: 1,
  h: 1,
  cardClass: 'card-accent-info'
}, {
  i: '4',
  x: 0,
  y: 2,
  w: 1,
  h: 1,
  cardClass: 'card-accent-warning'
}, {
  i: '5',
  x: 1,
  y: 2,
  w: 1,
  h: 1,
  cardClass: 'card-accent-danger'
}];
var layoutXs = [{
  i: '0',
  x: 0,
  y: 0,
  w: 1,
  h: 1,
  "static": true,
  cardClass: 'card-accent-primary',
  cardHeader: 'Static'
}, {
  i: '1',
  x: 0,
  y: 1,
  w: 1,
  h: 1,
  cardClass: 'card-accent-secondary'
}, {
  i: '2',
  x: 0,
  y: 2,
  w: 1,
  h: 1,
  cardClass: 'card-accent-success'
}, {
  i: '3',
  x: 0,
  y: 3,
  w: 1,
  h: 1,
  cardClass: 'card-accent-info'
}, {
  i: '4',
  x: 0,
  y: 4,
  w: 1,
  h: 1,
  cardClass: 'card-accent-warning'
}, {
  i: '5',
  x: 0,
  y: 5,
  w: 1,
  h: 1,
  cardClass: 'card-accent-danger'
}];
var layouts = {
  xl: layoutLg,
  lg: layoutLg,
  md: layoutMd,
  sm: layoutSm,
  xs: layoutXs
};
/* harmony default export */ __webpack_exports__["default"] = (layouts);

/***/ })

}]);