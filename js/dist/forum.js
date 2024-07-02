/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/color-thief-browser/dist/color-thief.min.js":
/*!******************************************************************!*\
  !*** ./node_modules/color-thief-browser/dist/color-thief.min.js ***!
  \******************************************************************/
/***/ ((module) => {

/*!
 * Color Thief v2.0
 * by Lokesh Dhakar - http://www.lokeshdhakar.com
 *
 * Thanks
 * ------
 * Nick Rabinowitz - For creating quantize.js.
 * John Schulz - For clean up and optimization. @JFSIII
 * Nathan Spady - For adding drag and drop support to the demo page.
 *
 * License
 * -------
 * Copyright 2011, 2015 Lokesh Dhakar
 * Released under the MIT license
 * https://raw.githubusercontent.com/lokesh/color-thief/master/LICENSE
 *
 */
var CanvasImage = function CanvasImage(a) {
  this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), document.body.appendChild(this.canvas), this.width = this.canvas.width = a.width, this.height = this.canvas.height = a.height, this.context.drawImage(a, 0, 0, this.width, this.height);
};
CanvasImage.prototype.clear = function () {
  this.context.clearRect(0, 0, this.width, this.height);
}, CanvasImage.prototype.update = function (a) {
  this.context.putImageData(a, 0, 0);
}, CanvasImage.prototype.getPixelCount = function () {
  return this.width * this.height;
}, CanvasImage.prototype.getImageData = function () {
  return this.context.getImageData(0, 0, this.width, this.height);
}, CanvasImage.prototype.removeCanvas = function () {
  this.canvas.parentNode.removeChild(this.canvas);
};
var ColorThief = function ColorThief() {}; /*!
                                           * quantize.js Copyright 2008 Nick Rabinowitz.
                                           * Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
                                           */
/*!
 * Block below copied from Protovis: http://mbostock.github.com/protovis/
 * Copyright 2010 Stanford Visualization Group
 * Licensed under the BSD License: http://www.opensource.org/licenses/bsd-license.php
 */
if (ColorThief.prototype.getColor = function (a, b) {
  var c = this.getPalette(a, 5, b),
    d = c[0];
  return d;
}, ColorThief.prototype.getPalette = function (a, b, c) {
  "undefined" == typeof b && (b = 10), ("undefined" == typeof c || 1 > c) && (c = 10);
  for (var d, e, f, g, h, i = new CanvasImage(a), j = i.getImageData(), k = j.data, l = i.getPixelCount(), m = [], n = 0; l > n; n += c) d = 4 * n, e = k[d + 0], f = k[d + 1], g = k[d + 2], h = k[d + 3], h >= 125 && (e > 250 && f > 250 && g > 250 || m.push([e, f, g]));
  var o = MMCQ.quantize(m, b),
    p = o ? o.palette() : null;
  return i.removeCanvas(), p;
}, !pv) var pv = {
  map: function map(a, b) {
    var c = {};
    return b ? a.map(function (a, d) {
      return c.index = d, b.call(c, a);
    }) : a.slice();
  },
  naturalOrder: function naturalOrder(a, b) {
    return b > a ? -1 : a > b ? 1 : 0;
  },
  sum: function sum(a, b) {
    var c = {};
    return a.reduce(b ? function (a, d, e) {
      return c.index = e, a + b.call(c, d);
    } : function (a, b) {
      return a + b;
    }, 0);
  },
  max: function max(a, b) {
    return Math.max.apply(null, b ? pv.map(a, b) : a);
  }
};
var MMCQ = function () {
  function a(a, b, c) {
    return (a << 2 * i) + (b << i) + c;
  }
  function b(a) {
    function b() {
      c.sort(a), d = !0;
    }
    var c = [],
      d = !1;
    return {
      push: function push(a) {
        c.push(a), d = !1;
      },
      peek: function peek(a) {
        return d || b(), void 0 === a && (a = c.length - 1), c[a];
      },
      pop: function pop() {
        return d || b(), c.pop();
      },
      size: function size() {
        return c.length;
      },
      map: function map(a) {
        return c.map(a);
      },
      debug: function debug() {
        return d || b(), c;
      }
    };
  }
  function c(a, b, c, d, e, f, g) {
    var h = this;
    h.r1 = a, h.r2 = b, h.g1 = c, h.g2 = d, h.b1 = e, h.b2 = f, h.histo = g;
  }
  function d() {
    this.vboxes = new b(function (a, b) {
      return pv.naturalOrder(a.vbox.count() * a.vbox.volume(), b.vbox.count() * b.vbox.volume());
    });
  }
  function e(b) {
    var c,
      d,
      e,
      f,
      g = 1 << 3 * i,
      h = new Array(g);
    return b.forEach(function (b) {
      d = b[0] >> j, e = b[1] >> j, f = b[2] >> j, c = a(d, e, f), h[c] = (h[c] || 0) + 1;
    }), h;
  }
  function f(a, b) {
    var d,
      e,
      f,
      g = 1e6,
      h = 0,
      i = 1e6,
      k = 0,
      l = 1e6,
      m = 0;
    return a.forEach(function (a) {
      d = a[0] >> j, e = a[1] >> j, f = a[2] >> j, g > d ? g = d : d > h && (h = d), i > e ? i = e : e > k && (k = e), l > f ? l = f : f > m && (m = f);
    }), new c(g, h, i, k, l, m, b);
  }
  function g(b, c) {
    function d(a) {
      var b,
        d,
        e,
        f,
        g,
        h = a + "1",
        j = a + "2",
        k = 0;
      for (i = c[h]; i <= c[j]; i++) if (o[i] > n / 2) {
        for (e = c.copy(), f = c.copy(), b = i - c[h], d = c[j] - i, g = d >= b ? Math.min(c[j] - 1, ~~(i + d / 2)) : Math.max(c[h], ~~(i - 1 - b / 2)); !o[g];) g++;
        for (k = p[g]; !k && o[g - 1];) k = p[--g];
        return e[j] = g, f[h] = e[j] + 1, [e, f];
      }
    }
    if (c.count()) {
      var e = c.r2 - c.r1 + 1,
        f = c.g2 - c.g1 + 1,
        g = c.b2 - c.b1 + 1,
        h = pv.max([e, f, g]);
      if (1 == c.count()) return [c.copy()];
      var i,
        j,
        k,
        l,
        m,
        n = 0,
        o = [],
        p = [];
      if (h == e) for (i = c.r1; i <= c.r2; i++) {
        for (l = 0, j = c.g1; j <= c.g2; j++) for (k = c.b1; k <= c.b2; k++) m = a(i, j, k), l += b[m] || 0;
        n += l, o[i] = n;
      } else if (h == f) for (i = c.g1; i <= c.g2; i++) {
        for (l = 0, j = c.r1; j <= c.r2; j++) for (k = c.b1; k <= c.b2; k++) m = a(j, i, k), l += b[m] || 0;
        n += l, o[i] = n;
      } else for (i = c.b1; i <= c.b2; i++) {
        for (l = 0, j = c.r1; j <= c.r2; j++) for (k = c.g1; k <= c.g2; k++) m = a(j, k, i), l += b[m] || 0;
        n += l, o[i] = n;
      }
      return o.forEach(function (a, b) {
        p[b] = n - a;
      }), d(h == e ? "r" : h == f ? "g" : "b");
    }
  }
  function h(a, c) {
    function h(a, b) {
      for (var c, d = 1, e = 0; k > e;) if (c = a.pop(), c.count()) {
        var f = g(i, c),
          h = f[0],
          j = f[1];
        if (!h) return;
        if (a.push(h), j && (a.push(j), d++), d >= b) return;
        if (e++ > k) return;
      } else a.push(c), e++;
    }
    if (!a.length || 2 > c || c > 256) return !1;
    var i = e(a),
      j = 0;
    i.forEach(function () {
      j++;
    });
    var m = f(a, i),
      n = new b(function (a, b) {
        return pv.naturalOrder(a.count(), b.count());
      });
    n.push(m), h(n, l * c);
    for (var o = new b(function (a, b) {
      return pv.naturalOrder(a.count() * a.volume(), b.count() * b.volume());
    }); n.size();) o.push(n.pop());
    h(o, c - o.size());
    for (var p = new d(); o.size();) p.push(o.pop());
    return p;
  }
  var i = 5,
    j = 8 - i,
    k = 1e3,
    l = .75;
  return c.prototype = {
    volume: function volume(a) {
      var b = this;
      return (!b._volume || a) && (b._volume = (b.r2 - b.r1 + 1) * (b.g2 - b.g1 + 1) * (b.b2 - b.b1 + 1)), b._volume;
    },
    count: function count(b) {
      var c = this,
        d = c.histo;
      if (!c._count_set || b) {
        var e,
          f,
          g,
          h = 0;
        for (e = c.r1; e <= c.r2; e++) for (f = c.g1; f <= c.g2; f++) for (g = c.b1; g <= c.b2; g++) index = a(e, f, g), h += d[index] || 0;
        c._count = h, c._count_set = !0;
      }
      return c._count;
    },
    copy: function copy() {
      var a = this;
      return new c(a.r1, a.r2, a.g1, a.g2, a.b1, a.b2, a.histo);
    },
    avg: function avg(b) {
      var c = this,
        d = c.histo;
      if (!c._avg || b) {
        var e,
          f,
          g,
          h,
          j,
          k = 0,
          l = 1 << 8 - i,
          m = 0,
          n = 0,
          o = 0;
        for (f = c.r1; f <= c.r2; f++) for (g = c.g1; g <= c.g2; g++) for (h = c.b1; h <= c.b2; h++) j = a(f, g, h), e = d[j] || 0, k += e, m += e * (f + .5) * l, n += e * (g + .5) * l, o += e * (h + .5) * l;
        k ? c._avg = [~~(m / k), ~~(n / k), ~~(o / k)] : c._avg = [~~(l * (c.r1 + c.r2 + 1) / 2), ~~(l * (c.g1 + c.g2 + 1) / 2), ~~(l * (c.b1 + c.b2 + 1) / 2)];
      }
      return c._avg;
    },
    contains: function contains(a) {
      var b = this,
        c = a[0] >> j;
      return gval = a[1] >> j, bval = a[2] >> j, c >= b.r1 && c <= b.r2 && gval >= b.g1 && gval <= b.g2 && bval >= b.b1 && bval <= b.b2;
    }
  }, d.prototype = {
    push: function push(a) {
      this.vboxes.push({
        vbox: a,
        color: a.avg()
      });
    },
    palette: function palette() {
      return this.vboxes.map(function (a) {
        return a.color;
      });
    },
    size: function size() {
      return this.vboxes.size();
    },
    map: function map(a) {
      for (var b = this.vboxes, c = 0; c < b.size(); c++) if (b.peek(c).vbox.contains(a)) return b.peek(c).color;
      return this.nearest(a);
    },
    nearest: function nearest(a) {
      for (var b, c, d, e = this.vboxes, f = 0; f < e.size(); f++) c = Math.sqrt(Math.pow(a[0] - e.peek(f).color[0], 2) + Math.pow(a[1] - e.peek(f).color[1], 2) + Math.pow(a[2] - e.peek(f).color[2], 2)), (b > c || void 0 === b) && (b = c, d = e.peek(f).color);
      return d;
    },
    forcebw: function forcebw() {
      var a = this.vboxes;
      a.sort(function (a, b) {
        return pv.naturalOrder(pv.sum(a.color), pv.sum(b.color));
      });
      var b = a[0].color;
      b[0] < 5 && b[1] < 5 && b[2] < 5 && (a[0].color = [0, 0, 0]);
      var c = a.length - 1,
        d = a[c].color;
      d[0] > 251 && d[1] > 251 && d[2] > 251 && (a[c].color = [255, 255, 255]);
    }
  }, {
    quantize: h
  };
}();
module.exports = ColorThief;

/***/ }),

