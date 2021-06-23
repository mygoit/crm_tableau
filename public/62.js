(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[62],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/notifications/Toastr.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/notifications/Toastr.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-notifications */ "./node_modules/vue-notifications/dist/vue-notifications.es5.js");
/* harmony import */ var vue_notifications__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_notifications__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mini_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mini-toastr */ "./node_modules/mini-toastr/dist/mini-toastr.es5.js");
/* harmony import */ var mini_toastr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mini_toastr__WEBPACK_IMPORTED_MODULE_2__);
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


 // https://github.com/se-panfilov/mini-toastr

var toastTypes = {
  success: 'success',
  error: 'error',
  info: 'info',
  warn: 'warn'
};
mini_toastr__WEBPACK_IMPORTED_MODULE_2___default.a.init({
  types: toastTypes
});

function toast(_ref) {
  var title = _ref.title,
      message = _ref.message,
      type = _ref.type,
      timeout = _ref.timeout,
      cb = _ref.cb;
  return mini_toastr__WEBPACK_IMPORTED_MODULE_2___default.a[type](message, title, timeout, cb);
}

var options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast
}; //  VueNotifications.setPluginOptions(options)

vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_notifications__WEBPACK_IMPORTED_MODULE_1___default.a, options);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'toastr',
  data: function data() {
    return {};
  },
  notifications: {
    showSuccessMsg: {
      type: vue_notifications__WEBPACK_IMPORTED_MODULE_1___default.a.types.success,
      title: 'Hello there',
      message: 'That\'s the success!'
    },
    showInfoMsg: {
      type: vue_notifications__WEBPACK_IMPORTED_MODULE_1___default.a.types.info,
      title: 'Hey you',
      message: 'Here is some info for you'
    },
    showWarnMsg: {
      type: vue_notifications__WEBPACK_IMPORTED_MODULE_1___default.a.types.warn,
      title: 'Wow, man',
      message: 'That\'s the kind of warning'
    },
    showErrorMsg: {
      type: vue_notifications__WEBPACK_IMPORTED_MODULE_1___default.a.types.error,
      title: 'Wow-wow',
      message: 'That\'s the error'
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/notifications/Toastr.vue?vue&type=template&id=dddce548&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/notifications/Toastr.vue?vue&type=template&id=dddce548& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
            _c("i", { staticClass: "icon-info" }),
            _vm._v(" Toastr\n      "),
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
                    href: "https://github.com/se-panfilov/vue-notifications",
                    rel: "noreferrer noopener",
                    target: "_blank"
                  }
                },
                [_c("small", { staticClass: "text-muted" }, [_vm._v("docs")])]
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "b-button",
            {
              staticClass: "mr-1",
              attrs: { type: "button", variant: "success" },
              on: {
                click: function($event) {
                  return _vm.showSuccessMsg()
                }
              }
            },
            [_vm._v("Success")]
          ),
          _vm._v(" "),
          _c(
            "b-button",
            {
              staticClass: "mr-1",
              attrs: { type: "button", variant: "info" },
              on: {
                click: function($event) {
                  return _vm.showInfoMsg()
                }
              }
            },
            [_vm._v("Info")]
          ),
          _vm._v(" "),
          _c(
            "b-button",
            {
              staticClass: "mr-1",
              attrs: { type: "button", variant: "warning" },
              on: {
                click: function($event) {
                  return _vm.showWarnMsg()
                }
              }
            },
            [_vm._v("Warning")]
          ),
          _vm._v(" "),
          _c(
            "b-button",
            {
              staticClass: "mr-1",
              attrs: { type: "button", variant: "danger" },
              on: {
                click: function($event) {
                  return _vm.showErrorMsg()
                }
              }
            },
            [_vm._v("Error")]
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

/***/ "./resources/js/src/views/notifications/Toastr.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/notifications/Toastr.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Toastr_vue_vue_type_template_id_dddce548___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Toastr.vue?vue&type=template&id=dddce548& */ "./resources/js/src/views/notifications/Toastr.vue?vue&type=template&id=dddce548&");
/* harmony import */ var _Toastr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Toastr.vue?vue&type=script&lang=js& */ "./resources/js/src/views/notifications/Toastr.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Toastr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Toastr_vue_vue_type_template_id_dddce548___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Toastr_vue_vue_type_template_id_dddce548___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/notifications/Toastr.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/notifications/Toastr.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/notifications/Toastr.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Toastr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Toastr.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/notifications/Toastr.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Toastr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/notifications/Toastr.vue?vue&type=template&id=dddce548&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/notifications/Toastr.vue?vue&type=template&id=dddce548& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Toastr_vue_vue_type_template_id_dddce548___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Toastr.vue?vue&type=template&id=dddce548& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/notifications/Toastr.vue?vue&type=template&id=dddce548&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Toastr_vue_vue_type_template_id_dddce548___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Toastr_vue_vue_type_template_id_dddce548___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);