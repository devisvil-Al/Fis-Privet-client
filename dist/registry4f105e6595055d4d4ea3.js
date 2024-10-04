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

/***/ "./src/Assets/css/nullstyle.css":
/*!**************************************!*\
  !*** ./src/Assets/css/nullstyle.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fis-privet/./src/Assets/css/nullstyle.css?");

/***/ }),

/***/ "./src/Assets/css/registry.css":
/*!*************************************!*\
  !*** ./src/Assets/css/registry.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fis-privet/./src/Assets/css/registry.css?");

/***/ }),

/***/ "./src/Components/Api.js":
/*!*******************************!*\
  !*** ./src/Components/Api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   api: () => (/* binding */ api)\n/* harmony export */ });\n'http://localhost:3001/'\r\n'https://fisprivet.onrender.com/'\r\n\r\nclass Api {\r\n    url = 'http://localhost:3001/'\r\n    \r\n    registry(body){\r\n        return fetch(this.url + 'user/registry', {\r\n            method: 'POST',\r\n            headers: {\r\n                'Content-Type': 'application/json'\r\n            },\r\n            body: JSON.stringify(body)\r\n        })\r\n    }\r\n\r\n    async checkUser(data){\r\n        const res = await fetch(this.url + 'user/check', {\r\n            method: 'POST',\r\n            headers: {\r\n             'Content-Type': 'application/json'\r\n            },\r\n            body: JSON.stringify(data)\r\n        })\r\n        return await res.json()\r\n    }\r\n\r\n    async auth(id){\r\n        const res = await fetch(this.url + 'user/auth', {\r\n            method: 'POST',\r\n            headers: {\r\n             'Content-Type': 'application/json'\r\n            },\r\n            body: JSON.stringify({id})\r\n        })\r\n        return await res.json()\r\n    }\r\n\r\n    async getFriends(ids){\r\n        const res = await fetch(this.url + 'user/getFriends', {\r\n            method: 'POST',\r\n            headers: {\r\n             'Content-Type': 'application/json'\r\n            },\r\n            body: JSON.stringify({ids})\r\n        })\r\n        return await res.json()\r\n    }\r\n\r\n    async getCristalls(id){\r\n        const res = await fetch(this.url + 'user/getCristalls/' + id)\r\n        return await res.json()\r\n    }\r\n\r\n    updateProfile(data, id){\r\n        return fetch(this.url + 'user/updateProfile/' + id , {\r\n            method: 'PATCH',\r\n            headers: {\r\n                'Content-Type': 'application/json'\r\n            },\r\n            body: JSON.stringify(data)\r\n        }).then(res => res.json())\r\n    }\r\n\r\n    updatePreferences(data, id){\r\n        return fetch(this.url + 'user/updatePreferences/' + id , {\r\n            method: 'PATCH',\r\n            headers: {\r\n                'Content-Type': 'application/json'\r\n            },\r\n            body: JSON.stringify(data)\r\n        }).then(res => res.json())\r\n    }\r\n\r\n    updateNotification(data, id){\r\n        return fetch(this.url + 'user/updateNotification/' + id , {\r\n            method: 'PATCH',\r\n            headers: {\r\n                'Content-Type': 'application/json'\r\n            },\r\n            body: JSON.stringify(data)\r\n        }).then(res => res.json())\r\n    }\r\n\r\n\r\n    getAppData (id){\r\n        return fetch(this.url + 'app/events/' + id)\r\n            .then(res => res.json())\r\n    }\r\n\r\n\r\n    async setEventState(id, actionName){\r\n        const res = await fetch(this.url + 'app/event-state/?id=' + id + '?actionName=' + actionName, {\r\n            method: 'PATCH',\r\n            headers: {\r\n                'Content-Type': 'application/json'\r\n            },\r\n            body: JSON.stringify({id, actionName})\r\n        })\r\n        return await res.json()\r\n    }\r\n\r\n    async checkEventSubscribe(id, actionName){\r\n        const res = await fetch(this.url + 'app/event-subscribe', {\r\n            method: 'PATCH',\r\n            headers: {\r\n                'Content-Type': 'application/json'\r\n            },\r\n            body: JSON.stringify({id, actionName})\r\n        })\r\n        return await res.json()\r\n    }\r\n\r\n    getTickets(tribune, id){\r\n        return fetch(this.url + 'tickets' + `?tribune=${tribune}&id=${id}`)\r\n            .then(res => res.json())\r\n    }\r\n\r\n    getProfileStatistics(id){\r\n        return fetch(this.url + 'user/getProfileStatistics/' + id)\r\n            .then(res => res.json())\r\n    }\r\n\r\n    orderTicket(data){\r\n        return fetch(this.url + 'tickets', {\r\n            method: 'POST',\r\n            headers: {\r\n                'Content-Type': 'application/json'\r\n            },\r\n            body: JSON.stringify(data)\r\n        })\r\n    }\r\n\r\n    sendTicketToTelegram(tickets, user){\r\n        return fetch(this.url + 'qr', {\r\n            method: 'POST',\r\n            headers: {\r\n                'Content-Type': 'application/json'\r\n            },\r\n            body: JSON.stringify({tickets, user})\r\n        }).then(res => res.json())\r\n    }\r\n\r\n    getTicketsByUser(id){\r\n        return fetch(this.url + 'tickets/' + id)\r\n            .then(res => res.json())\r\n    }\r\n\r\n}\r\n\r\n\r\nconst api = new Api()\n\n//# sourceURL=webpack://fis-privet/./src/Components/Api.js?");