/***/ "./src/common/data/styleFetcher.ts":
/*!*****************************************!*\
  !*** ./src/common/data/styleFetcher.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StyleFetcher: () => (/* binding */ StyleFetcher)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);


var StyleFetcherIns = null;
var StyleFetcher = /*#__PURE__*/function () {
  function StyleFetcher(app) {
    this.fetchIntervalId = -1;
    this.fetchId = {};
    this.cb = [];
    this.app = void 0;
    StyleFetcherIns = this;
    this.app = app;
  }
  var _proto = StyleFetcher.prototype;
  _proto.done = function done(c) {
    this.cb.push(c);
  };
  StyleFetcher.getInstance = function getInstance() {
    return StyleFetcherIns;
  };
  _proto.sendFetch = /*#__PURE__*/function () {
    var _sendFetch = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var _this = this;
      var fetchResultHandler, id, fetchResult;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            this.fetchIntervalId = -1;
            fetchResultHandler = this.fetchId;
            id = Object.keys(fetchResultHandler).map(function (e) {
              return parseInt(e);
            });
            this.fetchId = {};

            //@ts-ignore
            _context.next = 6;
            return this.app.store.find("user_decoration", {
              id: id
            });
          case 6:
            fetchResult = _context.sent;
            id.forEach(function (e) {
              fetchResultHandler[e].forEach(function (result) {
                result(_this.app.store.getById('user-decorations', e + ""));
              });
            });
            this.cb.forEach(function (cb) {
              cb();
            });
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee, this);
    }));
    function sendFetch() {
      return _sendFetch.apply(this, arguments);
    }
    return sendFetch;
  }();
  _proto.fetchStyle = function fetchStyle(id) {
    var _this2 = this;
    if (!id) {
      return Promise.resolve(null);
    }
    id = parseInt(id + "");
    var stored = this.app.store.getById('user-decorations', id + "");
    if (stored) return Promise.resolve(stored);
    return new Promise(function (resolve) {
      _this2.fetchId[id] = _this2.fetchId[id] || [];
      _this2.fetchId[id].push(resolve);
      if (_this2.fetchIntervalId == -1) {
        _this2.fetchIntervalId = setTimeout(_this2.sendFetch.bind(_this2), 400);
      }
    });
  };
  _proto.fetchStyleSync = function fetchStyleSync(id) {
    return this.app.store.getById('user-decorations', id + "") || undefined;
  };
  _proto.getApp = function getApp() {
    return this.app;
  };
  return StyleFetcher;
}();

/***/ }),

/***/ "./src/common/extend.ts":
/*!******************************!*\
  !*** ./src/common/extend.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extenders */ "flarum/common/extenders");
/* harmony import */ var flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_UserDecorations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/UserDecorations */ "./src/common/models/UserDecorations.ts");
/* harmony import */ var _models_UserOwnDecoration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/UserOwnDecoration */ "./src/common/models/UserOwnDecoration.ts");
/* harmony import */ var flarum_common_models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/models/User */ "flarum/common/models/User");
/* harmony import */ var flarum_common_models_User__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_User__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([new (flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0___default().Store)().add('user-decorations', _models_UserDecorations__WEBPACK_IMPORTED_MODULE_1__["default"]), new (flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0___default().Store)().add('user-own-decoration', _models_UserOwnDecoration__WEBPACK_IMPORTED_MODULE_2__["default"]), new (flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0___default().Model)((flarum_common_models_User__WEBPACK_IMPORTED_MODULE_3___default())).attribute('avatar_decoration')]);

/***/ }),

/***/ "./src/common/index.ts":
/*!*****************************!*\
  !*** ./src/common/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./src/common/models/UserDecorations.ts":
/*!**********************************************!*\
  !*** ./src/common/models/UserDecorations.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserDecorations)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__);



// For more details about frontend models
// checkout https://docs.flarum.org/extend/models.html#frontend-models
var UserDecorations = /*#__PURE__*/function (_Model) {
  function UserDecorations() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Model.call.apply(_Model, [this].concat(args)) || this;
    _this.style = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('style');
    _this.type = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute("type");
    _this.createdAt = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('createdAt', (flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().transformDate));
    _this.name = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('name');
    _this.desc = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('desc');
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(UserDecorations, _Model);
  return UserDecorations;
}((flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/common/models/UserOwnDecoration.ts":
/*!************************************************!*\
  !*** ./src/common/models/UserOwnDecoration.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserOwnDecoration)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__);



// For more details about frontend models
// checkout https://docs.flarum.org/extend/models.html#frontend-models
var UserOwnDecoration = /*#__PURE__*/function (_Model) {
  function UserOwnDecoration() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Model.call.apply(_Model, [this].concat(args)) || this;
    _this.user_id = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('user_id');
    _this.decoration_id = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('decoration_id');
    _this.decoration_type = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('type');
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(UserOwnDecoration, _Model);
  return UserOwnDecoration;
}((flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/common/utils/DecorationApplier.ts":
/*!***********************************************!*\
  !*** ./src/common/utils/DecorationApplier.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyDecoration: () => (/* binding */ applyDecoration),
/* harmony export */   applyDecorationOn: () => (/* binding */ applyDecorationOn)
/* harmony export */ });
/* harmony import */ var _data_styleFetcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/styleFetcher */ "./src/common/data/styleFetcher.ts");


