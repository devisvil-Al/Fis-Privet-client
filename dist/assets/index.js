/*! For license information please see index.js.LICENSE.txt */
function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function _regeneratorRuntime(){"use strict";_regeneratorRuntime=function(){return t};var e,t={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var i=t&&t.prototype instanceof y?t:y,a=Object.create(i.prototype),c=new A(r||[]);return o(a,"_invoke",{value:k(e,n,c)}),a}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=u;var p="suspendedStart",f="suspendedYield",m="executing",v="completed",h={};function y(){}function g(){}function _(){}var E={};s(E,a,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(G([])));b&&b!==n&&r.call(b,a)&&(E=b);var S=_.prototype=y.prototype=Object.create(E);function L(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function n(o,i,a,c){var l=d(e[o],e,i);if("throw"!==l.type){var s=l.arg,u=s.value;return u&&"object"==_typeof(u)&&r.call(u,"__await")?t.resolve(u.__await).then((function(e){n("next",e,a,c)}),(function(e){n("throw",e,a,c)})):t.resolve(u).then((function(e){s.value=e,a(s)}),(function(e){return n("throw",e,a,c)}))}c(l.arg)}var i;o(this,"_invoke",{value:function(e,r){function o(){return new t((function(t,o){n(e,r,t,o)}))}return i=i?i.then(o,o):o()}})}function k(t,n,r){var o=p;return function(i,a){if(o===m)throw Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:e,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var l=q(c,r);if(l){if(l===h)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=m;var s=d(t,n,r);if("normal"===s.type){if(o=r.done?v:f,s.arg===h)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=v,r.method="throw",r.arg=s.arg)}}}function q(t,n){var r=n.method,o=t.iterator[r];if(o===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,q(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var i=d(o,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,h;var a=i.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,h):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function G(t){if(t||""===t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}throw new TypeError(_typeof(t)+" is not iterable")}return g.prototype=_,o(S,"constructor",{value:_,configurable:!0}),o(_,"constructor",{value:g,configurable:!0}),g.displayName=s(_,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,_):(e.__proto__=_,s(e,l,"GeneratorFunction")),e.prototype=Object.create(S),e},t.awrap=function(e){return{__await:e}},L(x.prototype),s(x.prototype,c,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new x(u(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},L(S),s(S,l,"Generator"),s(S,a,(function(){return this})),s(S,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=G,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(l&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),T(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;T(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:G(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),h}},t}function asyncGeneratorStep(e,t,n,r,o,i,a){try{var c=e[i](a),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,o)}function _asyncToGenerator(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){asyncGeneratorStep(i,r,o,a,c,"next",e)}function c(e){asyncGeneratorStep(i,r,o,a,c,"throw",e)}a(void 0)}))}}import{api}from"../Components/Api.js";import{wheelScroll}from"../Components/Slider.js";import{check,disableBtn,enableBtn,levelName}from"../Components/init.js";import kristall from"../Assets/img/kristall1.svg";var modalGreetings=document.querySelector(".modal__greetings"),main=document.querySelector(".main"),mainLevel=document.querySelector(".point__level"),containerEvents=document.querySelector(".slider__events"),containerActions=document.querySelector(".slider__actions"),preloader=document.querySelector(".preloader"),cristall=document.querySelector(".point"),profileBtn=document.querySelector(".point__description"),friendBtn=document.querySelector(".friends__btn"),btnOptions=document.querySelector(".point__container_options_btn"),modalEvent=document.querySelector(".modal-event"),backModalEvent=modalEvent.querySelector(".nav__btn-back"),templateAction=document.querySelector("#action").content,templateEvent=document.querySelector("#event").content,modalEventBtn=document.querySelector(".modal-event_btn"),pointIcon=document.querySelector(".point__icon");function addMessage(e){var t=document.querySelector(".modal-message");t.classList.add("modal-message--visible"),t.textContent=e,setTimeout((function(){t.classList.remove("modal-message--visible"),t.textContent=""}),3e3)}var app=window.Telegram.WebApp;console.log(document.referrer),app.isClosingConfirmationEnabled=!0;var appData={sportEvent:{},action:{},user:{}},configSliderEvents={count:0,container:containerActions},configSliderActions={count:0,container:containerEvents};function init(e){appData.user=e,api.getAppData(e.telegramId).then((function(t){if(t.success){var n=t.actions,r=t.sportEvents;n.forEach((function(t){return renderAction(t,e.telegramId)})),r.forEach(renderSportEvents)}})),cristall.textContent=e.cristall,main.classList.remove("hidden__main"),mainLevel.textContent="".concat(e.level," ур. ").concat(levelName[e.level].name),pointIcon.src=levelName[e.level].img,modalGreetings.querySelector(".modal__title").classList.add("modal__title-active"),modalGreetings.querySelector(".modal__name").textContent=e.firstName,preloader.style.display="none","https://web.telegram.org/"===document.referrer&&(modalGreetings.classList.add("modal-visible"),setTimeout((function(){modalGreetings.classList.remove("modal-visible")}),3e3))}function renderAction(e,t){return _renderAction.apply(this,arguments)}function _renderAction(){return _renderAction=_asyncToGenerator(_regeneratorRuntime().mark((function e(t,n){var r,o,i,a,c,l;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l=function(){return(l=_asyncToGenerator(_regeneratorRuntime().mark((function e(a){var c,l;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,disableBtn(a.target),e.next=4,api.checkEventSubscribe(n,t.name);case 4:e.sent.success?(i.classList.remove("slide__btn-active"),i.classList.add("slide__btn-closed"),i.textContent="завершено",o.textContent="",o.classList.add("slide__cri-closed"),configSliderEvents.container.append(r)):"Накопить 600 кр"===t.name?addMessage("Вы не выполнили условия события"):(c="Join me on this awesome app! Click here: https://t.me/PhiscooltBot?start=".concat(n),l="https://t.me/share/url?url=".concat(encodeURIComponent(c)),window.Telegram.WebApp.openTelegramLink(l)),enableBtn(a.target),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),enableBtn(a.target),addMessage("Вы не выполнили условия события");case 14:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)},c=function(e){return l.apply(this,arguments)},r=templateAction.querySelector(".slide__actions").cloneNode(!0),(o=r.querySelector(".slide__cri")).textContent=t.price,r.querySelector(".slide__title").textContent=t.name,i=r.querySelector(".slide__btn"),"create"===t.state?(a=function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function e(){var r,o,l;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return disableBtn(i),e.next=3,api.setEventState(n,t.name);case 3:(r=e.sent).success&&("invite"===r.action.key?(o="Join me on this awesome app! Click here: https://t.me/PhiscooltBot?start=".concat(n),l="https://t.me/share/url?url=".concat(encodeURIComponent(o)),window.Telegram.WebApp.openTelegramLink(l)):"subscribe"===r.action.key&&window.Telegram.WebApp.openTelegramLink("https://t.me/+mzwM8nGyOnA0MmIy"),setTimeout((function(){i.classList.add("slide__btn-active"),i.textContent="собрать",i.removeEventListener("click",a),i.addEventListener("click",c)}),1e3));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i.textContent="выполнить",i.addEventListener("click",a),enableBtn(i)):"start"===t.state?(i.classList.add("slide__btn-active"),i.textContent="собрать",i.addEventListener("click",c)):(i.classList.add("slide__btn-closed"),i.textContent="завершено",o.textContent="",o.classList.add("slide__cri-closed")),configSliderEvents.container.append(r);case 9:case"end":return e.stop()}}),e)}))),_renderAction.apply(this,arguments)}function openEvent(){window.location.href="OrderTicket.html"}function listenTickets(){window.location.href="MyTickets.html"}function renderSportEvents(e,t){var n=templateEvent.querySelector(".slide__event").cloneNode(!0);n.querySelector("img").src=kristall,n.querySelector(".event__title").textContent=e.name,n.querySelector(".event__time").textContent=e.time,n.querySelector(".event__date").textContent=e.date,n.querySelector(".event__address").textContent=e.address,configSliderActions.container.append(n);var r=appData.user.tickets.find((function(t){return t.event===e._id}));n.addEventListener("click",(function(){appData.sportEvent=e,modalEvent.classList.add("modal-visible"),modalEvent.querySelector(".nav__toggle_command").textContent=e.name,modalEvent.querySelector(".nav__toggle_address").textContent=e.address,modalEvent.querySelector(".nav__toggle_date").textContent=e.date,modalEvent.querySelector(".nav__toggle_time").textContent=e.time,modalEvent.querySelector(".modal-event_description").textContent=e.description,localStorage.setItem("event",JSON.stringify(appData.sportEvent)),r?(modalEventBtn.removeEventListener("click",openEvent),modalEventBtn.addEventListener("click",listenTickets),modalEventBtn.textContent="Посмотреть билеты"):(modalEventBtn.removeEventListener("click",listenTickets),modalEventBtn.addEventListener("click",openEvent),modalEventBtn.textContent="Посетить матч")}))}containerActions.addEventListener("mousewheel",(function(e){return wheelScroll(e,configSliderEvents)})),containerEvents.addEventListener("mousewheel",(function(e){return wheelScroll(e,configSliderActions)})),profileBtn.addEventListener("click",(function(){return window.location.href="ProfileInfo.html"})),btnOptions.addEventListener("click",(function(){return window.location.href="Profile.html"})),backModalEvent.addEventListener("click",(function(){modalEvent.classList.remove("modal-visible"),modalEvent.querySelector("img").src=""})),friendBtn.addEventListener("click",(function(){return window.location.href="Friends.html"})),check(init,api),app.ready(),app.expand();