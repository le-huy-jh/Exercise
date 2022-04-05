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

/***/ "./src/constant.js":
/*!*************************!*\
  !*** ./src/constant.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst SELECTED_RESPONSE = \"SELECTED_RESPONSE\";\r\nconst CONSTRUCTED_RESPONSE = \"CONSTRUCTED_RESPONSE\";\r\nconst DEFAULT_TIME = 1000;\r\nconst CHECKBOX_TYPE = \"checkbox\";\r\nconst RADIO_TYPE = \"radio\";\r\nconst TEXT_TYPE = \"text\";\r\nconst HARD_MODE = \"hard\";\r\nconst EASY_MODE = \"easy\";\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n  SELECTED_RESPONSE,\r\n  CONSTRUCTED_RESPONSE,\r\n  DEFAULT_TIME,\r\n  CHECKBOX_TYPE,\r\n  RADIO_TYPE,\r\n  TEXT_TYPE,\r\n  HARD_MODE,\r\n  EASY_MODE,\r\n});\r\n\n\n//# sourceURL=webpack://final-exam/./src/constant.js?");

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"QUESTION_DATA\": () => (/* binding */ QUESTION_DATA)\n/* harmony export */ });\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ \"./src/constant.js\");\n\r\n\r\nconst QUESTION_DATA = [\r\n  {\r\n    type: _constant__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SELECTED_RESPONSE,\r\n    question: \"How Long Is One Day on Other Planets?\",\r\n    answers: [\"12\", \"24\", \"36\", \"55\"],\r\n    correct: [\"24\"],\r\n  },\r\n  {\r\n    type: _constant__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SELECTED_RESPONSE,\r\n    question: \"Where Does the Sun Rise?\",\r\n    answers: [\"East\", \"West\", \"South\", \"North\"],\r\n    correct: [\"East\"],\r\n  },\r\n  {\r\n    type: _constant__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SELECTED_RESPONSE,\r\n    question: \"Where Does the Sun set?\",\r\n    answers: [\"East\", \"West\", \"South\", \"North\"],\r\n    correct: [\"West\"],\r\n  },\r\n  {\r\n    type: _constant__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CONSTRUCTED_RESPONSE,\r\n    question: \"What is your name?\",\r\n  },\r\n  {\r\n    type: _constant__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SELECTED_RESPONSE,\r\n    question: \"Which is animal?\",\r\n    answers: [\"dog\", \"table\", \"turtle\", \"car\"],\r\n    correct: [\"dog\", \"turtle\"],\r\n  },\r\n  {\r\n    type: _constant__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CONSTRUCTED_RESPONSE,\r\n    question: \"How old are you?\",\r\n  },\r\n];\r\n\n\n//# sourceURL=webpack://final-exam/./src/data.js?");

/***/ }),

