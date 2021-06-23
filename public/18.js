(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/tables/DataTable.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/tables/DataTable.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_tables_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-tables-2 */ "./node_modules/vue-tables-2/compiled/index.js");
/* harmony import */ var vue_tables_2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_tables_2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_data */ "./resources/js/src/views/tables/_data.js");
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



vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_tables_2__WEBPACK_IMPORTED_MODULE_1__["ClientTable"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DataTable',
  components: {
    ClientTable: vue_tables_2__WEBPACK_IMPORTED_MODULE_1__["ClientTable"],
    Event: vue_tables_2__WEBPACK_IMPORTED_MODULE_1__["Event"]
  },
  data: function data() {
    return {
      columns: ['name', 'code', 'uri'],
      data: _data__WEBPACK_IMPORTED_MODULE_2__["default"],
      options: {
        headings: {
          name: 'Country Name',
          code: 'Country Code',
          uri: 'View Record'
        },
        sortable: ['name', 'code'],
        filterable: ['name', 'code'],
        sortIcon: {
          base: 'fa',
          up: 'fa-sort-asc',
          down: 'fa-sort-desc',
          is: 'fa-sort'
        },
        pagination: {
          chunk: 5,
          edge: false,
          nav: 'scroll'
        }
      },
      useVuex: false,
      theme: 'bootstrap4',
      template: 'default'
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/tables/DataTable.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/tables/DataTable.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#dataTable {\n  width: 95%;\n  margin: 0 auto;\n}\n#dataTable .VuePagination {\n  text-align: center;\n  justify-content: center;\n}\n#dataTable .vue-title {\n  text-align: center;\n  margin-bottom: 10px;\n}\n#dataTable .VueTables__search-field {\n  display: flex;\n}\n#dataTable .VueTables__search-field input {\n  margin-left: 0.25rem;\n}\n#dataTable .VueTables__limit-field {\n  display: flex;\n}\n#dataTable .VueTables__limit-field select {\n  margin-left: 0.25rem !important;\n}\n#dataTable .VueTables__table th {\n  text-align: center;\n}\n#dataTable .VueTables__child-row-toggler {\n  width: 16px;\n  height: 16px;\n  line-height: 16px;\n  display: block;\n  margin: auto;\n  text-align: center;\n}\n#dataTable .VueTables__child-row-toggler--closed::before {\n  content: \"+\";\n}\n#dataTable .VueTables__child-row-toggler--open::before {\n  content: \"-\";\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/tables/DataTable.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/tables/DataTable.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DataTable.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/tables/DataTable.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/tables/DataTable.vue?vue&type=template&id=2154a1f8&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/tables/DataTable.vue?vue&type=template&id=2154a1f8& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    { attrs: { className: "animated" } },
    [
      _c(
        "b-card",
        [
          _c("b-card-header", [
            _c("i", { staticClass: "icon-menu mr-1" }),
            _vm._v("Data Table\n      "),
            _c(
              "a",
              {
                staticClass: "badge badge-danger",
                attrs: { href: "https://coreui.io/pro/vue/" }
              },
              [_vm._v("CoreUI Pro")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "card-header-actions" }, [
              _c(
                "a",
                {
                  attrs: {
                    href: "https://github.com/matfish2/vue-tables-2",
                    rel: "noopener noreferrer",
                    target: "_blank",
                    className: "card-header-action"
                  }
                },
                [
                  _c("small", { attrs: { className: "text-muted" } }, [
                    _vm._v("docs")
                  ])
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "b-card-body",
            [
              _c("v-client-table", {
                attrs: {
                  columns: _vm.columns,
                  data: _vm.data,
                  options: _vm.options,
                  theme: _vm.theme,
                  id: "dataTable"
                },
                scopedSlots: _vm._u([
                  {
                    key: "uri",
                    fn: function(props) {
                      return _c("a", {
                        staticClass: "icon-eye",
                        attrs: { target: "_blank", href: props.row.uri }
                      })
                    }
                  },
                  {
                    key: "child_row",
                    fn: function(props) {
                      return _c("div", {}, [
                        _vm._v(
                          "\n          The link to " +
                            _vm._s(props.row.name) +
                            " is "
                        ),
                        _c("a", { attrs: { href: props.row.uri } }, [
                          _vm._v(_vm._s(props.row.uri))
                        ])
                      ])
                    }
                  }
                ])
              })
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

/***/ "./resources/js/src/views/tables/DataTable.vue":
/*!*****************************************************!*\
  !*** ./resources/js/src/views/tables/DataTable.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DataTable_vue_vue_type_template_id_2154a1f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataTable.vue?vue&type=template&id=2154a1f8& */ "./resources/js/src/views/tables/DataTable.vue?vue&type=template&id=2154a1f8&");
/* harmony import */ var _DataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataTable.vue?vue&type=script&lang=js& */ "./resources/js/src/views/tables/DataTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DataTable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataTable.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/tables/DataTable.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DataTable_vue_vue_type_template_id_2154a1f8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DataTable_vue_vue_type_template_id_2154a1f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/tables/DataTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/tables/DataTable.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/tables/DataTable.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DataTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/tables/DataTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/tables/DataTable.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/tables/DataTable.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DataTable.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/tables/DataTable.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/tables/DataTable.vue?vue&type=template&id=2154a1f8&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/tables/DataTable.vue?vue&type=template&id=2154a1f8& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTable_vue_vue_type_template_id_2154a1f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DataTable.vue?vue&type=template&id=2154a1f8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/tables/DataTable.vue?vue&type=template&id=2154a1f8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTable_vue_vue_type_template_id_2154a1f8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTable_vue_vue_type_template_id_2154a1f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/tables/_data.js":
/*!************************************************!*\
  !*** ./resources/js/src/views/tables/_data.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  code: "ZW",
  name: "Zimbabwe",
  created_at: "2015-04-24T01:46:50.459583",
  updated_at: "2015-04-24T01:46:50.459593",
  uri: "http://api.lobbyfacts.eu/api/1/country/245",
  id: 245
}, {
  code: "ZM",
  name: "Zambia",
  created_at: "2015-04-24T01:46:50.457459",
  updated_at: "2015-04-24T01:46:50.457468",
  uri: "http://api.lobbyfacts.eu/api/1/country/244",
  id: 244
}, {
  code: "YE",
  name: "Yemen",
  created_at: "2015-04-24T01:46:50.454731",
  updated_at: "2015-04-24T01:46:50.454741",
  uri: "http://api.lobbyfacts.eu/api/1/country/243",
  id: 243
}, {
  code: "EH",
  name: "Western Sahara",
  created_at: "2015-04-24T01:46:50.452002",
  updated_at: "2015-04-24T01:46:50.452011",
  uri: "http://api.lobbyfacts.eu/api/1/country/242",
  id: 242
}, {
  code: "WF",
  name: "Wallis & Futuna",
  created_at: "2015-04-24T01:46:50.449346",
  updated_at: "2015-04-24T01:46:50.449355",
  uri: "http://api.lobbyfacts.eu/api/1/country/241",
  id: 241
}, {
  code: "VN",
  name: "Vietnam",
  created_at: "2015-04-24T01:46:50.446644",
  updated_at: "2015-04-24T01:46:50.446652",
  uri: "http://api.lobbyfacts.eu/api/1/country/240",
  id: 240
}, {
  code: "VE",
  name: "Venezuela",
  created_at: "2015-04-24T01:46:50.444031",
  updated_at: "2015-04-24T01:46:50.444040",
  uri: "http://api.lobbyfacts.eu/api/1/country/239",
  id: 239
}, {
  code: "VU",
  name: "Vanuatu",
  created_at: "2015-04-24T01:46:50.441423",
  updated_at: "2015-04-24T01:46:50.441433",
  uri: "http://api.lobbyfacts.eu/api/1/country/238",
  id: 238
}, {
  code: "UZ",
  name: "Uzbekistan",
  created_at: "2015-04-24T01:46:50.438748",
  updated_at: "2015-04-24T01:46:50.438757",
  uri: "http://api.lobbyfacts.eu/api/1/country/237",
  id: 237
}, {
  code: "UY",
  name: "Uruguay",
  created_at: "2015-04-24T01:46:50.435761",
  updated_at: "2015-04-24T01:46:50.435770",
  uri: "http://api.lobbyfacts.eu/api/1/country/236",
  id: 236
}, {
  code: "VI",
  name: "United States Virgin Islands",
  created_at: "2015-04-24T01:46:50.433229",
  updated_at: "2015-04-24T01:46:50.433238",
  uri: "http://api.lobbyfacts.eu/api/1/country/235",
  id: 235
}, {
  code: "US",
  name: "United States",
  created_at: "2015-04-24T01:46:50.430335",
  updated_at: "2015-04-24T01:46:50.430340",
  uri: "http://api.lobbyfacts.eu/api/1/country/234",
  id: 234
}, {
  code: "GB",
  name: "United Kingdom",
  created_at: "2015-04-24T01:46:50.427956",
  updated_at: "2015-04-24T01:46:50.427961",
  uri: "http://api.lobbyfacts.eu/api/1/country/233",
  id: 233
}, {
  code: "AE",
  name: "United Arab Emirates",
  created_at: "2015-04-24T01:46:50.425383",
  updated_at: "2015-04-24T01:46:50.425392",
  uri: "http://api.lobbyfacts.eu/api/1/country/232",
  id: 232
}, {
  code: "UA",
  name: "Ukraine",
  created_at: "2015-04-24T01:46:50.422970",
  updated_at: "2015-04-24T01:46:50.422980",
  uri: "http://api.lobbyfacts.eu/api/1/country/231",
  id: 231
}, {
  code: "UG",
  name: "Uganda",
  created_at: "2015-04-24T01:46:50.419963",
  updated_at: "2015-04-24T01:46:50.419968",
  uri: "http://api.lobbyfacts.eu/api/1/country/230",
  id: 230
}, {
  code: "TV",
  name: "Tuvalu",
  created_at: "2015-04-24T01:46:50.417896",
  updated_at: "2015-04-24T01:46:50.417906",
  uri: "http://api.lobbyfacts.eu/api/1/country/229",
  id: 229
}, {
  code: "TC",
  name: "Turks & Caicos Islands",
  created_at: "2015-04-24T01:46:50.414854",
  updated_at: "2015-04-24T01:46:50.414868",
  uri: "http://api.lobbyfacts.eu/api/1/country/228",
  id: 228
}, {
  code: "TM",
  name: "Turkmenistan",
  created_at: "2015-04-24T01:46:50.412601",
  updated_at: "2015-04-24T01:46:50.412605",
  uri: "http://api.lobbyfacts.eu/api/1/country/227",
  id: 227
}, {
  code: "TR",
  name: "Turkey",
  created_at: "2015-04-24T01:46:50.411105",
  updated_at: "2015-04-24T01:46:50.411110",
  uri: "http://api.lobbyfacts.eu/api/1/country/226",
  id: 226
}, {
  code: "TN",
  name: "Tunisia",
  created_at: "2015-04-24T01:46:50.409535",
  updated_at: "2015-04-24T01:46:50.409539",
  uri: "http://api.lobbyfacts.eu/api/1/country/225",
  id: 225
}, {
  code: "TT",
  name: "Trinidad & Tobago",
  created_at: "2015-04-24T01:46:50.408030",
  updated_at: "2015-04-24T01:46:50.408034",
  uri: "http://api.lobbyfacts.eu/api/1/country/224",
  id: 224
}, {
  code: "TO",
  name: "Tonga",
  created_at: "2015-04-24T01:46:50.406306",
  updated_at: "2015-04-24T01:46:50.406311",
  uri: "http://api.lobbyfacts.eu/api/1/country/223",
  id: 223
}, {
  code: "TK",
  name: "Tokelau",
  created_at: "2015-04-24T01:46:50.404794",
  updated_at: "2015-04-24T01:46:50.404799",
  uri: "http://api.lobbyfacts.eu/api/1/country/222",
  id: 222
}, {
  code: "TG",
  name: "Togo",
  created_at: "2015-04-24T01:46:50.403306",
  updated_at: "2015-04-24T01:46:50.403310",
  uri: "http://api.lobbyfacts.eu/api/1/country/221",
  id: 221
}, {
  code: "TH",
  name: "Thailand",
  created_at: "2015-04-24T01:46:50.400840",
  updated_at: "2015-04-24T01:46:50.400849",
  uri: "http://api.lobbyfacts.eu/api/1/country/220",
  id: 220
}, {
  code: "TZ",
  name: "Tanzania",
  created_at: "2015-04-24T01:46:50.397846",
  updated_at: "2015-04-24T01:46:50.397855",
  uri: "http://api.lobbyfacts.eu/api/1/country/219",
  id: 219
}, {
  code: "TJ",
  name: "Tajikistan",
  created_at: "2015-04-24T01:46:50.394924",
  updated_at: "2015-04-24T01:46:50.394933",
  uri: "http://api.lobbyfacts.eu/api/1/country/218",
  id: 218
}, {
  code: "TW",
  name: "Taiwan",
  created_at: "2015-04-24T01:46:50.391969",
  updated_at: "2015-04-24T01:46:50.391978",
  uri: "http://api.lobbyfacts.eu/api/1/country/217",
  id: 217
}, {
  code: "SY",
  name: "Syria",
  created_at: "2015-04-24T01:46:50.389120",
  updated_at: "2015-04-24T01:46:50.389124",
  uri: "http://api.lobbyfacts.eu/api/1/country/216",
  id: 216
}, {
  code: "CH",
  name: "Switzerland",
  created_at: "2015-04-24T01:46:50.386939",
  updated_at: "2015-04-24T01:46:50.386943",
  uri: "http://api.lobbyfacts.eu/api/1/country/215",
  id: 215
}, {
  code: "SE",
  name: "Sweden",
  created_at: "2015-04-24T01:46:50.385345",
  updated_at: "2015-04-24T01:46:50.385349",
  uri: "http://api.lobbyfacts.eu/api/1/country/214",
  id: 214
}, {
  code: "SZ",
  name: "Swaziland",
  created_at: "2015-04-24T01:46:50.383834",
  updated_at: "2015-04-24T01:46:50.383838",
  uri: "http://api.lobbyfacts.eu/api/1/country/213",
  id: 213
}, {
  code: "SR",
  name: "Suriname",
  created_at: "2015-04-24T01:46:50.382073",
  updated_at: "2015-04-24T01:46:50.382078",
  uri: "http://api.lobbyfacts.eu/api/1/country/212",
  id: 212
}, {
  code: "SD",
  name: "Sudan",
  created_at: "2015-04-24T01:46:50.380114",
  updated_at: "2015-04-24T01:46:50.380119",
  uri: "http://api.lobbyfacts.eu/api/1/country/211",
  id: 211
}, {
  code: "LK",
  name: "Sri Lanka",
  created_at: "2015-04-24T01:46:50.378189",
  updated_at: "2015-04-24T01:46:50.378195",
  uri: "http://api.lobbyfacts.eu/api/1/country/210",
  id: 210
}, {
  code: "ES",
  name: "Spain",
  created_at: "2015-04-24T01:46:50.376105",
  updated_at: "2015-04-24T01:46:50.376109",
  uri: "http://api.lobbyfacts.eu/api/1/country/209",
  id: 209
}, {
  code: "SS",
  name: "South Sudan",
  created_at: "2015-04-24T01:46:50.373942",
  updated_at: "2015-04-24T01:46:50.373946",
  uri: "http://api.lobbyfacts.eu/api/1/country/208",
  id: 208
}, {
  code: "KR",
  name: "South Korea",
  created_at: "2015-04-24T01:46:50.371790",
  updated_at: "2015-04-24T01:46:50.371794",
  uri: "http://api.lobbyfacts.eu/api/1/country/207",
  id: 207
}, {
  code: "GS",
  name: "South Georgia & The South Sandwish Islands",
  created_at: "2015-04-24T01:46:50.369460",
  updated_at: "2015-04-24T01:46:50.369465",
  uri: "http://api.lobbyfacts.eu/api/1/country/206",
  id: 206
}, {
  code: "ZA",
  name: "South Africa",
  created_at: "2015-04-24T01:46:50.367247",
  updated_at: "2015-04-24T01:46:50.367252",
  uri: "http://api.lobbyfacts.eu/api/1/country/205",
  id: 205
}, {
  code: "SO",
  name: "Somaliland",
  created_at: "2015-04-24T01:46:50.362905",
  updated_at: "2016-09-18T18:34:35.724427",
  uri: "http://api.lobbyfacts.eu/api/1/country/204",
  id: 204
}, {
  code: "SB",
  name: "Solomon Islands",
  created_at: "2015-04-24T01:46:50.360631",
  updated_at: "2015-04-24T01:46:50.360635",
  uri: "http://api.lobbyfacts.eu/api/1/country/203",
  id: 203
}, {
  code: "SI",
  name: "Slovenia",
  created_at: "2015-04-24T01:46:50.358394",
  updated_at: "2015-04-24T01:46:50.358399",
  uri: "http://api.lobbyfacts.eu/api/1/country/202",
  id: 202
}, {
  code: "SK",
  name: "Slovakia",
  created_at: "2015-04-24T01:46:50.356154",
  updated_at: "2015-04-24T01:46:50.356158",
  uri: "http://api.lobbyfacts.eu/api/1/country/201",
  id: 201
}, {
  code: "SX",
  name: "Sint Maarten",
  created_at: "2015-04-24T01:46:50.353807",
  updated_at: "2015-04-24T01:46:50.353811",
  uri: "http://api.lobbyfacts.eu/api/1/country/200",
  id: 200
}, {
  code: "SG",
  name: "Singapore",
  created_at: "2015-04-24T01:46:50.349354",
  updated_at: "2015-04-24T01:46:50.349358",
  uri: "http://api.lobbyfacts.eu/api/1/country/199",
  id: 199
}, {
  code: "SL",
  name: "Sierra Leone",
  created_at: "2015-04-24T01:46:50.347186",
  updated_at: "2015-04-24T01:46:50.347190",
  uri: "http://api.lobbyfacts.eu/api/1/country/198",
  id: 198
}, {
  code: "SC",
  name: "Seychelles",
  created_at: "2015-04-24T01:46:50.344980",
  updated_at: "2015-04-24T01:46:50.344984",
  uri: "http://api.lobbyfacts.eu/api/1/country/197",
  id: 197
}, {
  code: "RS",
  name: "Serbia",
  created_at: "2015-04-24T01:46:50.342496",
  updated_at: "2015-04-24T01:46:50.342501",
  uri: "http://api.lobbyfacts.eu/api/1/country/196",
  id: 196
}]);

/***/ })

}]);