/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/modules/promo/openHiddenСontent.js":
/*!********************************************************!*\
  !*** ./src/scripts/modules/promo/openHiddenСontent.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openHiddenContent: () => (/* binding */ openHiddenContent)
/* harmony export */ });
function openHiddenContent() {
  var btn = document.querySelector('#open-hidden-content');
  var content = document.querySelector('#hidden-content');
  if (!(btn && content)) return;
  content.computedStyleMap.display = 'none';
  btn.addEventListener('click', function () {
    content.computedStyleMap.display = null;
  });
}

/***/ }),

/***/ "./src/scripts/modules/promo/quiz.js":
/*!*******************************************!*\
  !*** ./src/scripts/modules/promo/quiz.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initQuiz: () => (/* binding */ initQuiz)
/* harmony export */ });
function initQuiz() {
  var quizSectionCol = document.querySelectorAll('.quiz');
  quizSectionCol.forEach(function (quizSection) {
    var options = quizSection.querySelectorAll('.quiz__btn');
    function clickHandler(event) {
      quizSection.classList.add('quiz_selected');
      var correct = event.currentTarget.dataset.correct === 'true';
      if (correct) {
        event.currentTarget.classList.add('quiz__btn_correct');
      } else {
        event.currentTarget.classList.add('quiz__btn_incorrect');
      }
      options.forEach(function (delOption) {
        delOption.removeEventListener('click', clickHandler);
      });
    }
    options.forEach(function (option) {
      option.addEventListener('click', clickHandler);
    });
  });
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************************!*\
  !*** ./src/scripts/promo-wcc.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_promo_quiz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/promo/quiz */ "./src/scripts/modules/promo/quiz.js");
/* harmony import */ var _modules_promo_openHidden_ontent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/promo/openHiddenСontent */ "./src/scripts/modules/promo/openHiddenСontent.js");


(0,_modules_promo_quiz__WEBPACK_IMPORTED_MODULE_0__.initQuiz)();
(0,_modules_promo_openHidden_ontent__WEBPACK_IMPORTED_MODULE_1__.openHiddenContent)();
})();

/******/ })()
;
//# sourceMappingURL=promo-wcc.js.map