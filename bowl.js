/*!
 * Bowl.js
 * Javascript module loader for browser - v1.0.1 (2015-05-13T15:36:10+0800)
 * http://jraiser.org/ | Released under MIT license
 */
!function(e,t){"use strict";if(e.bowljs){return}var r=e.bowljs={version:"1.0.1",logs:[]};var n={};function i(e,t){r.logs.push("["+e+"]"+t)}var a=e.document,o=e.attachEvent&&!(e.opera!=null&&e.opera.toString()==="[object Opera]");function s(e){for(var t in e){if(e.hasOwnProperty(t)){return false}}return true}function u(e,t){for(var r in t){if(t.hasOwnProperty(r)){e[r]=t[r]}}return e}var f=Object.prototype.toString,d=Array.isArray||function(e){return f.call(e)==="[object Array]"};function l(e){var t=/(?:^|[^.$])\brequire\s*\(\s*(["'])([^"'\s\)]+)\1\s*\)/g,r=[],n;e=e.replace(/^\s*\/\*[\s\S]*?\*\/\s*$/gm,"").replace(/^\s*\/\/.*$/gm,"");while(n=t.exec(e)){if(n[2]){r.push(n[2])}}return r}function c(e){return/^(?:[a-z]+):\/{2,}/i.test(e)}function h(e){var t=a.createElement("div");t.innerHTML='<a href="'+e+'"></a>';e=t.firstChild.href;t=null;return e}function p(e){var t=e.indexOf("?");if(t!==-1){e=e.substr(0,t)}t=e.indexOf("#");if(t!==-1){e=e.substr(0,t)}return e}function v(e,t){if(/^\//.test(e)){t=n.appPath;e=e.substr(1)}else if(!/^\./.test(e)){t=n.libPath}return h(t+e)}function y(e,t){e=p(e).split("/");var r=e.pop()||"index",i;var a=r.lastIndexOf(".");if(a!==-1){i=r.substr(a+1);r=r.substr(0,a)}i=i||"js";var o=/-debug$/;if(n.debug&&!o.test(r)){r+="-debug"}else if(!n.debug&&o.test(r)){r=r.replace(o,"")}e.push(r+"."+i);var s=e.join("/");if(!c(s)){s=v(s,t||"")}var u=n.map;if(u){for(var f=0;f<u.length;f++){if(typeof u[f]==="function"){s=u[f](s)}else if(d(u[f])){s=s.replace(u[f][0],u[f][1])}}}return s}var g=function(){var e="onload"in a.createElement("script")?"onload":"onreadystatechange",t=a.head||a.getElementsByTagName("head")[0],r={},o=[],s,u;return{getCurrentScript:function(){if(s){return s}if(u&&u.readyState==="interactive"){return u}for(var e=0;e<o.length;e++){if(o[e].readyState==="interactive"){u=o[e];return u}}},load:function(f,d){var l=r[f];i("scriptLoader","load: "+f);i("scriptLoader","status: "+l);if(l){if(l===2){if(d){d()}}}else{r[f]=1;var c=a.createElement("script");switch(typeof n.charset){case"function":c.charset=n.charset(f);break;case"string":c.charset=n.charset;break}c.async="async";c.src=f;c[e]=c.onerror=function(){var n=c.readyState;if(!n||"loaded"===n||"complete"===n){r[f]=2;i("scriptLoader","onload: "+f);c[e]=c.onerror=null;t.removeChild(c);for(var a=o.length-1;a>=0;a--){if(o[a]===c){o.splice(a,1);break}}c=u=null;if(d){d()}}};o.push(c);s=c;t.insertBefore(c,t.firstChild);s=null}}}}();var m=function(){var e={};return{add:function(t,r){i("dependentChain","add");i("dependentChain","moduleId: "+t);i("dependentChain","depId: "+r);var n=e[r]=e[r]||[];n.push(t)},get:function(t){return e[t]},clear:function(t){i("dependentChain","remove");i("dependentChain","depId: "+t);delete e[t]}}}();var b=function(){var e=0,r=[];function a(){e++;return"#"+e+"#"}function o(){var e;while(e=r[0]){if(e.isReady()){r.shift();delete x.all[e.id()];e.execute()}else{break}}}var s={init:function(){var e=this,t=n.preload.slice(),r=0,a=0;for(var s=0;s<t.length;s++){if(t[s]){a++;g.load(y(t[s]),function(){r++;if(r>=a){i("taskManager","preload complete");delete e._scripts;o()}})}}if(a){e._scripts=t}},id:function(){return"#preload#"},isReady:function(){return this._scripts===t},execute:function(){}};return{add:function(e){if(!n.preload){s=null}if(s){r.push(s);s.init();s=null}r.push(e);e.setId(a())},tryExecute:o}}();var _=e.require=function(e,t){i("globalRequire",e);b.add(new x(null,t,d(e)?e:[e]))};_.resolve=function(e){return y(e)};function x(e,t,r){this._factory=t;this._deps=r;i("module","create: "+(e||""));if(e){this.setId(e)}else{x.anonymous=this}}u(x,{require:function(e,t){e=y(e,t);var r=x.all[e];if(r){return r.exports()}else{throw new Error('module "'+e+'" does not exist')}},isReady:function(e){var t=x.all[e];return t&&t.isReady()},load:function(e){if(x.all[e]){return}i("Module","load: "+e);g.load(e,function(){if(x.all[e]){return}if(!o&&x.anonymous){x.anonymous.setId(e)}if(!x.all[e]){throw new Error('module "'+e+'" lost')}})},all:{}});u(x.prototype,{setId:function(e){var t=this;if(t._id){throw new Error("module id cannot be changed")}i("module","setId: "+e);t._id=e;if(x.anonymous===t){delete x.anonymous}if(x.all[e]){return}else{x.all[e]=t}t._dirname=t.isTask()?"":e.substr(0,e.lastIndexOf("/")+1);var r=t._deps;if(r){var n=t._readyStates={},a;for(var o=0;o<r.length;o++){if(!r[o]){continue}r[o]=a=y(r[o],t._dirname);if(!x.isReady(a)){m.add(e,a);n[a]=true;i("module","notReady: "+a);x.load(a)}}if(s(n)){delete t._readyStates}}t._checkReady()},_checkReady:function(){var e=this.isReady(),t=this.id();i("module","id: "+t);i("module","checkReady: "+e);if(e){if(this.isTask()){b.tryExecute()}else{var r=m.get(t);if(r){for(var n=r.length-1,a;n>=0;n--){a=x.all[r[n]];if(a){a.notifyReady(t);i("module","notifyTo: "+r[n])}}m.clear(t)}}}},id:function(){return this._id},isTask:function(){return/^#\d+#$/.test(this._id)},isReady:function(){return this._readyStates===t},notifyReady:function(e){var t=this._readyStates;if(t){delete t[e];if(s(t)){delete this._readyStates}}this._checkReady()},execute:function(){i("module","execute: "+this.id());var e=this._deps,t=[];for(var r=e.length-1;r>=0;r--){t[r]=x.all[e[r]].exports()}if(this._factory){this._factory.apply(window,t)}},exports:function(){var e=this,t=e._executedModule;if(!t){t={id:e.id()};i("module","export: "+t.id);if(typeof e._factory==="function"){t.exports={};var r=function(t){return x.require(t,e._dirname)};r.async=function(t,r){if(!d(t)){t=[t]}for(var n=t.length-1;n>=0;n--){t[n]=y(t[n],e._dirname)}_(t,r)};r.resolve=function(t){return y(t,e._dirname)};var n=e._factory.call(window,r,t.exports,t);if(!!n){t.exports=n}}else{t.exports=e._factory}e._executedModule=t}return t.exports}});e.define=function(){var e,t,r,n=arguments;switch(n.length){case 1:r=n[0];t=l(r.toString());break;case 2:t=n[0];r=n[1];break;case 3:e=y(n[0]);t=n[1];r=n[2];break}if(!e&&o){var a=g.getCurrentScript();if(a){e=a.src}}i("globalDefine",e||"");new x(e,r,d(t)?t:[t])};r.config=function(e){var t=function(e){if(!c(e)){e=h(e)}if(e.charAt(e.length-1)!=="/"){e+="/"}return e};var r=n.map;u(n,e);if(r&&n.map!==r){n.map=r.concat(n.map)}if(e.libPath){n.libPath=t(n.libPath)}if(e.appPath){n.appPath=t(n.appPath)}};r.config({libPath:"./",appPath:"./",debug:function(){var t=false,r=e.location.search;if(/[?|&]debug(&|$)/.test(r)){t=true}else if(/[?|&]nondebug(&|$)/.test(r)){t=false}return t}()});!function(){var e=a.getElementsByTagName("script"),t;for(var r=0;r<e.length;r++){t=e[r].getAttribute("data-main");if(t&&/bowl|jraiser/i.test(e[r].src)){_(t);break}}}()}(window);