/**
 * 在用户界面对象上应用样式
 * @param elementInfo 用户界面元素对象.由各种事件中直接获取包装得到.
 */
function applyDecoration(elementInfo, ctx) {
  if (!elementInfo.decoration) {
    if (elementInfo.decorationId) {
      var _StyleFetcher$getInst;
      elementInfo.decoration = (_StyleFetcher$getInst = _data_styleFetcher__WEBPACK_IMPORTED_MODULE_0__.StyleFetcher.getInstance()) == null ? void 0 : _StyleFetcher$getInst.fetchStyleSync(elementInfo.decorationId);
      if (!elementInfo.decoration) {
        var _StyleFetcher$getInst2;
        (_StyleFetcher$getInst2 = _data_styleFetcher__WEBPACK_IMPORTED_MODULE_0__.StyleFetcher.getInstance()) == null || _StyleFetcher$getInst2.fetchStyle(elementInfo.decorationId).then(function () {
          $(ctx.element).addClass("user-decoration-hijack-wait-reload");
          m.redraw();
        });
      }
    }
    if (!elementInfo.decoration) return;
  }
  if (!elementInfo.container) return;
  applyDecorationOn(elementInfo.container, elementInfo.decoration);
}
/**
 * 在容器元素上应用样式
 * @param element 容器元素
 * @param decoration 用户装饰样式对象
 */
function applyDecorationOn(element, decoration) {
  var _exec;
  var ctr = $("head #user-decoration-" + decoration.id());
  if (!ctr.length) {
    ctr = $("<style>").attr("id", "user-decoration-" + decoration.id());
    var style = decoration.style() || "";
    style = style.replace(/\.base/g, ".user-decoration-" + decoration.id());
    ctr.html(style);
    $("head").append(ctr);
  }
  (_exec = /\.element-[a-zA-Z0-9-_]+{/.exec(ctr.html())) == null || _exec.forEach(function (value, i, ar) {
    element.children.push({
      tag: "span",
      state: undefined,
      attrs: {
        className: value.substring(1, value.length - 1)
      }
    });
  });
  if (!new RegExp("( |^)user-decoration-" + decoration.id() + "( |$)").test(element.attrs.className)) element.attrs.className += " user-decoration-" + decoration.id();
  if (!/( |^)has-user-decoration( |$)/.test(element.attrs.className)) element.attrs.className += " has-user-decoration";
}

/***/ }),

/***/ "./src/common/utils/DecorationHijack.ts":
/*!**********************************************!*\
  !*** ./src/common/utils/DecorationHijack.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   avatarColor: () => (/* binding */ avatarColor),
/* harmony export */   initDecorationExtend: () => (/* binding */ initDecorationExtend),
/* harmony export */   initDecorationHijack: () => (/* binding */ initDecorationHijack)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_models_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/models/User */ "flarum/common/models/User");
/* harmony import */ var flarum_common_models_User__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_User__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_styleFetcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/styleFetcher */ "./src/common/data/styleFetcher.ts");
/* harmony import */ var _DecorationApplier__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DecorationApplier */ "./src/common/utils/DecorationApplier.ts");
/* harmony import */ var flarum_common_utils_computed__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/utils/computed */ "flarum/common/utils/computed");
/* harmony import */ var flarum_common_utils_computed__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_computed__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_common_utils_stringToColor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/utils/stringToColor */ "flarum/common/utils/stringToColor");
/* harmony import */ var flarum_common_utils_stringToColor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_stringToColor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var color_thief_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! color-thief-browser */ "./node_modules/color-thief-browser/dist/color-thief.min.js");
/* harmony import */ var color_thief_browser__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(color_thief_browser__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var flarum_forum_components_Post__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/forum/components/Post */ "flarum/forum/components/Post");
/* harmony import */ var flarum_forum_components_Post__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_Post__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var flarum_forum_components_UserCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! flarum/forum/components/UserCard */ "flarum/forum/components/UserCard");
/* harmony import */ var flarum_forum_components_UserCard__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_UserCard__WEBPACK_IMPORTED_MODULE_11__);












