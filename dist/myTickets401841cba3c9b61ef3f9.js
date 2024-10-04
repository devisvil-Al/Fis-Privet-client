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

/***/ "./src/Assets/css/orderTicket.css":
/*!****************************************!*\
  !*** ./src/Assets/css/orderTicket.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fis-privet/./src/Assets/css/orderTicket.css?");

/***/ }),

/***/ "./src/Components/Api.js":
/*!*******************************!*\
  !*** ./src/Components/Api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   api: () => (/* binding */ api)\n/* harmony export */ });\n'http://localhost:3001/'\r\n'https://fisprivet.onrender.com/'\r\n\r\nclass Api {\r\n    url = 'http://localhost:3001/'\r\n    \r\n    registry(body){\r\n        return fetch(this.url + 'user/registry', {\r\n            method: 'POST',\r\n            headers: {\r\n                'Content-Type': 'application/json'\r\n            },\r\n            body: JSON.stringify(body)\r\n        })\r\n    }\r\n\r\n    async checkUser(data){\r\n        const res = await fetch(this.url + 'user/check', {\r\n            method: 'POST',\r\n            headers: {\r\n             'Content-Type': 'application/json'\r\n            },\r\n            body: JSON.stringify(data)\r\n        })\r\n        return await res.json()\r\n    }\r\n\r\n    async auth(id){\r\n        const res = await fetch(this.url + 'user/auth', {\r\n            method: 'POST',\r\n            headers: {\r\n             'Content-Type': 'application/json'\r\n            },\r\n            body: JSON.stringify({id})\r\n        })\r\n        return await res.json()\r\n    }\r\n\r\n    async getFriends(ids){\r\n        const res = await fetch(this.url + 'user/getFriends', {\r\n            method: 'POST',\r\n            headers: {\r\n             'Content-Type': 'application/json'\r\n            },\r\n            body: JSON.stringify({ids})\r\n        })\r\n        return await res.json()\r\n    }\r\n\r\n    async getCristalls(id){\r\n        const res = await fetch(this.url + 'user/getCristalls/' + id)\r\n        return await res.json()\r\n    }\r\n\r\n    updateProfile(data, id){\r\n        return fetch(this.url + 'user/updateProfile/' + id , {\r\n            method: 'PATCH',\r\n            headers: {\r\n                'Content-Type': 'application/json'\r\n            },\r\n            body: JSON.stringify(data)\r\n        }).then(res => res.json())\r\n    }\r\n\r\n    updatePreferences(data, id){\r\n        return fetch(this.url + 'user/updatePreferences/' + id , {\r\n            method: 'PATCH',\r\n            headers: {\r\n                'Content-Type': 'application/json'\r\n            },\r\n            body: JSON.stringify(data)\r\n        }).then(res => res.json())\r\n    }\r\n\r\n    updateNotification(data, id){\r\n        return fetch(this.url + 'user/updateNotification/' + id , {\r\n            method: 'PATCH',\r\n            headers: {\r\n                'Content-Type': 'application/json'\r\n            },\r\n            body: JSON.stringify(data)\r\n        }).then(res => res.json())\r\n    }\r\n\r\n\r\n    getAppData (id){\r\n        return fetch(this.url + 'app/events/' + id)\r\n            .then(res => res.json())\r\n    }\r\n\r\n\r\n    async setEventState(id, actionName){\r\n        const res = await fetch(this.url + 'app/event-state/?id=' + id + '?actionName=' + actionName, {\r\n            method: 'PATCH',\r\n            headers: {\r\n                'Content-Type': 'application/json'\r\n            },\r\n            body: JSON.stringify({id, actionName})\r\n        })\r\n        return await res.json()\r\n    }\r\n\r\n    async checkEventSubscribe(id, actionName){\r\n        const res = await fetch(this.url + 'app/event-subscribe', {\r\n            method: 'PATCH',\r\n            headers: {\r\n                'Content-Type': 'application/json'\r\n            },\r\n            body: JSON.stringify({id, actionName})\r\n        })\r\n        return await res.json()\r\n    }\r\n\r\n    getTickets(tribune, id){\r\n        return fetch(this.url + 'tickets' + `?tribune=${tribune}&id=${id}`)\r\n            .then(res => res.json())\r\n    }\r\n\r\n    getProfileStatistics(id){\r\n        return fetch(this.url + 'user/getProfileStatistics/' + id)\r\n            .then(res => res.json())\r\n    }\r\n\r\n    orderTicket(data){\r\n        return fetch(this.url + 'tickets', {\r\n            method: 'POST',\r\n            headers: {\r\n                'Content-Type': 'application/json'\r\n            },\r\n            body: JSON.stringify(data)\r\n        })\r\n    }\r\n\r\n    sendTicketToTelegram(tickets, user){\r\n        return fetch(this.url + 'qr', {\r\n            method: 'POST',\r\n            headers: {\r\n                'Content-Type': 'application/json'\r\n            },\r\n            body: JSON.stringify({tickets, user})\r\n        }).then(res => res.json())\r\n    }\r\n\r\n    getTicketsByUser(id){\r\n        return fetch(this.url + 'tickets/' + id)\r\n            .then(res => res.json())\r\n    }\r\n\r\n}\r\n\r\n\r\nconst api = new Api()\n\n//# sourceURL=webpack://fis-privet/./src/Components/Api.js?");

