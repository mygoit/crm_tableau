(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/array-intersect/dist/array-intersect.module.js":
/*!*********************************************************************!*\
  !*** ./node_modules/array-intersect/dist/array-intersect.module.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var intersect = function intersect(first) {
  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  return rest.reduce(function (accum, current) {
    return accum.filter(function (x) {
      return current.indexOf(x) !== -1;
    });
  }, first);
};

/* harmony default export */ __webpack_exports__["default"] = (intersect);


/***/ }),

/***/ "./node_modules/babel-helper-vue-jsx-merge-props/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/babel-helper-vue-jsx-merge-props/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var nestRE = /^(attrs|props|on|nativeOn|class|style|hook)$/

module.exports = function mergeJSXProps (objs) {
  return objs.reduce(function (a, b) {
    var aa, bb, key, nestedKey, temp
    for (key in b) {
      aa = a[key]
      bb = b[key]
      if (aa && nestRE.test(key)) {
        // normalize class
        if (key === 'class') {
          if (typeof aa === 'string') {
            temp = aa
            a[key] = aa = {}
            aa[temp] = true
          }
          if (typeof bb === 'string') {
            temp = bb
            b[key] = bb = {}
            bb[temp] = true
          }
        }
        if (key === 'on' || key === 'nativeOn' || key === 'hook') {
          // merge functions
          for (nestedKey in bb) {
            aa[nestedKey] = mergeFn(aa[nestedKey], bb[nestedKey])
          }
        } else if (Array.isArray(aa)) {
          a[key] = aa.concat(bb)
        } else if (Array.isArray(bb)) {
          a[key] = [aa].concat(bb)
        } else {
          for (nestedKey in bb) {
            aa[nestedKey] = bb[nestedKey]
          }
        }
      } else {
        a[key] = b[key]
      }
    }
    return a
  }, {})
}

function mergeFn (a, b) {
  return function () {
    a && a.apply(this, arguments)
    b && b.apply(this, arguments)
  }
}


/***/ }),

/***/ "./node_modules/clone/clone.js":
/*!*************************************!*\
  !*** ./node_modules/clone/clone.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {var clone = (function() {
'use strict';

function _instanceof(obj, type) {
  return type != null && obj instanceof type;
}

var nativeMap;
try {
  nativeMap = Map;
} catch(_) {
  // maybe a reference error because no `Map`. Give it a dummy value that no
  // value will ever be an instanceof.
  nativeMap = function() {};
}

var nativeSet;
try {
  nativeSet = Set;
} catch(_) {
  nativeSet = function() {};
}

var nativePromise;
try {
  nativePromise = Promise;
} catch(_) {
  nativePromise = function() {};
}

/**
 * Clones (copies) an Object using deep copying.
 *
 * This function supports circular references by default, but if you are certain
 * there are no circular references in your object, you can save some CPU time
 * by calling clone(obj, false).
 *
 * Caution: if `circular` is false and `parent` contains circular references,
 * your program may enter an infinite loop and crash.
 *
 * @param `parent` - the object to be cloned
 * @param `circular` - set to true if the object to be cloned may contain
 *    circular references. (optional - true by default)
 * @param `depth` - set to a number if the object is only to be cloned to
 *    a particular depth. (optional - defaults to Infinity)
 * @param `prototype` - sets the prototype to be used when cloning an object.
 *    (optional - defaults to parent prototype).
 * @param `includeNonEnumerable` - set to true if the non-enumerable properties
 *    should be cloned as well. Non-enumerable properties on the prototype
 *    chain will be ignored. (optional - false by default)
*/
function clone(parent, circular, depth, prototype, includeNonEnumerable) {
  if (typeof circular === 'object') {
    depth = circular.depth;
    prototype = circular.prototype;
    includeNonEnumerable = circular.includeNonEnumerable;
    circular = circular.circular;
  }
  // maintain two arrays for circular references, where corresponding parents
  // and children have the same index
  var allParents = [];
  var allChildren = [];

  var useBuffer = typeof Buffer != 'undefined';

  if (typeof circular == 'undefined')
    circular = true;

  if (typeof depth == 'undefined')
    depth = Infinity;

  // recurse this function so we don't reset allParents and allChildren
  function _clone(parent, depth) {
    // cloning null always returns null
    if (parent === null)
      return null;

    if (depth === 0)
      return parent;

    var child;
    var proto;
    if (typeof parent != 'object') {
      return parent;
    }

    if (_instanceof(parent, nativeMap)) {
      child = new nativeMap();
    } else if (_instanceof(parent, nativeSet)) {
      child = new nativeSet();
    } else if (_instanceof(parent, nativePromise)) {
      child = new nativePromise(function (resolve, reject) {
        parent.then(function(value) {
          resolve(_clone(value, depth - 1));
        }, function(err) {
          reject(_clone(err, depth - 1));
        });
      });
    } else if (clone.__isArray(parent)) {
      child = [];
    } else if (clone.__isRegExp(parent)) {
      child = new RegExp(parent.source, __getRegExpFlags(parent));
      if (parent.lastIndex) child.lastIndex = parent.lastIndex;
    } else if (clone.__isDate(parent)) {
      child = new Date(parent.getTime());
    } else if (useBuffer && Buffer.isBuffer(parent)) {
      if (Buffer.allocUnsafe) {
        // Node.js >= 4.5.0
        child = Buffer.allocUnsafe(parent.length);
      } else {
        // Older Node.js versions
        child = new Buffer(parent.length);
      }
      parent.copy(child);
      return child;
    } else if (_instanceof(parent, Error)) {
      child = Object.create(parent);
    } else {
      if (typeof prototype == 'undefined') {
        proto = Object.getPrototypeOf(parent);
        child = Object.create(proto);
      }
      else {
        child = Object.create(prototype);
        proto = prototype;
      }
    }

    if (circular) {
      var index = allParents.indexOf(parent);

      if (index != -1) {
        return allChildren[index];
      }
      allParents.push(parent);
      allChildren.push(child);
    }

    if (_instanceof(parent, nativeMap)) {
      parent.forEach(function(value, key) {
        var keyChild = _clone(key, depth - 1);
        var valueChild = _clone(value, depth - 1);
        child.set(keyChild, valueChild);
      });
    }
    if (_instanceof(parent, nativeSet)) {
      parent.forEach(function(value) {
        var entryChild = _clone(value, depth - 1);
        child.add(entryChild);
      });
    }

    for (var i in parent) {
      var attrs;
      if (proto) {
        attrs = Object.getOwnPropertyDescriptor(proto, i);
      }

      if (attrs && attrs.set == null) {
        continue;
      }
      child[i] = _clone(parent[i], depth - 1);
    }

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(parent);
      for (var i = 0; i < symbols.length; i++) {
        // Don't need to worry about cloning a symbol because it is a primitive,
        // like a number or string.
        var symbol = symbols[i];
        var descriptor = Object.getOwnPropertyDescriptor(parent, symbol);
        if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
          continue;
        }
        child[symbol] = _clone(parent[symbol], depth - 1);
        if (!descriptor.enumerable) {
          Object.defineProperty(child, symbol, {
            enumerable: false
          });
        }
      }
    }

    if (includeNonEnumerable) {
      var allPropertyNames = Object.getOwnPropertyNames(parent);
      for (var i = 0; i < allPropertyNames.length; i++) {
        var propertyName = allPropertyNames[i];
        var descriptor = Object.getOwnPropertyDescriptor(parent, propertyName);
        if (descriptor && descriptor.enumerable) {
          continue;
        }
        child[propertyName] = _clone(parent[propertyName], depth - 1);
        Object.defineProperty(child, propertyName, {
          enumerable: false
        });
      }
    }

    return child;
  }

  return _clone(parent, depth);
}

/**
 * Simple flat clone using prototype, accepts only objects, usefull for property
 * override on FLAT configuration object (no nested props).
 *
 * USE WITH CAUTION! This may not behave as you wish if you do not know how this
 * works.
 */
clone.clonePrototype = function clonePrototype(parent) {
  if (parent === null)
    return null;

  var c = function () {};
  c.prototype = parent;
  return new c();
};

// private utility functions

function __objToStr(o) {
  return Object.prototype.toString.call(o);
}
clone.__objToStr = __objToStr;

function __isDate(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Date]';
}
clone.__isDate = __isDate;

function __isArray(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Array]';
}
clone.__isArray = __isArray;

function __isRegExp(o) {
  return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
}
clone.__isRegExp = __isRegExp;

function __getRegExpFlags(re) {
  var flags = '';
  if (re.global) flags += 'g';
  if (re.ignoreCase) flags += 'i';
  if (re.multiline) flags += 'm';
  return flags;
}
clone.__getRegExpFlags = __getRegExpFlags;

return clone;
})();

if ( true && module.exports) {
  module.exports = clone;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/debounce/index.js":
/*!****************************************!*\
  !*** ./node_modules/debounce/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing. The function also has a property 'clear' 
 * that is a function which will clear the timer to prevent previously scheduled executions. 
 *
 * @source underscore.js
 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 * @param {Function} function to wrap
 * @param {Number} timeout in ms (`100`)
 * @param {Boolean} whether to execute at the beginning (`false`)
 * @api public
 */
function debounce(func, wait, immediate){
  var timeout, args, context, timestamp, result;
  if (null == wait) wait = 100;

  function later() {
    var last = Date.now() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        context = args = null;
      }
    }
  };

  var debounced = function(){
    context = this;
    args = arguments;
    timestamp = Date.now();
    var callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };

  debounced.clear = function() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };
  
  debounced.flush = function() {
    if (timeout) {
      result = func.apply(context, args);
      context = args = null;
      
      clearTimeout(timeout);
      timeout = null;
    }
  };

  return debounced;
};

// Adds compatibility for ES modules
debounce.debounce = debounce;

module.exports = debounce;


/***/ }),

/***/ "./node_modules/merge/merge.js":
/*!*************************************!*\
  !*** ./node_modules/merge/merge.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/*!
 * @name JavaScript/NodeJS Merge v1.2.1
 * @author yeikos
 * @repository https://github.com/yeikos/js.merge

 * Copyright 2014 yeikos - MIT license
 * https://raw.github.com/yeikos/js.merge/master/LICENSE
 */

;(function(isNode) {

	/**
	 * Merge one or more objects 
	 * @param bool? clone
	 * @param mixed,... arguments
	 * @return object
	 */

	var Public = function(clone) {

		return merge(clone === true, false, arguments);

	}, publicName = 'merge';

	/**
	 * Merge two or more objects recursively 
	 * @param bool? clone
	 * @param mixed,... arguments
	 * @return object
	 */

	Public.recursive = function(clone) {

		return merge(clone === true, true, arguments);

	};

	/**
	 * Clone the input removing any reference
	 * @param mixed input
	 * @return mixed
	 */

	Public.clone = function(input) {

		var output = input,
			type = typeOf(input),
			index, size;

		if (type === 'array') {

			output = [];
			size = input.length;

			for (index=0;index<size;++index)

				output[index] = Public.clone(input[index]);

		} else if (type === 'object') {

			output = {};

			for (index in input)

				output[index] = Public.clone(input[index]);

		}

		return output;

	};

	/**
	 * Merge two objects recursively
	 * @param mixed input
	 * @param mixed extend
	 * @return mixed
	 */

	function merge_recursive(base, extend) {

		if (typeOf(base) !== 'object')

			return extend;

		for (var key in extend) {

			if (typeOf(base[key]) === 'object' && typeOf(extend[key]) === 'object') {

				base[key] = merge_recursive(base[key], extend[key]);

			} else {

				base[key] = extend[key];

			}

		}

		return base;

	}

	/**
	 * Merge two or more objects
	 * @param bool clone
	 * @param bool recursive
	 * @param array argv
	 * @return object
	 */

	function merge(clone, recursive, argv) {

		var result = argv[0],
			size = argv.length;

		if (clone || typeOf(result) !== 'object')

			result = {};

		for (var index=0;index<size;++index) {

			var item = argv[index],

				type = typeOf(item);

			if (type !== 'object') continue;

			for (var key in item) {

				if (key === '__proto__') continue;

				var sitem = clone ? Public.clone(item[key]) : item[key];

				if (recursive) {

					result[key] = merge_recursive(result[key], sitem);

				} else {

					result[key] = sitem;

				}

			}

		}

		return result;

	}

	/**
	 * Get type of variable
	 * @param mixed input
	 * @return string
	 *
	 * @see http://jsperf.com/typeofvar
	 */

	function typeOf(input) {

		return ({}).toString.call(input).slice(8, -1).toLowerCase();

	}

	if (isNode) {

		module.exports = Public;

	} else {

		window[publicName] = Public;

	}

})( true && module && typeof module.exports === 'object' && module.exports);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/vue-pagination-2/compiled/Pagination.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-pagination-2/compiled/Pagination.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _config = __webpack_require__(/*! ./config */ "./node_modules/vue-pagination-2/compiled/config.js");

var _config2 = _interopRequireDefault(_config);

var _merge = __webpack_require__(/*! merge */ "./node_modules/merge/merge.js");

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var template = __webpack_require__(/*! ./template.js */ "./node_modules/vue-pagination-2/compiled/template.js");
var bus = __webpack_require__(/*! ./bus */ "./node_modules/vue-pagination-2/compiled/bus.js");


module.exports = {
  render: template.call(undefined),
  props: {
    for: {
      type: String,
      required: false
    },
    records: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      default: 25
    },
    vuex: {
      type: Boolean
    },
    options: {
      type: Object
    }
  },
  created: function created() {

    if (!this.vuex) return;

    if (!this.for) {
      throw new Error('vue-pagination-2: The "for" prop is required when using vuex');
    }

    var name = this.for;

    if (this.$store.state[name]) return;

    this.$store.registerModule(this.for, {
      state: {
        page: 1
      },
      mutations: _defineProperty({}, name + '/PAGINATE', function undefined(state, page) {
        state.page = page;
      })
    });
  },
  data: function data() {
    return {
      Page: 1,
      firstPage: 1
    };
  },
  computed: {
    opts: function opts() {
      return (0, _merge2.default)((0, _config2.default)(), this.options);
    },
    Theme: function Theme() {

      if (_typeof(this.opts.theme) === 'object') {
        return this.opts.theme;
      }

      var themes = {
        bootstrap3: __webpack_require__(/*! ./themes/bootstrap3 */ "./node_modules/vue-pagination-2/compiled/themes/bootstrap3.js"),
        bootstrap4: __webpack_require__(/*! ./themes/bootstrap4 */ "./node_modules/vue-pagination-2/compiled/themes/bootstrap4.js"),
        bulma: __webpack_require__(/*! ./themes/bulma */ "./node_modules/vue-pagination-2/compiled/themes/bulma.js")
      };

      if (_typeof(themes[this.opts.theme]) === undefined) {
        throw 'vue-pagination-2: the theme ' + this.opts.theme + ' does not exist';
      }

      return themes[this.opts.theme];
    },
    page: function page() {
      return this.vuex ? this.$store.state[this.for].page : this.Page;
    },

    pages: function pages() {
      if (!this.records) return [];

      return range(this.paginationStart, this.pagesInCurrentChunk);
    },
    totalPages: function totalPages() {
      return this.records ? Math.ceil(this.records / this.perPage) : 1;
    },
    totalChunks: function totalChunks() {
      return Math.ceil(this.totalPages / this.opts.chunk);
    },
    currentChunk: function currentChunk() {
      return Math.ceil(this.page / this.opts.chunk);
    },
    paginationStart: function paginationStart() {

      if (this.opts.chunksNavigation === 'scroll') {
        var page =  this.Page - this.opts.chunk + 1;
        return page > 0 ? page : 1;
      }

      return (this.currentChunk - 1) * this.opts.chunk + 1;
    },
    pagesInCurrentChunk: function pagesInCurrentChunk() {
      return this.paginationStart + this.opts.chunk <= this.totalPages ? this.opts.chunk : this.totalPages - this.paginationStart + 1;
    },
    count: function count() {

      if (/{page}/.test(this.opts.texts.count)) {

        if (this.totalPages <= 1) return '';

        return this.opts.texts.count.replace('{page}', this.page).replace('{pages}', this.totalPages);
      }

      var parts = this.opts.texts.count.split('|');
      var from = (this.page - 1) * this.perPage + 1;
      var to = this.page == this.totalPages ? this.records : from + this.perPage - 1;
      var i = Math.min(this.records == 1 ? 2 : this.totalPages == 1 ? 1 : 0, parts.length - 1);

      return parts[i].replace('{count}', this.formatNumber(this.records)).replace('{from}', this.formatNumber(from)).replace('{to}', this.formatNumber(to));
    }
  },
  methods: {
    setPage: function setPage(page) {
      if (this.allowedPage(page)) {
        this.paginate(page);
      }
    },
    paginate: function paginate(page) {
      if (this.vuex) {
        this.$store.commit(this.for + '/PAGINATE', page);
      } else {
        this.Page = page;
      }

      this.$emit('paginate', page);

      if (this.for) {
        bus.$emit('vue-pagination::' + this.for, page);
      }
    },

    next: function next() {
      var page = this.page + 1;
      if (this.opts.chunksNavigation === 'scroll' && this.allowedPage(page) && !this.inDisplay(page)) {
        this.firstPage++;
      }
      return this.setPage(page);
    },
    prev: function prev() {
      var page = this.page - 1;

      if (this.opts.chunksNavigation === 'scroll' && this.allowedPage(page) && !this.inDisplay(page)) {
        this.firstPage--;
      }

      return this.setPage(page);
    },
    inDisplay: function inDisplay(page) {

      var start = this.firstPage;
      var end = start + this.opts.chunk - 1;

      return page >= start && page <= end;
    },

    nextChunk: function nextChunk() {
      return this.setChunk(1);
    },
    prevChunk: function prevChunk() {
      return this.setChunk(-1);
    },
    setChunk: function setChunk(direction) {
      this.setPage((this.currentChunk - 1 + direction) * this.opts.chunk + 1);
    },
    allowedPage: function allowedPage(page) {
      return page >= 1 && page <= this.totalPages;
    },
    allowedChunk: function allowedChunk(direction) {
      return direction == 1 && this.currentChunk < this.totalChunks || direction == -1 && this.currentChunk > 1;
    },
    allowedPageClass: function allowedPageClass(direction) {
      return this.allowedPage(direction) ? '' : this.Theme.disabled;
    },
    allowedChunkClass: function allowedChunkClass(direction) {
      return this.allowedChunk(direction) ? '' : this.Theme.disabled;
    },
    activeClass: function activeClass(page) {
      return this.page == page ? this.Theme.active : '';
    },
    formatNumber: function formatNumber(num) {

      if (!this.opts.format) return num;

      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  },
  beforeDestroy: function beforeDestroy() {
    bus.$off();
    bus.$destroy();
  }
};

