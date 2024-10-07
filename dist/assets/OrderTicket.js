/*! For license information please see OrderTicket.js.LICENSE.txt */
function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function _regeneratorRuntime(){"use strict";_regeneratorRuntime=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var a=t&&t.prototype instanceof m?t:m,i=Object.create(a.prototype),c=new q(n||[]);return o(i,"_invoke",{value:x(e,r,c)}),i}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=u;var f="suspendedStart",d="suspendedYield",h="executing",v="completed",y={};function m(){}function g(){}function _(){}var b={};l(b,i,(function(){return this}));var L=Object.getPrototypeOf,k=L&&L(L(A([])));k&&k!==r&&n.call(k,i)&&(b=k);var w=_.prototype=m.prototype=Object.create(b);function S(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function T(e,t){function r(o,a,i,c){var s=p(e[o],e,a);if("throw"!==s.type){var l=s.arg,u=l.value;return u&&"object"==_typeof(u)&&n.call(u,"__await")?t.resolve(u.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(u).then((function(e){l.value=e,i(l)}),(function(e){return r("throw",e,i,c)}))}c(s.arg)}var a;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return a=a?a.then(o,o):o()}})}function x(t,r,n){var o=f;return function(a,i){if(o===h)throw Error("Generator is already running");if(o===v){if("throw"===a)throw i;return{value:e,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var s=E(c,n);if(s){if(s===y)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===f)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=h;var l=p(t,r,n);if("normal"===l.type){if(o=n.done?v:d,l.arg===y)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=v,n.method="throw",n.arg=l.arg)}}}function E(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var a=p(o,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,y;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function q(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function A(t){if(t||""===t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}throw new TypeError(_typeof(t)+" is not iterable")}return g.prototype=_,o(w,"constructor",{value:_,configurable:!0}),o(_,"constructor",{value:g,configurable:!0}),g.displayName=l(_,s,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,_):(e.__proto__=_,l(e,s,"GeneratorFunction")),e.prototype=Object.create(w),e},t.awrap=function(e){return{__await:e}},S(T.prototype),l(T.prototype,c,(function(){return this})),t.AsyncIterator=T,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new T(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},S(w),l(w,s,"Generator"),l(w,i,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=A,q.prototype={constructor:q,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),P(r),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:A(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}function asyncGeneratorStep(e,t,r,n,o,a,i){try{var c=e[a](i),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,o)}function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){asyncGeneratorStep(a,n,o,i,c,"next",e)}function c(e){asyncGeneratorStep(a,n,o,i,c,"throw",e)}i(void 0)}))}}import{api}from"/src/Components/Api.js";import{check}from"/src/Components/init.js";var toggle=document.querySelector(".toggle"),headerTitle=document.querySelector(".nav__header__title"),preloader=document.querySelector(".preloader"),sections=document.querySelectorAll(".section"),btn=document.querySelector(".nextBtn"),tribunes=document.querySelectorAll(".tribune"),backBtn=document.querySelector(".nav__btn-back"),placeContainer=document.querySelector(".scrollContainer"),places=document.querySelector(".place__container"),infoBlockContainer=document.querySelector(".place__info_container"),prevBtn=document.querySelector(".choisePlace .prevBtn"),nextBtn=document.querySelector(".choisePlace .nextBtn"),navName=document.querySelector(".nav__name"),navSteps=document.querySelectorAll(".nav__step"),navStepProgress=document.querySelectorAll(".nav__step_progress"),total=document.querySelector(".money_total span"),totalTRUE=document.querySelector(".money_total-true span"),arrPlaces=[],inpCristall=document.querySelector(".cri__input"),templateTicket=document.querySelector("#ticket"),ticketContainer=document.querySelector(".ticket .container"),getTicketBtn=document.querySelector(".getTicket"),appData={user:null,event:JSON.parse(localStorage.getItem("event")),tickets:[]},titles=["выберите трибуну наиболее комфортную для Вас","а теперь выберите место","Выбрите удобный способ оплаты и приобретите билет","Поздравляем, QR-код готов! Отсканируйте его у контролера"];function init(e){e.tickets.find((function(e){return e.event===appData.event._id}))&&(window.location.href="index.html"),appData.user=e,navName.textContent=e.firstName,inpCristall.placeholder="у вас ".concat(e.cristall," кристаллов"),preloader.style.display="none"}function switchHeaderPlace(e,t){navStepProgress[e].classList.remove("nav__step_progress-active"),navStepProgress[t].classList.add("nav__step_progress-active"),sections[e].classList.remove("section-active"),sections[t].classList.add("section-active"),headerTitle.textContent=titles[t]}function switchNavStepProgress(e){sections.forEach((function(e){return e.classList.remove("section-active")})),navStepProgress.forEach((function(e){return e.classList.remove("nav__step_progress-active")})),navSteps.forEach((function(e){return e.classList.remove("nav__step_progress-active")})),sections[e+1].classList.add("section-active"),navSteps[e].children[0].classList.add("nav__step_progress-active"),headerTitle.textContent=titles[e+1]}function getTickets(e){var t=JSON.parse(localStorage.getItem("event"))._id;0===places.children.length&&t&&api.getTickets(e,t).then((function(e){for(var t=e.schemaTickets,r=0;r<t.length;r++)for(var n=0;n<t[r].length;n++)renderTribune(t[r][n])}))}function totalPrice(){var e=arrPlaces.reduce((function(e,t){return e+t.price}),0);total.textContent=e,0===inpCristall.value.length&&(totalTRUE.textContent=e)}function totalPriceTrue(e){totalTRUE.textContent=arrPlaces.reduce((function(e,t){return e+t.price}),0)-e}function renderTribune(e){var t=document.createElement("div");t.className="place__container__item",e?(t.dataset.row=e.row+1,"closed"===e.status&&t.classList.add("closed"),t.innerHTML=e.place,t.addEventListener("click",(function(){if("closed"!==e.status){if(t.classList.contains("active"))t.classList.remove("active"),arrPlaces.splice(arrPlaces.indexOf(e),1);else{if(3===arrPlaces.length)return;arrPlaces.push(e),t.classList.add("active"),console.log(e)}infoBlockContainer.innerHTML="",arrPlaces.forEach((function(e){return addTicketBlock({sector:e.tribune,row:e.row,place:e.place})})),nextBtn.disabled=!1,0===arrPlaces.length&&(addTicketBlock({sector:e.tribune,row:"",place:""}),nextBtn.disabled=!0),totalPrice()}}))):t.classList.add("none"),places.append(t)}function addTicketBlock(e){var t=document.createElement("div");t.className="place__container__item",t.innerHTML='\n        <div class="place__info">\n            <div class="place__info_block">Сектор: <span>'.concat(e.sector,'</span> </div>\n            <div class="place__info_block">Ряд: <span>').concat(e.row,'</span> </div>\n            <div class="place__info_block">Место: <span>').concat(e.place,"</span> </div>\n        </div>\n    "),infoBlockContainer.append(t)}function renderTicket(e){var t=templateTicket.content.querySelector(".qr").cloneNode(!0),r=t.querySelector(".date span"),n=t.querySelector(".time span"),o=t.querySelector(".tribune span"),a=t.querySelector(".row span"),i=t.querySelector(".place span"),c=t.querySelector(".qr_img");r.textContent=e.date,n.textContent=e.time,o.textContent=e.tribune,a.textContent=e.row,i.textContent=e.place,c.src="".concat(api.url,"qr/").concat(e._id),ticketContainer.append(t)}toggle.addEventListener("click",(function(){toggle.previousElementSibling.checked=!toggle.previousElementSibling.checked,toggle.previousElementSibling.checked?placeContainer.classList.add("scrollContainer-scale"):placeContainer.classList.remove("scrollContainer-scale")})),console.log(sections),document.body.addEventListener("click",(function(e){e.target.classList.contains("scrollContainer")||e.target.classList.contains("place__container__item")||e.target.classList.contains("place__container")||placeContainer.blur()})),btn.addEventListener("click",(function(){switchHeaderPlace(0,1),getTickets(document.querySelector(".tribune-active").id)})),prevBtn.addEventListener("click",(function(){switchHeaderPlace(1,0)})),nextBtn.addEventListener("click",_asyncToGenerator(_regeneratorRuntime().mark((function e(){var t,r,n,o;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=appData.user.telegramId,r={userId:t,tickets:arrPlaces},e.next=4,api.orderTicket(r);case 4:if(!(n=e.sent).ok){e.next=12;break}return e.next=8,n.json();case 8:o=e.sent,appData.tickets=o.findTickets,switchNavStepProgress(2),o.findTickets.forEach(renderTicket);case 12:case"end":return e.stop()}}),e)})))),getTicketBtn.addEventListener("click",_asyncToGenerator(_regeneratorRuntime().mark((function e(){var t;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,api.sendTicketToTelegram(appData.tickets,appData.user.telegramId);case 3:t=e.sent,console.log(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))),backBtn.addEventListener("click",(function(){window.location.href="index.html"})),tribunes.forEach((function(e){e.addEventListener("click",(function(){tribunes.forEach((function(e){e.classList.remove("tribune-active"),e.className=_toConsumableArray(e.classList).filter((function(e,t){return t<2})).join(" ")})),console.log(e.classList);var t=e.getAttribute("data-active");e.classList.add("tribune-active"),e.classList.add(t),btn.disabled=!1,infoBlockContainer.innerHTML="<p>Выберите понравившееся место!</p>",places.innerHTML="",arrPlaces.splice(0,arrPlaces.length)}))})),inpCristall.addEventListener("input",(function(){var e=arrPlaces.reduce((function(e,t){return e+t.price}),0);appData.user.cristall<inpCristall.value&&(inpCristall.value=appData.user.cristall),inpCristall.value>10*e&&(inpCristall.value=e),totalPriceTrue(inpCristall.value/10)})),document.addEventListener("DOMContentLoaded",(function(){check(init,api)}));