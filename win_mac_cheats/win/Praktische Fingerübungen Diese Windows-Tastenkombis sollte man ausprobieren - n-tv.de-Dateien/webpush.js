!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e()
else if("function"==typeof define&&define.amd)define([],e)
else{var r=e()
for(var n in r)("object"==typeof exports?exports:t)[n]=r[n]}}(this,(function(){return function(t){var e={}
function r(n){if(e[n])return e[n].exports
var o=e[n]={i:n,l:!1,exports:{}}
return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t
if(4&e&&"object"==typeof t&&t&&t.__esModule)return t
var n=Object.create(null)
if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o))
return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t}
return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=24)}({0:function(t,e,r){"use strict"
function n(t){var e=[],r=!0,n=!1,o=void 0
try{for(var i,a=t[Symbol.iterator]();!(r=(i=a.next()).done);r=!0){var c=i.value
if(c.sourceId){var u=!0,s=!1,f=void 0
try{for(var l,h=c.groups[Symbol.iterator]();!(u=(l=h.next()).done);u=!0){var d=l.value
d.sourceId.startsWith("browser_")&&e.push(d)}}catch(t){s=!0,f=t}finally{try{u||null==h.return||h.return()}finally{if(s)throw f}}}}}catch(t){n=!0,o=t}finally{try{r||null==a.return||a.return()}finally{if(n)throw o}}return e}function o(t){var e
switch(document.documentElement.lang){case"it":e="italian"
break
case"fr":e="french"
break
default:e="german"}var r=t.filter((function(t){return t.sourceId===e})),n=[],o=!0,i=!1,a=void 0
try{for(var c,u=function(){var t=c.value.groups.filter((function(t){return t.sourceId.startsWith("browser_")})),e=[]
t.forEach((function(t){t.tags.forEach((function(t){(t.sourceId.includes("breakingnews")||t.sourceId.includes("sports")||t.sourceId.includes("bigstories"))&&e.push(t)}))})),e.forEach((function(t){return n.push(t.id)}))},s=r[Symbol.iterator]();!(o=(c=s.next()).done);o=!0)u()}catch(t){i=!0,a=t}finally{try{o||null==s.return||s.return()}finally{if(i)throw a}}return n}function i(t){var e=t
if(Array.isArray(e.app.client.defaultSubscribedTags))return e
var r=e.app.client.defaultSubscribedTags.split(/\s*,\s*/g).map((function(t){return Number(t)||t}))
return e.app.client.defaultSubscribedTags=r,e}function a(t,e){document.getElementById(t)&&(e||(e="block"),document.getElementById(t).style.display=e)}function c(t){document.getElementById(t)&&(document.getElementById(t).style.display="none")}function u(){var t,e=navigator.userAgent
return e.indexOf("Chrome")>-1?t="chrome":e.indexOf("Firefox")>-1?t="firefox":e.indexOf("Safari")>-1&&(t="safari"),t}function s(){return/Edge/.test(navigator.userAgent)||/Trident/.test(navigator.userAgent)?(console.warn("Browser not supported"),!1):!(!navigator.userAgent.match("Chrome")&&!navigator.userAgent.match("Firefox"))&&("serviceWorker"in navigator||(console.warn("Service worker not supported"),!1))}r.d(e,"b",(function(){return n})),r.d(e,"e",(function(){return o})),r.d(e,"i",(function(){return i})),r.d(e,"h",(function(){return a})),r.d(e,"c",(function(){return c})),r.d(e,"k",(function(){return u})),r.d(e,"d",(function(){return s})),r.d(e,"f",(function(){return f})),r.d(e,"g",(function(){return l})),r.d(e,"j",(function(){return h})),r.d(e,"a",(function(){return d}))
var f=function(t){return new Promise((function(e,r){var n=document.createElement("script")
n.src=t,document.head.appendChild(n),n.onreadystatechange=e,n.onload=e}))},l=function(t){var e=document.createElement("link")
e.rel="stylesheet",e.href=t,document.head.appendChild(e)},h=function(){navigator.serviceWorker.getRegistrations().then((function(t){var e=!0,r=!1,n=void 0
try{for(var o,i=t[Symbol.iterator]();!(e=(o=i.next()).done);e=!0){o.value.unregister()}}catch(t){r=!0,n=t}finally{try{e||null==i.return||i.return()}finally{if(r)throw n}}})),caches.keys().then((function(t){return Promise.all(t.map((function(t){return caches.delete(t)})))}))},d=function(t){var e=document.querySelector("script[src$='webpush.js']").src,r=e.substring(0,e.lastIndexOf("/"))
return t&&t.startsWith("http")?t:"".concat(r,"/").concat(t)}},1:function(t,e,r){t.exports=r(12)},12:function(t,e,r){var n=function(t){"use strict"
var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag"
function c(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),a=new j(n||[])
return i._invoke=function(t,e,r){var n="suspendedStart"
return function(o,i){if("executing"===n)throw new Error("Generator is already running")
if("completed"===n){if("throw"===o)throw i
return O()}for(r.method=o,r.arg=i;;){var a=r.delegate
if(a){var c=w(a,r)
if(c){if(c===s)continue
return c}}if("next"===r.method)r.sent=r._sent=r.arg
else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg
r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg)
n="executing"
var f=u(t,e,r)
if("normal"===f.type){if(n=r.done?"completed":"suspendedYield",f.arg===s)continue
return{value:f.arg,done:r.done}}"throw"===f.type&&(n="completed",r.method="throw",r.arg=f.arg)}}}(t,r,a),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c
var s={}
function f(){}function l(){}function h(){}var d={}
d[o]=function(){return this}
var p=Object.getPrototypeOf,v=p&&p(p(E([])))
v&&v!==e&&r.call(v,o)&&(d=v)
var y=h.prototype=f.prototype=Object.create(d)
function g(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function m(t){var e
this._invoke=function(n,o){function i(){return new Promise((function(e,i){!function e(n,o,i,a){var c=u(t[n],t,o)
if("throw"!==c.type){var s=c.arg,f=s.value
return f&&"object"==typeof f&&r.call(f,"__await")?Promise.resolve(f.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return e("throw",t,i,a)}))}a(c.arg)}(n,o,e,i)}))}return e=e?e.then(i,i):i()}}function w(t,e){var r=t.iterator[e.method]
if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return s
e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,t.iterator,e.arg)
if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s
var o=n.arg
return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function b(t){var e={tryLoc:t[0]}
1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{}
e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function E(t){if(t){var e=t[o]
if(e)return e.call(t)
if("function"==typeof t.next)return t
if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e
return e.value=void 0,e.done=!0,e}
return i.next=i}}return{next:O}}function O(){return{value:void 0,done:!0}}return l.prototype=y.constructor=h,h.constructor=l,h[a]=l.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor
return!!e&&(e===l||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(m.prototype),m.prototype[i]=function(){return this},t.AsyncIterator=m,t.async=function(e,r,n,o){var i=new m(c(e,r,n,o))
return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},g(y),y[a]="Generator",y[o]=function(){return this},y.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[]
for(var r in t)e.push(r)
return e.reverse(),function r(){for(;e.length;){var n=e.pop()
if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=E,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0
var t=this.tryEntries[0].completion
if("throw"===t.type)throw t.arg
return this.rval},dispatchException:function(t){if(this.done)throw t
var e=this
function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion
if("root"===i.tryLoc)return n("end")
if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc")
if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)
if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally")
if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n]
if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o
break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null)
var a=i?i.completion:{}
return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg
return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e]
if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e]
if(r.tryLoc===t){var n=r.completion
if("throw"===n.type){var o=n.arg
x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}(t.exports)
try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},24:function(t,e,r){"use strict"
r.r(e)
var n=r(1),o=r.n(n),i=r(7),a=r.n(i),c=r(0)
window.addEventListener("load",a()(o.a.mark((function t(){var e,r,n,i,a
return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=new URL(location).searchParams.get("cfg"),n=new URL(location).searchParams.get("css"),!r||!n){t.next=14
break}indexedDB.deleteDatabase("ethinking-notification"),localStorage.clear(),sessionStorage.clear(),Object(c.j)(),(i=document.createElement("style")).textContent=decodeURIComponent(n),document.head.appendChild(i),e=JSON.parse(decodeURIComponent(r)),console.log(e),t.next=21
break
case 14:return Object(c.g)(Object(c.a)("webpush-vars.css")),t.next=17,fetch(Object(c.a)("config.json"))
case 17:return a=t.sent,t.next=20,a.json()
case 20:e=t.sent
case 21:if(!e.uiActive||!Object(c.d)()){t.next=30
break}return Object(c.g)(Object(c.a)("styles.css")),t.next=25,Object(c.f)(Object(c.a)("webpush-ui.js"))
case 25:new PushDeliveryUI(e).init(),window.postMessage("pushDeliveryReady"),t.next=34
break
case 30:return t.next=32,Object(c.f)(Object(c.a)("webpush-core.js"))
case 32:window.pushDelivery=new PushDelivery(e),window.postMessage("pushDeliveryReady")
case 34:case"end":return t.stop()}}),t)}))))},7:function(t,e){function r(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}t.exports=function(t){return function(){var e=this,n=arguments
return new Promise((function(o,i){var a=t.apply(e,n)
function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))}}}})}))