function range(start, count) {
  return Array.apply(0, Array(count)).map(function (element, index) {
    return index + start;
  });
}


/***/ }),

/***/ "./node_modules/vue-pagination-2/compiled/bus.js":
/*!*******************************************************!*\
  !*** ./node_modules/vue-pagination-2/compiled/bus.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bus = new _vue2.default();

module.exports = bus;

/***/ }),

/***/ "./node_modules/vue-pagination-2/compiled/config.js":
/*!**********************************************************!*\
  !*** ./node_modules/vue-pagination-2/compiled/config.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    return {
        format: true,
        chunk: 10,
        chunksNavigation: 'fixed',
        edgeNavigation: false,
        theme: 'bootstrap3',
        texts: {
            count: 'Showing {from} to {to} of {count} records|{count} records|One record',
            first: 'First',
            last: 'Last'
        }
    };
};

/***/ }),

/***/ "./node_modules/vue-pagination-2/compiled/template.js":
/*!************************************************************!*\
  !*** ./node_modules/vue-pagination-2/compiled/template.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {

  return function (h) {

    var theme = this.Theme;
    var prevChunk = '';
    var nextChunk = '';
    var firstPage = '';
    var lastPage = '';
    var items = this.pages.map(function (page) {

      return h(
        'li',
        { 'class': 'VuePagination__pagination-item ' + theme.item + ' ' + this.activeClass(page),
          on: {
            'click': this.setPage.bind(this, page)
          }
        },
        [h(
          'a',
          { 'class': theme.link + ' ' + this.activeClass(page),
            attrs: { href: 'javascript:void(0)',
              role: 'button' }
          },
          [page]
        )]
      );
    }.bind(this));

    if (this.opts.edgeNavigation && this.totalChunks > 1) {
      firstPage = h(
        'li',
        { 'class': 'VuePagination__pagination-item ' + theme.item + ' ' + (this.page === 1 ? theme.disabled : '') + ' VuePagination__pagination-item-prev-chunk',
          on: {
            'click': this.setPage.bind(this, 1)
          }
        },
        [h(
          'a',
          { 'class': theme.link,
            attrs: { href: 'javascript:void(0);',
              disabled: this.page === 1 }
          },
          [this.opts.texts.first]
        )]
      );

      lastPage = h(
        'li',
        { 'class': 'VuePagination__pagination-item ' + theme.item + ' ' + (this.page === this.totalPages ? theme.disabled : '') + ' VuePagination__pagination-item-prev-chunk',
          on: {
            'click': this.setPage.bind(this, this.totalPages)
          }
        },
        [h(
          'a',
          { 'class': theme.link,
            attrs: { href: 'javascript:void(0);',
              disabled: this.page === this.totalPages }
          },
          [this.opts.texts.last]
        )]
      );
    }

    if (this.opts.chunksNavigation === 'fixed') {

      prevChunk = h(
        'li',
        { 'class': 'VuePagination__pagination-item ' + theme.item + ' ' + theme.prev + ' VuePagination__pagination-item-prev-chunk ' + this.allowedChunkClass(-1),
          on: {
            'click': this.setChunk.bind(this, -1)
          }
        },
        [h(
          'a',
          { 'class': theme.link,
            attrs: { href: 'javascript:void(0);',
              disabled: !!this.allowedChunkClass(-1) }
          },
          ['<<']
        )]
      );

      nextChunk = h(
        'li',
        { 'class': 'VuePagination__pagination-item ' + theme.item + ' ' + theme.next + ' VuePagination__pagination-item-next-chunk ' + this.allowedChunkClass(1),
          on: {
            'click': this.setChunk.bind(this, 1)
          }
        },
        [h(
          'a',
          { 'class': theme.link,
            attrs: { href: 'javascript:void(0);',
              disabled: !!this.allowedChunkClass(1) }
          },
          ['>>']
        )]
      );
    }

    return h(
      'div',
      { 'class': 'VuePagination ' + theme.wrapper },
      [h(
        'nav',
        { 'class': '' + theme.nav },
        [h(
          'ul',
          {
            directives: [{
              name: 'show',
              value: this.totalPages > 1
            }],

            'class': theme.list + ' VuePagination__pagination' },
          [firstPage, prevChunk, h(
            'li',
            { 'class': 'VuePagination__pagination-item ' + theme.item + ' ' + theme.prev + ' VuePagination__pagination-item-prev-page ' + this.allowedPageClass(this.page - 1),
              on: {
                'click': this.prev.bind(this)
              }
            },
            [h(
              'a',
              { 'class': theme.link,
                attrs: { href: 'javascript:void(0);',
                  disabled: !!this.allowedPageClass(this.page - 1)
                }
              },
              ['<']
            )]
          ), items, h(
            'li',
            { 'class': 'VuePagination__pagination-item ' + theme.item + ' ' + theme.next + ' VuePagination__pagination-item-next-page ' + this.allowedPageClass(this.page + 1),
              on: {
                'click': this.next.bind(this)
              }
            },
            [h(
              'a',
              { 'class': theme.link,
                attrs: { href: 'javascript:void(0);',
                  disabled: !!this.allowedPageClass(this.page + 1)
                }
              },
              ['>']
            )]
          ), nextChunk, lastPage]
        ), h(
          'p',
          {
            directives: [{
              name: 'show',
              value: parseInt(this.records)
            }],

            'class': 'VuePagination__count ' + theme.count },
          [this.count]
        )]
      )]
    );
  };
};

/***/ }),

/***/ "./node_modules/vue-pagination-2/compiled/themes/bootstrap3.js":
/*!*********************************************************************!*\
  !*** ./node_modules/vue-pagination-2/compiled/themes/bootstrap3.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    nav: '',
    count: '',
    wrapper: '',
    list: 'pagination',
    item: 'page-item',
    link: 'page-link',
    next: '',
    prev: '',
    active: 'active',
    disabled: 'disabled'
};

/***/ }),

/***/ "./node_modules/vue-pagination-2/compiled/themes/bootstrap4.js":
/*!*********************************************************************!*\
  !*** ./node_modules/vue-pagination-2/compiled/themes/bootstrap4.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    nav: '',
    count: '',
    wrapper: '',
    list: 'pagination',
    item: 'page-item',
    link: 'page-link',
    next: '',
    prev: '',
    active: 'active',
    disabled: 'disabled'
};

/***/ }),

/***/ "./node_modules/vue-pagination-2/compiled/themes/bulma.js":
/*!****************************************************************!*\
  !*** ./node_modules/vue-pagination-2/compiled/themes/bulma.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    nav: '',
    count: '',
    wrapper: 'pagination',
    list: 'pagination-list',
    item: '',
    link: 'pagination-link',
    next: '',
    prev: '',
    active: 'is-current',
    disabled: '' // uses the disabled HTML attirbute
};

/***/ }),

/***/ "./node_modules/vue-pagination-2/index.js":
/*!************************************************!*\
  !*** ./node_modules/vue-pagination-2/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Pagination = __webpack_require__(/*! ./compiled/Pagination */ "./node_modules/vue-pagination-2/compiled/Pagination.js");
var PaginationEvent = __webpack_require__(/*! ./compiled/bus */ "./node_modules/vue-pagination-2/compiled/bus.js");

module.exports = {
  Pagination:Pagination,
  PaginationEvent:PaginationEvent
}


/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/bus.js":
/*!***************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/bus.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var bus = new _vue["default"]();
var _default = bus;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/computed/all-columns.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/computed/all-columns.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  var _this = this;

  var display = this.columnsDisplay; // default - return all columns

  if (!display && !this.userControlsColumns) {
    return this.Columns.filter(function (col) {
      return _this._shouldShowColumnOnInit(col);
    });
  } // user toggled columns - return user selected columns


  if (this.userControlsColumns) {
    return this.columns.filter(function (column) {
      return _this.userColumnsDisplay.includes(column);
    });
  }

  if (this.opts.ssr) return this.Columns; // developer defined columns display

  return this.Columns.filter(function (column) {
    if (!_this._shouldShowColumnOnInit(column)) {
      return false;
    }

    if (!display[column]) return true;
    var range = display[column];
    var operator = range[2];
    var inRange = (!range[0] || _this.windowWidth >= range[0]) && (!range[1] || _this.windowWidth < range[1]);
    return operator == 'not' ? !inRange : inRange;
  });
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/computed/colspan.js":
/*!****************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/computed/colspan.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  return this.hasChildRow ? this.allColumns.length + 1 : this.allColumns.length;
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/computed/custom-q.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/computed/custom-q.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  return JSON.stringify(this.customQueries);
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/computed/datepicker-columns.js":
/*!***************************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/computed/datepicker-columns.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var intersect = __webpack_require__(/*! array-intersect */ "./node_modules/array-intersect/dist/array-intersect.module.js")["default"];

module.exports = function () {
  if (this.opts.filterable === true) {
    return this.opts.dateColumns;
  }

  if (this.opts.filterable === false) {
    return [];
  }

  return intersect(this.opts.filterable, this.opts.dateColumns);
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/computed/filterable-columns.js":
/*!***************************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/computed/filterable-columns.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  return this.opts.filterable && this.opts.filterable.length ? this.opts.filterable : this.Columns;
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/computed/filtered-data.js":
/*!**********************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/computed/filtered-data.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var clone = __webpack_require__(/*! clone */ "./node_modules/clone/clone.js");

module.exports = {
  get: function get() {
    var data = clone(this.tableData);
    var column = this.orderBy.column;
    data = this.search(data);

    if (column) {
      // dummy var to force compilation
      if (this.time) this.time = this.time;
      data = this.opts.sortingAlgorithm.call(this, data, column);
    } else if (this.opts.groupBy) {
      data = this.opts.sortingAlgorithm.call(this, data, this.opts.groupBy);
    }

    if (this.vuex) {
      if (this.count != data.length) this.commit('SET_COUNT', data.length);
    } else {
      this.count = data.length;
    }

    var offset = (this.page - 1) * this.limit;
    this.allFilteredData = JSON.parse(JSON.stringify(data));
    data = data.splice(offset, this.limit);
    return this.applyFilters(data);
  },
  set: function set(val) {
    console.log(val);
  }
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/computed/filtered-query.js":
/*!***********************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/computed/filtered-query.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function () {
  if (_typeof(this.query) !== 'object' || this.opts.sendEmptyFilters) {
    return this.query;
  }

  var result = {};

  for (var key in this.query) {
    if (this.query[key] !== '' && this.filterable(key)) {
      result[key] = this.query[key];
    }
  }

  return result;
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/computed/has-child-row.js":
/*!**********************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/computed/has-child-row.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  return this.opts.childRow || this.$scopedSlots.child_row;
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/computed/has-generic-filter.js":
/*!***************************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/computed/has-generic-filter.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function () {
  return !this.opts.filterByColumn && (typeof this.opts.filterable === 'boolean' && this.opts.filterable || _typeof(this.opts.filterable) === 'object' && this.opts.filterable.length);
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/computed/list-columns-object.js":
/*!****************************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/computed/list-columns-object.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  var columns = Object.keys(this.opts.listColumns);
  var res = {};
  columns.forEach(function (column) {
    res[column] = {};
    this.opts.listColumns[column].forEach(function (item) {
      res[column][item.id] = item.text;
    });
  }.bind(this));
  return res;
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/computed/opts.js":
/*!*************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/computed/opts.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  var defaults = __webpack_require__(/*! ../config/defaults */ "./node_modules/vue-tables-2/compiled/config/defaults.js")();

  return this.initOptions(defaults, this.globalOptions, this.options);
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/computed/q.js":
/*!**********************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/computed/q.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  return this.opts.filterByColumn ? JSON.stringify(this.query) : this.query;
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/computed/storage.js":
/*!****************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/computed/storage.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  if (typeof localStorage === 'undefined') return {};
  return this.opts.storage === 'local' ? localStorage : sessionStorage;
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/computed/table-data.js":
/*!*******************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/computed/table-data.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  return this.data;
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/computed/templates-keys.js":
/*!***********************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/computed/templates-keys.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  return Object.keys(this.opts.templates);
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/computed/total-pages.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/computed/total-pages.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  return Math.ceil(this.count / this.limit);
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/config/defaults.js":
/*!***************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/config/defaults.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  return {
    alwaysShowPerPageSelect: false,
    hidePerPageSelect: false,
    dateColumns: [],
    listColumns: {},
    datepickerOptions: {
      locale: {
        cancelLabel: "Clear"
      }
    },
    datepickerPerColumnOptions: {},
    initialPage: 1,
    perPage: 10,
    perPageValues: [10, 25, 50, 100],
    groupBy: false,
    collapseGroups: false,
    destroyEventBus: false,
    sendEmptyFilters: false,
    params: {},
    sortable: true,
    filterable: true,
    groupMeta: [],
    initFilters: {},
    sendInitialRequest: true,
    customFilters: [],
    templates: {},
    debounce: 250,
    dateFormat: "DD/MM/YYYY",
    dateFormatPerColumn: {},
    toMomentFormat: false,
    skin: false,
    columnsDisplay: {},
    columnsDropdown: false,
    texts: {
      count: "Showing {from} to {to} of {count} records|{count} records|One record",
      first: "First",
      last: "Last",
      filter: "Filter:",
      filterPlaceholder: "Search query",
      limit: "Records:",
      page: "Page:",
      noResults: "No matching records",
      filterBy: "Filter by {column}",
      loading: "Loading...",
      defaultOption: "Select {column}",
      columns: "Columns"
    },
    sortIcon: {
      is: "glyphicon-sort",
      base: "glyphicon",
      up: "glyphicon-chevron-up",
      down: "glyphicon-chevron-down"
    },
    sortingAlgorithm: function sortingAlgorithm(data, column) {
      return data.sort(this.getSortFn(column));
    },
    filterAlgorithm: {},
    customSorting: {},
    multiSorting: {},
    clientMultiSorting: true,
    serverMultiSorting: false,
    filterByColumn: false,
    highlightMatches: false,
    orderBy: false,
    descOrderColumns: [],
    footerHeadings: false,
    headings: {},
    headingsTooltips: {},
    pagination: {
      dropdown: false,
      chunk: 10,
      edge: false,
      align: "center",
      nav: "fixed"
    },
    childRow: false,
    childRowTogglerFirst: true,
    showChildRowToggler: true,
    uniqueKey: "id",
    requestFunction: false,
    requestAdapter: function requestAdapter(data) {
      return data;
    },
    responseAdapter: function responseAdapter(resp) {
      var data = this.getResponseData(resp);
      return {
        data: data.data,
        count: data.count
      };
    },
    requestKeys: {
      query: "query",
      limit: "limit",
      orderBy: "orderBy",
      ascending: "ascending",
      page: "page",
      byColumn: "byColumn"
    },
    rowClassCallback: false,
    preserveState: false,
    saveState: false,
    storage: "local",
    columnsClasses: {},
    summary: false,
    caption: false,
    cellClasses: {},
    visibleColumns: false,
    hiddenColumns: false,
    resizableColumns: true,
    editableColumns: []
  };
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/filters/custom-filters.js":
/*!**********************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/filters/custom-filters.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (data, customFilters, customQueries) {
  var passing;
  return data.filter(function (row) {
    passing = true;
    customFilters.forEach(function (filter) {
      var value = customQueries[filter.name];
      if (value && !filter.callback(row, value)) passing = false;
    });
    return passing;
  });
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/filters/format-date.js":
/*!*******************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/filters/format-date.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var validMoment = __webpack_require__(/*! ../helpers/is-valid-moment-object */ "./node_modules/vue-tables-2/compiled/helpers/is-valid-moment-object.js");

