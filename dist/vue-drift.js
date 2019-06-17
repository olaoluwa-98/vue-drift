module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return install; });\nfunction appendScript(content) {\n  var script = document.createElement('script');\n  script.innerText = content;\n  script.async = true;\n  script.charset = 'utf-8';\n  document.body.appendChild(script);\n}\n\nvar installed = false;\n\nfunction loadInitScript(appId) {\n  if (typeof document === 'undefined' || typeof window === 'undefined') {\n    return;\n  }\n\n  if (installed) {\n    return;\n  }\n\n  var content = \"!function() {\\n    var t = window.driftt = window.drift = window.driftt || [];\\n    if (!t.init) {\\n      if (t.invoked) return void (window.console && console.error && console.error(\\\"Drift snippet included twice.\\\"));\\n      t.invoked = !0, t.methods = [ \\\"identify\\\", \\\"config\\\", \\\"track\\\", \\\"reset\\\", \\\"debug\\\", \\\"show\\\", \\\"ping\\\", \\\"page\\\", \\\"hide\\\", \\\"off\\\", \\\"on\\\" ],\\n      t.factory = function(e) {\\n        return function() {\\n          var n = Array.prototype.slice.call(arguments);\\n          return n.unshift(e), t.push(n), t;\\n        };\\n      }, t.methods.forEach(function(e) {\\n        t[e] = t.factory(e);\\n      }), t.load = function(t) {\\n        var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement(\\\"script\\\");\\n        o.type = \\\"text/javascript\\\", o.async = !0, o.crossorigin = \\\"anonymous\\\", o.src = \\\"https://js.driftt.com/include/\\\" + n + \\\"/\\\" + t + \\\".js\\\";\\n        var i = document.getElementsByTagName(\\\"script\\\")[0];\\n        i.parentNode.insertBefore(o, i);\\n      };\\n    }\\n  }();\\n  drift.SNIPPET_VERSION = '0.3.1';\\n  drift.load('\".concat(appId, \"');\");\n  appendScript(content);\n  installed = true;\n}\n\nfunction loadIdentifyScript(userId) {\n  var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n  if (userId === undefined) {\n    throw new Error('[vue-drift] missing the \"userId\" parameter');\n  }\n\n  var scriptText = \"!function () {\\n    drift.identify('\".concat(userId, \"', \").concat(JSON.stringify(attributes), \")\\n  }(window.drift);\");\n  appendScript(scriptText);\n}\n\nfunction install(Vue) {\n  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  var appId = options.appId;\n\n  if (appId === undefined) {\n    throw new Error('[vue-drift] missing the \"appId\" parameter');\n  }\n\n  Vue.prototype.$drift = Vue.$drift = {\n    identify: loadIdentifyScript\n  };\n  Vue.mixin({\n    mounted: function mounted() {\n      loadInitScript(appId);\n    }\n  });\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });