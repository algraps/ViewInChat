function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn-bd": "./node_modules/moment/locale/bn-bd.js",
      "./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-mx": "./node_modules/moment/locale/es-mx.js",
      "./es-mx.js": "./node_modules/moment/locale/es-mx.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tk": "./node_modules/moment/locale/tk.js",
      "./tk.js": "./node_modules/moment/locale/tk.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-loader></app-loader>\r\n<router-outlet></router-outlet>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"container-fluid\">\r\n  <form>\r\n    <div class=\"row pt-5 pb-4\">\r\n      <div class=\"col-lg-6 my-auto\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" id=\"simpleinput\" placeholder=\"Enter room name\" class=\"form-control\" required>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-2 my-auto\">\r\n        <div class=\"form-group\">\r\n          <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"createRoom()\">Create Room</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n\r\n  <table class=\"table table-striped\">\r\n    <thead>\r\n      <tr>\r\n        <th scope=\"col\">Room Name</th>\r\n        <th scope=\"col\">Join Link</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let room of rooms\">\r\n        <td>{{ room.roomName }}</td>\r\n        <td>{{ room.sid }}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</section>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/loader/loader.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/loader/loader.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoaderLoaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div #globalOverlay id=\"globalOverlay\" style=\"display: none;\">\r\n    <svg class=\"loader-spinner\" viewBox=\"0 0 50 50\">\r\n      <circle\r\n        class=\"path\"\r\n        cx=\"25\"\r\n        cy=\"25\"\r\n        r=\"20\"\r\n        fill=\"none\"\r\n        stroke-width=\"5\"\r\n      ></circle>\r\n    </svg>\r\n    <p id=\"globalOverlayMsg\"> </p>\r\n  </div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/meetingended/meetingended.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/meetingended/meetingended.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMeetingendedMeetingendedComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"meeting-ended-heading\">\n  <h1 style=\"color: red;text-align: center;\">Meeting Ended</h1>\n</div>\n<div style=\"width: 100%; display: flex; justify-content: center;\">\n  <img src=\"../../../assets/no-disconnect.png\" style=\"align-items: center;\">\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/video/camera/camera.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/video/camera/camera.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesVideoCameraCameraComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <kt-addbookmark [interviewID]=\"interview!=null && interview.interviewDetail !=null ? interview.interviewDetail.id:null\">\r\n</kt-addbookmark> -->\r\n<div class=\"\">\r\n\t<!-- <span id=\"projectName\">{{projectName}}</span>\r\n\t<span id=\"InterviewWith\"> Interview with {{intervieweeName}}</span> -->\r\n</div>\r\n<div id=\"preview\" #preview class=\"blackView mb-5 mb-lg-0\">\r\n\t<!-- <app-activity-indicator *ngIf=\"isInitializing\" [message]='\"Loading preview... Please wait.\"'>\r\n\t</app-activity-indicator> -->\r\n\t<div class=\"centered\" style=\"font-weight: 900; font-size: x-large;\" *ngIf=\"isConnectionLost\">Reconnecting</div>\r\n\t<div class=\"centered\" style=\"font-weight: 900; font-size: x-large;\" *ngIf=\"!isConnected\">Connecting</div>\r\n\t<div class=\"row\">\r\n\t\t<div id=\"main-participant-name\" class=\"col-lg-6 col-sm-12\" #mainParticipantName></div>\r\n\t</div>\r\n\t<div class=\"buttons_container\">\r\n\t\t<span>\r\n\t\t\t<button class=\"btn btn-lg btn-danger rounded-circle btn-icon mr-4\" title=\"End Meeting\"\r\n\t\t\t\t(click)=\"onLeaveButtonClick()\">\r\n\t\t\t\t<i class=\"fa fa-phone\" style=\"transform: rotate(225deg); color: #000;\"></i>\r\n\t\t\t</button>\r\n\t\t\t<button class=\"btn btn-lg btn-light rounded-circle btn-icon mr-4\" title=\"Mute/Unmute\"\r\n\t\t\t\t(click)=\"onMuteButtonClick()\">\r\n\t\t\t\t<i id=\"muteMicBtnIcon\" class=\"fa fa-microphone\" style=\"color: #000;\"></i>\r\n\t\t\t</button>\r\n\t\t\t<!-- <button class=\"btn btn-lg btn-light rounded-circle btn-icon mr-4\" title=\"Flip Camera\"\r\n\t\t\t\t(click)=\"onFlipPreview()\">\r\n\t\t\t\t<i class=\"fa fa-undo\" style=\"color: #000;\"></i>\r\n\t\t\t</button> -->\r\n\t\t\t<button id=\"screenShareBtn\" class=\"btn btn-lg btn-light rounded-circle btn-icon mr-4 hidden-sm-down\"\r\n\t\t\t\ttitle=\"Share Screen\" (click)=\"onShareScreenButtonClick($event)\">\r\n\t\t\t\t<i class=\"fa fa-desktop\"></i>\r\n\t\t\t</button>\r\n\t\t</span>\r\n\t</div>\r\n\r\n\t<div id=\"participant-container\" #particpantContainer>\r\n\t\t<div class=\"participant\" #selfStreamParent>\r\n\t\t\t<div class=\"participant-stream\" #selfStream>\r\n\t\t\t\t<!-- <app-activity-indicator *ngIf=\"isInitializing\" [message]='\"Loading preview... Please wait.\"'>\r\n\t\t\t\t</app-activity-indicator> -->\r\n\t\t\t\t<!-- <div class=\"centered\" style=\"font-weight: 700; font-size: large;\" *ngIf=\"isParticipantConnectionLost\">Reconnecting</div>\r\n\t\t\t\t<div class=\"centered\" style=\"font-weight: 700; font-size: large;\" *ngIf=\"!isParticipantConnected\">Connecting</div> -->\r\n\t\t\t</div>\r\n\t\t\t<div class=\"participant-detail\">\r\n\t\t\t\t<span class=\"participant-name\">\r\n\t\t\t\t\tYou\r\n\t\t\t\t</span>\r\n\t\t\t\t<span class=\"mic-icon\">\r\n\t\t\t\t\t<i id=\"selfStreamMicIcon\" class=\"fa fa-microphone\"></i>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/video/otmvideo/otmvideo.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/video/otmvideo/otmvideo.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesVideoOtmvideoOtmvideoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"\" #particpantContainer>\r\n    <div class=\"participantotm\" #selfStreamParent>\r\n        <div class=\"participant-stream\" #selfStream>\r\n            <!-- <app-activity-indicator *ngIf=\"isInitializing\" [message]='\"Loading preview... Please wait.\"'>\r\n            </app-activity-indicator> -->\r\n            <!-- <div class=\"centered\" style=\"font-weight: 700; font-size: large;\" *ngIf=\"isParticipantConnectionLost\">Reconnecting</div>\r\n            <div class=\"centered\" style=\"font-weight: 700; font-size: large;\" *ngIf=\"!isParticipantConnected\">Connecting</div> -->\r\n        </div>\r\n        <div class=\"participant-detail\">\r\n            <span class=\"participant-name\">\r\n                You\r\n            </span>\r\n            <span class=\"mic-icon\">\r\n                <i id=\"selfStreamMicIcon\" class=\"fa fa-microphone\"></i>\r\n            </span>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/video/videosession/videosession.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/video/videosession/videosession.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesVideoVideosessionVideosessionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"container-fluid\">\r\n  <!-- Video and chatsection -->\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <h2 class=\"font-weight-bolder\">{{serviceName}}</h2>\r\n      <p class=\"font-weight-bolder font-size-h6\">Elapsed Time: {{display}}</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row pb-5\">\r\n    <div class=\"col-lg-8\">\r\n      <div class=\"border rounded-xl bg-white videosection\">\r\n        <!-- Video code -->\r\n        <div class=\"grid-container\" #gridContainer>\r\n          <div class=\"grid-content\" #gridContent>\r\n            <app-camera #camera [currentParticipent]='currentParticipent' [isInterviewee]='isInterviewee'\r\n              [isInterviewer]='isInterviewer' [isHiddenParticipant]='isHiddenParticipant'\r\n              [isReadOnlyViewer]='isReadOnlyViewer' [intervieweeName]='intervieweeName' [isMuted]='isMuted'\r\n              [interview]='interview' [totalParticipants]=\"totalParticipants\" (leaveRoom)='leaveRoom()'\r\n              (flipCamera)='flipCamera()' (toggleMute)='muteOrUnmute()' [isFlipped]=\"isFlipped\"\r\n              (shareScreen)='shareScreenHandler()'> </app-camera>\r\n          </div>\r\n        </div>\r\n        <!-- Video code -->\r\n      </div>\r\n    </div>\r\n    <!-- chat section start -->\r\n    <div class=\"col-lg-4\">\r\n      <div class=\"card border rounded-xl chatsection h-100\">\r\n        <div class=\"card-header bg-white px-2 py-4 h5 font-weight-bolder\">\r\n          Chat Room\r\n        </div>\r\n        <div class=\"card-body p-0\" id=\"scrollDiv\" style=\"height: 30vh; overflow-y: auto;\">\r\n          <div class=\"msgr\">\r\n            <div class=\"flex-1\">\r\n              <div #defaultMessage class=\"text-center\"></div>\r\n              <div #chatcontainer id=\"chat_container\" class=\"w-100 p-3\">\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer p-0\">\r\n          <div class=\"send-message-container\">\r\n            <div class=\"p-2\">\r\n              <div #chatinput (keydown)=\"sendChat($event)\" contenteditable=\"true\"\r\n                data-placeholder=\"Type your message here ...\" class=\"form-content-editable text-dark\" autofocus></div>\r\n            </div>\r\n            <div class=\"py-2 px-4 border-top\" style=\"height: 45px;\">\r\n              <!--\r\n              <div class=\"float-left\">\r\n                <input type=\"file\" #file id=\"file\" (change)=\"handleFileInput($event.target.files)\" class=\"d-none\">\r\n                <label for=\"file\"><i class=\"fas fa-paperclip mr-4 mb-0\" style=\"font-size: 26px;\"></i></label>\r\n                <span class=\"text-primary\">{{ (fileToUpload != undefined ? fileToUpload.name : '') }}</span>\r\n              </div> -->\r\n\r\n              <div class=\"float-right\">\r\n                <div *ngIf=\"chatLoader\" class=\"spinner-border\" role=\"status\">\r\n                  <span class=\"sr-only\">Loading...</span>\r\n                </div>\r\n                <a #sendButton href=\"javascript:void(0);\" id=\"btnSendChat\" (click)=\"sendChat($event)\"\r\n                  class=\"btn btn-primary btn-sm px-5\">Send</a>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- chat section End -->\r\n  </div>\r\n\r\n</section>\r\n\r\n<button type=\"button\" class=\"btn btn-sm btn-primary d-none\" id=\"clickMe\" (click)=\"open(enterUserName)\"></button>\r\n\r\n<ng-template #enterUserName let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-body pt-0\">\r\n    <div class=\"row p-2\">\r\n      <div class=\"col-lg-10 col-md-12 mx-auto\">\r\n        <div class=\"row pt-3\">\r\n          <div class=\"col-lg-6 mx-auto my-auto\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" class=\"form-control form-control-sm\" name=\"text\" id=\"enterName\"\r\n                placeholder=\"Enter your name\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-2 mx-auto my-auto\">\r\n            <div class=\"form-group float-right\">\r\n              <button type=\"button\" (click)=\"join()\"\r\n                class=\"btn btn-primary font-size-h4 font-weight-bolder btn-sm\">Join</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: routes, AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _pages_meetingended_meetingended_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/meetingended/meetingended.component */
    "./src/app/pages/meetingended/meetingended.component.ts");
    /* harmony import */


    var _pages_video_videosession_videosession_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/video/videosession/videosession.component */
    "./src/app/pages/video/videosession/videosession.component.ts");

    var routes = [//{ path: '', component: DashboardComponent, pathMatch: 'full' },
    {
      path: 'video/:id',
      component: _pages_video_videosession_videosession_component__WEBPACK_IMPORTED_MODULE_4__["VideosessionComponent"]
    }, {
      path: 'meeting-ended',
      component: _pages_meetingended_meetingended_component__WEBPACK_IMPORTED_MODULE_3__["MeetingendedComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\r\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n  font-size: 14px;\r\n  color: #333;\r\n  box-sizing: border-box;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  margin: 8px 0;\r\n}\r\n\r\np {\r\n  margin: 0;\r\n}\r\n\r\n.spacer {\r\n  flex: 1;\r\n}\r\n\r\n.toolbar {\r\n  height: 60px;\r\n  margin: -8px;\r\n  display: flex;\r\n  align-items: center;\r\n  background-color: #1976d2;\r\n  color: white;\r\n  font-weight: 600;\r\n}\r\n\r\n.toolbar img {\r\n  margin: 0 16px;\r\n}\r\n\r\n.toolbar #twitter-logo {\r\n  height: 40px;\r\n  margin: 0 16px;\r\n}\r\n\r\n.toolbar #twitter-logo:hover {\r\n  opacity: 0.8;\r\n}\r\n\r\n.content {\r\n  display: flex;\r\n  margin: 32px auto;\r\n  padding: 0 16px;\r\n  max-width: 960px;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\nsvg.material-icons {\r\n  height: 24px;\r\n  width: auto;\r\n}\r\n\r\nsvg.material-icons:not(:last-child) {\r\n  margin-right: 8px;\r\n}\r\n\r\n.card svg.material-icons path {\r\n  fill: #888;\r\n}\r\n\r\n.card-container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  margin-top: 16px;\r\n}\r\n\r\n.card {\r\n  border-radius: 4px;\r\n  border: 1px solid #eee;\r\n  background-color: #fafafa;\r\n  height: 40px;\r\n  width: 200px;\r\n  margin: 0 8px 16px;\r\n  padding: 16px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  transition: all 0.2s ease-in-out;\r\n  line-height: 24px;\r\n}\r\n\r\n.card-container .card:not(:last-child) {\r\n  margin-right: 0;\r\n}\r\n\r\n.card.card-small {\r\n  height: 16px;\r\n  width: 168px;\r\n}\r\n\r\n.card-container .card:not(.highlight-card) {\r\n  cursor: pointer;\r\n}\r\n\r\n.card-container .card:not(.highlight-card):hover {\r\n  transform: translateY(-3px);\r\n  box-shadow: 0 4px 17px rgba(black, 0.35);\r\n}\r\n\r\n.card-container .card:not(.highlight-card):hover .material-icons path {\r\n  fill: rgb(105, 103, 103);\r\n}\r\n\r\n.card.highlight-card {\r\n  background-color: #1976d2;\r\n  color: white;\r\n  font-weight: 600;\r\n  border: none;\r\n  width: auto;\r\n  min-width: 30%;\r\n  position: relative;\r\n}\r\n\r\n.card.card.highlight-card span {\r\n  margin-left: 60px;\r\n}\r\n\r\nsvg#rocket {\r\n  width: 80px;\r\n  position: absolute;\r\n  left: -10px;\r\n  top: -24px;\r\n}\r\n\r\nsvg#rocket-smoke {\r\n  height: 100vh;\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 180px;\r\n  z-index: -10;\r\n}\r\n\r\na,\r\na:visited,\r\na:hover {\r\n  color: #1976d2;\r\n  text-decoration: none;\r\n}\r\n\r\na:hover {\r\n  color: #125699;\r\n}\r\n\r\n.terminal {\r\n  position: relative;\r\n  width: 80%;\r\n  max-width: 600px;\r\n  border-radius: 6px;\r\n  padding-top: 45px;\r\n  margin-top: 8px;\r\n  overflow: hidden;\r\n  background-color: rgb(15, 15, 16);\r\n}\r\n\r\n.terminal::before {\r\n  content: \"\\2022 \\2022 \\2022\";\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 4px;\r\n  background: rgb(58, 58, 58);\r\n  color: #c2c3c4;\r\n  width: 100%;\r\n  font-size: 2rem;\r\n  line-height: 0;\r\n  padding: 14px 0;\r\n  text-indent: 4px;\r\n}\r\n\r\n.terminal pre {\r\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\r\n  color: white;\r\n  padding: 0 1rem 1rem;\r\n  margin: 0;\r\n}\r\n\r\n.circle-link {\r\n  height: 40px;\r\n  width: 40px;\r\n  border-radius: 40px;\r\n  margin: 8px;\r\n  background-color: white;\r\n  border: 1px solid #eeeeee;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n  transition: 1s ease-out;\r\n}\r\n\r\n.circle-link:hover {\r\n  transform: translateY(-0.25rem);\r\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\nfooter {\r\n  margin-top: 8px;\r\n  display: flex;\r\n  align-items: center;\r\n  line-height: 20px;\r\n}\r\n\r\nfooter a {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.github-star-badge {\r\n  color: #24292e;\r\n  display: flex;\r\n  align-items: center;\r\n  font-size: 12px;\r\n  padding: 3px 10px;\r\n  border: 1px solid rgba(27,31,35,.2);\r\n  border-radius: 3px;\r\n  background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\r\n  margin-left: 4px;\r\n  font-weight: 600;\r\n  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\r\n}\r\n\r\n.github-star-badge:hover {\r\n  background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\r\n  border-color: rgba(27,31,35,.35);\r\n  background-position: -.5em;\r\n}\r\n\r\n.github-star-badge .material-icons {\r\n  height: 16px;\r\n  width: 16px;\r\n  margin-right: 4px;\r\n}\r\n\r\nsvg#clouds {\r\n  position: fixed;\r\n  bottom: -160px;\r\n  left: -230px;\r\n  z-index: -10;\r\n  width: 1920px;\r\n}\r\n\r\n/* Responsive Styles */\r\n\r\n@media screen and (max-width: 767px) {\r\n\r\n  .card-container > *:not(.circle-link) ,\r\n  .terminal {\r\n    width: 100%;\r\n  }\r\n\r\n  .card:not(.highlight-card) {\r\n    height: 16px;\r\n    margin: 8px 0;\r\n  }\r\n\r\n  .card.highlight-card span {\r\n    margin-left: 72px;\r\n  }\r\n\r\n  svg#rocket-smoke {\r\n    right: 120px;\r\n    transform: rotate(-5deg);\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 575px) {\r\n  svg#rocket-smoke {\r\n    display: none;\r\n    visibility: hidden;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwSkFBMEo7RUFDMUosZUFBZTtFQUNmLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsbUNBQW1DO0VBQ25DLGtDQUFrQztBQUNwQzs7QUFFQTs7Ozs7O0VBTUUsYUFBYTtBQUNmOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7OztFQUdFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0VBQW9FO0VBQ3BFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHdFQUF3RTtFQUN4RSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQiw4REFBOEQ7RUFDOUQsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrSUFBa0k7QUFDcEk7O0FBRUE7RUFDRSw4REFBOEQ7RUFDOUQsZ0NBQWdDO0VBQ2hDLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFHQSxzQkFBc0I7O0FBQ3RCOztFQUVFOztJQUVFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osd0JBQXdCO0VBQzFCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG59XHJcblxyXG5oMSxcclxuaDIsXHJcbmgzLFxyXG5oNCxcclxuaDUsXHJcbmg2IHtcclxuICBtYXJnaW46IDhweCAwO1xyXG59XHJcblxyXG5wIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5zcGFjZXIge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi50b29sYmFyIHtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgbWFyZ2luOiAtOHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4udG9vbGJhciBpbWcge1xyXG4gIG1hcmdpbjogMCAxNnB4O1xyXG59XHJcblxyXG4udG9vbGJhciAjdHdpdHRlci1sb2dvIHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgbWFyZ2luOiAwIDE2cHg7XHJcbn1cclxuXHJcbi50b29sYmFyICN0d2l0dGVyLWxvZ286aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiAzMnB4IGF1dG87XHJcbiAgcGFkZGluZzogMCAxNnB4O1xyXG4gIG1heC13aWR0aDogOTYwcHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5zdmcubWF0ZXJpYWwtaWNvbnMge1xyXG4gIGhlaWdodDogMjRweDtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuc3ZnLm1hdGVyaWFsLWljb25zOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcblxyXG4uY2FyZCBzdmcubWF0ZXJpYWwtaWNvbnMgcGF0aCB7XHJcbiAgZmlsbDogIzg4ODtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIG1hcmdpbjogMCA4cHggMTZweDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4uY2FyZC5jYXJkLXNtYWxsIHtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbiAgd2lkdGg6IDE2OHB4O1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCkge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTdweCByZ2JhKGJsYWNrLCAwLjM1KTtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpOmhvdmVyIC5tYXRlcmlhbC1pY29ucyBwYXRoIHtcclxuICBmaWxsOiByZ2IoMTA1LCAxMDMsIDEwMyk7XHJcbn1cclxuXHJcbi5jYXJkLmhpZ2hsaWdodC1jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB3aWR0aDogYXV0bztcclxuICBtaW4td2lkdGg6IDMwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jYXJkLmNhcmQuaGlnaGxpZ2h0LWNhcmQgc3BhbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbn1cclxuXHJcbnN2ZyNyb2NrZXQge1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAtMTBweDtcclxuICB0b3A6IC0yNHB4O1xyXG59XHJcblxyXG5zdmcjcm9ja2V0LXNtb2tlIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwcHg7XHJcbiAgcmlnaHQ6IDE4MHB4O1xyXG4gIHotaW5kZXg6IC0xMDtcclxufVxyXG5cclxuYSxcclxuYTp2aXNpdGVkLFxyXG5hOmhvdmVyIHtcclxuICBjb2xvcjogIzE5NzZkMjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmE6aG92ZXIge1xyXG4gIGNvbG9yOiAjMTI1Njk5O1xyXG59XHJcblxyXG4udGVybWluYWwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogODAlO1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIHBhZGRpbmctdG9wOiA0NXB4O1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgMTUsIDE2KTtcclxufVxyXG5cclxuLnRlcm1pbmFsOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFwyMDIyIFxcMjAyMiBcXDIwMjJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgaGVpZ2h0OiA0cHg7XHJcbiAgYmFja2dyb3VuZDogcmdiKDU4LCA1OCwgNTgpO1xyXG4gIGNvbG9yOiAjYzJjM2M0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBsaW5lLWhlaWdodDogMDtcclxuICBwYWRkaW5nOiAxNHB4IDA7XHJcbiAgdGV4dC1pbmRlbnQ6IDRweDtcclxufVxyXG5cclxuLnRlcm1pbmFsIHByZSB7XHJcbiAgZm9udC1mYW1pbHk6IFNGTW9uby1SZWd1bGFyLENvbnNvbGFzLExpYmVyYXRpb24gTW9ubyxNZW5sbyxtb25vc3BhY2U7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDAgMXJlbSAxcmVtO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmNpcmNsZS1saW5rIHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICBtYXJnaW46IDhweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlZWVlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xyXG4gIHRyYW5zaXRpb246IDFzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4uY2lyY2xlLWxpbms6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yNXJlbSk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG5mb290ZXIgYSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZ2l0aHViLXN0YXItYmFkZ2Uge1xyXG4gIGNvbG9yOiAjMjQyOTJlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgcGFkZGluZzogM3B4IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywzMSwzNSwuMik7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCNmYWZiZmMsI2VmZjNmNiA5MCUpO1xyXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWYsQXBwbGUgQ29sb3IgRW1vamksU2Vnb2UgVUkgRW1vamksU2Vnb2UgVUkgU3ltYm9sO1xyXG59XHJcblxyXG4uZ2l0aHViLXN0YXItYmFkZ2U6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCNmMGYzZjYsI2U2ZWJmMSA5MCUpO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNywzMSwzNSwuMzUpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0uNWVtO1xyXG59XHJcblxyXG4uZ2l0aHViLXN0YXItYmFkZ2UgLm1hdGVyaWFsLWljb25zIHtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbiAgd2lkdGg6IDE2cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbn1cclxuXHJcbnN2ZyNjbG91ZHMge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IC0xNjBweDtcclxuICBsZWZ0OiAtMjMwcHg7XHJcbiAgei1pbmRleDogLTEwO1xyXG4gIHdpZHRoOiAxOTIwcHg7XHJcbn1cclxuXHJcblxyXG4vKiBSZXNwb25zaXZlIFN0eWxlcyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG5cclxuICAuY2FyZC1jb250YWluZXIgPiAqOm5vdCguY2lyY2xlLWxpbmspICxcclxuICAudGVybWluYWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQuaGlnaGxpZ2h0LWNhcmQgc3BhbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogNzJweDtcclxuICB9XHJcblxyXG4gIHN2ZyNyb2NrZXQtc21va2Uge1xyXG4gICAgcmlnaHQ6IDEyMHB4O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICBzdmcjcm9ja2V0LXNtb2tlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _pages_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/loader/loader.component */
    "./src/app/pages/loader/loader.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _services_videochat_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/videochat.service */
    "./src/app/services/videochat.service.ts");
    /* harmony import */


    var _services_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services/common.service */
    "./src/app/services/common.service.ts");
    /* harmony import */


    var _services_datetime_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./services/datetime.service */
    "./src/app/services/datetime.service.ts");
    /* harmony import */


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services/storage.service */
    "./src/app/services/storage.service.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./services */
    "./src/app/services/index.ts");
    /* harmony import */


    var _pages_video_videosession_videosession_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./pages/video/videosession/videosession.component */
    "./src/app/pages/video/videosession/videosession.component.ts");
    /* harmony import */


    var _pages_video_camera_camera_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./pages/video/camera/camera.component */
    "./src/app/pages/video/camera/camera.component.ts");
    /* harmony import */


    var _pages_video_otmvideo_otmvideo_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pages/video/otmvideo/otmvideo.component */
    "./src/app/pages/video/otmvideo/otmvideo.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./pages/dashboard/dashboard.component */
    "./src/app/pages/dashboard/dashboard.component.ts");
    /* harmony import */


    var angular_font_awesome__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! angular-font-awesome */
    "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
    /* harmony import */


    var _pages_meetingended_meetingended_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./pages/meetingended/meetingended.component */
    "./src/app/pages/meetingended/meetingended.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _pages_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__["LoaderComponent"], _pages_video_videosession_videosession_component__WEBPACK_IMPORTED_MODULE_13__["VideosessionComponent"], _pages_video_camera_camera_component__WEBPACK_IMPORTED_MODULE_14__["CameraComponent"], _pages_video_otmvideo_otmvideo_component__WEBPACK_IMPORTED_MODULE_15__["OtmvideoComponent"], _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["DashboardComponent"], _pages_meetingended_meetingended_component__WEBPACK_IMPORTED_MODULE_19__["MeetingendedComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"], angular_font_awesome__WEBPACK_IMPORTED_MODULE_18__["AngularFontAwesomeModule"]],
      exports: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _pages_video_videosession_videosession_component__WEBPACK_IMPORTED_MODULE_13__["VideosessionComponent"], _pages_video_camera_camera_component__WEBPACK_IMPORTED_MODULE_14__["CameraComponent"]],
      providers: [_services_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"], _services_datetime_service__WEBPACK_IMPORTED_MODULE_10__["DatetimeService"], _services__WEBPACK_IMPORTED_MODULE_12__["InterceptService"], _services_storage_service__WEBPACK_IMPORTED_MODULE_11__["StorageService"], _services_videochat_service__WEBPACK_IMPORTED_MODULE_8__["VideochatService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/constants/app.constants.ts":
  /*!********************************************!*\
    !*** ./src/app/constants/app.constants.ts ***!
    \********************************************/

  /*! exports provided: ApplicationName, ApiBaseUrl, UIBaseUrl, FlipAngle, SessionStatus, OverlayStyles, ApiUrls */

  /***/
  function srcAppConstantsAppConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApplicationName", function () {
      return ApplicationName;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiBaseUrl", function () {
      return ApiBaseUrl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UIBaseUrl", function () {
      return UIBaseUrl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlipAngle", function () {
      return FlipAngle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessionStatus", function () {
      return SessionStatus;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayStyles", function () {
      return OverlayStyles;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiUrls", function () {
      return ApiUrls;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // Press Ctrl + K + 0 to get better idea of this file , Valid for VSCODE


    var ApplicationName = 'ViewIn Chat'; //export const ApiBaseUrl = "https://localhost:44300"; // Local Twilio Video API URL
    //ONLY IN PROD

    var ApiBaseUrl = "https://vinchatapi.azurewebsites.net";
    var UIBaseUrl = "https://vinchatfrontend.azurewebsites.net"; // Local Twilio Video UI URL

    var apiUrls = {
      // Twilio
      CreateRoom: "".concat(ApiBaseUrl, "/api/video/CreateRoom"),
      GetConnectedParticipants: "".concat(ApiBaseUrl, "/api/video/GetConnectedParticipants"),
      CompleteARoom: "".concat(ApiBaseUrl, "/api/video/CompleteARoom/"),
      Participants: "".concat(ApiBaseUrl, "/api/video/participants"),
      Rooms: "".concat(ApiBaseUrl, "/api/video/GetAllRooms"),
      Token: "".concat(ApiBaseUrl, "/api/video/token"),
      UpdateSessionChatRoomSID: "".concat(ApiBaseUrl, "/api/video/UpdateSessionChatRoomSID"),
      GetSessionDetailForVideoCall: "".concat(ApiBaseUrl, "/api/video/GetSessionDetailForVideoCall"),
      CreateRoomUID: "".concat(ApiBaseUrl, "/api/video/UpdateRoomUID"),
      GetVideoRoomInfo: "".concat(ApiBaseUrl, "/api/video/GetVideoRoomInfo")
    };
    var FlipAngle;

    (function (FlipAngle) {
      FlipAngle[FlipAngle["0deg"] = 0] = "0deg";
      FlipAngle[FlipAngle["180deg"] = 180] = "180deg";
    })(FlipAngle || (FlipAngle = {}));

    var SessionStatus;

    (function (SessionStatus) {
      SessionStatus[SessionStatus["Scheduled"] = 1] = "Scheduled";
      SessionStatus[SessionStatus["Completed"] = 2] = "Completed";
      SessionStatus[SessionStatus["Cancelled"] = 3] = "Cancelled";
    })(SessionStatus || (SessionStatus = {}));

    var Dark = {
      OverLayColor: 'black',
      TextColor: 'white'
    };
    var Light = {
      OverLayColor: 'white',
      TextColor: 'black'
    };
    var Transparent = {
      OverLayColor: 'rgba(0, 0, 0, 0.286)',
      TextColor: 'white'
    };
    var OverlayStyles = {
      Dark: Dark,
      Light: Light,
      Transparent: Transparent
    };
    var ApiUrls = apiUrls;
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDashboardDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
    \********************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppPagesDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/constants/app.constants */
    "./src/app/constants/app.constants.ts");
    /* harmony import */


    var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/common.service */
    "./src/app/services/common.service.ts");
    /* harmony import */


    var src_app_services_videochat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/videochat.service */
    "./src/app/services/videochat.service.ts");

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(videoChatService, cdr, commonService) {
        _classCallCheck(this, DashboardComponent);

        this.videoChatService = videoChatService;
        this.cdr = cdr;
        this.commonService = commonService;
        this.getAllRooms();
      }

      _createClass(DashboardComponent, [{
        key: "createRoom",
        value: function createRoom() {
          var _this2 = this;

          var roomName = document.getElementById("simpleinput");

          if (roomName.value == null || roomName.value == undefined || roomName.value == "" || roomName.value == '') {
            this.commonService.showErrorAlert("Please enter a name for room");
            return false;
          } else {
            this.videoChatService.createRoom(roomName.value).then(function (response) {
              if (response) {
                if (response.result) {
                  _this2.commonService.showErrorAlert(response.message);
                } else {
                  roomName.value = "";

                  _this2.commonService.showSuccessAlert("Success");

                  _this2.getAllRooms();
                }
              } else {
                roomName.value = "";

                _this2.commonService.showSuccessAlert("Success");

                _this2.getAllRooms();
              }
            });
          }
        }
      }, {
        key: "getAllRooms",
        value: function getAllRooms() {
          var _this3 = this;

          this.videoChatService.getAllRooms().subscribe(function (response) {
            if (response.result.length > 0) {
              var _iterator = _createForOfIteratorHelper(response.result),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var result = _step.value;
                  result.sid = src_app_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__["UIBaseUrl"] + "/video/" + result.id;
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              _this3.rooms = response.result;

              _this3.cdr.detectChanges();
            } else {
              _this3.rooms = [];
            }
          });
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: src_app_services_videochat_service__WEBPACK_IMPORTED_MODULE_4__["VideochatService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }];
    };

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.css */
      "./src/app/pages/dashboard/dashboard.component.css"))["default"]]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/pages/loader/loader.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/pages/loader/loader.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoaderLoaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#globalOverlay {\n  position: absolute;\n  z-index: 1000;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n#globalOverlay img {\n  margin-left: calc(100vw - 100%);\n  margin-bottom: 30px;\n}\n\n#globalOverlay.hidden {\n  opacity: 0;\n  visibility: hidden;\n}\n\n.loader-spinner {\n  -webkit-animation: rotate 2s linear infinite;\n          animation: rotate 2s linear infinite;\n  margin-left: calc(100vw - 100%);\n  width: 50px;\n  height: 50px;\n}\n\n.loader-spinner .path {\n  stroke: #F04E1E;\n  stroke-linecap: round;\n  -webkit-animation: dash 1.5s ease-in-out infinite;\n          animation: dash 1.5s ease-in-out infinite;\n}\n\n@-webkit-keyframes rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes dash {\n  0% {\n    stroke-dasharray: 1, 150;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -35;\n  }\n  100% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -124;\n  }\n}\n\n@keyframes dash {\n  0% {\n    stroke-dasharray: 1, 150;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -35;\n  }\n  100% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -124;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9hZGVyL0Q6XFxQcm9qZWN0c1xcVmlld0luQ2hhdC9zcmNcXGFwcFxccGFnZXNcXGxvYWRlclxcbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FER0U7RUFDRSwrQkFBQTtFQUNBLG1CQUFBO0FDQUo7O0FER0U7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHRTtFQUNFLDRDQUFBO1VBQUEsb0NBQUE7RUFDQSwrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQUo7O0FER0U7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxpREFBQTtVQUFBLHlDQUFBO0FDQUo7O0FER0U7RUFDRTtJQUNFLHlCQUFBO0VDQUo7QUFDRjs7QURIRTtFQUNFO0lBQ0UseUJBQUE7RUNBSjtBQUNGOztBREdFO0VBQ0U7SUFDRSx3QkFBQTtJQUNBLG9CQUFBO0VDREo7RURJRTtJQUNFLHlCQUFBO0lBQ0Esc0JBQUE7RUNGSjtFREtFO0lBQ0UseUJBQUE7SUFDQSx1QkFBQTtFQ0hKO0FBQ0Y7O0FEWEU7RUFDRTtJQUNFLHdCQUFBO0lBQ0Esb0JBQUE7RUNESjtFRElFO0lBQ0UseUJBQUE7SUFDQSxzQkFBQTtFQ0ZKO0VES0U7SUFDRSx5QkFBQTtJQUNBLHVCQUFBO0VDSEo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZ2xvYmFsT3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICAjZ2xvYmFsT3ZlcmxheSBpbWcge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoMTAwdncgLSAxMDAlKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgfVxyXG4gIFxyXG4gICNnbG9iYWxPdmVybGF5LmhpZGRlbiB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICAubG9hZGVyLXNwaW5uZXIge1xyXG4gICAgYW5pbWF0aW9uOiByb3RhdGUgMnMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoMTAwdncgLSAxMDAlKTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gIH1cclxuICBcclxuICAubG9hZGVyLXNwaW5uZXIgLnBhdGgge1xyXG4gICAgc3Ryb2tlOiAjRjA0RTFFO1xyXG4gICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xyXG4gICAgYW5pbWF0aW9uOiBkYXNoIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgcm90YXRlIHtcclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGRhc2gge1xyXG4gICAgMCUge1xyXG4gICAgICBzdHJva2UtZGFzaGFycmF5OiAxLCAxNTA7XHJcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgNTAlIHtcclxuICAgICAgc3Ryb2tlLWRhc2hhcnJheTogOTAsIDE1MDtcclxuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0zNTtcclxuICAgIH1cclxuICBcclxuICAgIDEwMCUge1xyXG4gICAgICBzdHJva2UtZGFzaGFycmF5OiA5MCwgMTUwO1xyXG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogLTEyNDtcclxuICAgIH1cclxuICB9XHJcbiAgIiwiI2dsb2JhbE92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jZ2xvYmFsT3ZlcmxheSBpbWcge1xuICBtYXJnaW4tbGVmdDogY2FsYygxMDB2dyAtIDEwMCUpO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4jZ2xvYmFsT3ZlcmxheS5oaWRkZW4ge1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5sb2FkZXItc3Bpbm5lciB7XG4gIGFuaW1hdGlvbjogcm90YXRlIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgbWFyZ2luLWxlZnQ6IGNhbGMoMTAwdncgLSAxMDAlKTtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLmxvYWRlci1zcGlubmVyIC5wYXRoIHtcbiAgc3Ryb2tlOiAjRjA0RTFFO1xuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gIGFuaW1hdGlvbjogZGFzaCAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZGFzaCB7XG4gIDAlIHtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAxLCAxNTA7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gIH1cbiAgNTAlIHtcbiAgICBzdHJva2UtZGFzaGFycmF5OiA5MCwgMTUwO1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMzU7XG4gIH1cbiAgMTAwJSB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogOTAsIDE1MDtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogLTEyNDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/loader/loader.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/loader/loader.component.ts ***!
    \**************************************************/

  /*! exports provided: LoaderComponent */

  /***/
  function srcAppPagesLoaderLoaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoaderComponent", function () {
      return LoaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LoaderComponent = /*#__PURE__*/function () {
      function LoaderComponent() {
        _classCallCheck(this, LoaderComponent);
      }

      _createClass(LoaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoaderComponent;
    }();

    LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-loader',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./loader.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/loader/loader.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./loader.component.scss */
      "./src/app/pages/loader/loader.component.scss"))["default"]]
    })], LoaderComponent);
    /***/
  },

  /***/
  "./src/app/pages/meetingended/meetingended.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/pages/meetingended/meetingended.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMeetingendedMeetingendedComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".meeting-ended-heading{\r\n  width:100%; padding-top:20px; text-align: center;float: left;color: red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVldGluZ2VuZGVkL21lZXRpbmdlbmRlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVSxFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxVQUFVO0FBQ3pFIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWVldGluZ2VuZGVkL21lZXRpbmdlbmRlZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lZXRpbmctZW5kZWQtaGVhZGluZ3tcclxuICB3aWR0aDoxMDAlOyBwYWRkaW5nLXRvcDoyMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7ZmxvYXQ6IGxlZnQ7Y29sb3I6IHJlZDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/meetingended/meetingended.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/meetingended/meetingended.component.ts ***!
    \**************************************************************/

  /*! exports provided: MeetingendedComponent */

  /***/
  function srcAppPagesMeetingendedMeetingendedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MeetingendedComponent", function () {
      return MeetingendedComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MeetingendedComponent = /*#__PURE__*/function () {
      function MeetingendedComponent() {
        _classCallCheck(this, MeetingendedComponent);
      }

      _createClass(MeetingendedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MeetingendedComponent;
    }();

    MeetingendedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-meetingended',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./meetingended.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/meetingended/meetingended.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./meetingended.component.css */
      "./src/app/pages/meetingended/meetingended.component.css"))["default"]]
    })], MeetingendedComponent);
    /***/
  },

  /***/
  "./src/app/pages/video/camera/camera.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/pages/video/camera/camera.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesVideoCameraCameraComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".buttons_container {\n  position: absolute;\n  left: 43%;\n  bottom: 15px;\n  z-index: 1;\n}\n\n.blackView {\n  background-color: black !important;\n  border-radius: 10px;\n  color: #ffffff;\n  text-align: center;\n  min-height: 350px;\n}\n\n#preview {\n  float: left;\n  width: 100%;\n  position: relative;\n  height: 55vh;\n}\n\n#participant-container {\n  width: 185px;\n  height: 100%;\n  position: absolute;\n  right: 0;\n}\n\n#main-participant-name {\n  position: absolute;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 40px;\n  left: 26px;\n  bottom: 10px;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 32px;\n  color: #FFFFFF;\n}\n\n.participant {\n  width: 175px;\n  height: 130px;\n  background-color: #000000;\n  border-radius: 10px;\n  margin-top: 10px;\n  position: relative;\n  border: 1px solid #423a3a;\n}\n\n.participant-detail {\n  left: 5px;\n  bottom: 5px;\n  position: absolute;\n  font-weight: 500;\n  line-height: 14px;\n  border: 0px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  background-color: #d8d8da;\n  border-radius: 10px;\n  padding: 3px 7px 2px 7px;\n  color: #505050;\n}\n\n@media (max-width: 992px) {\n  .participant {\n    width: 130px;\n    height: 97px;\n  }\n\n  #participant-container {\n    width: 140px;\n  }\n}\n\n@media (max-width: 570px) {\n  .participant {\n    width: 110px;\n    height: 146px;\n  }\n\n  #participant-container {\n    width: 120px;\n  }\n\n  .buttons_container {\n    left: 35%;\n  }\n\n  #main-participant-name {\n    left: 0px;\n    bottom: 55px;\n  }\n}\n\n.participant-stream {\n  width: 100%;\n}\n\n.participant-name {\n  margin-right: 5px;\n}\n\n.dominant-speaker {\n  border: 1px solid green !important;\n}\n\nvideo {\n  border-radius: 10px !important;\n}\n\ntextarea:focus {\n  border: 0 !important;\n}\n\n.fw-700 {\n  font-weight: 700;\n}\n\n.mic-icon > i {\n  color: #000;\n  font-size: 12px;\n}\n\n.centered {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmlkZW8vY2FtZXJhL0Q6XFxQcm9qZWN0c1xcVmlld0luQ2hhdC9zcmNcXGFwcFxccGFnZXNcXHZpZGVvXFxjYW1lcmFcXGNhbWVyYS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvdmlkZW8vY2FtZXJhL2NhbWVyYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDQ0Q7O0FERUE7RUFDQyxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBRUEsaUJBQUE7QUNBRDs7QURHQTtFQUVDLFdBQUE7RUFDQSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxZQUFBO0FDRkQ7O0FES0E7RUFDQyxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQ0ZEOztBREtBO0VBQ0Msa0JBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0ZEOztBREtBO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDRkQ7O0FES0E7RUFDQyxTQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0FDRkQ7O0FES0E7RUFDQztJQUNDLFlBQUE7SUFDQSxZQUFBO0VDRkE7O0VESUQ7SUFDQyxZQUFBO0VDREE7QUFDRjs7QURJQTtFQUNDO0lBQ0MsWUFBQTtJQUNBLGFBQUE7RUNGQTs7RURJRDtJQUNDLFlBQUE7RUNEQTs7RURJRDtJQUNDLFNBQUE7RUNEQTs7RURJRDtJQUNDLFNBQUE7SUFDQSxZQUFBO0VDREE7QUFDRjs7QURJQTtFQUNDLFdBQUE7QUNGRDs7QURPQTtFQUNDLGlCQUFBO0FDSkQ7O0FET0E7RUFDQyxrQ0FBQTtBQ0pEOztBRE9BO0VBQ0MsOEJBQUE7QUNKRDs7QURPQTtFQUNDLG9CQUFBO0FDSkQ7O0FET0E7RUFDQyxnQkFBQTtBQ0pEOztBRE1BO0VBQ0MsV0FBQTtFQUNBLGVBQUE7QUNIRDs7QURNQTtFQUNDLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQ0hEIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdmlkZW8vY2FtZXJhL2NhbWVyYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b25zX2NvbnRhaW5lciB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGxlZnQ6IDQzJTtcclxuXHRib3R0b206IDE1cHg7XHJcblx0ei1pbmRleDogMVxyXG59XHJcblxyXG4uYmxhY2tWaWV3IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0Y29sb3I6ICNmZmZmZmY7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdC8vdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHRtaW4taGVpZ2h0OiAzNTBweDtcclxufVxyXG5cclxuI3ByZXZpZXcge1xyXG5cdC8vIG1hcmdpbi1yaWdodDogMTVweDtcclxuXHRmbG9hdDogbGVmdDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHQvL21hcmdpbi10b3A6IDEwcHg7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGhlaWdodDogNTV2aDtcclxufVxyXG5cclxuI3BhcnRpY2lwYW50LWNvbnRhaW5lciB7XHJcblx0d2lkdGg6IDE4NXB4O1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0cmlnaHQ6IDA7XHJcbn1cclxuXHJcbiNtYWluLXBhcnRpY2lwYW50LW5hbWUge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR3aWR0aDogZml0LWNvbnRlbnQ7XHJcblx0aGVpZ2h0OiA0MHB4O1xyXG5cdGxlZnQ6IDI2cHg7XHJcblx0Ym90dG9tOiAxMHB4O1xyXG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0bGluZS1oZWlnaHQ6IDMycHg7XHJcblx0Y29sb3I6ICNGRkZGRkY7XHJcbn1cclxuXHJcbi5wYXJ0aWNpcGFudCB7XHJcblx0d2lkdGg6IDE3NXB4O1xyXG5cdGhlaWdodDogMTMwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdG1hcmdpbi10b3A6IDEwcHg7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICM0MjNhM2E7XHJcbn1cclxuXHJcbi5wYXJ0aWNpcGFudC1kZXRhaWwge1xyXG5cdGxlZnQ6IDVweDtcclxuXHRib3R0b206IDVweDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRsaW5lLWhlaWdodDogMTRweDtcclxuXHRib3JkZXI6IDBweDtcclxuXHR3aWR0aDogZml0LWNvbnRlbnQ7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2Q4ZDhkYTtcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdHBhZGRpbmc6IDNweCA3cHggMnB4IDdweDtcclxuXHRjb2xvcjogIzUwNTA1MDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcblx0LnBhcnRpY2lwYW50IHtcclxuXHRcdHdpZHRoOiAxMzBweDtcclxuXHRcdGhlaWdodDogOTdweDtcclxuXHR9XHJcblx0I3BhcnRpY2lwYW50LWNvbnRhaW5lciB7XHJcblx0XHR3aWR0aDogMTQwcHg7XHJcblx0fVxyXG4gIH1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzBweCkge1xyXG5cdC5wYXJ0aWNpcGFudCB7XHJcblx0XHR3aWR0aDogMTEwcHg7XHJcblx0XHRoZWlnaHQ6IDE0NnB4O1xyXG5cdH1cclxuXHQjcGFydGljaXBhbnQtY29udGFpbmVyIHtcclxuXHRcdHdpZHRoOiAxMjBweDtcclxuXHR9XHJcblxyXG5cdC5idXR0b25zX2NvbnRhaW5lciB7XHJcblx0XHRsZWZ0OiAzNSU7XHJcblx0fVxyXG5cclxuXHQjbWFpbi1wYXJ0aWNpcGFudC1uYW1lIHtcclxuXHRcdGxlZnQ6IDBweDtcclxuXHRcdGJvdHRvbTogNTVweDtcclxuXHR9XHJcbiAgfVxyXG5cclxuLnBhcnRpY2lwYW50LXN0cmVhbSB7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG5cclxuLnBhcnRpY2lwYW50LW5hbWUge1xyXG5cdG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4uZG9taW5hbnQtc3BlYWtlciB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgZ3JlZW4gIWltcG9ydGFudDtcclxufVxyXG5cclxudmlkZW8ge1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxudGV4dGFyZWE6Zm9jdXMge1xyXG5cdGJvcmRlcjogMCAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5mdy03MDAge1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuLm1pYy1pY29uID4gaSB7XHJcblx0Y29sb3I6ICMwMDA7XHJcblx0Zm9udC1zaXplOiAxMnB4XHJcbn1cclxuXHJcbi5jZW50ZXJlZCB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogNTAlO1xyXG5cdGxlZnQ6IDUwJTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB9IiwiLmJ1dHRvbnNfY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA0MyU7XG4gIGJvdHRvbTogMTVweDtcbiAgei1pbmRleDogMTtcbn1cblxuLmJsYWNrVmlldyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDM1MHB4O1xufVxuXG4jcHJldmlldyB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDU1dmg7XG59XG5cbiNwYXJ0aWNpcGFudC1jb250YWluZXIge1xuICB3aWR0aDogMTg1cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbn1cblxuI21haW4tcGFydGljaXBhbnQtbmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGxlZnQ6IDI2cHg7XG4gIGJvdHRvbTogMTBweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5cbi5wYXJ0aWNpcGFudCB7XG4gIHdpZHRoOiAxNzVweDtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNDIzYTNhO1xufVxuXG4ucGFydGljaXBhbnQtZGV0YWlsIHtcbiAgbGVmdDogNXB4O1xuICBib3R0b206IDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgYm9yZGVyOiAwcHg7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZDhkYTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogM3B4IDdweCAycHggN3B4O1xuICBjb2xvcjogIzUwNTA1MDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5wYXJ0aWNpcGFudCB7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIGhlaWdodDogOTdweDtcbiAgfVxuXG4gICNwYXJ0aWNpcGFudC1jb250YWluZXIge1xuICAgIHdpZHRoOiAxNDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3MHB4KSB7XG4gIC5wYXJ0aWNpcGFudCB7XG4gICAgd2lkdGg6IDExMHB4O1xuICAgIGhlaWdodDogMTQ2cHg7XG4gIH1cblxuICAjcGFydGljaXBhbnQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTIwcHg7XG4gIH1cblxuICAuYnV0dG9uc19jb250YWluZXIge1xuICAgIGxlZnQ6IDM1JTtcbiAgfVxuXG4gICNtYWluLXBhcnRpY2lwYW50LW5hbWUge1xuICAgIGxlZnQ6IDBweDtcbiAgICBib3R0b206IDU1cHg7XG4gIH1cbn1cbi5wYXJ0aWNpcGFudC1zdHJlYW0ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnBhcnRpY2lwYW50LW5hbWUge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmRvbWluYW50LXNwZWFrZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbiAhaW1wb3J0YW50O1xufVxuXG52aWRlbyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbn1cblxudGV4dGFyZWE6Zm9jdXMge1xuICBib3JkZXI6IDAgIWltcG9ydGFudDtcbn1cblxuLmZ3LTcwMCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5taWMtaWNvbiA+IGkge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uY2VudGVyZWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/video/camera/camera.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/video/camera/camera.component.ts ***!
    \********************************************************/

  /*! exports provided: CameraComponent */

  /***/
  function srcAppPagesVideoCameraCameraComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CameraComponent", function () {
      return CameraComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var twilio_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! twilio-video */
    "./node_modules/twilio-video/es5/index.js");
    /* harmony import */


    var twilio_video__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(twilio_video__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _app_services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../app/services/storage.service */
    "./src/app/services/storage.service.ts");
    /* harmony import */


    var _constants_app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../constants/app.constants */
    "./src/app/constants/app.constants.ts");
    /* harmony import */


    var src_app_services_videochat_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/videochat.service */
    "./src/app/services/videochat.service.ts");

    var CameraComponent = /*#__PURE__*/function () {
      function CameraComponent(storageService, cdr, renderer, _http, videoChatService) {
        var _this4 = this;

        _classCallCheck(this, CameraComponent);

        this.storageService = storageService;
        this.cdr = cdr;
        this.renderer = renderer;
        this._http = _http;
        this.videoChatService = videoChatService;
        this.participantsChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.leaveRoom = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.toggleMute = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.shareScreen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.flipCamera = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._isMuted = false;
        this._interview = null;
        this._intervieweeName = "";
        this._isHiddenParticipant = false;
        this._isReadOnlyViewer = false;
        this._isInitializing = false;
        this._isInitialized = false;
        this.localTracks = [];
        this.isConnectionLost = false;
        this.isConnected = false;
        this.projectQuestions = [];

        this.onMuteButtonClick = function () {
          _this4.toggleMute.emit();

          _this4.notificationHub.send("ToggleMute", !_this4._isMuted, _this4.currentParticipent.id);
        };

        this.onShareScreenButtonClick = function (event) {
          _this4.shareScreen.emit();
        };

        this.onFlipPreview = function () {
          _this4.flipCamera.emit();
        };

        this.flipAngle = _constants_app_constants__WEBPACK_IMPORTED_MODULE_6__["FlipAngle"]["0deg"];
      }

      _createClass(CameraComponent, [{
        key: "isMuted",
        set: function set(isMuted) {
          var muteMicBtnIcon = document.getElementById("muteMicBtnIcon");

          if (muteMicBtnIcon) {
            if (isMuted) {
              this.renderer.removeClass(muteMicBtnIcon, "fa-microphone");
              this.renderer.addClass(muteMicBtnIcon, "fa-microphone-slash");
            } else {
              this.renderer.removeClass(muteMicBtnIcon, "fa-microphone-slash");
              this.renderer.addClass(muteMicBtnIcon, "fa-microphone");
            }
          }

          var selfStreamMicIcon = document.getElementById("selfStreamMicIcon");

          if (selfStreamMicIcon) {
            if (isMuted) {
              this.renderer.removeClass(selfStreamMicIcon, "fa-microphone");
              this.renderer.addClass(selfStreamMicIcon, "fa-microphone-slash");
            } else {
              this.renderer.removeClass(selfStreamMicIcon, "fa-microphone-slash");
              this.renderer.addClass(selfStreamMicIcon, "fa-microphone");
            }
          }

          this._isMuted = isMuted;
        }
      }, {
        key: "currentParticipent",
        get: function get() {
          return this._currentParticipent;
        },
        set: function set(currentParticipent) {
          this._currentParticipent = currentParticipent;

          if (!!this.currentParticipent // &&
          //this.currentParticipent.type != MemberType.ReadOnlyViewer &&
          //this.currentParticipent.type != MemberType.Interviewee
          ) {}
        }
      }, {
        key: "tracks",
        get: function get() {
          return this.localTracks;
        }
      }, {
        key: "interview",
        get: function get() {
          return this._interview;
        },
        set: function set(interview) {
          this._interview = interview;

          if (!!this._interview && this._interview.interviewDetail) {//this.projectName = this._interview.interviewDetail.fk_ProjectName;
          }

          this.cdr.detectChanges();
        }
      }, {
        key: "intervieweeName",
        get: function get() {
          return this._intervieweeName;
        },
        set: function set(intervieweeName) {
          this._intervieweeName = intervieweeName;
          this.cdr.detectChanges();
        }
      }, {
        key: "isHiddenParticipant",
        get: function get() {
          return this._isHiddenParticipant;
        },
        set: function set(isHiddenParticipant) {
          this._isHiddenParticipant = isHiddenParticipant;
          this.cdr.detectChanges();
        }
      }, {
        key: "isReadOnlyViewer",
        get: function get() {
          return this._isReadOnlyViewer;
        },
        set: function set(isReadOnlyViewer) {
          this._isReadOnlyViewer = isReadOnlyViewer;
          this.cdr.detectChanges();
        }
      }, {
        key: "isInterviewee",
        get: function get() {
          return this._isInterviewee;
        },
        set: function set(isInterviewee) {
          this._isInterviewee = isInterviewee;

          if (this._isInterviewee && this.previewElement) {
            this.renderer.setStyle(this.previewElement.nativeElement, 'height', '94vh');
          }

          this.cdr.detectChanges();
        }
      }, {
        key: "isInterviewer",
        get: function get() {
          return this._isInterviewer;
        },
        set: function set(isInterviewer) {
          this._isInterviewer = isInterviewer;
          this.cdr.detectChanges();
        }
      }, {
        key: "isInitializing",
        get: function get() {
          return this._isInitializing;
        },
        set: function set(isInitializing) {
          this._isInitializing = isInitializing;
          this.cdr.detectChanges();
        }
      }, {
        key: "isInitialized",
        get: function get() {
          return this._isInitialized;
        },
        set: function set(isInitialized) {
          this._isInitialized = isInitialized;
          this.cdr.detectChanges();
        }
        /* Particpant Detail*/

      }, {
        key: "participantCount",
        get: function get() {
          return !!this.participants ? this.participants.size : 0;
        }
      }, {
        key: "isAlone",
        get: function get() {
          return this.participantCount === 0;
        } //#region generic camera methods

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        }
      }, {
        key: "onBookmarkClick",
        value: function onBookmarkClick() {
          var element = document.getElementById('btnOpenAddBookmarkModal');
          element.click();
        }
      }, {
        key: "onLeaveButtonClick",
        value: function onLeaveButtonClick() {
          var _this5 = this;

          var msg = "Do you want to leave the meeting ?";
          var confirmMsg = 'Yes, leave meeting!'; // if (this.currentParticipent.participantType == UserTypeEnum.Vendor) {
          //   msg = "Do you want to end the meeting ?"
          //   confirmMsg = 'Yes, end meeting!';
          // }

          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: 'Are you sure?',
            text: msg,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: confirmMsg
          }).then(function (result) {
            if (result.value) {
              _this5.destroyLocalTracks();

              _this5.leaveRoom.emit();
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroyLocalTracks();
        }
      }, {
        key: "destroyLocalTracks",
        value: function destroyLocalTracks() {
          this.localTracks.forEach(function (track) {
            track.disable();
            track.stop();
          });
        } //#endregion
        //#region camera

      }, {
        key: "initializePreview",
        value: function initializePreview(deviceInfo, elemetToAppendStream) {
          var isFlipped = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          this.flip = isFlipped;

          if (deviceInfo) {
            this.initializeDevice(deviceInfo.kind, deviceInfo.deviceId, elemetToAppendStream);
          } else {
            this.initializeDevice(null, null, elemetToAppendStream);
          }
        }
      }, {
        key: "finalizePreview",
        value: function finalizePreview() {
          try {
            if (this.videoTrack) {
              this.videoTrack.detach().forEach(function (element) {
                return element.remove();
              });
            }
          } catch (e) {
            console.error(e);
          }
        }
      }, {
        key: "initializeDevice",
        value: function initializeDevice(kind, deviceId, elemetToAppendStream) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var videoElement, user;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.prev = 0;
                    this.isInitializing = true;
                    this.finalizePreview();

                    if (!(kind && deviceId)) {
                      _context2.next = 9;
                      break;
                    }

                    _context2.next = 6;
                    return this.initializeTracks(kind, deviceId);

                  case 6:
                    _context2.t0 = _context2.sent;
                    _context2.next = 12;
                    break;

                  case 9:
                    _context2.next = 11;
                    return this.initializeTracks();

                  case 11:
                    _context2.t0 = _context2.sent;

                  case 12:
                    this.localTracks = _context2.t0;
                    this.videoTrack = this.localTracks.find(function (t) {
                      return t.kind === 'video';
                    });
                    videoElement = this.videoTrack.attach();
                    this.renderer.setStyle(videoElement, 'height', '100%');
                    this.renderer.setStyle(videoElement, 'width', '100%'); // this.renderer.setStyle(videoElement, 'border-radius', '10px');
                    // this.renderer.setStyle(videoElement, 'margin-bottom', '-5px');

                    user = JSON.parse(localStorage.getItem("videoUserID"));
                    this.renderer.setAttribute(videoElement, 'data-id', 'video-' + user.userID); // elemetToAppendStream.nativeElement.value = null;

                    if (!elemetToAppendStream) {
                      if (this.isInterviewee) {
                        this.renderer.setStyle(this.previewElement, 'height', '98vh');
                        this.renderer.setStyle(videoElement, 'height', '90vh');
                      } else {
                        this.renderer.setStyle(videoElement, 'height', '100%');
                      }
                    }

                    if (elemetToAppendStream) {
                      this.renderer.appendChild(elemetToAppendStream.nativeElement, videoElement);
                    } else {
                      this.renderer.appendChild(this.previewElement.nativeElement, videoElement);
                    }

                    this.isInitialized = true;
                    _context2.next = 27;
                    break;

                  case 24:
                    _context2.prev = 24;
                    _context2.t1 = _context2["catch"](0);
                    console.info(_context2.t1);

                  case 27:
                    _context2.prev = 27;
                    this.isInitializing = false;
                    this.cdr.detectChanges();
                    return _context2.finish(27);

                  case 31:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[0, 24, 27, 31]]);
          }));
        }
      }, {
        key: "showPreviewCamera",
        value: function showPreviewCamera(elemetToAppendStream) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.initializePreview(null, elemetToAppendStream, false);

                  case 2:
                    return _context3.abrupt("return", this.videoTrack);

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "initializeTracks",
        value: function initializeTracks(kind, deviceId) {
          if (kind) {
            switch (kind) {
              case 'audioinput':
                return Object(twilio_video__WEBPACK_IMPORTED_MODULE_2__["createLocalTracks"])({
                  audio: {
                    deviceId: deviceId
                  },
                  video: true
                });

              case 'videoinput':
                return Object(twilio_video__WEBPACK_IMPORTED_MODULE_2__["createLocalTracks"])({
                  audio: true,
                  video: {
                    deviceId: deviceId
                  }
                });
            }
          }

          return Object(twilio_video__WEBPACK_IMPORTED_MODULE_2__["createLocalTracks"])({
            audio: true,
            video: true
          });
        } //#endregion
        //#region participants & tracks

      }, {
        key: "clear",
        value: function clear() {
          if (this.participants) {
            this.participants.clear();
          }
        }
      }, {
        key: "initialize",
        value: function initialize(participants) {
          var _this6 = this;

          this.participants = participants;

          if (this.participants) {
            this.participants.forEach(function (participant) {
              return _this6.registerParticipantEvents(participant, "");
            });
          }
        }
      }, {
        key: "add",
        value: function add(participant, participantDetailID) {
          if (this.participants && participant) {
            this.participants.set(participant.sid, participant);
            this.registerParticipantEvents(participant, participantDetailID);
          }
        }
      }, {
        key: "remove",
        value: function remove(participant, participantDetailID) {
          if (this.participants && this.participants.has(participant.sid)) {
            this.participants["delete"](participant.sid);
          }

          var participantToRemove = document.getElementById(participant.identity);

          if (participantToRemove) {
            participantToRemove.remove();
          }
        }
      }, {
        key: "loudest",
        value: function loudest(participant) {
          this.dominantSpeaker = participant;
          var previousDominantSpeaker = document.getElementsByClassName('dominant-speaker');

          if (previousDominantSpeaker && previousDominantSpeaker.length > 0) {
            for (var index = 0; index < previousDominantSpeaker.length; index++) {
              var element = previousDominantSpeaker[index];
              element.classList.remove('dominant-speaker');
            }
          }

          var dominantSpeakerStreamElement = document.getElementById(participant.identity);
          dominantSpeakerStreamElement.classList.add('dominant-speaker');
        }
      }, {
        key: "onLeaveRoom",
        value: function onLeaveRoom() {
          this.leaveRoom.emit(true);
        }
      }, {
        key: "registerParticipantEvents",
        value: function registerParticipantEvents(participant, participantDetailID) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this7 = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    //let participantDetail: any = this.totalParticipants.filter(x => x.id == participant.identity)[0];
                    if (participant) {
                      participant.tracks.forEach(function (publication) {
                        return _this7.subscribe(publication, participantDetailID);
                      });
                      participant.on('trackPublished', function (publication) {
                        _this7.subscribe(publication, participantDetailID);
                      });
                      participant.on('trackUnpublished', function (publication) {
                        if (publication && publication.track) {
                          _this7.detachRemoteTrack(publication.track, participantDetailID);
                        }
                      });
                    }

                  case 1:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));
        }
      }, {
        key: "subscribe",
        value: function subscribe(publication, participantDetailID) {
          var _this8 = this;

          if (publication && publication.on) {
            publication.on('subscribed', function (track) {
              return _this8.attachRemoteTrack(track, participantDetailID);
            });
            publication.on('unsubscribed', function (track) {
              return _this8.detachRemoteTrack(track, participantDetailID);
            });
          }
        }
      }, {
        key: "attachRemoteTrack",
        value: function attachRemoteTrack(track, participantDetailID) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var userName, user, element, cameraTrackvideoElement, isThisSharedScreenTrack, participantMainDiv, participantStreamDiv, participantDetailDiv;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    //let userName = localStorage.getItem("userName");
                    user = JSON.parse(localStorage.getItem("videoUserID"));

                    if (user.userID == participantDetailID) {
                      userName = user.userName;
                    } else {
                      userName = "User 2";
                    }

                    if (this.isAttachable(track)) {
                      element = track.attach();
                      this.renderer.data.id = track.sid;
                      this.renderer.setStyle(element, 'width', '100%');
                      this.renderer.setAttribute(element, 'data-tracksid', track.sid);

                      if (track && track.kind === 'video' && element) {
                        cameraTrackvideoElement = document.querySelector("[data-id='video-".concat(participantDetailID, "']"));
                        isThisSharedScreenTrack = !!cameraTrackvideoElement;

                        if (isThisSharedScreenTrack) {
                          // this case indicates that the incoming remote track is the 2nd video track (other than camera stream) of the participant
                          // and surely it will be "SharedScreen" video track.
                          // moving 1st video track (camera stream) to participants
                          this.renderer.setStyle(cameraTrackvideoElement, "height", "auto");
                          participantMainDiv = this.renderer.createElement('div');
                          participantMainDiv.setAttribute('id', participantDetailID);
                          participantMainDiv.className = 'participant';
                          participantStreamDiv = this.renderer.createElement('div');
                          participantStreamDiv.className = 'participant-stream';
                          this.renderer.appendChild(participantStreamDiv, cameraTrackvideoElement);
                          this.renderer.appendChild(participantMainDiv, participantStreamDiv);
                          participantDetailDiv = this.renderer.createElement('div');
                          participantDetailDiv.className = 'participant-detail';
                          participantDetailDiv.innerHTML = "<span class=\"participant-name\">\n                                              ".concat(userName, "\n                                            </span>\n                                            <span class=\"mic-icon\">\n                                              <i class=\"fa fa-microphone\" id=\"streamMicIcon-").concat(participantDetailID, "\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</span>");
                          this.renderer.appendChild(participantMainDiv, participantDetailDiv);
                          this.renderer.appendChild(this.particpantContainer.nativeElement, participantMainDiv);
                        }

                        if (isThisSharedScreenTrack) {
                          this.renderer.setAttribute(element, 'data-id', 'shared-screen-video-' + participantDetailID);
                        } else {
                          this.renderer.setAttribute(element, 'data-id', 'video-' + participantDetailID);
                        } // if (this.currentParticipent.participantType == "Admin") {
                        //   this.mainParticipantName.nativeElement.innerHTML = "Test User";
                        //   this.renderer.setStyle(element, 'height', '94vh');
                        //   element.setAttribute('id', participantDetailID);
                        //   this.renderer.appendChild(this.previewElement.nativeElement, element);
                        // }
                        // else if ((this.currentParticipent.participantType !== participantDetail.participantType
                        // )) {


                        this.mainParticipantName.nativeElement.innerHTML = userName;
                        this.renderer.setStyle(element, 'height', '100%');
                        element.setAttribute('id', participantDetailID);
                        this.renderer.appendChild(this.previewElement.nativeElement, element); // }
                        // else {
                        // const participantMainDiv: HTMLDivElement = this.renderer.createElement('div');
                        // participantMainDiv.setAttribute('id', participantDetailID);
                        // participantMainDiv.className = 'participant';
                        // const participantStreamDiv: HTMLDivElement = this.renderer.createElement('div');
                        // participantStreamDiv.className = 'participant-stream';
                        // this.renderer.appendChild(participantStreamDiv, element);
                        // this.renderer.appendChild(participantMainDiv, participantStreamDiv);
                        // const participantDetailDiv: HTMLDivElement = this.renderer.createElement('div');
                        // participantDetailDiv.className = 'participant-detail';
                        // this.renderer.appendChild(participantMainDiv, participantDetailDiv);
                        // participantDetailDiv.innerHTML = `
                        //               <span class="participant-name">
                        //                 Test User
                        //               </span>
                        //               <span class="mic-icon">
                        //                 <i class="fa fa-microphone" id="streamMicIcon-${participantDetailID}"></i>
                        //               </span>`;
                        // const participantToRemove = document.getElementById(participantDetailID);
                        // if (participantToRemove) {
                        //   participantToRemove.remove();
                        // }
                        // this.renderer.appendChild(this.particpantContainer.nativeElement, participantMainDiv);
                        // }
                      } else {
                        this.renderer.appendChild(this.particpantContainer.nativeElement, element);
                      }

                      this.participantsChanged.emit(true);
                      this.cdr.detectChanges();
                      this.isConnected = true;
                      this.isConnectionLost = false;
                    }

                  case 3:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "detachRemoteTrack",
        value: function detachRemoteTrack(track, participantDetailID) {
          var _this9 = this;

          var sharedScreenTrackVideoElement = document.querySelector("[data-id='shared-screen-video-".concat(participantDetailID, "'][data-tracksid=").concat(track.sid, "]"));

          if (this.isDetachable(track)) {
            track.detach().forEach(function (el) {
              if (el.tagName == "VIDEO" && el.id == participantDetailID) {
                _this9.isConnectionLost = true;
              } else {
                el.remove();
                _this9.isConnectionLost = false;
              }
            });
            this.participantsChanged.emit(true); // if sharescreen video track is going to detatch (Stop Sharing case) then setting camera video track to main view

            if (!!sharedScreenTrackVideoElement) {
              var participantVideoElement = document.querySelector("[data-id='video-".concat(participantDetailID, "']"));
              document.getElementById(participantDetailID).remove();
              var participantOuterElement = document.getElementById("".concat(participantDetailID));

              if (!!participantVideoElement) {
                this.renderer.appendChild(this.previewElement.nativeElement, participantVideoElement);
                this.renderer.setStyle(participantVideoElement, 'height', '100%');
              }

              if (!!participantOuterElement) {
                participantOuterElement.remove();
              }

              this.isConnectionLost = false;
            }
          }
        }
      }, {
        key: "isAttachable",
        value: function isAttachable(track) {
          return !!track && (track.attach !== undefined || track.attach !== undefined);
        }
      }, {
        key: "isDetachable",
        value: function isDetachable(track) {
          return !!track && (track.detach !== undefined || track.detach !== undefined);
        }
      }]);

      return CameraComponent;
    }();

    CameraComponent.ctorParameters = function () {
      return [{
        type: _app_services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: src_app_services_videochat_service__WEBPACK_IMPORTED_MODULE_7__["VideochatService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('preview', {
      "static": false
    })], CameraComponent.prototype, "previewElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mainParticipantName', {
      "static": false
    })], CameraComponent.prototype, "mainParticipantName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('selfStream', {
      "static": false
    })], CameraComponent.prototype, "selfStream", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('selfStreamParent', {
      "static": false
    })], CameraComponent.prototype, "selfStreamParent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('particpantContainer', {
      "static": false
    })], CameraComponent.prototype, "particpantContainer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('participantsChanged')], CameraComponent.prototype, "participantsChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('leaveRoom')], CameraComponent.prototype, "leaveRoom", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('toggleMute')], CameraComponent.prototype, "toggleMute", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('shareScreen')], CameraComponent.prototype, "shareScreen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('flipCamera')], CameraComponent.prototype, "flipCamera", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('activeRoomName')], CameraComponent.prototype, "activeRoomName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CameraComponent.prototype, "isMuted", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CameraComponent.prototype, "currentParticipent", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CameraComponent.prototype, "totalParticipants", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CameraComponent.prototype, "interview", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CameraComponent.prototype, "intervieweeName", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CameraComponent.prototype, "isHiddenParticipant", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CameraComponent.prototype, "isReadOnlyViewer", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CameraComponent.prototype, "isInterviewee", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CameraComponent.prototype, "isInterviewer", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CameraComponent.prototype, "isFlipped", void 0);
    CameraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-camera',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./camera.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/video/camera/camera.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./camera.component.scss */
      "./src/app/pages/video/camera/camera.component.scss"))["default"]]
    })], CameraComponent);
    /***/
  },

  /***/
  "./src/app/pages/video/otmvideo/otmvideo.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/pages/video/otmvideo/otmvideo.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesVideoOtmvideoOtmvideoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".participantotm {\n  height: 130px;\n  background-color: #000000;\n  border-radius: 10px;\n  margin-bottom: 10px;\n  position: relative;\n  border: 1px solid #423a3a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmlkZW8vb3RtdmlkZW8vRDpcXFByb2plY3RzXFxWaWV3SW5DaGF0L3NyY1xcYXBwXFxwYWdlc1xcdmlkZW9cXG90bXZpZGVvXFxvdG12aWRlby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvdmlkZW8vb3RtdmlkZW8vb3RtdmlkZW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdmlkZW8vb3RtdmlkZW8vb3RtdmlkZW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFydGljaXBhbnRvdG0ge1xyXG4gICAgaGVpZ2h0OiAxMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0MjNhM2E7XHJcbn1cclxuXHJcbiIsIi5wYXJ0aWNpcGFudG90bSB7XG4gIGhlaWdodDogMTMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzQyM2EzYTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/video/otmvideo/otmvideo.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/video/otmvideo/otmvideo.component.ts ***!
    \************************************************************/

  /*! exports provided: OtmvideoComponent */

  /***/
  function srcAppPagesVideoOtmvideoOtmvideoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OtmvideoComponent", function () {
      return OtmvideoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var OtmvideoComponent = /*#__PURE__*/function () {
      function OtmvideoComponent() {
        _classCallCheck(this, OtmvideoComponent);
      }

      _createClass(OtmvideoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OtmvideoComponent;
    }();

    OtmvideoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-otmvideo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./otmvideo.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/video/otmvideo/otmvideo.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./otmvideo.component.scss */
      "./src/app/pages/video/otmvideo/otmvideo.component.scss"))["default"]]
    })], OtmvideoComponent);
    /***/
  },

  /***/
  "./src/app/pages/video/videosession/videosession.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/video/videosession/videosession.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesVideoVideosessionVideosessionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".popover-content {\n  overflow-y: scroll;\n  max-height: 60%;\n}\n\n.videosection {\n  height: 55vh;\n}\n\n.chatsection {\n  height: 55vh;\n}\n\n.notessection {\n  height: 29vh !important;\n  max-height: 29vh !important;\n  overflow-y: auto !important;\n}\n\n.chatshistory {\n  height: 30vh;\n  overflow-y: auto;\n}\n\n/*css form chat grid*/\n\n.chat-segment-sent .chat-message {\n  background: #351E58;\n  border-radius: 10px 10px 0px 10px;\n  color: #fff;\n  text-align: left;\n  margin-bottom: 10px;\n}\n\n.other-chat-message {\n  position: relative;\n  left: 3.5rem;\n}\n\n.chat-message {\n  padding: 0.75rem 1rem;\n  border-radius: 0.625rem;\n  position: relative;\n  display: inline-block;\n  width: calc(100% - 35px);\n  margin-left: 5px;\n}\n\n.chat-segment-sent {\n  text-align: right;\n  position: relative;\n  margin: 0 0 -1.5rem 2rem;\n}\n\n.chat-message > p {\n  padding: 0.75rem 0 0;\n  margin: 0;\n  padding-top: 0px;\n}\n\n.chat-segment-get {\n  text-align: left;\n  position: relative;\n  margin: 0 2rem -1.5rem 0;\n}\n\n.chat-segment-get .chat-message {\n  background: #F2F4F7;\n  border-radius: 10px 10px 10px 0px;\n  color: rgba(0, 0, 0, 0.8);\n  text-align: left;\n}\n\n/*css form self chat message*/\n\n.chat-segment-sent .self-chat-message {\n  border-radius: 10px 10px 0px 10px;\n  color: #fff;\n  text-align: left;\n}\n\n.self-chat-message {\n  padding: 0.75rem 1rem;\n  border-radius: 0.625rem;\n  position: relative;\n  right: 3.5rem;\n  display: inline-block;\n  width: calc(100% - 45px);\n  margin-left: 5px;\n}\n\n.self-chat-message > p {\n  padding: 0.75rem 0 0;\n  margin: 0;\n  padding-top: 0px;\n  word-break: break-word !important;\n  overflow-wrap: break-word !important;\n}\n\n.chat-segment-get .self-chat-message {\n  background: #F2F4F7;\n  border-radius: 10px 10px 10px 0px;\n  color: rgba(0, 0, 0, 0.8);\n  text-align: left;\n  margin-bottom: 10px;\n}\n\n.otherChatUsers {\n  position: relative;\n  bottom: 3rem;\n}\n\n.chatUserName {\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.selfUser {\n  margin-left: 5px;\n  position: relative;\n  bottom: 3rem;\n}\n\n.send-message-container {\n  width: 100%;\n}\n\n.meeting_Room_Name {\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 21px;\n  margin-left: 4%;\n  background: lightgray;\n}\n\n.form-content-editable {\n  height: 60px;\n  max-height: 60px;\n  overflow-y: auto;\n}\n\n:focus {\n  outline: -webkit-focus-ring-color auto 0px;\n}\n\n.form-content-editable[contenteditable=true]:empty:not(:focus):before {\n  content: attr(data-placeholder);\n  color: #909090;\n}\n\n/* End */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmlkZW8vdmlkZW9zZXNzaW9uL0Q6XFxQcm9qZWN0c1xcVmlld0luQ2hhdC9zcmNcXGFwcFxccGFnZXNcXHZpZGVvXFx2aWRlb3Nlc3Npb25cXHZpZGVvc2Vzc2lvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvdmlkZW8vdmlkZW9zZXNzaW9uL3ZpZGVvc2Vzc2lvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENBO0VBQ0ksWUFBQTtBQ0VKOztBRENBO0VBQ0ksWUFBQTtBQ0VKOztBRENBO0VBQ0ksdUJBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0FDRUo7O0FEQ0E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURFQSxxQkFBQTs7QUFDQTtFQUNJLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQSw2QkFBQTs7QUFDQTtFQUNJLGlDQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0Esb0NBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksMENBQUE7QUNDSjs7QURFQTtFQUNJLCtCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBRENBLFFBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy92aWRlby92aWRlb3Nlc3Npb24vdmlkZW9zZXNzaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvcG92ZXItY29udGVudCB7XHJcbiAgICBvdmVyZmxvdy15IDogc2Nyb2xsO1xyXG4gICAgbWF4LWhlaWdodDogNjAlOyAgXHJcbn1cclxuLnZpZGVvc2VjdGlvbiB7XHJcbiAgICBoZWlnaHQ6IDU1dmg7XHJcbn1cclxuXHJcbi5jaGF0c2VjdGlvbiB7XHJcbiAgICBoZWlnaHQ6IDU1dmg7XHJcbn1cclxuXHJcbi5ub3Rlc3NlY3Rpb24ge1xyXG4gICAgaGVpZ2h0OiAyOXZoICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtaGVpZ2h0OiAyOXZoICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jaGF0c2hpc3Rvcnkge1xyXG4gICAgaGVpZ2h0OiAzMHZoO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuXHJcbi8qY3NzIGZvcm0gY2hhdCBncmlkKi9cclxuLmNoYXQtc2VnbWVudC1zZW50IC5jaGF0LW1lc3NhZ2Uge1xyXG4gICAgYmFja2dyb3VuZDogIzM1MUU1ODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMTBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5vdGhlci1jaGF0LW1lc3NhZ2Uge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMy41cmVtO1xyXG59XHJcblxyXG4uY2hhdC1tZXNzYWdlIHtcclxuICAgIHBhZGRpbmc6IC43NXJlbSAxcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjYyNXJlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzNXB4KTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5jaGF0LXNlZ21lbnQtc2VudCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMCAwIC0xLjVyZW0gMnJlbTtcclxufVxyXG5cclxuLmNoYXQtbWVzc2FnZT5wIHtcclxuICAgIHBhZGRpbmc6IC43NXJlbSAwIDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG59XHJcblxyXG4uY2hhdC1zZWdtZW50LWdldCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAwIDJyZW0gLTEuNXJlbSAwO1xyXG59XHJcblxyXG4uY2hhdC1zZWdtZW50LWdldCAuY2hhdC1tZXNzYWdlIHtcclxuICAgIGJhY2tncm91bmQ6ICNGMkY0Rjc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAwcHg7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuOCk7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4vKmNzcyBmb3JtIHNlbGYgY2hhdCBtZXNzYWdlKi9cclxuLmNoYXQtc2VnbWVudC1zZW50IC5zZWxmLWNoYXQtbWVzc2FnZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMHB4IDEwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5zZWxmLWNoYXQtbWVzc2FnZSB7XHJcbiAgICBwYWRkaW5nOiAuNzVyZW0gMXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IC42MjVyZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICByaWdodDogMy41cmVtO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQ1cHgpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLnNlbGYtY2hhdC1tZXNzYWdlPnAge1xyXG4gICAgcGFkZGluZzogLjc1cmVtIDAgMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jaGF0LXNlZ21lbnQtZ2V0IC5zZWxmLWNoYXQtbWVzc2FnZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjJGNEY3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMHB4O1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjgpO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5vdGhlckNoYXRVc2VycyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IDNyZW07XHJcbn1cclxuXHJcbi5jaGF0VXNlck5hbWUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLnNlbGZVc2VyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IDNyZW07XHJcbn1cclxuXHJcbi5zZW5kLW1lc3NhZ2UtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWVldGluZ19Sb29tX05hbWUge1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0JTtcclxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcclxuICB9XHJcblxyXG4uZm9ybS1jb250ZW50LWVkaXRhYmxle1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgbWF4LWhlaWdodDogNjBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiAtd2Via2l0LWZvY3VzLXJpbmctY29sb3IgYXV0byAwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRlbnQtZWRpdGFibGVbY29udGVudGVkaXRhYmxlPXRydWVdOmVtcHR5Om5vdCg6Zm9jdXMpOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtcGxhY2Vob2xkZXIpO1xyXG4gICAgY29sb3I6ICM5MDkwOTA7XHJcbn1cclxuLyogRW5kICovIiwiLnBvcG92ZXItY29udGVudCB7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgbWF4LWhlaWdodDogNjAlO1xufVxuXG4udmlkZW9zZWN0aW9uIHtcbiAgaGVpZ2h0OiA1NXZoO1xufVxuXG4uY2hhdHNlY3Rpb24ge1xuICBoZWlnaHQ6IDU1dmg7XG59XG5cbi5ub3Rlc3NlY3Rpb24ge1xuICBoZWlnaHQ6IDI5dmggIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogMjl2aCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy15OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5jaGF0c2hpc3Rvcnkge1xuICBoZWlnaHQ6IDMwdmg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi8qY3NzIGZvcm0gY2hhdCBncmlkKi9cbi5jaGF0LXNlZ21lbnQtc2VudCAuY2hhdC1tZXNzYWdlIHtcbiAgYmFja2dyb3VuZDogIzM1MUU1ODtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAxMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLm90aGVyLWNoYXQtbWVzc2FnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMy41cmVtO1xufVxuXG4uY2hhdC1tZXNzYWdlIHtcbiAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzNXB4KTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmNoYXQtc2VnbWVudC1zZW50IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIDAgLTEuNXJlbSAycmVtO1xufVxuXG4uY2hhdC1tZXNzYWdlID4gcCB7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMCAwO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59XG5cbi5jaGF0LXNlZ21lbnQtZ2V0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgMnJlbSAtMS41cmVtIDA7XG59XG5cbi5jaGF0LXNlZ21lbnQtZ2V0IC5jaGF0LW1lc3NhZ2Uge1xuICBiYWNrZ3JvdW5kOiAjRjJGNEY3O1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAwcHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi8qY3NzIGZvcm0gc2VsZiBjaGF0IG1lc3NhZ2UqL1xuLmNoYXQtc2VnbWVudC1zZW50IC5zZWxmLWNoYXQtbWVzc2FnZSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5zZWxmLWNoYXQtbWVzc2FnZSB7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDMuNXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogY2FsYygxMDAlIC0gNDVweCk7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5zZWxmLWNoYXQtbWVzc2FnZSA+IHAge1xuICBwYWRkaW5nOiAwLjc1cmVtIDAgMDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbn1cblxuLmNoYXQtc2VnbWVudC1nZXQgLnNlbGYtY2hhdC1tZXNzYWdlIHtcbiAgYmFja2dyb3VuZDogI0YyRjRGNztcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMHB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ub3RoZXJDaGF0VXNlcnMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogM3JlbTtcbn1cblxuLmNoYXRVc2VyTmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnNlbGZVc2VyIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDNyZW07XG59XG5cbi5zZW5kLW1lc3NhZ2UtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tZWV0aW5nX1Jvb21fTmFtZSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjFweDtcbiAgbWFyZ2luLWxlZnQ6IDQlO1xuICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG59XG5cbi5mb3JtLWNvbnRlbnQtZWRpdGFibGUge1xuICBoZWlnaHQ6IDYwcHg7XG4gIG1heC1oZWlnaHQ6IDYwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbjpmb2N1cyB7XG4gIG91dGxpbmU6IC13ZWJraXQtZm9jdXMtcmluZy1jb2xvciBhdXRvIDBweDtcbn1cblxuLmZvcm0tY29udGVudC1lZGl0YWJsZVtjb250ZW50ZWRpdGFibGU9dHJ1ZV06ZW1wdHk6bm90KDpmb2N1cyk6YmVmb3JlIHtcbiAgY29udGVudDogYXR0cihkYXRhLXBsYWNlaG9sZGVyKTtcbiAgY29sb3I6ICM5MDkwOTA7XG59XG5cbi8qIEVuZCAqLyJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/video/videosession/videosession.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/video/videosession/videosession.component.ts ***!
    \********************************************************************/

  /*! exports provided: VideosessionComponent */

  /***/
  function srcAppPagesVideoVideosessionVideosessionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideosessionComponent", function () {
      return VideosessionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_constants_app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/constants/app.constants */
    "./src/app/constants/app.constants.ts");
    /* harmony import */


    var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/common.service */
    "./src/app/services/common.service.ts");
    /* harmony import */


    var twilio_video__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! twilio-video */
    "./node_modules/twilio-video/es5/index.js");
    /* harmony import */


    var twilio_video__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(twilio_video__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_app_services_videochat_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/services/videochat.service */
    "./src/app/services/videochat.service.ts");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! util */
    "./node_modules/util/util.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var ng_connection_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ng-connection-service */
    "./node_modules/ng-connection-service/fesm2015/ng-connection-service.js");
    /* harmony import */


    var angular2_uuid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! angular2-uuid */
    "./node_modules/angular2-uuid/index.js");
    /* harmony import */


    var angular2_uuid__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angular2_uuid__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

    var VideosessionComponent = /*#__PURE__*/function () {
      function VideosessionComponent(router, commonService, _http, renderer, cdr, activeroute, videoChatService, modalService, connectionService) {
        var _this10 = this;

        _classCallCheck(this, VideosessionComponent);

        this.router = router;
        this.commonService = commonService;
        this._http = _http;
        this.renderer = renderer;
        this.cdr = cdr;
        this.activeroute = activeroute;
        this.videoChatService = videoChatService;
        this.modalService = modalService;
        this.connectionService = connectionService;
        this.currentParticipent = null;
        this.isReadOnlyViewer = false;
        this.isHiddenParticipant = false;
        this.isInterviewer = false;
        this.isInterviewee = false;
        this.isMuted = false;
        this.screenTrack = null;
        this.totalParticipants = [];
        this.createRoomResponse = false;
        this.generalChannel = [{}];
        this.time = 0;
        this.sessionID = '';
        this.count = 0;
        this.chatLoader = false;
        this.status = 'ONLINE';
        this.isConnected = true;
        this.bookingID = 1;
        this.primaryCameraEnabled = true;
        this.fileToUpload = null;

        this.getSessionByID = function (id) {
          var _this = _this10;
          return new Promise(function (resolve, reject) {
            _this.commonService.getCall(src_app_constants_app_constants__WEBPACK_IMPORTED_MODULE_4__["ApiUrls"].GetSessionDetailForVideoCall + '?ID=' + id).subscribe(function (response) {
              resolve(response);
            }, function (error) {
              console.error('Error occoured while getting interview detial (GetInterviewDetailForVideoCall)', error);
              reject(null);
            });
          });
        };

        this.getInitials = function (name) {
          if (!!name) {
            var initialsArray = name.split(' ');
            var initials = !!initialsArray[0] ? initialsArray[0][0] : '';
            initials += !!initialsArray[1] ? initialsArray[1][0] : '';
            return initials;
          } else {
            return '';
          }
        };

        this.shareScreenHandler = function () {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this10, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _that;

            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _that = this;

                    if (!this.screenTrack) {
                      this.commonService.showDecisionAlert(function () {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                          return regeneratorRuntime.wrap(function _callee6$(_context6) {
                            while (1) {
                              switch (_context6.prev = _context6.next) {
                                case 0:
                                  navigator.mediaDevices.getDisplayMedia().then(function (displayMediaStream) {
                                    jquery__WEBPACK_IMPORTED_MODULE_7___default()(document.getElementById('screenShareBtn')).toggleClass('active-btn').toggleClass('btn-light');
                                    _that.screenTrack = new twilio_video__WEBPACK_IMPORTED_MODULE_6__["LocalVideoTrack"](displayMediaStream.getTracks()[0]);

                                    _that.activeRoom.localParticipant.publishTrack(_that.screenTrack);

                                    _that.screenTrack.mediaStreamTrack.onended = function () {
                                      _that.stopScreenShare();
                                    };
                                  })["catch"](function (err) {
                                    alert('Could not share the screen.');
                                  });

                                case 1:
                                case "end":
                                  return _context6.stop();
                              }
                            }
                          }, _callee6);
                        }));
                      }, null, 'Are you sure?', 'You want to share your screen.');
                    } else {
                      _that.stopScreenShare();
                    }

                  case 2:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        };

        this.removeNavigation = function () {
          var header = document.getElementsByTagName('kt-header')[0];

          if (!!header) {
            header.remove();
          }

          var headerMobile = document.getElementsByTagName('kt-header-mobile')[0];

          if (!!headerMobile) {
            headerMobile.remove();
          }

          var aside = document.getElementsByTagName('kt-aside-left')[0];

          if (!!aside) {
            aside.remove();
          } // let wrapper = document.getElementById('kt_wrapper');
          // if (!!wrapper) {
          // 	this.renderer.setStyle(wrapper, 'padding', '0rem');
          // }

        };

        this.hideNavigation = function () {
          var header = document.getElementsByTagName('kt-header')[0];

          if (!!header) {
            _this10.renderer.setStyle(header, 'display', 'none');
          }

          var headerMobile = document.getElementsByTagName('kt-header-mobile')[0];

          if (!!header) {
            _this10.renderer.setStyle(headerMobile, 'display', 'none');
          }

          var aside = document.getElementsByTagName('kt-aside-left')[0];

          if (!!aside) {
            _this10.renderer.setStyle(aside, 'display', 'none');
          }
        };

        this.showNavigation = function () {
          var header = document.getElementsByTagName('kt-header')[0];

          if (!!header) {
            _this10.renderer.setStyle(header, 'display', 'block');
          }

          var headerMobile = document.getElementsByTagName('kt-header-mobile')[0];

          if (!!headerMobile) {
            _this10.renderer.setStyle(headerMobile, 'display', 'block');
          }

          var aside = document.getElementsByTagName('kt-aside-left')[0];

          if (!!aside) {
            _this10.renderer.setStyle(aside, 'display', 'block');
          } // let wrapper = document.getElementById('kt_wrapper');
          // if (!!wrapper) {
          // 	this.renderer.setStyle(wrapper, 'padding-left', '70px');
          // 	this.renderer.setStyle(wrapper, 'padding-top', '65px');
          // }

        };

        this.addRemoveUserInitials = function (identity, add) {
          var participantDetail = _this10.totalParticipants.filter(function (x) {
            return x.id == identity;
          })[0];

          if (participantDetail) {
            var initial = _this10.getInitials(participantDetail.participantName);
          }
        };

        this.muteOrUnmute = function () {
          if (_this10.activeRoom && _this10.activeRoom.localParticipant) {
            if (_this10.isMuted) {
              // unmute
              _this10.activeRoom.localParticipant.audioTracks.forEach(function (audioTrack) {
                audioTrack.track.enable();
              });
            } else {
              // mute
              _this10.activeRoom.localParticipant.audioTracks.forEach(function (audioTrack) {
                audioTrack.track.disable();
              });
            }

            _this10.isMuted = !_this10.isMuted;
          } else {
            console.error("Unable to find localParticipant to mute/unmute mic. !!!");
          }
        };

        this._clickHandler = this.onSendClick.bind(this); //this.checkIfInternetIsConnected();
      }

      _createClass(VideosessionComponent, [{
        key: "generateUUID",
        value: function generateUUID() {
          this.uuidValue = angular2_uuid__WEBPACK_IMPORTED_MODULE_12__["UUID"].UUID();
          return this.uuidValue;
        }
      }, {
        key: "checkIfInternetIsConnected",
        value: function checkIfInternetIsConnected() {
          var _this11 = this;

          this.connectionService.monitor().subscribe(function (isConnected) {
            _this11.isConnected = isConnected;

            if (_this11.isConnected) {
              _this11.status = 'ONLINE';
            } else {
              _this11.destroyLocalTracks();

              _this11.status = 'OFFLINE';

              _this11.renderer.addClass(_this11.gridContainer.nativeElement, 'd-none');

              var footerElement = document.getElementById('kt_footer');

              _this11.renderer.addClass(footerElement, 'd-none');

              var _this = _this11;

              _this11.commonService.showDecisionAlert(function () {
                location.reload();
              }, null, 'Connection lost!', 'You\'ve been disconnected. Please refresh the page to re-connect.', 'No', 'Refresh');
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          try {
            this.destroyLocalTracks();
            this.subscription.unsubscribe();
          } catch (ex) {
            console.log(ex.message);
          }
        } // jobToRunBeforeMinutesOfMeetingEnding() {
        //   var _that = this;
        //   var schedule = require('node-schedule');
        //   var j = schedule.scheduleJob(this.meetingEndDateTime.add(-5, 'minutes')._d, function () {
        //     _that.commonService.showWarningAlert("Only 5 minutes are left for your meeting time to end", "Time is running out", "Ok", true);
        //   });
        // }

      }, {
        key: "checkSessionStatus",
        value: function checkSessionStatus(response) {
          // session completed
          if (this.interview && this.interview.sessionDetail && this.interview.sessionDetail.fk_SessionStatusID == src_app_constants_app_constants__WEBPACK_IMPORTED_MODULE_4__["SessionStatus"].Completed) {
            this.commonService.hideLoader();
            this.router.navigate(['meeting-already-completed']);
            return false;
          } // session not scheduled


          if (!response.success || response.statusCode != 200 || !this.interview || !this.interview.sessionParticipants || this.interview.sessionParticipants.length == 0 || !this.interview.sessionDetail || this.interview.sessionDetail.fk_SessionStatusID != src_app_constants_app_constants__WEBPACK_IMPORTED_MODULE_4__["SessionStatus"].Scheduled) {
            this.commonService.hideLoader();
            this.router.navigate(['invalid-link']);
            return false;
          } // session cancelled


          if (this.interview.sessionDetail.fk_SessionStatusID == src_app_constants_app_constants__WEBPACK_IMPORTED_MODULE_4__["SessionStatus"].Cancelled) {
            this.commonService.hideLoader();
            this.router.navigate(['interview-canceled']);
            return false;
          }

          return true;
        }
      }, {
        key: "isUserAllowedToAccessLink",
        value: function isUserAllowedToAccessLink() {
          if (!this.currentParticipent) {
            this.commonService.hideLoader();
            this.router.navigate(['error/403']);
            return false;
          }

          return true;
        }
      }, {
        key: "open",
        value: function open(content) {
          var options = {
            size: 'lg',
            backdrop: 'static',
            centered: true
          };
          this.modalService.open(content, options);
        }
      }, {
        key: "join",
        value: function join() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var name, room, roomObject, user, userObject;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    this.sessionID = this.activeroute.snapshot.params.id;

                    if (!this.sessionID) {
                      _context8.next = 10;
                      break;
                    }

                    name = jquery__WEBPACK_IMPORTED_MODULE_7___default()("#enterName");
                    this.username = name.val();
                    localStorage.setItem("userName", name.val());
                    this.modalService.dismissAll();
                    _context8.next = 8;
                    return this.getVideoRoomInfo(this.sessionID);

                  case 8:
                    room = _context8.sent;

                    if (room) {
                      roomObject = {
                        sid: room.result.sid,
                        uniqueName: room.result.roomName
                      };
                      user = JSON.parse(localStorage.getItem("videoUserID"));

                      if (user) {
                        this.uuidValue = user.userID;
                      } else {
                        this.generateUUID();
                      }

                      userObject = {
                        userID: this.uuidValue,
                        userName: this.username
                      };
                      localStorage.setItem("videoUserID", JSON.stringify(userObject));
                      this.onRoomJoining(roomObject, roomObject.uniqueName, this.uuidValue);
                      this.getIdentity();
                    }

                  case 10:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    jquery__WEBPACK_IMPORTED_MODULE_7___default()("#clickMe").trigger("click");

                  case 1:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9);
          }));
        }
      }, {
        key: "getVideoRoomInfo",
        value: function getVideoRoomInfo(roomUID) {
          var _this = this;

          return new Promise(function (resolve, reject) {
            _this.commonService.getCall(src_app_constants_app_constants__WEBPACK_IMPORTED_MODULE_4__["ApiUrls"].GetVideoRoomInfo + '?roomUID=' + roomUID).subscribe(function (response) {
              resolve(response);
            }, function (error) {
              console.error('Error occoured while getting interview detial (GetInterviewDetailForVideoCall)', error);
              reject(null);
            });
          });
        } //#region Camera Events

      }, {
        key: "onRoomJoining",
        value: function onRoomJoining(room, roomName, identity) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var _this12 = this;

            var tracks;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    if (!roomName) {
                      _context10.next = 13;
                      break;
                    }

                    this.activeRoom = room;
                    this.camera.finalizePreview();
                    tracks = [];
                    _context10.next = 6;
                    return this.camera.showPreviewCamera(this.camera.selfStream);

                  case 6:
                    tracks = _context10.sent;
                    _context10.next = 9;
                    return this.videoChatService.joinOrCreateRoom(roomName, tracks, identity);

                  case 9:
                    this.activeRoom = _context10.sent;

                    if (!!this.activeRoom) {
                      this.camera.initialize(this.activeRoom.participants);
                      this.registerRoomEvents();
                      this.addRemoveUserInitials(this.activeRoom.localParticipant.identity, true);
                      this.activeRoom.participants.forEach(function (p) {
                        return _this12.addRemoveUserInitials(p.identity, true);
                      });
                    }

                    this.commonService.hideLoader();
                    setTimeout(function () {
                      return _this12.startTimer();
                    }, 1000); // starting timer

                  case 13:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "registerRoomEvents",
        value: function registerRoomEvents() {
          var _that = this;

          _that.activeRoom.on('disconnected', function (room) {
            room.localParticipant.tracks.forEach(function (publication) {
              return _that.detachLocalTrack(publication.track);
            });
          }).on('participantConnected', function (participant) {
            var participantDetail; //participantDetail = _that.totalParticipants.filter(x => x.id == participant.identity)[0];

            _that.camera.add(participant, participant.identity); //_that.addRemoveUserInitials(participantDetail.id, true);

          }).on('participantDisconnected', function (participant) {
            //const participantDetail = _that.totalParticipants.filter(x => x.id == participant.identity)[0];
            _that.camera.remove(participant, participant.identity); //_that.addRemoveUserInitials(participantDetail.id, false);

          });
        }
      }, {
        key: "detachLocalTrack",
        value: function detachLocalTrack(track) {
          if (this.isDetachable(track)) {
            track.detach().forEach(function (el) {
              return el.remove();
            });
          }
        }
      }, {
        key: "isDetachable",
        value: function isDetachable(track) {
          return !!track && (track.detach !== undefined || track.detach !== undefined);
        }
      }, {
        key: "stopScreenShare",
        value: function stopScreenShare() {
          var _that = this;

          this.commonService.showDecisionAlert(function () {
            _that.activeRoom.localParticipant.unpublishTrack(_that.screenTrack);

            _that.screenTrack.stop();

            _that.screenTrack = null;
            jquery__WEBPACK_IMPORTED_MODULE_7___default()(document.getElementById('screenShareBtn')).toggleClass('active-btn').toggleClass('btn-light');
          }, null, 'Are you sure?', 'You want to stop sharing your screen.');
        }
      }, {
        key: "updateVideoDevice",
        value: function updateVideoDevice(cameraTrack) {
          var _that = this;

          Object(twilio_video__WEBPACK_IMPORTED_MODULE_6__["createLocalVideoTrack"])({
            deviceId: {
              exact: cameraTrack.deviceId
            }
          }).then(function (localVideoTrack) {
            _that.cdr.detectChanges();

            var track = _that.activeRoom.localParticipant.videoTracks.values().next().value.track;

            console.log("current user device tracks " + track);

            _that.activeRoom.localParticipant.unpublishTrack(track);

            _that.detachLocalTrack(track);

            _that.activeRoom.localParticipant.publishTrack(localVideoTrack);

            console.log("device to attach tracks " + JSON.stringify(cameraTrack));

            _that.camera.initializePreview(cameraTrack, _that.camera.selfStream, true);

            _that.cdr.detectChanges();
          });
        }
      }, {
        key: "flipCamera",
        value: function flipCamera() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var _that;

            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _that = this;
                    _that.isFlipped = true;
                    _context11.next = 4;
                    return navigator.mediaDevices.getUserMedia({
                      audio: true,
                      video: true
                    }).then(function (stream) {
                      _that.videoDeviceLabel = stream.getTracks().filter(function (x) {
                        return x.kind == 'video';
                      })[0].label;
                      console.log("Primary user device " + _that.videoDeviceLabel);

                      _that.cdr.detectChanges();
                    });

                  case 4:
                    window.navigator.mediaDevices.enumerateDevices().then(function (devices) {
                      var allVideoDevices = devices.filter(function (x) {
                        return x.kind == 'videoinput';
                      });

                      if (allVideoDevices.length > 1) {
                        var camera = null;

                        if (!Object(util__WEBPACK_IMPORTED_MODULE_10__["isNullOrUndefined"])(_that.videoDeviceLabel) && !_that.primaryCameraEnabled) {
                          camera = allVideoDevices.filter(function (x) {
                            return x.label == _that.videoDeviceLabel;
                          })[0];
                        }

                        if (_that.primaryCameraEnabled) {
                          camera = allVideoDevices.filter(function (x) {
                            return x.label != _that.videoDeviceLabel;
                          })[0];
                        }

                        console.log("selected user device " + JSON.stringify(camera));
                        _that.primaryCameraEnabled = !_that.primaryCameraEnabled;

                        _that.cdr.detectChanges();

                        _that.updateVideoDevice(camera);
                      } else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                          title: 'Flip not allowed',
                          text: "Not enought Video Devices connected",
                          icon: 'warning'
                        });
                      }
                    });

                  case 5:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "leaveRoom",
        value: function leaveRoom() {
          var _that = this;

          _that.onCompletionOfSession();

          _that.commonService.showSuccessAlert("Meeting ended");

          _that.router.navigate(['meeting-ended']);
        }
      }, {
        key: "onCompletionOfSession",
        value: function onCompletionOfSession() {
          var _that = this;

          _that.display = '00:00:00';

          _that.pauseTimer();

          _that.activeRoom.disconnect();

          _that.destroyLocalTracks();
        }
      }, {
        key: "destroyLocalTracks",
        value: function destroyLocalTracks() {
          var _this13 = this;

          if (this.activeRoom && this.activeRoom.localParticipant && this.activeRoom.localParticipant.tracks) {
            this.activeRoom.localParticipant.tracks.forEach(function (t) {
              _this13.detachLocalTrack(t.track);

              _this13.activeRoom.localParticipant.unpublishTrack(t.track);

              t.track.stop();
              t.track.disable();
            });
          } // this.activeRoom.disconnect()

        } //#endregion
        //#region elapsed time

      }, {
        key: "startTimer",
        value: function startTimer() {
          var _this14 = this;

          this.interval = setInterval(function () {
            _this14.display = _this14.transform(_this14.time++);

            _this14.cdr.detectChanges();
          }, 1000);
        }
      }, {
        key: "transform",
        value: function transform(value) {
          var sec_num = value;
          var hours = Math.floor(sec_num / 3600);
          var minutes = Math.floor((sec_num - hours * 3600) / 60);
          var seconds = sec_num - hours * 3600 - minutes * 60;

          if (hours < 10 && minutes < 10 && seconds < 10) {
            return '0' + hours + ':' + '0' + minutes + ':' + '0' + seconds;
          } else if (hours < 10 && minutes < 10) {
            return '0' + hours + ':' + '0' + minutes + ':' + seconds;
          } else if (hours < 10) {
            return '0' + hours + ':' + minutes + ':' + seconds;
          } else {
            return hours + ':' + minutes + ':' + seconds;
          }
        }
      }, {
        key: "pauseTimer",
        value: function pauseTimer() {
          clearInterval(this.interval);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    this.hideNavigation();

                    if (this.sendButton) {
                      this.sendButton.nativeElement.addEventListener('click', this._clickHandler);
                    }

                  case 2:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        } //#endregion elapsed time
        //#region chat
        // Helper function to print info messages to the chat window

      }, {
        key: "print",
        value: function print(infoMessage, asHtml) {
          try {
            var element = document.createElement('div');
            element.setAttribute('class', 'info');
            element.setAttribute('style', 'color:Black,background-color:white');

            if (asHtml) {
              element.innerHTML = infoMessage;
            } else {
              element.innerText = infoMessage;
            }

            this.$chatWindow.nativeElement.append(element);
          } catch (ex) {
            console.log("PE: ".concat(ex.message));
          }
        }
      }, {
        key: "generateHtmlByMediaType",
        value: function generateHtmlByMediaType(message) {
          var html;

          if (this.currentMessage.media.state.contentType == 'image/jpeg') {
            html = "<div class=\"self-chat-message\" style=\"text-align: right\">\n<img id=\"messages\" src=\"".concat(message, "\" height=\"250px;\" width=\"250px;\">\n</div>");
          } else if (this.currentMessage.media.state.contentType == 'application/msword' || this.currentMessage.media.state.contentType == 'application/msword' || this.currentMessage.media.state.contentType == 'application/octet-stream') {
            html = "<div class=\"self-chat-message\" style=\"text-align: right\">\n<p id=\"messages\"><a class=\"cursor-pointer\" href=\"".concat(message, "\" target=\"_blank\"><i class=\"fas fa-file-word\" style=\"font-size:100px; color:#0078d4\"></i></a></p>\n</div>");
          } else if (this.currentMessage.media.state.contentType == 'application/pdf') {
            html = "<div class=\"self-chat-message\" style=\"text-align: right\">\n<p id=\"messages\"><a class=\"cursor-pointer\" href=\"".concat(message, "\" target=\"_blank\" style=\"color: white;\"><i class=\"fas fa-file-pdf\" style=\"font-size:100px; color:#AA0000\"></i></a></p>\n</div>");
          } else if (this.currentMessage.media.state.contentType == 'application/vnd.ms-excel' || this.currentMessage.media.state.contentType == 'application/vnd.ms-exce' || this.currentMessage.media.state.contentType == 'application/vnd.ms-excel' || this.currentMessage.media.state.contentType == 'application/vnd.ms-excel' || this.currentMessage.media.state.contentType == 'application/vnd.ms-excel' || this.currentMessage.media.state.contentType == 'application/vnd.ms-excel') {
            html = "<div class=\"self-chat-message\" style=\"text-align: right\">\n<p id=\"messages\"><a class=\"cursor-pointer\" href=\"".concat(message, "\" target=\"_blank\" style=\"color: white;\"><i class=\"fas fa-file-excel\" style=\"font-size:100px; color:#007c00\"></i></a></p>\n</div>");
          } else if (this.currentMessage.media.state.contentType == 'application/vnd.ms-powerpoint' || this.currentMessage.media.state.contentType == 'application/vnd.ms-powerpoint' || this.currentMessage.media.state.contentType == 'application/vnd.ms-powerpoint') {
            html = "<div class=\"self-chat-message\" style=\"text-align: right\">\n<p id=\"messages\"><a class=\"cursor-pointer\" href=\"".concat(message, "\" target=\"_blank\" style=\"color: white;\"><i class=\"fas fa-file-powerpoint\" style=\"font-size:100px; color:#d7461a\"></i></a></p>\n</div>");
          } else if (this.currentMessage.media.state.contentType == 'text/plain') {
            html = "<div class=\"self-chat-message\" style=\"text-align: right\">\n<p id=\"messages\"><a class=\"cursor-pointer\" href=\"".concat(message, "\" target=\"_blank\" style=\"color: white;\"><i class=\"fas fa-file-alt\" style=\"font-size:100px; color:#e1f2f9\"></i></a></p>\n</div>");
          } else if (this.currentMessage.media.state.contentType == 'application/zip' || this.currentMessage.media.state.contentType == 'application/x-zip-compressed') {
            html = "<div class=\"self-chat-message\" style=\"text-align: right\">\n<p id=\"messages\"><a class=\"cursor-pointer\" href=\"".concat(message, "\" target=\"_blank\" style=\"color: white;\"><i class=\"fas fa-file-archive\" style=\"font-size:100px; color:#f3b83f\"></i></a></p>\n</div>");
          } else {
            html = "<div class=\"self-chat-message\" style=\"text-align: right\">\n<p id=\"messages\"><a class=\"cursor-pointer\" href=\"".concat(message, "\" target=\"_blank\" style=\"color: white;\"><i class=\"fas fa-file-alt\" style=\"font-size:100px; color:#e1f2f9\"></i></a></p>\n</div>");
          }

          return html;
        }
      }, {
        key: "returnSentMessageHtml",
        value: function returnSentMessageHtml(message, name) {
          var html;

          if (this.currentMessage.type === 'media') {
            html = "<div class=\"chat-segment chat-segment-sent\">\n".concat(this.generateHtmlByMediaType(message), "\n<span class=\"btn btn-primary rounded-circle btn-icon chatUsers selfUser\"><span class=\"chatUserName\">").concat(name, "</span></span>\n</div>");
          } else {
            html = "<div class=\"chat-segment chat-segment-sent\">\n<div class=\"self-chat-message bg-primary\">\n<p id=\"messages\">".concat(message, "</p>\n</div>\n<span class=\"btn btn-primary rounded-circle btn-icon chatUsers selfUser\"><span class=\"chatUserName\">").concat(name, "</span></span>\n</div>");
          }

          return html;
        }
      }, {
        key: "returnGetMessageHtml",
        value: function returnGetMessageHtml(message, name) {
          var html;

          if (this.currentMessage.type === 'media') {
            html = "<div class=\"chat-segment chat-segment-get\">\n<div class=\"chat-message other-chat-message\">\n".concat(this.generateHtmlByMediaType(message), "\n</div>\n<span class=\"btn btn-icon btn-dark rounded-circle chatUsers otherChatUsers\"><span class=\"chatUserName\">").concat(name, "</span></span>\n</div>");
          } else {
            html = "<div class=\"chat-segment chat-segment-get\">\n<div class=\"chat-message other-chat-message\">\n<p id=\"messages\">".concat(message, "</p>\n</div>\n<span class=\"btn btn-icon btn-dark rounded-circle chatUsers otherChatUsers\"><span class=\"chatUserName\">").concat(name, "</span></span>\n</div>");
          }

          return html;
        } // Helper function to print chat message to the chat window

      }, {
        key: "printMessage",
        value: function printMessage(fromUser, message) {
          var user = JSON.parse(localStorage.getItem("videoUserID"));
          var namesArr = user.userName.split(' ');
          var name = namesArr && namesArr[0] ? namesArr[0][0] : '';
          name += namesArr && namesArr[1] ? namesArr[1][0] : '';

          if (fromUser == user.userID) {
            var html = this.returnSentMessageHtml(message, name);
            var div = document.createElement('div');
            div.innerHTML = html.trimLeft();
            div.innerHTML = div.innerHTML.trimRight();
            this.chatcontainer.nativeElement.appendChild(div.firstChild);
          } else {
            var _html = this.returnGetMessageHtml(message, "U2");

            var _div = document.createElement('div');

            _div.innerHTML = _html.trimLeft();
            _div.innerHTML = _div.innerHTML.trimRight();
            this.chatcontainer.nativeElement.appendChild(_div.firstChild);
          }

          jquery__WEBPACK_IMPORTED_MODULE_7___default()('#scrollDiv').scrollTop(jquery__WEBPACK_IMPORTED_MODULE_7___default()('#scrollDiv')[0].scrollHeight);
          this.chatLoader = false;
        } // Get an access token for the current user, passing a username (identity)

      }, {
        key: "getIdentity",
        value: function getIdentity() {
          var user = JSON.parse(localStorage.getItem("videoUserID"));

          var _that = this;

          _that._http.get("".concat(src_app_constants_app_constants__WEBPACK_IMPORTED_MODULE_4__["ApiUrls"].Token, "/").concat(encodeURIComponent(user.userID))).subscribe(function (response) {
            if (!!response) {
              _that.username = user.userID;
              _that.token = response.token; // Initialize the Chat client

              var Chat = __webpack_require__(
              /*! twilio-chat */
              "./node_modules/twilio-chat/browser/index.js");

              Chat.Client.create(_that.token).then(function (client) {
                _that.chatClient = client;

                _that.chatClient.getSubscribedChannels().then(_that.createOrJoinGeneralChannel());

                _that.chatClient.on('tokenAboutToExpire', function () {
                  _that.refreshToken(_that.token);
                }); // if the access token already expired, refresh it


                _that.chatClient.on('tokenExpired', function () {
                  _that.refreshToken(_that.token);
                });
              });
            } else {
              _that.commonService.showErrorAlert('Unable to connect to chat session', 'Chat Error!');
            }
          }, function (error) {
            console.log(error);

            _that.getIdentity(); //_that.commonService.showErrorAlert(error, 'Chat Error!');

          });
        } // Create or join a channel (general) for chat

      }, {
        key: "createOrJoinGeneralChannel",
        value: function createOrJoinGeneralChannel() {
          // Get the general chat channel, which is where all the messages are
          var _that = this;

          this.chatClient.getChannelByUniqueName(this.sessionID.trim()).then(function (channel) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      //await _that.videoChatService.updateSessionChatRoomSID({ SessionID: _that.interviewID, ChatChannelSID: channel.sid });
                      _that.generalChannel = channel;

                      _that.setupChannel();

                    case 2:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13);
            }));
          })["catch"](function (error) {
            // If it doesn't exist, let's create it
            _that.createAChannel();
          });
        }
      }, {
        key: "createAChannel",
        value: function createAChannel() {
          var _that = this;

          _that.chatClient.createChannel({
            uniqueName: _that.sessionID,
            friendlyName: 'Meeting Chat Channel'
          }).then(function (channel) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      //await _that.videoChatService.updateSessionChatRoomSID({ SessionID: _that.interviewID, ChatChannelSID: channel.sid });
                      _that.generalChannel = channel;

                      _that.setupChannel(); // _that.defaultMessage.nativeElement.innerText = 'Connected to the Room...';


                    case 2:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14);
            }));
          })["catch"](function (channel) {
            _that.createAChannel(); //_that.commonService.showErrorAlert('We\'re not able to connect to the chat session', 'Chat Error!');
            // _that.defaultMessage.nativeElement.innerText = 'Connecting to the Room...';

          });
        }
      }, {
        key: "refreshToken",
        value: function refreshToken(identity) {
          var _this15 = this;

          // Make a secure request to your backend to retrieve a refreshed access token.
          // Use an authentication mechanism to prevent token exposure to 3rd parties.
          this._http.get("".concat(src_app_constants_app_constants__WEBPACK_IMPORTED_MODULE_4__["ApiUrls"].Token)).subscribe(function (response) {
            _this15.chatClient.updateToken(response.token);

            _this15.username = response.token;
          }, function (error) {
            return error;
          });
        } // Set up channel after it has been found

      }, {
        key: "setupChannel",
        value: function setupChannel() {
          // Join the general channel
          var _that = this;

          this.generalChannel.join().then(function (channel) {})["catch"](function (err) {
            console.log('Chat Room Already Joined');
          }); // Get Messages for a previously created channel

          _that.generalChannel.getMessages().then(function (messages) {
            var totalMessages = messages.items.length;

            for (var i = 0; i < totalMessages; i++) {
              var message = messages.items[i];
              console.log('Author:' + message.author);
            }

            console.log('Total Messages:' + totalMessages);
          }); // Listen for new messages sent to the channel


          _that.generalChannel.on('messageAdded', function (message) {
            if (_that.count == 0) {
              _that.generalChannel.getMessages().then(function (messagesPaginator) {
                // check the first message type
                _that.currentMessage = messagesPaginator.items[messagesPaginator.items.length - 1];

                if (_that.currentMessage.type === 'media') {
                  _that.count++;

                  _that.currentMessage.media.getContentTemporaryUrl().then(function (url) {
                    // log media temporary URL
                    _that.chatURL = url;

                    _that.printMessage(message.author, _that.chatURL);

                    _that.chatURL = null;
                    _that.currentMessage = null;
                    _that.fileToUpload = null;
                    _that.file.nativeElement.value = null;
                  });
                } else {
                  _that.printMessage(message.author, message.body);

                  if (!Object(util__WEBPACK_IMPORTED_MODULE_10__["isNullOrUndefined"])(_that.fileToUpload)) {
                    var formData = new FormData();
                    formData.append('file', _that.fileToUpload);

                    _that.generalChannel.sendMessage(formData);

                    event.preventDefault();
                    _that.chatinput.nativeElement.innerHTML = null;
                  }
                }
              });
            } else {
              _that.printMessage(message.author, message.body);
            }
          }); //     // Listen for members joining a channel


          _that.generalChannel.on('memberJoined', function (member) {
            console.log('member joined');
          }); // Listen for members user info changing


          _that.generalChannel.on('memberInfoUpdated', function (member) {
            console.log('member information updated');
          }); // Listen for members leaving a channel


          _that.generalChannel.on('memberLeft', function (member) {
            console.log('member left');
          }); // Listen for members typing


          _that.generalChannel.on('typingStarted', function (member) {
            console.log('member started typing');
          }); // Listen for members typing


          _that.generalChannel.on('typingEnded', function (member) {
            console.log('member typing ended');
          });
        }
      }, {
        key: "handleFileInput",
        value: function handleFileInput(files) {
          this.fileToUpload = files.item(0);
        } // Send a new message to the general channel

      }, {
        key: "sendChat",
        value: function sendChat(event) {
          var _that = this;

          _that.count = 0;

          if (event.keyCode === 13 && !event.shiftKey) {
            if (_that.generalChannel === undefined) {
              _that.print('The Chat Service is not configured. Please contact support.', false);

              this.chatLoader = false;
              return;
            }

            if (_that.chatinput.nativeElement.innerText.length > 0) {
              _that.generalChannel.sendMessage(_that.chatinput.nativeElement.innerText);

              event.preventDefault();
              _that.chatinput.nativeElement.innerHTML = null;
            } else if (_that.fileToUpload != null) {
              this.chatLoader = true;
              var formData = new FormData();
              formData.append('file', _that.fileToUpload);

              _that.generalChannel.sendMessage(formData);

              event.preventDefault();
              _that.chatinput.nativeElement.innerHTML = null;
            }
          }
        }
      }, {
        key: "onSendClick",
        value: function onSendClick(event) {
          var _that = this;

          _that.count = 0;

          if (_that.generalChannel === undefined) {
            _that.print('The Chat Service is not configured. Please contact support.', false);

            this.chatLoader = false;
            return;
          }

          if (_that.chatinput.nativeElement.innerText.trim().length > 0) {
            _that.generalChannel.sendMessage(_that.chatinput.nativeElement.innerText.trim());

            event.preventDefault();
            _that.chatinput.nativeElement.innerHTML = null;
          } else if (_that.fileToUpload != null) {
            this.chatLoader = true;
            var formData = new FormData();
            formData.append('file', _that.fileToUpload);

            _that.generalChannel.sendMessage(formData);

            event.preventDefault();
            _that.chatinput.nativeElement.innerHTML = null;
          }
        }
      }]);

      return VideosessionComponent;
    }();

    VideosessionComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: src_app_services_videochat_service__WEBPACK_IMPORTED_MODULE_9__["VideochatService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModal"]
      }, {
        type: ng_connection_service__WEBPACK_IMPORTED_MODULE_11__["ConnectionService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('chatcontainer', {
      "static": false
    })], VideosessionComponent.prototype, "chatcontainer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('gridContainer', {
      "static": false
    })], VideosessionComponent.prototype, "gridContainer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('camera', {
      "static": false
    })], VideosessionComponent.prototype, "camera", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('messages', {
      "static": false
    })], VideosessionComponent.prototype, "$chatWindow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('chatinput', {
      "static": false
    })], VideosessionComponent.prototype, "chatinput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('notesinput', {
      "static": false
    })], VideosessionComponent.prototype, "notesinput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('sendButton', {
      "static": false
    })], VideosessionComponent.prototype, "sendButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('defaultMessage', {
      "static": false
    })], VideosessionComponent.prototype, "defaultMessage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('gridContent', {
      "static": false
    })], VideosessionComponent.prototype, "gridContent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('users', {
      "static": false
    })], VideosessionComponent.prototype, "users", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('file', {
      "static": false
    })], VideosessionComponent.prototype, "file", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('clickButton', {
      "static": false
    })], VideosessionComponent.prototype, "clickButton", void 0);
    VideosessionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-videosession',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./videosession.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/video/videosession/videosession.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./videosession.component.scss */
      "./src/app/pages/video/videosession/videosession.component.scss"))["default"]]
    })], VideosessionComponent);
    /***/
  },

  /***/
  "./src/app/services/common.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/common.service.ts ***!
    \********************************************/

  /*! exports provided: CommonService */

  /***/
  function srcAppServicesCommonServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonService", function () {
      return CommonService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! util */
    "./node_modules/util/util.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _constants_app_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../constants/app.constants */
    "./src/app/constants/app.constants.ts");

    var CommonService = /*#__PURE__*/function () {
      function CommonService(http) {
        var _this16 = this;

        _classCallCheck(this, CommonService);

        this.http = http; // showSuccessAlert = async (text = 'Request completed!', title = 'Congratulations!') => {
        // 	Swal.fire({
        // 		icon: 'success',
        // 		title: title,
        // 		text: text,
        // 	});
        // }

        this.showSuccessAlert = function () {
          var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Request completed!';
          var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Congratulations!';
          var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this16, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                      icon: 'success',
                      title: title,
                      text: text
                    }).then(function () {
                      if (callback != null) callback();
                    });

                  case 1:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15);
          }));
        };
      }

      _createClass(CommonService, [{
        key: "getCallWithBody",
        value: function getCallWithBody(url) {
          var _this17 = this;

          var showloader = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var body = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          // if (showloader)
          // 	this.showLoader();
          return this.http.get(url + "?" + Object.keys(body).map(function (key) {
            return key + '=' + body[key];
          }).join('&')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (response) {//this.hideLoader();
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            _this17.hideLoader();

            return "e";
          }));
        }
      }, {
        key: "getCall",
        value: function getCall(url) {
          var _this18 = this;

          var showloader = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          // if (showloader) this.showLoader()
          return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (response) {//this.hideLoader();
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            _this18.hideLoader();

            return "e";
          }));
        }
      }, {
        key: "postCall",
        value: function postCall(url, body) {
          var _this19 = this;

          var showLoader = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          // if (showLoader)
          // 	this.showLoader();
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'content-type': 'application/json',
            'data-type': 'json',
            'UserTimeZone': new Date().getTimezoneOffset().toString()
          });
          return this.http.post(url, body, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (response) {//this.hideLoader();
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            _this19.hideLoader();

            return "e";
          }));
        }
      }, {
        key: "putCall",
        value: function putCall(url, body) {
          var _this20 = this;

          // this.showLoader();
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'content-type': 'application/json',
            'data-type': 'json'
          });
          return this.http.put(url, body, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (response) {//this.hideLoader();
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            _this20.hideLoader();

            return "e";
          }));
        }
      }, {
        key: "deleteCall",
        value: function deleteCall(url) {
          var _this21 = this;

          // this.showLoader();
          return this.http["delete"](url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (response) {
            if (response.success) {
              _this21.hideLoader();
            }

            _this21.hideLoader();
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            _this21.hideLoader();

            return "e";
          }));
        }
      }, {
        key: "showLoader",
        value: function showLoader() {
          var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Loading... please wait!";
          var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants_app_constants__WEBPACK_IMPORTED_MODULE_7__["OverlayStyles"].Transparent;
          jquery__WEBPACK_IMPORTED_MODULE_3___default()("#globalOverlayMsg").text(msg);
          jquery__WEBPACK_IMPORTED_MODULE_3___default()("#globalOverlayMsg").css("color", style.TextColor); // loader was not showing while modal is active, this is going to find maximum z-index and set +1 for overlay;

          var maxZ = Math.max.apply(null, //  https://stackoverflow.com/questions/1118198/how-can-you-figure-out-the-highest-z-index-in-your-document
          jquery__WEBPACK_IMPORTED_MODULE_3___default.a.map(jquery__WEBPACK_IMPORTED_MODULE_3___default()('body *'), function (e, n) {
            if (jquery__WEBPACK_IMPORTED_MODULE_3___default()(e).css('position') != 'static') return parseInt(jquery__WEBPACK_IMPORTED_MODULE_3___default()(e).css('z-index')) || 1;
          }));
          jquery__WEBPACK_IMPORTED_MODULE_3___default()('#globalOverlay').css('z-index', maxZ + 1); //resets z-index to 0 for all other

          jquery__WEBPACK_IMPORTED_MODULE_3___default()('#globalOverlay').css('position', "fixed");
          jquery__WEBPACK_IMPORTED_MODULE_3___default()('#globalOverlay').show();
          jquery__WEBPACK_IMPORTED_MODULE_3___default()("#globalOverlay").css("background-color", style.OverLayColor);
        }
      }, {
        key: "showDecisionAlert",
        value: function showDecisionAlert(yesCallBack) {
          var noCallBack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Are you sure?';
          var text = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'You want to perform this action';
          var noButtonText = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "No";
          var yesButtonText = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "Yes";

          var _icon = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : "warning";

          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: title,
            text: text,
            icon: _icon,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: yesButtonText,
            cancelButtonText: noButtonText
          }).then(function (result) {
            if (result.value) {
              if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(yesCallBack)) {
                yesCallBack();
              }
            } else {
              if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(noCallBack)) {
                noCallBack();
              }
            }
          });
        }
      }, {
        key: "showCustomAlert",
        value: function showCustomAlert(yesCallBack) {
          var noCallBack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Are you sure?';
          var text = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'You want to perform this action';
          var noButtonText = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "No";
          var yesButtonText = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "Yes";

          var _icon = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : "warning";

          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: title,
            text: text,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: yesButtonText,
            cancelButtonText: noButtonText
          }).then(function (result) {
            if (result.value) {
              if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(yesCallBack)) {
                yesCallBack();
              }
            } else {
              if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(noCallBack)) {
                noCallBack();
              }
            }
          });
        }
      }, {
        key: "showErrorAlert",
        value: function showErrorAlert() {
          var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Something went wrong!';
          var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Oops...';
          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            icon: 'error',
            title: title,
            text: text
          });
        }
      }, {
        key: "showWarningAlert",
        value: function showWarningAlert() {
          var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Something went wrong!';
          var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Oops...';
          var confirmButtonText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'OK';
          var showConfirmButton = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            icon: 'warning',
            title: title,
            html: text,
            confirmButtonText: confirmButtonText,
            showConfirmButton: showConfirmButton
          });
        }
      }, {
        key: "hideLoader",
        value: function hideLoader() {
          jquery__WEBPACK_IMPORTED_MODULE_3___default()('#globalOverlay').hide();
        }
      }, {
        key: "timeTo12HrFormat",
        value: function timeTo12HrFormat(time) {
          var time_part_array = time.split(":");
          var ampm = 'AM';

          if (time_part_array[0] >= 12) {
            ampm = 'PM';
          }

          if (time_part_array[0] > 12) {
            time_part_array[0] = time_part_array[0] - 12;
          }

          var formatted_time = time_part_array[0] + ':' + time_part_array[1] + ' ' + ampm;
          return formatted_time;
        }
      }, {
        key: "partition",
        value: function partition(arr, chunkSize) {
          var copy = _toConsumableArray(arr);

          var result = [];

          while (copy.length > 0) {
            var temp = copy.splice(0, chunkSize);
            result.push(temp);
          }

          return result;
        }
      }, {
        key: "extract24HTimeToProps",
        value: function extract24HTimeToProps(time) {
          var incrementHoursBy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var incrementMinutesBy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
          return {
            hour: parseInt(time.split(':')[0]) + incrementHoursBy,
            minute: parseInt(time.split(':')[1]) + incrementMinutesBy,
            second: 0
          };
        }
      }, {
        key: "array_move",
        value: function array_move(arr, old_index, new_index) {
          if (new_index >= arr.length) {
            var k = new_index - arr.length + 1;

            while (k--) {
              arr.push(undefined);
            }
          }

          arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
          return arr;
        }
      }, {
        key: "cloneObject",
        value: function cloneObject(obj) {
          if (null == obj || "object" != typeof obj) return obj;
          var copy = obj.constructor();

          for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
          }

          return copy;
        }
      }]);

      return CommonService;
    }();

    CommonService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], CommonService);
    /***/
  },

  /***/
  "./src/app/services/datetime.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/datetime.service.ts ***!
    \**********************************************/

  /*! exports provided: DatetimeService */

  /***/
  function srcAppServicesDatetimeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DatetimeService", function () {
      return DatetimeService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);

    var DatetimeService = /*#__PURE__*/function () {
      function DatetimeService() {
        _classCallCheck(this, DatetimeService);
      }

      _createClass(DatetimeService, [{
        key: "getCurrentDate",
        value: function getCurrentDate() {
          return localStorage.getItem('serverDateTime') ? localStorage.getItem('serverDateTime') : new Date();
        }
      }, {
        key: "setCurrentDate",
        value: function setCurrentDate(date) {
          localStorage.setItem('serverDateTime', date.toString());
        }
      }, {
        key: "formatDate",
        value: function formatDate(date) {
          var d = new Date(date),
              month = '' + (d.getMonth() + 1),
              day = '' + d.getDate(),
              year = d.getFullYear();
          if (month.length < 2) month = '0' + month;
          if (day.length < 2) day = '0' + day;
          return [year, month, day].join('-');
        }
      }, {
        key: "getValidDateTimeSlot",
        value: function getValidDateTimeSlot(date) {
          var m = moment__WEBPACK_IMPORTED_MODULE_2__(date);
          var serverDT = this.getCurrentDate();
          var isAfter = m.isAfter(serverDT);

          if (!isAfter) {
            date = serverDT;
            var start = moment__WEBPACK_IMPORTED_MODULE_2__(date);
            var remainder = 15 - start.minute() % 15;
            date = moment__WEBPACK_IMPORTED_MODULE_2__(start).add(remainder, "minutes").toDate();
          } else {
            date = moment__WEBPACK_IMPORTED_MODULE_2__(date);
          }

          return date;
        }
      }, {
        key: "isValidSlot",
        value: function isValidSlot(date) {
          var m = moment__WEBPACK_IMPORTED_MODULE_2__(date);
          var serverDT = moment__WEBPACK_IMPORTED_MODULE_2__(new Date(this.getCurrentDate()));
          return m.isAfter(serverDT);
        }
      }]);

      return DatetimeService;
    }();

    DatetimeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DatetimeService);
    /***/
  },

  /***/
  "./src/app/services/index.ts":
  /*!***********************************!*\
    !*** ./src/app/services/index.ts ***!
    \***********************************/

  /*! exports provided: InterceptService, authInterceptorProviders */

  /***/
  function srcAppServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _intercept_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./intercept.service */
    "./src/app/services/intercept.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "InterceptService", function () {
      return _intercept_service__WEBPACK_IMPORTED_MODULE_1__["InterceptService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "authInterceptorProviders", function () {
      return _intercept_service__WEBPACK_IMPORTED_MODULE_1__["authInterceptorProviders"];
    });
    /***/

  },

  /***/
  "./src/app/services/intercept.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/intercept.service.ts ***!
    \***********************************************/

  /*! exports provided: InterceptService, authInterceptorProviders */

  /***/
  function srcAppServicesInterceptServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InterceptService", function () {
      return InterceptService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "authInterceptorProviders", function () {
      return authInterceptorProviders;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js"); // Angular
    // import { AuthServiceSuzy } from '../../../auth/_services/auth.service';


    var InterceptService = /*#__PURE__*/function () {
      function InterceptService() {//

        _classCallCheck(this, InterceptService);
      } // intercept request and add token


      _createClass(InterceptService, [{
        key: "intercept",
        value: function intercept(request, next) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.handleAccess(request, next));
        }
      }, {
        key: "handleAccess",
        value: function handleAccess(request, next) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
            var _this22 = this;

            var token, isTokenExpire;
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    //
                    token = localStorage.getItem('access_token');
                    isTokenExpire = new Date().getTime() > new Date(localStorage.getItem('tokenExpiryTime')).getTime();

                    if (!token || isTokenExpire) {//await this.authServiceSuzy.authenticateInSuzyLive();
                    } //


                    token = localStorage.getItem('access_token');
                    request = request.clone({
                      headers: request.headers.set('Authorization_Garving', "Bearer " + token)
                    });
                    request = request.clone({
                      headers: request.headers.set('UserTimeZone', new Date().getTimezoneOffset().toString())
                    });
                    return _context16.abrupt("return", next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (x) {
                      return _this22.handleAuthError(x);
                    })).toPromise());

                  case 7:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16);
          }));
        }
      }, {
        key: "handleAuthError",
        value: function handleAuthError(err) {
          //handle your auth error or rethrow
          if (err.status === 401) {//navigate /delete cookies or whatever
            //this.oauthService.logout();
            // if you've caught / handled the error, you don't want to rethrow it unless you also want downstream consumers to have to handle it as well.
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
        }
      }]);

      return InterceptService;
    }();

    InterceptService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], InterceptService);
    var authInterceptorProviders = [{
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
      useClass: InterceptService,
      multi: true
    }];
    /***/
  },

  /***/
  "./src/app/services/storage.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/storage.service.ts ***!
    \*********************************************/

  /*! exports provided: StorageService */

  /***/
  function srcAppServicesStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StorageService", function () {
      return StorageService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var StorageService = /*#__PURE__*/function () {
      function StorageService() {
        _classCallCheck(this, StorageService);
      }

      _createClass(StorageService, [{
        key: "get",
        value: function get(key) {
          return localStorage.getItem(this.formatAppStorageKey(key));
        }
      }, {
        key: "set",
        value: function set(key, value) {
          if (value && value !== 'null') {
            localStorage.setItem(this.formatAppStorageKey(key), value);
          }
        }
      }, {
        key: "remove",
        value: function remove(key) {
          localStorage.removeItem(this.formatAppStorageKey(key));
        }
      }, {
        key: "formatAppStorageKey",
        value: function formatAppStorageKey(key) {
          return "iEvangelist.videoChat.".concat(key);
        }
      }]);

      return StorageService;
    }();

    StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], StorageService);
    /***/
  },

  /***/
  "./src/app/services/videochat.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/videochat.service.ts ***!
    \***********************************************/

  /*! exports provided: VideochatService */

  /***/
  function srcAppServicesVideochatServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideochatService", function () {
      return VideochatService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var twilio_video__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! twilio-video */
    "./node_modules/twilio-video/es5/index.js");
    /* harmony import */


    var twilio_video__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(twilio_video__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _constants_app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../constants/app.constants */
    "./src/app/constants/app.constants.ts");
    /* harmony import */


    var _common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./common.service */
    "./src/app/services/common.service.ts");

    var VideochatService = /*#__PURE__*/function () {
      function VideochatService(http, commonService) {
        var _this23 = this;

        _classCallCheck(this, VideochatService);

        this.http = http;
        this.commonService = commonService;
        this.roomBroadcast = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"]();

        this.createRoom = function (intervieweId) {
          var _this = _this23;
          return new Promise(function (resolve, reject) {
            var _this24 = this;

            _this.http.post("".concat(_constants_app_constants__WEBPACK_IMPORTED_MODULE_6__["ApiUrls"].CreateRoom, "/").concat(intervieweId), {}).subscribe(function (res) {
              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this24, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
                var ress;
                return regeneratorRuntime.wrap(function _callee17$(_context17) {
                  while (1) {
                    switch (_context17.prev = _context17.next) {
                      case 0:
                        _this.createRoomResponse = false;

                        if (!!res && res.statusCode == 200 && res.success) {
                          _this.room = res.result;
                          resolve(_this.room); //return _this.room;
                        } else if (!!res && res.statusCode == 400 && res.success == false) {
                          ress = res;
                          resolve(ress); //return ress;
                        } else if (!!res && res.statusCode == 404 && res.success == false) {
                          _this.commonService.showErrorAlert(res.message, 'An error has been occured!');

                          _this.createRoomResponse = true;
                          resolve(false);
                        }

                      case 2:
                      case "end":
                        return _context17.stop();
                    }
                  }
                }, _callee17);
              }));
            }, function (error) {
              console.error('Error While creating room (createRoom)', error);
              reject(false);
            });
          });
        };

        this.$roomsUpdated = this.roomBroadcast.asObservable();
      }

      _createClass(VideochatService, [{
        key: "updateSessionChatRoomSID",
        value: function updateSessionChatRoomSID(data) {
          var _this = this;

          return new Promise(function (resolve, reject) {
            _this.commonService.postCall("".concat(_constants_app_constants__WEBPACK_IMPORTED_MODULE_6__["ApiUrls"].UpdateSessionChatRoomSID), data).subscribe(function (res) {
              if (!!res.success && res.statusCode == 200) {
                resolve(res.result);
              } else {
                reject(null);
                console.error("Error while (UpdateSessionChatRoomSID)", res.statusCode, res.message);
              }
            }, function (error) {
              console.error("Error while (UpdateSessionChatRoomSID)", error);
              reject(null);
            });
          });
        }
      }, {
        key: "createRoomUID",
        value: function createRoomUID(roomName) {
          var _this = this;

          return new Promise(function (resolve, reject) {
            _this.commonService.postCall("".concat(_constants_app_constants__WEBPACK_IMPORTED_MODULE_6__["ApiUrls"].CreateRoomUID), roomName).subscribe(function (res) {
              if (!!res.success && res.statusCode == 200) {
                resolve(res.result);
              } else {
                reject(null);
                console.error("Error while (UpdateSessionChatRoomSID)", res.statusCode, res.message);
              }
            }, function (error) {
              console.error("Error while (UpdateSessionChatRoomSID)", error);
              reject(null);
            });
          });
        }
      }, {
        key: "getAuthToken",
        value: function getAuthToken(currentParticipantGuid) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    _context18.next = 2;
                    return this.http.get("".concat(_constants_app_constants__WEBPACK_IMPORTED_MODULE_6__["ApiUrls"].Token, "/").concat(currentParticipantGuid)).toPromise()["catch"](function (err) {
                      console.error(err);
                    });

                  case 2:
                    this.auth = _context18.sent;
                    return _context18.abrupt("return", this.auth.token);

                  case 4:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18, this);
          }));
        }
      }, {
        key: "getAllRooms",
        value: function getAllRooms() {
          return this.commonService.getCall(_constants_app_constants__WEBPACK_IMPORTED_MODULE_6__["ApiUrls"].Rooms).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {}));
        }
      }, {
        key: "joinOrCreateRoom",
        value: function joinOrCreateRoom(name, tracks, currentParticipantGuid) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
            var room, token;
            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    room = null;
                    _context19.prev = 1;
                    _context19.next = 4;
                    return this.getAuthToken(currentParticipantGuid);

                  case 4:
                    token = _context19.sent;
                    _context19.next = 7;
                    return Object(twilio_video__WEBPACK_IMPORTED_MODULE_5__["connect"])(token, {
                      name: name,
                      tracks: tracks,
                      dominantSpeaker: true,
                      record_participants_on_connect: false
                    });

                  case 7:
                    room = _context19.sent;
                    _context19.next = 14;
                    break;

                  case 10:
                    _context19.prev = 10;
                    _context19.t0 = _context19["catch"](1);
                    console.log(_context19.t0.message);
                    this.commonService.showWarningAlert("We???re unable to connect you to the meeting room. Please check your system media devices. Ensure that both microphone and camera are working properly and you have allowed the browser to use the media devices. <br> If you have any questions", "Unable to connect to meeting room!");

                  case 14:
                    _context19.prev = 14;

                    if (room) {
                      this.roomBroadcast.next(true);
                    }

                    return _context19.finish(14);

                  case 17:
                    return _context19.abrupt("return", room);

                  case 18:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19, this, [[1, 10, 14, 17]]);
          }));
        }
      }, {
        key: "nudge",
        value: function nudge() {
          this.roomBroadcast.next(true);
        }
      }]);

      return VideochatService;
    }();

    VideochatService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]
      }];
    };

    VideochatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], VideochatService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Projects\ViewInChat\src\main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** ws (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  2:
  /*!********************************!*\
    !*** xmlhttprequest (ignored) ***!
    \********************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map