module.exports = function (value, dateFormat) {
  if (!validMoment(value)) return value;
  return value.format(dateFormat);
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/filters/highlight-matches.js":
/*!*************************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/filters/highlight-matches.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (value, column, h) {
  var query = this.opts.filterByColumn ? this.query[column] : this.query;
  if (!query) return value;
  query = new RegExp("(" + escapeRegex(query) + ")", "i");
  return h("span", {
    "class": 'VueTables__highlight'
  }, matches(value, query, h));
};

function matches(value, query, h) {
  var pieces = String(value).split(query);
  return pieces.map(function (piece) {
    if (query.test(piece)) {
      return h("b", {}, piece);
    }

    return piece;
  });
}

function escapeRegex(s) {
  return typeof s === 'string' ? s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') : s;
}

;

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/filters/option-text.js":
/*!*******************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/filters/option-text.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (value, column) {
  var list = this.listColumnsObject[column];
  if (typeof list[value] == 'undefined') return value;
  return list[value];
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/helpers/is-empty.js":
/*!****************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/helpers/is-empty.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (obj) {
  // null and undefined are "empty"
  if (obj == null) return true; // Assume if it has a length property with a non-zero value
  // that that property is correct.

  if (obj.length > 0) return false;
  if (obj.length === 0) return true; // Otherwise, does it have any properties of its own?

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) return false;
  }

  return true;
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/helpers/is-valid-moment-object.js":
/*!******************************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/helpers/is-valid-moment-object.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (val) {
  return val && typeof val.isValid == 'function' && val.isValid();
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/helpers/object-filled-keys-count.js":
/*!********************************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/helpers/object-filled-keys-count.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function (obj) {
  var count = 0;

  for (var prop in obj) {
    var isDateRange = _typeof(obj[prop]) == 'object';
    if (isDateRange || obj[prop] && (!isNaN(obj[prop]) || obj[prop].trim())) count++;
  }

  return count;
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/helpers/resizeable-columns.js":
/*!**************************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/helpers/resizeable-columns.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function (table, hasChildRow, isChildRowTogglerFirst, resizeableColumns) {
  var row = table.getElementsByTagName("tr")[0],
      cols = row ? Array.from(row.children) : undefined;
  if (!cols) return;

  if (_typeof(resizeableColumns) === 'object') {
    cols = cols.filter(function (col) {
      return resizeableColumns.includes(col.id.split('--')[1]);
    });
  }

  table.style.overflow = "hidden";
  var tableHeight = table.offsetHeight;
  var i = hasChildRow && isChildRowTogglerFirst ? 1 : 0;
  var till = hasChildRow && !isChildRowTogglerFirst ? cols.length - 2 : cols.length;
  var documentListeners = [];

  for (; i < till; i++) {
    var div = createDiv(tableHeight);
    div.className = "resize-handle";
    cols[i].appendChild(div);
    cols[i].style.position = "relative";
    setListeners(div);
  }

  function setListeners(div) {
    var pageX, curCol, nxtCol, curColWidth, nxtColWidth;
    div.addEventListener("mousedown", function (e) {
      e.preventDefault();
      e.stopPropagation();
      curCol = e.target.parentElement;
      nxtCol = curCol.nextElementSibling;
      pageX = e.pageX;
      var padding = paddingDiff(curCol);
      curColWidth = curCol.offsetWidth - padding;
      if (nxtCol) nxtColWidth = nxtCol.offsetWidth - padding;
    }); // div.addEventListener("mouseover", function(e) {
    //   e.target.style.borderRight = "2px solid #0000ff";
    // });

    div.addEventListener("mouseout", function (e) {
      e.target.style.borderRight = "";
    });

    function onMouseMove(e) {
      if (curCol) {
        var diffX = e.pageX - pageX;
        if (nxtCol) nxtCol.style.width = nxtColWidth - diffX + "px";
        curCol.style.width = curColWidth + diffX + "px";
      }
    }

    function onMouseUp(e) {
      if (e.target.nodeName === 'INPUT') return;
      e.preventDefault();
      e.stopPropagation();
      curCol = undefined;
      nxtCol = undefined;
      pageX = undefined;
      nxtColWidth = undefined;
      curColWidth = undefined;
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    documentListeners.push({
      event: "mousemove",
      handler: onMouseMove
    }, {
      event: "mouseup",
      handler: onMouseUp
    });
  }

  function createDiv(height) {
    var div = document.createElement("div");
    div.style.top = 0;
    div.style.right = 0;
    div.style.width = "5px";
    div.style.position = "absolute";
    div.style.cursor = "col-resize";
    div.style.userSelect = "none";
    div.style.height = height + "px";
    return div;
  }

  function paddingDiff(col) {
    if (getStyleVal(col, "box-sizing") == "border-box") {
      return 0;
    }

    var padLeft = getStyleVal(col, "padding-left");
    var padRight = getStyleVal(col, "padding-right");
    return parseInt(padLeft) + parseInt(padRight);
  }

  function getStyleVal(elm, css) {
    return window.getComputedStyle(elm, null).getPropertyValue(css);
  }

  function removeDocumentListeners() {
    documentListeners.forEach(function (listener) {
      document.removeEventListener(listener.event, listener.handler);
    });
  }

  return removeDocumentListeners;
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/helpers/ucfirst.js":
/*!***************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/helpers/ucfirst.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _bus = _interopRequireDefault(__webpack_require__(/*! ./bus */ "./node_modules/vue-tables-2/compiled/bus.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ClientTable = __webpack_require__(/*! ./v-client-table */ "./node_modules/vue-tables-2/compiled/v-client-table.js");

var ServerTable = __webpack_require__(/*! ./v-server-table */ "./node_modules/vue-tables-2/compiled/v-server-table.js");

module.exports = {
  ClientTable: ClientTable,
  ServerTable: ServerTable,
  Event: _bus["default"]
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/apply-filters.js":
/*!*********************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/apply-filters.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function (data) {
  var _this = this;

  try {
    return data.map(function (row) {
      for (var column in row) {
        if (_this.source === 'client') row[column] = _this.formatDate(row[column], _this.dateFormat(column));

        if (_this.isListFilter(column) && !_this.opts.templates[column] && !_this.$scopedSlots[column]) {
          row[column] = _this.optionText(row[column], column);
        }
      }

      return row;
    });
  } catch (e) {
    console.error("vue-tables-2: non-iterable data property. Expected array, got ".concat(_typeof(data), ". Make sure that your response conforms to the expected format, or use the 'responseAdapter' option to match the currently returned format"));
    console.error('Data equals', data);
    throw new Error();
  }
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/cell-classes.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/cell-classes.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (column, row) {
  if (!this.opts.cellClasses[column]) return '';
  return this.opts.cellClasses[column].filter(function (item) {
    return item.condition(row);
  }).map(function (item) {
    return item["class"];
  }).join(' ');
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/child-row-toggler-class.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/child-row-toggler-class.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (rowId) {
  return this.openChildRows.includes(rowId) ? 'VueTables__child-row-toggler--open' : 'VueTables__child-row-toggler--closed';
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/client-search.js":
/*!*********************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/client-search.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var object_filled_keys_count = __webpack_require__(/*! ../helpers/object-filled-keys-count */ "./node_modules/vue-tables-2/compiled/helpers/object-filled-keys-count.js");

var is_valid_moment_object = __webpack_require__(/*! ../helpers/is-valid-moment-object */ "./node_modules/vue-tables-2/compiled/helpers/is-valid-moment-object.js");

var filterByCustomFilters = __webpack_require__(/*! ../filters/custom-filters */ "./node_modules/vue-tables-2/compiled/filters/custom-filters.js");

module.exports = function (data, e) {
  if (e) {
    var _query = this.query;
    this.setPage(1, true);
    var name = this.getName(e.target.name);
    var value = _typeof(e.target.value) === 'object' ? e.target.value : '' + e.target.value;

    if (name) {
      _query[name] = value;
    } else {
      _query = value;
    }

    this.vuex ? this.commit('SET_FILTER', _query) : this.query = _query;
    this.updateState('query', _query);

    if (name) {
      this.dispatch('filter', {
        name: name,
        value: value
      });
      this.dispatch("filter::".concat(name), value);
    } else {
      this.dispatch('filter', value);
    }
  }

  var query = this.query;
  var totalQueries = !query ? 0 : 1;
  if (!this.opts) return data;

  if (this.opts.filterByColumn) {
    totalQueries = object_filled_keys_count(query);
  }

  var value;
  var found;
  var currentQuery;
  var dateFormat;
  var filterByDate;
  var isListFilter;
  var data = filterByCustomFilters(data, this.opts.customFilters, this.customQueries);
  if (!totalQueries) return data;
  return data.filter(function (row, index) {
    found = 0;
    this.filterableColumns.forEach(function (column) {
      filterByDate = this.opts.dateColumns.indexOf(column) > -1 && this.opts.filterByColumn;
      isListFilter = this.isListFilter(column) && this.opts.filterByColumn;
      dateFormat = this.dateFormat(column);
      value = this._getValue(row, column);

      if (is_valid_moment_object(value) && !filterByDate) {
        value = value.format(dateFormat);
      }

      currentQuery = this.opts.filterByColumn ? query[column] : query;
      currentQuery = setCurrentQuery(currentQuery);

      if (currentQuery) {
        if (this.opts.filterAlgorithm[column]) {
          if (this.opts.filterAlgorithm[column](row, this.opts.filterByColumn ? query[column] : query)) found++;
        } else {
          if (foundMatch(currentQuery, value, isListFilter)) found++;
        }
      }
    }.bind(this));
    return found >= totalQueries;
  }.bind(this));
};

function setCurrentQuery(query) {
  if (!query) return '';
  if (typeof query == 'string') return query.toLowerCase(); // Date Range

  return query;
}

function foundMatch(query, value, isListFilter) {
  if (['string', 'number', 'boolean'].indexOf(_typeof(value)) > -1) {
    value = String(value).toLowerCase();
  } // List Filter


  if (isListFilter) {
    return value == query;
  } //Text Filter


  if (typeof value === 'string') {
    return value.indexOf(query) > -1;
  } // Date range


  if (is_valid_moment_object(value)) {
    var start = moment(query.start, 'YYYY-MM-DD HH:mm:ss');
    var end = moment(query.end, 'YYYY-MM-DD HH:mm:ss');
    return value >= start && value <= end;
  }

  if (_typeof(value) === 'object') {
    for (var key in value) {
      if (foundMatch(query, value[key])) return true;
    }

    return false;
  }

  return value >= start && value <= end;
}

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/column-class.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/column-class.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (column) {
  var c = this.opts.columnsClasses;
  return c.hasOwnProperty(column) ? c[column] : '';
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/currently-sorted.js":
/*!************************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/currently-sorted.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (column) {
  var userMultiSort = Object.keys(this.userMultiSorting);
  if (!userMultiSort.length || this.orderBy.column === column) return this.orderBy.column === column;
  return !!this.userMultiSorting[userMultiSort[0]].filter(function (col) {
    return col.column == column;
  }).length;
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/date-format.js":
/*!*******************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/date-format.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (column) {
  if (this.opts.dateFormatPerColumn.hasOwnProperty(column)) {
    return this.opts.dateFormatPerColumn[column];
  }

  return this.opts.dateFormat;
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/default-sort.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/default-sort.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (column, ascending) {
  var multiIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
  var sort = this.defaultSort;
  var multiSort = this.userMultiSorting[this.currentlySorting.column] ? this.userMultiSorting[this.currentlySorting.column] : this.opts.multiSorting[this.currentlySorting.column];
  var asc = this.currentlySorting.ascending;
  var self = this;
  return function (a, b) {
    var aVal = self._getValue(a, column) || '';
    var bVal = self._getValue(b, column) || '';
    var dir = ascending ? 1 : -1;
    var secondaryAsc;
    if (typeof aVal === 'string') aVal = aVal.toLowerCase();
    if (typeof bVal === 'string') bVal = bVal.toLowerCase();

    if (aVal === bVal && multiSort && multiSort[multiIndex + 1]) {
      var sortData = multiSort[multiIndex + 1];

      if (typeof sortData.ascending !== 'undefined') {
        secondaryAsc = sortData.ascending;
      } else {
        secondaryAsc = sortData.matchDir ? asc : !asc;
      }

      return sort(sortData.column, secondaryAsc, multiIndex + 1)(a, b);
    }

    return aVal > bVal ? dir : -dir;
  };
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/dispatch.js":
/*!****************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/dispatch.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _bus = _interopRequireDefault(__webpack_require__(/*! ../bus */ "./node_modules/vue-tables-2/compiled/bus.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = function (event, payload) {
  if (this.vuex) {
    if (event.split('::').length > 1) return;
    this.commit(event.toUpperCase().replace('-', '_'), payload);
  }

  this.$emit(event, payload);

  _bus["default"].$emit("vue-tables.".concat(event), payload);

  if (this.name) {
    _bus["default"].$emit("vue-tables.".concat(this.name, ".").concat(event), payload);
  }
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/display.js":
/*!***************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/display.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (text, replacements) {
  if (!this.opts.texts) return '';
  var text = this.opts.texts[text];
  if (replacements) for (var key in replacements) {
    // console.log(key)
    text = text.replace('{' + key + '}', replacements[key]);
  }
  return text;
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/filterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/filterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (column) {
  if (!this.opts.filterable) return false;
  return typeof this.opts.filterable == 'boolean' && this.opts.filterable || this.opts.filterable.indexOf(column) > -1;
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/get-child-row-template.js":
/*!******************************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/get-child-row-template.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (h, row, index) {
  // scoped slot
  if (this.$scopedSlots.child_row) return this.$scopedSlots.child_row({
    row: row,
    index: index
  });
  var childRow = this.opts.childRow; // function

  if (typeof childRow === 'function') return childRow.apply(this, [h, row]); // component

  return h(childRow, {
    attrs: {
      data: row
    }
  });
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/get-column-name.js":
/*!***********************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/get-column-name.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (column) {
  return 'vf__' + column.split('.').join('@@@');
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/get-data.js":
/*!****************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/get-data.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var merge = __webpack_require__(/*! merge */ "./node_modules/merge/merge.js");

module.exports = function (promiseOnly) {
  var _data;

  var additionalData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var emitLoading = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var keys = this.opts.requestKeys;
  var data = (_data = {}, _defineProperty(_data, keys.query, this.filteredQuery), _defineProperty(_data, keys.limit, this.limit), _defineProperty(_data, keys.ascending, this.orderBy.ascending ? 1 : 0), _defineProperty(_data, keys.page, this.page), _defineProperty(_data, keys.byColumn, this.opts.filterByColumn ? 1 : 0), _data);
  if (this.orderBy.hasOwnProperty('column') && this.orderBy.column) data[keys.orderBy] = this.orderBy.column;
  data = merge(data, this.opts.params, this.customQueries, additionalData);

  if (this.hasMultiSort && this.orderBy.column && this.userMultiSorting[this.orderBy.column]) {
    data.multiSort = this.userMultiSorting[this.orderBy.column];
  }

  data = this.opts.requestAdapter(data);

  if (emitLoading) {
    this.dispatch('loading', data);
  }

  var promise = this.sendRequest(data);
  if (promiseOnly) return promise;
  return promise.then(function (response) {
    if (typeof response !== 'undefined') {
      this.loading = false;
      return this.setData(response);
    } else {
      return false;
    }
  }.bind(this));
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/get-group-slot.js":
/*!**********************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/get-group-slot.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (value) {
  if (this.$scopedSlots && this.$scopedSlots['__group_meta']) {
    var data = this.opts.groupMeta.find(function (val) {
      return val.value === value;
    });
    if (!data) return '';
    return this.$scopedSlots['__group_meta'](data);
  }

  return '';
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/get-heading-tooltip.js":
/*!***************************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/get-heading-tooltip.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (value, h) {
  if (typeof value !== 'string') return '';
  var derivedHeadingTooltip = '';
  if (!this.opts.headingsTooltips.hasOwnProperty(value)) return derivedHeadingTooltip;

  if (typeof this.opts.headingsTooltips[value] === 'function') {
    if (h) return this.opts.headingsTooltips[value].call(this.$parent, h);
    return derivedHeadingTooltip;
  }

  return this.opts.headingsTooltips[value];
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/get-heading.js":
/*!*******************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/get-heading.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ucfirst = _interopRequireDefault(__webpack_require__(/*! ../helpers/ucfirst */ "./node_modules/vue-tables-2/compiled/helpers/ucfirst.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = function (value, h) {
  if (typeof value !== 'string') return '';

  if (typeof this.$slots["h__".concat(value)] !== 'undefined') {
    return this.$slots["h__".concat(value)];
  }

  var derivedHeading = (0, _ucfirst["default"])(value.split("_").join(" "));
  if (!this.opts.headings.hasOwnProperty(value)) return derivedHeading;

  if (typeof this.opts.headings[value] === 'function') {
    if (h) return this.opts.headings[value].call(this.$parent, h);
    return derivedHeading;
  }

  return this.opts.headings[value];
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/get-initial-date-range.js":
/*!******************************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/get-initial-date-range.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (column) {
  if (typeof this.opts.initFilters[column] !== 'undefined') {
    return this.opts.initFilters[column];
  }

  if (typeof this.query[column] !== 'undefined' && this.query[column].start) {
    return {
      start: moment(this.query[column].start, 'YYYY-MM-DD HH:mm:ss'),
      end: moment(this.query[column].end, 'YYYY-MM-DD HH:mm:ss')
    };
  }

  return false;
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/get-name.js":
/*!****************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/get-name.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (name) {
  if (!name) return name;
  name = name.split('__');
  name.shift();
  return name.join('__').split('@@@').join('.');
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/get-open-child-rows.js":
/*!***************************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/get-open-child-rows.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  var _this = this;

  var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  if (!this.opts.childRow || typeof this.opts.childRow === 'function') {
    throw new Error('vue-tables-2: Child row undefined or not a component');
  }

  var Rows = rows ? this.openChildRows.filter(function (row) {
    return rows.includes(row);
  }) : this.openChildRows;
  if (!Rows.length) return [];
  var components = this.$children.filter(function (child) {
    return child.$options.name === 'ChildRow' && Rows.includes(child.data[_this.opts.uniqueKey]);
  });
  return components;
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/get-response-data.js":
/*!*************************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/get-response-data.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (response) {
  if (typeof axios !== 'undefined') return response.data;
  return response;
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/get-sort-fn.js":
/*!*******************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/get-sort-fn.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (column) {
  var ascending = this.orderBy.ascending;
  this.currentlySorting = {
    column: column,
    ascending: ascending
  };
  if (typeof this.opts.customSorting[column] == 'undefined') return this.defaultSort(column, ascending);
  return this.opts.customSorting[column](ascending);
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/get-value.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/get-value.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (row, column) {
  if (column.indexOf('.') === -1) return row[column];
  var p = column.split('.');
  var value = row[p[0]];
  if (!value) return '';

  for (var i = 1; i < p.length; i++) {
    value = value[p[i]]; // If the nested structure doesn't exist return an empty string

    if (typeof value === 'undefined') return '';
  }

  return value;
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/has-date-filters.js":
/*!************************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/has-date-filters.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var intersection = __webpack_require__(/*! array-intersect */ "./node_modules/array-intersect/dist/array-intersect.module.js")["default"];

module.exports = function () {
  var opts = this.opts;
  return opts.dateColumns.length && opts.filterByColumn && (typeof opts.filterable == 'boolean' && opts.filterable || _typeof(opts.filterable) == 'object' && intersection(opts.filterable, opts.dateColumns).length);
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/init-custom-filters.js":
/*!***************************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/init-custom-filters.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  var customQueries = {};
  var init = this.opts.initFilters;
  var key;
  this.opts.customFilters.forEach(function (filter) {
    key = this.source == 'client' ? filter.name : filter;
    customQueries[key] = init.hasOwnProperty(key) ? init[key] : '';
  }.bind(this));
  return customQueries;
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/init-date-filters.js":
/*!*************************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/init-date-filters.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var merge = __webpack_require__(/*! merge */ "./node_modules/merge/merge.js");

module.exports = function () {
  if (typeof $ === 'undefined' || typeof $(this.$el).daterangepicker === 'undefined') {
    console.error('Date filters require jquery and daterangepicker');
    return;
  }

  var el;
  var that = this;
  var query = this.vuex ? JSON.parse(JSON.stringify(this.query)) : this.query;
  var columnOptions;
  var dpOptions;

  var search = function search(query, e) {
    return that.source == 'client' ? that.search(that.data, e) : that.serverSearch(query, e);
  };

  var datepickerOptions = merge.recursive(this.opts.datepickerOptions, {
    autoUpdateInput: false,
    singleDatePicker: false
  });
  that.datepickerColumns.forEach(function (column) {
    var range = that._getInitialDateRange(column);

    if (range) {
      that._setDatepickerText(column, range.start, range.end);

      range = {
        startDate: range.start,
        endDate: range.end
      };
    } else {
      range = {};
    }

    el = $(that.$el).find("#VueTables__" + $.escapeSelector(column) + "-filter");
    columnOptions = typeof that.opts.datepickerPerColumnOptions[column] !== 'undefined' ? that.opts.datepickerPerColumnOptions[column] : {};
    columnOptions = merge.recursive(columnOptions, {
      locale: {
        format: that.dateFormat(column)
      }
    });
    dpOptions = merge(true, datepickerOptions);

    if (columnOptions.ranges === false) {
      dpOptions.ranges = {};
    }

    el.daterangepicker(merge.recursive(dpOptions, columnOptions, range));
    el.on('apply.daterangepicker', function (ev, picker) {
      query[column] = {
        start: picker.startDate.format('YYYY-MM-DD HH:mm:ss'),
        end: picker.endDate.format('YYYY-MM-DD HH:mm:ss')
      };
      if (!that.vuex) that.query = query;

      that._setDatepickerText(column, picker.startDate, picker.endDate);

      that.updateState('query', query);
      search(query, {
        target: {
          name: that._getColumnName(column),
          value: query[column]
        }
      });
    });
    el.on('cancel.daterangepicker', function (ev, picker) {
      query[column] = '';
      if (!that.vuex) that.query = query;
      picker.setStartDate(moment());
      picker.setEndDate(moment());
      that.updateState('query', query);
      $(this).html("<span class='VueTables__filter-placeholder'>" + that.display('filterBy', {
        column: that.getHeading(column)
      }) + "</span>");
      search(query, {
        target: {
          name: that._getColumnName(column),
          value: query[column]
        }
      });
    });
  });
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/init-options.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/init-options.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var merge = __webpack_require__(/*! merge */ "./node_modules/merge/merge.js");

module.exports = function (defaults, globalOptions, localOptions) {
  if (globalOptions) defaults = merge.recursive(defaults, globalOptions);
  localOptions = merge.recursive(defaults, localOptions);
  return localOptions;
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/init-order-by.js":
/*!*********************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/init-order-by.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  if (!this.opts.orderBy) return;
  this.orderBy.column = this.opts.orderBy.column;
  this.orderBy.ascending = this.opts.orderBy.hasOwnProperty('ascending') ? this.opts.orderBy.ascending : true;
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/init-pagination.js":
/*!***********************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/init-pagination.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  this.page = 1;

  if (!this.opts.pagination.dropdown) {
    this.$refs.pagination.setPage(1);
  }
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/init-query.js":
/*!******************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/init-query.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function () {
  var init = this.opts.initFilters;
  if (!this.opts.filterByColumn) return init.hasOwnProperty('GENERIC') ? init.GENERIC : '';
  var query = {};
  var filterable = this.opts.filterable && _typeof(this.opts.filterable) == 'object' ? this.opts.filterable : this.columns;
  filterable.forEach(function (column) {
    query[column] = getInitialValue(init, column);
  }.bind(this));
  return query;
};

function getInitialValue(init, column) {
  if (!init.hasOwnProperty(column)) return '';
  if (typeof init[column].start == 'undefined') return init[column];
  return {
    start: init[column].start.format('YYYY-MM-DD HH:mm:ss'),
    end: init[column].end.format('YYYY-MM-DD HH:mm:ss')
  };
}

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/init-state.js":
/*!******************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/init-state.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  var state = {
    page: 1,
    query: this.query,
    orderBy: this.orderBy,
    perPage: this.opts.perPage,
    customQueries: this.customQueries
  };
  this.storage.setItem(this.stateKey, JSON.stringify(state));
  return state;
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/initial-order-ascending.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/initial-order-ascending.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (column) {
  return !this.opts.descOrderColumns.includes(column);
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/is-date-filter.js":
/*!**********************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/is-date-filter.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (column) {
  return this.query.hasOwnProperty(column) && this.opts.dateColumns.indexOf(column) > -1;
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/is-list-filter.js":
/*!**********************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/is-list-filter.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (column) {
  return this.query.hasOwnProperty(column) && this.opts.listColumns.hasOwnProperty(column);
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/is-text-filter.js":
/*!**********************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/is-text-filter.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (column) {
  return this.query.hasOwnProperty(column) && this.opts.dateColumns.indexOf(column) == -1 && !this.opts.listColumns.hasOwnProperty(column);
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/on-pagination.js":
/*!*********************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/on-pagination.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (page) {
  if (this.vuex) return;
  this.setPage(page);
  this.dispatch('pagination', page);
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/only-column.js":
/*!*******************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/only-column.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (column) {
  return this.userColumnsDisplay.length === 1 && this.userColumnsDisplay[0] === column;
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/order-by-column.js":
/*!***********************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/order-by-column.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (colName, ev) {
  if (!this.sortable(colName)) return;

  if (ev && ev.shiftKey && this.orderBy.column && this.hasMultiSort) {
    this.setUserMultiSort(colName);
  } else {
    this.userMultiSorting = {};
    this.orderBy.ascending = colName == this.orderBy.column ? !this.orderBy.ascending : this._initialOrderAscending(colName);
    this.orderBy.column = colName;
    this.updateState('orderBy', this.orderBy);
    this.dispatch('sorted', JSON.parse(JSON.stringify(this.orderBy)));
  }

  if (this.source == 'server') {
    this.getData();
  }
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/refresh.js":
/*!***************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/refresh.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  this.serverSearch();
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/register-client-filters.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/register-client-filters.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _bus = _interopRequireDefault(__webpack_require__(/*! ../bus */ "./node_modules/vue-tables-2/compiled/bus.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = function () {
  var _this = this;

  var event = 'vue-tables';
  if (this.name) event += '.' + this.name;
  this.opts.customFilters.forEach(function (filter) {
    _bus["default"].$off("".concat(event, ".filter::").concat(filter.name));

    _bus["default"].$on("".concat(event, ".filter::").concat(filter.name), function (value) {
      _this.customQueries[filter.name] = value;

      _this.updateState('customQueries', _this.customQueries);
    });
  });
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/register-server-filters.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/register-server-filters.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _bus = _interopRequireDefault(__webpack_require__(/*! ../bus */ "./node_modules/vue-tables-2/compiled/bus.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = function () {
  var event = 'vue-tables';
  if (this.name) event += '.' + this.name;
  this.opts.customFilters.forEach(function (filter) {
    _bus["default"].$off("".concat(event, ".filter::").concat(filter));

    _bus["default"].$on("".concat(event, ".filter::").concat(filter), function (value) {
      this.customQueries[filter] = value;
      this.updateState('customQueries', this.customQueries);
      this.refresh();
    }.bind(this));
  }.bind(this));
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/render.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/render.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (row, column, index, h) {
  var value = this._getValue(row, column);

  if (this.templatesKeys.indexOf(column) == -1) {
    if (typeof value === 'undefined' || !this.opts.highlightMatches || this.filterableColumns.indexOf(column) === -1) {
      return value;
    }

    return this.highlightMatch(value, column, h);
  }

  var template = this.opts.templates[column];
  template = typeof template == 'function' ? template.apply(this.$root, [h, row, index, column]) : h(template, {
    attrs: {
      data: row,
      column: column,
      index: index
    }
  });
  return template;
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/reset-query.js":
/*!*******************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/reset-query.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  if (this.opts.filterByColumn) {
    var query = {};

    for (var key in this.query) {
      query[key] = '';
    }
  } else {
    var query = '';
  }

  this.setFilter(query);
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/row-was-clicked.js":
/*!***********************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/row-was-clicked.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (row, index, event) {
  var data;
  var id = this.opts.uniqueKey;

  if (this.source == 'client' && typeof row[id] !== 'undefined') {
    data = this.tableData.filter(function (r) {
      return row[id] === r[id];
    })[0];
  } else {
    data = row;
  }

  this.dispatch('row-click', {
    row: data,
    index: index,
    event: event
  });
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/send-request.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/send-request.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (data) {
  if (typeof this.opts.requestFunction === 'function') {
    return this.opts.requestFunction.call(this, data);
  }

  if (typeof axios !== 'undefined') return axios.get(this.url, {
    params: data
  })["catch"](function (e) {
    this.dispatch('error', e);
  }.bind(this));
  if (typeof this.$http !== 'undefined') return this.$http.get(this.url, {
    params: data
  }).then(function (data) {
    return data.json();
  }.bind(this), function (e) {
    this.dispatch('error', e);
  }.bind(this));
  if (typeof $ != 'undefined') return $.getJSON(this.url, data).fail(function (e) {
    this.dispatch('error', e);
  }.bind(this));
  throw "vue-tables: No supported ajax library was found. (jQuery, axios or vue-resource). To use a different library you can write your own request function (see the `requestFunction` option)";
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/server-search.js":
/*!*********************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/server-search.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (e, dateEvent) {
  // we need to handle the store this.query to make sure we're not mutating outside of it
  var query = this.vuex ? JSON.parse(JSON.stringify(this.query)) : this.query; // in case we pass an object manually (mostly used for init-date-filters should refactor

  if (Object.prototype.toString.call(e).slice(8, -1) == 'Object') {
    query = this.vuex ? JSON.parse(JSON.stringify(e)) : e;
    if (!this.vuex) this.query = query;
    var name = dateEvent.target.name;
    var value = dateEvent.target.value;

    if (name) {
      this.dispatch('filter', {
        name: name,
        value: value
      });
      this.dispatch("filter::".concat(name), value);
    } else {
      this.dispatch('filter', value);
    }

    this.updateState('query', query);
  } else if (e) {
    var _name = this.getName(e.target.name);

    var _value = e.target.value;

    if (_name) {
      query[_name] = _value;
    } else {
      query = _value;
    }

    if (!this.vuex) this.query = query;

    if (_name) {
      this.dispatch('filter', {
        name: _name,
        value: _value
      });
      this.dispatch("filter::".concat(_name), _value);
    } else {
      this.dispatch('filter', _value);
    }

    this.updateState('query', query);
  }

  return search(this, query);
};

function search(that, query) {
  if (that.vuex) {
    that.commit('SET_FILTER', query);
  } else {
    that.initPagination();

    if (that.opts.pagination.dropdown) {
      that.getData();
    }
  }
}

function noDebounce(e, name, opts) {
  return !e || name && (opts.dateColumns.indexOf(name) > -1 || Object.keys(opts.listColumns).indexOf(name) > -1);
}

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/set-columns-dropdown-close-listener.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/set-columns-dropdown-close-listener.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  var _this = this;

  if (this.opts.columnsDropdown) {
    var stopProp = function stopProp(e) {
      return e.stopPropagation();
    };

    var handler = function handler() {
      if (_this.displayColumnsDropdown) {
        _this.displayColumnsDropdown = false;
      }
    };

    this.$refs.columnsdropdown.addEventListener('click', stopProp);
    document.addEventListener('click', handler);
    this.$once('hook:beforeDestroy', function () {
      document.removeEventListener('click', handler);

      _this.$refs.columnsdropdown.removeEventListener('click', stopProp);
    });
  }
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/set-data.js":
/*!****************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/set-data.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function (response) {
  var data = this.opts.responseAdapter.call(this, response);
  this.data = this.applyFilters(data.data);

  if (isNaN(data.count)) {
    console.error("vue-tables-2: invalid 'count' property. Expected number, got ".concat(_typeof(data.count)));
    console.error('count equals', data.count);
    throw new Error();
  }

  this.count = parseInt(data.count);
  setTimeout(function () {
    this.dispatch('loaded', response);
  }.bind(this), 0);
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/set-datepicker-text.js":
/*!***************************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/set-datepicker-text.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (column, start, end) {
  var dateFormat = this.dateFormat(column);
  var el = typeof column === 'string' ? $(this.$el).find("#VueTables__" + $.escapeSelector(column) + "-filter") : column;
  el.text(start.format(dateFormat) + " - " + end.format(dateFormat));
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/set-filter.js":
/*!******************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/set-filter.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var merge = __webpack_require__(/*! merge */ "./node_modules/merge/merge.js");

module.exports = function (filter) {
  if (!this.opts.filterable) {
    console.warn("vue-tables-2: Unable to set filter. Filtering is disabled (filterable: false)");
    return;
  }

  ;

  if (this.opts.filterByColumn && typeof filter === 'string') {
    console.warn("vue-tables-2: Unable to set filter. Filter value must be an object (`filterByColumn` is set to `true`)");
    return;
  }

  ;

  if (!this.opts.filterByColumn && typeof filter !== 'string') {
    console.warn("vue-tables-2: Unable to set filter. Filter value must be a string (`filterByColumn` is set to `false`)");
    return;
  }

  ;
  var mergedFilter = this.opts.filterByColumn ? merge(this.query, filter) : filter;

  if (this.vuex) {
    this.commit('SET_FILTER', mergedFilter);
  } else {
    this.query = mergedFilter;
    this.setPage(1, true);
  }

  this.updateState('query', mergedFilter);

  this._setFiltersDOM(filter);

  if (this.source == 'server') {
    this.getData();
  }
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/set-filters-dom.js":
/*!***********************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/set-filters-dom.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function (query) {
  var el;

  if (this.opts.filterByColumn) {
    for (var column in query) {
      var columnName = this._getColumnName(column);

      if (this.isDateFilter(column)) {
        if (query[column] && _typeof(query[column]) === 'object') {
          var start = typeof query[column].start === 'string' ? moment(query[column].start, 'YYYY-MM-DD') : query[column].start;
          var end = typeof query[column].end === 'string' ? moment(query[column].end, 'YYYY-MM-DD') : query[column].end;

          this._setDatepickerText(column, start, end);
        } else {
          $(this.$el).find("#VueTables__" + $.escapeSelector(column) + "-filter").html("<span class='VueTables__filter-placeholder'>" + this.display('filterBy', {
            column: this.getHeading(column)
          }) + "</span>");
        }

        continue;
      }

      el = this.$el.querySelector("[name='".concat(columnName, "']"));

      if (el) {
        el.value = query[column];
      } else if (this.columns.indexOf(column) === -1) {
        console.error("vue-tables-2: Error in setting filter value. Column '".concat(column, "' does not exist."));
      }
    }
  } else {
    var el = this.$el.querySelector('.VueTables__search__input');
    if (el) el.value = query;
  }
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/set-limit.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/set-limit.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function (e) {
  this.limit = _typeof(e) === 'object' ? e.target.value : e;
  this.updateState('perPage', this.limit);
  this.dispatch('limit', parseInt(this.limit));
  this.setPage(1);
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/set-order.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/set-order.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (column, ascending) {
  this.orderBy.column = column;
  this.orderBy.ascending = ascending;
  this.updateState('orderBy', {
    column: column,
    ascending: ascending
  });

  if (this.source == 'server') {
    this.getData();
  }
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/set-page.js":
/*!****************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/set-page.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (page, preventRequest) {
  page = page ? page : this.$refs.page.value;
  if (!this.opts.pagination.dropdown) this.$refs.pagination.Page = page;
  this.page = page;
  this.updateState('page', page);
  if (this.source == 'server' && !preventRequest) this.getData();
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/set-user-multi-sort.js":
/*!***************************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/set-user-multi-sort.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (secondaryCol) {
  var primaryCol = this.orderBy.column;
  var primaryAsc = this.orderBy.ascending;
  if (!this.userMultiSorting[primaryCol]) this.userMultiSorting[primaryCol] = [];
  var multi = this.userMultiSorting[primaryCol];

  if (primaryCol === secondaryCol) {
    if (!multi.length || primaryAsc) {
      // primary is the only sorted column or is ascending
      this.orderBy.ascending = !this.orderBy.ascending;
    } else {
      // remove primary column and make secondary primary
      this.orderBy = multi.shift();
      this.userMultiSorting = {};
      this.userMultiSorting[this.orderBy.column] = multi;
    }
  } else {
    var secondary = multi.filter(function (col) {
      return col.column == secondaryCol;
    })[0];

    if (secondary) {
      if (!secondary.ascending) {
        // remove sort
        this.userMultiSorting[primaryCol] = multi.filter(function (col) {
          return col.column != secondaryCol;
        });
        if (!this.userMultiSorting[primaryCol].length) this.userMultiSorting = {};
      } else {
        // change direction
        secondary.ascending = !secondary.ascending;
      }
    } else {
      // add sort
      multi.push({
        column: secondaryCol,
        ascending: true
      });
    }
  } // force re-compilation of the filteredData computed property


  this.time = Date.now();
  this.dispatch('sorted', getMultiSortData(this.orderBy, this.userMultiSorting));
};

function getMultiSortData(main, secondary) {
  var cols = [JSON.parse(JSON.stringify(main))];
  cols = cols.concat(secondary[main.column]);
  return cols;
}

;

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/should-show-column-on-init.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/should-show-column-on-init.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (column) {
  if (this.opts.visibleColumns) {
    return this.opts.visibleColumns.includes(column);
  }

  if (this.opts.hiddenColumns) {
    return !this.opts.hiddenColumns.includes(column);
  }

  return true;
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/sortable-chevron-class.js":
/*!******************************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/sortable-chevron-class.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (column) {
  var cls = this.opts.sortIcon.base + ' ';
  if (!this.sortable(column)) return;

  if (this.opts.sortIcon.is && !this._currentlySorted(column)) {
    cls += this.opts.sortIcon.is + ' ';
  }

  if (this.hasMultiSort && this.orderBy.column && this.userMultiSorting[this.orderBy.column]) {
    var col = this.userMultiSorting[this.orderBy.column].filter(function (c) {
      return c.column === column;
    })[0];
    if (col) cls += col.ascending ? this.opts.sortIcon.up : this.opts.sortIcon.down;
  }

  if (column == this.orderBy.column) {
    cls += this.orderBy.ascending == 1 ? this.opts.sortIcon.up : this.opts.sortIcon.down;
  }

  return cls;
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/sortable-class.js":
/*!**********************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/sortable-class.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (column) {
  var c = this.sortable(column) ? 'VueTables__sortable ' : '';
  c += this.columnClass(column);
  return c;
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/sortable.js":
/*!****************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/sortable.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (column) {
  var sortAll = typeof this.opts.sortable == 'boolean' && this.opts.sortable;
  if (sortAll) return true;
  return this.opts.sortable.indexOf(column) > -1;
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/toggle-child-row.js":
/*!************************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/toggle-child-row.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (rowId, e) {
  if (e) e.stopPropagation();

  if (this.openChildRows.includes(rowId)) {
    var index = this.openChildRows.indexOf(rowId);
    this.openChildRows.splice(index, 1);
  } else {
    this.openChildRows.push(rowId);
  }
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/toggle-column.js":
/*!*********************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/toggle-column.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (column) {
  var _this = this;

  if (!this.userControlsColumns) {
    this.userColumnsDisplay = JSON.parse(JSON.stringify(this.allColumns));
    this.userControlsColumns = true;
  }

  if (this.userColumnsDisplay.includes(column)) {
    // can't have no columns
    if (this.userColumnsDisplay.length === 1) return;
    var index = this.userColumnsDisplay.indexOf(column);
    this.userColumnsDisplay.splice(index, 1);
  } else {
    this.userColumnsDisplay.push(column);
  }

  this.updateState('userControlsColumns', true);
  this.updateState('userColumnsDisplay', this.userColumnsDisplay);
  this.$nextTick(function () {
    _this._setFiltersDOM(_this.query);
  });
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/toggle-columns-dropdown.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/toggle-columns-dropdown.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  this.displayColumnsDropdown = !this.displayColumnsDropdown;
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/toggle-group-direction.js":
/*!******************************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/toggle-group-direction.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  if (this.orderBy.column != this.opts.groupBy) {
    this.setOrder(this.opts.groupBy, true);
  } else {
    this.setOrder(this.opts.groupBy, !this.orderBy.ascending);
  }
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/transform-date-strings-to-moment.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/transform-date-strings-to-moment.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  this.data.forEach(function (row, index) {
    this.opts.dateColumns.forEach(function (column) {
      row[column] = row[column] ? moment(row[column], this.opts.toMomentFormat) : '';
    }.bind(this));
  }.bind(this));
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/methods/update-state.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/methods/update-state.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (key, value) {
  if (!this.opts.saveState || !this.activeState) return;

  try {
    var currentState = JSON.parse(this.storage.getItem(this.stateKey));
  } catch (e) {
    var currentState = this.initState();
  }

  currentState[key] = value;
  this.storage.setItem(this.stateKey, JSON.stringify(currentState));
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/mixins/before-destroy.js":
/*!*********************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/mixins/before-destroy.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _bus = _interopRequireDefault(__webpack_require__(/*! ../bus */ "./node_modules/vue-tables-2/compiled/bus.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = function () {
  var _this = this;

  var el;

  if (this.opts.destroyEventBus) {
    _bus["default"].$off();

    _bus["default"].$destroy();
  }

  if (this.vuex && !this.opts.preserveState) {
    this.$store.unregisterModule(this.name);
  }

  if (this.opts.filterByColumn) {
    this.datepickerColumns.forEach(function (column) {
      el = $(_this.$el).find("#VueTables__" + $.escapeSelector(column) + "-filter").data('daterangepicker');
      if (el) el.remove();
    });
  }
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/mixins/computed.js":
/*!***************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/mixins/computed.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  listColumnsObject: __webpack_require__(/*! ../computed/list-columns-object */ "./node_modules/vue-tables-2/compiled/computed/list-columns-object.js"),
  allColumns: __webpack_require__(/*! ../computed/all-columns */ "./node_modules/vue-tables-2/compiled/computed/all-columns.js"),
  templatesKeys: __webpack_require__(/*! ../computed/templates-keys */ "./node_modules/vue-tables-2/compiled/computed/templates-keys.js"),
  opts: __webpack_require__(/*! ../computed/opts */ "./node_modules/vue-tables-2/compiled/computed/opts.js"),
  tableData: __webpack_require__(/*! ../computed/table-data */ "./node_modules/vue-tables-2/compiled/computed/table-data.js"),
  storage: __webpack_require__(/*! ../computed/storage */ "./node_modules/vue-tables-2/compiled/computed/storage.js"),
  filterableColumns: __webpack_require__(/*! ../computed/filterable-columns */ "./node_modules/vue-tables-2/compiled/computed/filterable-columns.js"),
  datepickerColumns: __webpack_require__(/*! ../computed/datepicker-columns */ "./node_modules/vue-tables-2/compiled/computed/datepicker-columns.js"),
  hasChildRow: __webpack_require__(/*! ../computed/has-child-row */ "./node_modules/vue-tables-2/compiled/computed/has-child-row.js"),
  colspan: __webpack_require__(/*! ../computed/colspan */ "./node_modules/vue-tables-2/compiled/computed/colspan.js"),
  hasGenericFilter: __webpack_require__(/*! ../computed/has-generic-filter */ "./node_modules/vue-tables-2/compiled/computed/has-generic-filter.js"),
  stateKey: function stateKey() {
    var key = this.name ? this.name : this.id;
    return 'vuetables_' + key;
  },
  Page: function Page() {
    return this.page;
  }
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/mixins/created.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/mixins/created.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var is_empty = __webpack_require__(/*! ../helpers/is-empty */ "./node_modules/vue-tables-2/compiled/helpers/is-empty.js");

var registerVuexModule = __webpack_require__(/*! ../state/register-module */ "./node_modules/vue-tables-2/compiled/state/register-module.js");

module.exports = function (self) {
  if (self.vuex) {
    registerVuexModule(self);
  } else {
    self.limit = self.opts.perPage;
  }

  if (is_empty(self.opts.columnsDisplay) || typeof window === 'undefined') return;
  self.columnsDisplay = getColumnsDisplay(self.opts.columnsDisplay);
  window.addEventListener('resize', function () {
    self.windowWidth = window.innerWidth;
  }.bind(self));
};

function getColumnsDisplay(columnsDisplay) {
  var res = {};
  var range;
  var device;
  var operator;

  for (var column in columnsDisplay) {
    operator = getOperator(columnsDisplay[column]);

    try {
      device = getDevice(columnsDisplay[column]);
      range = getRange(device, operator);
      res[column] = range.concat([operator]);
    } catch (err) {
      console.warn('Unknown device ' + device);
    }
  }

  return res;
}

function getRange(device, operator) {
  var devices = {
    desktop: [1024, null],
    tablet: [480, 1024],
    mobile: [0, 480],
    tabletL: [768, 1024],
    tabletP: [480, 768],
    mobileL: [320, 480],
    mobileP: [0, 320]
  };

  switch (operator) {
    case 'min':
      return [devices[device][0], null];

    case 'max':
      return [0, devices[device][1]];

    default:
      return devices[device];
  }
}

function getOperator(val) {
  var pieces = val.split('_');
  if (['not', 'min', 'max'].indexOf(pieces[0]) > -1) return pieces[0];
  return false;
}

function getDevice(val) {
  var pieces = val.split('_');
  return pieces.length > 1 ? pieces[1] : pieces[0];
}

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/mixins/data.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/mixins/data.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  return {
    id: makeId(),
    allFilteredData: [],
    openChildRows: [],
    windowWidth: typeof window !== 'undefined' ? window.innerWidth : null,
    userMultiSorting: {},
    editing: []
  };
};

function makeId() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/mixins/methods.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/mixins/methods.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  initQuery: __webpack_require__(/*! ../methods/init-query */ "./node_modules/vue-tables-2/compiled/methods/init-query.js"),
  resetQuery: __webpack_require__(/*! ../methods/reset-query */ "./node_modules/vue-tables-2/compiled/methods/reset-query.js"),
  initCustomFilters: __webpack_require__(/*! ../methods/init-custom-filters */ "./node_modules/vue-tables-2/compiled/methods/init-custom-filters.js"),
  initOptions: __webpack_require__(/*! ../methods/init-options */ "./node_modules/vue-tables-2/compiled/methods/init-options.js"),
  sortableClass: __webpack_require__(/*! ../methods/sortable-class */ "./node_modules/vue-tables-2/compiled/methods/sortable-class.js"),
  sortableChevronClass: __webpack_require__(/*! ../methods/sortable-chevron-class */ "./node_modules/vue-tables-2/compiled/methods/sortable-chevron-class.js"),
  display: __webpack_require__(/*! ../methods/display */ "./node_modules/vue-tables-2/compiled/methods/display.js"),
  orderByColumn: __webpack_require__(/*! ../methods/order-by-column */ "./node_modules/vue-tables-2/compiled/methods/order-by-column.js"),
  getHeading: __webpack_require__(/*! ../methods/get-heading */ "./node_modules/vue-tables-2/compiled/methods/get-heading.js"),
  getHeadingTooltip: __webpack_require__(/*! ../methods/get-heading-tooltip */ "./node_modules/vue-tables-2/compiled/methods/get-heading-tooltip.js"),
  sortable: __webpack_require__(/*! ../methods/sortable */ "./node_modules/vue-tables-2/compiled/methods/sortable.js"),
  serverSearch: __webpack_require__(/*! ../methods/server-search */ "./node_modules/vue-tables-2/compiled/methods/server-search.js"),
  initOrderBy: __webpack_require__(/*! ../methods/init-order-by */ "./node_modules/vue-tables-2/compiled/methods/init-order-by.js"),
  initDateFilters: __webpack_require__(/*! ../methods/init-date-filters */ "./node_modules/vue-tables-2/compiled/methods/init-date-filters.js"),
  setFilter: __webpack_require__(/*! ../methods/set-filter */ "./node_modules/vue-tables-2/compiled/methods/set-filter.js"),
  setPage: __webpack_require__(/*! ../methods/set-page */ "./node_modules/vue-tables-2/compiled/methods/set-page.js"),
  setOrder: __webpack_require__(/*! ../methods/set-order */ "./node_modules/vue-tables-2/compiled/methods/set-order.js"),
  initPagination: __webpack_require__(/*! ../methods/init-pagination */ "./node_modules/vue-tables-2/compiled/methods/init-pagination.js"),
  filterable: __webpack_require__(/*! ../methods/filterable */ "./node_modules/vue-tables-2/compiled/methods/filterable.js"),
  isTextFilter: __webpack_require__(/*! ../methods/is-text-filter */ "./node_modules/vue-tables-2/compiled/methods/is-text-filter.js"),
  isDateFilter: __webpack_require__(/*! ../methods/is-date-filter */ "./node_modules/vue-tables-2/compiled/methods/is-date-filter.js"),
  isListFilter: __webpack_require__(/*! ../methods/is-list-filter */ "./node_modules/vue-tables-2/compiled/methods/is-list-filter.js"),
  highlightMatch: __webpack_require__(/*! ../filters/highlight-matches */ "./node_modules/vue-tables-2/compiled/filters/highlight-matches.js"),
  formatDate: __webpack_require__(/*! ../filters/format-date */ "./node_modules/vue-tables-2/compiled/filters/format-date.js"),
  hasDateFilters: __webpack_require__(/*! ../methods/has-date-filters */ "./node_modules/vue-tables-2/compiled/methods/has-date-filters.js"),
  applyFilters: __webpack_require__(/*! ../methods/apply-filters */ "./node_modules/vue-tables-2/compiled/methods/apply-filters.js"),
  optionText: __webpack_require__(/*! ../filters/option-text */ "./node_modules/vue-tables-2/compiled/filters/option-text.js"),
  render: __webpack_require__(/*! ../methods/render */ "./node_modules/vue-tables-2/compiled/methods/render.js"),
  rowWasClicked: __webpack_require__(/*! ../methods/row-was-clicked */ "./node_modules/vue-tables-2/compiled/methods/row-was-clicked.js"),
  setLimit: __webpack_require__(/*! ../methods/set-limit */ "./node_modules/vue-tables-2/compiled/methods/set-limit.js"),
  getOpenChildRows: __webpack_require__(/*! ../methods/get-open-child-rows */ "./node_modules/vue-tables-2/compiled/methods/get-open-child-rows.js"),
  dispatch: __webpack_require__(/*! ../methods/dispatch */ "./node_modules/vue-tables-2/compiled/methods/dispatch.js"),
  toggleChildRow: __webpack_require__(/*! ../methods/toggle-child-row */ "./node_modules/vue-tables-2/compiled/methods/toggle-child-row.js"),
  childRowTogglerClass: __webpack_require__(/*! ../methods/child-row-toggler-class */ "./node_modules/vue-tables-2/compiled/methods/child-row-toggler-class.js"),
  sendRequest: __webpack_require__(/*! ../methods/send-request */ "./node_modules/vue-tables-2/compiled/methods/send-request.js"),
  getResponseData: __webpack_require__(/*! ../methods/get-response-data */ "./node_modules/vue-tables-2/compiled/methods/get-response-data.js"),
  getSortFn: __webpack_require__(/*! ../methods/get-sort-fn */ "./node_modules/vue-tables-2/compiled/methods/get-sort-fn.js"),
  initState: __webpack_require__(/*! ../methods/init-state */ "./node_modules/vue-tables-2/compiled/methods/init-state.js"),
  updateState: __webpack_require__(/*! ../methods/update-state */ "./node_modules/vue-tables-2/compiled/methods/update-state.js"),
  columnClass: __webpack_require__(/*! ../methods/column-class */ "./node_modules/vue-tables-2/compiled/methods/column-class.js"),
  getName: __webpack_require__(/*! ../methods/get-name */ "./node_modules/vue-tables-2/compiled/methods/get-name.js"),
  toggleColumn: __webpack_require__(/*! ../methods/toggle-column */ "./node_modules/vue-tables-2/compiled/methods/toggle-column.js"),
  setUserMultiSort: __webpack_require__(/*! ../methods/set-user-multi-sort */ "./node_modules/vue-tables-2/compiled/methods/set-user-multi-sort.js"),
  _cellClasses: __webpack_require__(/*! ../methods/cell-classes */ "./node_modules/vue-tables-2/compiled/methods/cell-classes.js"),
  _setFiltersDOM: __webpack_require__(/*! ../methods/set-filters-dom */ "./node_modules/vue-tables-2/compiled/methods/set-filters-dom.js"),
  _currentlySorted: __webpack_require__(/*! ../methods/currently-sorted */ "./node_modules/vue-tables-2/compiled/methods/currently-sorted.js"),
  _getChildRowTemplate: __webpack_require__(/*! ../methods/get-child-row-template */ "./node_modules/vue-tables-2/compiled/methods/get-child-row-template.js"),
  _toggleColumnsDropdown: __webpack_require__(/*! ../methods/toggle-columns-dropdown */ "./node_modules/vue-tables-2/compiled/methods/toggle-columns-dropdown.js"),
  _onlyColumn: __webpack_require__(/*! ../methods/only-column */ "./node_modules/vue-tables-2/compiled/methods/only-column.js"),
  _onPagination: __webpack_require__(/*! ../methods/on-pagination */ "./node_modules/vue-tables-2/compiled/methods/on-pagination.js"),
  _toggleGroupDirection: __webpack_require__(/*! ../methods/toggle-group-direction */ "./node_modules/vue-tables-2/compiled/methods/toggle-group-direction.js"),
  _getInitialDateRange: __webpack_require__(/*! ../methods/get-initial-date-range */ "./node_modules/vue-tables-2/compiled/methods/get-initial-date-range.js"),
  _setDatepickerText: __webpack_require__(/*! ../methods/set-datepicker-text */ "./node_modules/vue-tables-2/compiled/methods/set-datepicker-text.js"),
  _initialOrderAscending: __webpack_require__(/*! ../methods/initial-order-ascending */ "./node_modules/vue-tables-2/compiled/methods/initial-order-ascending.js"),
  dateFormat: __webpack_require__(/*! ../methods/date-format */ "./node_modules/vue-tables-2/compiled/methods/date-format.js"),
  _setColumnsDropdownCloseListener: __webpack_require__(/*! ../methods/set-columns-dropdown-close-listener */ "./node_modules/vue-tables-2/compiled/methods/set-columns-dropdown-close-listener.js"),
  _getValue: __webpack_require__(/*! ../methods/get-value */ "./node_modules/vue-tables-2/compiled/methods/get-value.js"),
  _getColumnName: __webpack_require__(/*! ../methods/get-column-name */ "./node_modules/vue-tables-2/compiled/methods/get-column-name.js"),
  _shouldShowColumnOnInit: __webpack_require__(/*! ../methods/should-show-column-on-init */ "./node_modules/vue-tables-2/compiled/methods/should-show-column-on-init.js")
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/modules/column-filters.js":
/*!**********************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/modules/column-filters.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _merge = _interopRequireDefault(__webpack_require__(/*! merge */ "./node_modules/merge/merge.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = function (h) {
  var _this = this;

  return function (classes) {
    if (!_this.opts.filterByColumn || !_this.opts.filterable) return '';

    var textFilter = __webpack_require__(/*! ./text-filter */ "./node_modules/vue-tables-2/compiled/modules/text-filter.js").call(_this, h, classes.input);

    var dateFilter = __webpack_require__(/*! ./date-filter */ "./node_modules/vue-tables-2/compiled/modules/date-filter.js").call(_this, h);

    var listFilter = __webpack_require__(/*! ./list-filter */ "./node_modules/vue-tables-2/compiled/modules/list-filter.js").call(_this, h, classes.select);

    var filters = [];
    var filter;
    if (_this.hasChildRow && _this.opts.childRowTogglerFirst && _this.opts.showChildRowToggler) filters.push(h("th"));

    _this.allColumns.map(function (column) {
      var filter = '';

      if (_this.filterable(column)) {
        switch (true) {
          case _this.isTextFilter(column):
            filter = textFilter(column);
            break;

          case _this.isDateFilter(column):
            filter = dateFilter(column);
            break;

          case _this.isListFilter(column):
            filter = listFilter(column);
            break;
        }
      }

      if (typeof _this.$slots["filter__".concat(column)] !== 'undefined') {
        filter = filter ? h("div", [filter, _this.$slots["filter__".concat(column)]]) : _this.$slots["filter__".concat(column)];
      }

      filters.push(h("th", {
        "class": _this.columnClass(column)
      }, [h("div", _defineProperty({
        "class": "VueTables__column-filter"
      }, "class", 'VueTables__' + column + '-filter-wrapper'), [filter])]));
    });

    if (_this.hasChildRow && !_this.opts.childRowTogglerFirst && _this.opts.showChildRowToggler) filters.push(h("th"));
    return h("tr", {
      "class": "VueTables__filters-row"
    }, [filters]);
  };
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/modules/columns-dropdown.js":
/*!************************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/modules/columns-dropdown.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dropdownWrapper = __webpack_require__(/*! ./dropdown-wrapper */ "./node_modules/vue-tables-2/compiled/modules/dropdown-wrapper.js");

var dropdownItemWrapper = __webpack_require__(/*! ./dropdown-item-wrapper */ "./node_modules/vue-tables-2/compiled/modules/dropdown-item-wrapper.js");

module.exports = function (h) {
  var _this = this;

  return function (classes) {
    var cols = _this.columns.map(function (column) {
      return dropdownItemWrapper(h, classes, h("a", {
        "class": classes.dropdown.item,
        attrs: {
          href: "#"
        },
        on: {
          "click": function click() {
            return _this.toggleColumn(column);
          }
        }
      }, [h("input", {
        attrs: {
          type: "checkbox",
          disabled: _this._onlyColumn(column)
        },
        domProps: {
          "value": column,
          "checked": _this.allColumns.includes(column)
        }
      }), _this.getHeading(column)]));
    });

    return h("div", {
      ref: "columnsdropdown",
      "class": "".concat(classes.dropdown.container, " ").concat(classes.right, " VueTables__columns-dropdown")
    }, [h("button", {
      attrs: {
        type: "button"
      },
      "class": "".concat(classes.button, " ").concat(classes.dropdown.trigger),
      on: {
        "click": _this._toggleColumnsDropdown.bind(_this)
      }
    }, [_this.display('columns'), h("span", {
      "class": "".concat(classes.icon, " ").concat(classes.small)
    }, [h("i", {
      "class": classes.dropdown.caret
    })])]), dropdownWrapper.call(_this, h, classes, cols)]);
  };
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/modules/date-filter.js":
/*!*******************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/modules/date-filter.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (h) {
  var _this = this;

  return function (column) {
    return h("div", {
      "class": "VueTables__date-filter",
      attrs: {
        id: 'VueTables__' + column + '-filter'
      }
    }, [h("span", {
      "class": "VueTables__filter-placeholder"
    }, [_this.display('filterBy', {
      column: _this.getHeading(column)
    })])]);
  };
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/modules/dropdown-item-wrapper.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/modules/dropdown-item-wrapper.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (h, classes, item) {
  if (classes.framework === 'bulma') {
    return item;
  }

  return h("li", [item]);
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/modules/dropdown-pagination-count.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/modules/dropdown-pagination-count.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (h) {
  var _this = this;

  return function () {
    if (_this.count > 0 && _this.opts.pagination.dropdown) {
      var perPage = parseInt(_this.limit);
      var from = (_this.Page - 1) * perPage + 1;
      var to = _this.Page == _this.totalPages ? _this.count : from + perPage - 1;

      var parts = _this.opts.texts.count.split('|');

      var i = Math.min(_this.count == 1 ? 2 : _this.totalPages == 1 ? 1 : 0, parts.length - 1);
      var count = parts[i].replace('{count}', _this.count).replace('{from}', from).replace('{to}', to);
      return h("div", {
        "class": "VuePagination"
      }, [h("p", {
        "class": "VuePagination__count"
      }, [count])]);
    }

    return '';
  };
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/modules/dropdown-pagination.js":
/*!***************************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/modules/dropdown-pagination.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var debounce = __webpack_require__(/*! debounce */ "./node_modules/debounce/index.js");

module.exports = function (h) {
  var _this = this;

  return function (selectClass, id) {
    var pages = [];
    var selected;

    for (var pag = 1; pag <= _this.totalPages; pag++) {
      var selected = _this.page == pag;
      pages.push(h("option", {
        domProps: {
          "value": pag,
          "selected": selected
        }
      }, [pag]));
    }

    return h("select", {
      "class": "".concat(selectClass, " dropdown-pagination"),
      directives: [{
        name: "show",
        value: _this.totalPages > 1
      }],
      attrs: {
        name: "page",
        id: id
      },
      ref: "page",
      domProps: {
        "value": _this.page
      },
      on: {
        "change": _this.setPage.bind(_this, null, false)
      }
    }, [pages]);
  };
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/modules/dropdown-wrapper.js":
/*!************************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/modules/dropdown-wrapper.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (h, classes, columns) {
  if (classes.framework === 'bulma') {
    return h("div", {
      "class": classes.dropdown.menu,
      style: this.displayColumnsDropdown ? 'display:block' : 'display:none'
    }, [h("div", {
      "class": classes.dropdown.content
    }, [columns])]);
  }

  if (classes.framework === 'bootstrap4') {
    return h("div", {
      "class": classes.dropdown.menu,
      style: this.displayColumnsDropdown ? 'display:block' : 'display:none'
    }, [columns]);
  }

  return h("ul", {
    "class": classes.dropdown.menu,
    style: this.displayColumnsDropdown ? 'display:block' : 'display:none'
  }, [columns]);
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/modules/headings.js":
/*!****************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/modules/headings.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (h) {
  var _this = this;

  return function (right) {
    var that = _this;

    var sortControl = __webpack_require__(/*! ./sort-control */ "./node_modules/vue-tables-2/compiled/modules/sort-control.js")(h, right);

    var headings = [];
    if (_this.hasChildRow && _this.opts.childRowTogglerFirst && _this.opts.showChildRowToggler) headings.push(h("th"));

    _this.allColumns.map(function (column) {
      headings.push(h("th", {
        on: {
          "keypress": function keypress(e) {
            if (e.key === "Enter") {
              that.orderByColumn.bind(that, column, e)();
            }
          },
          "click": function click(e) {
            if (e.target.className !== "resize-handle") {
              that.orderByColumn.bind(that, column, e)();
            }
          }
        },
        attrs: {
          id: "VueTables_th--".concat(column),
          tabindex: "0"
        },
        "class": this.sortableClass(column)
      }, [h("span", {
        "class": "VueTables__heading",
        attrs: {
          title: this.getHeadingTooltip(column, h)
        }
      }, [this.getHeading(column, h)]), sortControl.call(this, column)]));
    }.bind(_this));

    if (_this.hasChildRow && !_this.opts.childRowTogglerFirst && _this.opts.showChildRowToggler) headings.push(h("th"));
    return headings;
  };
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/modules/list-filter.js":
/*!*******************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/modules/list-filter.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (h, selectClass) {
  var _this = this;

  return function (column) {
    var options = [];
    var selected;
    var search = _this.source == 'client' ? _this.search.bind(_this, _this.data) : _this.serverSearch.bind(_this);

    var displayable = _this.opts.listColumns[column].filter(function (item) {
      return !item.hide;
    });

    displayable.map(function (option) {
      selected = option.id == _this.query[column] && _this.query[column] !== '';
      options.push(h("option", {
        domProps: {
          "value": option.id,
          "selected": selected
        }
      }, [option.text]));
    });
    return h("div", {
      "class": "VueTables__list-filter",
      attrs: {
        id: 'VueTables__' + column + '-filter'
      }
    }, [h("select", {
      "class": selectClass,
      on: {
        "change": search
      },
      attrs: {
        name: _this._getColumnName(column)
      },
      domProps: {
        "value": _this.query[column]
      }
    }, [h("option", {
      attrs: {
        value: ""
      }
    }, [_this.display('defaultOption', {
      column: _this.opts.headings[column] ? _this.opts.headings[column] : column
    })]), options])]);
  };
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/modules/normal-filter.js":
/*!*********************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/modules/normal-filter.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var debounce = __webpack_require__(/*! debounce */ "./node_modules/debounce/index.js");

module.exports = function (h) {
  var _this = this;

  return function (classes, id) {
    var search = _this.source == 'client' ? _this.search.bind(_this, _this.data) : _this.serverSearch.bind(_this);
    return h("input", {
      "class": "VueTables__search__input ".concat(classes.input, " ").concat(classes.small),
      attrs: {
        type: "text",
        placeholder: _this.display('filterPlaceholder'),
        id: id,
        autocomplete: "off"
      },
      on: {
        "keyup": _this.opts.debounce ? debounce(search, _this.opts.debounce) : search
      }
    });
  };
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/modules/pagination.js":
/*!******************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/modules/pagination.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (h) {
  var _this = this;

  return function (theme) {
    if (_this.opts.pagination && _this.opts.pagination.dropdown) return '';
    var options = {
      theme: theme,
      chunk: _this.opts.pagination.chunk,
      chunksNavigation: _this.opts.pagination.nav,
      edgeNavigation: _this.opts.pagination.edge,
      texts: {
        count: _this.opts.texts.count,
        first: _this.opts.texts.first,
        last: _this.opts.texts.last
      }
    };
    var name = _this.vuex ? _this.name : _this.id;
    return h("pagination", {
      ref: "pagination",
      attrs: {
        options: options,
        "for": name,
        vuex: _this.vuex,
        records: _this.count,
        "per-page": parseInt(_this.limit)
      },
      on: {
        "paginate": _this._onPagination.bind(_this)
      }
    });
  };
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/modules/per-page-values.js":
/*!***********************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/modules/per-page-values.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (h) {
  var _this = this;

  var perpageValues = [];
  this.opts.perPageValues.every(function (value) {
    var isLastEntry = value >= _this.count;
    var selected = _this.limit == value || isLastEntry && _this.limit > value;
    perpageValues.push(h("option", {
      domProps: {
        "value": value,
        "selected": selected
      }
    }, [value]));
    return !isLastEntry;
  });
  return perpageValues;
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/modules/per-page.js":
/*!****************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/modules/per-page.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (h) {
  var _this = this;

  return function (perpageValues, cls, id) {
    return h("select", {
      "class": cls,
      attrs: {
        name: "limit",
        id: id
      },
      domProps: {
        "value": _this.limit
      },
      on: {
        "change": _this.setLimit.bind(_this)
      }
    }, [perpageValues]);
  };
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/modules/rows.js":
/*!************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/modules/rows.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(/*! babel-helper-vue-jsx-merge-props */ "./node_modules/babel-helper-vue-jsx-merge-props/index.js"));