var globalUserDecorationHijackIid = 0;
function usernameHijack() {
  var _StyleFetcher$getInst;
  return (_StyleFetcher$getInst = _data_styleFetcher__WEBPACK_IMPORTED_MODULE_5__.StyleFetcher.getInstance()) == null || (_StyleFetcher$getInst = _StyleFetcher$getInst.getApp().forum) == null ? void 0 : _StyleFetcher$getInst.attribute("username_hijack");
}
function avatarHijack() {
  var _StyleFetcher$getInst2;
  return (_StyleFetcher$getInst2 = _data_styleFetcher__WEBPACK_IMPORTED_MODULE_5__.StyleFetcher.getInstance()) == null || (_StyleFetcher$getInst2 = _StyleFetcher$getInst2.getApp().forum) == null ? void 0 : _StyleFetcher$getInst2.attribute("avatar_hijack");
}
function initDecorationHijack() {
  var originalUserAvatar = (flarum_common_models_User__WEBPACK_IMPORTED_MODULE_4___default().prototype).avatarUrl;
  //@ts-ignore
  (flarum_common_models_User__WEBPACK_IMPORTED_MODULE_4___default().prototype).realAvatarUrl = originalUserAvatar;
  //@ts-ignore
  (flarum_common_models_User__WEBPACK_IMPORTED_MODULE_4___default().prototype).hijackColor = function () {
    var _this = this;
    return flarum_common_utils_computed__WEBPACK_IMPORTED_MODULE_7___default()('displayName', 'realAvatarUrl', 'avatarColor', function (displayName, avatarUrl, avatarColor) {
      if (avatarColor) {
        return "rgb(" + avatarColor.join(', ') + ")";
      } else if (avatarUrl) {
        calculateAvatarColor(_this, avatarUrl);
        return '';
      }
      return '#' + flarum_common_utils_stringToColor__WEBPACK_IMPORTED_MODULE_8___default()(displayName);
    }).call(this);
  };
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_3__.override)((flarum_common_models_User__WEBPACK_IMPORTED_MODULE_4___default().prototype), "avatarUrl", function () {
    var _this$data$attributes;
    if (!avatarHijack()) return originalUserAvatar.call(this);
    //@ts-ignore
    var color = this.hijackColor();
    if (color && !!color['charAt']) {
      color = color.replace(/#/g, '@');
    }
    var encodedUserInfo = JSON.stringify({
      decorationId: (_this$data$attributes = this.data.attributes) == null ? void 0 : _this$data$attributes.avatar_decoration,
      username: this.username(),
      displayName: this.displayName(),
      id: this.id(),
      color: color
    });
    //@ts-ignore
    return (originalUserAvatar.call(this) || "").split("#").pop() + "#" + encodedUserInfo;
  });
  var originalUserName = (flarum_common_models_User__WEBPACK_IMPORTED_MODULE_4___default().prototype).username;
  //@ts-ignore
  (flarum_common_models_User__WEBPACK_IMPORTED_MODULE_4___default().prototype).realUserName = originalUserName;
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_3__.override)((flarum_common_models_User__WEBPACK_IMPORTED_MODULE_4___default().prototype), "displayName", function (orgUserName) {
    if (!usernameHijack()) return orgUserName();
    return orgUserName() + "@" + this.id();
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_3__.extend)((flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default().prototype), ['oninit'], function () {
    if (!usernameHijack() && !avatarHijack()) return;
    this.userDecorationHijackIid = globalUserDecorationHijackIid++;
    this.originalView = this.view.bind(this);
    this.view = hijackViewHandler.bind(this);
    this.originalOnBefUp = this.onbeforeupdate.bind(this);
    this.onbeforeupdate = hijackOnBeforeUpdate.bind(this);
  });

  // This function should be save and not to control it.
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_3__.extend)((flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default().prototype), ['onupdate', "oncreate"], /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var ctr;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          ctr = $(".decoration-container[data-userDecorationHijackIid=\"" + this.userDecorationHijackIid + "\"]");
          if (ctr.length && !["absolute", "fixed", "relative"].includes(window.getComputedStyle(ctr[0]).position)) {
            ctr.css("position", "relative");
          }
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee, this);
  })));
  console.log("Decoration Hijack loaded");
}
function initDecorationExtend() {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_3__.override)((flarum_forum_components_Post__WEBPACK_IMPORTED_MODULE_10___default().prototype), "view", function (o) {
    //@ts-ignore
    this.userDecorationHijackIid = this.userDecorationHijackIid || globalUserDecorationHijackIid++;
    //@ts-ignore
    for (var _len = arguments.length, a = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      a[_key - 1] = arguments[_key];
    }
    var tree = o(a);
    //@ts-ignore
    tree.attrs['data-userDecorationHijackIid'] = this.userDecorationHijackIid;
    tree.attrs.className = (tree.attrs.className || "") + " decoration-container";
    //@ts-ignore
    var user = this.attrs.post.user();
    var infoElem = {
      username: user.realUserName(),
      container: tree,
      id: user.id(),
      decorationId: user.attribute("post_decoration")
    };
    //@ts-ignore
    if (this.attrs.decoration_id) infoElem.decorationId = this.attrs.decoration_id;
    (0,_DecorationApplier__WEBPACK_IMPORTED_MODULE_6__.applyDecoration)(infoElem, this);
    return tree;
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_3__.override)((flarum_forum_components_UserCard__WEBPACK_IMPORTED_MODULE_11___default().prototype), "view", function (o) {
    //@ts-ignore
    this.userDecorationHijackIid = this.userDecorationHijackIid || globalUserDecorationHijackIid++;
    //@ts-ignore
    for (var _len2 = arguments.length, a = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      a[_key2 - 1] = arguments[_key2];
    }
    var tree = o(a);
    //@ts-ignore
    tree.attrs['data-userDecorationHijackIid'] = this.userDecorationHijackIid;
    tree.attrs.className = (tree.attrs.className || "") + " decoration-container";
    //@ts-ignore
    var user = this.attrs.user;
    var infoElem = {
      username: user.realUserName(),
      container: tree,
      id: user.id(),
      decorationId: user.attribute("card_decoration")
    };
    //@ts-ignore
    if (this.attrs.decoration_id) infoElem.decorationId = this.attrs.decoration_id;
    (0,_DecorationApplier__WEBPACK_IMPORTED_MODULE_6__.applyDecoration)(infoElem, this);
    return tree;
  });
}
function hijackOnBeforeUpdate() {
  //@ts-ignore
  var injected = this.$(".user-decoration-hijack-wait-reload").length !== 0 || $(this.element).hasClass("user-decoration-hijack-wait-reload");
  //@ts-ignore
  $(this.element).removeClass("user-decoration-hijack-wait-reload");
  //@ts-ignore
  for (var _len3 = arguments.length, a = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    a[_key3] = arguments[_key3];
  }
  if (this.originalOnBefUp.apply(this, a) === false) {
    if (injected) {
      return;
    }
    return false;
  }
  return;
}
function hijackViewHandler(vnode) {
  //@ts-ignore
  var vnodeTree = this.originalView(vnode);
  if (!vnodeTree) return vnodeTree;
  if (vnodeIsAvatar(vnodeTree)) {
    //@ts-ignore
    return createWrappedAvatar(vnodeTree, this);
  } else {
    //@ts-ignore
    hijackView(null, vnodeTree, vnode, this);
  }
  return vnodeTree;
}
function hijackView(parent, root, stopAt, ctx) {
  if (root === stopAt) return;
  if (parent && vnodeIsAvatar(root)) {
    parent.children = parent.children.map(function (child) {
      if (child === root) {
        return createWrappedAvatar(child, ctx);
      } else return child;
    });
  } else if (parent && vnodeIsUsername(root)) {
    parent.children = parent.children.map(function (child) {
      if (child === root) {
        return createWrappedUsername(child, ctx);
      } else return child;
    });
  } else if (typeof root.children === 'object' && root.children['forEach']) {
    root.children.forEach(function (child) {
      child && hijackView(root, child, stopAt, ctx);
    });
  }
}
function vnodeIsAvatar(vnode) {
  var _vnode$attrs$classNam;
  return vnode && vnode.tag == "img" && ((_vnode$attrs$classNam = vnode.attrs.className) == null ? void 0 : _vnode$attrs$classNam.includes("Avatar")) && /( |^)Avatar( |$)/.test(vnode.attrs.className) && vnode.attrs.src;
}
function vnodeIsUsername(vnode) {
  var _vnode$attrs$classNam2;
  return vnode && vnode.tag == "span" && ((_vnode$attrs$classNam2 = vnode.attrs.className) == null ? void 0 : _vnode$attrs$classNam2.includes("username")) && /( |^)username( |$)/.test(vnode.attrs.className);
}
function createWrappedAvatar(vnode, ctx) {
  var _toWarp$attrs$classNa;
  var attrData = vnode.attrs.src.split("#");
  if (attrData.length != 2) return vnode;
  var toWarp = vnode;
  var userInfo = JSON.parse(attrData.pop());
  var avatarUrl = attrData.shift();
  if (!avatarUrl) {
    var _userInfo$username;
    toWarp.tag = "span";
    toWarp.children = [{
      tag: "#",
      children: (_userInfo$username = userInfo.username) == null ? void 0 : _userInfo$username.charAt(0),
      state: undefined,
      attrs: {}
    }];
    var color = userInfo.color;
    if (color && !!color['charAt']) {
      color = color.replace(/@/g, "#");
    }
    if (color) {
      var _toWarp$attrs$style;
      toWarp.attrs.style = ((_toWarp$attrs$style = toWarp.attrs.style) != null ? _toWarp$attrs$style : "") + (";--avatar-bg: " + color + ";");
    }
  }
  toWarp.attrs.src = avatarUrl;
  var ctr = {
    tag: "span",
    attrs: {
      "data-ctr": "avatar"
    },
    state: undefined,
    children: [toWarp]
  };
  ctr.attrs.style = toWarp.attrs.style;
  ctr.attrs.className = ((_toWarp$attrs$classNa = toWarp.attrs.className) != null ? _toWarp$attrs$classNa : "") + " Avatar-container decoration-container";
  ctr.attrs['data-userDecorationHijackIid'] = ctx.userDecorationHijackIid;
  //@ts-ignore
  if (ctx.appendRelative) {
    var _ctr$attrs$style;
    ctr.attrs.style = ((_ctr$attrs$style = ctr.attrs.style) != null ? _ctr$attrs$style : "") + ";position:relative;";
  }
  toWarp.attrs.className = "";
  userInfo.container = ctr;
  (0,_DecorationApplier__WEBPACK_IMPORTED_MODULE_6__.applyDecoration)(userInfo, ctx);
  return ctr;
}
function createWrappedUsername(vnode, ctx) {
  var _toWarp$text, _StyleFetcher$getInst3;
  var toWarp = vnode;
  var un = (_toWarp$text = toWarp.text) == null ? void 0 : _toWarp$text.toString();
  var unProps = un == null ? void 0 : un.split("@");
  if (!unProps || (unProps == null ? void 0 : unProps.length) < 2) return vnode;
  var user = (_StyleFetcher$getInst3 = _data_styleFetcher__WEBPACK_IMPORTED_MODULE_5__.StyleFetcher.getInstance()) == null ? void 0 : _StyleFetcher$getInst3.getApp().store.getById("users", unProps.pop());
  if (!user) return vnode;
  var userInfo = {
    username: user.attribute("username"),
    decorationId: user.attribute("name_decoration")
  };
  toWarp.text = userInfo.username;
  var ctr = {
    tag: "span",
    children: [toWarp],
    attrs: {
      className: "username-container  decoration-container " + toWarp.attrs.className
    },
    state: undefined
  };
  ctr.attrs['data-userDecorationHijackIid'] = ctx.userDecorationHijackIid;
  toWarp.attrs.className = "username-text";
  userInfo.container = ctr;
  (0,_DecorationApplier__WEBPACK_IMPORTED_MODULE_6__.applyDecoration)(userInfo, ctx);
  return ctr;
}
function calculateAvatarColor(user, avatarUrl) {
  var image = new Image();
  image.addEventListener('load', function () {
    try {
      var colorThief = new (color_thief_browser__WEBPACK_IMPORTED_MODULE_9___default())();
      //@ts-ignore
      user.avatarColor = colorThief.getColor(this);
    } catch (e) {
      // Completely white avatars throw errors due to a glitch in color thief
      // See https://github.com/lokesh/color-thief/issues/40
      if (e instanceof TypeError) {
        //@ts-ignore
        user.avatarColor = [255, 255, 255];
      } else {
        throw e;
      }
    }
    user.freshness = new Date();
    m.redraw();
  });
  image.crossOrigin = 'anonymous';
  image.src = avatarUrl != null ? avatarUrl : '';
}
var avatarColor = calculateAvatarColor;

