(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/Compose.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/email/Compose.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'compose'
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/Compose.vue?vue&type=template&id=fb28c6a8&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/email/Compose.vue?vue&type=template&id=fb28c6a8& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "animated fadeIn" }, [
    _c("div", { staticClass: "email-app" }, [
      _c(
        "nav",
        [
          _c(
            "router-link",
            {
              staticClass: "btn btn-danger btn-block",
              attrs: { to: "./compose" }
            },
            [_vm._v("New Email")]
          ),
          _vm._v(" "),
          _c("ul", { staticClass: "nav" }, [
            _c(
              "li",
              { staticClass: "nav-item" },
              [
                _c(
                  "router-link",
                  { staticClass: "nav-link", attrs: { to: "./inbox" } },
                  [
                    _c("i", { staticClass: "fa fa-inbox" }),
                    _vm._v(" Inbox "),
                    _c("b-badge", { attrs: { variant: "danger" } }, [
                      _vm._v("4")
                    ])
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _vm._m(0),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _c("li", { staticClass: "nav-item" }, [
              _c(
                "a",
                { staticClass: "nav-link", attrs: { href: "#" } },
                [
                  _c("i", { staticClass: "fa fa-bookmark" }),
                  _vm._v(" Important"),
                  _c("b-badge", { attrs: { variant: "info" } }, [_vm._v("5")])
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "nav-item" }, [
              _c(
                "a",
                { staticClass: "nav-link", attrs: { href: "#" } },
                [
                  _c("i", { staticClass: "fa fa-inbox" }),
                  _vm._v(" Spam "),
                  _c("b-badge", { attrs: { variant: "warning" } }, [
                    _vm._v("42")
                  ])
                ],
                1
              )
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "main",
        [
          _c("p", { staticClass: "text-center" }, [_vm._v("New Message")]),
          _vm._v(" "),
          _c("form", [
            _c(
              "div",
              { staticClass: "form-row mb-3" },
              [
                _c(
                  "label",
                  {
                    staticClass: "col-2 col-sm-1 col-form-label",
                    attrs: { for: "to" }
                  },
                  [_vm._v("To:")]
                ),
                _vm._v(" "),
                _c("b-col", { attrs: { cols: "12", sm: "11" } }, [
                  _c("input", {
                    staticClass: "form-control",
                    attrs: {
                      type: "email",
                      id: "to",
                      placeholder: "Type email"
                    }
                  })
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "form-row mb-3" },
              [
                _c(
                  "label",
                  {
                    staticClass: "col-2 col-sm-1 col-form-label",
                    attrs: { for: "cc" }
                  },
                  [_vm._v("CC:")]
                ),
                _vm._v(" "),
                _c("b-col", { attrs: { cols: "12", sm: "11" } }, [
                  _c("input", {
                    staticClass: "form-control",
                    attrs: {
                      type: "email",
                      id: "cc",
                      placeholder: "Type email"
                    }
                  })
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "form-row mb-3" },
              [
                _c(
                  "label",
                  {
                    staticClass: "col-2 col-sm-1 col-form-label",
                    attrs: { for: "bcc" }
                  },
                  [_vm._v("BCC:")]
                ),
                _vm._v(" "),
                _c("b-col", { attrs: { cols: "12", sm: "11" } }, [
                  _c("input", {
                    staticClass: "form-control",
                    attrs: {
                      type: "email",
                      id: "bcc",
                      placeholder: "Type email"
                    }
                  })
                ])
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c(
            "b-row",
            [
              _c("b-col", { staticClass: "ml-auto", attrs: { sm: "11" } }, [
                _c(
                  "div",
                  { staticClass: "toolbar", attrs: { role: "toolbar" } },
                  [
                    _c(
                      "div",
                      { staticClass: "btn-group mr-1" },
                      [
                        _c("b-button", { attrs: { variant: "light" } }, [
                          _c("span", { staticClass: "fa fa-bold" })
                        ]),
                        _vm._v(" "),
                        _c("b-button", { attrs: { variant: "light" } }, [
                          _c("span", { staticClass: "fa fa-italic" })
                        ]),
                        _vm._v(" "),
                        _c("b-button", { attrs: { variant: "light" } }, [
                          _c("span", { staticClass: "fa fa-underline" })
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "btn-group mr-1" },
                      [
                        _c("b-button", { attrs: { variant: "light" } }, [
                          _c("span", { staticClass: "fa fa-align-left" })
                        ]),
                        _vm._v(" "),
                        _c("b-button", { attrs: { variant: "light" } }, [
                          _c("span", { staticClass: "fa fa-align-right" })
                        ]),
                        _vm._v(" "),
                        _c("b-button", { attrs: { variant: "light" } }, [
                          _c("span", { staticClass: "fa fa-align-center" })
                        ]),
                        _vm._v(" "),
                        _c("b-button", { attrs: { variant: "light" } }, [
                          _c("span", { staticClass: "fa fa-align-justify" })
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "btn-group mr-1" },
                      [
                        _c("b-button", { attrs: { variant: "light" } }, [
                          _c("span", { staticClass: "fa fa-indent" })
                        ]),
                        _vm._v(" "),
                        _c("b-button", { attrs: { variant: "light" } }, [
                          _c("span", { staticClass: "fa fa-outdent" })
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "btn-group mr-1" },
                      [
                        _c("b-button", { attrs: { variant: "light" } }, [
                          _c("span", { staticClass: "fa fa-list-ul" })
                        ]),
                        _vm._v(" "),
                        _c("b-button", { attrs: { variant: "light" } }, [
                          _c("span", { staticClass: "fa fa-list-ol" })
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      { staticClass: "mr-1", attrs: { variant: "light" } },
                      [_c("span", { staticClass: "fa fa-trash-o" })]
                    ),
                    _vm._v(" "),
                    _c("b-button", { attrs: { variant: "light" } }, [
                      _c("span", { staticClass: "fa fa-paperclip" })
                    ]),
                    _vm._v(" "),
                    _c(
                      "b-dropdown",
                      { staticClass: "ml-1", attrs: { variant: "light" } },
                      [
                        _c("template", { slot: "button-content" }, [
                          _c("span", { staticClass: "fa fa-tags" })
                        ]),
                        _vm._v(" "),
                        _c(
                          "b-dropdown-item",
                          { attrs: { href: "#" } },
                          [
                            _vm._v("add label "),
                            _c("b-badge", { attrs: { variant: "danger" } }, [
                              _vm._v(" Home")
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-dropdown-item",
                          { attrs: { href: "#" } },
                          [
                            _vm._v("add label "),
                            _c("b-badge", { attrs: { variant: "info" } }, [
                              _vm._v(" Job")
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-dropdown-item",
                          { attrs: { href: "#" } },
                          [
                            _vm._v("add label "),
                            _c("b-badge", { attrs: { variant: "success" } }, [
                              _vm._v(" Clients")
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-dropdown-item",
                          { attrs: { href: "#" } },
                          [
                            _vm._v("add label "),
                            _c("b-badge", { attrs: { variant: "warning" } }, [
                              _vm._v(" News")
                            ])
                          ],
                          1
                        )
                      ],
                      2
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "form-group mt-4" }, [
                  _c("textarea", {
                    staticClass: "form-control",
                    attrs: {
                      id: "message",
                      name: "body",
                      rows: "12",
                      placeholder: "Click here to reply"
                    }
                  })
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c(
                      "b-button",
                      {
                        staticClass: "mr-1",
                        attrs: { type: "submit", variant: "success" }
                      },
                      [_vm._v("Send")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "mr-1",
                        attrs: { type: "submit", variant: "light" }
                      },
                      [_vm._v("Draft")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "mr-1",
                        attrs: { type: "submit", variant: "danger" }
                      },
                      [_vm._v("Discard")]
                    )
                  ],
                  1
                )
              ])
            ],
            1
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item" }, [
      _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
        _c("i", { staticClass: "fa fa-star" }),
        _vm._v(" Stared")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item" }, [
      _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
        _c("i", { staticClass: "fa fa-rocket" }),
        _vm._v(" Sent")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item" }, [
      _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
        _c("i", { staticClass: "fa fa-trash-o" }),
        _vm._v(" Trash")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/apps/email/Compose.vue":
/*!*******************************************************!*\
  !*** ./resources/js/src/views/apps/email/Compose.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Compose_vue_vue_type_template_id_fb28c6a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Compose.vue?vue&type=template&id=fb28c6a8& */ "./resources/js/src/views/apps/email/Compose.vue?vue&type=template&id=fb28c6a8&");
/* harmony import */ var _Compose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Compose.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/email/Compose.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Compose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Compose_vue_vue_type_template_id_fb28c6a8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Compose_vue_vue_type_template_id_fb28c6a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/email/Compose.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/email/Compose.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/apps/email/Compose.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Compose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Compose.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/Compose.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Compose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/email/Compose.vue?vue&type=template&id=fb28c6a8&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/apps/email/Compose.vue?vue&type=template&id=fb28c6a8& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Compose_vue_vue_type_template_id_fb28c6a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Compose.vue?vue&type=template&id=fb28c6a8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/Compose.vue?vue&type=template&id=fb28c6a8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Compose_vue_vue_type_template_id_fb28c6a8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Compose_vue_vue_type_template_id_fb28c6a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);