var _clone = _interopRequireDefault(__webpack_require__(/*! clone */ "./node_modules/clone/clone.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = function (h) {
  var _this = this;

  return function (classes) {
    var data;

    if (_this.source === 'client') {
      data = _this.filteredData;

      if (!data.length && _this.source === 'client' && _this.page !== 1) {
        // data was dynamically removed go to last page
        _this.setPage(_this.totalPages ? _this.totalPages : 1);
      }
    } else {
      data = _this.tableData;
    }

    if (data.length === 0) {
      var colspan = _this.allColumns.length;
      if (_this.hasChildRow && _this.opts.showChildRowToggler) colspan++;
      return h("tr", {
        "class": "VueTables__no-results"
      }, [h("td", {
        "class": "text-center",
        attrs: {
          tabindex: "0",
          colspan: _this.colspan
        }
      }, [_this.display(_this.loading ? 'loading' : 'noResults')])]);
    }

    var rows = [];
    var columns;
    var rowKey = _this.opts.uniqueKey;
    var rowAttributes;
    var rowClass;
    var recordCount = (_this.Page - 1) * _this.limit;
    var currentGroup;
    var groupSlot;
    var groupValue;
    var groupByContent;
    data.map(function (row, index) {
      if (_this.opts.groupBy && _this.source === 'client' && row[_this.opts.groupBy] !== currentGroup) {
        groupSlot = _this.getGroupSlot(row[_this.opts.groupBy]);
        groupValue = row[_this.opts.groupBy];
        groupByContent = _this.opts.toggleGroups ? h("button", {
          "class": classes.button,
          on: {
            "click": _this.toggleGroup.bind(_this, groupValue)
          }
        }, [groupValue, h("span", {
          "class": _this.groupToggleIcon(groupValue)
        })]) : groupValue;
        rows.push(h("tr", {
          "class": classes.groupTr,
          on: {
            "click": _this._toggleGroupDirection.bind(_this)
          }
        }, [h("td", {
          attrs: {
            colspan: _this.colspan
          }
        }, [groupByContent, groupSlot])]));
        currentGroup = row[_this.opts.groupBy];
      }

      if (_this.opts.toggleGroups && _this.collapsedGroups.includes(currentGroup)) {
        return;
      }

      index = recordCount + index + 1;
      columns = [];
      var update;
      var isEditing;
      var setEditing;
      var revertValue;

      if (_this.hasChildRow && _this.opts.showChildRowToggler) {
        var childRowToggler = h("td", {
          attrs: {
            tabindex: "0"
          },
          on: {
            "keypress": function keypress(e) {
              if (e.key === 'Enter') {
                _this.toggleChildRow.bind(_this, row[rowKey])();
              }
            },
            "click": _this.toggleChildRow.bind(_this, row[rowKey])
          }
        }, [h("span", {
          "class": "VueTables__child-row-toggler " + _this.childRowTogglerClass(row[rowKey])
        })]);
        if (_this.opts.childRowTogglerFirst) columns.push(childRowToggler);
      }

      _this.allColumns.map(function (column) {
        var rowTemplate = _this.$scopedSlots && _this.$scopedSlots[column];

        if (rowTemplate) {
          var rowTemplateData = {
            row: row,
            column: column,
            index: index
          };
        }

        if (_this.opts.editableColumns.includes(column)) {
          rowTemplateData.update = updateValue(row, column).bind(_this);
          rowTemplateData.isEditing = editing(row, column).bind(_this);
          rowTemplateData.setEditing = setEdit(row, column).bind(_this);
          rowTemplateData.revertValue = revertVal(row, column).bind(_this);
        }

        columns.push(h("td", {
          "class": "".concat(_this.columnClass(column), " ").concat(_this._cellClasses(column, row)).trim(),
          attrs: {
            tabindex: "0"
          }
        }, [rowTemplate ? rowTemplate(rowTemplateData) : _this.render(row, column, index, h)]));
      });

      if (_this.hasChildRow && !_this.opts.childRowTogglerFirst && _this.opts.showChildRowToggler) columns.push(childRowToggler);
      rowClass = _this.opts.rowClassCallback ? _this.opts.rowClassCallback(row) : '';
      rowAttributes = _this.opts.rowAttributesCallback ? _this.opts.rowAttributesCallback(row) : {};
      rows.push(h("tr", (0, _babelHelperVueJsxMergeProps["default"])([{
        attrs: rowAttributes
      }, {
        "class": "VueTables__row ".concat(rowClass),
        on: {
          "click": _this.rowWasClicked.bind(_this, row, index)
        }
      }]), [columns, " "]));
      rows.push(_this.hasChildRow && _this.openChildRows.includes(row[rowKey]) ? h("tr", {
        "class": "VueTables__child-row ".concat(rowClass)
      }, [h("td", {
        attrs: {
          colspan: _this.colspan,
          tabindex: "0"
        }
      }, [_this._getChildRowTemplate(h, row, index)])]) : h());
    });
    return rows;
  };
};

function setEdit(row, column) {
  return function (editing) {
    var _this2 = this;

    if (editing) {
      this.editing.push({
        id: row[this.opts.uniqueKey],
        column: column,
        originalValue: row[column]
      });
    } else {
      this.editing = this.editing.filter(function (e) {
        return e.id !== row[_this2.opts.uniqueKey];
      });
    }
  };
}

function editing(row, column) {
  return function () {
    var _this3 = this;

    return this.editing.find(function (e) {
      return e.id === row[_this3.opts.uniqueKey] && e.column === column;
    });
  };
}

function revertVal(row, column) {
  return function () {
    var _this4 = this;

    var origVal = this.editing.find(function (e) {
      return e.id === row[_this4.opts.uniqueKey];
    }).originalValue;
    row[column] = origVal;
  };
}

function updateValue(row, column) {
  return function (e) {
    var _this5 = this;

    var oldVal = row[column];
    row[column] = getValue(e);
    var data = (0, _clone["default"])(this.data).map(function (r) {
      if (r[_this5.opts.uniqueKey] === row[_this5.opts.uniqueKey]) {
        return row;
      }

      return r;
    });
    this.$emit('input', data);
    this.$emit('update', {
      row: row,
      column: column,
      oldVal: oldVal,
      newVal: row[column]
    });
  };
}

function getValue(val) {
  if (val.target) {
    return val.target.type === 'checkbox' ? val.target.checked : val.target.value;
  }

  return val;
}

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/modules/sort-control.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/modules/sort-control.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (h, right) {
  return function (column) {
    if (!this.sortable(column)) return '';
    return h("span", {
      "class": "VueTables__sort-icon ".concat(right, " ").concat(this.sortableChevronClass(column))
    });
  };
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/modules/text-filter.js":
/*!*******************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/modules/text-filter.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var debounce = __webpack_require__(/*! debounce */ "./node_modules/debounce/index.js");

module.exports = function (h, inputClass) {
  var _this = this;

  var search = this.source == 'client' ? this.search.bind(this, this.data) : this.serverSearch.bind(this);

  if (this.opts.debounce) {
    var debouncedSearch = debounce(search, this.opts.debounce);

    var onKeyUp = function onKeyUp(e) {
      if (e.keyCode === 9) return;

      if (e.keyCode === 13) {
        debouncedSearch.clear();
        search.apply(void 0, arguments);
      } else {
        debouncedSearch.apply(void 0, arguments);
      }
    };
  }

  return function (column) {
    return h("input", {
      on: {
        "keyup": _this.opts.debounce ? onKeyUp : search
      },
      "class": inputClass,
      attrs: {
        name: _this._getColumnName(column),
        type: "text",
        placeholder: _this.display('filterBy', {
          column: _this.getHeading(column)
        }),
        autocomplete: "off"
      }
    });
  };
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/slots.js":
/*!*****************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/slots.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  return {
    beforeFilters: this.$slots.beforeFilters ? this.$slots.beforeFilters : '',
    afterFilters: this.$slots.afterFilters ? this.$slots.afterFilters : '',
    prependHead: this.$slots.prependHead ? this.$slots.prependHead : '',
    beforeBody: this.$slots.beforeBody ? this.$slots.beforeBody : '',
    prependBody: this.$slots.prependBody ? this.$slots.prependBody : '',
    appendBody: this.$slots.appendBody ? this.$slots.appendBody : '',
    afterBody: this.$slots.afterBody ? this.$slots.afterBody : '',
    beforeFilter: this.$slots.beforeFilter ? this.$slots.beforeFilter : '',
    afterFilter: this.$slots.afterFilter ? this.$slots.afterFilter : '',
    afterFilterWrapper: this.$slots.afterFilterWrapper ? this.$slots.afterFilterWrapper : '',
    beforeSearch: this.$slots.beforeSearch ? this.$slots.beforeSearch : '',
    beforeLimit: this.$slots.beforeLimit ? this.$slots.beforeLimit : '',
    afterLimit: this.$slots.afterLimit ? this.$slots.afterLimit : '',
    beforeTable: this.$slots.beforeTable ? this.$slots.beforeTable : '',
    afterTable: this.$slots.afterTable ? this.$slots.afterTable : ''
  };
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/state/data.js":
/*!**********************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/state/data.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _merge = _interopRequireDefault(__webpack_require__(/*! merge */ "./node_modules/merge/merge.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _default(useVuex, source) {
  var page = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var data = {
    vuex: true,
    activeState: false,
    userColumnsDisplay: [],
    userControlsColumns: false,
    displayColumnsDropdown: false,
    collapsedGroups: []
  };
  if (useVuex) return data;
  data = (0, _merge["default"])(data, {
    vuex: false,
    count: 0,
    customQueries: {},
    query: null,
    page: page,
    limit: 10,
    windowWidth: typeof window !== 'undefined' ? window.innerWidth : null,
    orderBy: {
      column: false,
      ascending: true
    }
  });
  if (source == 'server') data.data = [];
  return data;
}

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/state/mutations.js":
/*!***************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/state/mutations.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _merge = _interopRequireDefault(__webpack_require__(/*! merge */ "./node_modules/merge/merge.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _default(self) {
  var _ref, _merge$recursive;

  var extra = self.source == 'server' ? (_ref = {}, _defineProperty(_ref, "".concat(self.name, "/SET_DATA"), function SET_DATA(state, response) {
    var data = self.opts.responseAdapter.call(self, response);
    state.data = data.data;
    state.count = parseInt(data.count);
  }), _defineProperty(_ref, "".concat(self.name, "/LOADING"), function LOADING(state, payload) {}), _defineProperty(_ref, "".concat(self.name, "/LOADED"), function LOADED(state, payload) {}), _defineProperty(_ref, "".concat(self.name, "/ERROR"), function ERROR(state, payload) {}), _defineProperty(_ref, "".concat(self.name, "/SET_COUNT"), function SET_COUNT(state, count) {
    state.count = count;
  }), _ref) : _defineProperty({}, "".concat(self.name, "/SET_COUNT"), function SET_COUNT(state, count) {
    state.count = count;
  });
  return _merge["default"].recursive(true, (_merge$recursive = {}, _defineProperty(_merge$recursive, "".concat(self.name, "/PAGINATE"), function PAGINATE(state, page) {
    state.page = page;
    self.updateState('page', page);
    if (self.source == 'server') self.getData();
    self.commit('PAGINATION', page);
  }), _defineProperty(_merge$recursive, "".concat(self.name, "/SET_FILTER"), function SET_FILTER(state, filter) {
    state.page = 1;
    self.updateState('page', 1);
    state.query = filter;

    if (self.source == 'server') {
      self.getData();
    }
  }), _defineProperty(_merge$recursive, "".concat(self.name, "/PAGINATION"), function PAGINATION(state, page) {}), _defineProperty(_merge$recursive, "".concat(self.name, "/SET_CUSTOM_FILTER"), function SET_CUSTOM_FILTER(state, _ref3) {
    var filter = _ref3.filter,
        value = _ref3.value;
    state.customQueries[filter] = value;
    state.page = 1;
    self.updateState('page', 1);
    self.updateState('customQueries', state.customQueries);

    if (self.source == 'server') {
      self.getData();
    }
  }), _defineProperty(_merge$recursive, "".concat(self.name, "/SET_STATE"), function SET_STATE(state, _ref4) {
    var page = _ref4.page,
        query = _ref4.query,
        customQueries = _ref4.customQueries,
        limit = _ref4.limit,
        orderBy = _ref4.orderBy;
    state.customQueries = customQueries;
    state.query = query;
    state.page = page;
    state.limit = limit;
    state.ascending = orderBy.ascending;
    state.sortBy = orderBy.column;
  }), _defineProperty(_merge$recursive, "".concat(self.name, "/SET_LIMIT"), function SET_LIMIT(state, limit) {
    state.page = 1;
    self.updateState('page', 1);
    state.limit = limit;
    if (self.source == 'server') self.getData();
  }), _defineProperty(_merge$recursive, "".concat(self.name, "/SORT"), function SORT(state, _ref5) {
    var column = _ref5.column,
        ascending = _ref5.ascending;
    state.ascending = ascending;
    state.sortBy = column;
    if (self.source == 'server') self.getData();
  }), _defineProperty(_merge$recursive, "".concat(self.name, "/SORTED"), function SORTED(state, data) {}), _defineProperty(_merge$recursive, "".concat(self.name, "/ROW_CLICK"), function ROW_CLICK(state, row) {}), _defineProperty(_merge$recursive, "".concat(self.name, "/FILTER"), function FILTER(state, row) {}), _defineProperty(_merge$recursive, "".concat(self.name, "/LIMIT"), function LIMIT(state, limit) {}), _merge$recursive), extra);
}

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/state/normal.js":
/*!************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/state/normal.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default() {
  return {
    computed: {
      Columns: function Columns() {
        return this.columns;
      }
    }
  };
}

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/state/register-module.js":
/*!*********************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/state/register-module.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _state = _interopRequireDefault(__webpack_require__(/*! ./state */ "./node_modules/vue-tables-2/compiled/state/state.js"));