/***/ }),

/***/ "./src/forum/components/CreateDecorationModal.tsx":
/*!********************************************************!*\
  !*** ./src/forum/components/CreateDecorationModal.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateDecorationModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/Select */ "flarum/common/components/Select");
/* harmony import */ var flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_data_styleFetcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/data/styleFetcher */ "./src/common/data/styleFetcher.ts");
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/components/LinkButton */ "flarum/common/components/LinkButton");
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_8__);









var CreateDecorationModal = /*#__PURE__*/function (_Modal) {
  function CreateDecorationModal() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Modal.call.apply(_Modal, [this].concat(args)) || this;
    _this.loading = false;
    _this.decorationId = '';
    _this.decoration = null;
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(CreateDecorationModal, _Modal);
  var _proto = CreateDecorationModal.prototype;
  _proto.className = function className() {
    return 'Modal--small';
  };
  _proto.title = function title() {
    if (this.attrs.decoration_id) {
      return flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans("xypp-user-decoration.forum.create-modal.edit-title", [this.attrs.decoration_id]);
    }
    return flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-user-decoration.forum.create-modal.title');
  };
  _proto.content = function content() {
    var that = this;
    return m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form"
    }, m("div", {
      className: "Form-group"
    }, m("label", {
      "for": "xypp-user-decoration-create-ipt-type"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-user-decoration.forum.create-modal.type.title')), m((flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_6___default()), {
      id: "xypp-user-decoration-create-ipt-type",
      options: {
        avatar: flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-user-decoration.forum.create-modal.type.avatar'),
        name: flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-user-decoration.forum.create-modal.type.username'),
        card: flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-user-decoration.forum.create-modal.type.usercard'),
        post: flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-user-decoration.forum.create-modal.type.post')
      }
    })), m("div", {
      className: "Form-group"
    }, m("label", {
      "for": "xypp-user-decoration-create-ipt-name"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-user-decoration.forum.create-modal.name')), m("input", {
      id: "xypp-user-decoration-create-ipt-name",
      required: true,
      className: "FormControl",
      step: "any"
    })), m("div", {
      className: "Form-group"
    }, m("label", {
      "for": "xypp-user-decoration-create-ipt-desc"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-user-decoration.forum.create-modal.desc')), m("textarea", {
      id: "xypp-user-decoration-create-ipt-desc",
      required: true,
      className: "FormControl",
      step: "any"
    })), m("p", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-user-decoration.forum.create-modal.tip')), m("div", {
      className: "Form-group"
    }, m("label", {
      "for": "xypp-user-decoration-create-ipt-style"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-user-decoration.forum.create-modal.style')), m("textarea", {
      id: "xypp-user-decoration-create-ipt-style",
      required: true,
      className: "FormControl",
      step: "any"
    })), m("div", {
      className: "Form-group"
    }, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
      "class": "Button Button--primary",
      type: "submit",
      loading: this.loading,
      disabled: this.loading
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-user-decoration.forum.create-modal.button')), m((flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_8___default()), {
      loading: this.loading,
      disabled: this.loading,
      onclick: this["delete"].bind(this)
    }, m("i", {
      "class": "fas fa-trash"
    }), flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-user-decoration.forum.create-modal.delete-button')))));
  };
  _proto.onready = function onready() {
    var _this2 = this;
    this.decorationId = this.attrs.decoration_id;
    if (this.decorationId) {
      var _StyleFetcher$getInst;
      this.loading = true;
      (_StyleFetcher$getInst = _common_data_styleFetcher__WEBPACK_IMPORTED_MODULE_7__.StyleFetcher.getInstance()) == null || _StyleFetcher$getInst.fetchStyle(this.decorationId).then(function (style) {
        _this2.decoration = style;
        _this2.loading = false;
        _this2.$('#xypp-user-decoration-create-ipt-name').val(style.name());
        _this2.$('#xypp-user-decoration-create-ipt-desc').val(style.desc());
        _this2.$('#xypp-user-decoration-create-ipt-style').val(style.style());
        _this2.$('#xypp-user-decoration-create-ipt-type').val(style.type());
        m.redraw();
      });
    }
  };
  _proto.onsubmit = /*#__PURE__*/function () {
    var _onsubmit = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(e) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            this.loading = true;
            _context.prev = 2;
            _context.next = 5;
            return flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().request({
              url: flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().forum.attribute('apiUrl') + '/user_decoration',
              method: 'POST',
              body: {
                attributes: {
                  id: this.decorationId,
                  style: this.$('#xypp-user-decoration-create-ipt-style').val(),
                  desc: this.$('#xypp-user-decoration-create-ipt-desc').val(),
                  name: this.$('#xypp-user-decoration-create-ipt-name').val(),
                  type: this.$('#xypp-user-decoration-create-ipt-type').val()
                }
              }
            });
          case 5:
            flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().modal.close();
            flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().alerts.show({
              type: 'success'
            }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-user-decoration.forum.create-success'));
            _context.next = 12;
            break;
          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](2);
            this.loading = false;
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee, this, [[2, 9]]);
    }));
    function onsubmit(_x) {
      return _onsubmit.apply(this, arguments);
    }
    return onsubmit;
  }();
  _proto["delete"] = /*#__PURE__*/function () {
    var _delete2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (confirm(flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-user-decoration.forum.delete_confirm'))) {
              _context2.next = 2;
              break;
            }
            return _context2.abrupt("return");
          case 2:
            this.loading = true;
            _context2.prev = 3;
            _context2.next = 6;
            return flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().request({
              url: flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().forum.attribute('apiUrl') + '/user_decoration/' + this.attrs.decoration_id + "/delete",
              method: 'GET'
            });
          case 6:
            flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().modal.close();
            flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().alerts.show({
              type: 'success'
            }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-user-decoration.forum.delete-success'));
            _context2.next = 13;
            break;
          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](3);
            this.loading = false;
          case 13:
          case "end":
            return _context2.stop();
        }
      }, _callee2, this, [[3, 10]]);
    }));
    function _delete() {
      return _delete2.apply(this, arguments);
    }
    return _delete;
  }();
  return CreateDecorationModal;
}((flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3___default()));


/***/ }),

/***/ "./src/forum/components/DecorationBox.tsx":
/*!************************************************!*\
  !*** ./src/forum/components/DecorationBox.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DecorationBox)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_data_styleFetcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/data/styleFetcher */ "./src/common/data/styleFetcher.ts");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _forum_components_CreateDecorationModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../forum/components/CreateDecorationModal */ "./src/forum/components/CreateDecorationModal.tsx");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_common_utils_setRouteWithForcedRefresh__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/common/utils/setRouteWithForcedRefresh */ "flarum/common/utils/setRouteWithForcedRefresh");
/* harmony import */ var flarum_common_utils_setRouteWithForcedRefresh__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_setRouteWithForcedRefresh__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var flarum_forum_components_UserCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/forum/components/UserCard */ "flarum/forum/components/UserCard");
/* harmony import */ var flarum_forum_components_UserCard__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_UserCard__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_fakePost__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/fakePost */ "./src/forum/utils/fakePost.tsx");
/* harmony import */ var _common_utils_DecorationApplier__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/utils/DecorationApplier */ "./src/common/utils/DecorationApplier.ts");