/***/ }),

/***/ "./src/Components/init.js":
/*!********************************!*\
  !*** ./src/Components/init.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   check: () => (/* binding */ check),\n/* harmony export */   disableBtn: () => (/* binding */ disableBtn),\n/* harmony export */   enableBtn: () => (/* binding */ enableBtn),\n/* harmony export */   levelName: () => (/* binding */ levelName),\n/* harmony export */   levelPoint: () => (/* binding */ levelPoint)\n/* harmony export */ });\n/* harmony import */ var _src_Assets_img_userStoun_granite_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../src/Assets/img/userStoun/granite.png */ \"./src/Assets/img/userStoun/granite.png\");\n/* harmony import */ var _src_Assets_img_userStoun_agat_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/Assets/img/userStoun/agat.png */ \"./src/Assets/img/userStoun/agat.png\");\n/* harmony import */ var _src_Assets_img_userStoun_topaz_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/Assets/img/userStoun/topaz.png */ \"./src/Assets/img/userStoun/topaz.png\");\n/* harmony import */ var _src_Assets_img_userStoun_sapphire_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/Assets/img/userStoun/sapphire.png */ \"./src/Assets/img/userStoun/sapphire.png\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nasync function check (init, api){\r\n    const tg = window.Telegram.WebApp\r\n    const dataHash = 'query_id=AAFCPbI6AAAAAEI9sjpkKRH0&user=%7B%22id%22%3A984759618%2C%22first_name%22%3A%22%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22devisvil%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1721492698&hash=c5c877983e0d790d0868f83006cf0f6c3305e0009b67de94266b5529ae711a9f'\r\n    const user = {allows_write_to_pm :  true, first_name :  \"Александр\", id :  984759618, language_code :  \"ru\", last_name :  \"\", username :  \"devisvil\"}\r\n    const check = await api.checkUser({data: tg.initData || dataHash, user: {...tg.initDataUnsafe.user} || {...user} })\r\n    if(check.success){\r\n        const data = await api.auth(tg.initDataUnsafe?.user?.id || user.id)\r\n        if(!data.success){\r\n            window.location.href = '../Registry.html'\r\n            modalGreetings.classList.remove('modal-visible') \r\n        } else {\r\n            setTimeout(() => {\r\n                init(data.user)\r\n            }, 1000)\r\n        }\r\n    }\r\n}\r\n\r\nconst levelPoint = {\r\n    1: 0,\r\n    2: 350,\r\n    3: 900,\r\n    4: 2000,\r\n    5: 4000,\r\n}\r\n\r\nconst levelName = {\r\n    1: {name : 'Гранит', img: _src_Assets_img_userStoun_granite_png__WEBPACK_IMPORTED_MODULE_0__, text: ' Гранит – это основа, прочный и надежный фундамент. Этот камень является символом Санкт-Петербурга, города, известного своими гранитными набережными и прочными архитектурными сооружениями. Данный уровень представляет собой начальную стадию знакомства с клубом, закладывая крепкую основу в ваши дальнейшие взаимоотношения. Гранит – это символ вашей стойкости и верности, как прочного фундамента, на котором строятся великие победы.'},\r\n    2: {name : 'Кварцит', img: _src_Assets_img_userStoun_granite_png__WEBPACK_IMPORTED_MODULE_0__, text: 'Кварцит — это символ роста и объединения. Как гранит обрастает кристаллами, так и ваша связь с клубом укрепляется и становится ярче. Кварцит олицетворяет процесс кристаллизации — постепенное превращение прочной основы в множество сверкающих граней. Каждый кристалл символизирует тех, кому не безразличен клуб, объединённых общей целью и фундаментальными ценностями. Этот уровень представляет собой развитие вашего участия, когда ваша приверженность и усилия становятся частью единого целого, укрепляя сообщество болельщиков и поддерживая клуб на пути к новым вершинам. Кварцит — это знак того, что вместе мы становимся сильнее и ярче.'},\r\n    3: {name : 'Агат', img: _src_Assets_img_userStoun_agat_png__WEBPACK_IMPORTED_MODULE_1__, text: 'Агат — это камень, который отражает ваш уникальный путь в поддержке клуба. Его многослойная структура символизирует этапы, через которые вы прошли, и все эмоции, которые вы испытывали — от первых матчей до ярких побед. Каждая полоса на агате — это часть вашей истории, связанная с клубом. Агат напоминает, что за внешней красотой скрываются глубина и стойкость, как и в вашей приверженности. Этот уровень олицетворяет не только преданность, но и многослойность вашего вклада в команду. Ваша поддержка, как и сам агат, состоит из множества слоев — воспоминаний, эмоций и шагов, которые укрепляют вашу связь с клубом. Вы — часть этого уникального сообщества, которое делает клуб сильнее и ярче.'},\r\n    4: {name : 'Топаз', img: _src_Assets_img_userStoun_topaz_png__WEBPACK_IMPORTED_MODULE_2__, text: 'Топаз — это символ ясности, силы и стойкости. На этом уровне вы уже не просто болельщик — вы один из тех, кто освещает путь клубу. Топаз известен своей прозрачностью и прочностью, и эти качества олицетворяют вашу роль как человека, чья поддержка становится все более значимой. Ваше участие сияет ярче с каждым шагом, укрепляя клуб и его сообщество. Этот камень также символизирует гармонию и баланс, подчеркивая, что ваша поддержка является стабильной опорой для команды, особенно в трудные моменты. Как топаз преломляет свет, так и вы, через свою активность, приносите новую энергию и ясность в каждый момент жизни команды. Этот уровень символизирует ваше влияние, которое помогает клубу расти и достигать новых высот. Благодаря вам команда чувствует уверенность и стремится к новым победам.'},\r\n    5: {name : 'Сапфир', img: _src_Assets_img_userStoun_sapphire_png__WEBPACK_IMPORTED_MODULE_3__, text: 'Сапфир — это символ мудрости, преданности и гармонии. Оранжевый сапфир с его множеством граней отражает ваш опыт и знания, которые вы накопили вместе с клубом. Каждая грань — это часть вашего многогранного вклада в жизнь команды. На этом уровне вы становитесь хранителем ценностей клуба, помогая ему расти и развиваться. Сапфир также олицетворяет постоянство и стойкость. Ваша поддержка остаётся непоколебимой даже в трудные моменты. Как сапфир преломляет свет через свои грани, так и вы привносите свет и энергию, поддерживая команду на пути к успеху. Этот уровень подчеркивает, что ваша поддержка — это осознанный и ценный вклад в будущее сообщества \"Кристалл\"'},\r\n}\r\n\r\nfunction disableBtn (btn){\r\n    btn.disabled = true\r\n}\r\n\r\nfunction enableBtn (btn){\r\n    btn.disabled = false\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://fis-privet/./src/Components/init.js?");

