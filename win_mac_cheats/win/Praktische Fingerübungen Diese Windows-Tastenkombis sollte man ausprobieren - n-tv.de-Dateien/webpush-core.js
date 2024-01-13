/*! For license information please see webpush-core.js.LICENSE.txt */
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t()
else if("function"==typeof define&&define.amd)define([],t)
else{var n=t()
for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(this,(function(){return function(e){var t={}
function n(r){if(t[r])return t[r].exports
var i=t[r]={i:r,l:!1,exports:{}}
return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e
if(4&t&&"object"==typeof e&&e&&e.__esModule)return e
var r=Object.create(null)
if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i))
return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e}
return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=20)}([function(e,t,n){"use strict"
function r(e){var t=[],n=!0,r=!1,i=void 0
try{for(var o,a=e[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value
if(s.sourceId){var c=!0,u=!1,f=void 0
try{for(var l,p=s.groups[Symbol.iterator]();!(c=(l=p.next()).done);c=!0){var h=l.value
h.sourceId.startsWith("browser_")&&t.push(h)}}catch(e){u=!0,f=e}finally{try{c||null==p.return||p.return()}finally{if(u)throw f}}}}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}return t}function i(e){var t
switch(document.documentElement.lang){case"it":t="italian"
break
case"fr":t="french"
break
default:t="german"}var n=e.filter((function(e){return e.sourceId===t})),r=[],i=!0,o=!1,a=void 0
try{for(var s,c=function(){var e=s.value.groups.filter((function(e){return e.sourceId.startsWith("browser_")})),t=[]
e.forEach((function(e){e.tags.forEach((function(e){(e.sourceId.includes("breakingnews")||e.sourceId.includes("sports")||e.sourceId.includes("bigstories"))&&t.push(e)}))})),t.forEach((function(e){return r.push(e.id)}))},u=n[Symbol.iterator]();!(i=(s=u.next()).done);i=!0)c()}catch(e){o=!0,a=e}finally{try{i||null==u.return||u.return()}finally{if(o)throw a}}return r}function o(e){var t=e
if(Array.isArray(t.app.client.defaultSubscribedTags))return t
var n=t.app.client.defaultSubscribedTags.split(/\s*,\s*/g).map((function(e){return Number(e)||e}))
return t.app.client.defaultSubscribedTags=n,t}function a(e,t){document.getElementById(e)&&(t||(t="block"),document.getElementById(e).style.display=t)}function s(e){document.getElementById(e)&&(document.getElementById(e).style.display="none")}function c(){var e,t=navigator.userAgent
return t.indexOf("Chrome")>-1?e="chrome":t.indexOf("Firefox")>-1?e="firefox":t.indexOf("Safari")>-1&&(e="safari"),e}function u(){return/Edge/.test(navigator.userAgent)||/Trident/.test(navigator.userAgent)?(console.warn("Browser not supported"),!1):!(!navigator.userAgent.match("Chrome")&&!navigator.userAgent.match("Firefox"))&&("serviceWorker"in navigator||(console.warn("Service worker not supported"),!1))}n.d(t,"b",(function(){return r})),n.d(t,"e",(function(){return i})),n.d(t,"i",(function(){return o})),n.d(t,"h",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"k",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"f",(function(){return f})),n.d(t,"g",(function(){return l})),n.d(t,"j",(function(){return p})),n.d(t,"a",(function(){return h}))
var f=function(e){return new Promise((function(t,n){var r=document.createElement("script")
r.src=e,document.head.appendChild(r),r.onreadystatechange=t,r.onload=t}))},l=function(e){var t=document.createElement("link")
t.rel="stylesheet",t.href=e,document.head.appendChild(t)},p=function(){navigator.serviceWorker.getRegistrations().then((function(e){var t=!0,n=!1,r=void 0
try{for(var i,o=e[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){i.value.unregister()}}catch(e){n=!0,r=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}})),caches.keys().then((function(e){return Promise.all(e.map((function(e){return caches.delete(e)})))}))},h=function(e){var t=document.querySelector("script[src$='webpush.js']").src,n=t.substring(0,t.lastIndexOf("/"))
return e&&e.startsWith("http")?e:"".concat(n,"/").concat(e)}},function(e,t,n){e.exports=n(12)},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t,n){!function(e){"use strict"
function t(e){return Array.prototype.slice.call(e)}function n(e){return new Promise((function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function r(e,t,r){var i,o=new Promise((function(o,a){n(i=e[t].apply(e,r)).then(o,a)}))
return o.request=i,o}function i(e,t,n){var i=r(e,t,n)
return i.then((function(e){if(e)return new f(e,i.request)}))}function o(e,t,n){n.forEach((function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(e){this[t][n]=e}})}))}function a(e,t,n,i){i.forEach((function(i){i in n.prototype&&(e.prototype[i]=function(){return r(this[t],i,arguments)})}))}function s(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return this[t][r].apply(this[t],arguments)})}))}function c(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return i(this[t],r,arguments)})}))}function u(e){this._index=e}function f(e,t){this._cursor=e,this._request=t}function l(e){this._store=e}function p(e){this._tx=e,this.complete=new Promise((function(t,n){e.oncomplete=function(){t()},e.onerror=function(){n(e.error)},e.onabort=function(){n(e.error)}}))}function h(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new p(n)}function d(e){this._db=e}o(u,"_index",["name","keyPath","multiEntry","unique"]),a(u,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),c(u,"_index",IDBIndex,["openCursor","openKeyCursor"]),o(f,"_cursor",["direction","key","primaryKey","value"]),a(f,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(e){e in IDBCursor.prototype&&(f.prototype[e]=function(){var t=this,r=arguments
return Promise.resolve().then((function(){return t._cursor[e].apply(t._cursor,r),n(t._request).then((function(e){if(e)return new f(e,t._request)}))}))})})),l.prototype.createIndex=function(){return new u(this._store.createIndex.apply(this._store,arguments))},l.prototype.index=function(){return new u(this._store.index.apply(this._store,arguments))},o(l,"_store",["name","keyPath","indexNames","autoIncrement"]),a(l,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),c(l,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),s(l,"_store",IDBObjectStore,["deleteIndex"]),p.prototype.objectStore=function(){return new l(this._tx.objectStore.apply(this._tx,arguments))},o(p,"_tx",["objectStoreNames","mode"]),s(p,"_tx",IDBTransaction,["abort"]),h.prototype.createObjectStore=function(){return new l(this._db.createObjectStore.apply(this._db,arguments))},o(h,"_db",["name","version","objectStoreNames"]),s(h,"_db",IDBDatabase,["deleteObjectStore","close"]),d.prototype.transaction=function(){return new p(this._db.transaction.apply(this._db,arguments))},o(d,"_db",["name","version","objectStoreNames"]),s(d,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(e){[l,u].forEach((function(n){e in n.prototype&&(n.prototype[e.replace("open","iterate")]=function(){var n=t(arguments),r=n[n.length-1],i=this._store||this._index,o=i[e].apply(i,n.slice(0,-1))
o.onsuccess=function(){r(o.result)}})}))})),[u,l].forEach((function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var n=this,r=[]
return new Promise((function(i){n.iterateCursor(e,(function(e){e?(r.push(e.value),void 0===t||r.length!=t?e.continue():i(r)):i(r)}))}))})})),e.openDb=function(e,t,n){var i=r(indexedDB,"open",[e,t]),o=i.request
return o&&(o.onupgradeneeded=function(e){n&&n(new h(o.result,e.oldVersion,o.transaction))}),i.then((function(e){return new d(e)}))},e.deleteDb=function(e){return r(indexedDB,"deleteDatabase",[e])},Object.defineProperty(e,"__esModule",{value:!0})}(t)},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0})
var r=n(15),i={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},o=function(e,t){if(!e)throw a(t)},a=function(e){return new Error("Firebase Database ("+i.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},s=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r)
i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter")
this.init_()
for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var o=e[i],a=i+1<e.length,s=a?e[i+1]:0,c=i+2<e.length,u=c?e[i+2]:0,f=o>>2,l=(3&o)<<4|s>>4,p=(15&s)<<2|u>>6,h=63&u
c||(h=64,a||(p=64)),r.push(n[f],n[l],n[p],n[h])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(s(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++]
if(i<128)t[r++]=String.fromCharCode(i)
else if(i>191&&i<224){var o=e[n++]
t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){var a=((7&i)<<18|(63&(o=e[n++]))<<12|(63&(s=e[n++]))<<6|63&e[n++])-65536
t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(1023&a))}else{o=e[n++]
var s=e[n++]
t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_()
for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0,s=++i<e.length?n[e.charAt(i)]:64,c=++i<e.length?n[e.charAt(i)]:64
if(++i,null==o||null==a||null==s||null==c)throw Error()
var u=o<<2|a>>4
if(r.push(u),64!==s){var f=a<<4&240|s>>2
if(r.push(f),64!==c){var l=s<<6&192|c
r.push(l)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={}
for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},u=function(e){try{return c.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null}
function f(e,t){if(!(t instanceof Object))return t
switch(t.constructor){case Date:return new Date(t.getTime())
case Object:void 0===e&&(e={})
break
case Array:e=[]
break
default:return t}for(var n in t)t.hasOwnProperty(n)&&(e[n]=f(e[n],t[n]))
return e}var l=function(){function e(){var e=this
this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.resolve=t,e.reject=n}))}return e.prototype.wrapCallback=function(e){var t=this
return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}},e}()
function p(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}var h=function(e){function t(n,r){var i=e.call(this,r)||this
return i.code=n,i.name="FirebaseError",Object.setPrototypeOf(i,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(i,d.prototype.create),i}return r.__extends(t,e),t}(Error),d=function(){function e(e,t,n){this.service=e,this.serviceName=t,this.errors=n}return e.prototype.create=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
for(var r=t[0]||{},i=this.service+"/"+e,o=this.errors[e],a=o?v(o,r):"Error",s=this.serviceName+": "+a+" ("+i+").",c=new h(i,s),u=0,f=Object.keys(r);u<f.length;u++){var l=f[u]
"_"!==l.slice(-1)&&(l in c&&console.warn('Overwriting FirebaseError base field "'+l+'" can cause unexpected behavior.'),c[l]=r[l])}return c},e}()
function v(e,t){return e.replace(g,(function(e,n){var r=t[n]
return null!=r?r.toString():"<"+n+"?>"}))}var g=/\{\$([^}]+)}/g
function b(e){return JSON.parse(e)}var y=function(e){var t={},n={},r={},i=""
try{var o=e.split(".")
t=b(u(o[0])||""),n=b(u(o[1])||""),i=o[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:i}}
var m=function(){function e(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128
for(var e=1;e<this.blockSize;++e)this.pad_[e]=0
this.reset()}return e.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},e.prototype.compress_=function(e,t){t||(t=0)
var n=this.W_
if("string"==typeof e)for(var r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4
else for(r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4
for(r=16;r<80;r++){var i=n[r-3]^n[r-8]^n[r-14]^n[r-16]
n[r]=4294967295&(i<<1|i>>>31)}var o,a,s=this.chain_[0],c=this.chain_[1],u=this.chain_[2],f=this.chain_[3],l=this.chain_[4]
for(r=0;r<80;r++){r<40?r<20?(o=f^c&(u^f),a=1518500249):(o=c^u^f,a=1859775393):r<60?(o=c&u|f&(c|u),a=2400959708):(o=c^u^f,a=3395469782)
i=(s<<5|s>>>27)+o+l+a+n[r]&4294967295
l=f,f=u,u=4294967295&(c<<30|c>>>2),c=s,s=i}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295},e.prototype.update=function(e,t){if(null!=e){void 0===t&&(t=e.length)
for(var n=t-this.blockSize,r=0,i=this.buf_,o=this.inbuf_;r<t;){if(0===o)for(;r<=n;)this.compress_(e,r),r+=this.blockSize
if("string"==typeof e){for(;r<t;)if(i[o]=e.charCodeAt(r),++r,++o===this.blockSize){this.compress_(i),o=0
break}}else for(;r<t;)if(i[o]=e[r],++r,++o===this.blockSize){this.compress_(i),o=0
break}}this.inbuf_=o,this.total_+=t}},e.prototype.digest=function(){var e=[],t=8*this.total_
this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56))
for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&t,t/=256
this.compress_(this.buf_)
var r=0
for(n=0;n<5;n++)for(var i=24;i>=0;i-=8)e[r]=this.chain_[n]>>i&255,++r
return e},e}()
var w=function(){function e(e,t){var n=this
this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((function(){e(n)})).catch((function(e){n.error(e)}))}return e.prototype.next=function(e){this.forEachObserver((function(t){t.next(e)}))},e.prototype.error=function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)},e.prototype.complete=function(){this.forEachObserver((function(e){e.complete()})),this.close()},e.prototype.subscribe=function(e,t,n){var r,i=this
if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.")
void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1
for(var n=0,r=t;n<r.length;n++){var i=r[n]
if(i in e&&"function"==typeof e[i])return!0}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=_),void 0===r.error&&(r.error=_),void 0===r.complete&&(r.complete=_)
var o=this.unsubscribeOne.bind(this,this.observers.length)
return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),o},e.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},e.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},e.prototype.sendOne=function(e,t){var n=this
this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))},e.prototype.close=function(e){var t=this
this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))},e}()
function _(){}function S(e,t,n){var r=""
switch(t){case 1:r=n?"first":"First"
break
case 2:r=n?"second":"Second"
break
case 3:r=n?"third":"Third"
break
case 4:r=n?"fourth":"Fourth"
break
default:throw new Error("errorPrefix called with argumentNumber > 4.  Need to update it?")}var i=e+" failed: "
return i+=r+" argument "}t.CONSTANTS=i,t.Deferred=l,t.ErrorFactory=d,t.FirebaseError=h,t.Sha1=m,t.assert=o,t.assertionError=a,t.async=function(e,t){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r]
Promise.resolve(!0).then((function(){e.apply(void 0,n)})).catch((function(e){t&&t(e)}))}},t.base64=c,t.base64Decode=u,t.base64Encode=function(e){var t=s(e)
return c.encodeByteArray(t,!0)},t.contains=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.createSubscribe=function(e,t){var n=new w(e,t)
return n.subscribe.bind(n)},t.decode=y,t.deepCopy=function(e){return f(void 0,e)},t.deepExtend=f,t.errorPrefix=S,t.getUA=p,t.isAdmin=function(e){var t=y(e).claims
return"object"==typeof t&&!0===t.admin},t.isBrowser=function(){return"object"==typeof self&&self.self===self},t.isBrowserExtension=function(){var e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0
return"object"==typeof e&&void 0!==e.id},t.isElectron=function(){return p().indexOf("Electron/")>=0},t.isEmpty=function(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1
return!0},t.isIE=function(){var e=p()
return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0},t.isMobileCordova=function(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(p())},t.isNode=function(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(e){return!1}},t.isNodeSdk=function(){return!0===i.NODE_CLIENT||!0===i.NODE_ADMIN},t.isReactNative=function(){return"object"==typeof navigator&&"ReactNative"===navigator.product},t.isUWP=function(){return p().indexOf("MSAppHost/")>=0},t.isValidFormat=function(e){var t=y(e).claims
return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},t.isValidTimestamp=function(e){var t=y(e).claims,n=Math.floor((new Date).getTime()/1e3),r=0,i=0
return"object"==typeof t&&(t.hasOwnProperty("nbf")?r=t.nbf:t.hasOwnProperty("iat")&&(r=t.iat),i=t.hasOwnProperty("exp")?t.exp:r+86400),!!n&&!!r&&!!i&&n>=r&&n<=i},t.issuedAtTime=function(e){var t=y(e).claims
return"object"==typeof t&&t.hasOwnProperty("iat")?t.iat:null},t.jsonEval=b,t.map=function(e,t,n){var r={}
for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e))
return r},t.querystring=function(e){for(var t=[],n=function(e,n){Array.isArray(n)?n.forEach((function(n){t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))})):t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))},r=0,i=Object.entries(e);r<i.length;r++){var o=i[r]
n(o[0],o[1])}return t.length?"&"+t.join("&"):""},t.querystringDecode=function(e){var t={}
return e.replace(/^\?/,"").split("&").forEach((function(e){if(e){var n=e.split("=")
t[n[0]]=n[1]}})),t},t.safeGet=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0},t.stringLength=function(e){for(var t=0,n=0;n<e.length;n++){var r=e.charCodeAt(n)
r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t},t.stringToByteArray=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r)
if(i>=55296&&i<=56319){var a=i-55296
r++,o(r<e.length,"Surrogate pair missing trail surrogate."),i=65536+(a<<10)+(e.charCodeAt(r)-56320)}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},t.stringify=function(e){return JSON.stringify(e)},t.validateArgCount=function(e,t,n,r){var i
if(r<t?i="at least "+t:r>n&&(i=0===n?"none":"no more than "+n),i)throw new Error(e+" failed: Was called with "+r+(1===r?" argument.":" arguments.")+" Expects "+i+".")},t.validateCallback=function(e,t,n,r){if((!r||n)&&"function"!=typeof n)throw new Error(S(e,t,r)+"must be a valid function.")},t.validateContextObject=function(e,t,n,r){if((!r||n)&&("object"!=typeof n||null===n))throw new Error(S(e,t,r)+"must be a valid context object.")},t.validateNamespace=function(e,t,n,r){if((!r||n)&&"string"!=typeof n)throw new Error(S(e,t,r)+"must be a valid firebase namespace.")}}).call(this,n(14))},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r,i,o=n(13),a=n(5),s=n(8),c=n(17),u=((r={})["no-app"]="No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",r["bad-app-name"]="Illegal App name: '{$appName}",r["duplicate-app"]="Firebase App named '{$appName}' already exists",r["app-deleted"]="Firebase App named '{$appName}' already deleted",r["invalid-app-argument"]="firebase.{$appName}() takes either no argument or a Firebase App instance.",r),f=new a.ErrorFactory("app","Firebase",u),l="@firebase/app",p=((i={})[l]="fire-core",i["@firebase/analytics"]="fire-analytics",i["@firebase/auth"]="fire-auth",i["@firebase/database"]="fire-rtdb",i["@firebase/functions"]="fire-fn",i["@firebase/installations"]="fire-iid",i["@firebase/messaging"]="fire-fcm",i["@firebase/performance"]="fire-perf",i["@firebase/remote-config"]="fire-rc",i["@firebase/storage"]="fire-gcs",i["@firebase/firestore"]="fire-fst",i["fire-js"]="fire-js",i["firebase-wrapper"]="fire-js-all",i),h=new c.Logger("@firebase/app"),d=function(){function e(e,t,n){var r,i,c=this
this.firebase_=n,this.isDeleted_=!1,this.name_=t.name,this.automaticDataCollectionEnabled_=t.automaticDataCollectionEnabled||!1,this.options_=a.deepCopy(e),this.container=new s.ComponentContainer(t.name),this._addComponent(new s.Component("app",(function(){return c}),"PUBLIC"))
try{for(var u=o.__values(this.firebase_.INTERNAL.components.values()),f=u.next();!f.done;f=u.next()){var l=f.value
this._addComponent(l)}}catch(e){r={error:e}}finally{try{f&&!f.done&&(i=u.return)&&i.call(u)}finally{if(r)throw r.error}}}return Object.defineProperty(e.prototype,"automaticDataCollectionEnabled",{get:function(){return this.checkDestroyed_(),this.automaticDataCollectionEnabled_},set:function(e){this.checkDestroyed_(),this.automaticDataCollectionEnabled_=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return this.checkDestroyed_(),this.name_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"options",{get:function(){return this.checkDestroyed_(),this.options_},enumerable:!0,configurable:!0}),e.prototype.delete=function(){var e=this
return new Promise((function(t){e.checkDestroyed_(),t()})).then((function(){return e.firebase_.INTERNAL.removeApp(e.name_),Promise.all(e.container.getProviders().map((function(e){return e.delete()})))})).then((function(){e.isDeleted_=!0}))},e.prototype._getService=function(e,t){return void 0===t&&(t="[DEFAULT]"),this.checkDestroyed_(),this.container.getProvider(e).getImmediate({identifier:t})},e.prototype._removeServiceInstance=function(e,t){void 0===t&&(t="[DEFAULT]"),this.container.getProvider(e).clearInstance(t)},e.prototype._addComponent=function(e){try{this.container.addComponent(e)}catch(t){h.debug("Component "+e.name+" failed to register with FirebaseApp "+this.name,t)}},e.prototype._addOrOverwriteComponent=function(e){this.container.addOrOverwriteComponent(e)},e.prototype.checkDestroyed_=function(){if(this.isDeleted_)throw f.create("app-deleted",{appName:this.name_})},e}()
d.prototype.name&&d.prototype.options||d.prototype.delete||console.log("dc")
var v=function e(){var t=function(e){var t={},n=new Map,r={__esModule:!0,initializeApp:function(n,i){void 0===i&&(i={})
if("object"!=typeof i||null===i){i={name:i}}var o=i
void 0===o.name&&(o.name="[DEFAULT]")
var s=o.name
if("string"!=typeof s||!s)throw f.create("bad-app-name",{appName:String(s)})
if(a.contains(t,s))throw f.create("duplicate-app",{appName:s})
var c=new e(n,o,r)
return t[s]=c,c},app:i,registerVersion:function(e,t,n){var r,i=null!==(r=p[e])&&void 0!==r?r:e
n&&(i+="-"+n)
var o=i.match(/\s|\//),a=t.match(/\s|\//)
if(o||a){var u=['Unable to register library "'+i+'" with version "'+t+'":']
return o&&u.push('library name "'+i+'" contains illegal characters (whitespace or "/")'),o&&a&&u.push("and"),a&&u.push('version name "'+t+'" contains illegal characters (whitespace or "/")'),void h.warn(u.join(" "))}c(new s.Component(i+"-version",(function(){return{library:i,version:t}}),"VERSION"))},apps:null,SDK_VERSION:"7.8.1",INTERNAL:{registerComponent:c,removeApp:function(e){delete t[e]},components:n,useAsService:function(e,t){if("serverAuth"===t)return null
return t}}}
function i(e){if(e=e||"[DEFAULT]",!a.contains(t,e))throw f.create("no-app",{appName:e})
return t[e]}function c(s){var c,u,l=s.name
if(n.has(l))return h.debug("There were multiple attempts to register component "+l+"."),"PUBLIC"===s.type?r[l]:null
if(n.set(l,s),"PUBLIC"===s.type){var p=function(e){if(void 0===e&&(e=i()),"function"!=typeof e[l])throw f.create("invalid-app-argument",{appName:l})
return e[l]()}
void 0!==s.serviceProps&&a.deepExtend(p,s.serviceProps),r[l]=p,e.prototype[l]=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
var n=this._getService.bind(this,l)
return n.apply(this,s.multipleInstances?e:[])}}try{for(var d=o.__values(Object.keys(t)),v=d.next();!v.done;v=d.next()){var g=v.value
t[g]._addComponent(s)}}catch(e){c={error:e}}finally{try{v&&!v.done&&(u=d.return)&&u.call(d)}finally{if(c)throw c.error}}return"PUBLIC"===s.type?r[l]:null}return(r.default=r,Object.defineProperty(r,"apps",{get:function(){return Object.keys(t).map((function(e){return t[e]}))}}),i.App=e,r)}(d)
return t.INTERNAL=o.__assign(o.__assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){a.deepExtend(t,e)},createSubscribe:a.createSubscribe,ErrorFactory:a.ErrorFactory,deepExtend:a.deepExtend}),t}(),g=function(){function e(e){this.container=e}return e.prototype.getPlatformInfoString=function(){return this.container.getProviders().map((function(e){if(function(e){var t,n=e.getComponent()
return"VERSION"===(null===(t=n)||void 0===t?void 0:t.type)}(e)){var t=e.getImmediate()
return t.library+"/"+t.version}return null})).filter((function(e){return e})).join(" ")},e}()
if(a.isBrowser()&&void 0!==self.firebase){h.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ")
var b=self.firebase.SDK_VERSION
b&&b.indexOf("LITE")>=0&&h.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}var y=v.initializeApp
v.initializeApp=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
return a.isNode()&&h.warn('\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the rollup-plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/rollup-plugin-node-resolve\n      '),y.apply(void 0,e)}
var m=v
!function(e,t){e.INTERNAL.registerComponent(new s.Component("platform-logger",(function(e){return new g(e)}),"PRIVATE")),e.registerVersion(l,"0.5.4",t),e.registerVersion("fire-js","")}(m),t.default=m,t.firebase=m},function(e,t){function n(e,t,n,r,i,o,a){try{var s=e[o](a),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,i)}e.exports=function(e){return function(){var t=this,r=arguments
return new Promise((function(i,o){var a=e.apply(t,r)
function s(e){n(a,i,o,s,c,"next",e)}function c(e){n(a,i,o,s,c,"throw",e)}s(void 0)}))}}},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=n(16),i=n(5),o=function(){function e(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY"}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e}(),a=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map}return e.prototype.get=function(e){void 0===e&&(e="[DEFAULT]")
var t=this.normalizeInstanceIdentifier(e)
if(!this.instancesDeferred.has(t)){var n=new i.Deferred
this.instancesDeferred.set(t,n)
try{var r=this.getOrInitializeService(t)
r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t=r.__assign({identifier:"[DEFAULT]",optional:!1},e),n=t.identifier,i=t.optional,o=this.normalizeInstanceIdentifier(n)
try{var a=this.getOrInitializeService(o)
if(!a){if(i)return null
throw Error("Service "+this.name+" is not available")}return a}catch(e){if(i)return null
throw e}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,n
if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".")
if(this.component)throw Error("Component for "+this.name+" has already been provided")
if(this.component=e,function(e){return"EAGER"===e.instantiationMode}(e))try{this.getOrInitializeService("[DEFAULT]")}catch(e){}try{for(var i=r.__values(this.instancesDeferred.entries()),o=i.next();!o.done;o=i.next()){var a=r.__read(o.value,2),s=a[0],c=a[1],u=this.normalizeInstanceIdentifier(s)
try{var f=this.getOrInitializeService(u)
c.resolve(f)}catch(e){}}}catch(e){t={error:e}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},e.prototype.clearInstance=function(e){void 0===e&&(e="[DEFAULT]"),this.instancesDeferred.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return r.__awaiter(this,void 0,void 0,(function(){var e
return r.__generator(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})))]
case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.getOrInitializeService=function(e){var t=this.instances.get(e)
return!t&&this.component&&(t=this.component.instanceFactory(this.container,function(e){return"[DEFAULT]"===e?void 0:e}(e)),this.instances.set(e,t)),t||null},e.prototype.normalizeInstanceIdentifier=function(e){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e},e}()
var s=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(e){var t=this.getProvider(e.name)
if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name)
t.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e)
var t=new a(e,this)
return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}()
t.Component=o,t.ComponentContainer=s,t.Provider=a},function(e,t,n){"use strict"
var r=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e)
return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===i}(e)}(e)}
var i="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103
function o(e,t){return!1!==t.clone&&t.isMergeableObject(e)?f((n=e,Array.isArray(n)?[]:{}),e,t):e
var n}function a(e,t,n){return e.concat(t).map((function(e){return o(e,n)}))}function s(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return e.propertyIsEnumerable(t)})):[]}(e))}function c(e,t){try{return t in e}catch(e){return!1}}function u(e,t,n){var r={}
return n.isMergeableObject(e)&&s(e).forEach((function(t){r[t]=o(e[t],n)})),s(t).forEach((function(i){(function(e,t){return c(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,i)||(c(e,i)&&n.isMergeableObject(t[i])?r[i]=function(e,t){if(!t.customMerge)return f
var n=t.customMerge(e)
return"function"==typeof n?n:f}(i,n)(e[i],t[i],n):r[i]=o(t[i],n))})),r}function f(e,t,n){(n=n||{}).arrayMerge=n.arrayMerge||a,n.isMergeableObject=n.isMergeableObject||r,n.cloneUnlessOtherwiseSpecified=o
var i=Array.isArray(t)
return i===Array.isArray(e)?i?n.arrayMerge(e,t,n):u(e,t,n):o(t,n)}f.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array")
return e.reduce((function(e,n){return f(e,n,t)}),{})}
var l=f
e.exports=l},function(e,t,n){"use strict"
n(0)
t.a={globalScope:!0,app:{database:{notificationDB:"ethinking-notification",notificationTable:"notification",version:1,notificationMaxResults:50},localStorage:{deviceStorageKey:"pushDelivery.device"}},ui:{color:"#ffffff",icon:"blank.gif",translations:{de:{settings:{label_subscribed:"Sie sind für Benachrichtigungen angemeldet.",label_blocked:"Bitte Benachrichtigungen im Browser erlauben",label_subscribe:"Für Benachrichtigungen anmelden"},sidebar:{message_list_empty:"Keine Benachrichtigungen vorhanden.",tab_notification:"Meldungen",tab_settings:"Meine Themen",label_language:"Sprache wählen:",label_description:"Sie erhalten Benachrichtigungen für:",label_tag_selection:"Themenbereich wählen",button_unsubscribe:"Von allen Benachrichtigungen abmelden",button_save:"Speichern",button_close:"Schliessen"},askForPermissionsDialog:{label_description:"Möchten Sie künftig direkt per Browser-Benachrichtigung über die wichtigsten Nachrichten informiert werden?",button_confirm:"Ja",button_deny:"Nein"},howToUnblockDialog:{image:{chrome:"unblock-chrome-german.gif",firefox:"unblock-FF-german.gif"},label_title:"Blockierung jetzt aufheben",label_description:"So können Sie die Blockierung schnell und einfach aufheben. Danach laden Sie die Seite bitte neu."},confirm:{label_text:"Sind Sie sich sicher?"},tagGroupLabels:{browser_german:"Deutsch",browser_italian:"Italienisch",browser_french:"Französisch"}},fr:{settings:{label_subscribed:"Vous avez activé les notifications",label_blocked:"Merci d'autoriser les notifications du navigateur",label_subscribe:"Activer les notifications"},sidebar:{message_list_empty:"Aucune notification disponible.",tab_notification:"Notifications",tab_settings:"Paramètres",label_language:"Sélectionner la langue",label_description:"",label_tag_selection:"Sélectionner un thème",button_unsubscribe:"Se désabonner de toutes les notifications",button_save:"Sauvegarder",button_close:"Fermer"},askForPermissionsDialog:{label_description:"À l'avenir, souhaitez-vous être informé des principales actualités par notification de votre navigateur?",button_confirm:"Oui",button_deny:"Non"},howToUnblockDialog:{image:{chrome:"unblock-chrome-french.gif",firefox:"unblock-FF-french.gif"},label_title:"Débloquer maintenant",label_description:"Voici comment annuler rapidement et facilement le blocage. Rafraîchir ensuite la page."},confirm:{label_text:"Êtes-vous sûr?"},tagGroupLabels:{browser_german:"Allemand",browser_italian:"Italien",browser_french:"Français"}},it:{settings:{label_subscribed:"Avete attivato le notifiche",label_blocked:"Autorizzare le notifiche sul browser",label_subscribe:"Attivare le notifiche"},sidebar:{message_list_empty:"Nessuna notifica disponibile.",tab_notification:"Notifiche",tab_settings:"Impostazioni",label_language:"Selezionare la lingua",label_description:"",label_tag_selection:"Selezionare un tema",button_unsubscribe:"Annullare l'abbonamento a tutte le notifiche",button_save:"Salvare",button_close:"Chiudere"},askForPermissionsDialog:{label_description:"In futuro, volete essere informati delle principali novità attraverso le notifiche sul vostro browser?",button_confirm:"Sì",button_deny:"No"},howToUnblockDialog:{image:{chrome:"unblock-chrome-italian.gif",firefox:"unblock-FF-italian.gif"},label_title:"Sbloccare ora",label_description:"Ecco come annullare il blocco rapidamente e facilmente. Aggiorna la pagina."},confirm:{label_text:"È sicuro?"},tagGroupLabels:{browser_german:"Tedesco",browser_italian:"Italiano",browser_french:"Francese"}},en:{button_close:"Close",sidebar_tab_settings:"Settings"},defaultLanguage:"de"},template:{modal:{logo:"https://showcase-ez.ethinking.de/bundles/ezplatformpushconnector/img/push-delivery-logo.jpg"},bell:{image:"https://push.delivery.ethinking.de/bluewin/images/bluewin-wheel.svg"}}}}},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t,n){var r=function(e){"use strict"
var t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},i=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag"
function s(e,t,n,r){var i=t&&t.prototype instanceof f?t:f,o=Object.create(i.prototype),a=new S(r||[])
return o._invoke=function(e,t,n){var r="suspendedStart"
return function(i,o){if("executing"===r)throw new Error("Generator is already running")
if("completed"===r){if("throw"===i)throw o
return O()}for(n.method=i,n.arg=o;;){var a=n.delegate
if(a){var s=m(a,n)
if(s){if(s===u)continue
return s}}if("next"===n.method)n.sent=n._sent=n.arg
else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg
n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg)
r="executing"
var f=c(e,t,n)
if("normal"===f.type){if(r=n.done?"completed":"suspendedYield",f.arg===u)continue
return{value:f.arg,done:n.done}}"throw"===f.type&&(r="completed",n.method="throw",n.arg=f.arg)}}}(e,n,a),o}function c(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s
var u={}
function f(){}function l(){}function p(){}var h={}
h[i]=function(){return this}
var d=Object.getPrototypeOf,v=d&&d(d(k([])))
v&&v!==t&&n.call(v,i)&&(h=v)
var g=p.prototype=f.prototype=Object.create(h)
function b(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function y(e){var t
this._invoke=function(r,i){function o(){return new Promise((function(t,o){!function t(r,i,o,a){var s=c(e[r],e,i)
if("throw"!==s.type){var u=s.arg,f=u.value
return f&&"object"==typeof f&&n.call(f,"__await")?Promise.resolve(f.__await).then((function(e){t("next",e,o,a)}),(function(e){t("throw",e,o,a)})):Promise.resolve(f).then((function(e){u.value=e,o(u)}),(function(e){return t("throw",e,o,a)}))}a(s.arg)}(r,i,t,o)}))}return t=t?t.then(o,o):o()}}function m(e,t){var n=e.iterator[t.method]
if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,m(e,t),"throw"===t.method))return u
t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=c(n,e.iterator,t.arg)
if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u
var i=r.arg
return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function w(e){var t={tryLoc:e[0]}
1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{}
t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function k(e){if(e){var t=e[i]
if(t)return t.call(e)
if("function"==typeof e.next)return e
if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t
return t.value=void 0,t.done=!0,t}
return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return l.prototype=g.constructor=p,p.constructor=l,p[a]=l.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor
return!!t&&(t===l||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,a in e||(e[a]="GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(y.prototype),y.prototype[o]=function(){return this},e.AsyncIterator=y,e.async=function(t,n,r,i){var o=new y(s(t,n,r,i))
return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},b(g),g[a]="Generator",g[i]=function(){return this},g.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[]
for(var n in e)t.push(n)
return t.reverse(),function n(){for(;t.length;){var r=t.pop()
if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=k,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0
var e=this.tryEntries[0].completion
if("throw"===e.type)throw e.arg
return this.rval},dispatchException:function(e){if(this.done)throw e
var t=this
function r(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion
if("root"===o.tryLoc)return r("end")
if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc")
if(s&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)
if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally")
if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r]
if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i
break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null)
var a=o?o.completion:{}
return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg
return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t]
if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),_(n),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t]
if(n.tryLoc===e){var r=n.completion
if("throw"===r.type){var i=r.arg
_(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:k(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},e}(e.exports)
try{regeneratorRuntime=r}catch(e){Function("r","regeneratorRuntime = r")(r)}},function(e,t,n){"use strict"
n.r(t),n.d(t,"__extends",(function(){return i})),n.d(t,"__assign",(function(){return o})),n.d(t,"__rest",(function(){return a})),n.d(t,"__decorate",(function(){return s})),n.d(t,"__param",(function(){return c})),n.d(t,"__metadata",(function(){return u})),n.d(t,"__awaiter",(function(){return f})),n.d(t,"__generator",(function(){return l})),n.d(t,"__exportStar",(function(){return p})),n.d(t,"__values",(function(){return h})),n.d(t,"__read",(function(){return d})),n.d(t,"__spread",(function(){return v})),n.d(t,"__spreadArrays",(function(){return g})),n.d(t,"__await",(function(){return b})),n.d(t,"__asyncGenerator",(function(){return y})),n.d(t,"__asyncDelegator",(function(){return m})),n.d(t,"__asyncValues",(function(){return w})),n.d(t,"__makeTemplateObject",(function(){return _})),n.d(t,"__importStar",(function(){return S})),n.d(t,"__importDefault",(function(){return k}))
var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)}
function i(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e}).apply(this,arguments)}
function a(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function s(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r
if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r)
else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a)
return o>3&&a&&Object.defineProperty(t,n,a),a}function c(e,t){return function(n,r){t(n,r,e)}}function u(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function f(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){e.done?i(e.value):new n((function(t){t(e.value)})).then(a,s)}c((r=r.apply(e,t||[])).next())}))}function l(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o
function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.")
for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i
switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o
break
case 4:return a.label++,{value:o[1],done:!1}
case 5:a.label++,r=o[1],o=[0]
continue
case 7:o=a.ops.pop(),a.trys.pop()
continue
default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0
continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1]
break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o
break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o)
break}i[2]&&a.ops.pop(),a.trys.pop()
continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1]
return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}function p(e,t){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}function h(e){var t="function"==typeof Symbol&&e[Symbol.iterator],n=0
return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}}function d(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator]
if(!n)return e
var r,i,o=n.call(e),a=[]
try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a}function v(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(d(arguments[t]))
return e}function g(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length
var r=Array(e),i=0
for(t=0;t<n;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,i++)r[i]=o[a]
return r}function b(e){return this instanceof b?(this.v=e,this):new b(e)}function y(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.")
var r,i=n.apply(e,t||[]),o=[]
return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r
function a(e){i[e]&&(r[e]=function(t){return new Promise((function(n,r){o.push([e,t,n,r])>1||s(e,t)}))})}function s(e,t){try{(n=i[e](t)).value instanceof b?Promise.resolve(n.value.v).then(c,u):f(o[0][2],n)}catch(e){f(o[0][3],e)}var n}function c(e){s("next",e)}function u(e){s("throw",e)}function f(e,t){e(t),o.shift(),o.length&&s(o[0][0],o[0][1])}}function m(e){var t,n
return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t
function r(r,i){t[r]=e[r]?function(t){return(n=!n)?{value:b(e[r](t)),done:"return"===r}:i?i(t):t}:i}}function w(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.")
var t,n=e[Symbol.asyncIterator]
return n?n.call(e):(e=h(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t)
function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,i){(function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)})(r,i,(t=e[n](t)).done,t.value)}))}}}function _(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function S(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n])
return t.default=e,t}function k(e){return e&&e.__esModule?e:{default:e}}},function(e,t){var n
n=function(){return this}()
try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict"
n.r(t),n.d(t,"__extends",(function(){return i})),n.d(t,"__assign",(function(){return o})),n.d(t,"__rest",(function(){return a})),n.d(t,"__decorate",(function(){return s})),n.d(t,"__param",(function(){return c})),n.d(t,"__metadata",(function(){return u})),n.d(t,"__awaiter",(function(){return f})),n.d(t,"__generator",(function(){return l})),n.d(t,"__exportStar",(function(){return p})),n.d(t,"__values",(function(){return h})),n.d(t,"__read",(function(){return d})),n.d(t,"__spread",(function(){return v})),n.d(t,"__spreadArrays",(function(){return g})),n.d(t,"__await",(function(){return b})),n.d(t,"__asyncGenerator",(function(){return y})),n.d(t,"__asyncDelegator",(function(){return m})),n.d(t,"__asyncValues",(function(){return w})),n.d(t,"__makeTemplateObject",(function(){return _})),n.d(t,"__importStar",(function(){return S})),n.d(t,"__importDefault",(function(){return k}))
var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)}
function i(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e}).apply(this,arguments)}
function a(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function s(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r
if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r)
else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a)
return o>3&&a&&Object.defineProperty(t,n,a),a}function c(e,t){return function(n,r){t(n,r,e)}}function u(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function f(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){e.done?i(e.value):new n((function(t){t(e.value)})).then(a,s)}c((r=r.apply(e,t||[])).next())}))}function l(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o
function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.")
for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i
switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o
break
case 4:return a.label++,{value:o[1],done:!1}
case 5:a.label++,r=o[1],o=[0]
continue
case 7:o=a.ops.pop(),a.trys.pop()
continue
default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0
continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1]
break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o
break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o)
break}i[2]&&a.ops.pop(),a.trys.pop()
continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1]
return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}function p(e,t){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}function h(e){var t="function"==typeof Symbol&&e[Symbol.iterator],n=0
return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}}function d(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator]
if(!n)return e
var r,i,o=n.call(e),a=[]
try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a}function v(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(d(arguments[t]))
return e}function g(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length
var r=Array(e),i=0
for(t=0;t<n;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,i++)r[i]=o[a]
return r}function b(e){return this instanceof b?(this.v=e,this):new b(e)}function y(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.")
var r,i=n.apply(e,t||[]),o=[]
return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r
function a(e){i[e]&&(r[e]=function(t){return new Promise((function(n,r){o.push([e,t,n,r])>1||s(e,t)}))})}function s(e,t){try{(n=i[e](t)).value instanceof b?Promise.resolve(n.value.v).then(c,u):f(o[0][2],n)}catch(e){f(o[0][3],e)}var n}function c(e){s("next",e)}function u(e){s("throw",e)}function f(e,t){e(t),o.shift(),o.length&&s(o[0][0],o[0][1])}}function m(e){var t,n
return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t
function r(r,i){t[r]=e[r]?function(t){return(n=!n)?{value:b(e[r](t)),done:"return"===r}:i?i(t):t}:i}}function w(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.")
var t,n=e[Symbol.asyncIterator]
return n?n.call(e):(e=h(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t)
function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,i){(function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)})(r,i,(t=e[n](t)).done,t.value)}))}}}function _(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function S(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n])
return t.default=e,t}function k(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict"
n.r(t),n.d(t,"__extends",(function(){return i})),n.d(t,"__assign",(function(){return o})),n.d(t,"__rest",(function(){return a})),n.d(t,"__decorate",(function(){return s})),n.d(t,"__param",(function(){return c})),n.d(t,"__metadata",(function(){return u})),n.d(t,"__awaiter",(function(){return f})),n.d(t,"__generator",(function(){return l})),n.d(t,"__exportStar",(function(){return p})),n.d(t,"__values",(function(){return h})),n.d(t,"__read",(function(){return d})),n.d(t,"__spread",(function(){return v})),n.d(t,"__spreadArrays",(function(){return g})),n.d(t,"__await",(function(){return b})),n.d(t,"__asyncGenerator",(function(){return y})),n.d(t,"__asyncDelegator",(function(){return m})),n.d(t,"__asyncValues",(function(){return w})),n.d(t,"__makeTemplateObject",(function(){return _})),n.d(t,"__importStar",(function(){return S})),n.d(t,"__importDefault",(function(){return k}))
var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)}
function i(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e}).apply(this,arguments)}
function a(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function s(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r
if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r)
else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a)
return o>3&&a&&Object.defineProperty(t,n,a),a}function c(e,t){return function(n,r){t(n,r,e)}}function u(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function f(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){e.done?i(e.value):new n((function(t){t(e.value)})).then(a,s)}c((r=r.apply(e,t||[])).next())}))}function l(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o
function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.")
for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i
switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o
break
case 4:return a.label++,{value:o[1],done:!1}
case 5:a.label++,r=o[1],o=[0]
continue
case 7:o=a.ops.pop(),a.trys.pop()
continue
default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0
continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1]
break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o
break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o)
break}i[2]&&a.ops.pop(),a.trys.pop()
continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1]
return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}function p(e,t){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}function h(e){var t="function"==typeof Symbol&&e[Symbol.iterator],n=0
return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}}function d(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator]
if(!n)return e
var r,i,o=n.call(e),a=[]
try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a}function v(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(d(arguments[t]))
return e}function g(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length
var r=Array(e),i=0
for(t=0;t<n;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,i++)r[i]=o[a]
return r}function b(e){return this instanceof b?(this.v=e,this):new b(e)}function y(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.")
var r,i=n.apply(e,t||[]),o=[]
return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r
function a(e){i[e]&&(r[e]=function(t){return new Promise((function(n,r){o.push([e,t,n,r])>1||s(e,t)}))})}function s(e,t){try{(n=i[e](t)).value instanceof b?Promise.resolve(n.value.v).then(c,u):f(o[0][2],n)}catch(e){f(o[0][3],e)}var n}function c(e){s("next",e)}function u(e){s("throw",e)}function f(e,t){e(t),o.shift(),o.length&&s(o[0][0],o[0][1])}}function m(e){var t,n
return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t
function r(r,i){t[r]=e[r]?function(t){return(n=!n)?{value:b(e[r](t)),done:"return"===r}:i?i(t):t}:i}}function w(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.")
var t,n=e[Symbol.asyncIterator]
return n?n.call(e):(e=h(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t)
function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,i){(function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)})(r,i,(t=e[n](t)).done,t.value)}))}}}function _(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function S(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n])
return t.default=e,t}function k(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict"
function r(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length
var r=Array(e),i=0
for(t=0;t<n;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,i++)r[i]=o[a]
return r}n.r(t),n.d(t,"LogLevel",(function(){return i})),n.d(t,"Logger",(function(){return c})),n.d(t,"setLogLevel",(function(){return u}))
var i,o=[]
!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(i||(i={}))
var a=i.INFO,s=function(e,t){for(var n=[],o=2;o<arguments.length;o++)n[o-2]=arguments[o]
if(!(t<e.logLevel)){var a=(new Date).toISOString()
switch(t){case i.DEBUG:case i.VERBOSE:console.log.apply(console,r(["["+a+"]  "+e.name+":"],n))
break
case i.INFO:console.info.apply(console,r(["["+a+"]  "+e.name+":"],n))
break
case i.WARN:console.warn.apply(console,r(["["+a+"]  "+e.name+":"],n))
break
case i.ERROR:console.error.apply(console,r(["["+a+"]  "+e.name+":"],n))
break
default:throw new Error("Attempted to log a message with an invalid logType (value: "+t+")")}}},c=function(){function e(e){this.name=e,this._logLevel=a,this._logHandler=s,o.push(this)}return Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in i))throw new TypeError("Invalid value assigned to `logLevel`")
this._logLevel=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function")
this._logHandler=e},enumerable:!0,configurable:!0}),e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
this._logHandler.apply(this,r([this,i.DEBUG],e))},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
this._logHandler.apply(this,r([this,i.VERBOSE],e))},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
this._logHandler.apply(this,r([this,i.INFO],e))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
this._logHandler.apply(this,r([this,i.WARN],e))},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
this._logHandler.apply(this,r([this,i.ERROR],e))},e}()
function u(e){o.forEach((function(t){t.logLevel=e}))}},function(e,t,n){"use strict"
var r=n(6),i=n.n(r),o=n(8)
var a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e}).apply(this,arguments)}
function s(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){e.done?i(e.value):new n((function(t){t(e.value)})).then(a,s)}c((r=r.apply(e,t||[])).next())}))}function c(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o
function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.")
for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i
switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o
break
case 4:return a.label++,{value:o[1],done:!1}
case 5:a.label++,r=o[1],o=[0]
continue
case 7:o=a.ops.pop(),a.trys.pop()
continue
default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0
continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1]
break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o
break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o)
break}i[2]&&a.ops.pop(),a.trys.pop()
continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1]
return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}function u(e){var t="function"==typeof Symbol&&e[Symbol.iterator],n=0
return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}}function f(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator]
if(!n)return e
var r,i,o=n.call(e),a=[]
try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a}var l,p=n(5),h=n(3),d=((l={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',l["not-registered"]="Firebase Installation is not registered.",l["installation-not-found"]="Firebase Installation not found.",l["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',l["app-offline"]="Could not process request. Application offline.",l["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",l),v=new p.ErrorFactory("installations","Installations",d)
function g(e){return e instanceof p.FirebaseError&&e.code.includes("request-failed")}function b(e){return"https://firebaseinstallations.googleapis.com/v1/projects/"+e.projectId+"/installations"}function y(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()}
var t}function m(e,t){return s(this,void 0,void 0,(function(){var n,r
return c(this,(function(i){switch(i.label){case 0:return[4,t.json()]
case 1:return n=i.sent(),r=n.error,[2,v.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})]}}))}))}function w(e){var t=e.apiKey
return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function _(e,t){var n=t.refreshToken,r=w(e)
return r.append("Authorization",function(e){return"FIS_v2 "+e}(n)),r}function S(e){return s(this,void 0,void 0,(function(){var t
return c(this,(function(n){switch(n.label){case 0:return[4,e()]
case 1:return(t=n.sent()).status>=500&&t.status<600?[2,e()]:[2,t]}}))}))}function k(e,t){var n=t.fid
return s(this,void 0,void 0,(function(){var t,r,i,o,a,s
return c(this,(function(c){switch(c.label){case 0:return t=b(e),r=w(e),i={fid:n,authVersion:"FIS_v2",appId:e.appId,sdkVersion:"w:0.4.2"},o={method:"POST",headers:r,body:JSON.stringify(i)},[4,S((function(){return fetch(t,o)}))]
case 1:return(a=c.sent()).ok?[4,a.json()]:[3,3]
case 2:return s=c.sent(),[2,{fid:s.fid||n,registrationStatus:2,refreshToken:s.refreshToken,authToken:y(s.authToken)}]
case 3:return[4,m("Create Installation",a)]
case 4:throw c.sent()}}))}))}function O(e){return new Promise((function(t){setTimeout(t,e)}))}function E(e){return btoa(String.fromCharCode.apply(String,function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(f(arguments[t]))
return e}(e))).replace(/\+/g,"-").replace(/\//g,"_")}var I=/^[cdef][\w-]{21}$/
function T(){try{var e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16
var t=function(e){return E(e).substr(0,22)}(e)
return I.test(t)?t:""}catch(e){return""}}function x(e){return e.appName+"!"+e.appId}var P=new Map
function C(e,t){var n=x(e)
j(n,t),function(e,t){var n=A()
n&&n.postMessage({key:e,fid:t})
N()}(n,t)}function j(e,t){var n,r,i=P.get(e)
if(i)try{for(var o=u(i),a=o.next();!a.done;a=o.next()){(0,a.value)(t)}}catch(e){n={error:e}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}}var D=null
function A(){return!D&&"BroadcastChannel"in self&&((D=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(e){j(e.data.key,e.data.fid)}),D}function N(){0===P.size&&D&&(D.close(),D=null)}var L,M="firebase-installations-store",R=null
function F(){return R||(R=Object(h.openDb)("firebase-installations-database",1,(function(e){switch(e.oldVersion){case 0:e.createObjectStore(M)}}))),R}function B(e,t){return s(this,void 0,void 0,(function(){var n,r,i,o,a
return c(this,(function(s){switch(s.label){case 0:return n=x(e),[4,F()]
case 1:return r=s.sent(),i=r.transaction(M,"readwrite"),[4,(o=i.objectStore(M)).get(n)]
case 2:return a=s.sent(),[4,o.put(t,n)]
case 3:return s.sent(),[4,i.complete]
case 4:return s.sent(),a&&a.fid===t.fid||C(e,t.fid),[2,t]}}))}))}function K(e){return s(this,void 0,void 0,(function(){var t,n,r
return c(this,(function(i){switch(i.label){case 0:return t=x(e),[4,F()]
case 1:return n=i.sent(),[4,(r=n.transaction(M,"readwrite")).objectStore(M).delete(t)]
case 2:return i.sent(),[4,r.complete]
case 3:return i.sent(),[2]}}))}))}function V(e,t){return s(this,void 0,void 0,(function(){var n,r,i,o,a,s
return c(this,(function(c){switch(c.label){case 0:return n=x(e),[4,F()]
case 1:return r=c.sent(),i=r.transaction(M,"readwrite"),[4,(o=i.objectStore(M)).get(n)]
case 2:return a=c.sent(),void 0!==(s=t(a))?[3,4]:[4,o.delete(n)]
case 3:return c.sent(),[3,6]
case 4:return[4,o.put(s,n)]
case 5:c.sent(),c.label=6
case 6:return[4,i.complete]
case 7:return c.sent(),!s||a&&a.fid===s.fid||C(e,s.fid),[2,s]}}))}))}function W(e){return s(this,void 0,void 0,(function(){var t,n,r
return c(this,(function(i){switch(i.label){case 0:return[4,V(e,(function(n){var r=function(e){return q(e||{fid:T(),registrationStatus:0})}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){var n=Promise.reject(v.create("app-offline"))
return{installationEntry:t,registrationPromise:n}}var r={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=function(e,t){return s(this,void 0,void 0,(function(){var n,r
return c(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,7]),[4,k(e,t)]
case 1:return n=i.sent(),[2,B(e,n)]
case 2:return g(r=i.sent())&&409===r.serverCode?[4,K(e)]:[3,4]
case 3:return i.sent(),[3,6]
case 4:return[4,B(e,{fid:t.fid,registrationStatus:0})]
case 5:i.sent(),i.label=6
case 6:throw r
case 7:return[2]}}))}))}(e,r)
return{installationEntry:r,registrationPromise:i}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:U(e)}:{installationEntry:t}}(e,r)
return t=i.registrationPromise,i.installationEntry}))]
case 1:return""!==(n=i.sent()).fid?[3,3]:(r={},[4,t])
case 2:return[2,(r.installationEntry=i.sent(),r)]
case 3:return[2,{installationEntry:n,registrationPromise:t}]}}))}))}function U(e){return s(this,void 0,void 0,(function(){var t,n,r,i
return c(this,(function(o){switch(o.label){case 0:return[4,z(e)]
case 1:t=o.sent(),o.label=2
case 2:return 1!==t.registrationStatus?[3,5]:[4,O(100)]
case 3:return o.sent(),[4,z(e)]
case 4:return t=o.sent(),[3,2]
case 5:return 0!==t.registrationStatus?[3,7]:[4,W(e)]
case 6:return n=o.sent(),r=n.installationEntry,(i=n.registrationPromise)?[2,i]:[2,r]
case 7:return[2,t]}}))}))}function z(e){return V(e,(function(e){if(!e)throw v.create("installation-not-found")
return q(e)}))}function q(e){return 1===(t=e).registrationStatus&&t.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e
var t}function G(e,t){var n=e.appConfig,r=e.platformLoggerProvider
return s(this,void 0,void 0,(function(){var e,i,o,a,s,u,f
return c(this,(function(c){switch(c.label){case 0:return e=function(e,t){var n=t.fid
return b(e)+"/"+n+"/authTokens:generate"}(n,t),i=_(n,t),(o=r.getImmediate({optional:!0}))&&i.append("x-firebase-client",o.getPlatformInfoString()),a={installation:{sdkVersion:"w:0.4.2"}},s={method:"POST",headers:i,body:JSON.stringify(a)},[4,S((function(){return fetch(e,s)}))]
case 1:return(u=c.sent()).ok?[4,u.json()]:[3,3]
case 2:return f=c.sent(),[2,y(f)]
case 3:return[4,m("Generate Auth Token",u)]
case 4:throw c.sent()}}))}))}function H(e,t){return void 0===t&&(t=!1),s(this,void 0,void 0,(function(){var n,r,i
return c(this,(function(o){switch(o.label){case 0:return[4,V(e.appConfig,(function(r){if(!J(r))throw v.create("not-registered")
var i=r.authToken
if(!t&&function(e){return 2===e.requestStatus&&!function(e){var t=Date.now()
return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(e)}(i))return r
if(1===i.requestStatus)return n=function(e,t){return s(this,void 0,void 0,(function(){var n,r
return c(this,(function(i){switch(i.label){case 0:return[4,$(e.appConfig)]
case 1:n=i.sent(),i.label=2
case 2:return 1!==n.authToken.requestStatus?[3,5]:[4,O(100)]
case 3:return i.sent(),[4,$(e.appConfig)]
case 4:return n=i.sent(),[3,2]
case 5:return 0===(r=n.authToken).requestStatus?[2,H(e,t)]:[2,r]}}))}))}(e,t),r
if(!navigator.onLine)throw v.create("app-offline")
var o=function(e){var t={requestStatus:1,requestTime:Date.now()}
return a(a({},e),{authToken:t})}(r)
return n=function(e,t){return s(this,void 0,void 0,(function(){var n,r,i
return c(this,(function(o){switch(o.label){case 0:return o.trys.push([0,3,,8]),[4,G(e,t)]
case 1:return n=o.sent(),i=a(a({},t),{authToken:n}),[4,B(e.appConfig,i)]
case 2:return o.sent(),[2,n]
case 3:return!g(r=o.sent())||401!==r.serverCode&&404!==r.serverCode?[3,5]:[4,K(e.appConfig)]
case 4:return o.sent(),[3,7]
case 5:return i=a(a({},t),{authToken:{requestStatus:0}}),[4,B(e.appConfig,i)]
case 6:o.sent(),o.label=7
case 7:throw r
case 8:return[2]}}))}))}(e,o),o}))]
case 1:return r=o.sent(),n?[4,n]:[3,3]
case 2:return i=o.sent(),[3,4]
case 3:i=r.authToken,o.label=4
case 4:return[2,i]}}))}))}function $(e){return V(e,(function(e){if(!J(e))throw v.create("not-registered")
var t,n=e.authToken
return 1===(t=n).requestStatus&&t.requestTime+1e4<Date.now()?a(a({},e),{authToken:{requestStatus:0}}):e}))}function J(e){return void 0!==e&&2===e.registrationStatus}function Y(e){return s(this,void 0,void 0,(function(){var t
return c(this,(function(n){switch(n.label){case 0:return[4,W(e)]
case 1:return(t=n.sent().registrationPromise)?[4,t]:[3,3]
case 2:n.sent(),n.label=3
case 3:return[2]}}))}))}function Z(e,t){return s(this,void 0,void 0,(function(){var n,r,i,o
return c(this,(function(a){switch(a.label){case 0:return n=function(e,t){var n=t.fid
return b(e)+"/"+n}(e,t),r=_(e,t),i={method:"DELETE",headers:r},[4,S((function(){return fetch(n,i)}))]
case 1:return(o=a.sent()).ok?[3,3]:[4,m("Delete Installation",o)]
case 2:throw a.sent()
case 3:return[2]}}))}))}function Q(e,t){var n=e.appConfig
return function(e,t){A()
var n=x(e),r=P.get(n)
r||(r=new Set,P.set(n,r)),r.add(t)}(n,t),function(){!function(e,t){var n=x(e),r=P.get(n)
r&&(r.delete(t),0===r.size&&P.delete(n),N())}(n,t)}}function X(e){return v.create("missing-app-config-values",{valueName:e})}(L=i.a).INTERNAL.registerComponent(new o.Component("installations",(function(e){var t=e.getProvider("app").getImmediate(),n={appConfig:function(e){var t,n
if(!e||!e.options)throw X("App Configuration")
if(!e.name)throw X("App Name")
try{for(var r=u(["projectId","apiKey","appId"]),i=r.next();!i.done;i=r.next()){var o=i.value
if(!e.options[o])throw X(o)}}catch(e){t={error:e}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),platformLoggerProvider:e.getProvider("platform-logger")}
return{app:t,getId:function(){return function(e){return s(this,void 0,void 0,(function(){var t,n,r
return c(this,(function(i){switch(i.label){case 0:return[4,W(e.appConfig)]
case 1:return t=i.sent(),n=t.installationEntry,(r=t.registrationPromise)?r.catch(console.error):H(e).catch(console.error),[2,n.fid]}}))}))}(n)},getToken:function(e){return function(e,t){return void 0===t&&(t=!1),s(this,void 0,void 0,(function(){return c(this,(function(n){switch(n.label){case 0:return[4,Y(e.appConfig)]
case 1:return n.sent(),[4,H(e,t)]
case 2:return[2,n.sent().token]}}))}))}(n,e)},delete:function(){return function(e){return s(this,void 0,void 0,(function(){var t,n
return c(this,(function(r){switch(r.label){case 0:return[4,V(t=e.appConfig,(function(e){if(!e||0!==e.registrationStatus)return e}))]
case 1:if(!(n=r.sent()))return[3,6]
if(1!==n.registrationStatus)return[3,2]
throw v.create("delete-pending-registration")
case 2:if(2!==n.registrationStatus)return[3,6]
if(navigator.onLine)return[3,3]
throw v.create("app-offline")
case 3:return[4,Z(t,n)]
case 4:return r.sent(),[4,K(t)]
case 5:r.sent(),r.label=6
case 6:return[2]}}))}))}(n)},onIdChange:function(e){return Q(n,e)}}}),"PUBLIC")),L.registerVersion("@firebase/installations","0.4.2")
var ee,te=function(){return(te=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e}).apply(this,arguments)}
function ne(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){e.done?i(e.value):new n((function(t){t(e.value)})).then(a,s)}c((r=r.apply(e,t||[])).next())}))}function re(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o
function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.")
for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i
switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o
break
case 4:return a.label++,{value:o[1],done:!1}
case 5:a.label++,r=o[1],o=[0]
continue
case 7:o=a.ops.pop(),a.trys.pop()
continue
default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0
continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1]
break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o
break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o)
break}i[2]&&a.ops.pop(),a.trys.pop()
continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1]
return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}function ie(e){var t="function"==typeof Symbol&&e[Symbol.iterator],n=0
return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}}function oe(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator]
if(!n)return e
var r,i,o=n.call(e),a=[]
try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a}var ae=((ee={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',ee["only-available-in-window"]="This method is available in a Window context.",ee["only-available-in-sw"]="This method is available in a service worker context.",ee["permission-default"]="The notification permission was not granted and dismissed instead.",ee["permission-blocked"]="The notification permission was not granted and blocked instead.",ee["unsupported-browser"]="This browser doesn't support the API's required to use the firebase SDK.",ee["failed-service-worker-registration"]="We are unable to register the default service worker. {$browserErrorMessage}",ee["token-subscribe-failed"]="A problem occured while subscribing the user to FCM: {$errorInfo}",ee["token-subscribe-no-token"]="FCM returned no token when subscribing the user to push.",ee["token-unsubscribe-failed"]="A problem occured while unsubscribing the user from FCM: {$errorInfo}",ee["token-update-failed"]="A problem occured while updating the user from FCM: {$errorInfo}",ee["token-update-no-token"]="FCM returned no token when updating the user to push.",ee["use-sw-after-get-token"]="The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",ee["invalid-sw-registration"]="The input to useServiceWorker() must be a ServiceWorkerRegistration.",ee["invalid-bg-handler"]="The input to setBackgroundMessageHandler() must be a function.",ee["invalid-vapid-key"]="The public VAPID key must be a string.",ee["use-vapid-key-after-get-token"]="The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.",ee),se=new p.ErrorFactory("messaging","Messaging",ae)
function ce(e){return se.create("missing-app-config-values",{valueName:e})}function ue(e){var t=new Uint8Array(e)
return btoa(String.fromCharCode.apply(String,function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(oe(arguments[t]))
return e}(t))).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function fe(e){return ne(this,void 0,void 0,(function(){var t,n,r=this
return re(this,(function(i){switch(i.label){case 0:return"databases"in indexedDB?[4,indexedDB.databases()]:[3,2]
case 1:if(t=i.sent(),!t.map((function(e){return e.name})).includes("fcm_token_details_db"))return[2,null]
i.label=2
case 2:return n=null,[4,Object(h.openDb)("fcm_token_details_db",5,(function(t){return ne(r,void 0,void 0,(function(){var r,i,o,a
return re(this,(function(s){switch(s.label){case 0:return t.oldVersion<2?[2]:t.objectStoreNames.contains("fcm_token_object_Store")?[4,(r=t.transaction.objectStore("fcm_token_object_Store")).index("fcmSenderId").get(e)]:[2]
case 1:return i=s.sent(),[4,r.clear()]
case 2:if(s.sent(),!i)return[2]
if(2===t.oldVersion){if(!(o=i).auth||!o.p256dh||!o.endpoint)return[2]
n={token:o.fcmToken,createTime:(a=o.createTime,null!=a?a:Date.now()),subscriptionOptions:{auth:o.auth,p256dh:o.p256dh,endpoint:o.endpoint,swScope:o.swScope,vapidKey:"string"==typeof o.vapidKey?o.vapidKey:ue(o.vapidKey)}}}else 3===t.oldVersion?n={token:(o=i).fcmToken,createTime:o.createTime,subscriptionOptions:{auth:ue(o.auth),p256dh:ue(o.p256dh),endpoint:o.endpoint,swScope:o.swScope,vapidKey:ue(o.vapidKey)}}:4===t.oldVersion&&(n={token:(o=i).fcmToken,createTime:o.createTime,subscriptionOptions:{auth:ue(o.auth),p256dh:ue(o.p256dh),endpoint:o.endpoint,swScope:o.swScope,vapidKey:ue(o.vapidKey)}})
return[2]}}))}))}))]
case 3:return i.sent().close(),[4,Object(h.deleteDb)("fcm_token_details_db")]
case 4:return i.sent(),[4,Object(h.deleteDb)("fcm_vapid_details_db")]
case 5:return i.sent(),[4,Object(h.deleteDb)("undefined")]
case 6:return i.sent(),[2,le(n)?n:null]}}))}))}function le(e){if(!e||!e.subscriptionOptions)return!1
var t=e.subscriptionOptions
return"number"==typeof e.createTime&&e.createTime>0&&"string"==typeof e.token&&e.token.length>0&&"string"==typeof t.auth&&t.auth.length>0&&"string"==typeof t.p256dh&&t.p256dh.length>0&&"string"==typeof t.endpoint&&t.endpoint.length>0&&"string"==typeof t.swScope&&t.swScope.length>0&&"string"==typeof t.vapidKey&&t.vapidKey.length>0}var pe=null
function he(){return pe||(pe=Object(h.openDb)("firebase-messaging-database",1,(function(e){switch(e.oldVersion){case 0:e.createObjectStore("firebase-messaging-store")}}))),pe}function de(e){return ne(this,void 0,void 0,(function(){var t,n,r
return re(this,(function(i){switch(i.label){case 0:return t=be(e),[4,he()]
case 1:return[4,i.sent().transaction("firebase-messaging-store").objectStore("firebase-messaging-store").get(t)]
case 2:return(n=i.sent())?[2,n]:[3,3]
case 3:return[4,fe(e.appConfig.senderId)]
case 4:return(r=i.sent())?[4,ve(e,r)]:[3,6]
case 5:return i.sent(),[2,r]
case 6:return[2]}}))}))}function ve(e,t){return ne(this,void 0,void 0,(function(){var n,r,i
return re(this,(function(o){switch(o.label){case 0:return n=be(e),[4,he()]
case 1:return r=o.sent(),[4,(i=r.transaction("firebase-messaging-store","readwrite")).objectStore("firebase-messaging-store").put(t,n)]
case 2:return o.sent(),[4,i.complete]
case 3:return o.sent(),[2,t]}}))}))}function ge(e){return ne(this,void 0,void 0,(function(){var t,n,r
return re(this,(function(i){switch(i.label){case 0:return t=be(e),[4,he()]
case 1:return n=i.sent(),[4,(r=n.transaction("firebase-messaging-store","readwrite")).objectStore("firebase-messaging-store").delete(t)]
case 2:return i.sent(),[4,r.complete]
case 3:return i.sent(),[2]}}))}))}function be(e){return e.appConfig.appId}var ye="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4"
function me(e,t){return ne(this,void 0,void 0,(function(){var n,r,i,o,a,s
return re(this,(function(c){switch(c.label){case 0:return[4,ke(e)]
case 1:n=c.sent(),r=Oe(t),i={method:"POST",headers:n,body:JSON.stringify(r)},c.label=2
case 2:return c.trys.push([2,5,,6]),[4,fetch(Se(e.appConfig),i)]
case 3:return[4,c.sent().json()]
case 4:return o=c.sent(),[3,6]
case 5:throw a=c.sent(),se.create("token-subscribe-failed",{errorInfo:a})
case 6:if(o.error)throw s=o.error.message,se.create("token-subscribe-failed",{errorInfo:s})
if(!o.token)throw se.create("token-subscribe-no-token")
return[2,o.token]}}))}))}function we(e,t){return ne(this,void 0,void 0,(function(){var n,r,i,o,a,s
return re(this,(function(c){switch(c.label){case 0:return[4,ke(e)]
case 1:n=c.sent(),r=Oe(t.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)},c.label=2
case 2:return c.trys.push([2,5,,6]),[4,fetch(Se(e.appConfig)+"/"+t.token,i)]
case 3:return[4,c.sent().json()]
case 4:return o=c.sent(),[3,6]
case 5:throw a=c.sent(),se.create("token-update-failed",{errorInfo:a})
case 6:if(o.error)throw s=o.error.message,se.create("token-update-failed",{errorInfo:s})
if(!o.token)throw se.create("token-update-no-token")
return[2,o.token]}}))}))}function _e(e,t){return ne(this,void 0,void 0,(function(){var n,r,i,o,a
return re(this,(function(s){switch(s.label){case 0:return[4,ke(e)]
case 1:n=s.sent(),r={method:"DELETE",headers:n},s.label=2
case 2:return s.trys.push([2,5,,6]),[4,fetch(Se(e.appConfig)+"/"+t,r)]
case 3:return[4,s.sent().json()]
case 4:if((i=s.sent()).error)throw o=i.error.message,se.create("token-unsubscribe-failed",{errorInfo:o})
return[3,6]
case 5:throw a=s.sent(),se.create("token-unsubscribe-failed",{errorInfo:a})
case 6:return[2]}}))}))}function Se(e){return"https://fcmregistrations.googleapis.com/v1/projects/"+e.projectId+"/registrations"}function ke(e){var t=e.appConfig,n=e.installations
return ne(this,void 0,void 0,(function(){var e
return re(this,(function(r){switch(r.label){case 0:return[4,n.getToken()]
case 1:return e=r.sent(),[2,new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":"FIS "+e})]}}))}))}function Oe(e){var t=e.p256dh,n=e.auth,r=e.endpoint,i=e.vapidKey,o={web:{endpoint:r,auth:n,p256dh:t}}
return i!==ye&&(o.web.applicationPubKey=i),o}var Ee
function Ie(e,t,n){return ne(this,void 0,void 0,(function(){var r,i,o,a
return re(this,(function(s){switch(s.label){case 0:if("granted"!==Notification.permission)throw se.create("permission-blocked")
return[4,Ce(t,n)]
case 1:return r=s.sent(),[4,de(e)]
case 2:return i=s.sent(),o={vapidKey:n,swScope:t.scope,endpoint:r.endpoint,auth:ue(r.getKey("auth")),p256dh:ue(r.getKey("p256dh"))},i?[3,3]:[2,Pe(e,o)]
case 3:if(c=i.subscriptionOptions,f=(u=o).vapidKey===c.vapidKey,l=u.endpoint===c.endpoint,p=u.auth===c.auth,h=u.p256dh===c.p256dh,f&&l&&p&&h)return[3,8]
s.label=4
case 4:return s.trys.push([4,6,,7]),[4,_e(e,i.token)]
case 5:return s.sent(),[3,7]
case 6:return a=s.sent(),console.warn(a),[3,7]
case 7:return[2,Pe(e,o)]
case 8:return Date.now()>=i.createTime+6048e5?[2,xe({token:i.token,createTime:Date.now(),subscriptionOptions:o},e,t)]:[2,i.token]
case 9:return[2]}var c,u,f,l,p,h}))}))}function Te(e,t){return ne(this,void 0,void 0,(function(){var n,r
return re(this,(function(i){switch(i.label){case 0:return[4,de(e)]
case 1:return(n=i.sent())?[4,_e(e,n.token)]:[3,4]
case 2:return i.sent(),[4,ge(e)]
case 3:i.sent(),i.label=4
case 4:return[4,t.pushManager.getSubscription()]
case 5:return(r=i.sent())?[2,r.unsubscribe()]:[2,!0]}}))}))}function xe(e,t,n){return ne(this,void 0,void 0,(function(){var r,i,o
return re(this,(function(a){switch(a.label){case 0:return a.trys.push([0,3,,5]),[4,we(t,e)]
case 1:return r=a.sent(),i=te({token:r,createTime:Date.now()},e),[4,ve(t,i)]
case 2:return a.sent(),[2,r]
case 3:return o=a.sent(),[4,Te(t,n)]
case 4:throw a.sent(),o
case 5:return[2]}}))}))}function Pe(e,t){return ne(this,void 0,void 0,(function(){var n,r
return re(this,(function(i){switch(i.label){case 0:return[4,me(e,t)]
case 1:return n=i.sent(),r={token:n,createTime:Date.now(),subscriptionOptions:t},[4,ve(e,r)]
case 2:return i.sent(),[2,r.token]}}))}))}function Ce(e,t){return ne(this,void 0,void 0,(function(){var n
return re(this,(function(r){switch(r.label){case 0:return[4,e.pushManager.getSubscription()]
case 1:return(n=r.sent())?[2,n]:[2,e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:t})]}}))}))}function je(e){return"object"==typeof e&&!!e&&"google.c.a.c_id"in e}!function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"}(Ee||(Ee={}))
var De=function(){function e(e){var t=this
this.firebaseDependencies=e,this.vapidKey=null,this.onMessageCallback=null,navigator.serviceWorker.addEventListener("message",(function(e){return t.messageEventListener(e)}))}return Object.defineProperty(e.prototype,"app",{get:function(){return this.firebaseDependencies.app},enumerable:!0,configurable:!0}),e.prototype.getToken=function(){return ne(this,void 0,void 0,(function(){var e
return re(this,(function(t){switch(t.label){case 0:return this.vapidKey||(this.vapidKey=ye),[4,this.getServiceWorkerRegistration()]
case 1:return e=t.sent(),"default"!==Notification.permission?[3,3]:[4,Notification.requestPermission()]
case 2:t.sent(),t.label=3
case 3:if("granted"!==Notification.permission)throw se.create("permission-blocked")
return[2,Ie(this.firebaseDependencies,e,this.vapidKey)]}}))}))},e.prototype.deleteToken=function(){return ne(this,void 0,void 0,(function(){var e
return re(this,(function(t){switch(t.label){case 0:return[4,this.getServiceWorkerRegistration()]
case 1:return e=t.sent(),[2,Te(this.firebaseDependencies,e)]}}))}))},e.prototype.requestPermission=function(){return ne(this,void 0,void 0,(function(){var e
return re(this,(function(t){switch(t.label){case 0:return"granted"===Notification.permission?[2]:[4,Notification.requestPermission()]
case 1:if("granted"===(e=t.sent()))return[2]
throw"denied"===e?se.create("permission-blocked"):se.create("permission-default")}}))}))},e.prototype.usePublicVapidKey=function(e){if(null!==this.vapidKey)throw se.create("use-vapid-key-after-get-token")
if("string"!=typeof e||0===e.length)throw se.create("invalid-vapid-key")
this.vapidKey=e},e.prototype.useServiceWorker=function(e){if(!(e instanceof ServiceWorkerRegistration))throw se.create("invalid-sw-registration")
if(this.swRegistration)throw se.create("use-sw-after-get-token")
this.swRegistration=e},e.prototype.onMessage=function(e){var t=this
return this.onMessageCallback="function"==typeof e?e:e.next,function(){t.onMessageCallback=null}},e.prototype.setBackgroundMessageHandler=function(){throw se.create("only-available-in-sw")},e.prototype.onTokenRefresh=function(){return function(){}},e.prototype.getServiceWorkerRegistration=function(){return ne(this,void 0,void 0,(function(){var e,t
return re(this,(function(n){switch(n.label){case 0:if(this.swRegistration)return[3,4]
n.label=1
case 1:return n.trys.push([1,3,,4]),e=this,[4,navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"})]
case 2:return e.swRegistration=n.sent(),[3,4]
case 3:throw t=n.sent(),se.create("failed-service-worker-registration",{browserErrorMessage:t.message})
case 4:return[2,this.swRegistration]}}))}))},e.prototype.messageEventListener=function(e){var t
return ne(this,void 0,void 0,(function(){var n,r,i,o
return re(this,(function(a){switch(a.label){case 0:return(null===(t=e.data)||void 0===t?void 0:t.firebaseMessaging)?(n=e.data.firebaseMessaging,r=n.type,i=n.payload,this.onMessageCallback&&r===Ee.PUSH_RECEIVED&&this.onMessageCallback(i),je(o=i.data)&&"1"===o["google.c.a.e"]?[4,this.logEvent(r,o)]:[3,2]):[2]
case 1:a.sent(),a.label=2
case 2:return[2]}}))}))},e.prototype.logEvent=function(e,t){return ne(this,void 0,void 0,(function(){var n
return re(this,(function(r){switch(r.label){case 0:return n=function(e){switch(e){case Ee.NOTIFICATION_CLICKED:return"notification_open"
case Ee.PUSH_RECEIVED:return"notification_foreground"
default:throw new Error}}(e),[4,this.firebaseDependencies.analyticsProvider.get()]
case 1:return r.sent().logEvent(n,{message_id:t["google.c.a.c_id"],message_name:t["google.c.a.c_l"],message_time:t["google.c.a.ts"],message_device_time:Math.floor(Date.now()/1e3)}),[2]}}))}))},e}()
var Ae=function(){function e(e){var t=this
this.firebaseDependencies=e,this.vapidKey=null,this.bgMessageHandler=null,self.addEventListener("push",(function(e){e.waitUntil(t.onPush(e))})),self.addEventListener("pushsubscriptionchange",(function(e){e.waitUntil(t.onSubChange(e))})),self.addEventListener("notificationclick",(function(e){e.waitUntil(t.onNotificationClick(e))}))}return Object.defineProperty(e.prototype,"app",{get:function(){return this.firebaseDependencies.app},enumerable:!0,configurable:!0}),e.prototype.setBackgroundMessageHandler=function(e){if(!e||"function"!=typeof e)throw se.create("invalid-bg-handler")
this.bgMessageHandler=e},e.prototype.getToken=function(){var e,t,n
return ne(this,void 0,void 0,(function(){var r
return re(this,(function(i){switch(i.label){case 0:return this.vapidKey?[3,2]:[4,de(this.firebaseDependencies)]
case 1:r=i.sent(),this.vapidKey=null!=(n=null===(t=null===(e=r)||void 0===e?void 0:e.subscriptionOptions)||void 0===t?void 0:t.vapidKey)?n:ye,i.label=2
case 2:return[2,Ie(this.firebaseDependencies,self.registration,this.vapidKey)]}}))}))},e.prototype.deleteToken=function(){return Te(this.firebaseDependencies,self.registration)},e.prototype.requestPermission=function(){throw se.create("only-available-in-window")},e.prototype.usePublicVapidKey=function(e){if(null!==this.vapidKey)throw se.create("use-vapid-key-after-get-token")
if("string"!=typeof e||0===e.length)throw se.create("invalid-vapid-key")
this.vapidKey=e},e.prototype.useServiceWorker=function(){throw se.create("only-available-in-window")},e.prototype.onMessage=function(){throw se.create("only-available-in-window")},e.prototype.onTokenRefresh=function(){throw se.create("only-available-in-window")},e.prototype.onPush=function(e){return ne(this,void 0,void 0,(function(){var t,n,r
return re(this,(function(i){switch(i.label){case 0:return(t=function(e){var t=e.data
if(!t)return null
try{return t.json()}catch(e){return null}}(e))?[4,Me()]:[2]
case 1:return function(e){return e.some((function(e){return"visible"===e.visibilityState&&!e.url.startsWith("chrome-extension://")}))}(n=i.sent())?[2,Le(n,t)]:(r=function(e){var t
if(!e||"object"!=typeof e.notification)return
var n=te({},e.notification)
return n.data=te(te({},e.notification.data),((t={}).FCM_MSG=e,t)),n}(t))?[4,Fe(r)]:[3,3]
case 2:return i.sent(),[3,5]
case 3:return this.bgMessageHandler?[4,this.bgMessageHandler(t)]:[3,5]
case 4:i.sent(),i.label=5
case 5:return[2]}}))}))},e.prototype.onSubChange=function(e){var t,n,r
return ne(this,void 0,void 0,(function(){var i
return re(this,(function(o){switch(o.label){case 0:return e.newSubscription?[3,2]:[4,Te(this.firebaseDependencies,self.registration)]
case 1:return o.sent(),[2]
case 2:return[4,de(this.firebaseDependencies)]
case 3:return i=o.sent(),[4,Te(this.firebaseDependencies,self.registration)]
case 4:return o.sent(),[4,Ie(this.firebaseDependencies,self.registration,(r=null===(n=null===(t=i)||void 0===t?void 0:t.subscriptionOptions)||void 0===n?void 0:n.vapidKey,null!=r?r:ye))]
case 5:return o.sent(),[2]}}))}))},e.prototype.onNotificationClick=function(e){var t,n
return ne(this,void 0,void 0,(function(){var r,i,o,a
return re(this,(function(s){switch(s.label){case 0:return(r=null===(n=null===(t=e.notification)||void 0===t?void 0:t.data)||void 0===n?void 0:n.FCM_MSG)?e.action?[2]:(e.stopImmediatePropagation(),e.notification.close(),(i=function(e){var t,n,r,i=null!==(n=null===(t=e.fcmOptions)||void 0===t?void 0:t.link)&&void 0!==n?n:null===(r=e.notification)||void 0===r?void 0:r.click_action
if(i)return i
return je(e.data)?self.location.origin:null}(r))?[4,Ne(i)]:[2]):[2]
case 1:return(o=s.sent())?[3,4]:[4,self.clients.openWindow(i)]
case 2:return o=s.sent(),[4,(c=3e3,new Promise((function(e){setTimeout(e,c)})))]
case 3:return s.sent(),[3,6]
case 4:return[4,o.focus()]
case 5:o=s.sent(),s.label=6
case 6:return o?(a=Re(Ee.NOTIFICATION_CLICKED,r),[2,o.postMessage(a)]):[2]}var c}))}))},e}()
function Ne(e){return ne(this,void 0,void 0,(function(){var t,n,r,i,o,a,s
return re(this,(function(c){switch(c.label){case 0:return t=new URL(e,self.location.href).href,[4,Me()]
case 1:n=c.sent()
try{for(r=ie(n),i=r.next();!i.done;i=r.next())if(o=i.value,new URL(o.url,self.location.href).href===t)return[2,o]}catch(e){a={error:e}}finally{try{i&&!i.done&&(s=r.return)&&s.call(r)}finally{if(a)throw a.error}}return[2,null]}}))}))}function Le(e,t){var n,r,i=Re(Ee.PUSH_RECEIVED,t)
try{for(var o=ie(e),a=o.next();!a.done;a=o.next()){a.value.postMessage(i)}}catch(e){n={error:e}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}}function Me(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function Re(e,t){return{firebaseMessaging:{type:e,payload:t}}}function Fe(e){var t,n=null!=(t=e.title)?t:"",r=e.actions,i=Notification.maxActions
return r&&i&&r.length>i&&console.warn("This browser only supports "+i+" actions. The remaining actions will not be displayed."),self.registration.showNotification(n,e)}var Be={isSupported:Ke}
function Ke(){return self&&"ServiceWorkerGlobalScope"in self?"indexedDB"in self&&null!==indexedDB&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey"):"indexedDB"in window&&null!==indexedDB&&navigator.cookieEnabled&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}i.a.INTERNAL.registerComponent(new o.Component("messaging",(function(e){var t=e.getProvider("app").getImmediate(),n={app:t,appConfig:function(e){var t,n
if(!e||!e.options)throw ce("App Configuration Object")
if(!e.name)throw ce("App Name")
var r=e.options
try{for(var i=ie(["projectId","apiKey","appId","messagingSenderId"]),o=i.next();!o.done;o=i.next()){var a=o.value
if(!r[a])throw ce(a)}}catch(e){t={error:e}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return{appName:e.name,projectId:r.projectId,apiKey:r.apiKey,appId:r.appId,senderId:r.messagingSenderId}}(t),installations:e.getProvider("installations").getImmediate(),analyticsProvider:e.getProvider("analytics-internal")}
if(!Ke())throw se.create("unsupported-browser")
return self&&"ServiceWorkerGlobalScope"in self?new Ae(n):new De(n)}),"PUBLIC").setServiceProps(Be))},function(e,t,n){var r=n(21),i=n(22),o=n(23)
e.exports=function(e){return r(e)||i(e)||o()}},function(e,t,n){"use strict"
n.r(t)
var r=n(19),i=n.n(r),o=n(11),a=n.n(o),s=n(1),c=n.n(s),u=n(7),f=n.n(u),l=n(2),p=n.n(l),h=n(4),d=n.n(h),v=n(6),g=n.n(v),b=(n(18),n(9)),y=n.n(b),m=function(){function e(t){p()(this,e),this.id=t}return d()(e,[{key:"getId",value:function(){return this.id}},{key:"isValid",value:function(){return!!this.id}}]),e}(),w=function e(t,n){p()(this,e),this.expire=(new Date).getTime()+1e3*n,this.item=t},_=function(){function e(t){p()(this,e),this.cachePrefix="pushDelivery.cache.",this.dbConfig=t.app.database,this.localStorageConfiguration=t.app.localStorage}return d()(e,[{key:"storeItemLocalStorage",value:function(e,t){localStorage.setItem(e,JSON.stringify(t))}},{key:"getItemLocalStorage",value:function(e){return JSON.parse(localStorage.getItem(e))}},{key:"removeItemLocalStorage",value:function(e){localStorage.removeItem(e)}},{key:"init",value:function(){var e=this
return new Promise((function(t,n){if(!window.indexedDB)return n("Your browser doesn't IndexedDB.")
var r=indexedDB.open(e.dbConfig.notificationDB,e.dbConfig.version),i=e.dbConfig,o=e
r.onupgradeneeded=function(e){(o.db=e.target.result,e.oldVersion<1)&&o.db.createObjectStore(i.notificationTable,{autoIncrement:!0}).createIndex("date","date",{unique:!1})},r.onsuccess=function(e){o.db=e.target.result,t()},r.onerror=function(e){throw console.log("error opening database:",e.target.errorCode),n(),new Error("Unable to open database")},e.migrateLegacyDeviceInformation()}))}},{key:"migrateLegacyDeviceInformation",value:function(){null===window.localStorage.getItem(this.localStorageConfiguration.deviceStorageKey)&&"function"==typeof this.localStorageConfiguration.migration&&this.localStorageConfiguration.migration(this.localStorageConfiguration)}},{key:"save",value:function(e){var t=this.db.transaction([this.dbConfig.notificationTable],"readwrite"),n=t.objectStore(this.dbConfig.notificationTable)
t.onerror=function(e){console.log("error storing notification:",e.target.errorCode)},n.add(e)}},{key:"getAllEntries",value:function(){var e=this.db.transaction([this.dbConfig.notificationTable],"readonly").objectStore(this.dbConfig.notificationTable).index("date"),t=this
return new Promise((function(n,r){var i=t.dbConfig.notificationMaxResults,o=[],a=e.openCursor(null,"prev")
a.onsuccess=function(e){var t=e.target.result
t&&o.length<=i?(o.push(t.value),t.continue()):n(o)},a.onerror=r}))}},{key:"addCache",value:function(e,t,n){sessionStorage.setItem(this.cachePrefix+e,JSON.stringify(new w(t,n)))}},{key:"getCache",value:function(e){var t=sessionStorage.getItem(this.cachePrefix+e)
if(t){var n=JSON.parse(t)
if(n.expire>(new Date).getTime())return n.item}return null}},{key:"removeCache",value:function(e){sessionStorage.removeItem(this.cachePrefix+e)}}]),e}(),S=n(10),k=function(){function e(t){p()(this,e),this.config=y()(S.a,t),this.apiConfig=this.config.app.api,this.headers={Authorization:this.getAuthorization(),"Content-Type":"application/json"}}return d()(e,[{key:"getAuthorization",value:function(){return"Bearer "+this.apiConfig.accessToken}},{key:"postData",value:function(e,t){try{return fetch(this.apiConfig.baseUrl+t,{method:"POST",headers:this.headers,body:JSON.stringify(e)}).then((function(e){if(e.ok)return e.clone().json().catch((function(){return e.clone().text()}))
throw new Error("Error on endpoint:"+t)}))}catch(e){console.log("Error on endpoint:"+t,e)}}},{key:"getTags",value:function(){return this.postData({appId:this.apiConfig.id,platformId:this.apiConfig.platformId},"tags")}},{key:"getSubscribedTags",value:function(e){return this.postData({appId:this.apiConfig.id,platformId:this.apiConfig.platformId,deviceId:e.id},"list")}},{key:"subscribe",value:function(e,t){return this.postData({tagId:t,appId:this.apiConfig.id,appVersion:"webclient-3.0",platformId:this.apiConfig.platformId,deviceId:e.getId()},"reg")}},{key:"unsubscribe",value:function(e,t){return this.postData({tagId:t,appId:this.apiConfig.id,platformId:this.apiConfig.platformId,deviceId:e.getId()},"ureg")}}]),e}(),O=n(0)
function E(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e)
t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}n.d(t,"default",(function(){return I}))
var I=function(){function e(t){p()(this,e),this.config=y()(S.a,t),this.validateConfig(t),this.storageService=new _(this.config),this.pushDeliveryClient=new k(t),!0===t.globalScope&&(window.pushDelivery=this)}var t,n
return d()(e,[{key:"setPayloadHandler",value:function(e){this.handlePayload=e}},{key:"init",value:(n=f()(c.a.mark((function e(){var t,n
return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.storageService.init()
case 2:return this.initFirebase(),e.next=5,this.initServiceWorker()
case 5:if(!(t="granted"===Notification.permission)||this.getDevice().getId()){e.next=13
break}return e.next=9,this.retrieveAndStoreDeviceToken()
case 9:return e.next=11,this.subscribeToDefaultTags()
case 11:e.next=19
break
case 13:if(t||!this.getDevice().getId()){e.next=19
break}return e.next=16,this.getSubscribedTags()
case 16:n=e.sent,this.unsubscribeFrom(n),this.storageService.removeItemLocalStorage(this.config.app.localStorage.deviceStorageKey)
case 19:return e.abrupt("return",Promise.resolve())
case 20:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"initFirebase",value:function(){g.a.initializeApp({messagingSenderId:this.config.app.firebase.messageSenderId,projectId:this.config.app.firebase.projectId,apiKey:this.config.app.firebase.apiKey,appId:this.config.app.firebase.appId}),this.messaging=g.a.messaging()}},{key:"initServiceWorker",value:function(){var e=this
return new Promise(function(){var t=f()(c.a.mark((function t(n,r){var i,o,a
return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i="?cfg=".concat(encodeURIComponent(JSON.stringify(e.config.app))),o=e.config.app.firebase.serviceWorkerPath||Object(O.a)("service-worker.js"),t.next=4,navigator.serviceWorker.register(o+i)
case 4:a=t.sent,e.messaging.useServiceWorker(a),e.setMessagingHandlers(),a.installing?a.installing.onstatechange=n:a.waiting?a.waiting.onstatechange=n:a.active&&n()
case 8:case"end":return t.stop()}}),t)})))
return function(e,n){return t.apply(this,arguments)}}())}},{key:"setMessagingHandlers",value:function(){var e=this,t=this
this.messaging.onTokenRefresh(f()(c.a.mark((function t(){var n
return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getSubscribedTags()
case 2:return n=t.sent,e.unsubscribeFrom(n),t.next=6,e.retrieveAndStoreDeviceToken()
case 6:e.subscribeTo(n)
case 7:case"end":return t.stop()}}),t)})))),this.messaging.onMessage((function(n){var r=n.data.title,i=t.config.app.client.defaultUrl
console.log(n)
try{if(n.data.url){var o=new URL(n.data.url)
o.searchParams.append("platform","desktop"),o.searchParams.append("cmsId",n.data.articleID),n.data.id&&o.searchParams.append("id",n.data.id),i=o.href}n.data.title||(r=" "),e.handlePayload&&e.handlePayload(n)
var s=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?E(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({date:new Date(Date.now()),text:n.data.message||n.data.body,url:i,title:r},n)
t.storageService.save(s)}catch(e){console.log("failed",e)}}))}},{key:"retrieveAndStoreDeviceToken",value:function(){var e=this
return this.messaging.getToken().then((function(t){var n=new m
n.id=t,e.storageService.storeItemLocalStorage(e.config.app.localStorage.deviceStorageKey,n)})).catch((function(e){console.log("failed!",e)}))}},{key:"getDevice",value:function(){var e=this.storageService.getItemLocalStorage(this.config.app.localStorage.deviceStorageKey)
return new m(e?e.id:null)}},{key:"subscribeToDefaultTags",value:(t=f()(c.a.mark((function e(){var t,n=this
return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getTags()
case 2:return t=e.sent,e.abrupt("return",this.getDefaultSubscriptionTags().then(function(){var e=f()(c.a.mark((function e(r){var i
return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.subscribeTo(r)
case 2:return i=t[0].tags.filter((function(e){return r.includes(e.id)})),n.storageService.addCache("subscribedTags",i,3600),e.abrupt("return",r.map((function(e){return{id:e}})))
case 5:case"end":return e.stop()}}),e)})))
return function(t){return e.apply(this,arguments)}}(),(function(e){console.log("Error on defaultSubscribe:",e)})))
case 4:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"getDefaultSubscriptionTags",value:function(){var e=this
return this.config.app.client.defaultSubscribedTags?"function"==typeof this.config.app.client.defaultSubscribedTags?this.getTags().then((function(t){return e.config.app.client.defaultSubscribedTags(t)})):Array.isArray(this.config.app.client.defaultSubscribedTags)?Promise.resolve(this.config.app.client.defaultSubscribedTags):this.config.app.client.defaultSubscribedTags?Promise.resolve([this.config.app.client.defaultSubscribedTags]):Promise.resolve(defaultSubscribedTags):Promise.resolve([])}},{key:"getSubscribedTags",value:function(){var e=this
if(this.getDevice().id){var t=this.storageService.getCache("subscribedTags")
return t?Promise.resolve(t):this.pushDeliveryClient.getSubscribedTags(this.getDevice()).then((function(t){return e.storageService.addCache("subscribedTags",t,3600),t}))}throw new Error("Device is not initialized. Unable to retrieve the subscribe tags")}},{key:"subscribeTo",value:function(e){if(this.getDevice().id)return this.storageService.removeCache("subscribedTags"),this.pushDeliveryClient.subscribe(this.getDevice(),e)
throw new Error("Device is not initialized. Unable to subscribe to tag")}},{key:"unsubscribeFrom",value:function(e){if(this.getDevice().id)return this.storageService.removeCache("subscribedTags"),this.pushDeliveryClient.unsubscribe(this.getDevice(),e)
throw new Error("Device is not initialized. Unable to unsubscribe from tag")}},{key:"getArchive",value:function(){return this.storageService.getAllEntries()}},{key:"getTags",value:function(){var e=this,t=this.storageService.getCache("tags")
return t?Promise.resolve(t):this.pushDeliveryClient.getTags(this.getDevice()).then((function(t){return e.storageService.addCache("tags",t,3600),t}))}},{key:"subscribeToTagSourceID",value:function(e){var t=this
return new Promise((function(n,r){t.fromTagSourceIDToTagID(e).then((function(e){return t.subscribeTo(e).then((function(){n()}))}))}))}},{key:"fromTagSourceIDToTagID",value:function(e){var t=this
return new Promise((function(n,r){if("string"==typeof e)t.getTags().then((function(t){var r=Object(O.b)(t),o=[],a=!0,s=!1,c=void 0
try{for(var u,f=r[Symbol.iterator]();!(a=(u=f.next()).done);a=!0){var l=u.value
o.push.apply(o,i()(l.tags))}}catch(e){s=!0,c=e}finally{try{a||null==f.return||f.return()}finally{if(s)throw c}}var p=o.filter((function(t){return t.sourceId===e}))[0].id
n(p)}))
else console.log("tagSourceID not valid"),r()}))}},{key:"validateConfig",value:function(e){if(!(e.app&&e.app.api.id&&e.app.api.baseUrl&&e.app.firebase))throw new Error("Push.delivery configuration is not valid!")}},{key:"debug",value:function(){var e=this
return this.getSubscribedTags().then((function(t){var n="PushDeliveryDebug\n-----------------\nDevice:   "+e.getDevice().id+"\n\nSubscribedTags:"+JSON.stringify(t)
e.getTags().then((function(e){var t=n+"\n\nTags:"+JSON.stringify(e)
console.log(t)}))})),""}}]),e}()
window.PushDelivery=I},function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t]
return n}}},function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}}])}))
