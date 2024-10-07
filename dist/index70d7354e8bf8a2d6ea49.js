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

/***/ "./src/Assets/css/style.css":
/*!**********************************!*\
  !*** ./src/Assets/css/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fis-privet/./src/Assets/css/style.css?");

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

/***/ "./src/Components/init.js":
/*!********************************!*\
  !*** ./src/Components/init.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   check: () => (/* binding */ check),\n/* harmony export */   disableBtn: () => (/* binding */ disableBtn),\n/* harmony export */   enableBtn: () => (/* binding */ enableBtn),\n/* harmony export */   levelName: () => (/* binding */ levelName),\n/* harmony export */   levelPoint: () => (/* binding */ levelPoint)\n/* harmony export */ });\n/* harmony import */ var _src_Assets_img_userStoun_granite_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../src/Assets/img/userStoun/granite.png */ \"./src/Assets/img/userStoun/granite.png\");\n/* harmony import */ var _src_Assets_img_userStoun_agat_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/Assets/img/userStoun/agat.png */ \"./src/Assets/img/userStoun/agat.png\");\n/* harmony import */ var _src_Assets_img_userStoun_topaz_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/Assets/img/userStoun/topaz.png */ \"./src/Assets/img/userStoun/topaz.png\");\n/* harmony import */ var _src_Assets_img_userStoun_sapphire_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/Assets/img/userStoun/sapphire.png */ \"./src/Assets/img/userStoun/sapphire.png\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nasync function check (init, api){\r\n    const tg = window.Telegram.WebApp\r\n    const dataHash = 'query_id=AAFCPbI6AAAAAEI9sjpkKRH0&user=%7B%22id%22%3A984759618%2C%22first_name%22%3A%22%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22devisvil%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1721492698&hash=c5c877983e0d790d0868f83006cf0f6c3305e0009b67de94266b5529ae711a9f'\r\n    const user = {allows_write_to_pm :  true, first_name :  \"Александр\", id :  984759618, language_code :  \"ru\", last_name :  \"\", username :  \"devisvil\"}\r\n    const check = await api.checkUser({data: tg.initData || dataHash, user: {...tg.initDataUnsafe.user} || {...user} })\r\n    if(check.success){\r\n        const data = await api.auth(tg.initDataUnsafe?.user?.id || user.id)\r\n        if(!data.success){\r\n            window.location.href = '../Registry.html'\r\n            modalGreetings.classList.remove('modal-visible') \r\n        } else {\r\n            setTimeout(() => {\r\n                init(data.user)\r\n            }, 1000)\r\n        }\r\n    }\r\n}\r\n\r\nconst levelPoint = {\r\n    1: 0,\r\n    2: 350,\r\n    3: 900,\r\n    4: 2000,\r\n    5: 4000,\r\n}\r\n\r\nconst levelName = {\r\n    1: {name : 'Гранит', img: _src_Assets_img_userStoun_granite_png__WEBPACK_IMPORTED_MODULE_0__, text: ' Гранит – это основа, прочный и надежный фундамент. Этот камень является символом Санкт-Петербурга, города, известного своими гранитными набережными и прочными архитектурными сооружениями. Данный уровень представляет собой начальную стадию знакомства с клубом, закладывая крепкую основу в ваши дальнейшие взаимоотношения. Гранит – это символ вашей стойкости и верности, как прочного фундамента, на котором строятся великие победы.'},\r\n    2: {name : 'Кварцит', img: _src_Assets_img_userStoun_granite_png__WEBPACK_IMPORTED_MODULE_0__, text: 'Кварцит — это символ роста и объединения. Как гранит обрастает кристаллами, так и ваша связь с клубом укрепляется и становится ярче. Кварцит олицетворяет процесс кристаллизации — постепенное превращение прочной основы в множество сверкающих граней. Каждый кристалл символизирует тех, кому не безразличен клуб, объединённых общей целью и фундаментальными ценностями. Этот уровень представляет собой развитие вашего участия, когда ваша приверженность и усилия становятся частью единого целого, укрепляя сообщество болельщиков и поддерживая клуб на пути к новым вершинам. Кварцит — это знак того, что вместе мы становимся сильнее и ярче.'},\r\n    3: {name : 'Агат', img: _src_Assets_img_userStoun_agat_png__WEBPACK_IMPORTED_MODULE_1__, text: 'Агат — это камень, который отражает ваш уникальный путь в поддержке клуба. Его многослойная структура символизирует этапы, через которые вы прошли, и все эмоции, которые вы испытывали — от первых матчей до ярких побед. Каждая полоса на агате — это часть вашей истории, связанная с клубом. Агат напоминает, что за внешней красотой скрываются глубина и стойкость, как и в вашей приверженности. Этот уровень олицетворяет не только преданность, но и многослойность вашего вклада в команду. Ваша поддержка, как и сам агат, состоит из множества слоев — воспоминаний, эмоций и шагов, которые укрепляют вашу связь с клубом. Вы — часть этого уникального сообщества, которое делает клуб сильнее и ярче.'},\r\n    4: {name : 'Топаз', img: _src_Assets_img_userStoun_topaz_png__WEBPACK_IMPORTED_MODULE_2__, text: 'Топаз — это символ ясности, силы и стойкости. На этом уровне вы уже не просто болельщик — вы один из тех, кто освещает путь клубу. Топаз известен своей прозрачностью и прочностью, и эти качества олицетворяют вашу роль как человека, чья поддержка становится все более значимой. Ваше участие сияет ярче с каждым шагом, укрепляя клуб и его сообщество. Этот камень также символизирует гармонию и баланс, подчеркивая, что ваша поддержка является стабильной опорой для команды, особенно в трудные моменты. Как топаз преломляет свет, так и вы, через свою активность, приносите новую энергию и ясность в каждый момент жизни команды. Этот уровень символизирует ваше влияние, которое помогает клубу расти и достигать новых высот. Благодаря вам команда чувствует уверенность и стремится к новым победам.'},\r\n    5: {name : 'Сапфир', img: _src_Assets_img_userStoun_sapphire_png__WEBPACK_IMPORTED_MODULE_3__, text: 'Сапфир — это символ мудрости, преданности и гармонии. Оранжевый сапфир с его множеством граней отражает ваш опыт и знания, которые вы накопили вместе с клубом. Каждая грань — это часть вашего многогранного вклада в жизнь команды. На этом уровне вы становитесь хранителем ценностей клуба, помогая ему расти и развиваться. Сапфир также олицетворяет постоянство и стойкость. Ваша поддержка остаётся непоколебимой даже в трудные моменты. Как сапфир преломляет свет через свои грани, так и вы привносите свет и энергию, поддерживая команду на пути к успеху. Этот уровень подчеркивает, что ваша поддержка — это осознанный и ценный вклад в будущее сообщества \"Кристалл\"'},\r\n}\r\n\r\nfunction disableBtn (btn){\r\n    btn.disabled = true\r\n}\r\n\r\nfunction enableBtn (btn){\r\n    btn.disabled = false\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://fis-privet/./src/Components/init.js?");

