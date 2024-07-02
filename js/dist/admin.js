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

/***/ "./src/admin/index.ts":
/*!****************************!*\
  !*** ./src/admin/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_data_styleFetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/data/styleFetcher */ "./src/common/data/styleFetcher.ts");
/* harmony import */ var _common_utils_avatarHijack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/utils/avatarHijack */ "./src/common/utils/avatarHijack.ts");



flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('xypp/user-decoration', function () {
  new _common_data_styleFetcher__WEBPACK_IMPORTED_MODULE_1__.StyleFetcher((flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default()));
  (0,_common_utils_avatarHijack__WEBPACK_IMPORTED_MODULE_2__.initAvatarHijack)();
  flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().extensionData["for"]('xypp-user-decoration').registerPermission({
    icon: 'fas fa-money-bill',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('xypp-user-decoration.admin.permissions.offer_decoration'),
    permission: 'user.offer_decoration'
  }, 'moderate', 30).registerPermission({
    icon: 'fas fa-money-bill',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('xypp-user-decoration.admin.permissions.view_decoration'),
    permission: 'user.view_decoration'
  }, 'moderate', 30).registerPermission({
    icon: 'fas fa-money-bill',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('xypp-user-decoration.admin.permissions.create_decoration'),
    permission: 'user.view_decoration'
  }, 'moderate', 30).registerPermission({
    icon: 'fas fa-money-bill',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('xypp-user-decoration.admin.permissions.delete_decoration'),
    permission: 'user.delete_decoration'
  }, 'moderate', 30);
});

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
        _this2.fetchIntervalId = setTimeout(_this2.sendFetch.bind(_this2), 1000);
      }
    });
  };
  _proto.fetchStyleSync = function fetchStyleSync(id) {
    return this.app.store.getById('user-decorations', id + "") || undefined;
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

/***/ "./src/common/utils/avatarHijack.ts":
/*!******************************************!*\
  !*** ./src/common/utils/avatarHijack.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initAvatarHijack: () => (/* binding */ initAvatarHijack)
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
/* harmony import */ var _utils_decorationApplier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/decorationApplier */ "./src/common/utils/decorationApplier.ts");
/* harmony import */ var flarum_common_utils_computed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/utils/computed */ "flarum/common/utils/computed");
/* harmony import */ var flarum_common_utils_computed__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_computed__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_utils_stringToColor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/utils/stringToColor */ "flarum/common/utils/stringToColor");
/* harmony import */ var flarum_common_utils_stringToColor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_stringToColor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var color_thief_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! color-thief-browser */ "./node_modules/color-thief-browser/dist/color-thief.min.js");
/* harmony import */ var color_thief_browser__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(color_thief_browser__WEBPACK_IMPORTED_MODULE_8__);









var globalUserAvatarHijackIid = 0;
/**
 * @description 劫持用户头像生成.将用户信息编码到头像信息中.
 */
