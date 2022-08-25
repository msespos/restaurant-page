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

/***/ "./src/aboutPage.js":
/*!**************************!*\
  !*** ./src/aboutPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"aboutPage\": () => (/* binding */ aboutPage)\n/* harmony export */ });\n/* harmony import */ var _images_HF_chicken_corn_tacos_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/HF-chicken-corn-tacos.jpg */ \"./src/images/HF-chicken-corn-tacos.jpg\");\n\n\nconst aboutPage = () => {\n  const div = document.createElement('div');\n  const header = document.createElement('h1');\n  header.textContent = \"HF Kitchens'n'such\";\n  header.style.color = \"purple\";\n  div.appendChild(header);\n  const image = document.createElement('img');\n  image.src = _images_HF_chicken_corn_tacos_jpg__WEBPACK_IMPORTED_MODULE_0__;\n  image.alt = \"Chicken/Corn Tacos\";\n  image.width = \"500\";\n  div.appendChild(image);\n  const description = document.createElement('p');\n  description.textContent = \"Love the idea of a meal from a kit, but don't feel like\\\n    cooking a mealkit meal? We've got you covered! At HFK'n's, we make mealkit meals\\\n    come to life in a cozy restaurant setting. Just order your meal using our app and\\\n    we'll deliver it to your table, freshly cooked, right from the kit! No messy\\\n    unboxing, chopping, opening packages or cooking at all. It's what a mealkit meal\\\n    should be. No effort, just pretty good food at restaurant prices. Just sit back\\\n    and relax!\";\n  div.appendChild(description);\n  return div;\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/aboutPage.js?");

/***/ }),

/***/ "./src/contactPage.js":
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactPage\": () => (/* binding */ contactPage)\n/* harmony export */ });\n/* harmony import */ var _images_HF_roasted_veggies_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/HF-roasted-veggies.jpg */ \"./src/images/HF-roasted-veggies.jpg\");\n\n\nconst contactPage = () => {\n  const div = document.createElement('div');\n  const header = document.createElement('h1');\n  header.textContent = \"HF Kitchens'n'such\";\n  header.style.color = \"purple\";\n  div.appendChild(header);\n  const image = document.createElement('img');\n  image.src = _images_HF_roasted_veggies_jpg__WEBPACK_IMPORTED_MODULE_0__;\n  image.alt = \"Roasted Veggies\";\n  image.width = \"300\";\n  div.appendChild(image);\n  const description = document.createElement('p');\n  description.textContent = \"Phone, Email, hours, blah blah blaaha\";\n  div.appendChild(description);\n  return div;\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/contactPage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _aboutPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aboutPage */ \"./src/aboutPage.js\");\n/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuPage */ \"./src/menuPage.js\");\n/* harmony import */ var _contactPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactPage */ \"./src/contactPage.js\");\n\n\n\n\nconst tab = document.createElement('div')\nconst tabs = document.createElement('div');\nconst homeTab = document.createElement('h2');\nhomeTab.textContent = \"Home\"\nhomeTab.style.fontStyle = \"italic\";\nhomeTab.style.color = \"purple\";\nhomeTab.addEventListener('click', () => {\n  tab.replaceChildren();\n  tab.appendChild((0,_aboutPage__WEBPACK_IMPORTED_MODULE_0__.aboutPage)());\n});\ntabs.appendChild(homeTab);\nconst menuTab = document.createElement('h2');\nmenuTab.textContent = \"Menu\"\nmenuTab.style.fontStyle = \"italic\";\nmenuTab.style.color = \"purple\";\nmenuTab.addEventListener('click', () => {\n  tab.replaceChildren();\n  tab.appendChild((0,_menuPage__WEBPACK_IMPORTED_MODULE_1__.menuPage)());\n});\ntabs.appendChild(menuTab);\nconst contactTab = document.createElement('h2');\ncontactTab.textContent = \"Contact Us\"\ncontactTab.style.fontStyle = \"italic\";\ncontactTab.style.color = \"purple\";\ncontactTab.addEventListener('click', () => {\n  tab.replaceChildren();\n  tab.appendChild((0,_contactPage__WEBPACK_IMPORTED_MODULE_2__.contactPage)());\n});\ntabs.appendChild(contactTab);\n//render a background image too, later\nconst div = document.getElementById(\"content\");\ndiv.appendChild(tabs);\ndiv.appendChild(tab);\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuPage\": () => (/* binding */ menuPage)\n/* harmony export */ });\n/* harmony import */ var _images_HF_roasted_veggies_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/HF-roasted-veggies.jpg */ \"./src/images/HF-roasted-veggies.jpg\");\n\n\nconst menuPage = () => {\n  const div = document.createElement('div');\n  const header = document.createElement('h1');\n  header.textContent = \"HF Kitchens'n'such\";\n  header.style.color = \"purple\";\n  div.appendChild(header);\n  const image = document.createElement('img');\n  image.src = _images_HF_roasted_veggies_jpg__WEBPACK_IMPORTED_MODULE_0__;\n  image.alt = \"Roasted Veggies\";\n  image.width = \"300\";\n  div.appendChild(image);\n  const description = document.createElement('p');\n  description.textContent = \"Our first recipe has us thinking outside the box.\\\n    We took two different mealkits and grabbed only the roasted veggie parts, and mixed\\\n    and matched the spices provided to create something we like to call an original\\\n    recipe! Enjoy this feast of veggie roast!\";\n  div.appendChild(description);\n  return div;\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menuPage.js?");

/***/ }),

/***/ "./src/images/HF-chicken-corn-tacos.jpg":
/*!**********************************************!*\
  !*** ./src/images/HF-chicken-corn-tacos.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8370bf288b30755a3d3b.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/HF-chicken-corn-tacos.jpg?");

/***/ }),

/***/ "./src/images/HF-roasted-veggies.jpg":
/*!*******************************************!*\
  !*** ./src/images/HF-roasted-veggies.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"04ca6e7187c9cb919e59.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/HF-roasted-veggies.jpg?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;