var _mutations = _interopRequireDefault(__webpack_require__(/*! ./mutations */ "./node_modules/vue-tables-2/compiled/state/mutations.js"));

var _merge = _interopRequireDefault(__webpack_require__(/*! merge */ "./node_modules/merge/merge.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = function (self) {
  var Module = {
    state: (0, _state["default"])(self),
    mutations: (0, _mutations["default"])(self)
  };

  if (self.$store && self.$store.state && self.$store.state[self.name]) {
    Module.state = _merge["default"].recursive(Module.state, self.$store.state[self.name]);
    self.$store.unregisterModule(self.name);
  }

  self.$store.registerModule(self.name, Module);
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/state/state.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/state/state.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _merge = _interopRequireDefault(__webpack_require__(/*! merge */ "./node_modules/merge/merge.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _default(self) {
  var state = {
    page: self.opts.initialPage ? self.opts.initialPage : 1,
    limit: self.opts.perPage,
    count: self.source == 'server' ? 0 : self.data.length,
    columns: self.columns,
    data: self.source == 'client' ? self.data : [],
    query: self.initQuery(),
    customQueries: self.initCustomFilters(),
    sortBy: self.opts.orderBy && self.opts.orderBy.column ? self.opts.orderBy.column : false,
    ascending: self.opts.orderBy && self.opts.orderBy.hasOwnProperty('ascending') ? self.opts.orderBy.ascending : true
  };

  if (typeof self.$store.state[self.name] !== 'undefined') {
    return (0, _merge["default"])(true, self.$store.state[self.name], state);
  }

  return state;
}

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/state/vuex.js":
/*!**********************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/state/vuex.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _merge = _interopRequireDefault(__webpack_require__(/*! merge */ "./node_modules/merge/merge.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _default(source) {
  var extra = source == 'server' ? serverExtra() : clientExtra();
  return _merge["default"].recursive(true, {
    props: {
      name: {
        type: String,
        required: true
      }
    },
    computed: {
      state: function state() {
        return this.$store.state[this.name];
      },
      Page: function Page() {
        return this.state.page;
      },
      count: function count() {
        return this.state.count;
      },
      Columns: function Columns() {
        return this.state.columns;
      },
      tableData: function tableData() {
        return this.state.data;
      },
      page: function page() {
        return this.state.page;
      },
      limit: function limit() {
        return this.state.limit;
      },
      customQueries: function customQueries() {
        return this.state.customQueries;
      },
      query: function query() {
        return this.state.query;
      },
      orderBy: function orderBy() {
        return {
          column: this.state.sortBy,
          ascending: this.state.ascending
        };
      }
    },
    methods: {
      commit: function commit(action, payload) {
        return this.$store.commit("".concat(this.name, "/").concat(action), payload);
      },
      orderByColumn: function orderByColumn(column, ev) {
        if (!this.sortable(column)) return;

        if (ev.shiftKey && this.orderBy.column && this.hasMultiSort) {
          this.setUserMultiSort(column);
        } else {
          var ascending = this.orderBy.column === column ? !this.orderBy.ascending : this._initialOrderAscending(column);
          var orderBy = {
            column: column,
            ascending: ascending
          };
          this.updateState('orderBy', orderBy);
          this.commit('SORT', orderBy);
          this.dispatch('sorted', orderBy);
        }
      },
      setLimit: function setLimit(e) {
        var limit = _typeof(e) === 'object' ? parseInt(e.target.value) : e;
        this.updateState('perPage', limit);
        this.commit("SET_LIMIT", limit);
        this.dispatch("limit", limit);
      },
      setOrder: function setOrder(column, ascending) {
        this.updateState('orderBy', {
          column: column,
          ascending: ascending
        });
        this.commit('SORT', {
          column: column,
          ascending: ascending
        });
      },
      setPage: function setPage(page) {
        if (!page) {
          page = this.$refs.page.value;
        }

        if (!this.opts.pagination.dropdown) this.$refs.pagination.Page = page;
        this.commit("PAGINATE", page);
      }
    }
  }, extra);
}

function serverExtra() {
  return {
    methods: {
      setData: function setData(data) {
        this.commit('SET_DATA', data);
        setTimeout(function () {
          this.dispatch('loaded', data);
        }.bind(this), 0);
      }
    }
  };
}

function clientExtra() {
  return {};
}

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/table.js":
/*!*****************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/table.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var methods = __webpack_require__(/*! ./mixins/methods */ "./node_modules/vue-tables-2/compiled/mixins/methods.js");

var computed = __webpack_require__(/*! ./mixins/computed */ "./node_modules/vue-tables-2/compiled/mixins/computed.js");

var beforeDestroy = __webpack_require__(/*! ./mixins/before-destroy */ "./node_modules/vue-tables-2/compiled/mixins/before-destroy.js");

function _default() {
  return {
    methods: methods,
    computed: computed,
    beforeDestroy: beforeDestroy
  };
}

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/template-compiler.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/template-compiler.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function (template, theme) {
  var themes = {
    bootstrap3: __webpack_require__(/*! ./themes/bootstrap3 */ "./node_modules/vue-tables-2/compiled/themes/bootstrap3.js")(),
    bootstrap4: __webpack_require__(/*! ./themes/bootstrap4 */ "./node_modules/vue-tables-2/compiled/themes/bootstrap4.js")(),
    bulma: __webpack_require__(/*! ./themes/bulma */ "./node_modules/vue-tables-2/compiled/themes/bulma.js")()
  };
  var templates = {
    "default": __webpack_require__(/*! ./templates/default */ "./node_modules/vue-tables-2/compiled/templates/default.js"),
    footerPagination: __webpack_require__(/*! ./templates/footer-pagination */ "./node_modules/vue-tables-2/compiled/templates/footer-pagination.js")
  };
  return function (h) {
    var modules = {
      rows: __webpack_require__(/*! ./modules/rows */ "./node_modules/vue-tables-2/compiled/modules/rows.js").call(this, h),
      normalFilter: __webpack_require__(/*! ./modules/normal-filter */ "./node_modules/vue-tables-2/compiled/modules/normal-filter.js").call(this, h),
      dropdownPagination: __webpack_require__(/*! ./modules/dropdown-pagination */ "./node_modules/vue-tables-2/compiled/modules/dropdown-pagination.js").call(this, h),
      dropdownPaginationCount: __webpack_require__(/*! ./modules/dropdown-pagination-count */ "./node_modules/vue-tables-2/compiled/modules/dropdown-pagination-count.js").call(this, h),
      columnFilters: __webpack_require__(/*! ./modules/column-filters */ "./node_modules/vue-tables-2/compiled/modules/column-filters.js").call(this, h),
      pagination: __webpack_require__(/*! ./modules/pagination */ "./node_modules/vue-tables-2/compiled/modules/pagination.js").call(this, h),
      headings: __webpack_require__(/*! ./modules/headings */ "./node_modules/vue-tables-2/compiled/modules/headings.js").call(this, h),
      perPage: __webpack_require__(/*! ./modules/per-page */ "./node_modules/vue-tables-2/compiled/modules/per-page.js").call(this, h),
      columnsDropdown: __webpack_require__(/*! ./modules/columns-dropdown */ "./node_modules/vue-tables-2/compiled/modules/columns-dropdown.js").call(this, h)
    };

    if (typeof template === 'string' && (!templates[template] || typeof templates[template] !== 'function')) {
      throw "vue-tables-2: Template \"".concat(template, "\" does not exist");
    }

    if (typeof theme === 'string' && (!themes[theme] || _typeof(themes[theme]) !== 'object')) {
      throw "vue-tables-2: Theme \"".concat(theme, "\" does not exist");
    }

    var tpl = typeof template === 'string' ? templates[template] : template;
    var thm = typeof theme === 'string' ? themes[theme] : theme();

    var slots = __webpack_require__(/*! ./slots */ "./node_modules/vue-tables-2/compiled/slots.js").call(this);

    return tpl.call(this, h, modules, thm, slots);
  };
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/templates/default.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/templates/default.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _merge = _interopRequireDefault(__webpack_require__(/*! merge */ "./node_modules/merge/merge.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = function (h, modules, classes, slots) {
  var filterId = "VueTables__search_" + this.id;
  var ddpId = "VueTables__dropdown-pagination_" + this.id;
  var perpageId = "VueTables__limit_" + this.id;

  var perpageValues = __webpack_require__(/*! ../modules/per-page-values */ "./node_modules/vue-tables-2/compiled/modules/per-page-values.js").call(this, h);

  var caption = this.opts.caption ? h("caption", [this.opts.caption]) : '';
  var genericFilter = this.hasGenericFilter ? h("div", {
    "class": "VueTables__search-field"
  }, [h("label", {
    attrs: {
      "for": filterId
    },
    "class": classes.label
  }, [this.display("filter")]), modules.normalFilter(classes, filterId)]) : "";
  var perpage = !this.opts.hidePerPageSelect && (perpageValues.length > 1 || this.opts.alwaysShowPerPageSelect) ? h("div", {
    "class": "VueTables__limit-field"
  }, [h("label", {
    "class": classes.label,
    attrs: {
      "for": perpageId
    }
  }, [this.display("limit")]), modules.perPage(perpageValues, classes.select, perpageId)]) : "";
  var dropdownPagination = this.opts.pagination && this.opts.pagination.dropdown ? h("div", {
    "class": "VueTables__pagination-wrapper"
  }, [h("div", {
    "class": "".concat(classes.field, " ").concat(classes.inline, " ").concat(classes.right, " VueTables__dropdown-pagination"),
    directives: [{
      name: "show",
      value: this.totalPages > 1
    }]
  }, [h("label", {
    attrs: {
      "for": ddpId
    }
  }, [this.display("page")]), modules.dropdownPagination(classes.select, ddpId)])]) : "";
  var columnsDropdown = this.opts.columnsDropdown ? h("div", {
    "class": "VueTables__columns-dropdown-wrapper"
  }, [modules.columnsDropdown(classes)]) : "";
  var footerHeadings = this.opts.footerHeadings ? h("tfoot", [h("tr", [modules.headings(classes.right)])]) : "";
  var shouldShowTop = genericFilter || perpage || dropdownPagination || columnsDropdown || slots.beforeFilter || slots.afterFilter || slots.beforeLimit || slots.afterLimit;
  var tableTop = h("div", {
    "class": classes.row,
    directives: [{
      name: "show",
      value: shouldShowTop
    }]
  }, [h("div", {
    "class": classes.column
  }, [h("div", {
    "class": "".concat(classes.field, " ").concat(classes.inline, " ").concat(classes.left, " VueTables__search")
  }, [slots.beforeFilter, genericFilter, slots.afterFilter]), slots.afterFilterWrapper, h("div", {
    "class": "".concat(classes.field, " ").concat(classes.inline, " ").concat(classes.right, " VueTables__limit")
  }, [slots.beforeLimit, perpage, slots.afterLimit]), dropdownPagination, columnsDropdown])]);
  return h("div", {
    "class": "VueTables VueTables--" + this.source
  }, [tableTop, slots.beforeTable, h("div", {
    "class": "table-responsive"
  }, [h("table", {
    "class": "VueTables__table ".concat(this.opts.skin ? this.opts.skin : classes.table),
    attrs: {
      summary: this.opts.summary
    }
  }, [caption, h("thead", [slots.prependHead, h("tr", [modules.headings(classes.right)]), slots.beforeFilters, modules.columnFilters(classes), slots.afterFilters]), footerHeadings, slots.beforeBody, h("tbody", [slots.prependBody, modules.rows(classes), slots.appendBody]), slots.afterBody])]), slots.afterTable, modules.pagination((0, _merge["default"])(classes.pagination, {
    wrapper: "".concat(classes.row, " ").concat(classes.column, " ").concat(classes.contentCenter),
    nav: classes.center,
    count: "".concat(classes.center, " ").concat(classes.column)
  })), modules.dropdownPaginationCount()]);
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/templates/footer-pagination.js":
/*!***************************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/templates/footer-pagination.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _merge = _interopRequireDefault(__webpack_require__(/*! merge */ "./node_modules/merge/merge.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = function (h, modules, classes, slots) {
  var filterId = 'VueTables__search_' + this.id;
  var perpageId = 'VueTables__limit_' + this.id;

  var perpageValues = __webpack_require__(/*! ../modules/per-page-values */ "./node_modules/vue-tables-2/compiled/modules/per-page-values.js").call(this, h);

  var caption = this.opts.caption ? h("caption", [this.opts.caption]) : '';
  var genericFilter = this.hasGenericFilter ? h("div", {
    "class": "VueTables__search-field"
  }, [h("label", {
    attrs: {
      "for": filterId
    },
    "class": classes.label
  }, [this.display('filter')]), modules.normalFilter(classes, filterId)]) : '';
  var perpage = perpageValues.length > 1 ? h("div", {
    "class": "VueTables__limit-field"
  }, [h("label", {
    "class": classes.label,
    attrs: {
      "for": perpageId
    }
  }, [this.display('limit')]), modules.perPage(perpageValues, classes.select, perpageId)]) : '';
  var columnsDropdown = this.opts.columnsDropdown ? h("div", {
    "class": "VueTables__columns-dropdown-wrapper"
  }, [modules.columnsDropdown(classes)]) : '';
  var shouldShowTop = genericFilter || perpage || columnsDropdown || slots.beforeFilter || slots.afterFilter || slots.beforeLimit || slots.afterLimit;
  var tableTop = h("div", {
    "class": classes.row,
    directives: [{
      name: "show",
      value: shouldShowTop
    }]
  }, [h("div", {
    "class": classes.column
  }, [h("div", {
    "class": "".concat(classes.field, " ").concat(classes.inline, " ").concat(classes.left, " VueTables__search")
  }, [slots.beforeFilter, genericFilter, slots.afterFilter]), slots.afterFilterWrapper, h("div", {
    "class": "".concat(classes.field, " ").concat(classes.inline, " ").concat(classes.right, " VueTables__limit")
  }, [slots.beforeLimit, perpage, slots.afterLimit]), columnsDropdown])]);
  return h("div", {
    "class": "VueTables VueTables--" + this.source
  }, [tableTop, slots.beforeTable, h("div", {
    "class": "table-responsive"
  }, [h("table", {
    "class": "VueTables__table ".concat(this.opts.skin ? this.opts.skin : classes.table),
    attrs: {
      summary: this.opts.summary
    }
  }, [caption, h("thead", [slots.prependHead, h("tr", [modules.headings(classes.right)]), slots.beforeFilters, modules.columnFilters(classes), slots.afterFilters]), h("tfoot", [h("tr", [h("td", {
    attrs: {
      colspan: this.colspan
    }
  }, [modules.pagination((0, _merge["default"])(classes.pagination, {
    list: "".concat(classes.pagination.list, " ").concat(classes.right, " ").concat(classes.nomargin),
    count: "".concat(classes.left)
  }))])])]), slots.beforeBody, h("tbody", [slots.prependBody, modules.rows(classes), slots.appendBody]), slots.afterBody])]), slots.afterTable]);
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/themes/bootstrap3.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/themes/bootstrap3.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  return {
    framework: 'bootstrap3',
    table: 'table table-striped table-bordered table-hover',
    row: 'row',
    column: 'col-md-12',
    label: '',
    input: 'form-control',
    select: 'form-control',
    field: 'form-group',
    inline: 'form-inline',
    right: 'pull-right',
    left: 'pull-left',
    center: 'text-center',
    contentCenter: '',
    small: '',
    nomargin: '',
    groupTr: 'info',
    button: 'btn btn-secondary',
    dropdown: {
      container: 'dropdown',
      trigger: 'dropdown-toggle',
      menu: 'dropdown-menu',
      content: '',
      item: '',
      caret: 'caret'
    },
    pagination: {
      nav: '',
      count: '',
      wrapper: '',
      list: 'pagination',
      item: 'page-item',
      link: 'page-link',
      next: '',
      prev: '',
      active: 'active',
      disabled: 'disabled'
    }
  };
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/themes/bootstrap4.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/themes/bootstrap4.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  return {
    framework: 'bootstrap4',
    table: 'table table-striped table-bordered table-hover',
    row: 'row',
    column: 'col-md-12',
    label: '',
    input: 'form-control',
    select: 'form-control',
    field: 'form-group',
    inline: 'form-inline',
    right: 'float-right',
    left: 'float-left',
    center: 'text-center',
    contentCenter: 'justify-content-center',
    nomargin: 'm-0',
    groupTr: 'table-info',
    small: '',
    button: 'btn btn-secondary',
    dropdown: {
      container: 'dropdown',
      trigger: 'dropdown-toggle',
      menu: 'dropdown-menu',
      content: '',
      item: 'dropdown-item',
      caret: 'caret'
    },
    pagination: {
      nav: '',
      count: '',
      wrapper: '',
      list: 'pagination',
      item: 'page-item',
      link: 'page-link',
      next: '',
      prev: '',
      active: 'active',
      disabled: 'disabled'
    }
  };
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/themes/bulma.js":
/*!************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/themes/bulma.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  return {
    framework: 'bulma',
    table: 'table is-bordered is-striped is-hoverable is-fullwidth',
    row: 'columns',
    column: 'column is-12',
    label: 'label',
    input: 'input',
    select: 'select',
    field: 'field',
    inline: 'is-horizontal',
    right: 'is-pulled-right',
    left: 'is-pulled-left',
    center: 'has-text-centered',
    contentCenter: 'is-centered',
    icon: 'icon',
    small: 'is-small',
    nomargin: 'marginless',
    button: 'button',
    groupTr: 'is-selected',
    dropdown: {
      container: 'dropdown',
      trigger: 'dropdown-trigger',
      menu: 'dropdown-menu',
      content: 'dropdown-content',
      item: 'dropdown-item',
      caret: 'fa fa-angle-down'
    },
    pagination: {
      nav: '',
      count: '',
      wrapper: 'pagination',
      list: 'pagination-list',
      item: '',
      link: 'pagination-link',
      next: '',
      prev: '',
      active: 'is-current',
      disabled: ''
    }
  };
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/v-client-table.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/v-client-table.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vuePagination = __webpack_require__(/*! vue-pagination-2 */ "./node_modules/vue-pagination-2/index.js");

var _vuex = _interopRequireDefault(__webpack_require__(/*! ./state/vuex */ "./node_modules/vue-tables-2/compiled/state/vuex.js"));

var _normal = _interopRequireDefault(__webpack_require__(/*! ./state/normal */ "./node_modules/vue-tables-2/compiled/state/normal.js"));

var _merge = _interopRequireDefault(__webpack_require__(/*! merge */ "./node_modules/merge/merge.js"));

var _table = _interopRequireDefault(__webpack_require__(/*! ./table */ "./node_modules/vue-tables-2/compiled/table.js"));

var _data2 = _interopRequireDefault(__webpack_require__(/*! ./state/data */ "./node_modules/vue-tables-2/compiled/state/data.js"));

var _resizeableColumns = _interopRequireDefault(__webpack_require__(/*! ./helpers/resizeable-columns */ "./node_modules/vue-tables-2/compiled/helpers/resizeable-columns.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _data = __webpack_require__(/*! ./mixins/data */ "./node_modules/vue-tables-2/compiled/mixins/data.js");

var _created = __webpack_require__(/*! ./mixins/created */ "./node_modules/vue-tables-2/compiled/mixins/created.js");

var templateCompiler = __webpack_require__(/*! ./template-compiler */ "./node_modules/vue-tables-2/compiled/template-compiler.js");

exports.install = function (Vue, globalOptions, useVuex) {
  var theme = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "bootstrap3";
  var template = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "default";

  var client = _merge["default"].recursive(true, (0, _table["default"])(), {
    name: "client-table",
    components: {
      Pagination: _vuePagination.Pagination
    },
    render: templateCompiler.call(this, template, theme),
    props: {
      columns: {
        type: Array,
        required: true
      },
      data: {
        type: Array,
        required: true
      },
      name: {
        type: String,
        required: false
      },
      options: {
        type: Object,
        required: false,
        "default": function _default() {
          return {};
        }
      }
    },
    created: function created() {
      _created(this);

      if (this.opts.toMomentFormat) this.transformDateStringsToMoment();

      if (!this.vuex) {
        this.initOrderBy();
        this.query = this.initQuery();
        this.customQueries = this.initCustomFilters();
      }
    },
    mounted: function mounted() {
      this._setFiltersDOM(this.query);

      if (this.opts.resizableColumns) {
        var removeResizableListeners = (0, _resizeableColumns["default"])(this.$el.querySelector("table"), this.hasChildRow, this.opts.childRowTogglerFirst, this.opts.resizableColumns);
        this.$once('hook:beforeDestroy', removeResizableListeners);
      }

      this._setColumnsDropdownCloseListener();

      if (!this.vuex) {
        this.registerClientFilters();
        if (this.options.initialPage) this.setPage(this.options.initialPage);
      }

      if (this.opts.groupBy && !this.opts.orderBy) {
        this.orderBy.column = this.opts.groupBy;
      }

      this.loadState();

      if (this.hasDateFilters()) {
        this.initDateFilters();
      }
    },
    model: {
      prop: "data"
    },
    data: function data() {
      return _merge["default"].recursive(_data(), {
        source: "client",
        globalOptions: globalOptions,
        currentlySorting: {},
        time: Date.now()
      }, (0, _data2["default"])(useVuex, "client", this.options.initialPage));
    },
    computed: {
      q: __webpack_require__(/*! ./computed/q */ "./node_modules/vue-tables-2/compiled/computed/q.js"),
      customQ: __webpack_require__(/*! ./computed/custom-q */ "./node_modules/vue-tables-2/compiled/computed/custom-q.js"),
      totalPages: __webpack_require__(/*! ./computed/total-pages */ "./node_modules/vue-tables-2/compiled/computed/total-pages.js"),
      filteredData: __webpack_require__(/*! ./computed/filtered-data */ "./node_modules/vue-tables-2/compiled/computed/filtered-data.js"),
      hasMultiSort: function hasMultiSort() {
        return this.opts.clientMultiSorting;
      }
    },
    methods: {
      transformDateStringsToMoment: __webpack_require__(/*! ./methods/transform-date-strings-to-moment */ "./node_modules/vue-tables-2/compiled/methods/transform-date-strings-to-moment.js"),
      registerClientFilters: __webpack_require__(/*! ./methods/register-client-filters */ "./node_modules/vue-tables-2/compiled/methods/register-client-filters.js"),
      search: __webpack_require__(/*! ./methods/client-search */ "./node_modules/vue-tables-2/compiled/methods/client-search.js"),
      defaultSort: __webpack_require__(/*! ./methods/default-sort */ "./node_modules/vue-tables-2/compiled/methods/default-sort.js"),
      getGroupSlot: __webpack_require__(/*! ./methods/get-group-slot */ "./node_modules/vue-tables-2/compiled/methods/get-group-slot.js"),
      toggleGroup: function toggleGroup(group, e) {
        e.stopPropagation();
        var i = this.collapsedGroups.indexOf(group);

        if (i >= 0) {
          this.collapsedGroups.splice(i, 1);
        } else {
          this.collapsedGroups.push(group);
        }
      },
      groupToggleIcon: function groupToggleIcon(group) {
        var cls = this.opts.sortIcon.base + " ";
        cls += this.collapsedGroups.indexOf(group) > -1 ? this.opts.sortIcon.down : this.opts.sortIcon.up;
        return cls;
      },
      loadState: function loadState() {
        if (!this.opts.saveState) return;

        if (!this.storage.getItem(this.stateKey)) {
          this.initState();
          this.activeState = true;
          return;
        }

        var state = JSON.parse(this.storage.getItem(this.stateKey));
        if (this.opts.filterable) this.setFilter(state.query);
        this.setOrder(state.orderBy.column, state.orderBy.ascending);

        if (this.vuex) {
          this.commit("SET_LIMIT", state.perPage);
        } else {
          this.limit = state.perPage;
        }

        this.setPage(state.page);
        this.activeState = true;

        if (state.userControlsColumns) {
          this.userColumnsDisplay = state.userColumnsDisplay;
          this.userControlsColumns = state.userControlsColumns;
        } // TODO: Custom Queries

      }
    }
  });

  var state = useVuex ? (0, _vuex["default"])() : (0, _normal["default"])();
  client = _merge["default"].recursive(client, state);
  Vue.component("v-client-table", client);
  return client;
};

/***/ }),

/***/ "./node_modules/vue-tables-2/compiled/v-server-table.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-tables-2/compiled/v-server-table.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _merge = _interopRequireDefault(__webpack_require__(/*! merge */ "./node_modules/merge/merge.js"));

var _data2 = _interopRequireDefault(__webpack_require__(/*! ./state/data */ "./node_modules/vue-tables-2/compiled/state/data.js"));

var _vuex = _interopRequireDefault(__webpack_require__(/*! ./state/vuex */ "./node_modules/vue-tables-2/compiled/state/vuex.js"));

var _normal = _interopRequireDefault(__webpack_require__(/*! ./state/normal */ "./node_modules/vue-tables-2/compiled/state/normal.js"));

var _table = _interopRequireDefault(__webpack_require__(/*! ./table */ "./node_modules/vue-tables-2/compiled/table.js"));

var _vuePagination = __webpack_require__(/*! vue-pagination-2 */ "./node_modules/vue-pagination-2/index.js");

var _resizeableColumns = _interopRequireDefault(__webpack_require__(/*! ./helpers/resizeable-columns */ "./node_modules/vue-tables-2/compiled/helpers/resizeable-columns.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _data = __webpack_require__(/*! ./mixins/data */ "./node_modules/vue-tables-2/compiled/mixins/data.js");

var _created = __webpack_require__(/*! ./mixins/created */ "./node_modules/vue-tables-2/compiled/mixins/created.js");

var templateCompiler = __webpack_require__(/*! ./template-compiler */ "./node_modules/vue-tables-2/compiled/template-compiler.js");

exports.install = function (Vue, globalOptions, useVuex) {
  var theme = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "bootstrap3";
  var template = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "default";
  var state = useVuex ? (0, _vuex["default"])("server") : (0, _normal["default"])();

  var server = _merge["default"].recursive(true, (0, _table["default"])(), {
    name: "server-table",
    components: {
      Pagination: _vuePagination.Pagination
    },
    render: templateCompiler.call(this, template, theme),
    props: {
      columns: {
        type: Array,
        required: true
      },
      url: {
        type: String
      },
      name: {
        type: String,
        required: false
      },
      options: {
        type: Object,
        required: false,
        "default": function _default() {
          return {};
        }
      }
    },
    created: function created() {
      if (!this.opts.requestFunction && !this.url) {
        throw 'vue-tables-2: you must provide either a "url" prop or a custom request function. Aborting';
      }

      _created(this);

      if (!this.vuex) {
        this.query = this.initQuery();
        this.initOrderBy();
        this.customQueries = this.initCustomFilters();
      }

      if (this.opts.sendInitialRequest) {
        this.loadState();
        this.getData(true).then(function (response) {
          if (typeof response === 'undefined') return;
          this.setData(response);
          this.loading = false;

          if (this.hasDateFilters()) {
            setTimeout(function () {
              this.initDateFilters();
            }.bind(this), 0);
          }
        }.bind(this));
      }
    },
    mounted: function mounted() {
      this._setFiltersDOM(this.query);

      if (this.opts.resizableColumns) {
        var removeResizableListeners = (0, _resizeableColumns["default"])(this.$el.querySelector("table"), this.hasChildRow, this.opts.childRowTogglerFirst, this.opts.resizableColumns);
        this.$once('hook:beforeDestroy', removeResizableListeners);
      }

      this._setColumnsDropdownCloseListener();

      if (this.vuex) return;
      this.registerServerFilters();
      if (this.options.initialPage) this.setPage(this.options.initialPage, true);
    },
    data: function data() {
      return _merge["default"].recursive(_data(), {
        source: "server",
        loading: true,
        lastKeyStrokeAt: false,
        globalOptions: globalOptions
      }, (0, _data2["default"])(useVuex, "server", this.options.initialPage));
    },
    methods: {
      refresh: __webpack_require__(/*! ./methods/refresh */ "./node_modules/vue-tables-2/compiled/methods/refresh.js"),
      getData: __webpack_require__(/*! ./methods/get-data */ "./node_modules/vue-tables-2/compiled/methods/get-data.js"),
      setData: __webpack_require__(/*! ./methods/set-data */ "./node_modules/vue-tables-2/compiled/methods/set-data.js"),
      serverSearch: __webpack_require__(/*! ./methods/server-search */ "./node_modules/vue-tables-2/compiled/methods/server-search.js"),
      registerServerFilters: __webpack_require__(/*! ./methods/register-server-filters */ "./node_modules/vue-tables-2/compiled/methods/register-server-filters.js"),
      loadState: function loadState() {
        var _this = this;

        if (!this.opts.saveState) return;

        if (!this.storage.getItem(this.stateKey)) {
          this.initState();
          this.activeState = true;
          return;
        }

        var state = JSON.parse(this.storage.getItem(this.stateKey));

        if (this.vuex) {
          this.commit("SET_STATE", {
            query: state.query,
            customQueries: state.customQueries,
            page: state.page,
            limit: state.perPage,
            orderBy: state.orderBy
          });
        } else {
          this.page = state.page;
          this.query = state.query;
          this.customQueries = state.customQueries;
          this.limit = state.perPage;
          this.orderBy = state.orderBy;
        }

        if (!this.opts.pagination.dropdown && this.$refs.pagination) {
          setTimeout(function () {
            _this.$refs.pagination.Page = state.page;
          }, 0);
        }

        if (this.opts.filterable) {
          setTimeout(function () {
            _this._setFiltersDOM(state.query);
          }, 0);
        }

        this.activeState = true;
      }
    },
    watch: {
      url: function url() {
        this.refresh();
      }
    },
    computed: {
      totalPages: __webpack_require__(/*! ./computed/total-pages */ "./node_modules/vue-tables-2/compiled/computed/total-pages.js"),
      filteredQuery: __webpack_require__(/*! ./computed/filtered-query */ "./node_modules/vue-tables-2/compiled/computed/filtered-query.js"),
      hasMultiSort: function hasMultiSort() {
        return this.opts.serverMultiSorting;
      }
    }
  }, state);

  Vue.component("v-server-table", server);
  return server;
};

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

}]);