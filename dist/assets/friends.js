/*! For license information please see friends.js.LICENSE.txt */
function _typeof(t){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof(t)}function _regeneratorRuntime(){"use strict";_regeneratorRuntime=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof m?e:m,a=Object.create(i.prototype),c=new T(n||[]);return o(a,"_invoke",{value:C(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var d="suspendedStart",h="suspendedYield",p="executing",v="completed",y={};function m(){}function g(){}function _(){}var b={};u(b,a,(function(){return this}));var w=Object.getPrototypeOf,L=w&&w(w(G([])));L&&L!==r&&n.call(L,a)&&(b=L);var x=_.prototype=m.prototype=Object.create(b);function E(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,i,a,c){var s=f(t[o],t,i);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==_typeof(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function C(e,r,n){var o=d;return function(i,a){if(o===p)throw Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var s=S(c,n);if(s){if(s===y)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var u=f(e,r,n);if("normal"===u.type){if(o=n.done?v:h,u.arg===y)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=v,n.method="throw",n.arg=u.arg)}}}function S(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,S(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function F(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(F,this),this.reset(!0)}function G(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(_typeof(e)+" is not iterable")}return g.prototype=_,o(x,"constructor",{value:_,configurable:!0}),o(_,"constructor",{value:g,configurable:!0}),g.displayName=u(_,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,u(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},E(k.prototype),u(k.prototype,c,(function(){return this})),e.AsyncIterator=k,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new k(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(x),u(x,s,"Generator"),u(x,a,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=G,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:G(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function asyncGeneratorStep(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}function _asyncToGenerator(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){asyncGeneratorStep(i,n,o,a,c,"next",t)}function c(t){asyncGeneratorStep(i,n,o,a,c,"throw",t)}a(void 0)}))}}import"../Assets/css/nullstyle.css";import"../Assets/css/friends.css";import{api}from"../Components/Api.js";import{check}from"../Components/init.js";import{levelPoint}from"../Components/init.js";var preloader=document.querySelector(".preloader"),backbtn=document.querySelector(".nav__btn"),friendsContainer=document.querySelector(".friends__container"),addFriends=document.querySelector(".addFriend"),btnAddCristall=document.querySelector(".nav__btn-getCri"),userName=document.querySelector(".noFriends__userName"),appData={user:null};function init(t){return _init.apply(this,arguments)}function _init(){return(_init=_asyncToGenerator(_regeneratorRuntime().mark((function t(e){return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:preloader.style.display="none",appData.user=e,e.hubCristall.cristall&&(btnAddCristall.innerHTML="Cобрать <br> ".concat(e.hubCristall.cristall," кр"),btnAddCristall.classList.add("nav__btn-getCri-active"),btnAddCristall.addEventListener("click",_asyncToGenerator(_regeneratorRuntime().mark((function t(){var r;return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,api.getCristalls(e.telegramId);case 2:(r=t.sent).success&&(btnAddCristall.innerHTML="пригласи друзей и получай 20%",btnAddCristall.classList.remove("nav__btn-getCri-active"),eventFriends(r.user));case 4:case"end":return t.stop()}}),t)}))))),eventFriends(e),addFriends.addEventListener("click",(function(){var t="Join me on this awesome app! Click here: https://t.me/PhiscooltBot?start=".concat(e.telegramId),r="https://t.me/share/url?url=".concat(encodeURIComponent(t));window.Telegram.WebApp.openTelegramLink(r)}));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function eventFriends(t){return _eventFriends.apply(this,arguments)}function _eventFriends(){return(_eventFriends=_asyncToGenerator(_regeneratorRuntime().mark((function t(e){var r,n;return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,api.getFriends(e.friends);case 2:r=t.sent,0!==(n=r.friends).length?(friendsContainer.innerHTML="",n.push(e),n.sort((function(t,e){return e.cristall+levelPoint[e.level]-(t.cristall+levelPoint[t.level])})),n.forEach(renderFriends)):userName.textContent=e.firstName;case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function renderFriends(t,e){console.log(appData.user.referrer.find((function(e){return e.userId===t.telegramId})));var r=document.createElement("div");r.classList.add("friend__block"),r.innerHTML='\n        <div class=\'avatar__container\'>\n            <img class="friend__avatar" src="'.concat(t.avatar?t.avatar:"",'" alt="">\n        </div>\n        <div class="friend__info">\n            <p class="name">').concat(t.firstName," <br> ").concat(t.lastName,'</p>\n            <img class="friend__referrer" src="').concat(appData.user.referrer.find((function(e){return e.userId===t.telegramId}))?"../Assets/img/referrerFriend.svg":"",'">\n            <div class="friend__info_container">\n                <div class="block__info cristal">кр <br> ').concat(t.cristall,'</div>\n                <div class="block__info level">ур <br> ').concat(t.level,'</div>\n                <div class="block__info raiting ">\n                   <div class="raiting__text ').concat(e<3?"cupe":"normal",'">').concat(e+1,"</div> \n                </div>\n            </div>  \n        </div>\n    "),friendsContainer.append(r)}backbtn.addEventListener("click",(function(){window.location.href="index.html"})),document.addEventListener("DOMContentLoaded",(function(){check(init,api)}));