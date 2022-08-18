/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/AguafinaScript-Regular.ttf */ "./src/fonts/AguafinaScript-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Raleway-VariableFont_wght.ttf */ "./src/fonts/Raleway-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, body, :root{\n    margin: 0;\n    padding: 0;\n    color: white;\n}\nhtml, body{\n    max-width: 100%;\n    overflow-x: hidden;\n}\n@font-face{\n    font-family: agua;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face{\n    font-family: rale;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n:root {\n    --font-color: #eee;\n    --font-color-dark: #aaa;\n    --border-color: #222;\n    --background-light: rgba(0, 0, 0, 0.6);\n    --background-light-hover: rgba(99, 99, 99, 0.4);\n    --background-dark: rgba(0, 0, 0, 0.9);\n}\nbody{\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    background: url(https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60);\n    background-repeat:repeat;\n    background-size: cover;\n    font-family: rale;\n}\n#content{\n    display: grid;\n    grid-template-columns:  repeat(2, 1fr); \n    grid-template-rows: 1fr 3fr 1fr;\n    height: 100vh;\n    font-size: 1.2em;\n}\n.header{\ngrid-row: 1;\ngrid-column: 1/3;\ndisplay: flex;\nalign-items: center;\nflex-direction: column;\nbackground-color: var(--background-dark);\npadding-bottom: 2rem;\n}\n.header > .name {\nfont-size: 6rem;\nmargin-bottom: 1rem;\nfont-family: agua;\n}\n.li{\n    text-decoration: none;\n    display: inline;\n    padding: 1rem 2rem 1rem 2rem;\n}\n.li:hover{\n    border-bottom: 1px solid salmon;\n}\n.body{\n    grid-row: 2/3;\n    grid-column: 1/3;\n    display: flex;\n    justify-content: center;\n}\n.body-content{\n    background-color: var(--background-light); \n    display: grid;\n    grid-template-columns: 1fr; \n    padding: 1rem;\n    margin: 4rem ;\n    border: 1px solid black;\n    border-radius: 3rem;\n}\n.body-content > div{\n    align-self: center;\n    display: flex;\n    justify-content: center;\n    margin: 0 4rem 0 0;\n    width: 100%;\n}\n.chef{\n    border: 1px solid black;\n    border-radius: 50%;\n    height: 80%;\n    width: 80%;\n    margin: 2rem 0 2rem 0;\n}\n.footer{\n    grid-column: 1/3;\n    background-color: var(--background-light);\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n}\n.menuGroup{\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); \n    background-color: var(--background-light);\n    margin: 4rem ;\n    width: 100%;\n    border: 1px solid black;\n    border-radius: 3rem;\n\n}\n.food-card{\n    margin: 2em;\n    background-color: var(--background-dark);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    padding: 1rem;\n}\n.food-card:hover{\n    box-shadow: 2px 2px 5px orange;\n}\n.button-nav{\n    cursor: pointer;\n}\n.main{\n    grid-column: 1/3;\n    display: flex;\n    justify-content: center;\n    padding: 2rem;\n}\n.copy{\n    padding: 3rem 3rem 0 3rem;\n}\n.caption{\n    padding: 0 3rem 3rem 3rem;\n}\n.contact{\n    background-color: var(--background-light);\n    width: 70%;\n    height: 70%;\n    display: grid;\n    grid-template-columns: 1fr; \n    margin: 6rem ;\n    border: 1px solid black;\n    border-radius: 5rem;\n\n}\n.food{\n    height: 10em;\n    width: 8em;\n    margin: 0 2rem 1rem 2rem;\n    border-radius: 3rem;\n    margin: 2em;\n}\n.phone{\n    display: flex;\n    padding: 1rem;\n}\n.layout{\n    display: flex;\n    flex-direction: column;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,YAAY;AAChB;AACA;IACI,eAAe;IACf,kBAAkB;AACtB;AACA;IACI,iBAAiB;IACjB,4CAA4C;AAChD;AACA;IACI,iBAAiB;IACjB,4CAA+C;AACnD;AACA;IACI,kBAAkB;IAClB,uBAAuB;IACvB,oBAAoB;IACpB,sCAAsC;IACtC,+CAA+C;IAC/C,qCAAqC;AACzC;AACA;IACI,aAAa;IACb,2DAA2D;IAC3D,uVAAuV;IACvV,wBAAwB;IACxB,sBAAsB;IACtB,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,sCAAsC;IACtC,+BAA+B;IAC/B,aAAa;IACb,gBAAgB;AACpB;AACA;AACA,WAAW;AACX,gBAAgB;AAChB,aAAa;AACb,mBAAmB;AACnB,sBAAsB;AACtB,wCAAwC;AACxC,oBAAoB;AACpB;AACA;AACA,eAAe;AACf,mBAAmB;AACnB,iBAAiB;AACjB;AACA;IACI,qBAAqB;IACrB,eAAe;IACf,4BAA4B;AAChC;AACA;IACI,+BAA+B;AACnC;AACA;IACI,aAAa;IACb,gBAAgB;IAChB,aAAa;IACb,uBAAuB;AAC3B;AACA;IACI,yCAAyC;IACzC,aAAa;IACb,0BAA0B;IAC1B,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,kBAAkB;IAClB,WAAW;AACf;AACA;IACI,uBAAuB;IACvB,kBAAkB;IAClB,WAAW;IACX,UAAU;IACV,qBAAqB;AACzB;AACA;IACI,gBAAgB;IAChB,yCAAyC;IACzC,aAAa;IACb,uBAAuB;IACvB,sBAAsB;IACtB,mBAAmB;IACnB,iBAAiB;IACjB,oBAAoB;AACxB;AACA;IACI,aAAa;IACb,2DAA2D;IAC3D,yCAAyC;IACzC,aAAa;IACb,WAAW;IACX,uBAAuB;IACvB,mBAAmB;;AAEvB;AACA;IACI,WAAW;IACX,wCAAwC;IACxC,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,aAAa;AACjB;AACA;IACI,8BAA8B;AAClC;AACA;IACI,eAAe;AACnB;AACA;IACI,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,aAAa;AACjB;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,yCAAyC;IACzC,UAAU;IACV,WAAW;IACX,aAAa;IACb,0BAA0B;IAC1B,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;AAEvB;AACA;IACI,YAAY;IACZ,UAAU;IACV,wBAAwB;IACxB,mBAAmB;IACnB,WAAW;AACf;AACA;IACI,aAAa;IACb,aAAa;AACjB;AACA;IACI,aAAa;IACb,sBAAsB;AAC1B","sourcesContent":["*, body, :root{\n    margin: 0;\n    padding: 0;\n    color: white;\n}\nhtml, body{\n    max-width: 100%;\n    overflow-x: hidden;\n}\n@font-face{\n    font-family: agua;\n    src: url(./fonts/AguafinaScript-Regular.ttf);\n}\n@font-face{\n    font-family: rale;\n    src: url(./fonts/Raleway-VariableFont_wght.ttf);\n}\n:root {\n    --font-color: #eee;\n    --font-color-dark: #aaa;\n    --border-color: #222;\n    --background-light: rgba(0, 0, 0, 0.6);\n    --background-light-hover: rgba(99, 99, 99, 0.4);\n    --background-dark: rgba(0, 0, 0, 0.9);\n}\nbody{\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    background: url(https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60);\n    background-repeat:repeat;\n    background-size: cover;\n    font-family: rale;\n}\n#content{\n    display: grid;\n    grid-template-columns:  repeat(2, 1fr); \n    grid-template-rows: 1fr 3fr 1fr;\n    height: 100vh;\n    font-size: 1.2em;\n}\n.header{\ngrid-row: 1;\ngrid-column: 1/3;\ndisplay: flex;\nalign-items: center;\nflex-direction: column;\nbackground-color: var(--background-dark);\npadding-bottom: 2rem;\n}\n.header > .name {\nfont-size: 6rem;\nmargin-bottom: 1rem;\nfont-family: agua;\n}\n.li{\n    text-decoration: none;\n    display: inline;\n    padding: 1rem 2rem 1rem 2rem;\n}\n.li:hover{\n    border-bottom: 1px solid salmon;\n}\n.body{\n    grid-row: 2/3;\n    grid-column: 1/3;\n    display: flex;\n    justify-content: center;\n}\n.body-content{\n    background-color: var(--background-light); \n    display: grid;\n    grid-template-columns: 1fr; \n    padding: 1rem;\n    margin: 4rem ;\n    border: 1px solid black;\n    border-radius: 3rem;\n}\n.body-content > div{\n    align-self: center;\n    display: flex;\n    justify-content: center;\n    margin: 0 4rem 0 0;\n    width: 100%;\n}\n.chef{\n    border: 1px solid black;\n    border-radius: 50%;\n    height: 80%;\n    width: 80%;\n    margin: 2rem 0 2rem 0;\n}\n.footer{\n    grid-column: 1/3;\n    background-color: var(--background-light);\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n}\n.menuGroup{\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); \n    background-color: var(--background-light);\n    margin: 4rem ;\n    width: 100%;\n    border: 1px solid black;\n    border-radius: 3rem;\n\n}\n.food-card{\n    margin: 2em;\n    background-color: var(--background-dark);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    padding: 1rem;\n}\n.food-card:hover{\n    box-shadow: 2px 2px 5px orange;\n}\n.button-nav{\n    cursor: pointer;\n}\n.main{\n    grid-column: 1/3;\n    display: flex;\n    justify-content: center;\n    padding: 2rem;\n}\n.copy{\n    padding: 3rem 3rem 0 3rem;\n}\n.caption{\n    padding: 0 3rem 3rem 3rem;\n}\n.contact{\n    background-color: var(--background-light);\n    width: 70%;\n    height: 70%;\n    display: grid;\n    grid-template-columns: 1fr; \n    margin: 6rem ;\n    border: 1px solid black;\n    border-radius: 5rem;\n\n}\n.food{\n    height: 10em;\n    width: 8em;\n    margin: 0 2rem 1rem 2rem;\n    border-radius: 3rem;\n    margin: 2em;\n}\n.phone{\n    display: flex;\n    padding: 1rem;\n}\n.layout{\n    display: flex;\n    flex-direction: column;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeContactPage": () => (/* binding */ initializeContactPage)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _icons_phone_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/phone.png */ "./src/icons/phone.png");
/* harmony import */ var _icons_home_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/home.png */ "./src/icons/home.png");




function contact() {
    const background = document.createElement("div")
    const titleDiv = document.createElement("div")
    const title = document.createElement("h1")
    const infoDiv = document.createElement("div")
    infoDiv.classList.add("layout")

    const phoneNumber = document.createElement("div")
    const phoneImg = document.createElement("img")
    const info = document.createElement("p")
    phoneImg.style.paddingRight = "1rem"

    const address = document.createElement("div")
    const locationImg = document.createElement("img")
    const infoTwo = document.createElement("p")
    locationImg.style.paddingRight = "1rem"
    background.appendChild(titleDiv)
    background.appendChild(infoDiv)
    titleDiv.appendChild(title)
    infoDiv.appendChild(phoneNumber)
    infoDiv.appendChild(address)
    phoneNumber.appendChild(phoneImg)
    phoneNumber.appendChild(info)
    address.appendChild(locationImg)
    address.appendChild(infoTwo)

    background.classList.add("body-content")
    phoneNumber.classList.add("phone")
    address.classList.add("phone")
    phoneImg.src = _icons_phone_png__WEBPACK_IMPORTED_MODULE_1__
    locationImg.src = _icons_home_png__WEBPACK_IMPORTED_MODULE_2__
    title.textContent = "Contact Us"
    info.textContent = "+2348165841808"
    info.style.paddingBottom = "1rem"
    infoTwo.textContent = "32, Larry Morgan avenue, Banana island Lagos"

    return background
}

function initializeContactPage() {
    const main = document.querySelector(".main")
    main.textContent = ""
    main.appendChild(contact())
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeHomePage": () => (/* binding */ initializeHomePage)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");

//import {foodDisplay} from "./menu";
//import {createFooter} from "./webpage"

 function createBody() {
    const body = document.createElement("div")
    const bodyContent = document.createElement("div")
    const copy = document.createElement("p")
    const image = document.createElement("img")
    const copyTwo = document.createElement("p")

    const containerOne = document.createElement("div")
    const containerTwo = document.createElement("div")
    const containerThree = document.createElement("div")

    body.appendChild(bodyContent)
    containerOne.appendChild(copy)
    containerTwo.appendChild(image)
    containerThree.appendChild(copyTwo)
    bodyContent.appendChild(containerOne)
    bodyContent.appendChild(containerTwo)
    bodyContent.appendChild(containerThree)
    copy.textContent = "Food is not rational. Food is culture, habit, craving, and identity."
    copyTwo.textContent = "Come have a taste of good food today."
    image.src = "https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoZWZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"

    body.classList.add("body")
    bodyContent.classList.add("body-content")
    copy.classList.add("copy")
    copyTwo.classList.add("caption")
    image.classList.add("chef")

    return body
}
 
function initializeHomePage () {
    const main = document.querySelector(".main")
    main.textContent = ""
    main.appendChild(createBody())

    
}




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeMenuPage": () => (/* binding */ initializeMenuPage)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


function foodDisplay(){
    const menuGroup = document.createElement("div")
    const foodCardOne = document.createElement("div")
    const foodCardTwo = document.createElement("div")
    const foodCardThree = document.createElement("div")
    const foodCardFour = document.createElement("div")
    const foodCardFive = document.createElement("div")
    const foodCardSix = document.createElement("div")
    
    menuGroup.appendChild(foodCardOne)
    menuGroup.appendChild(foodCardTwo)
    menuGroup.appendChild(foodCardThree)
    menuGroup.appendChild(foodCardFour)
    menuGroup.appendChild(foodCardFive)
    menuGroup.appendChild(foodCardSix)

    //food-card one 
    const foodOneCaptionDiv = document.createElement("div")
    const foodOneCaption = document.createElement("p")
    const pastaDiv = document.createElement("div")
    const pasta = document.createElement("img")
    foodCardOne.appendChild(pastaDiv)
    pastaDiv.appendChild(pasta)
    foodCardOne.appendChild(foodOneCaptionDiv)
    foodOneCaptionDiv.appendChild(foodOneCaption)
    foodOneCaption.textContent = "Noodles with shrimps"
    pasta.src = "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBhc3RhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBhc3RhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    pasta.classList.add("food")

    //food-card two
    const foodTwoCaptionDiv = document.createElement("div")
    const foodTwoCaption = document.createElement("p")
    const riceDiv = document.createElement("div")
    const rice = document.createElement("img")
    foodCardTwo.appendChild(riceDiv)
    riceDiv.appendChild(rice)
    foodCardTwo.appendChild(foodTwoCaptionDiv)
    foodTwoCaptionDiv.appendChild(foodTwoCaption)
    foodTwoCaption.textContent = "Boiled rice and eggs"
    rice.src = "https://images.unsplash.com/photo-1564671165093-20688ff1fffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHJpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    rice.classList.add("food")

    //food-card three
    const foodThreeCaptionDiv = document.createElement("div")
    const foodThreeCaption = document.createElement("p")
    const pizzaDiv = document.createElement("div")
    const pizza = document.createElement("img")
    foodCardThree.appendChild(pizzaDiv)
    pizzaDiv.appendChild(pizza)
    foodCardThree.appendChild(foodThreeCaptionDiv)
    foodThreeCaptionDiv.appendChild(foodThreeCaption)
    foodThreeCaption.textContent = "Pizza with berries"
    pizza.src = "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    pizza.classList.add("food")

    //food-card four
    const foodFourCaptionDiv = document.createElement("div")
    const foodFourCaption = document.createElement("p")
    const sushiDiv = document.createElement("div")
    const sushi = document.createElement("img")
    foodCardFour.appendChild(sushiDiv)
    sushiDiv.appendChild(sushi)
    foodCardFour.appendChild(foodFourCaptionDiv)
    foodFourCaptionDiv.appendChild(foodFourCaption)
    foodFourCaption.textContent = "Sushi"
    sushi.src = "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3VzaGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    sushi.classList.add("food")

    //food-card five
    const foodFiveCaptionDiv = document.createElement("div")
    const foodFiveCaption = document.createElement("p")
    const burritoDiv = document.createElement("div")
    const burrito = document.createElement("img")
    foodCardFive.appendChild(burritoDiv)
    burritoDiv.appendChild(burrito)
    foodCardFive.appendChild(foodFiveCaptionDiv)
    foodFiveCaptionDiv.appendChild(foodFiveCaption)
    foodFiveCaption.textContent = "Carnitas Pork Burrito"
    burrito.src = "https://media.istockphoto.com/photos/healthy-homemade-carnitas-pork-burrito-picture-id1352567243?b=1&k=20&m=1352567243&s=170667a&w=0&h=fibEydmX7Fqy7lO29lrKWVbBMC2Mq5-WSEL3lnKFC7w="
    burrito.classList.add("food")

    const foodSixCaptionDiv = document.createElement("div")
    const foodSixCaption = document.createElement("p")
    const amalaDiv = document.createElement("div")
    const amala = document.createElement("img")
    foodCardSix.appendChild(amalaDiv)
    amalaDiv.appendChild(amala)
    foodCardSix.appendChild(foodSixCaptionDiv)
    foodSixCaptionDiv.appendChild(foodSixCaption)
    foodSixCaption.textContent = "Amala and Vegetable soup"
    amala.src = "https://media.istockphoto.com/photos/egusi-soup-with-stew-and-amala-picture-id1406320784?k=20&m=1406320784&s=612x612&w=0&h=-WpnUH0lgCePo5r-YVGMUT3_LozxzXz01TWY2F-Sgkw="
    amala.classList.add("food")

    menuGroup.classList.add("menuGroup")
    foodCardOne.classList.add("food-card")
    foodCardTwo.classList.add("food-card")
    foodCardThree.classList.add("food-card")
    foodCardFour.classList.add("food-card")
    foodCardFive.classList.add("food-card")
    foodCardSix.classList.add("food-card")

    return menuGroup
}

function initializeMenuPage() {
    const main = document.querySelector(".main")
    main.textContent = ""
    main.appendChild(foodDisplay())
}





/***/ }),