/***/ "./src/getContainers.js":
/*!******************************!*\
  !*** ./src/getContainers.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getContainers\": () => (/* binding */ getContainers)\n/* harmony export */ });\nconst getContainers = (config) => {\r\n  return {\r\n    questionContainer: document.querySelector(config.questionId),\r\n    answerContainer: document.querySelector(config.answerId),\r\n    scoreContainer: document.querySelector(config.scoreId),\r\n    submitButtonContainer: document.querySelector(config.submitButtonId),\r\n    resetButtonContainer: document.querySelector(config.resetButtonId),\r\n    timerContainer: document.querySelector(config.timerId),\r\n  };\r\n};\r\n\n\n//# sourceURL=webpack://final-exam/./src/getContainers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ \"./src/constant.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n/* harmony import */ var _getContainers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getContainers */ \"./src/getContainers.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _makeTimer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./makeTimer */ \"./src/makeTimer.js\");\n\r\n\r\n\r\n\r\n\r\nconst app = (config) => {\r\n  const {\r\n    questionId = \".question\",\r\n    answerId = \".answer\",\r\n    scoreId = \".score span\",\r\n    submitButtonId = \".submit\",\r\n    resetButtonId = \".reset\",\r\n    timerId = \".timer\",\r\n    mode = _constant__WEBPACK_IMPORTED_MODULE_0__[\"default\"].HARD_MODE,\r\n    increaseScore = 1,\r\n    questionClass = \"\",\r\n    name = \"answer\",\r\n    placeholder = \"Type here\",\r\n    constructedResponseType = _constant__WEBPACK_IMPORTED_MODULE_0__[\"default\"].TEXT_TYPE,\r\n    constructedResponseInputClass = \"\",\r\n    selectedResponseInputClass = \"\",\r\n    selectedResponseLabelClass = \"\",\r\n    QUESTION_DATA = _data__WEBPACK_IMPORTED_MODULE_1__.QUESTION_DATA,\r\n  } = config;\r\n  const {\r\n    questionContainer,\r\n    answerContainer,\r\n    scoreContainer: score,\r\n    submitButtonContainer: submitButton,\r\n    resetButtonContainer: resetButton,\r\n    timerContainer,\r\n  } = (0,_getContainers__WEBPACK_IMPORTED_MODULE_2__.getContainers)({\r\n    questionId,\r\n    answerId,\r\n    scoreId,\r\n    submitButtonId,\r\n    resetButtonId,\r\n    timerId,\r\n  });\r\n\r\n  const timer = (0,_makeTimer__WEBPACK_IMPORTED_MODULE_4__.makeTimer)(timerContainer);\r\n\r\n  const isCorrectSelectedQuestion = (answerSelected, rightAnswer) => {\r\n    if (\r\n      mode === _constant__WEBPACK_IMPORTED_MODULE_0__[\"default\"].HARD_MODE &&\r\n      (answerSelected.length < rightAnswer.length ||\r\n        answerSelected.length > rightAnswer.length)\r\n    )\r\n      return false;\r\n\r\n    for (let index = 0; index < answerSelected.length; index++) {\r\n      if (!rightAnswer.includes(answerSelected[index].value)) {\r\n        return false;\r\n      }\r\n    }\r\n\r\n    return true;\r\n  };\r\n\r\n  const submitAnswer = (question) => {\r\n    timer.stop();\r\n\r\n    if (question.type === _constant__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CONSTRUCTED_RESPONSE) return;\r\n\r\n    const answerSelected = document.querySelectorAll(\"input:checked\");\r\n\r\n    if (isCorrectSelectedQuestion(answerSelected, question.correct)) {\r\n      score.innerHTML = +score.innerHTML + increaseScore;\r\n    }\r\n  };\r\n\r\n  resetButton.onclick = () => {\r\n    createQuestion();\r\n  };\r\n\r\n  timerContainer.onclick = () => {\r\n    createQuestion();\r\n  };\r\n\r\n  const createQuestion = () => {\r\n    timer.stop();\r\n    timer.start();\r\n    const question = renderQuestion();\r\n    renderAnswer(question);\r\n  };\r\n\r\n  const getAnswerType = (question) =>\r\n    question.correct.length > 1 ? _constant__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CHECKBOX_TYPE : _constant__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RADIO_TYPE;\r\n\r\n  const renderQuestion = () => {\r\n    const rndQuestionIndex = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getRandomNum)({ max: QUESTION_DATA.length });\r\n    const newQuestion = QUESTION_DATA[rndQuestionIndex];\r\n    if (questionClass !== \"\") questionContainer.classList.add(className);\r\n    questionContainer.innerHTML = newQuestion.question;\r\n\r\n    submitButton.onclick = () => {\r\n      submitAnswer(newQuestion);\r\n      submitButton.onclick = \"\";\r\n    };\r\n\r\n    return newQuestion;\r\n  };\r\n\r\n  const renderAnswer = (question) => {\r\n    let child;\r\n\r\n    if (question.type === _constant__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SELECTED_RESPONSE) {\r\n      const inputType = getAnswerType(question);\r\n      child = question.answers\r\n        .map(\r\n          (\r\n            answer\r\n          ) => `<input class=\"${selectedResponseInputClass}\" type=\"${inputType}\" id=\"${answer}\" name=\"${name}\" value=\"${answer}\" />\r\n      <label class=\"${selectedResponseLabelClass}\" for=\"${answer}\">${answer}</label><br />`\r\n        )\r\n        .join(\"\");\r\n    } else {\r\n      child = `<input class=\"${constructedResponseInputClass}\" type=\"${constructedResponseType}\" placeholder=\"${placeholder}\" />`;\r\n    }\r\n    answerContainer.innerHTML = child;\r\n  };\r\n};\r\n\r\napp({ mode: _constant__WEBPACK_IMPORTED_MODULE_0__[\"default\"].EASY_MODE });\r\n\n\n//# sourceURL=webpack://final-exam/./src/index.js?");

/***/ }),

/***/ "./src/makeTimer.js":
/*!**************************!*\
  !*** ./src/makeTimer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeTimer\": () => (/* binding */ makeTimer)\n/* harmony export */ });\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ \"./src/constant.js\");\n\r\nconst makeTimer = (\r\n  timerContainer,\r\n  config = { time: _constant__WEBPACK_IMPORTED_MODULE_0__[\"default\"].DEFAULT_TIME, initialValue: 0 }\r\n) => {\r\n  let intervalId;\r\n  let count = config.initialValue;\r\n  return {\r\n    start: () => {\r\n      intervalId = setInterval(() => {\r\n        timerContainer.innerHTML = count++;\r\n      }, config.time);\r\n    },\r\n    stop: () => {\r\n      clearInterval(intervalId);\r\n    },\r\n  };\r\n};\r\n\n\n//# sourceURL=webpack://final-exam/./src/makeTimer.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRandomNum\": () => (/* binding */ getRandomNum)\n/* harmony export */ });\nconst getRandomNum = (config) => {\r\n  const {max, min = 0} = config\r\n  return Math.floor(Math.random() * (max - min)) + min;\r\n};\r\n\n\n//# sourceURL=webpack://final-exam/./src/utils.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;