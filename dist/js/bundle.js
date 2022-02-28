/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://soloyal/./src/scss/index.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/index.scss */ \"./src/scss/index.scss\");\n/* harmony import */ var _js_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/navbar */ \"./src/js/navbar.js\");\n/* harmony import */ var _js_navbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_navbar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_hover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/hover */ \"./src/js/hover.js\");\n/* harmony import */ var _js_hover__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_hover__WEBPACK_IMPORTED_MODULE_2__);\n// SCSS\n\n\n// SCRIPTS\n\n\n\n\n//# sourceURL=webpack://soloyal/./src/index.js?");

/***/ }),

/***/ "./src/js/hover.js":
/*!*************************!*\
  !*** ./src/js/hover.js ***!
  \*************************/
/***/ (() => {

eval("document.querySelectorAll('.card').forEach((card) => {\n  card.addEventListener('mouseenter', function (e) {\n    document.documentElement.classList.add('overlay-active')\n    this.classList.add('active-card')\n  })\n\n  card.addEventListener('mouseleave', function (e) {\n    document.documentElement.classList.remove('overlay-active')\n    this.classList.remove('active-card')\n  })\n})\n\n\n//# sourceURL=webpack://soloyal/./src/js/hover.js?");

/***/ }),

/***/ "./src/js/navbar.js":
/*!**************************!*\
  !*** ./src/js/navbar.js ***!
  \**************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', () => {\n  // Get all \"navbar-burger\" elements\n  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)\n\n  // Check if there are any navbar burgers\n  if ($navbarBurgers.length > 0) {\n    // Add a click event on each of them\n    $navbarBurgers.forEach((el) => {\n      el.addEventListener('click', () => {\n        // Get the target from the \"data-target\" attribute\n        const target = el.dataset.target\n        const $target = document.getElementById(target)\n\n        // Toggle the \"is-active\" class on both the \"navbar-burger\" and the \"navbar-menu\"\n        el.classList.toggle('is-active')\n        $target.classList.toggle('is-active')\n      })\n    })\n  }\n\n  // Hide the menu when clicked outside\n  document.documentElement.addEventListener('click', (e) => {\n    if (!Boolean(e.target.closest('.navbar'))) {\n      document.querySelector('#navbar').classList.remove('is-active')\n      document.querySelector('.navbar-burger').classList.remove('is-active')\n    }\n  })\n})\n\n\n//# sourceURL=webpack://soloyal/./src/js/navbar.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;