/***/ }),

/***/ "./src/Pages/main.js":
/*!***************************!*\
  !*** ./src/Pages/main.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Assets_css_nullstyle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Assets/css/nullstyle.css */ \"./src/Assets/css/nullstyle.css\");\n/* harmony import */ var _Assets_css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Assets/css/style.css */ \"./src/Assets/css/style.css\");\n/* harmony import */ var _Assets_img_kristall1_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Assets/img/kristall1.svg */ \"./src/Assets/img/kristall1.svg\");\n/* harmony import */ var _src_Components_Api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/Components/Api.js */ \"./src/Components/Api.js\");\n/* harmony import */ var _src_Components_Slider_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/Components/Slider.js */ \"./src/Components/Slider.js\");\n/* harmony import */ var _src_Components_init_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../src/Components/init.js */ \"./src/Components/init.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst modalGreetings = document.querySelector('.modal__greetings')\r\nconst main = document.querySelector('.main')\r\nconst mainLevel = document.querySelector('.point__level')\r\nconst containerEvents = document.querySelector('.slider__events')\r\nconst containerActions = document.querySelector('.slider__actions')\r\nconst preloader = document.querySelector('.preloader')\r\nconst cristall = document.querySelector('.point')\r\nconst profileBtn = document.querySelector('.point__description')\r\nconst friendBtn = document.querySelector('.friends__btn')\r\nconst btnOptions = document.querySelector('.point__container_options_btn')\r\nconst modalEvent = document.querySelector('.modal-event')\r\nconst backModalEvent = modalEvent.querySelector('.nav__btn-back')\r\nconst templateAction = document.querySelector('#action').content\r\nconst templateEvent = document.querySelector('#event').content\r\nconst modalEventBtn = document.querySelector('.modal-event_btn')\r\nconst pointIcon = document.querySelector('.point__icon')\r\n\r\nfunction addMessage(str){\r\n    const modalMessage = document.querySelector('.modal-message')\r\n    modalMessage.classList.add('modal-message--visible')\r\n    modalMessage.textContent = str\r\n    setTimeout(() => {\r\n        modalMessage.classList.remove('modal-message--visible')\r\n        modalMessage.textContent = ''\r\n    }, 3000)\r\n}\r\n\r\nconst app = window.Telegram.WebApp;\r\nconsole.log(document.referrer)\r\n\r\n\r\napp.isClosingConfirmationEnabled = true;\r\n\r\nconst appData = {sportEvent : {}, action : {}, user : {}}\r\n\r\nconst configSliderEvents = {\r\n    count : 0,\r\n    container : containerActions\r\n}\r\nconst configSliderActions = {\r\n    count : 0,\r\n    container : containerEvents\r\n}\r\n\r\nfunction init(user){\r\n    appData.user = user\r\n    _src_Components_Api_js__WEBPACK_IMPORTED_MODULE_3__.api.getAppData(user.telegramId)\r\n    .then(res => {\r\n        if(res.success){\r\n            const {actions, sportEvents} = res\r\n            actions.forEach((action) => renderAction(action, user.telegramId))\r\n            sportEvents.forEach(renderSportEvents)\r\n        }\r\n    })\r\n    cristall.textContent = user.cristall\r\n    main.classList.remove('hidden__main')\r\n    mainLevel.textContent = `${user.level} ур. ${_src_Components_init_js__WEBPACK_IMPORTED_MODULE_5__.levelName[user.level].name}`\r\n    pointIcon.src = _src_Components_init_js__WEBPACK_IMPORTED_MODULE_5__.levelName[user.level].img\r\n    modalGreetings.querySelector('.modal__title').classList.add('modal__title-active')\r\n    modalGreetings.querySelector('.modal__name') .textContent = user.firstName\r\n    modalGreetings.querySelector('.modal__logo') .src = '../img/' + user.club + '.gif'\r\n    preloader.style.display = 'none'\r\n    if(document.referrer === 'https://web.telegram.org/'){\r\n        modalGreetings.classList.add('modal-visible')\r\n        setTimeout( () => {\r\n            modalGreetings.classList.remove('modal-visible') \r\n        }, 3000)\r\n    }\r\n    \r\n}\r\n\r\nasync function renderAction (action, id){\r\n    const clone = templateAction.querySelector('.slide__actions').cloneNode(true)\r\n    const price = clone.querySelector('.slide__cri')\r\n    price.textContent = action.price\r\n    clone.querySelector('.slide__title').textContent = action.name\r\n    const btn = clone.querySelector('.slide__btn')\r\n    if(action.state === 'create'){\r\n        btn.textContent = 'выполнить' \r\n        btn.addEventListener('click', setStateEvent)\r\n        async function setStateEvent(){\r\n            ;(0,_src_Components_init_js__WEBPACK_IMPORTED_MODULE_5__.disableBtn)(btn)\r\n            const res = await _src_Components_Api_js__WEBPACK_IMPORTED_MODULE_3__.api.setEventState(id, action.name)\r\n            if(res.success){\r\n                if(res.action.key === 'invite'){\r\n                    const messageText = `Join me on this awesome app! Click here: https://t.me/PhiscooltBot?start=${id}`;\r\n                    const telegramShareUrl = `https://t.me/share/url?url=${encodeURIComponent(messageText)}`;\r\n                    window.Telegram.WebApp.openTelegramLink(telegramShareUrl);\r\n                } else if (res.action.key === 'subscribe') {\r\n                    window.Telegram.WebApp.openTelegramLink('https://t.me/+mzwM8nGyOnA0MmIy');\r\n                }\r\n                setTimeout(() => {\r\n                    btn.classList.add('slide__btn-active')\r\n                    btn.textContent = 'собрать'\r\n                    btn.removeEventListener('click', setStateEvent)\r\n                    btn.addEventListener('click', checkSubscribe)\r\n                }, 1000)\r\n            }\r\n        }\r\n        (0,_src_Components_init_js__WEBPACK_IMPORTED_MODULE_5__.enableBtn)(btn)\r\n    } else if (action.state === 'start') {\r\n        btn.classList.add('slide__btn-active')\r\n        btn.textContent = 'собрать'\r\n        btn.addEventListener('click', checkSubscribe)\r\n    } else {\r\n        btn.classList.add('slide__btn-closed')\r\n        btn.textContent = 'завершено'\r\n        price.textContent = ''\r\n        price.classList.add('slide__cri-closed')\r\n    }\r\n    async function checkSubscribe(e){\r\n        try {\r\n            (0,_src_Components_init_js__WEBPACK_IMPORTED_MODULE_5__.disableBtn)(e.target)\r\n            const res = await _src_Components_Api_js__WEBPACK_IMPORTED_MODULE_3__.api.checkEventSubscribe(id, action.name)\r\n            if(res.success){\r\n                btn.classList.remove('slide__btn-active')\r\n                btn.classList.add('slide__btn-closed')\r\n                btn.textContent = 'завершено'\r\n                price.textContent = ''\r\n                price.classList.add('slide__cri-closed')\r\n                configSliderEvents.container.append(clone)\r\n            } else {\r\n                if(action.name === \"Накопить 600 кр\"){\r\n                    addMessage('Вы не выполнили условия события')\r\n                } else {\r\n                    const messageText = `Join me on this awesome app! Click here: https://t.me/PhiscooltBot?start=${id}`;\r\n                    const telegramShareUrl = `https://t.me/share/url?url=${encodeURIComponent(messageText)}`;\r\n                    window.Telegram.WebApp.openTelegramLink(telegramShareUrl);\r\n                }\r\n            }\r\n            (0,_src_Components_init_js__WEBPACK_IMPORTED_MODULE_5__.enableBtn)(e.target)\r\n        } catch (error) {\r\n            console.log(error)\r\n            ;(0,_src_Components_init_js__WEBPACK_IMPORTED_MODULE_5__.enableBtn)(e.target)\r\n            addMessage('Вы не выполнили условия события')\r\n        }\r\n    }\r\n    configSliderEvents.container.append(clone)\r\n}\r\n\r\nfunction openEvent(){\r\n    window.location.href = 'OrderTicket.html'\r\n}\r\n\r\nfunction listenTickets(){\r\n    window.location.href = 'MyTickets.html'\r\n}\r\n\r\nfunction renderSportEvents (event, index){\r\n    const clone = templateEvent.querySelector('.slide__event').cloneNode(true)\r\n    clone.querySelector('img').src = _Assets_img_kristall1_svg__WEBPACK_IMPORTED_MODULE_2__\r\n    clone.querySelector('.event__title').textContent = event.name\r\n    clone.querySelector('.event__time').textContent = event.time\r\n    clone.querySelector('.event__date').textContent = event.date\r\n    clone.querySelector('.event__address').textContent = event.address  \r\n    configSliderActions.container.append(clone)    \r\n    const currentEvent = appData.user.tickets.find((item => item.event === event._id))\r\n    clone.addEventListener('click', () => {\r\n        appData.sportEvent = event\r\n        modalEvent.classList.add('modal-visible')\r\n        modalEvent.querySelector('img').src = `../img/kristall${index + 1}.svg`\r\n        modalEvent.querySelector('.nav__toggle_command').textContent = event.name\r\n        modalEvent.querySelector('.nav__toggle_address').textContent = event.address \r\n        modalEvent.querySelector('.nav__toggle_date').textContent = event.date\r\n        modalEvent.querySelector('.nav__toggle_time').textContent = event.time \r\n        modalEvent.querySelector('.modal-event_description').textContent = event.description\r\n        localStorage.setItem('event', JSON.stringify(appData.sportEvent))\r\n        if(currentEvent){\r\n            modalEventBtn.removeEventListener('click', openEvent)\r\n            modalEventBtn.addEventListener('click', listenTickets)\r\n            modalEventBtn.textContent = 'Посмотреть билеты'\r\n        } else {\r\n            modalEventBtn.removeEventListener('click', listenTickets)\r\n            modalEventBtn.addEventListener('click', openEvent)\r\n            modalEventBtn.textContent = 'Посетить матч'\r\n        }\r\n    })\r\n}\r\n\r\n\r\n\r\ncontainerActions.addEventListener('mousewheel', (e) =>  (0,_src_Components_Slider_js__WEBPACK_IMPORTED_MODULE_4__.wheelScroll)(e, configSliderEvents))\r\ncontainerEvents.addEventListener('mousewheel', (e) => (0,_src_Components_Slider_js__WEBPACK_IMPORTED_MODULE_4__.wheelScroll)(e, configSliderActions))\r\nprofileBtn.addEventListener('click', () => window.location.href = 'ProfileInfo.html')\r\nbtnOptions.addEventListener('click', () => window.location.href = 'Profile.html')\r\nbackModalEvent.addEventListener('click', () => {\r\n    modalEvent.classList.remove('modal-visible')\r\n    modalEvent.querySelector('img').src = ``\r\n})\r\nfriendBtn.addEventListener('click', () => window.location.href = 'Friends.html')\r\n\r\n\r\n    \r\n    ;(0,_src_Components_init_js__WEBPACK_IMPORTED_MODULE_5__.check)(init, _src_Components_Api_js__WEBPACK_IMPORTED_MODULE_3__.api)\r\n    app.ready()\r\n    app.expand()\n\n//# sourceURL=webpack://fis-privet/./src/Pages/main.js?");

/***/ }),

/***/ "./src/Assets/img/kristall1.svg":
/*!**************************************!*\
  !*** ./src/Assets/img/kristall1.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"kristall1.svg\";\n\n//# sourceURL=webpack://fis-privet/./src/Assets/img/kristall1.svg?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/Pages/main.js");
/******/ 	
/******/ })()
;