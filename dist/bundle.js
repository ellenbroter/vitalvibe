/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ \"./src/js/header.js\");\n/* harmony import */ var _scrollReveal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scrollReveal.js */ \"./src/js/scrollReveal.js\");\n/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.js */ \"./src/js/navbar.js\");\n\n\n\n\nconst navTogglers = document.querySelectorAll(\"[data-nav-toggler]\");\nconst navLinks = document.querySelectorAll(\"[data-nav-link]\");\n\nconst addEventOnElem = (elem, type, callback) => {\n  if (elem.length > 1) {\n    for (let i = 0; i < elem.length; i++) {\n      elem[i].addEventListener(type, callback);\n    }\n  } else {\n    elem.addEventListener(type, callback);\n  }\n};\n\naddEventOnElem(navTogglers, \"click\", _navbar_js__WEBPACK_IMPORTED_MODULE_2__.toggleNavbar);\naddEventOnElem(navLinks, \"click\", _navbar_js__WEBPACK_IMPORTED_MODULE_2__.closeNavbar);\n\nwindow.addEventListener(\"scroll\", _header_js__WEBPACK_IMPORTED_MODULE_0__.handleScroll);\n(0,_scrollReveal_js__WEBPACK_IMPORTED_MODULE_1__.revealSections)();\naddEventOnElem(window, \"scroll\", _scrollReveal_js__WEBPACK_IMPORTED_MODULE_1__.revealSections);\n\n\n//# sourceURL=webpack://final-assignment/./src/js/app.js?");

/***/ }),

/***/ "./src/js/header.js":
/*!**************************!*\
  !*** ./src/js/header.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleScroll: () => (/* binding */ handleScroll)\n/* harmony export */ });\nconst header = document.querySelector(\"[data-header]\");\nconst backTopBtn = document.querySelector(\"[data-back-top-btn]\");\n\nconst handleScroll = () => {\n  if (window.scrollY >= 100) {\n    header.classList.add(\"active\");\n    backTopBtn.classList.add(\"active\");\n  } else {\n    header.classList.remove(\"active\");\n    backTopBtn.classList.remove(\"active\");\n  }\n};\n\n\n\n//# sourceURL=webpack://final-assignment/./src/js/header.js?");

/***/ }),

/***/ "./src/js/navbar.js":
/*!**************************!*\
  !*** ./src/js/navbar.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeNavbar: () => (/* binding */ closeNavbar),\n/* harmony export */   toggleNavbar: () => (/* binding */ toggleNavbar)\n/* harmony export */ });\nconst navbar = document.querySelector(\"[data-navbar]\");\nconst overlay = document.querySelector(\"[data-overlay]\");\n\nconst toggleNavbar = () => {\n  navbar.classList.toggle(\"active\");\n  overlay.classList.toggle(\"active\");\n};\n\nconst closeNavbar = () => {\n  navbar.classList.remove(\"active\");\n  overlay.classList.remove(\"active\");\n};\n\n\n\n//# sourceURL=webpack://final-assignment/./src/js/navbar.js?");

/***/ }),

/***/ "./src/js/scrollReveal.js":
/*!********************************!*\
  !*** ./src/js/scrollReveal.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   revealSections: () => (/* binding */ revealSections)\n/* harmony export */ });\nconst sections = document.querySelectorAll(\"[data-section]\");\n\nconst revealSections = () => {\n  for (let i = 0; i < sections.length; i++) {\n    if (sections[i].getBoundingClientRect().top < window.innerHeight / 2) {\n      sections[i].classList.add(\"active\");\n    }\n  }\n};\n\n\n\n//# sourceURL=webpack://final-assignment/./src/js/scrollReveal.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;