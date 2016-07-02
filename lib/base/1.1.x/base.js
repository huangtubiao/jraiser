/*!
 * JRaiser 2 Javascript Library
 * base@1.1.1 (2016-07-02T11:45:15+0800)
 * http://jraiser.org/ | Released under MIT license
 */
define("base/1.1.x/",null,function(n,t,r){"use strict";function e(n){if(null==n)throw new Error("target cannot be null");for(var t,r,e=0,o=arguments.length;++e<o;)if(r=arguments[e],null!=r)for(t in r)r.hasOwnProperty(t)&&(n[t]=r[t]);return n}function o(n,t){if(null==n)throw new Error("target cannot be null");if(null==t)return n;var r,e,o,i=[];for(r=2;r<arguments.length;r++)switch(o=arguments[r],typeof o){case"object":for(e in o)g.hasOwnProperty(e)&&i.push(g[e](o[e]));break;case"function":i.push(o)}for(e in t){for(o=!0,r=0;r<i.length;r++)if(i[r].call(window,e,t,n)===!1){o=!1;break}o&&(n[e]=t[e])}return n}function i(n){return n===d}function u(n){return"[object Function]"===v.call(n)}function c(n){return"[object Date]"===v.call(n)}function l(n){return"[object Object]"===v.call(n)}function a(n){if(null!=n)for(var t in n)if(n.hasOwnProperty(t))return!1;return!0}function f(n,t){if(null!=n){var r,e=n.length;if(e===d||u(n)){for(r in n)if(n.hasOwnProperty(r)&&!1===t.call(n[r],n[r],r,n))break}else for(r=-1;++r<e&&!1!==t.call(n[r],n[r],r,n););}return n}function s(n){var t;try{t=Array.prototype.slice.call(n)}catch(r){t=[];for(var e=n.length;e;)t[--e]=n[e]}return t}function p(n,t){for(var r=t.length,e=0,o=n.length;e<r;)n[o++]=t[e++];return n.length=o,n}function h(n){var t;return function(){return n&&(t=n.apply(this,arguments),n=null),t}}function y(n){var t="";do t+=Math.random().toString(36).substr(2);while(t.length<10);return t=t.substr(0,10)+("00000"+Math.abs(new Date)).slice(-6),n&&(t=n+t),t}function w(n){try{delete window[n]}catch(t){}null!=window[n]&&(window[n]=null)}function b(n,t,r,e){var o=r?function(){r.apply(this,e?"function"==typeof e?e.apply(this,arguments):e:arguments),n.apply(this,arguments)}:function(){n.apply(this,arguments)};if(r){var i=function(){};i.prototype=r.prototype,o.prototype=new i,o.prototype.constructor=o}if(t)for(var u in t)t.hasOwnProperty(u)&&(o.prototype[u]=t[u]);return o}var d,g={overwrite:function(n){return function(t,r,e){return!!n||!(t in e)}},ignoreNull:function(n){return function(t,r){return!n||null!=r[t]}},onlyOwnProperty:function(n){return function(t,r){return!n||r.hasOwnProperty(t)}},whiteList:function(n){return function(t){return n.indexOf(t)!==-1}},blackList:function(n){return function(t){return n.indexOf(t)===-1}}},v=Object.prototype.toString,O=Array.isArray||function(n){return"[object Array]"===v.call(n)};return{extend:e,customExtend:o,isUndefined:i,isFunction:u,isDate:c,isObject:l,isArray:O,isEmptyObject:a,each:f,toArray:s,merge:p,once:h,randomStr:y,deleteGlobalVar:w,createClass:b}});
define("base/1.1.x/base",null,function(n,e,f){return n("./")});