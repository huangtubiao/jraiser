/*!
 * JRaiser 2 Javascript Library
 * querystring - v1.0.3 (2015-04-27T11:08:12+0800)
 * http://jraiser.org/ | Released under MIT license
 */
define("querystring/1.0.x/",null,function(e,n,r){"use strict";function t(e,n,r){return r(e)+(null==n?"":"="+r(n))}var i=e("base/1.1.x/");return{stringify:function(e,n){if("string"==typeof e)return e;n=i.extend({encode:encodeURIComponent},n);var r=[];if(i.isArray(e))e.forEach(function(e){r.push(t(e.name,e.value,n.encode))});else for(var o in e)r.push(t(o,e[o],n.encode));return r.join("&")},parse:function(e,n){n=i.extend({decode:decodeURIComponent},n);var r="array"===n.dataType,t=r?[]:{};return e=(e||window.location.search).replace(/^\?+/,"").split("&").forEach(function(e){e&&(e=e.split("="),e.length<2&&e.push(null),r?t.push({name:e[0],value:e[1]}):t[e[0]]=e[1])}),t},append:function(e,n,r){if(!n||i.isArray(n)&&!n.length||i.isEmptyObject(n))return e;n="string"!=typeof n?this.stringify(n,r):n.replace(/^[?&]+/,"");var t=e.indexOf("#"),o="";return-1!==t&&(o=e.substring(t,e.length),e=e.substring(0,t)),e=e.replace(/[?&]+$/,""),e+(-1===e.indexOf("?")?"?":"&")+n+o}}});
/*!
 * JRaiser 2 Javascript Library
 * ajax - v1.2.2 (2015-05-04T11:52:32+0800)
 * http://jraiser.org/ | Released under MIT license
 */
