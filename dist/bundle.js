/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/es6.js":
/*!********************!*\
  !*** ./src/es6.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n\t//es6顶一个了类rect，使用class关键字，内部使用constructor定义构造函数，\r\n\t//方法间不用标点符号分隔。\r\n\tclass rect\r\n\t{\r\n\t\tconstructor(kuan,gao){\r\n\t\t\tthis.kuan=kuan;\r\n\t\t\tthis.gao=gao;\r\n\t\t\tthis.cname=\"长方形\"\r\n\t\t}\r\n\t\tmj(){console.log(\"area:\"+this.kuan*this.gao);}\r\n\t\tzc(){console.log(\"zhouchang:\"+2*(this.kuan+this.gao));}\r\n\t}\r\n\t\r\n\tvar rect1=new rect(334,76);\r\n\trect1.mj();\r\n\trect1.zc();\r\n\tconsole.log(rect1.hasOwnProperty(\"kuan\"));\r\n\tconsole.log(rect1.hasOwnProperty(\"mj\"));\r\n\tconsole.log(rect1.__proto__.hasOwnProperty(\"mj\"));\r\n\tconsole.log(rect.prototype)\r\n\trect.prototype.say=function(){console.log(this.cname+\"prototype\")}\r\n\t//square继承在rect，使用extends关键词来完成继承\r\n\tclass square extends rect\r\n\t{\r\n\t\tconstructor(x){//构造函数，构造函数中要有super\r\n\t\t\tsuper(x,x);\r\n\t\t\tthis.cname=\"正方形\";\r\n\t\t\t//this一定要在super之后调用\r\n\t\t}\r\n\t}\r\n\t\r\n\tvar s1=new square(66);\r\n\ts1.zc();//zc集成自rect\r\n\ts1.mj();\r\n\ts1.say();//可以集成使用prototype定义的方法和属性。\r\n\n\n//# sourceURL=webpack:///./src/es6.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module.js */ \"./src/module.js\");\n\r\nconsole.log('圆面积：' + Object(_module_js__WEBPACK_IMPORTED_MODULE_0__[\"area\"])(4));\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/module.js":
/*!***********************!*\
  !*** ./src/module.js ***!
  \***********************/
/*! exports provided: area */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"area\", function() { return area; });\nfunction area(radius) {\r\n  return Math.PI * radius * radius;\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/module.js?");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi ./src/index.js ./src/es6.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/index.js */\"./src/index.js\");\nmodule.exports = __webpack_require__(/*! ./src/es6.js */\"./src/es6.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js_./src/es6.js?");

/***/ })

/******/ });