/***/ }),

/***/ "./src/Pages/MyTickets.js":
/*!********************************!*\
  !*** ./src/Pages/MyTickets.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Assets_css_nullstyle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Assets/css/nullstyle.css */ \"./src/Assets/css/nullstyle.css\");\n/* harmony import */ var _Assets_css_orderTicket_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Assets/css/orderTicket.css */ \"./src/Assets/css/orderTicket.css\");\n/* harmony import */ var _src_Components_Api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/Components/Api.js */ \"./src/Components/Api.js\");\n/* harmony import */ var _src_Components_init_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/Components/init.js */ \"./src/Components/init.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst ticketContainer = document.querySelector('.container')\r\nconst templateTicket = document.querySelector('#ticket')\r\nconst getTicketBtn = document.querySelector('.getTicket')\r\nconst backBtn = document.querySelector('.nav__btn-back')\r\nconst navName = document.querySelector('.nav__name')\r\nconst preloader = document.querySelector('.preloader')\r\n\r\nconst appData = {\r\n    user : null,\r\n    tickets : []\r\n}\r\n\r\n\r\nfunction init (user){\r\n    appData.user = user\r\n    navName.textContent = user.firstName\r\n    _src_Components_Api_js__WEBPACK_IMPORTED_MODULE_2__.api.getTicketsByUser(user.telegramId).then(({tickets}) => {\r\n        if(tickets.length === 0) return\r\n        appData.tickets = tickets\r\n        console.log(appData.tickets);\r\n        \r\n        appData.tickets.sort((a,b) => a.EventId - b.EventId)\r\n        appData.tickets.forEach(renderTicket)\r\n        console.log(appData.tickets)\r\n        preloader.style.display = 'none'\r\n    })\r\n}\r\n\r\nbackBtn.addEventListener('click', () => {\r\n    window.location.href = 'index.html'\r\n})\r\n\r\n\r\nfunction renderTicket(ticket) {\r\n    const element = templateTicket.content.querySelector('.qr').cloneNode(true)\r\n    const date = element.querySelector('.date span')\r\n    const time = element.querySelector('.time span')\r\n    const tribune = element.querySelector('.tribune span')\r\n    const row = element.querySelector('.row span')\r\n    const place = element.querySelector('.place span')\r\n    const img = element.querySelector('.qr_img')\r\n    const name = element.querySelector('.name')\r\n\r\n    name.textContent = ticket.name\r\n    date.textContent = ticket.date\r\n    time.textContent = ticket.time\r\n    tribune.textContent = ticket.tribune\r\n    row.textContent = ticket.row\r\n    place.textContent = ticket.place\r\n    img.src = `${_src_Components_Api_js__WEBPACK_IMPORTED_MODULE_2__.api.url}qr/${ticket._id}`\r\n    ticketContainer.append(element)\r\n}\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    (0,_src_Components_init_js__WEBPACK_IMPORTED_MODULE_3__.check)(init, _src_Components_Api_js__WEBPACK_IMPORTED_MODULE_2__.api)\r\n})\r\n\r\ngetTicketBtn.addEventListener('click', async () => {\r\n    try{\r\n        const data = await _src_Components_Api_js__WEBPACK_IMPORTED_MODULE_2__.api.sendTicketToTelegram(appData.tickets, appData.user.telegramId)\r\n        console.log(data)\r\n    } catch(e){console.log(e)}\r\n})\n\n//# sourceURL=webpack://fis-privet/./src/Pages/MyTickets.js?");

/***/ }),

/***/ "./src/Assets/img/userStoun/agat.png":
/*!*******************************************!*\
  !*** ./src/Assets/img/userStoun/agat.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"agat.png\";\n\n//# sourceURL=webpack://fis-privet/./src/Assets/img/userStoun/agat.png?");

/***/ }),

/***/ "./src/Assets/img/userStoun/granite.png":
/*!**********************************************!*\
  !*** ./src/Assets/img/userStoun/granite.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"granite.png\";\n\n//# sourceURL=webpack://fis-privet/./src/Assets/img/userStoun/granite.png?");

/***/ }),

/***/ "./src/Assets/img/userStoun/sapphire.png":
/*!***********************************************!*\
  !*** ./src/Assets/img/userStoun/sapphire.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"sapphire.png\";\n\n//# sourceURL=webpack://fis-privet/./src/Assets/img/userStoun/sapphire.png?");

/***/ }),

/***/ "./src/Assets/img/userStoun/topaz.png":
/*!********************************************!*\
  !*** ./src/Assets/img/userStoun/topaz.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"topaz.png\";\n\n//# sourceURL=webpack://fis-privet/./src/Assets/img/userStoun/topaz.png?");

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "./";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/Pages/MyTickets.js");
/******/ 	
/******/ })()
;