define("ajax/1.2.x/",["base/1.1.x/"],function(e,t,n){"use strict";function a(e){return function(t,n){"function"==typeof n?n={onload:n}:n||(n={}),t=i.append(t,n.data),n.nocache&&(t=i.append(t,{_:+new Date}));for(var a=[t,n],o=arguments.length-1;o>1;o--)a.push(arguments[o]);e.apply(this,a)}}function o(e,t,n){function a(){o.parentNode&&o.parentNode.removeChild(o),n&&s.deleteGlobalVar(n),d("success")}var o=document.createElement("div");o.style.display="none";var r=s.randomStr("form-target-");o.innerHTML='<form action="'+e+'" target="'+r+'" method="post"><input type="hidden" name="callback" value="'+n+'" /></form><iframe name="'+r+'" id="'+r+'"></iframe>';var c=o.firstChild;t.data&&s.each(t.data,function(e,t,n){var a=document.createElement("input");a.type="hidden",a.name=t,a.value=e,c.appendChild(a)});var i;n&&(window[n]=function(){!i&&t.onsuccess&&t.onsuccess.apply(window,arguments)});var d=s.once(function(e){i=e,t.onload&&t.onload.call(window,i)}),l=document.body;l.insertBefore(o,l.firstChild),c.submit();var u=c.nextSibling;u.addEventListener?u.addEventListener("load",a,!1):u.attachEvent&&u.attachEvent("onload",a);var m=Number(t.timeout);return m>0&&setTimeout(function(){d("timeout")},m),{abort:function(){d("aborted")}}}function r(e){var t=document.createElement("a");t.href=e;var n=t.pathname.split("/");n=(n[n.length-1]||"index").replace(/\.\w+$/,"");for(var a="jsonp_callback_"+(t.host+"_"+n).replace(/\W+/g,""),o=a,r=1;null!=window[o];)o=a+"_"+r++;return o}function c(e,t){t=s.extend({},t);var n,a="POST"===String(t.method).toUpperCase();return/[?&]callback=([^&]+)/.test(e)?n=RegExp.$1:(n=t.callbackName||r(e),a||(e=i.append(e,{callback:n}))),t.onload=function(){t.oncomplete&&t.oncomplete.apply(window,arguments)},a?o(e,t,n):u(e,t,n)}var s=e("base/1.1.x/"),i=e("querystring/1.0.x/"),d="onload"in document.createElement("script")?"onload":"onreadystatechange",l=document.head||document.getElementsByTagName("head")[0],u=a(function(e,t,n){var a,o=document.createElement("script"),r=s.once(function(e){a=e,t.onload&&t.onload.call(window,a)}),c=function(){(!o.readyState||/loaded|complete/.test(o.readyState))&&(o[d]=null,l.removeChild(o),o=null,n&&s.deleteGlobalVar(n),r("success"))};n&&(window[n]=function(){!a&&t.onsuccess&&t.onsuccess.apply(window,arguments)}),t.charset&&(o.charset=t.charset),o.async=!0,o[d]=c,o.src=e,l.insertBefore(o,l.firstChild);var i=Number(t.timeout);return i>0&&setTimeout(function(){r("timeout")},i),{abort:function(){r("aborted")}}}),m={},p=a(function(e,t){var n=new Image,a=Math.random();m[a]=n,n.onload=n.onabort=n.onerror=function(){delete m[a],t.onload&&t.onload.call(window)},n.src=e}),f=window.ActiveXObject?function(){try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(e){}}:function(){try{return new XMLHttpRequest}catch(e){}};return{createXHR:f,serializeForm:function(e,t){if("nodeType"in e||"function"!=typeof e.get||(e=e.get(0)),"FORM"!==e.tagName)throw new Error("invalid form element");for(var n,a=[],o=e.elements,r=0;n=o[r];r++)!n.disabled&&n.name&&("INPUT"!==n.tagName||"radio"!==n.type&&"checkbox"!==n.type||n.checked)&&a.push({name:n.name,value:n.value.trim()});switch(t){case"string":a=i.stringify(a);break;case"map":for(var c={},r=0;r<a.length;r++)c[a[r].name]=a[r].value;a=c}return a},getScript:u,jsonp:c,getCSS:function(e,t){return l.appendChild(s.extend(document.createElement("link"),s.extend({rel:"stylesheet",type:"text/css",href:e},t.props)))},getImage:p,send:function(e,t){"string"!=typeof e&&(t=e,e=t.url);var n=t.dataType;if(n&&(n=n.toLowerCase()),"jsonp"===n)return c(e,s.customExtend({},t,{whiteList:["data","callbackName","onsuccess","oncomplete","charset","nocache","timeout","method"]}));var a=function(e,a){var o=u.readyState;if(4===o||a){var r,c=4===o?u.status:0;if(c>=200&&300>c||1223===c||304===c?(r="onsuccess",a="success"):(c||a)&&(r="onerror",a||(a="error")),t.onload&&t.onload.call(window,u,a),r){var s;if("onsuccess"===r)switch(n){case"json":var i=(u.responseText||"").trim();if(i)try{s=JSON.parse(i)}catch(e){r="onerror",a="parsererror"}break;case"xml":s=u.responseXML,s&&!s.documentElement&&(s=null),s||(r="onerror",a="parsererror");break;default:s=u.responseText}var d=t[r],l=[u,a];"onsuccess"===r&&l.unshift(s),d&&d.apply(window,l)}t.oncomplete&&t.oncomplete.call(window,u,a)}},o=(t.method||"GET").toUpperCase(),r="boolean"==typeof t.async?r:!0,d=t.data,l=t.headers||{},u=t.xhr||f();if(d)switch(d=i.stringify(d),o){case"GET":e=i.append(e,d),d=null;break;case"POST":s.customExtend(l,{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},{overwrite:!1})}if(t.nocache&&(e=i.append(e,{_:+new Date})),r){var m=Number(t.timeout);m>0&&setTimeout(function(){4!==u.readyState&&(u.abort(),a.call(u,null,"timeout"))},m),u.onreadystatechange=a}t.username?u.open(o,e,r,t.username,t.password):u.open(o,e,r),l["X-Requested-With"]||(l["X-Requested-With"]="XMLHttpRequest");for(var p in l)l.hasOwnProperty(p)&&u.setRequestHeader(p,l[p]);return t.onbeforesend&&t.onbeforesend.call(window,u),u.send(d||""),r||a.call(u),u}}});