/***/ }),

/***/ "./src/Components/Slider.js":
/*!**********************************!*\
  !*** ./src/Components/Slider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   scrollCommand: () => (/* binding */ scrollCommand),\n/* harmony export */   selectSlide: () => (/* binding */ selectSlide),\n/* harmony export */   wheelScroll: () => (/* binding */ wheelScroll)\n/* harmony export */ });\nfunction scrollCommand(e, slides){\r\n    const fullrange = e.target.scrollLeft\r\n    const range = slides[0].clientWidth\r\n    slides.forEach((el) => el.classList.remove('slide__active'))\r\n    const countElement = Math.ceil((fullrange - 80) / range) \r\n    return countElement\r\n}\r\n\r\nfunction selectSlide(el, sliderCommand){\r\n    sliderCommand.scroll({\r\n        left:   el.offsetLeft - (el.clientWidth / 2 + 10) ,\r\n        behavior: 'smooth'\r\n    })\r\n}\r\n\r\n\r\nfunction wheelScroll (e, config){\r\n    if(e.wheelDelta > 0){\r\n        config.container.children.length > config.count ? config.count++ : config.count\r\n    }else {\r\n        0 < config.count ? config.count-- : config.count\r\n    }\r\n    config.container.scroll({left: config.container.clientWidth * config.count , behavior: 'smooth'})\r\n}\n\n//# sourceURL=webpack://fis-privet/./src/Components/Slider.js?");

/***/ }),