/***/ "./src/webpage.js":
/*!************************!*\
  !*** ./src/webpage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "webpage": () => (/* binding */ webpage)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");





function createHeader() {
    const header = document.createElement("div")
    const nameDiv = document.createElement("div")
    const nameTxt = document.createElement("p")
    const menuDiv = document.createElement("div")
    const ul = document.createElement("ul")
    const itemOne = document.createElement("li")
    const itemTwo = document.createElement("li")
    const itemThree = document.createElement("li")
    const btn1 = document.createElement("btn")
    const btn2 = document.createElement("btn")
    const btn3 = document.createElement("btn")

    btn1.textContent = "Home"
    btn2.textContent = "Menu"
    btn3.textContent = "Contact"

    header.appendChild(nameDiv)
    header.appendChild(menuDiv)
    nameDiv.appendChild(nameTxt)
    nameTxt.textContent = "Gustoso"
    menuDiv.appendChild(ul)
    ul.appendChild(itemOne)
    ul.appendChild(itemTwo)
    ul.appendChild(itemThree)
    itemOne.appendChild(btn1)
    itemTwo.appendChild(btn2)
    itemThree.appendChild(btn3)
       
    nameDiv.classList.add("name")
    header.classList.add("header")
    itemOne.classList.add("li")
    itemTwo.classList.add("li")
    itemThree.classList.add("li")
    btn1.classList.add("button-nav")
    btn2.classList.add("button-nav")
    btn3.classList.add("button-nav")
    
    btn1.addEventListener("click", (e) => {
      if (e.target.classList.contains("active")) return;
        setActiveButton(btn1);
        (0,_home__WEBPACK_IMPORTED_MODULE_1__.initializeHomePage)()
    })
    
    btn2.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(btn2);
        (0,_menu__WEBPACK_IMPORTED_MODULE_2__.initializeMenuPage)()
    })

    btn3.addEventListener("click", (e) => {
      if (e.target.classList.contains("active")) return;
      setActiveButton(btn3);
      (0,_contact__WEBPACK_IMPORTED_MODULE_3__.initializeContactPage)()
  })

    return header
    }

