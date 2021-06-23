(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/Message.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/email/Message.vue?vue&type=script&lang=js& ***!
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
  name: 'message'
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/Message.vue?vue&type=template&id=feae2ebe&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/email/Message.vue?vue&type=template&id=feae2ebe& ***!
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
    _c("div", { staticClass: "email-app mb-4" }, [
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
      _c("main", { staticClass: "message" }, [
        _c(
          "div",
          { staticClass: "toolbar" },
          [
            _c(
              "div",
              { staticClass: "btn-group mr-1" },
              [
                _c("b-button", { attrs: { variant: "light" } }, [
                  _c("span", { staticClass: "fa fa-star" })
                ]),
                _vm._v(" "),
                _c("b-button", { attrs: { variant: "light" } }, [
                  _c("span", { staticClass: "fa fa-star-o" })
                ]),
                _vm._v(" "),
                _c("b-button", { attrs: { variant: "light" } }, [
                  _c("span", { staticClass: "fa fa-bookmark-o" })
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
                  _c("span", { staticClass: "fa fa-mail-reply" })
                ]),
                _vm._v(" "),
                _c("b-button", { attrs: { variant: "light" } }, [
                  _c("span", { staticClass: "fa fa-mail-reply-all" })
                ]),
                _vm._v(" "),
                _c("b-button", { attrs: { variant: "light" } }, [
                  _c("span", { staticClass: "fa fa-mail-forward" })
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c("b-button", { attrs: { variant: "light" } }, [
              _c("span", { staticClass: "fa fa-trash-o" })
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
        _c("div", { staticClass: "details" }, [
          _c("div", { staticClass: "title" }, [
            _vm._v(
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
            )
          ]),
          _vm._v(" "),
          _vm._m(3),
          _vm._v(" "),
          _vm._m(4),
          _vm._v(" "),
          _c("div", { staticClass: "attachments" }, [
            _c(
              "div",
              { staticClass: "attachment" },
              [
                _c("b-badge", { attrs: { variant: "danger" } }, [
                  _vm._v("zip")
                ]),
                _vm._v(" "),
                _c("b", [_vm._v("bootstrap.zip")]),
                _vm._v(" "),
                _c("i", [_vm._v("(2,5MB)")]),
                _vm._v(" "),
                _vm._m(5)
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "attachment" },
              [
                _c("b-badge", { attrs: { variant: "info" } }, [_vm._v("txt")]),
                _vm._v(" "),
                _c("b", [_vm._v("readme.txt")]),
                _vm._v(" "),
                _c("i", [_vm._v("(7KB)")]),
                _vm._v(" "),
                _vm._m(6)
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "attachment" },
              [
                _c("b-badge", { attrs: { variant: "success" } }, [
                  _vm._v("xls")
                ]),
                _vm._v(" "),
                _c("b", [_vm._v("spreadsheet.xls")]),
                _vm._v(" "),
                _c("i", [_vm._v("(984KB)")]),
                _vm._v(" "),
                _vm._m(7)
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("form", { attrs: { method: "post", action: "" } }, [
            _vm._m(8),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "form-group" },
              [
                _c(
                  "b-button",
                  {
                    attrs: { variant: "success", tabindex: "3", type: "submit" }
                  },
                  [_vm._v("Send message")]
                )
              ],
              1
            )
          ])
        ])
      ])
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "header" }, [
      _c("img", { staticClass: "avatar", attrs: { src: "img/avatars/7.jpg" } }),
      _vm._v(" "),
      _c("div", { staticClass: "from" }, [
        _c("span", [_vm._v("Lukasz Holeczek")]),
        _vm._v("\n            lukasz@bootstrapmaster.com\n          ")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "date" }, [
        _vm._v("Today, "),
        _c("b", [_vm._v("3:47 PM")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content" }, [
      _c("p", [
        _vm._v(
          "\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n          "
        )
      ]),
      _vm._v(" "),
      _c("blockquote", [
        _vm._v(
          "\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n          "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "menu" }, [
      _c("a", { staticClass: "fa fa-search", attrs: { href: "#" } }),
      _vm._v(" "),
      _c("a", { staticClass: "fa fa-share", attrs: { href: "#" } }),
      _vm._v(" "),
      _c("a", { staticClass: "fa fa-cloud-download", attrs: { href: "#" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "menu" }, [
      _c("a", { staticClass: "fa fa-search", attrs: { href: "#" } }),
      _vm._v(" "),
      _c("a", { staticClass: "fa fa-share", attrs: { href: "#" } }),
      _vm._v(" "),
      _c("a", { staticClass: "fa fa-cloud-download", attrs: { href: "#" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "menu" }, [
      _c("a", { staticClass: "fa fa-search", attrs: { href: "#" } }),
      _vm._v(" "),
      _c("a", { staticClass: "fa fa-share", attrs: { href: "#" } }),
      _vm._v(" "),
      _c("a", { staticClass: "fa fa-cloud-download", attrs: { href: "#" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("textarea", {
        staticClass: "form-control",
        attrs: {
          id: "message",
          name: "body",
          rows: "12",
          placeholder: "Click here to reply"
        }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/apps/email/Message.vue":
/*!*******************************************************!*\
  !*** ./resources/js/src/views/apps/email/Message.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Message_vue_vue_type_template_id_feae2ebe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Message.vue?vue&type=template&id=feae2ebe& */ "./resources/js/src/views/apps/email/Message.vue?vue&type=template&id=feae2ebe&");
/* harmony import */ var _Message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Message.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/email/Message.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Message_vue_vue_type_template_id_feae2ebe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Message_vue_vue_type_template_id_feae2ebe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/email/Message.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/email/Message.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/apps/email/Message.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Message.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/Message.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/email/Message.vue?vue&type=template&id=feae2ebe&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/apps/email/Message.vue?vue&type=template&id=feae2ebe& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_template_id_feae2ebe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Message.vue?vue&type=template&id=feae2ebe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/Message.vue?vue&type=template&id=feae2ebe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_template_id_feae2ebe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_template_id_feae2ebe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);