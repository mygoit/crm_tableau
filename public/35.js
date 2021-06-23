(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/Inbox.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/email/Inbox.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'inbox'
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/Inbox.vue?vue&type=template&id=711fa7c0&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/email/Inbox.vue?vue&type=template&id=711fa7c0& ***!
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
      _c("main", { staticClass: "inbox" }, [
        _c(
          "div",
          { staticClass: "toolbar" },
          [
            _c(
              "div",
              { staticClass: "btn-group mr-1" },
              [
                _c("b-button", { attrs: { variant: "light" } }, [
                  _c("span", { staticClass: "fa fa-envelope" })
                ]),
                _vm._v(" "),
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
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "btn-group float-right" },
              [
                _c("b-button", { attrs: { variant: "light" } }, [
                  _c("span", { staticClass: "fa fa-chevron-left" })
                ]),
                _vm._v(" "),
                _c("b-button", { attrs: { variant: "light" } }, [
                  _c("span", { staticClass: "fa fa-chevron-right" })
                ])
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("ul", { staticClass: "messages" }, [
          _c(
            "li",
            { staticClass: "message unread" },
            [
              _c("router-link", { attrs: { to: "./message" } }, [
                _c("div", { staticClass: "actions" }, [
                  _c("span", { staticClass: "action" }, [
                    _c("i", { staticClass: "fa fa-square-o" })
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "action" }, [
                    _c("i", { staticClass: "fa fa-star-o" })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "header" }, [
                  _c("span", { staticClass: "from" }, [
                    _vm._v("Lukasz Holeczek")
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "date" }, [
                    _c("span", { staticClass: "fa fa-paper-clip" }),
                    _vm._v(" Today, 3:47 PM")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "title" }, [
                  _vm._v(
                    "\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n            "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "description" }, [
                  _vm._v(
                    "\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n            "
                  )
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            { staticClass: "message" },
            [
              _c("router-link", { attrs: { to: "./message" } }, [
                _c("div", { staticClass: "actions" }, [
                  _c("span", { staticClass: "action" }, [
                    _c("i", { staticClass: "fa fa-square-o" })
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "action" }, [
                    _c("i", { staticClass: "fa fa-star-o" })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "header" }, [
                  _c("span", { staticClass: "from" }, [
                    _vm._v("Lukasz Holeczek")
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "date" }, [
                    _c("span", { staticClass: "fa fa-paper-clip" }),
                    _vm._v(" Today, 3:47 PM")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "title" }, [
                  _vm._v(
                    "\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n            "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "description" }, [
                  _vm._v(
                    "\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n            "
                  )
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            { staticClass: "message" },
            [
              _c("router-link", { attrs: { to: "./message" } }, [
                _c("div", { staticClass: "actions" }, [
                  _c("span", { staticClass: "action" }, [
                    _c("i", { staticClass: "fa fa-square-o" })
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "action" }, [
                    _c("i", { staticClass: "fa fa-star-o" })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "header" }, [
                  _c("span", { staticClass: "from" }, [
                    _vm._v("Lukasz Holeczek")
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "date" }, [
                    _vm._v("Today, 3:47 PM")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "title" }, [
                  _vm._v(
                    "\n              Lorem ipsum dolor sit amet.\n            "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "description" }, [
                  _vm._v(
                    "\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n            "
                  )
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            { staticClass: "message unread" },
            [
              _c("router-link", { attrs: { to: "./message" } }, [
                _c("div", { staticClass: "actions" }, [
                  _c("span", { staticClass: "action" }, [
                    _c("i", { staticClass: "fa fa-square-o" })
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "action" }, [
                    _c("i", { staticClass: "fa fa-star-o" })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "header" }, [
                  _c("span", { staticClass: "from" }, [
                    _vm._v("Lukasz Holeczek")
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "date" }, [
                    _vm._v("Today, 3:47 PM")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "title" }, [
                  _vm._v(
                    "\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n            "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "description" }, [
                  _vm._v(
                    "\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n            "
                  )
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            { staticClass: "message" },
            [
              _c("router-link", { attrs: { to: "./message" } }, [
                _c("div", { staticClass: "actions" }, [
                  _c("span", { staticClass: "action" }, [
                    _c("i", { staticClass: "fa fa-square-o" })
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "action" }, [
                    _c("i", { staticClass: "fa fa-star-o" })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "header" }, [
                  _c("span", { staticClass: "from" }, [
                    _vm._v("Lukasz Holeczek")
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "date" }, [
                    _vm._v("Today, 3:47 PM")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "title" }, [
                  _vm._v(
                    "\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n            "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "description" }, [
                  _vm._v(
                    "\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n            "
                  )
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            { staticClass: "message" },
            [
              _c("router-link", { attrs: { to: "./message" } }, [
                _c("div", { staticClass: "actions" }, [
                  _c("span", { staticClass: "action" }, [
                    _c("i", { staticClass: "fa fa-square-o" })
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "action" }, [
                    _c("i", { staticClass: "fa fa-star-o" })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "header" }, [
                  _c("span", { staticClass: "from" }, [
                    _vm._v("Lukasz Holeczek")
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "date" }, [
                    _vm._v("Today, 3:47 PM")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "title" }, [
                  _vm._v(
                    "\n              Lorem ipsum dolor sit amet.\n            "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "description" }, [
                  _vm._v(
                    "\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n            "
                  )
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            { staticClass: "message unread" },
            [
              _c("router-link", { attrs: { to: "./message" } }, [
                _c("div", { staticClass: "actions" }, [
                  _c("span", { staticClass: "action" }, [
                    _c("i", { staticClass: "fa fa-square-o" })
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "action" }, [
                    _c("i", { staticClass: "fa fa-star-o" })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "header" }, [
                  _c("span", { staticClass: "from" }, [
                    _vm._v("Lukasz Holeczek")
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "date" }, [
                    _vm._v("Today, 3:47 PM")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "title" }, [
                  _vm._v(
                    "\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n            "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "description" }, [
                  _vm._v(
                    "\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n            "
                  )
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            { staticClass: "message" },
            [
              _c("router-link", { attrs: { to: "./message" } }, [
                _c("div", { staticClass: "actions" }, [
                  _c("span", { staticClass: "action" }, [
                    _c("i", { staticClass: "fa fa-square-o" })
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "action" }, [
                    _c("i", { staticClass: "fa fa-star-o" })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "header" }, [
                  _c("span", { staticClass: "from" }, [
                    _vm._v("Lukasz Holeczek")
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "date" }, [
                    _vm._v("Today, 3:47 PM")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "title" }, [
                  _vm._v(
                    "\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n            "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "description" }, [
                  _vm._v(
                    "\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n            "
                  )
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            { staticClass: "message" },
            [
              _c("router-link", { attrs: { to: "./message" } }, [
                _c("div", { staticClass: "actions" }, [
                  _c("span", { staticClass: "action" }, [
                    _c("i", { staticClass: "fa fa-square-o" })
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "action" }, [
                    _c("i", { staticClass: "fa fa-star-o" })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "header" }, [
                  _c("span", { staticClass: "from" }, [
                    _vm._v("Lukasz Holeczek")
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "date" }, [
                    _vm._v("Today, 3:47 PM")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "title" }, [
                  _vm._v(
                    "\n              Lorem ipsum dolor sit amet.\n            "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "description" }, [
                  _vm._v(
                    "\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n            "
                  )
                ])
              ])
            ],
            1
          )
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
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/apps/email/Inbox.vue":
/*!*****************************************************!*\
  !*** ./resources/js/src/views/apps/email/Inbox.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Inbox_vue_vue_type_template_id_711fa7c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Inbox.vue?vue&type=template&id=711fa7c0& */ "./resources/js/src/views/apps/email/Inbox.vue?vue&type=template&id=711fa7c0&");
/* harmony import */ var _Inbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Inbox.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/email/Inbox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Inbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Inbox_vue_vue_type_template_id_711fa7c0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Inbox_vue_vue_type_template_id_711fa7c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/email/Inbox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/email/Inbox.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/apps/email/Inbox.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Inbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Inbox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/Inbox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Inbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/email/Inbox.vue?vue&type=template&id=711fa7c0&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/apps/email/Inbox.vue?vue&type=template&id=711fa7c0& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Inbox_vue_vue_type_template_id_711fa7c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Inbox.vue?vue&type=template&id=711fa7c0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/Inbox.vue?vue&type=template&id=711fa7c0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Inbox_vue_vue_type_template_id_711fa7c0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Inbox_vue_vue_type_template_id_711fa7c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);