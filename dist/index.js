/*! For license information please see index.js.LICENSE.txt */
(()=>{"use strict";var t={};function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function r(){r=function(){return n};var t,n={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,i=Object.create(o.prototype),c=new N(n||[]);return a(i,"_invoke",{value:O(t,r,c)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=h;var d="suspendedStart",y="suspendedYield",v="executing",m="completed",g={};function w(){}function b(){}function _(){}var x={};f(x,u,(function(){return this}));var L=Object.getPrototypeOf,S=L&&L(L(q([])));S&&S!==o&&i.call(S,u)&&(x=S);var E=_.prototype=w.prototype=Object.create(x);function k(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,r){function n(o,a,c,u){var s=p(t[o],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==e(f)&&i.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}var o;a(this,"_invoke",{value:function(t,e){function i(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(i,i):i()}})}function O(e,r,n){var o=d;return function(i,a){if(o===v)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=P(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=p(e,r,n);if("normal"===s.type){if(o=n.done?m:y,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function P(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=p(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function q(r){if(r||""===r){var n=r[u];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,a=function e(){for(;++o<r.length;)if(i.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return a.next=a}}throw new TypeError(e(r)+" is not iterable")}return b.prototype=_,a(E,"constructor",{value:_,configurable:!0}),a(_,"constructor",{value:b,configurable:!0}),b.displayName=f(_,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,f(t,l,"GeneratorFunction")),t.prototype=Object.create(E),t},n.awrap=function(t){return{__await:t}},k(j.prototype),f(j.prototype,s,(function(){return this})),n.AsyncIterator=j,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new j(h(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(E),f(E,l,"Generator"),f(E,u,(function(){return this})),f(E,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=q,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:q(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},n}function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,a(n.key),n)}}function a(t){var r=function(t,r){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,r||"default");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==e(r)?r:r+""}t.p="";var c=new(function(){return t=function t(){var e,r,n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e=this,n="https://fisprivet.onrender.com/",(r=a(r="url"))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n},e=[{key:"registry",value:function(t){return fetch(this.url+"user/registry",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}},{key:"checkUser",value:(h=o(r().mark((function t(e){var n;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(this.url+"user/check",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});case 2:return n=t.sent,t.next=5,n.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t,this)}))),function(t){return h.apply(this,arguments)})},{key:"auth",value:(f=o(r().mark((function t(e){var n;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(this.url+"user/auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e})});case 2:return n=t.sent,t.next=5,n.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t,this)}))),function(t){return f.apply(this,arguments)})},{key:"getFriends",value:(l=o(r().mark((function t(e){var n;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(this.url+"user/getFriends",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ids:e})});case 2:return n=t.sent,t.next=5,n.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t,this)}))),function(t){return l.apply(this,arguments)})},{key:"getCristalls",value:(s=o(r().mark((function t(e){var n;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(this.url+"user/getCristalls/"+e);case 2:return n=t.sent,t.next=5,n.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t,this)}))),function(t){return s.apply(this,arguments)})},{key:"updateProfile",value:function(t,e){return fetch(this.url+"user/updateProfile/"+e,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(t){return t.json()}))}},{key:"updatePreferences",value:function(t,e){return fetch(this.url+"user/updatePreferences/"+e,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(t){return t.json()}))}},{key:"updateNotification",value:function(t,e){return fetch(this.url+"user/updateNotification/"+e,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(t){return t.json()}))}},{key:"getAppData",value:function(t){return fetch(this.url+"app/events/"+t).then((function(t){return t.json()}))}},{key:"setEventState",value:(u=o(r().mark((function t(e,n){var o;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(this.url+"app/event-state/?id="+e+"?actionName="+n,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e,actionName:n})});case 2:return o=t.sent,t.next=5,o.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t,this)}))),function(t,e){return u.apply(this,arguments)})},{key:"checkEventSubscribe",value:(c=o(r().mark((function t(e,n){var o;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(this.url+"app/event-subscribe",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e,actionName:n})});case 2:return o=t.sent,t.next=5,o.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t,this)}))),function(t,e){return c.apply(this,arguments)})},{key:"getTickets",value:function(t,e){return fetch(this.url+"tickets"+"?tribune=".concat(t,"&id=").concat(e)).then((function(t){return t.json()}))}},{key:"getProfileStatistics",value:function(t){return fetch(this.url+"user/getProfileStatistics/"+t).then((function(t){return t.json()}))}},{key:"orderTicket",value:function(t){return fetch(this.url+"tickets",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}},{key:"sendTicketToTelegram",value:function(t,e){return fetch(this.url+"qr",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tickets:t,user:e})}).then((function(t){return t.json()}))}},{key:"getTicketsByUser",value:function(t){return fetch(this.url+"tickets/"+t).then((function(t){return t.json()}))}}],e&&i(t.prototype,e),n&&i(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e,n,c,u,s,l,f,h}());function u(t,e){t.wheelDelta>0?e.container.children.length>e.count?e.count++:e.count:0<e.count?e.count--:e.count,e.container.scroll({left:e.container.clientWidth*e.count,behavior:"smooth"})}const s=t.p+"assets/granite.png",l=t.p+"assets/GranitPreloader.png";function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function h(){h=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof w?e:w,a=Object.create(i.prototype),c=new N(n||[]);return o(a,"_invoke",{value:O(t,r,c)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var d="suspendedStart",y="suspendedYield",v="executing",m="completed",g={};function w(){}function b(){}function _(){}var x={};s(x,a,(function(){return this}));var L=Object.getPrototypeOf,S=L&&L(L(q([])));S&&S!==r&&n.call(S,a)&&(x=S);var E=_.prototype=w.prototype=Object.create(x);function k(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(o,i,a,c){var u=p(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==f(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function O(e,r,n){var o=d;return function(i,a){if(o===v)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=P(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=p(e,r,n);if("normal"===s.type){if(o=n.done?m:y,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function P(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=p(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function q(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(f(e)+" is not iterable")}return b.prototype=_,o(E,"constructor",{value:_,configurable:!0}),o(_,"constructor",{value:b,configurable:!0}),b.displayName=s(_,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,s(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},k(j.prototype),s(j.prototype,c,(function(){return this})),e.AsyncIterator=j,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new j(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(E),s(E,u,"Generator"),s(E,a,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=q,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:q(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){y(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function y(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=f(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==f(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function v(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function m(){var t;return t=h().mark((function t(e,r){var n,o,i,a,c;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return document.querySelector(".preloader"),console.log("start"),n=window.Telegram.WebApp,o={allows_write_to_pm:!0,first_name:"Александр",id:984759618,language_code:"ru",last_name:"",username:"devisvil"},t.next=7,r.checkUser({data:n.initData||"query_id=AAFCPbI6AAAAAEI9sjpkKRH0&user=%7B%22id%22%3A984759618%2C%22first_name%22%3A%22%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22devisvil%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1721492698&hash=c5c877983e0d790d0868f83006cf0f6c3305e0009b67de94266b5529ae711a9f",user:d({},n.initDataUnsafe.user)||d({},o)});case 7:if(!t.sent.success){t.next=13;break}return t.next=11,r.auth((null===(i=n.initDataUnsafe)||void 0===i||null===(a=i.user)||void 0===a?void 0:a.id)||o.id);case 11:(c=t.sent).success?e(c.user):(window.location.href="Registry.html",modalGreetings.classList.remove("modal-visible"));case 13:case"end":return t.stop()}}),t)})),m=function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){v(i,n,o,a,c,"next",t)}function c(t){v(i,n,o,a,c,"throw",t)}a(void 0)}))},m.apply(this,arguments)}var g={1:{modelName:"granite",name:"Гранит",img:s,preloader:l,text:" Гранит – это основа, прочный и надежный фундамент. Этот камень является символом Санкт-Петербурга, города, известного своими гранитными набережными и прочными архитектурными сооружениями. Данный уровень представляет собой начальную стадию знакомства с клубом, закладывая крепкую основу в ваши дальнейшие взаимоотношения. Гранит – это символ вашей стойкости и верности, как прочного фундамента, на котором строятся великие победы."},2:{modelName:"quarcite",name:"Кварцит",img:t.p+"assets/quarcite.png",preloader:t.p+"assets/QuarcitePreloader.png",text:"Кварцит — это символ роста и объединения. Как гранит обрастает кристаллами, так и ваша связь с клубом укрепляется и становится ярче. Кварцит олицетворяет процесс кристаллизации — постепенное превращение прочной основы в множество сверкающих граней. Каждый кристалл символизирует тех, кому не безразличен клуб, объединённых общей целью и фундаментальными ценностями. Этот уровень представляет собой развитие вашего участия, когда ваша приверженность и усилия становятся частью единого целого, укрепляя сообщество болельщиков и поддерживая клуб на пути к новым вершинам. Кварцит — это знак того, что вместе мы становимся сильнее и ярче."},3:{modelName:"agat",name:"Агат",img:t.p+"assets/agat.png",preloader:t.p+"assets/AgatPreloader.png",text:"Агат — это камень, который отражает ваш уникальный путь в поддержке клуба. Его многослойная структура символизирует этапы, через которые вы прошли, и все эмоции, которые вы испытывали — от первых матчей до ярких побед. Каждая полоса на агате — это часть вашей истории, связанная с клубом. Агат напоминает, что за внешней красотой скрываются глубина и стойкость, как и в вашей приверженности. Этот уровень олицетворяет не только преданность, но и многослойность вашего вклада в команду. Ваша поддержка, как и сам агат, состоит из множества слоев — воспоминаний, эмоций и шагов, которые укрепляют вашу связь с клубом. Вы — часть этого уникального сообщества, которое делает клуб сильнее и ярче."},4:{modelName:"topaz",name:"Топаз",img:t.p+"assets/topaz.png",preloader:l,text:"Топаз — это символ ясности, силы и стойкости. На этом уровне вы уже не просто болельщик — вы один из тех, кто освещает путь клубу. Топаз известен своей прозрачностью и прочностью, и эти качества олицетворяют вашу роль как человека, чья поддержка становится все более значимой. Ваше участие сияет ярче с каждым шагом, укрепляя клуб и его сообщество. Этот камень также символизирует гармонию и баланс, подчеркивая, что ваша поддержка является стабильной опорой для команды, особенно в трудные моменты. Как топаз преломляет свет, так и вы, через свою активность, приносите новую энергию и ясность в каждый момент жизни команды. Этот уровень символизирует ваше влияние, которое помогает клубу расти и достигать новых высот. Благодаря вам команда чувствует уверенность и стремится к новым победам."},5:{modelName:"saphire",name:"Сапфир",img:t.p+"assets/sapphire.png",preloader:l,text:'Сапфир — это символ мудрости, преданности и гармонии. Оранжевый сапфир с его множеством граней отражает ваш опыт и знания, которые вы накопили вместе с клубом. Каждая грань — это часть вашего многогранного вклада в жизнь команды. На этом уровне вы становитесь хранителем ценностей клуба, помогая ему расти и развиваться. Сапфир также олицетворяет постоянство и стойкость. Ваша поддержка остаётся непоколебимой даже в трудные моменты. Как сапфир преломляет свет через свои грани, так и вы привносите свет и энергию, поддерживая команду на пути к успеху. Этот уровень подчеркивает, что ваша поддержка — это осознанный и ценный вклад в будущее сообщества "Кристалл"'}};function w(t){t.disabled=!0}function b(t){t.disabled=!1}const _=t.p+"assets/kristall1.svg",x=t.p+"assets/preloader-orange.gif";function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function S(){S=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof m?e:m,a=Object.create(i.prototype),c=new N(n||[]);return o(a,"_invoke",{value:O(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var h="suspendedStart",p="suspendedYield",d="executing",y="completed",v={};function m(){}function g(){}function w(){}var b={};s(b,a,(function(){return this}));var _=Object.getPrototypeOf,x=_&&_(_(q([])));x&&x!==r&&n.call(x,a)&&(b=x);var E=w.prototype=m.prototype=Object.create(b);function k(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==L(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function O(e,r,n){var o=h;return function(i,a){if(o===d)throw Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=P(c,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=f(e,r,n);if("normal"===s.type){if(o=n.done?y:p,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=y,n.method="throw",n.arg=s.arg)}}}function P(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function q(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(L(e)+" is not iterable")}return g.prototype=w,o(E,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:g,configurable:!0}),g.displayName=s(w,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,s(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},k(j.prototype),s(j.prototype,c,(function(){return this})),e.AsyncIterator=j,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new j(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(E),s(E,u,"Generator"),s(E,a,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=q,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:q(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}function E(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function k(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){E(i,n,o,a,c,"next",t)}function c(t){E(i,n,o,a,c,"throw",t)}a(void 0)}))}}var j=document.querySelector(".modal__greetings"),O=document.querySelector(".main"),P=document.querySelector(".point__level"),T=document.querySelector(".slider__events"),C=document.querySelector(".slider__actions"),N=document.querySelector(".preloader"),q=document.querySelector(".point"),A=document.querySelector(".point__description"),G=document.querySelector(".friends__btn"),D=document.querySelector(".point__container_options_btn"),F=document.querySelector(".modal-event"),I=F.querySelector(".nav__btn-back"),J=document.querySelector("#action").content,B=document.querySelector("#event").content,U=document.querySelector(".modal-event_btn"),H=document.querySelector(".point__icon");function W(t){var e=document.querySelector(".modal-message");e.classList.add("modal-message--visible"),e.textContent=t,setTimeout((function(){e.classList.remove("modal-message--visible"),e.textContent=""}),3e3)}var Y=window.Telegram.WebApp;console.log(document.referrer),Y.isClosingConfirmationEnabled=!0;var M={sportEvent:{},action:{},user:{}},R={count:0,container:C},z={count:0,container:T};function K(){return K=k(S().mark((function t(e,r){var n,o,i,a,u,s;return S().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s=function(){return(s=k(S().mark((function t(a){var u,s;return S().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,w(a.target),t.next=4,c.checkEventSubscribe(r,e.name);case 4:t.sent.success?(i.classList.remove("slide__btn-active"),i.classList.add("slide__btn-closed"),i.textContent="завершено",o.textContent="",o.classList.add("slide__cri-closed"),R.container.append(n)):"Накопить 600 кр"===e.name?W("Вы не выполнили условия события"):(u='Привет!\nЯ теперь есть в новом приложении "Кристалл"! \nПрисоединяйся, будем соревноваться вместе: \nhttps://t.me/PhiscooltBot?start='.concat(r,"\nПереходи по ссылке и получи свои первые 60 кристаллов!"),s="https://t.me/share/url?url=".concat(encodeURIComponent(u)),window.Telegram.WebApp.openTelegramLink(s)),b(a.target),t.next=14;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0),b(a.target),W("Вы не выполнили условия события");case 14:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)},u=function(t){return s.apply(this,arguments)},n=J.querySelector(".slide__actions").cloneNode(!0),(o=n.querySelector(".slide__cri")).textContent=e.price,n.querySelector(".slide__title").textContent=e.name,i=n.querySelector(".slide__btn"),"create"===e.state?(a=function(){var t=k(S().mark((function t(){var n,o,s;return S().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return w(i),t.next=3,c.setEventState(r,e.name);case 3:(n=t.sent).success&&("invite"===n.action.key?(o='Привет!\nЯ теперь есть в новом приложении "Кристалл"! \nПрисоединяйся, будем соревноваться вместе: \nhttps://t.me/PhiscooltBot?start='.concat(r,"\nПереходи по ссылке и получи свои первые 60 кристаллов!"),s="https://t.me/share/url?url=".concat(encodeURIComponent(o)),window.Telegram.WebApp.openTelegramLink(s)):"subscribe"===n.action.key&&window.Telegram.WebApp.openTelegramLink("https://t.me/+mzwM8nGyOnA0MmIy"),setTimeout((function(){i.classList.add("slide__btn-active"),i.textContent="собрать",i.removeEventListener("click",a),i.addEventListener("click",u)}),1e3));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i.textContent="выполнить",i.addEventListener("click",a),b(i)):"start"===e.state?(i.classList.add("slide__btn-active"),i.textContent="собрать",i.addEventListener("click",u)):(i.classList.add("slide__btn-closed"),i.textContent="завершено",o.textContent="",o.classList.add("slide__cri-closed")),R.container.append(n);case 9:case"end":return t.stop()}}),t)}))),K.apply(this,arguments)}function Q(){window.location.href="OrderTicket.html"}function V(){window.location.href="MyTickets.html"}function X(t,e){var r=B.querySelector(".slide__event").cloneNode(!0);r.querySelector("img").src=_,r.querySelector(".event__title").textContent=t.name,r.querySelector(".event__time").textContent=t.time,r.querySelector(".event__date").textContent=t.date,r.querySelector(".event__address").textContent=t.address,z.container.append(r);var n=M.user.tickets.find((function(e){return e.event===t._id}));r.addEventListener("click",(function(){M.sportEvent=t,F.classList.add("modal-visible"),F.querySelector("img").src=_,F.querySelector(".nav__toggle_command").textContent=t.name,F.querySelector(".nav__toggle_address").textContent=t.address,F.querySelector(".nav__toggle_date").textContent=t.date,F.querySelector(".nav__toggle_time").textContent=t.time,F.querySelector(".modal-event_description").textContent=t.description,localStorage.setItem("event",JSON.stringify(M.sportEvent)),n?(U.removeEventListener("click",Q),U.addEventListener("click",V),U.textContent="Посмотреть билеты"):(U.removeEventListener("click",V),U.addEventListener("click",Q),U.textContent="Посетить матч")}))}Promise.resolve(2).then((function(t){return Math.pow(t,t)})).then((function(t){return Math.pow(t,t)})).then((function(t){return console.log(t)})),C.addEventListener("mousewheel",(function(t){return u(t,R)})),T.addEventListener("mousewheel",(function(t){return u(t,z)})),A.addEventListener("click",(function(){return window.location.href="ProfileInfo.html"})),D.addEventListener("click",(function(){return window.location.href="Profile.html"})),I.addEventListener("click",(function(){F.classList.remove("modal-visible"),F.querySelector("img").src=""})),G.addEventListener("click",(function(){return window.location.href="Friends.html"})),function(){m.apply(this,arguments)}((function(t){M.user=t,c.getAppData(t.telegramId).then((function(e){if(e.success){var r=e.actions,n=e.sportEvents;r.forEach((function(e){return function(t,e){return K.apply(this,arguments)}(e,t.telegramId)})),n.forEach(X)}})),q.textContent=t.cristall,O.classList.remove("hidden__main"),P.textContent="".concat(t.level," ур. ").concat(g[t.level].name),H.src=g[t.level].img,j.querySelector(".modal__title").classList.add("modal__title-active"),j.querySelector(".modal__name").textContent=t.firstName,j.querySelector(".modal__logo").src=x,console.log("end"),N.style.display="none","https://web.telegram.org/"===document.referrer&&(j.classList.add("modal-visible"),setTimeout((function(){j.classList.remove("modal-visible")}),3e3))}),c),Y.ready(),Y.expand()})();