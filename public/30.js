(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/editors/CodeEditors.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/editors/CodeEditors.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_codemirror__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-codemirror */ "./node_modules/vue-codemirror/dist/vue-codemirror.js");
/* harmony import */ var vue_codemirror__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_codemirror__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! codemirror/lib/codemirror.css */ "./node_modules/codemirror/lib/codemirror.css");
/* harmony import */ var codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var codemirror_theme_material_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! codemirror/theme/material.css */ "./node_modules/codemirror/theme/material.css");
/* harmony import */ var codemirror_theme_material_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(codemirror_theme_material_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var codemirror_theme_eclipse_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! codemirror/theme/eclipse.css */ "./node_modules/codemirror/theme/eclipse.css");
/* harmony import */ var codemirror_theme_eclipse_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(codemirror_theme_eclipse_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var codemirror_mode_markdown_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! codemirror/mode/markdown/markdown */ "./node_modules/codemirror/mode/markdown/markdown.js");
/* harmony import */ var codemirror_mode_markdown_markdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_markdown_markdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! codemirror/mode/javascript/javascript */ "./node_modules/codemirror/mode/javascript/javascript.js");
/* harmony import */ var codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var codemirror_mode_xml_xml__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! codemirror/mode/xml/xml */ "./node_modules/codemirror/mode/xml/xml.js");
/* harmony import */ var codemirror_mode_xml_xml__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_xml_xml__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _examples__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_examples */ "./resources/js/src/views/editors/_examples.js");
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

 // require styles







 // global use

vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_codemirror__WEBPACK_IMPORTED_MODULE_1___default.a);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'code-editors',
  components: {
    VueCodeMirror: vue_codemirror__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    return {
      code: _examples__WEBPACK_IMPORTED_MODULE_8__["default"].xml,
      editorOption: {
        tabSize: 4,
        styleActiveLine: true,
        lineNumbers: true,
        lineWrapping: true,
        line: true,
        mode: 'xml',
        theme: 'eclipse',
        autofocus: true
      },
      selectedMode: 'xml',
      selectedTheme: 'eclipse'
    };
  },
  computed: {
    codemirror: function codemirror() {
      return this.$refs.vueCm.codemirror;
    }
  },
  methods: {
    onThemeChange: function onThemeChange(e) {
      this.editorOption.theme = e.target.value;
    },
    onModeChange: function onModeChange(e) {
      this.editorOption.mode = e.target.value;
      this.code = _examples__WEBPACK_IMPORTED_MODULE_8__["default"][this.editorOption.mode];
    }
  },
  mounted: function mounted() {
    var _this = this;

    if (this.codemirror.options.autofocus) {
      this.codemirror.setSize('100%', '50vh');
      this.codemirror.focus();
    }

    setTimeout(function () {
      _this.code += '\n\n\t~haha~';
    }, 2000);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/editors/CodeEditors.vue?vue&type=template&id=61e9acd6&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/editors/CodeEditors.vue?vue&type=template&id=61e9acd6& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
        "b-card",
        { attrs: { "show-footer": "" } },
        [
          _c("div", { attrs: { slot: "header" }, slot: "header" }, [
            _vm._v("\n        CodeMirror\n        "),
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
            _c("div", { staticClass: "card-header-actions" }, [
              _c(
                "a",
                {
                  staticClass: "card-header-action",
                  attrs: {
                    href: "https://github.com/surmon-china/vue-codemirror",
                    rel: "noreferrer noopener",
                    target: "_blank"
                  }
                },
                [_c("small", { staticClass: "text-muted" }, [_vm._v("docs")])]
              )
            ])
          ]),
          _vm._v(" "),
          _c("codemirror", {
            ref: "vueCm",
            attrs: { options: _vm.editorOption },
            model: {
              value: _vm.code,
              callback: function($$v) {
                _vm.code = $$v
              },
              expression: "code"
            }
          }),
          _vm._v(" "),
          _c(
            "div",
            { attrs: { slot: "footer" }, slot: "footer" },
            [
              _c(
                "b-form",
                { attrs: { inline: "" } },
                [
                  _c(
                    "b-form-group",
                    [
                      _c(
                        "b-form-select",
                        {
                          attrs: {
                            plain: true,
                            size: "sm",
                            name: "selectedTheme"
                          },
                          nativeOn: {
                            change: function($event) {
                              return _vm.onThemeChange($event)
                            }
                          },
                          model: {
                            value: _vm.selectedTheme,
                            callback: function($$v) {
                              _vm.selectedTheme = $$v
                            },
                            expression: "selectedTheme"
                          }
                        },
                        [
                          _c("option", { attrs: { value: "material" } }, [
                            _vm._v("material")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "eclipse" } }, [
                            _vm._v("eclipse")
                          ])
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    [
                      _c(
                        "b-form-select",
                        {
                          attrs: {
                            plain: true,
                            size: "sm",
                            name: "selectedMode"
                          },
                          nativeOn: {
                            change: function($event) {
                              return _vm.onModeChange($event)
                            }
                          },
                          model: {
                            value: _vm.selectedMode,
                            callback: function($$v) {
                              _vm.selectedMode = $$v
                            },
                            expression: "selectedMode"
                          }
                        },
                        [
                          _c("option", { attrs: { value: "markdown" } }, [
                            _vm._v("markdown")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "javascript" } }, [
                            _vm._v("javascript")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "xml" } }, [
                            _vm._v("html")
                          ])
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/editors/CodeEditors.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/views/editors/CodeEditors.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CodeEditors_vue_vue_type_template_id_61e9acd6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CodeEditors.vue?vue&type=template&id=61e9acd6& */ "./resources/js/src/views/editors/CodeEditors.vue?vue&type=template&id=61e9acd6&");
/* harmony import */ var _CodeEditors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CodeEditors.vue?vue&type=script&lang=js& */ "./resources/js/src/views/editors/CodeEditors.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CodeEditors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CodeEditors_vue_vue_type_template_id_61e9acd6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CodeEditors_vue_vue_type_template_id_61e9acd6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/editors/CodeEditors.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/editors/CodeEditors.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/editors/CodeEditors.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeEditors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CodeEditors.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/editors/CodeEditors.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeEditors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/editors/CodeEditors.vue?vue&type=template&id=61e9acd6&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/editors/CodeEditors.vue?vue&type=template&id=61e9acd6& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeEditors_vue_vue_type_template_id_61e9acd6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CodeEditors.vue?vue&type=template&id=61e9acd6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/editors/CodeEditors.vue?vue&type=template&id=61e9acd6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeEditors_vue_vue_type_template_id_61e9acd6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeEditors_vue_vue_type_template_id_61e9acd6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/editors/_examples.js":
/*!*****************************************************!*\
  !*** ./resources/js/src/views/editors/_examples.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var sampleCode = {
  markdown: '### [CodeMirror](http://codemirror.net)\n' + 'A versatile _text_ editor implemented in **JavaScript*** for the browser. \n' + 'It is specialized for editing `code`, and comes with a number of language modes and addons that implement more advanced editing functionality.\n',
  javascript: 'var component = {\n\tname: "vue-codemirror",\n\tauthor: "Surmon",\n\trepo: "https://github.com/surmon-china/vue-codemirror"\n};',
  xml: '<!DOCTYPE html>\n' + '<html lang="en">\n' + '<head>\n' + '\n' + '  <meta charset="utf-8"/>\n' + '  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>\n' + '  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>\n' + '  <meta name="description" content=""/>\n' + '  <meta name="author" content="Łukasz Holeczek"/>\n' + '  <meta name="keyword" content=""/>\n' + '  <link rel="shortcut icon" href="img/favicon.png"/>\n' + '\n' + '  <title></title>\n' + '\n' + '  <!-- Icons -->\n' + '  <link href="node_modules/font-awesome/css/font-awesome.min.css" rel="stylesheet"/>\n' + '  <link href="node_modules/simple-line-icons/css/simple-line-icons.css" rel="stylesheet"/>\n' + '\n' + '  <!-- Main styles for this application -->\n' + '  <link href="css/style.css" rel="stylesheet"/>\n' + '\n' + '</head>\n' + '\n' + '\n' + '<body class="app header-fixed sidebar-fixed aside-menu-fixed aside-menu-hidden">\n' + '  <header class="app-header navbar">\n' + '  <h1>I ♥ react-codemirror2</h1>\n' + '  ...\n' + '</header>\n' + '  <div class="app-body">\n' + '    <div class="sidebar">\n' + '      ...\n' + '    </div>\n' + '    <!-- Main content -->\n' + '    <main class="main">\n' + '\n' + '    </main>\n' + '    <aside class="aside-menu">\n' + '      ...\n' + '    </aside>\n' + '  </div>\n' + '  <footer class="app-footer">\n' + '    ...\n' + '  </footer>\n' + '\n' + '  <!-- Bootstrap and necessary plugins -->\n' + '  <script src="node_modules/jquery/dist/jquery.min.js"></script>\n' + '  <script src="node_modules/popper.js/dist/umd/popper.min.js"></script>\n' + '  <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>\n' + '  <script src="node_modules/pace-progress/pace.min.js"></script>\n' + '\n' + '  <!-- Plugins and scripts required by all views -->\n' + '  <script src="node_modules/chart.js/dist/Chart.min.js"></script>\n' + '\n' + '  <!-- Main scripts -->\n' + '  <script src="js/app-config.js"></script>\n' + '  <script src="js/app.js"></script>\n' + '\n' + '</body>\n' + '</html>'
};
/* harmony default export */ __webpack_exports__["default"] = (sampleCode);

/***/ })

}]);