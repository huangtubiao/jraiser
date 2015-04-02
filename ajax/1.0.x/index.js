/*!
 * JRaiser 2 Javascript Library
 * querystring - v1.0.2 (2015-04-02T12:23:10+0800)
 * http://jraiser.org/ | Released under MIT license
 */
define("querystring/1.0.x/",null,function(e,n,r){"use strict";function t(e,n,r){return r(e)+(null==n?"":"="+r(n))}var i=e("base/1.0.x/");return{stringify:function(e,n){if("string"==typeof e)return e;n=i.extend({encode:encodeURIComponent},n);var r=[];if(i.isArray(e))e.forEach(function(e){r.push(t(e.name,e.value,n.encode))});else for(var o in e)r.push(t(o,e[o],n.encode));return r.join("&")},parse:function(e,n){n=i.extend({decode:decodeURIComponent},n);var r="array"===n.dataType,t=r?[]:{};return e=(e||window.location.search).replace(/^\?+/,"").split("&").forEach(function(e){e&&(e=e.split("="),e.length<2&&e.push(null),r?t.push({name:e[0],value:e[1]}):t[e[0]]=e[1])}),t},append:function(e,n,r){if(!n||i.isArray(n)&&!n.length||i.isEmptyObject(n))return e;n="string"!=typeof n?this.stringify(n,r):n.replace(/^[?&]+/,"");var t=e.indexOf("#"),o="";return-1!==t&&(o=e.substring(t,e.length),e=e.substring(0,t)),e=e.replace(/[?&]+$/,""),e+(-1===e.indexOf("?")?"?":"&")+n+o}}});
/*!
 * JRaiser 2 Javascript Library
 * ajax - v1.0.1 (2015-03-23T17:49:11+0800)
 * http://jraiser.org/ | Released under MIT license
 */
define("ajax/1.0.x/",["base/1.0.x/"],function(e,t,n){"use strict";function a(e,t){function n(){var e=this.readyState;e&&"loaded"!==e&&"complete"!==e||(this[c]=null,t.onload&&t.onload.call(this),t.removable&&this.parentNode.removeChild(this)),a=null}var a,o=document.getElementsByTagName("head")[0]||document.documentElement;if(t.data){var d,i=e.indexOf("?");-1===i?d=t.data:(d=r.extend(s.parse(e.substr(i+1)),t.data),e=e.substr(0,i)),e=s.append(e,d)}t.nocache&&(e=s.append(e,{_:+new Date})),a=r.mix(document.createElement(t.nodeName),t.nodeAttrs,{ignoreNull:!0}),a[t.urlAttrName]=e,a[c]=n,document.body?o.appendChild(a):o.insertBefore(a,o.firstChild)}function o(){var e;do e="jsonp_callback"+i+"_"+ ++d;while(window[e]);return e}var r=e("base/1.0.x/"),s=e("querystring/1.0.x/"),c="onload"in document.createElement("script")?"onload":"onreadystatechange",d=0,i=parseInt(1e5*Math.random()),l=window.ActiveXObject?function(){try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(e){}}:function(){try{return new XMLHttpRequest}catch(e){}};return{createXHR:l,getCSS:function(e,t){"function"==typeof t?t={onload:t}:t||(t={}),t=r.extend({nodeName:"link",urlAttrName:"href",nodeAttrs:{rel:"stylesheet",type:"text/css",media:t.media,charset:t.charset}},t),a(e,t)},getScript:function(e,t){"function"==typeof t?t={onload:t}:t||(t={}),t=r.extend({nodeName:"script",urlAttrName:"src",nodeAttrs:{type:"text/javascript",charset:t.charset,async:!0},removable:!0,nocache:!0},t),a(e,t)},jsonp:function(e,t){t=t||{};var n=t.callback,a=!0;n||(/[?|&]callback=(.+?)(&|$)/.test(e)?n=RegExp.$1:(n=o(),a=!1)),t.data=t.data||{},t.data.callback=n,a?delete t.onload:(window[n]=t.onsuccess,t.onload=function(){if(window[n])try{delete window[n]}catch(e){window[n]=null}}),this.getScript(e,t)},send:function(e,t){function n(e,n){var a=i.readyState;if(4===a||n){var o,r=4===a?i.status:0;if(r>=200&&300>r||1223===r||304===r?o="onsuccess":(r||n)&&(o="onerror",n||(n="error")),o){var s;if("onsuccess"===o)switch(t.dataType){case"json":var c=(i.responseText||"").trim();if(c)try{s=JSON.parse(c)}catch(e){o="onerror",n="parsererror"}break;case"xml":s=i.responseXML,s&&!s.documentElement&&(s=null),s||(o="onerror",n="parsererror");break;default:s=i.responseText}t.onload&&t.onload.call(window,i,n);var d=t[o],l=[i,n];"onsuccess"===o&&l.unshift(s),d&&d.apply(window,l),t.onend&&t.onend.call(window,i,n)}}}"string"!=typeof e&&(t=e,e=t.url),t.onbeforesend&&t.onbeforesend.call(window,i,t);var a=(t.method||"GET").toUpperCase(),o="boolean"==typeof t.async?o:!0,c=t.data,d=t.headers||{},i=t.xhr||l();if(c)switch(c=s.stringify(c),a){case"GET":e=s.append(e,c),c=null;break;case"POST":r.mix(d,{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},{overwrite:!1})}t.nocache!==!1&&(e=s.append(e,{_:+new Date})),o&&(t.timeout>0&&setTimeout(function(){4!==i.readyState&&(i.abort(),n.call(i,null,"timeout"))},t.timeout),i.onreadystatechange=n),t.username?i.open(a,e,o,t.username,t.password):i.open(a,e,o),d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(var u in d)i.setRequestHeader(u,d[u]);return i.send(c||""),o||n.call(i),i}}});