var DecorationBox = /*#__PURE__*/function (_Component) {
  function DecorationBox() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.type = '';
    _this.id = 0;
    _this.isCurrent = false;
    _this.uodId = 0;
    _this.decoration = null;
    _this.changing = false;
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(DecorationBox, _Component);
  var _proto = DecorationBox.prototype;
  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);
    this.id = this.attrs['decoration_id'];
    this.type = this.attrs['type'];
    this.uodId = this.attrs['user_own_decoration_id'];
  };
  _proto.oncreate = function oncreate(vnode) {
    _Component.prototype.oncreate.call(this, vnode);
  };
  _proto.onupdate = function onupdate(vnode) {
    _Component.prototype.onupdate.call(this, vnode);
    this.id = this.attrs['decoration_id'];
    this.type = this.attrs['type'];
    this.uodId = this.attrs['user_own_decoration_id'];
  };
  _proto.change = /*#__PURE__*/function () {
    var _change = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var toSave;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            this.changing = true;
            m.redraw();
            toSave = {};
            if (this.isCurrent) {
              toSave[this.type + "_decoration"] = 'null';
            } else {
              toSave[this.type + "_decoration"] = this.decoration.id();
            }
            _context.next = 6;
            return flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().session.user.save(toSave);
          case 6:
            this.changing = false;
            m.redraw();
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee, this);
    }));
    function change() {
      return _change.apply(this, arguments);
    }
    return change;
  }();
  _proto.view = function view() {
    var content = m("div", {
      "class": "error"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-user-decoration.forum.decoration-box.error'));
    var decorationObj = {
      id: parseInt(flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().session.user.id() || ''),
      username: flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().session.user.username(),
      decorationId: this.id,
      //@ts-ignore
      color: flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().session.user.hijackColor().replace(/\#/g, "@")
    };
    this.decoration = flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().store.getById('user-decorations', decorationObj.decorationId + '');
    if (!this.decoration) {
      var _StyleFetcher$getInst;
      (_StyleFetcher$getInst = _common_data_styleFetcher__WEBPACK_IMPORTED_MODULE_5__.StyleFetcher.getInstance()) == null || _StyleFetcher$getInst.fetchStyle(this.id).then(function () {
        return m.redraw();
      });
    }
    if (this.changing) {
      content = m((flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_8___default()), null);
    } else if (this.type == 'avatar') {
      var _app$session$user;
      this.isCurrent = this.decoration && ((_app$session$user = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().session).user) == null || (_app$session$user = _app$session$user.data.attributes) == null ? void 0 : _app$session$user.avatar_decoration) == this.decoration.id();
      if (!flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().forum.attribute("username_hijack")) {
        content = [m("h3", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-user-decoration.forum.decoration-box.avatar')), m("div", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-user-decoration.forum.decoration-box.closed'))];
      } else {
        var _app$session$user2;
        content = [m("h3", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-user-decoration.forum.decoration-box.avatar')), m("div", {
          "class": "avatar-box",
          "data-uiid": this.id
        }, m("img", {
          title: "-",
          "class": "Avatar",
          src:
          //@ts-ignore
          (((_app$session$user2 = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().session).user) == null ? void 0 : _app$session$user2.realAvatarUrl()) || '') + '#' + JSON.stringify(decorationObj)
        }))];
      }
    } else if (this.type == 'name') {
      var _app$session$user3, _this$decoration;
      this.isCurrent = this.decoration && ((_app$session$user3 = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().session).user) == null || (_app$session$user3 = _app$session$user3.data.attributes) == null ? void 0 : _app$session$user3.name_decoration) == ((_this$decoration = this.decoration) == null ? void 0 : _this$decoration.id());
      if (!flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().forum.attribute("username_hijack")) {
        content = [m("h3", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-user-decoration.forum.decoration-box.name')), m("div", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-user-decoration.forum.decoration-box.closed'))];
      } else {
        var _app$session$user4;
        var decorated = m("span", {
          "class": "username-container username"
        }, m("span", {
          "class": "username-text"
        }, //@ts-ignore
        (_app$session$user4 = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().session).user) == null ? void 0 : _app$session$user4.realUserName()));
        if (this.decoration) (0,_common_utils_DecorationApplier__WEBPACK_IMPORTED_MODULE_12__.applyDecorationOn)(decorated, this.decoration);
        content = [m("h3", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-user-decoration.forum.decoration-box.name')), m("div", null, decorated)];
      }
    } else if (this.type == "card") {
      var _app$session$user5, _this$decoration2, _this$decoration3;
      this.isCurrent = this.decoration && ((_app$session$user5 = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().session).user) == null || (_app$session$user5 = _app$session$user5.data.attributes) == null ? void 0 : _app$session$user5.card_decoration) == ((_this$decoration2 = this.decoration) == null ? void 0 : _this$decoration2.id());
      content = [m("h3", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-user-decoration.forum.decoration-box.card')), m("div", {
        "class": "decoration-box-card-container"
      }, m((flarum_forum_components_UserCard__WEBPACK_IMPORTED_MODULE_10___default()), {
        user: (flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().session).user,
        controlsButtonClassName: "UserCard-controls App-primaryControl",
        className: "UserCard--popover in",
        decoration_id: (_this$decoration3 = this.decoration) == null ? void 0 : _this$decoration3.id()
      }))];
    } else if (this.type == "post") {
      var _app$session$user6, _this$decoration4;
      this.isCurrent = this.decoration && ((_app$session$user6 = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().session).user) == null || (_app$session$user6 = _app$session$user6.data.attributes) == null ? void 0 : _app$session$user6.post_decoration) == ((_this$decoration4 = this.decoration) == null ? void 0 : _this$decoration4.id());
      var afterDecoration = (0,_utils_fakePost__WEBPACK_IMPORTED_MODULE_11__.generatePost)((flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().session).user);
      if (this.decoration) (0,_common_utils_DecorationApplier__WEBPACK_IMPORTED_MODULE_12__.applyDecorationOn)(afterDecoration, this.decoration);
      content = [m("h3", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-user-decoration.forum.decoration-box.post')), m("div", {
        "class": "decoration-box-card-container"
      }, afterDecoration)];
    }
    return m("div", {
      className: "DecorationBox"
    }, m("div", {
      className: "prev-warpper"
    }, content), m("div", {
      "class": "decoration-box-content"
    }, this.decoration ? this.decoration.desc() : flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-user-decoration.forum.decoration-box.loading')), this.attrs.noBtn ? '' : m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
      "class": "Button Button--primary",
      loading: this.changing,
      disabled: this.changing,
      onclick: this.change.bind(this)
    }, this.isCurrent ? flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-user-decoration.forum.decoration.remove_button') : flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-user-decoration.forum.decoration.change_button')), this.attrs.noDelete || !this.uodId ? '' : m("div", {
      "class": "delete-decoration",
      onclick: this["delete"].bind(this)
    }, m("i", {
      "class": "fas fa-times",
      "aria-label": flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-user-decoration.forum.decoration.delete_button')
    })), this.attrs.noEdit ? '' : m("div", {
      "class": "edit-decoration",
      onclick: this.edit.bind(this)
    }, m("i", {
      "class": "fas fa-edit",
      "aria-label": flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-user-decoration.forum.decoration.edit_button')
    })));
  };
  _proto["delete"] = /*#__PURE__*/function () {
    var _delete2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (!confirm(flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-user-decoration.forum.decoration.delete_confirm'))) {
              _context2.next = 6;
              break;
            }
            this.changing = true;
            _context2.next = 4;
            return flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().request({
              url: flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().forum.attribute('apiUrl') + '/user-own-decoration/' + this.uodId + '/delete'
            });
          case 4:
            this.changing = false;
            flarum_common_utils_setRouteWithForcedRefresh__WEBPACK_IMPORTED_MODULE_9___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().history.getCurrent().url);
          case 6:
          case "end":
            return _context2.stop();
        }
      }, _callee2, this);
    }));
    function _delete() {
      return _delete2.apply(this, arguments);
    }
    return _delete;
  }();
  _proto.edit = function edit() {
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().modal.show(_forum_components_CreateDecorationModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
      decoration_id: this.decoration.id()
    });
  };
  return DecorationBox;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_3___default()));


/***/ }),

/***/ "./src/forum/components/DecorationPage.tsx":
/*!*************************************************!*\
  !*** ./src/forum/components/DecorationPage.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DecorationPage: () => (/* binding */ DecorationPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_components_UserPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/components/UserPage */ "flarum/forum/components/UserPage");