function createFooter() {
        const footerDiv = document.createElement("div")
        const footerContent = document.createElement("p")
        
        //content.appendChild(footerDiv)
        footerDiv.appendChild(footerContent)
        footerContent.textContent = "Copyright 2021 Olanrewaju"
        
        footerDiv.classList.add("footer")

        return footerDiv
    }

    function setActiveButton(button) {
      const buttons = document.querySelectorAll(".button-nav");
    
      buttons.forEach((button) => {
        if (button !== this) {
          button.classList.remove("active");
        }
      });
    
      button.classList.add("active");
    }

function mainBody () {
  const main = document.createElement("div")
  main.classList.add("main")
  return main
}
function webpage() {
content.appendChild(createHeader())
content.appendChild(mainBody())
content.appendChild(createFooter())

setActiveButton(document.querySelector(".button-nav"))
  ;(0,_home__WEBPACK_IMPORTED_MODULE_1__.initializeHomePage)()
}
  




/***/ }),

/***/ "./src/fonts/AguafinaScript-Regular.ttf":
/*!**********************************************!*\
  !*** ./src/fonts/AguafinaScript-Regular.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "db13182e436802ff98b3.ttf";

/***/ }),

/***/ "./src/fonts/Raleway-VariableFont_wght.ttf":
/*!*************************************************!*\
  !*** ./src/fonts/Raleway-VariableFont_wght.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3fefe681f4c62116679b.ttf";

/***/ }),