function initAvatarHijack() {
  var originalUserAvatar = (flarum_common_models_User__WEBPACK_IMPORTED_MODULE_4___default().prototype).avatarUrl;
  function calculateAvatarColor(user, avatarUrl) {
    var image = new Image();
    image.addEventListener('load', function () {
      try {
        var colorThief = new (color_thief_browser__WEBPACK_IMPORTED_MODULE_8___default())();
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
  //@ts-ignore
  (flarum_common_models_User__WEBPACK_IMPORTED_MODULE_4___default().prototype).realAvatarUrl = originalUserAvatar;
  //@ts-ignore
  (flarum_common_models_User__WEBPACK_IMPORTED_MODULE_4___default().prototype).hijackColor = function () {
    var _this = this;
    return flarum_common_utils_computed__WEBPACK_IMPORTED_MODULE_6___default()('displayName', 'realAvatarUrl', 'avatarColor', function (displayName, avatarUrl, avatarColor) {
      if (avatarColor) {
        return "rgb(" + avatarColor.join(', ') + ")";
      } else if (avatarUrl) {
        calculateAvatarColor(_this, avatarUrl);
        return '';
      }
      return '#' + flarum_common_utils_stringToColor__WEBPACK_IMPORTED_MODULE_7___default()(displayName);
    }).call(this);
  };
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_3__.override)((flarum_common_models_User__WEBPACK_IMPORTED_MODULE_4___default().prototype), "avatarUrl", function () {
    var _this$data$attributes;
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
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_3__.extend)((flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default().prototype), ['oninit'], function () {
    this.userAvatarHijackIid = globalUserAvatarHijackIid++;
    this.originalView = this.view.bind(this);
    this.view = hijackViewHandler.bind(this);
    this.originalOnBefUp = this.onbeforeupdate.bind(this);
    this.onbeforeupdate = hijackOnBeforeUpdate.bind(this);
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_3__.extend)((flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default().prototype), ['onupdate', "oncreate"], /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var ctr;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          ctr = $(".Avatar-container[data-userAvatarHijackIid=\"" + this.userAvatarHijackIid + "\"]");
          if (ctr.length && !["absolute", "fixed", "relative"].includes(window.getComputedStyle(ctr[0]).position)) {
            ctr.css("position", "relative");
          }
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee, this);
  })));
  console.log("Avatar Hijack loaded");
}
function hijackOnBeforeUpdate() {
  //@ts-ignore
  var injected = this.$(".user-avatar-hijack-wait-reload").length !== 0 || $(this.element).hasClass("user-avatar-hijack-wait-reload");
  //@ts-ignore
  $(this.element).removeClass("user-avatar-hijack-wait-reload");
  //@ts-ignore
  for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
    a[_key] = arguments[_key];
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
function createWrappedAvatar(vnode, ctx) {
  var _toWarp$attrs$classNa;
  var attrData = vnode.attrs.src.split("#");
  if (attrData.length != 2) return vnode;
  var toWarp = vnode;
  var userInfo = JSON.parse(attrData.pop());
  var avatarUrl = attrData.shift();
  if (!avatarUrl) {
    toWarp.tag = "span";
    toWarp.children = [{
      tag: "#",
      children: userInfo.username.charAt(0),
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
  ctr.attrs.className = ((_toWarp$attrs$classNa = toWarp.attrs.className) != null ? _toWarp$attrs$classNa : "") + " Avatar-container";
  ctr.attrs['data-userAvatarHijackIid'] = ctx.userAvatarHijackIid;
  //@ts-ignore
  if (ctx.appendRelative) {
    var _ctr$attrs$style;
    ctr.attrs.style = ((_ctr$attrs$style = ctr.attrs.style) != null ? _ctr$attrs$style : "") + ";position:relative;";
  }
  toWarp.attrs.className = "";
  userInfo.container = ctr;
  (0,_utils_decorationApplier__WEBPACK_IMPORTED_MODULE_5__.applyDecoration)(userInfo, ctx);
  return ctr;
}

/***/ }),

/***/ "./src/common/utils/decorationApplier.ts":
/*!***********************************************!*\
  !*** ./src/common/utils/decorationApplier.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyDecoration: () => (/* binding */ applyDecoration),
/* harmony export */   applyDecorationOn: () => (/* binding */ applyDecorationOn)
/* harmony export */ });
/* harmony import */ var _common_data_styleFetcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/data/styleFetcher */ "./src/common/data/styleFetcher.ts");


/**
 * 在用户界面对象上应用样式
 * @param elementInfo 用户界面元素对象.由各种事件中直接获取包装得到.
 */
function applyDecoration(elementInfo, ctx) {
  if (!elementInfo.decoration) {
    if (elementInfo.decorationId) {
      var _StyleFetcher$getInst;
      elementInfo.decoration = (_StyleFetcher$getInst = _common_data_styleFetcher__WEBPACK_IMPORTED_MODULE_0__.StyleFetcher.getInstance()) == null ? void 0 : _StyleFetcher$getInst.fetchStyleSync(elementInfo.decorationId);
      if (!elementInfo.decoration) {
        var _StyleFetcher$getInst2;
        (_StyleFetcher$getInst2 = _common_data_styleFetcher__WEBPACK_IMPORTED_MODULE_0__.StyleFetcher.getInstance()) == null || _StyleFetcher$getInst2.fetchStyle(elementInfo.decorationId).then(function () {
          $(ctx.element).addClass("user-avatar-hijack-wait-reload");
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

/***/ "flarum/admin/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['admin/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/app'];

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

/***/ "flarum/common/utils/stringToColor":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['common/utils/stringToColor']" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/stringToColor'];

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
  !*** ./admin.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extend: () => (/* reexport safe */ _src_common_extend__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _src_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common */ "./src/common/index.ts");
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.ts");
/* harmony import */ var _src_common_extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/common/extend */ "./src/common/extend.ts");



})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=admin.js.map