/* harmony import */ var flarum_forum_components_UserPage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_UserPage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _DecorationBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DecorationBox */ "./src/forum/components/DecorationBox.tsx");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _CreateDecorationModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CreateDecorationModal */ "./src/forum/components/CreateDecorationModal.tsx");









var DecorationPage = /*#__PURE__*/function (_UserPage) {
  function DecorationPage() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _UserPage.call.apply(_UserPage, [this].concat(args)) || this;
    _this.loading = false;
    _this.record = null;
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(DecorationPage, _UserPage);
  var _proto = DecorationPage.prototype;
  _proto.oninit = function oninit(vnode) {
    _UserPage.prototype.oninit.call(this, vnode);
    this.loadUser(m.route.param('username'));
  };
  _proto.oncreate = function oncreate(vnode) {};
  _proto.onupdate = function onupdate(vnode) {};
  _proto.show = function show(user) {
    _UserPage.prototype.show.call(this, user);
    this.loadData();
  };
  _proto.content = function content() {
    var _this$record,
      _this2 = this;
    return m("div", {
      className: "decoration-page-container"
    }, m("div", {
      "class": "decoration-page-title"
    }, m("h2", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().translator.trans('xypp-user-decoration.forum.decorations')), flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().session.user.canCreateDecoration() ? m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_7___default()), {
      "class": "Button Button--primary",
      onclick: this.create.bind(this)
    }, m("i", {
      "class": "fas fa-plus"
    }), m("span", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().translator.trans('xypp-user-decoration.forum.create'))) : ''), m("div", {
      className: "decoration-page"
    }, this.loading ? m((flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default()), {
      display: "block"
    }) : (_this$record = this.record) == null ? void 0 : _this$record.map(function (item, index) {
      var _this2$user, _app$session$user, _app$session$user2;
      return m(_DecorationBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
        type: item.decoration_type(),
        user_own_decoration_id: !item.attribute("fake") && item.id(),
        decoration_id: item.decoration_id(),
        noBtn: ((_this2$user = _this2.user) == null ? void 0 : _this2$user.id()) != ((_app$session$user = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().session).user) == null ? void 0 : _app$session$user.id()),
        noDelete: !((_app$session$user2 = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().session).user) != null && _app$session$user2.canDeleteDecoration()),
        noEdit: !flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().session.user.canCreateDecoration()
      });
    })));
  };
  _proto.loadData = /*#__PURE__*/function () {
    var _loadData = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var _this$user, _this$user2;
      var payload, i;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(this.record != null)) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            if ((_this$user = this.user) != null && _this$user.id()) {
              _context.next = 4;
              break;
            }
            return _context.abrupt("return");
          case 4:
            if (!this.loading) {
              _context.next = 6;
              break;
            }
            return _context.abrupt("return");
          case 6:
            this.loading = true;
            flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().store.all("user-own-decoration").forEach(function (m) {
              flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().store.remove(m);
            });
            m.redraw();
            _context.next = 11;
            return flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().request({
              url: flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().forum.attribute('apiUrl') + '/user-own-decoration?id=' + ((_this$user2 = this.user) == null ? void 0 : _this$user2.id()),
              method: 'GET'
            });
          case 11:
            payload = _context.sent;
            i = 1;
            payload.data.forEach(function (element) {
              return i = Math.max(i, element.id || 0);
            });
            payload.data.forEach(function (element) {
              element.attributes.fake = !element.id;
              element.id = element.id || ++i;
            });
            this.record = flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().store.pushPayload(payload);
            this.loading = false;
            m.redraw();
          case 18:
          case "end":
            return _context.stop();
        }
      }, _callee, this);
    }));
    function loadData() {
      return _loadData.apply(this, arguments);
    }
    return loadData;
  }();
  _proto.create = function create() {
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().modal.show(_CreateDecorationModal__WEBPACK_IMPORTED_MODULE_8__["default"]);
  };
  return DecorationPage;
}((flarum_forum_components_UserPage__WEBPACK_IMPORTED_MODULE_3___default()));

/***/ }),

/***/ "./src/forum/components/OfferDecorationModal.tsx":
/*!*******************************************************!*\
  !*** ./src/forum/components/OfferDecorationModal.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OfferDecorationModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/Select */ "flarum/common/components/Select");
/* harmony import */ var flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_utils_setRouteWithForcedRefresh__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/utils/setRouteWithForcedRefresh */ "flarum/common/utils/setRouteWithForcedRefresh");
/* harmony import */ var flarum_common_utils_setRouteWithForcedRefresh__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_setRouteWithForcedRefresh__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_DecorationBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/DecorationBox */ "./src/forum/components/DecorationBox.tsx");









var OfferDecorationModal = /*#__PURE__*/function (_Modal) {
  function OfferDecorationModal() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Modal.call.apply(_Modal, [this].concat(args)) || this;
    _this.loading = true;
    _this.records = {};
    _this.value = 0;
    _this.decorationBox = null;
    _this.decorationType = '';
    _this.decorationId = '';
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(OfferDecorationModal, _Modal);
  var _proto = OfferDecorationModal.prototype;
  _proto.className = function className() {
    return 'Modal--small';
  };
  _proto.title = function title() {
    return flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-user-decoration.forum.modal.title');
  };
  _proto.content = function content() {
    var that = this;
    return m("div", {
      className: "Modal-body"
    }, m("p", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-user-decoration.forum.modal.tip')), m((flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_6___default()), {
      options: this.records,
      value: this.value,
      onchange: function onchange(e) {
        that.value = e;
        var dec = flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().store.getById('user-decorations', e);
        that.decorationType = dec.type();
        that.decorationId = dec.id();
        m.redraw();
      }
    }), m(_components_DecorationBox__WEBPACK_IMPORTED_MODULE_8__["default"], {
      noBtn: true,
      oncreate: function oncreate(e) {
        return that.decorationBox = e;
      },
      decoration_id: that.decorationId,
      type: that.decorationType
    }), m("div", {
      className: "paymodal-btn"
    }, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
      "class": "Button Button--primary",
      loading: this.loading,
      disabled: this.loading,
      onclick: this.offer.bind(this)
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-user-decoration.forum.modal.button'))));
  };
  _proto.onready = function onready() {
    var _this2 = this;
    this.loading = true;
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().store.find('user_decoration_all').then(function () {
      _this2.records = {};
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().store.all('user-decorations').forEach(function (decoration) {
        _this2.records[parseInt(decoration.id())] = '[' + flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-user-decoration.forum.decoration-box.' + decoration.attribute('type')) + ']' + decoration.attribute('name') + ':' + decoration.attribute('desc');
      });
      _this2.loading = false;
      m.redraw();
    });
  };
  _proto.offer = /*#__PURE__*/function () {
    var _offer = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            this.loading = true;
            _context.prev = 1;
            _context.next = 4;
            return flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().request({
              url: flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().forum.attribute('apiUrl') + '/user-own-decoration',
              method: 'POST',
              body: {
                attributes: {
                  user_id: this.attrs.user_id,
                  decoration_id: this.decorationId
                }
              }
            });
          case 4:
            flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().modal.close();
            flarum_common_utils_setRouteWithForcedRefresh__WEBPACK_IMPORTED_MODULE_7___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().history.getCurrent().url);
            _context.next = 11;
            break;
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            this.loading = false;
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee, this, [[1, 8]]);
    }));
    function offer() {
      return _offer.apply(this, arguments);
    }
    return offer;
  }();
  return OfferDecorationModal;
}((flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3___default()));


/***/ }),

/***/ "./src/forum/index.ts":
/*!****************************!*\
  !*** ./src/forum/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_data_styleFetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/data/styleFetcher */ "./src/common/data/styleFetcher.ts");