/***/ "./src/Pages/Registry.js":
/*!*******************************!*\
  !*** ./src/Pages/Registry.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Assets_css_nullstyle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Assets/css/nullstyle.css */ \"./src/Assets/css/nullstyle.css\");\n/* harmony import */ var _Assets_css_registry_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Assets/css/registry.css */ \"./src/Assets/css/registry.css\");\n/* harmony import */ var _src_Components_Api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/Components/Api.js */ \"./src/Components/Api.js\");\n/* harmony import */ var _src_Components_Slider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/Components/Slider.js */ \"./src/Components/Slider.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst main = document.querySelector('.main')\r\nconst registryBtn = document.querySelector('.hello__registry')\r\nconst registry = document.querySelector('.form')\r\nconst sliderCommand = document.querySelector('.quiz__slider_container')\r\nconst quiz = document.querySelector('.quiz__container')\r\nconst leftBtn = document.querySelector('.left__btn')\r\nconst rightBtn = document.querySelector('.right__btn')\r\nconst slides =  Array.from(sliderCommand.children)\r\nconst formCheckInputs = quiz.querySelectorAll('label')\r\nconst quizIndicators = document.querySelectorAll('.quiz__indicator span')\r\nconst preloader = document.querySelector('.preloader')\r\nconst quizUserName = document.querySelector('.quiz__user_name')\r\nconst registryTelegramId = document.querySelector('.hello__telegram_id')\r\nlet count = 0\r\nconst data = {}\r\n\r\nfunction validation(input, submit, inputs){\r\n    submit.disabled = ![...inputs].every(inp=> inp.validity.valid)\r\n}\r\n\r\nfunction scrollMain(range){\r\n    main.scroll({\r\n        top: range,\r\n        behavior: 'smooth'\r\n    })\r\n}\r\n\r\nasync function submitForm(e) {\r\n    e.preventDefault()\r\n    data.firstName = e.target.elements.firstName.value\r\n    data.lastName = e.target.elements.lastName.value\r\n    scrollMain(6000)\r\n}\r\n\r\nasync function checkTelegrammId(){\r\n    const tg = window.Telegram.WebApp\r\n    console.log(tg.initData)\r\n    const dataHash = 'query_id=AAFCPbI6AAAAAEI9sjpkKRH0&user=%7B%22id%22%3A984759618%2C%22first_name%22%3A%22%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22devisvil%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1721492698&hash=c5c877983e0d790d0868f83006cf0f6c3305e0009b67de94266b5529ae711a9f'\r\n    const user = {allows_write_to_pm :  true, first_name :  \"Александр\", id :  984759618, language_code :  \"ru\", last_name :  \"\", username :  \"devisvil\"}\r\n    _src_Components_Api_js__WEBPACK_IMPORTED_MODULE_2__.api.checkUser({data: tg.initData || dataHash, user: tg.initDataUnsafe.user || user })\r\n        .then(res => {\r\n            console.log(res);\r\n            console.log(preloader);\r\n            data.telegramId = res.user.id\r\n            data.firstName = res.user.first_name\r\n            preloader.style.display = 'none'\r\n            registry.elements['firstName'].value = res.user.first_name\r\n            quizUserName.textContent = res.user.first_name\r\n            registryTelegramId.textContent = '@' + res.user.username\r\n        }) \r\n}\r\n        \r\ncheckTelegrammId()\r\n                \r\nfunction enableValidation(selectorInput, selectorSubmit){\r\n    const inputs = document.querySelectorAll(selectorInput)\r\n    const submit = document.querySelector(selectorSubmit)\r\n    inputs.forEach(input => input.addEventListener('input', () => validation(input, submit, inputs)))\r\n}\r\n\r\nfunction send(data){\r\n    _src_Components_Api_js__WEBPACK_IMPORTED_MODULE_2__.api.registry(data)\r\n        .then(res =>  {\r\n            if(res.ok) window.location.href = 'index.html'\r\n        })\r\n}\r\n\r\nfunction activeBtn (elements, element){\r\n    elements.forEach(item => item.classList.remove('active'))\r\n    element.classList.add('active')\r\n}\r\n\r\n\r\n\r\nfunction enableVariant(el){\r\n    el.previousElementSibling.checked = true\r\n    data.team = [...formCheckInputs].filter((el) => el.previousElementSibling.checked).map((el) => el.textContent)[0]\r\n    rightBtn.disabled = ![...formCheckInputs].some((el) => el.previousElementSibling.checked)\r\n}\r\n\r\nregistry.addEventListener('submit', submitForm)\r\nsliderCommand.addEventListener('scroll', (e) => {\r\n    const countElement = (0,_src_Components_Slider_js__WEBPACK_IMPORTED_MODULE_3__.scrollCommand) (e, slides)\r\n    if( slides[countElement] && !slides[countElement]?.classList.contains('disabled') ){\r\n        slides[countElement].classList.add('slide__active')\r\n       data['club'] = slides[countElement].querySelector('img').alt\r\n       rightBtn.disabled = false\r\n    } else {\r\n        rightBtn.disabled = true\r\n    }\r\n})\r\nregistryBtn.addEventListener('click', () => scrollMain(700))\r\n\r\nleftBtn.addEventListener('click', () => {\r\n    if(quiz.scrollLeft === 0){\r\n        scrollMain(700)\r\n        return\r\n    }\r\n    quiz.scroll({left: 0, behavior: 'smooth'})\r\n    leftBtn.disabled = false\r\n    rightBtn.disabled = false\r\n    count -= 1\r\n    activeBtn(quizIndicators, quizIndicators[count])\r\n})\r\n\r\n\r\n\r\nrightBtn.addEventListener('click', () => {\r\n    quiz.scroll({left: quiz.clientWidth + 20, behavior: 'smooth'})\r\n    rightBtn.disabled = true\r\n    leftBtn.disabled = false\r\n    if(count < 1) count += 1\r\n    activeBtn(quizIndicators, quizIndicators[count])\r\n    console.log(data);\r\n    if(Object.keys(data).length === 5){\r\n        send(data)\r\n    }\r\n})\r\n\r\n\r\nslides.forEach((el) => el.addEventListener('click', () => (0,_src_Components_Slider_js__WEBPACK_IMPORTED_MODULE_3__.selectSlide)(el, sliderCommand)))\r\nformCheckInputs.forEach((el) => el.addEventListener('click', () => enableVariant(el)))\r\nenableValidation('.form__container input', '.submit')\n\n//# sourceURL=webpack://fis-privet/./src/Pages/Registry.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/Pages/Registry.js");
/******/ 	
/******/ })()
;