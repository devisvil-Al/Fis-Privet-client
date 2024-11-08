/*! For license information please see Profile.js.LICENSE.txt */
(()=>{"use strict";var t={p:""};t.p;const e=t.p+"assets/GranitPreloader.png";function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function n(){n=function(){return e};var t,e={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,i=Object.create(o.prototype),c=new A(n||[]);return a(i,"_invoke",{value:k(t,r,c)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var y="suspendedStart",v="suspendedYield",d="executing",m="completed",g={};function w(){}function b(){}function x(){}var L={};f(L,u,(function(){return this}));var E=Object.getPrototypeOf,_=E&&E(E(C([])));_&&_!==o&&i.call(_,u)&&(L=_);var S=x.prototype=w.prototype=Object.create(L);function j(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function n(o,a,c,u){var s=p(t[o],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==r(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}var o;a(this,"_invoke",{value:function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}})}function k(e,r,n){var o=y;return function(i,a){if(o===d)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=P(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=p(e,r,n);if("normal"===s.type){if(o=n.done?m:v,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function P(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=p(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function C(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(i.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(r(e)+" is not iterable")}return b.prototype=x,a(S,"constructor",{value:x,configurable:!0}),a(x,"constructor",{value:b,configurable:!0}),b.displayName=f(x,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,l,"GeneratorFunction")),t.prototype=Object.create(S),t},e.awrap=function(t){return{__await:t}},j(O.prototype),f(O.prototype,s,(function(){return this})),e.AsyncIterator=O,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new O(h(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(S),f(S,l,"Generator"),f(S,u,(function(){return this})),f(S,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=C,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!e)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:C(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e,n){return(e=function(t){var e=function(t,e){if("object"!=r(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==r(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function u(){var t;return t=n().mark((function t(e,r){var o,a,c,u,s;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return document.querySelector(".preloader"),console.log("start"),o=window.Telegram.WebApp,a={allows_write_to_pm:!0,first_name:"Александр",id:984759618,language_code:"ru",last_name:"",username:"devisvil"},t.next=7,r.checkUser({data:o.initData||"query_id=AAFCPbI6AAAAAEI9sjpkKRH0&user=%7B%22id%22%3A984759618%2C%22first_name%22%3A%22%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22devisvil%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1721492698&hash=c5c877983e0d790d0868f83006cf0f6c3305e0009b67de94266b5529ae711a9f",user:i({},o.initDataUnsafe.user)||i({},a)});case 7:if(!t.sent.success){t.next=13;break}return t.next=11,r.auth((null===(c=o.initDataUnsafe)||void 0===c||null===(u=c.user)||void 0===u?void 0:u.id)||a.id);case 11:(s=t.sent).success?e(s.user):(window.location.href="Registry.html",modalGreetings.classList.remove("modal-visible"));case 13:case"end":return t.stop()}}),t)})),u=function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){c(i,n,o,a,u,"next",t)}function u(t){c(i,n,o,a,u,"throw",t)}a(void 0)}))},u.apply(this,arguments)}t.p,t.p,t.p,t.p,t.p,t.p;var s=JSON.stringify({eventType:"web_app_setup_swipe_behavior",eventData:{allow_vertical_swipe:!1}});function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function f(){f=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var i=e&&e.prototype instanceof w?e:w,a=Object.create(i.prototype),c=new A(n||[]);return o(a,"_invoke",{value:k(t,r,c)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var y="suspendedStart",v="suspendedYield",d="executing",m="completed",g={};function w(){}function b(){}function x(){}var L={};s(L,a,(function(){return this}));var E=Object.getPrototypeOf,_=E&&E(E(C([])));_&&_!==r&&n.call(_,a)&&(L=_);var S=x.prototype=w.prototype=Object.create(L);function j(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,i,a,c){var u=p(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==l(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function k(e,r,n){var o=y;return function(i,a){if(o===d)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=P(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=p(e,r,n);if("normal"===s.type){if(o=n.done?m:v,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function P(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=p(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function C(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(l(e)+" is not iterable")}return b.prototype=x,o(S,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:b,configurable:!0}),b.displayName=s(x,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,s(t,u,"GeneratorFunction")),t.prototype=Object.create(S),t},e.awrap=function(t){return{__await:t}},j(O.prototype),s(O.prototype,c,(function(){return this})),e.AsyncIterator=O,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new O(h(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(S),s(S,u,"Generator"),s(S,a,(function(){return this})),s(S,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=C,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:C(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function h(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function p(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){h(i,n,o,a,c,"next",t)}function c(t){h(i,n,o,a,c,"throw",t)}a(void 0)}))}}function y(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,v(n.key),n)}}function v(t){var e=function(t,e){if("object"!=l(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==l(e)?e:e+""}window.parent.postMessage(s,"https://web.telegram.org");var d=function(){return t=function t(){var e,r,n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e=this,n="https://fisprivet.onrender.com/",(r=v(r="url"))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n},e=[{key:"registry",value:function(t){return fetch(this.url+"user/registry",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}},{key:"checkUser",value:(u=p(f().mark((function t(e){var r;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(this.url+"user/check",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});case 2:return r=t.sent,t.next=5,r.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t,this)}))),function(t){return u.apply(this,arguments)})},{key:"auth",value:(c=p(f().mark((function t(e){var r;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(this.url+"user/auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e})});case 2:return r=t.sent,t.next=5,r.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t,this)}))),function(t){return c.apply(this,arguments)})},{key:"getFriends",value:(a=p(f().mark((function t(e){var r;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(this.url+"user/getFriends",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ids:e})});case 2:return r=t.sent,t.next=5,r.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t,this)}))),function(t){return a.apply(this,arguments)})},{key:"getCristalls",value:(i=p(f().mark((function t(e){var r;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(this.url+"user/getCristalls/"+e);case 2:return r=t.sent,t.next=5,r.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t,this)}))),function(t){return i.apply(this,arguments)})},{key:"updateProfile",value:function(t,e){return fetch(this.url+"user/updateProfile/"+e,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(t){return t.json()}))}},{key:"updatePreferences",value:function(t,e){return fetch(this.url+"user/updatePreferences/"+e,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(t){return t.json()}))}},{key:"updateNotification",value:function(t,e){return fetch(this.url+"user/updateNotification/"+e,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(t){return t.json()}))}},{key:"getAppData",value:function(t){return fetch(this.url+"app/events/"+t).then((function(t){return t.json()}))}},{key:"setEventState",value:(o=p(f().mark((function t(e,r){var n;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(this.url+"app/event-state/?id="+e+"?actionName="+r,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e,actionName:r})});case 2:return n=t.sent,t.next=5,n.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t,this)}))),function(t,e){return o.apply(this,arguments)})},{key:"checkEventSubscribe",value:(n=p(f().mark((function t(e,r){var n;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(this.url+"app/event-subscribe",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e,actionName:r})});case 2:return n=t.sent,t.next=5,n.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t,this)}))),function(t,e){return n.apply(this,arguments)})},{key:"getTickets",value:function(t,e){return fetch(this.url+"tickets"+"?tribune=".concat(t,"&id=").concat(e)).then((function(t){return t.json()}))}},{key:"getProfileStatistics",value:function(t){return fetch(this.url+"user/getProfileStatistics/"+t).then((function(t){return t.json()}))}},{key:"orderTicket",value:function(t){return fetch(this.url+"tickets",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}},{key:"sendTicketToTelegram",value:function(t,e){return fetch(this.url+"qr",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tickets:t,user:e})}).then((function(t){return t.json()}))}},{key:"getTicketsByUser",value:function(t){return fetch(this.url+"tickets/"+t).then((function(t){return t.json()}))}}],e&&y(t.prototype,e),r&&y(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e,r,n,o,i,a,c,u}(),m=new d;function g(t){return function(t){if(Array.isArray(t))return w(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return w(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function x(){x=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof m?e:m,a=Object.create(i.prototype),c=new A(n||[]);return o(a,"_invoke",{value:k(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var h="suspendedStart",p="suspendedYield",y="executing",v="completed",d={};function m(){}function g(){}function w(){}var L={};s(L,a,(function(){return this}));var E=Object.getPrototypeOf,_=E&&E(E(C([])));_&&_!==r&&n.call(_,a)&&(L=_);var S=w.prototype=m.prototype=Object.create(L);function j(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==b(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function k(e,r,n){var o=h;return function(i,a){if(o===y)throw Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=P(c,n);if(u){if(u===d)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var s=f(e,r,n);if("normal"===s.type){if(o=n.done?v:p,s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=v,n.method="throw",n.arg=s.arg)}}}function P(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,d;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function C(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(b(e)+" is not iterable")}return g.prototype=w,o(S,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:g,configurable:!0}),g.displayName=s(w,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,s(t,u,"GeneratorFunction")),t.prototype=Object.create(S),t},e.awrap=function(t){return{__await:t}},j(O.prototype),s(O.prototype,c,(function(){return this})),e.AsyncIterator=O,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new O(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(S),s(S,u,"Generator"),s(S,a,(function(){return this})),s(S,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=C,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:C(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),d}},e}function L(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function E(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){L(i,n,o,a,c,"next",t)}function c(t){L(i,n,o,a,c,"throw",t)}a(void 0)}))}}function _(t){return function(t){if(Array.isArray(t))return S(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return S(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?S(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var j,O,k,P,T=document.querySelector(".nav__btn-back"),N=document.querySelector(".preloader"),A=document.querySelector(".profile__avatar img"),C=document.querySelectorAll(".section__container"),G=document.querySelector(".nav__btn-options"),D=document.querySelector(".profile"),q=document.querySelector(".notification"),I=document.querySelector(".preferences"),F=document.querySelector(".wrapper__options__title"),J=document.querySelector(".profile__form"),B=document.querySelector(".preferences__form"),H=document.querySelector(".notification__form"),U=document.querySelector(".profile_btn"),Y=document.querySelector(".notification_btn"),M=document.querySelector(".preferences_btn"),R=document.querySelectorAll(".toggle"),$=document.querySelectorAll(".preferences__variable"),K={};function W(t){var e,r,n;window.scrollTo(0,0),K.user=t,N.style.display="none";var o=J.elements,i=o.firstName,a=o.lastName,c=o.country,u=o.day,s=o.month,l=o.year;H.elements.cristals.checked=t.hubCristall.notification,_(B.elements.team).find((function(e){return e.value===t.team})).checked=!0,A.src=t.avatar,t.avatar||A.remove(),i.value=t.firstName,a.value=t.lastName,c.value=t.country||"",u.value=(null===(e=t.birthday)||void 0===e?void 0:e.day)||"",s.value=(null===(r=t.birthday)||void 0===r?void 0:r.month)||"",l.value=(null===(n=t.birthday)||void 0===n?void 0:n.year)||""}U.addEventListener("click",(function(){F.textContent="Персональная информация",C.forEach((function(t){return t.classList.remove("section-active")})),D.classList.add("section-active"),window.scroll({top:window.outerHeight,behavior:"smooth"})})),Y.addEventListener("click",(function(){F.textContent="Настройки уведомлений",C.forEach((function(t){return t.classList.remove("section-active")})),q.classList.add("section-active"),window.scroll({top:window.outerHeight,behavior:"smooth"})})),M.addEventListener("click",(function(){F.textContent="Ваши предпочтения",C.forEach((function(t){return t.classList.remove("section-active")})),I.classList.add("section-active"),window.scroll({top:window.outerHeight,behavior:"smooth"})})),J.addEventListener("submit",function(){var t=E(x().mark((function t(e){var r,n,o,i,a,c,u,s,l;return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),r=J.elements,n=r.firstName,o=r.lastName,i=r.country,a=r.day,c=r.month,u=r.year,s={firstName:n.value,lastName:o.value,country:i.value,birthday:{day:a.value,month:c.value,year:u.value}},t.next=5,m.updateProfile(s,K.user.telegramId);case 5:l=t.sent,console.log(l),l.success&&window.location.reload();case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),B.addEventListener("submit",function(){var t=E(x().mark((function t(e){var r,n;return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),r=B.elements.team,n={team:r.value},t.next=5,m.updatePreferences(n,K.user.telegramId);case 5:t.sent.success&&window.location.reload();case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),H.addEventListener("submit",function(){var t=E(x().mark((function t(e){var r,n;return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),r=H.elements.cristals,n={cristals:r.checked},t.next=5,m.updateNotification(n,K.user.telegramId);case 5:t.sent.success&&window.location.reload();case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),G.addEventListener("click",(function(){return window.scroll({top:0,behavior:"smooth"})})),$.forEach((function(t){t.addEventListener("click",(function(){t.querySelector("input").checked=!0}))})),T.addEventListener("click",(function(){return window.location.href="index.html"})),R.forEach((function(t){t.addEventListener("click",(function(){t.previousElementSibling.checked=!t.previousElementSibling.checked}))})),document.addEventListener("DOMContentLoaded",(function(){!function(t,e){u.apply(this,arguments)}(W,m)})),j=".profile__form .form__input",O=".profile__form .submit__btn",k=document.querySelectorAll(j),P=document.querySelector(O),k.forEach((function(t){return t.addEventListener("input",(function(){return function(t,e,r){e.disabled=!g(r).every((function(t){return t.validity.valid}))}(0,P,k)}))}))})();