/***/ "./src/icons/home.png":
/*!****************************!*\
  !*** ./src/icons/home.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "35adbafb49ff4923f6bf.png";

/***/ }),

/***/ "./src/icons/phone.png":
/*!*****************************!*\
  !*** ./src/icons/phone.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b39226b2c8449364cfd0.png";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _webpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webpage */ "./src/webpage.js");


function fullPage() {
(0,_webpage__WEBPACK_IMPORTED_MODULE_0__.webpage)()
}
fullPage()




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSFA7QUFDc0I7QUFDQTtBQUNLOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEseURBQWtCO0FBQzFCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEseURBQWtCO0FBQzFCLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsTUFBTSwrREFBcUI7QUFDM0IsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLDBEQUFrQjtBQUNwQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEdBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7O0FDQWlDOztBQUVqQztBQUNBLGlEQUFPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL3NyYy93ZWJwYWdlLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvQWd1YWZpbmFTY3JpcHQtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1JhbGV3YXktVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosIGJvZHksIDpyb290e1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuaHRtbCwgYm9keXtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcbkBmb250LWZhY2V7XFxuICAgIGZvbnQtZmFtaWx5OiBhZ3VhO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcbkBmb250LWZhY2V7XFxuICAgIGZvbnQtZmFtaWx5OiByYWxlO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcbjpyb290IHtcXG4gICAgLS1mb250LWNvbG9yOiAjZWVlO1xcbiAgICAtLWZvbnQtY29sb3ItZGFyazogI2FhYTtcXG4gICAgLS1ib3JkZXItY29sb3I6ICMyMjI7XFxuICAgIC0tYmFja2dyb3VuZC1saWdodDogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgICAtLWJhY2tncm91bmQtbGlnaHQtaG92ZXI6IHJnYmEoOTksIDk5LCA5OSwgMC40KTtcXG4gICAgLS1iYWNrZ3JvdW5kLWRhcms6IHJnYmEoMCwgMCwgMCwgMC45KTtcXG59XFxuYm9keXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxuICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU0MDE4OTU0OTMzNi1lNmU5OWMzNjc5ZmU/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh6WldGeVkyaDhOM3g4Wm05dlpIeGxibnd3Zkh3d2ZIdyUzRCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTUwMCZxPTYwaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NDAxODk1NDkzMzYtZTZlOTljMzY3OWZlP2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4elpXRnlZMmg4TjN4OFptOXZaSHhsYm53d2ZId3dmSHclM0QmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz01MDAmcT02MCk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OnJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgZm9udC1mYW1pbHk6IHJhbGU7XFxufVxcbiNjb250ZW50e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6ICByZXBlYXQoMiwgMWZyKTsgXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmciAxZnI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxufVxcbi5oZWFkZXJ7XFxuZ3JpZC1yb3c6IDE7XFxuZ3JpZC1jb2x1bW46IDEvMztcXG5kaXNwbGF5OiBmbGV4O1xcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWRhcmspO1xcbnBhZGRpbmctYm90dG9tOiAycmVtO1xcbn1cXG4uaGVhZGVyID4gLm5hbWUge1xcbmZvbnQtc2l6ZTogNnJlbTtcXG5tYXJnaW4tYm90dG9tOiAxcmVtO1xcbmZvbnQtZmFtaWx5OiBhZ3VhO1xcbn1cXG4ubGl7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW0gMXJlbSAycmVtO1xcbn1cXG4ubGk6aG92ZXJ7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBzYWxtb247XFxufVxcbi5ib2R5e1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmJvZHktY29udGVudHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7IFxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgXFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIG1hcmdpbjogNHJlbSA7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcmVtO1xcbn1cXG4uYm9keS1jb250ZW50ID4gZGl2e1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW46IDAgNHJlbSAwIDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4uY2hlZntcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1hcmdpbjogMnJlbSAwIDJyZW0gMDtcXG59XFxuLmZvb3RlcntcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxufVxcbi5tZW51R3JvdXB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpOyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XFxuICAgIG1hcmdpbjogNHJlbSA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogM3JlbTtcXG5cXG59XFxuLmZvb2QtY2FyZHtcXG4gICAgbWFyZ2luOiAyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtZGFyayk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG4uZm9vZC1jYXJkOmhvdmVye1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCBvcmFuZ2U7XFxufVxcbi5idXR0b24tbmF2e1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5tYWlue1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XFxuLmNvcHl7XFxuICAgIHBhZGRpbmc6IDNyZW0gM3JlbSAwIDNyZW07XFxufVxcbi5jYXB0aW9ue1xcbiAgICBwYWRkaW5nOiAwIDNyZW0gM3JlbSAzcmVtO1xcbn1cXG4uY29udGFjdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGhlaWdodDogNzAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgXFxuICAgIG1hcmdpbjogNnJlbSA7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cmVtO1xcblxcbn1cXG4uZm9vZHtcXG4gICAgaGVpZ2h0OiAxMGVtO1xcbiAgICB3aWR0aDogOGVtO1xcbiAgICBtYXJnaW46IDAgMnJlbSAxcmVtIDJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDNyZW07XFxuICAgIG1hcmdpbjogMmVtO1xcbn1cXG4ucGhvbmV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcbi5sYXlvdXR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQiw0Q0FBNEM7QUFDaEQ7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQiw0Q0FBK0M7QUFDbkQ7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLHNDQUFzQztJQUN0QywrQ0FBK0M7SUFDL0MscUNBQXFDO0FBQ3pDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsMkRBQTJEO0lBQzNELHVWQUF1VjtJQUN2Vix3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztJQUN0QywrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjtBQUNBO0FBQ0EsV0FBVztBQUNYLGdCQUFnQjtBQUNoQixhQUFhO0FBQ2IsbUJBQW1CO0FBQ25CLHNCQUFzQjtBQUN0Qix3Q0FBd0M7QUFDeEMsb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsbUJBQW1CO0FBQ25CLGlCQUFpQjtBQUNqQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSx5Q0FBeUM7SUFDekMsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7SUFDVixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQix5Q0FBeUM7SUFDekMsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGFBQWE7SUFDYiwyREFBMkQ7SUFDM0QseUNBQXlDO0lBQ3pDLGFBQWE7SUFDYixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7QUFFdkI7QUFDQTtJQUNJLFdBQVc7SUFDWCx3Q0FBd0M7SUFDeEMsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGFBQWE7QUFDakI7QUFDQTtJQUNJLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsYUFBYTtBQUNqQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlDQUF5QztJQUN6QyxVQUFVO0lBQ1YsV0FBVztJQUNYLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7O0FBRXZCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLCBib2R5LCA6cm9vdHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbmh0bWwsIGJvZHl7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5AZm9udC1mYWNle1xcbiAgICBmb250LWZhbWlseTogYWd1YTtcXG4gICAgc3JjOiB1cmwoLi9mb250cy9BZ3VhZmluYVNjcmlwdC1SZWd1bGFyLnR0Zik7XFxufVxcbkBmb250LWZhY2V7XFxuICAgIGZvbnQtZmFtaWx5OiByYWxlO1xcbiAgICBzcmM6IHVybCguL2ZvbnRzL1JhbGV3YXktVmFyaWFibGVGb250X3dnaHQudHRmKTtcXG59XFxuOnJvb3Qge1xcbiAgICAtLWZvbnQtY29sb3I6ICNlZWU7XFxuICAgIC0tZm9udC1jb2xvci1kYXJrOiAjYWFhO1xcbiAgICAtLWJvcmRlci1jb2xvcjogIzIyMjtcXG4gICAgLS1iYWNrZ3JvdW5kLWxpZ2h0OiByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICAgIC0tYmFja2dyb3VuZC1saWdodC1ob3ZlcjogcmdiYSg5OSwgOTksIDk5LCAwLjQpO1xcbiAgICAtLWJhY2tncm91bmQtZGFyazogcmdiYSgwLCAwLCAwLCAwLjkpO1xcbn1cXG5ib2R5e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTQwMTg5NTQ5MzM2LWU2ZTk5YzM2NzlmZT9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHpaV0Z5WTJoOE4zeDhabTl2Wkh4bGJud3dmSHd3Zkh3JTNEJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NTAwJnE9NjBodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU0MDE4OTU0OTMzNi1lNmU5OWMzNjc5ZmU/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh6WldGeVkyaDhOM3g4Wm05dlpIeGxibnd3Zkh3d2ZIdyUzRCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTUwMCZxPTYwKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6cmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBmb250LWZhbWlseTogcmFsZTtcXG59XFxuI2NvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogIHJlcGVhdCgyLCAxZnIpOyBcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyIDFmcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG59XFxuLmhlYWRlcntcXG5ncmlkLXJvdzogMTtcXG5ncmlkLWNvbHVtbjogMS8zO1xcbmRpc3BsYXk6IGZsZXg7XFxuYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtZGFyayk7XFxucGFkZGluZy1ib3R0b206IDJyZW07XFxufVxcbi5oZWFkZXIgPiAubmFtZSB7XFxuZm9udC1zaXplOiA2cmVtO1xcbm1hcmdpbi1ib3R0b206IDFyZW07XFxuZm9udC1mYW1pbHk6IGFndWE7XFxufVxcbi5saXtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbSAxcmVtIDJyZW07XFxufVxcbi5saTpob3ZlcntcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHNhbG1vbjtcXG59XFxuLmJvZHl7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uYm9keS1jb250ZW50e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTsgXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyBcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgbWFyZ2luOiA0cmVtIDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNyZW07XFxufVxcbi5ib2R5LWNvbnRlbnQgPiBkaXZ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMCA0cmVtIDAgMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5jaGVme1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWFyZ2luOiAycmVtIDAgMnJlbSAwO1xcbn1cXG4uZm9vdGVye1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG59XFxuLm1lbnVHcm91cHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcXG4gICAgbWFyZ2luOiA0cmVtIDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcmVtO1xcblxcbn1cXG4uZm9vZC1jYXJke1xcbiAgICBtYXJnaW46IDJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1kYXJrKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcbi5mb29kLWNhcmQ6aG92ZXJ7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IG9yYW5nZTtcXG59XFxuLmJ1dHRvbi1uYXZ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm1haW57XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbn1cXG4uY29weXtcXG4gICAgcGFkZGluZzogM3JlbSAzcmVtIDAgM3JlbTtcXG59XFxuLmNhcHRpb257XFxuICAgIHBhZGRpbmc6IDAgM3JlbSAzcmVtIDNyZW07XFxufVxcbi5jb250YWN0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgaGVpZ2h0OiA3MCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyBcXG4gICAgbWFyZ2luOiA2cmVtIDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVyZW07XFxuXFxufVxcbi5mb29ke1xcbiAgICBoZWlnaHQ6IDEwZW07XFxuICAgIHdpZHRoOiA4ZW07XFxuICAgIG1hcmdpbjogMCAycmVtIDFyZW0gMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3JlbTtcXG4gICAgbWFyZ2luOiAyZW07XFxufVxcbi5waG9uZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuLmxheW91dHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCJcbmltcG9ydCBpY29uIGZyb20gXCIuL2ljb25zL3Bob25lLnBuZ1wiXG5pbXBvcnQgaWNvbjIgZnJvbSBcIi4vaWNvbnMvaG9tZS5wbmdcIlxuXG5mdW5jdGlvbiBjb250YWN0KCkge1xuICAgIGNvbnN0IGJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcbiAgICBjb25zdCBpbmZvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGluZm9EaXYuY2xhc3NMaXN0LmFkZChcImxheW91dFwiKVxuXG4gICAgY29uc3QgcGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgcGhvbmVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgcGhvbmVJbWcuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCIxcmVtXCJcblxuICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgbG9jYXRpb25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgY29uc3QgaW5mb1R3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgbG9jYXRpb25JbWcuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCIxcmVtXCJcbiAgICBiYWNrZ3JvdW5kLmFwcGVuZENoaWxkKHRpdGxlRGl2KVxuICAgIGJhY2tncm91bmQuYXBwZW5kQ2hpbGQoaW5mb0RpdilcbiAgICB0aXRsZURpdi5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgICBpbmZvRGl2LmFwcGVuZENoaWxkKHBob25lTnVtYmVyKVxuICAgIGluZm9EaXYuYXBwZW5kQ2hpbGQoYWRkcmVzcylcbiAgICBwaG9uZU51bWJlci5hcHBlbmRDaGlsZChwaG9uZUltZylcbiAgICBwaG9uZU51bWJlci5hcHBlbmRDaGlsZChpbmZvKVxuICAgIGFkZHJlc3MuYXBwZW5kQ2hpbGQobG9jYXRpb25JbWcpXG4gICAgYWRkcmVzcy5hcHBlbmRDaGlsZChpbmZvVHdvKVxuXG4gICAgYmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKFwiYm9keS1jb250ZW50XCIpXG4gICAgcGhvbmVOdW1iZXIuY2xhc3NMaXN0LmFkZChcInBob25lXCIpXG4gICAgYWRkcmVzcy5jbGFzc0xpc3QuYWRkKFwicGhvbmVcIilcbiAgICBwaG9uZUltZy5zcmMgPSBpY29uXG4gICAgbG9jYXRpb25JbWcuc3JjID0gaWNvbjJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiQ29udGFjdCBVc1wiXG4gICAgaW5mby50ZXh0Q29udGVudCA9IFwiKzIzNDgxNjU4NDE4MDhcIlxuICAgIGluZm8uc3R5bGUucGFkZGluZ0JvdHRvbSA9IFwiMXJlbVwiXG4gICAgaW5mb1R3by50ZXh0Q29udGVudCA9IFwiMzIsIExhcnJ5IE1vcmdhbiBhdmVudWUsIEJhbmFuYSBpc2xhbmQgTGFnb3NcIlxuXG4gICAgcmV0dXJuIGJhY2tncm91bmRcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZUNvbnRhY3RQYWdlKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIilcbiAgICBtYWluLnRleHRDb250ZW50ID0gXCJcIlxuICAgIG1haW4uYXBwZW5kQ2hpbGQoY29udGFjdCgpKVxufVxuXG5leHBvcnQge2luaXRpYWxpemVDb250YWN0UGFnZX0iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiXG4vL2ltcG9ydCB7Zm9vZERpc3BsYXl9IGZyb20gXCIuL21lbnVcIjtcbi8vaW1wb3J0IHtjcmVhdGVGb290ZXJ9IGZyb20gXCIuL3dlYnBhZ2VcIlxuXG4gZnVuY3Rpb24gY3JlYXRlQm9keSgpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IGJvZHlDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IGNvcHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgIGNvbnN0IGNvcHlUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuXG4gICAgY29uc3QgY29udGFpbmVyT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IGNvbnRhaW5lclR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCBjb250YWluZXJUaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoYm9keUNvbnRlbnQpXG4gICAgY29udGFpbmVyT25lLmFwcGVuZENoaWxkKGNvcHkpXG4gICAgY29udGFpbmVyVHdvLmFwcGVuZENoaWxkKGltYWdlKVxuICAgIGNvbnRhaW5lclRocmVlLmFwcGVuZENoaWxkKGNvcHlUd28pXG4gICAgYm9keUNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyT25lKVxuICAgIGJvZHlDb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lclR3bylcbiAgICBib2R5Q29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXJUaHJlZSlcbiAgICBjb3B5LnRleHRDb250ZW50ID0gXCJGb29kIGlzIG5vdCByYXRpb25hbC4gRm9vZCBpcyBjdWx0dXJlLCBoYWJpdCwgY3JhdmluZywgYW5kIGlkZW50aXR5LlwiXG4gICAgY29weVR3by50ZXh0Q29udGVudCA9IFwiQ29tZSBoYXZlIGEgdGFzdGUgb2YgZ29vZCBmb29kIHRvZGF5LlwiXG4gICAgaW1hZ2Uuc3JjID0gXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU4MzM5NDI5MzIxNC0yOGRlZDE1ZWU1NDg/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh6WldGeVkyaDhNVEo4ZkdOb1pXWjhaVzU4TUh4OE1IeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz01MDAmcT02MFwiXG5cbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJib2R5XCIpXG4gICAgYm9keUNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImJvZHktY29udGVudFwiKVxuICAgIGNvcHkuY2xhc3NMaXN0LmFkZChcImNvcHlcIilcbiAgICBjb3B5VHdvLmNsYXNzTGlzdC5hZGQoXCJjYXB0aW9uXCIpXG4gICAgaW1hZ2UuY2xhc3NMaXN0LmFkZChcImNoZWZcIilcblxuICAgIHJldHVybiBib2R5XG59XG4gXG5mdW5jdGlvbiBpbml0aWFsaXplSG9tZVBhZ2UgKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIilcbiAgICBtYWluLnRleHRDb250ZW50ID0gXCJcIlxuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlQm9keSgpKVxuXG4gICAgXG59XG5cblxuZXhwb3J0IHtpbml0aWFsaXplSG9tZVBhZ2V9IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxuXG5mdW5jdGlvbiBmb29kRGlzcGxheSgpe1xuICAgIGNvbnN0IG1lbnVHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCBmb29kQ2FyZE9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCBmb29kQ2FyZFR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCBmb29kQ2FyZFRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IGZvb2RDYXJkRm91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCBmb29kQ2FyZEZpdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgZm9vZENhcmRTaXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgXG4gICAgbWVudUdyb3VwLmFwcGVuZENoaWxkKGZvb2RDYXJkT25lKVxuICAgIG1lbnVHcm91cC5hcHBlbmRDaGlsZChmb29kQ2FyZFR3bylcbiAgICBtZW51R3JvdXAuYXBwZW5kQ2hpbGQoZm9vZENhcmRUaHJlZSlcbiAgICBtZW51R3JvdXAuYXBwZW5kQ2hpbGQoZm9vZENhcmRGb3VyKVxuICAgIG1lbnVHcm91cC5hcHBlbmRDaGlsZChmb29kQ2FyZEZpdmUpXG4gICAgbWVudUdyb3VwLmFwcGVuZENoaWxkKGZvb2RDYXJkU2l4KVxuXG4gICAgLy9mb29kLWNhcmQgb25lIFxuICAgIGNvbnN0IGZvb2RPbmVDYXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IGZvb2RPbmVDYXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBjb25zdCBwYXN0YURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCBwYXN0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICBmb29kQ2FyZE9uZS5hcHBlbmRDaGlsZChwYXN0YURpdilcbiAgICBwYXN0YURpdi5hcHBlbmRDaGlsZChwYXN0YSlcbiAgICBmb29kQ2FyZE9uZS5hcHBlbmRDaGlsZChmb29kT25lQ2FwdGlvbkRpdilcbiAgICBmb29kT25lQ2FwdGlvbkRpdi5hcHBlbmRDaGlsZChmb29kT25lQ2FwdGlvbilcbiAgICBmb29kT25lQ2FwdGlvbi50ZXh0Q29udGVudCA9IFwiTm9vZGxlcyB3aXRoIHNocmltcHNcIlxuICAgIHBhc3RhLnNyYyA9IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NjMzNzk5MjY4OTgtMDVmNDU3NWE0NWQ4P2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4elpXRnlZMmg4TVRGOGZIQmhjM1JoZkdWdWZEQjhmREI4ZkElM0QlM0QmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz01MDAmcT02MGh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTYzMzc5OTI2ODk4LTA1ZjQ1NzVhNDVkOD9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHpaV0Z5WTJoOE1URjhmSEJoYzNSaGZHVnVmREI4ZkRCOGZBJTNEJTNEJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NTAwJnE9NjBcIlxuICAgIHBhc3RhLmNsYXNzTGlzdC5hZGQoXCJmb29kXCIpXG5cbiAgICAvL2Zvb2QtY2FyZCB0d29cbiAgICBjb25zdCBmb29kVHdvQ2FwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCBmb29kVHdvQ2FwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgY29uc3QgcmljZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgIGZvb2RDYXJkVHdvLmFwcGVuZENoaWxkKHJpY2VEaXYpXG4gICAgcmljZURpdi5hcHBlbmRDaGlsZChyaWNlKVxuICAgIGZvb2RDYXJkVHdvLmFwcGVuZENoaWxkKGZvb2RUd29DYXB0aW9uRGl2KVxuICAgIGZvb2RUd29DYXB0aW9uRGl2LmFwcGVuZENoaWxkKGZvb2RUd29DYXB0aW9uKVxuICAgIGZvb2RUd29DYXB0aW9uLnRleHRDb250ZW50ID0gXCJCb2lsZWQgcmljZSBhbmQgZWdnc1wiXG4gICAgcmljZS5zcmMgPSBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTY0NjcxMTY1MDkzLTIwNjg4ZmYxZmZmYT9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHpaV0Z5WTJoOE16RjhmSEpwWTJWOFpXNThNSHg4TUh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTUwMCZxPTYwXCJcbiAgICByaWNlLmNsYXNzTGlzdC5hZGQoXCJmb29kXCIpXG5cbiAgICAvL2Zvb2QtY2FyZCB0aHJlZVxuICAgIGNvbnN0IGZvb2RUaHJlZUNhcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgZm9vZFRocmVlQ2FwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgY29uc3QgcGl6emFEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgcGl6emEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgZm9vZENhcmRUaHJlZS5hcHBlbmRDaGlsZChwaXp6YURpdilcbiAgICBwaXp6YURpdi5hcHBlbmRDaGlsZChwaXp6YSlcbiAgICBmb29kQ2FyZFRocmVlLmFwcGVuZENoaWxkKGZvb2RUaHJlZUNhcHRpb25EaXYpXG4gICAgZm9vZFRocmVlQ2FwdGlvbkRpdi5hcHBlbmRDaGlsZChmb29kVGhyZWVDYXB0aW9uKVxuICAgIGZvb2RUaHJlZUNhcHRpb24udGV4dENvbnRlbnQgPSBcIlBpenphIHdpdGggYmVycmllc1wiXG4gICAgcGl6emEuc3JjID0gXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUxMzEwNDg5MDEzOC03Yzc0OTY1OWE1OTE/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh6WldGeVkyaDhNWHg4Y0dsNmVtRjhaVzU4TUh4OE1IeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz01MDAmcT02MFwiXG4gICAgcGl6emEuY2xhc3NMaXN0LmFkZChcImZvb2RcIilcblxuICAgIC8vZm9vZC1jYXJkIGZvdXJcbiAgICBjb25zdCBmb29kRm91ckNhcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgZm9vZEZvdXJDYXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBjb25zdCBzdXNoaURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCBzdXNoaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICBmb29kQ2FyZEZvdXIuYXBwZW5kQ2hpbGQoc3VzaGlEaXYpXG4gICAgc3VzaGlEaXYuYXBwZW5kQ2hpbGQoc3VzaGkpXG4gICAgZm9vZENhcmRGb3VyLmFwcGVuZENoaWxkKGZvb2RGb3VyQ2FwdGlvbkRpdilcbiAgICBmb29kRm91ckNhcHRpb25EaXYuYXBwZW5kQ2hpbGQoZm9vZEZvdXJDYXB0aW9uKVxuICAgIGZvb2RGb3VyQ2FwdGlvbi50ZXh0Q29udGVudCA9IFwiU3VzaGlcIlxuICAgIHN1c2hpLnNyYyA9IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1Nzk4NzE0OTQ0NDctOTgxMWNmODBkNjZjP2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4elpXRnlZMmg4TTN4OGMzVnphR2w4Wlc1OE1IeDhNSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NTAwJnE9NjBcIlxuICAgIHN1c2hpLmNsYXNzTGlzdC5hZGQoXCJmb29kXCIpXG5cbiAgICAvL2Zvb2QtY2FyZCBmaXZlXG4gICAgY29uc3QgZm9vZEZpdmVDYXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IGZvb2RGaXZlQ2FwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgY29uc3QgYnVycml0b0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCBidXJyaXRvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgIGZvb2RDYXJkRml2ZS5hcHBlbmRDaGlsZChidXJyaXRvRGl2KVxuICAgIGJ1cnJpdG9EaXYuYXBwZW5kQ2hpbGQoYnVycml0bylcbiAgICBmb29kQ2FyZEZpdmUuYXBwZW5kQ2hpbGQoZm9vZEZpdmVDYXB0aW9uRGl2KVxuICAgIGZvb2RGaXZlQ2FwdGlvbkRpdi5hcHBlbmRDaGlsZChmb29kRml2ZUNhcHRpb24pXG4gICAgZm9vZEZpdmVDYXB0aW9uLnRleHRDb250ZW50ID0gXCJDYXJuaXRhcyBQb3JrIEJ1cnJpdG9cIlxuICAgIGJ1cnJpdG8uc3JjID0gXCJodHRwczovL21lZGlhLmlzdG9ja3Bob3RvLmNvbS9waG90b3MvaGVhbHRoeS1ob21lbWFkZS1jYXJuaXRhcy1wb3JrLWJ1cnJpdG8tcGljdHVyZS1pZDEzNTI1NjcyNDM/Yj0xJms9MjAmbT0xMzUyNTY3MjQzJnM9MTcwNjY3YSZ3PTAmaD1maWJFeWRtWDdGcXk3bE8yOWxyS1dWYkJNQzJNcTUtV1NFTDNsbktGQzd3PVwiXG4gICAgYnVycml0by5jbGFzc0xpc3QuYWRkKFwiZm9vZFwiKVxuXG4gICAgY29uc3QgZm9vZFNpeENhcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgZm9vZFNpeENhcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIGNvbnN0IGFtYWxhRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IGFtYWxhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgIGZvb2RDYXJkU2l4LmFwcGVuZENoaWxkKGFtYWxhRGl2KVxuICAgIGFtYWxhRGl2LmFwcGVuZENoaWxkKGFtYWxhKVxuICAgIGZvb2RDYXJkU2l4LmFwcGVuZENoaWxkKGZvb2RTaXhDYXB0aW9uRGl2KVxuICAgIGZvb2RTaXhDYXB0aW9uRGl2LmFwcGVuZENoaWxkKGZvb2RTaXhDYXB0aW9uKVxuICAgIGZvb2RTaXhDYXB0aW9uLnRleHRDb250ZW50ID0gXCJBbWFsYSBhbmQgVmVnZXRhYmxlIHNvdXBcIlxuICAgIGFtYWxhLnNyYyA9IFwiaHR0cHM6Ly9tZWRpYS5pc3RvY2twaG90by5jb20vcGhvdG9zL2VndXNpLXNvdXAtd2l0aC1zdGV3LWFuZC1hbWFsYS1waWN0dXJlLWlkMTQwNjMyMDc4ND9rPTIwJm09MTQwNjMyMDc4NCZzPTYxMng2MTImdz0wJmg9LVdwblVIMGxnQ2VQbzVyLVlWR01VVDNfTG96eHpYejAxVFdZMkYtU2drdz1cIlxuICAgIGFtYWxhLmNsYXNzTGlzdC5hZGQoXCJmb29kXCIpXG5cbiAgICBtZW51R3JvdXAuY2xhc3NMaXN0LmFkZChcIm1lbnVHcm91cFwiKVxuICAgIGZvb2RDYXJkT25lLmNsYXNzTGlzdC5hZGQoXCJmb29kLWNhcmRcIilcbiAgICBmb29kQ2FyZFR3by5jbGFzc0xpc3QuYWRkKFwiZm9vZC1jYXJkXCIpXG4gICAgZm9vZENhcmRUaHJlZS5jbGFzc0xpc3QuYWRkKFwiZm9vZC1jYXJkXCIpXG4gICAgZm9vZENhcmRGb3VyLmNsYXNzTGlzdC5hZGQoXCJmb29kLWNhcmRcIilcbiAgICBmb29kQ2FyZEZpdmUuY2xhc3NMaXN0LmFkZChcImZvb2QtY2FyZFwiKVxuICAgIGZvb2RDYXJkU2l4LmNsYXNzTGlzdC5hZGQoXCJmb29kLWNhcmRcIilcblxuICAgIHJldHVybiBtZW51R3JvdXBcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZU1lbnVQYWdlKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIilcbiAgICBtYWluLnRleHRDb250ZW50ID0gXCJcIlxuICAgIG1haW4uYXBwZW5kQ2hpbGQoZm9vZERpc3BsYXkoKSlcbn1cblxuXG5leHBvcnQge2luaXRpYWxpemVNZW51UGFnZX1cbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCJcbmltcG9ydCB7aW5pdGlhbGl6ZUhvbWVQYWdlfSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQge2luaXRpYWxpemVNZW51UGFnZX0gZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IHtpbml0aWFsaXplQ29udGFjdFBhZ2V9IGZyb20gXCIuL2NvbnRhY3RcIlxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IG5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgbmFtZVR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKVxuICAgIGNvbnN0IGl0ZW1PbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICBjb25zdCBpdGVtVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgY29uc3QgaXRlbVRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgY29uc3QgYnRuMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidG5cIilcbiAgICBjb25zdCBidG4yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ0blwiKVxuICAgIGNvbnN0IGJ0bjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnRuXCIpXG5cbiAgICBidG4xLnRleHRDb250ZW50ID0gXCJIb21lXCJcbiAgICBidG4yLnRleHRDb250ZW50ID0gXCJNZW51XCJcbiAgICBidG4zLnRleHRDb250ZW50ID0gXCJDb250YWN0XCJcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYW1lRGl2KVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChtZW51RGl2KVxuICAgIG5hbWVEaXYuYXBwZW5kQ2hpbGQobmFtZVR4dClcbiAgICBuYW1lVHh0LnRleHRDb250ZW50ID0gXCJHdXN0b3NvXCJcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKHVsKVxuICAgIHVsLmFwcGVuZENoaWxkKGl0ZW1PbmUpXG4gICAgdWwuYXBwZW5kQ2hpbGQoaXRlbVR3bylcbiAgICB1bC5hcHBlbmRDaGlsZChpdGVtVGhyZWUpXG4gICAgaXRlbU9uZS5hcHBlbmRDaGlsZChidG4xKVxuICAgIGl0ZW1Ud28uYXBwZW5kQ2hpbGQoYnRuMilcbiAgICBpdGVtVGhyZWUuYXBwZW5kQ2hpbGQoYnRuMylcbiAgICAgICBcbiAgICBuYW1lRGl2LmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIpXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIilcbiAgICBpdGVtT25lLmNsYXNzTGlzdC5hZGQoXCJsaVwiKVxuICAgIGl0ZW1Ud28uY2xhc3NMaXN0LmFkZChcImxpXCIpXG4gICAgaXRlbVRocmVlLmNsYXNzTGlzdC5hZGQoXCJsaVwiKVxuICAgIGJ0bjEuY2xhc3NMaXN0LmFkZChcImJ1dHRvbi1uYXZcIilcbiAgICBidG4yLmNsYXNzTGlzdC5hZGQoXCJidXR0b24tbmF2XCIpXG4gICAgYnRuMy5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLW5hdlwiKVxuICAgIFxuICAgIGJ0bjEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgICAgIHNldEFjdGl2ZUJ1dHRvbihidG4xKTtcbiAgICAgICAgaW5pdGlhbGl6ZUhvbWVQYWdlKClcbiAgICB9KVxuICAgIFxuICAgIGJ0bjIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcbiAgICAgICAgc2V0QWN0aXZlQnV0dG9uKGJ0bjIpO1xuICAgICAgICBpbml0aWFsaXplTWVudVBhZ2UoKVxuICAgIH0pXG5cbiAgICBidG4zLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xuICAgICAgc2V0QWN0aXZlQnV0dG9uKGJ0bjMpO1xuICAgICAgaW5pdGlhbGl6ZUNvbnRhY3RQYWdlKClcbiAgfSlcblxuICAgIHJldHVybiBoZWFkZXJcbiAgICB9XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgICAgICAgY29uc3QgZm9vdGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBjb25zdCBmb290ZXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICAgICAgXG4gICAgICAgIC8vY29udGVudC5hcHBlbmRDaGlsZChmb290ZXJEaXYpXG4gICAgICAgIGZvb3RlckRpdi5hcHBlbmRDaGlsZChmb290ZXJDb250ZW50KVxuICAgICAgICBmb290ZXJDb250ZW50LnRleHRDb250ZW50ID0gXCJDb3B5cmlnaHQgMjAyMSBPbGFucmV3YWp1XCJcbiAgICAgICAgXG4gICAgICAgIGZvb3RlckRpdi5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpXG5cbiAgICAgICAgcmV0dXJuIGZvb3RlckRpdlxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEFjdGl2ZUJ1dHRvbihidXR0b24pIHtcbiAgICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ1dHRvbi1uYXZcIik7XG4gICAgXG4gICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBpZiAoYnV0dG9uICE9PSB0aGlzKSB7XG4gICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIFxuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfVxuXG5mdW5jdGlvbiBtYWluQm9keSAoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIilcbiAgcmV0dXJuIG1haW5cbn1cbmZ1bmN0aW9uIHdlYnBhZ2UoKSB7XG5jb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKVxuY29udGVudC5hcHBlbmRDaGlsZChtYWluQm9keSgpKVxuY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSlcblxuc2V0QWN0aXZlQnV0dG9uKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLW5hdlwiKSlcbiAgaW5pdGlhbGl6ZUhvbWVQYWdlKClcbn1cbiAgXG5cblxuZXhwb3J0IHt3ZWJwYWdlfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQge3dlYnBhZ2V9IGZyb20gXCIuL3dlYnBhZ2VcIlxuXG5mdW5jdGlvbiBmdWxsUGFnZSgpIHtcbndlYnBhZ2UoKVxufVxuZnVsbFBhZ2UoKVxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9