/* harmony import */ var _common_utils_DecorationHijack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/utils/DecorationHijack */ "./src/common/utils/DecorationHijack.ts");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_forum_components_UserPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/forum/components/UserPage */ "flarum/forum/components/UserPage");
/* harmony import */ var flarum_forum_components_UserPage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_UserPage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/LinkButton */ "flarum/common/components/LinkButton");
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _forum_components_DecorationPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../forum/components/DecorationPage */ "./src/forum/components/DecorationPage.tsx");
/* harmony import */ var _forum_components_OfferDecorationModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../forum/components/OfferDecorationModal */ "./src/forum/components/OfferDecorationModal.tsx");
/* harmony import */ var flarum_forum_utils_UserControls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/forum/utils/UserControls */ "flarum/forum/utils/UserControls");
/* harmony import */ var flarum_forum_utils_UserControls__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_utils_UserControls__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var flarum_common_models_User__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/common/models/User */ "flarum/common/models/User");
/* harmony import */ var flarum_common_models_User__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_User__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils_storeBox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/storeBox */ "./src/forum/utils/storeBox.tsx");













flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('xypp/user-decoration', function () {
  //@ts-ignore
  (flarum_common_models_User__WEBPACK_IMPORTED_MODULE_10___default().prototype).canOfferDecoration = flarum_common_Model__WEBPACK_IMPORTED_MODULE_11___default().attribute('canOfferDecoration');
  //@ts-ignore
  (flarum_common_models_User__WEBPACK_IMPORTED_MODULE_10___default().prototype).canViewDecoration = flarum_common_Model__WEBPACK_IMPORTED_MODULE_11___default().attribute('canViewDecoration');
  //@ts-ignore
  (flarum_common_models_User__WEBPACK_IMPORTED_MODULE_10___default().prototype).canCreateDecoration = flarum_common_Model__WEBPACK_IMPORTED_MODULE_11___default().attribute('canCreateDecoration');
  //@ts-ignore
  (flarum_common_models_User__WEBPACK_IMPORTED_MODULE_10___default().prototype).canDeleteDecoration = flarum_common_Model__WEBPACK_IMPORTED_MODULE_11___default().attribute('canDeleteDecoration');
  new _common_data_styleFetcher__WEBPACK_IMPORTED_MODULE_1__.StyleFetcher((flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default()));
  (0,_common_utils_DecorationHijack__WEBPACK_IMPORTED_MODULE_2__.initDecorationHijack)();
  (0,_common_utils_DecorationHijack__WEBPACK_IMPORTED_MODULE_2__.initDecorationExtend)();
  (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().routes)['user.user_own_decoration'] = {
    path: '/u/:username/user_own_decoration',
    component: _forum_components_DecorationPage__WEBPACK_IMPORTED_MODULE_6__.DecorationPage
  };
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_3__.extend)((flarum_forum_components_UserPage__WEBPACK_IMPORTED_MODULE_4___default().prototype), 'navItems', function (items) {
    if ((flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().session).user) {
      var _this$user;
      items.add('user_own_decoration', flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_5___default().component({
        href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().route('user.user_own_decoration', {
          username: (_this$user = this.user) == null ? void 0 : _this$user.username()
        }),
        icon: 'fas fa-receipt'
      }, [flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('xypp-user-decoration.forum.page.show-decorations')]), 10);
    }
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_3__.extend)((flarum_forum_utils_UserControls__WEBPACK_IMPORTED_MODULE_8___default()), 'moderationControls', function (items, user) {
    var _app$session$user;
    //@ts-ignore
    if ((_app$session$user = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().session).user) != null && _app$session$user.canOfferDecoration()) {
      items.add('offer-decoration', flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_9___default().component({
        icon: 'fas fa-money-bill',
        onclick: function onclick() {
          return flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().modal.show(_forum_components_OfferDecorationModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
            user_id: user.id()
          });
        }
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('xypp-user-decoration.forum.user_controls.offer')));
    }
  });
  if ('xypp-store' in flarum.extensions) {
    (0,_utils_storeBox__WEBPACK_IMPORTED_MODULE_12__.storeBox)((flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default()));
  }
});

/***/ }),

/***/ "./src/forum/utils/fakePost.tsx":
/*!**************************************!*\
  !*** ./src/forum/utils/fakePost.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generatePost: () => (/* binding */ generatePost)
/* harmony export */ });
/* harmony import */ var flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/helpers/avatar */ "flarum/common/helpers/avatar");
/* harmony import */ var flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/helpers/username */ "flarum/common/helpers/username");
/* harmony import */ var flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_1__);


function generatePost(user) {
  return m("div", {
    "class": "PostStream-item",
    "data-index": "0",
    "data-time": "2024-06-27T15:05:51.000Z",
    "data-number": "1",
    "data-id": "1",
    "data-type": "comment"
  }, m("article", {
    "class": "CommentPost Post Post--by-actor Post--by-start-user"
  }, m("div", null, m("header", {
    "class": "Post-header"
  }, m("ul", null, m("li", {
    "class": "item-user"
  }, m("div", {
    "class": "PostUser"
  }, m("h3", {
    "class": "PostUser-name"
  }, m("a", null, flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_0___default()(user), m("span", {
    "class": "UserOnline"
  }), flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_1___default()(user))))))), m("aside", {
    "class": "Post-actions"
  }, m("ul", null, m("li", null, m("div", {
    "class": "ButtonGroup Dropdown dropdown Post-controls itemCount3"
  }, m("button", {
    "class": "Dropdown-toggle Button Button--icon Button--flat",
    "aria-haspopup": "menu",
    "aria-label": "Toggle post controls dropdown menu",
    "data-toggle": "dropdown"
  }, m("i", {
    "aria-hidden": "true",
    "class": "icon fas fa-ellipsis-h Button-icon"
  })))))))));
}

/***/ }),

/***/ "./src/forum/utils/storeBox.tsx":
/*!**************************************!*\
  !*** ./src/forum/utils/storeBox.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   storeBox: () => (/* binding */ storeBox)
/* harmony export */ });
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_DecorationBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/DecorationBox */ "./src/forum/components/DecorationBox.tsx");


function storeBox(app) {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.override)(flarum.extensions['xypp-store'].StoreItemUtils.prototype, 'createItemShowCase', function (org, items) {
    if (items.provider() != 'decoration') {
      return org(items);
    }
    var info = items.itemData();
    return m("div", {
      "class": "decoration-ShowCase"
    }, m(_components_DecorationBox__WEBPACK_IMPORTED_MODULE_1__["default"], {
      decoration_id: info.id,
      type: info.type,
      noBtn: true,
      noDelete: true,
      noEdit: true
    }));
  });
}

/***/ }),

/***/ "flarum/common/Component":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/Component']" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/Component'];

/***/ }),

/***/ "flarum/common/Model":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['common/Model']" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/Model'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/LinkButton":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['common/components/LinkButton']" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/LinkButton'];

/***/ }),

/***/ "flarum/common/components/LoadingIndicator":
/*!***************************************************************************!*\
  !*** external "flarum.core.compat['common/components/LoadingIndicator']" ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/LoadingIndicator'];

/***/ }),

/***/ "flarum/common/components/Modal":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Modal']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Modal'];

/***/ }),

/***/ "flarum/common/components/Select":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Select']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Select'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/extenders":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/extenders']" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extenders'];

/***/ }),

/***/ "flarum/common/helpers/avatar":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/avatar']" ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/avatar'];

/***/ }),

/***/ "flarum/common/helpers/username":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/username']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/username'];

/***/ }),

/***/ "flarum/common/models/User":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['common/models/User']" ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/models/User'];

/***/ }),

/***/ "flarum/common/utils/computed":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/utils/computed']" ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/computed'];

/***/ }),

/***/ "flarum/common/utils/setRouteWithForcedRefresh":
/*!*******************************************************************************!*\
  !*** external "flarum.core.compat['common/utils/setRouteWithForcedRefresh']" ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/setRouteWithForcedRefresh'];

/***/ }),

/***/ "flarum/common/utils/stringToColor":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['common/utils/stringToColor']" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/stringToColor'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/Post":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['forum/components/Post']" ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/Post'];

/***/ }),

/***/ "flarum/forum/components/UserCard":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['forum/components/UserCard']" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/UserCard'];

/***/ }),

/***/ "flarum/forum/components/UserPage":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['forum/components/UserPage']" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/UserPage'];

/***/ }),

/***/ "flarum/forum/utils/UserControls":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['forum/utils/UserControls']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/utils/UserControls'];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"]);
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js")();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t, o);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extend: () => (/* reexport safe */ _src_common_extend__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _src_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common */ "./src/common/index.ts");
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.ts");
/* harmony import */ var _src_common_extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/common/extend */ "./src/common/extend.ts");



})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map