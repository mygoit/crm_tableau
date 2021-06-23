(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/GoogleMaps.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/GoogleMaps.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_google_maps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-google-maps */ "./node_modules/vue2-google-maps/dist/main.js");
/* harmony import */ var vue2_google_maps__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue2_google_maps__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


vue__WEBPACK_IMPORTED_MODULE_1___default.a.use(vue2_google_maps__WEBPACK_IMPORTED_MODULE_0__, {
  load: {
    key: 'AIzaSyASyYRBZmULmrmw_P9kgr7_266OhFNinPA' // key: ''
    // To use the Google Maps JavaScript API, you must register your app project on the Google API Console and get a Google API key which you can add to your app
    // v: 'OPTIONAL VERSION NUMBER',
    // libraries: 'places', //// If you need to use place input

  }
});
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'google-maps',
  data: function data() {
    return {
      center: {
        lat: 37.431489,
        lng: -122.163719
      },
      markers: [{
        position: {
          lat: 37.431489,
          lng: -122.163719
        },
        label: 'S',
        draggable: false,
        title: 'Stanford',
        www: 'https://www.stanford.edu/'
      }, {
        position: {
          lat: 37.394694,
          lng: -122.150333
        },
        label: 'T',
        draggable: false,
        title: 'Tesla',
        www: 'https://www.tesla.com/'
      }, {
        position: {
          lat: 37.331681,
          lng: -122.030100
        },
        label: 'A',
        draggable: false,
        title: 'Apple',
        www: 'https://www.apple.com/'
      }, {
        position: {
          lat: 37.484722,
          lng: -122.148333
        },
        label: 'F',
        draggable: false,
        title: 'Facebook',
        www: 'https://www.facebook.com/'
      }],
      infoContent: '',
      infoLink: '',
      infoWindowPos: {
        lat: 0,
        lng: 0
      },
      infoWinOpen: false,
      currentMidx: null,
      // optional: offset infowindow so it visually sits nicely on top of our marker
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      }
    };
  },
  methods: {
    toggleInfoWindow: function toggleInfoWindow(marker, idx) {
      this.infoWindowPos = marker.position;
      this.infoContent = marker.title;
      this.infoLink = marker.www; // check if its the same marker that was selected if yes toggle

      if (this.currentMidx === idx) {
        this.infoWinOpen = !this.infoWinOpen;
      } else {
        // if different marker set infowindow to open and reset current marker index
        this.currentMidx = idx;
        this.infoWinOpen = true;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/GoogleMaps.vue?vue&type=template&id=0324631a&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/GoogleMaps.vue?vue&type=template&id=0324631a& ***!
  \************************************************************************************************************************************************************************************************************/
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
    "b-card",
    [
      _c("div", { attrs: { slot: "header" }, slot: "header" }, [
        _vm._v("\n    Vue Google Maps\n    "),
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
                href: "https://github.com/xkjyeah/vue-google-maps",
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
        "gmap-map",
        {
          staticStyle: { height: "400px" },
          attrs: { center: _vm.center, zoom: 11 }
        },
        [
          _c(
            "gmap-info-window",
            {
              attrs: {
                options: _vm.infoOptions,
                position: _vm.infoWindowPos,
                opened: _vm.infoWinOpen
              },
              on: {
                closeclick: function($event) {
                  _vm.infoWinOpen = false
                }
              }
            },
            [
              _c(
                "b-link",
                { attrs: { href: _vm.infoLink, target: "_blank" } },
                [_vm._v(_vm._s(_vm.infoContent))]
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm._l(_vm.markers, function(m, index) {
            return _c("gmap-marker", {
              key: index,
              attrs: {
                position: m.position,
                label: m.label,
                title: m.title,
                clickable: true,
                draggable: m.draggable
              },
              on: {
                click: function($event) {
                  return _vm.toggleInfoWindow(m, index)
                }
              }
            })
          })
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/GoogleMaps.vue":
/*!***********************************************!*\
  !*** ./resources/js/src/views/GoogleMaps.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GoogleMaps_vue_vue_type_template_id_0324631a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GoogleMaps.vue?vue&type=template&id=0324631a& */ "./resources/js/src/views/GoogleMaps.vue?vue&type=template&id=0324631a&");
/* harmony import */ var _GoogleMaps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GoogleMaps.vue?vue&type=script&lang=js& */ "./resources/js/src/views/GoogleMaps.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GoogleMaps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GoogleMaps_vue_vue_type_template_id_0324631a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GoogleMaps_vue_vue_type_template_id_0324631a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/GoogleMaps.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/GoogleMaps.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/GoogleMaps.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleMaps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./GoogleMaps.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/GoogleMaps.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleMaps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/GoogleMaps.vue?vue&type=template&id=0324631a&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/GoogleMaps.vue?vue&type=template&id=0324631a& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleMaps_vue_vue_type_template_id_0324631a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./GoogleMaps.vue?vue&type=template&id=0324631a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/GoogleMaps.vue?vue&type=template&id=0324631a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleMaps_vue_vue_type_template_id_0324631a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleMaps_vue_vue_type_template_id_0324631a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);