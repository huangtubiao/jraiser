/*!
 * JRaiser 2 Javascript Library
 * underscore - v1.8.3 (2015-04-03T11:05:22+0800)
 * http://jraiser.org/ | Released under MIT license
 *
 * Include underscore.js (http://underscorejs.org/)
 */
define("underscore/1.8.x/",null,function(n,r,t){function e(n){function r(r,t,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=t(e,r[a],a,r)}return e}return function(t,e,u,i){e=x(e,i,4);var o=!E(t)&&j.keys(t),a=(o||t).length,c=n>0?0:a-1;return arguments.length<3&&(u=t[o?o[c]:c],c+=n),r(t,e,u,o,c,a)}}function u(n){return function(r,t,e){t=w(t,e);for(var u=S(r),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(t(r[i],i,r))return i;return-1}}function i(n,r,t){return function(e,u,i){var o=0,a=S(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(t&&i&&a)return i=t(e,u),e[i]===u?i:-1;if(u!==u)return i=r(h.call(e,o,a),j.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function o(n,r){var t=T.length,e=n.constructor,u=j.isFunction(e)&&e.prototype||l,i="constructor";for(j.has(n,i)&&!j.contains(r,i)&&r.push(i);t--;)i=T[t],i in n&&n[i]!==u[i]&&!j.contains(r,i)&&r.push(i)}var a=this,c=a._,f=Array.prototype,l=Object.prototype,s=Function.prototype,p=f.push,h=f.slice,v=l.toString,g=l.hasOwnProperty,y=Array.isArray,m=Object.keys,d=s.bind,b=Object.create,_=function(){},j=function(n){return n instanceof j?n:this instanceof j?void(this._wrapped=n):new j(n)};"undefined"!=typeof r?("undefined"!=typeof t&&t.exports&&(r=t.exports=j),r._=j):a._=j,j.VERSION="1.8.3";var x=function(n,r,t){if(void 0===r)return n;switch(null==t?3:t){case 1:return function(t){return n.call(r,t)};case 2:return function(t,e){return n.call(r,t,e)};case 3:return function(t,e,u){return n.call(r,t,e,u)};case 4:return function(t,e,u,i){return n.call(r,t,e,u,i)}}return function(){return n.apply(r,arguments)}},w=function(n,r,t){return null==n?j.identity:j.isFunction(n)?x(n,r,t):j.isObject(n)?j.matcher(n):j.property(n)};j.iteratee=function(n,r){return w(n,r,1/0)};var A=function(n,r){return function(t){var e=arguments.length;if(2>e||null==t)return t;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];r&&void 0!==t[f]||(t[f]=i[f])}return t}},O=function(n){if(!j.isObject(n))return{};if(b)return b(n);_.prototype=n;var r=new _;return _.prototype=null,r},k=function(n){return function(r){return null==r?void 0:r[n]}},F=Math.pow(2,53)-1,S=k("length"),E=function(n){var r=S(n);return"number"==typeof r&&r>=0&&F>=r};j.each=j.forEach=function(n,r,t){r=x(r,t);var e,u;if(E(n))for(e=0,u=n.length;u>e;e++)r(n[e],e,n);else{var i=j.keys(n);for(e=0,u=i.length;u>e;e++)r(n[i[e]],i[e],n)}return n},j.map=j.collect=function(n,r,t){r=w(r,t);for(var e=!E(n)&&j.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=r(n[a],a,n)}return i},j.reduce=j.foldl=j.inject=e(1),j.reduceRight=j.foldr=e(-1),j.find=j.detect=function(n,r,t){var e;return e=E(n)?j.findIndex(n,r,t):j.findKey(n,r,t),void 0!==e&&-1!==e?n[e]:void 0},j.filter=j.select=function(n,r,t){var e=[];return r=w(r,t),j.each(n,function(n,t,u){r(n,t,u)&&e.push(n)}),e},j.reject=function(n,r,t){return j.filter(n,j.negate(w(r)),t)},j.every=j.all=function(n,r,t){r=w(r,t);for(var e=!E(n)&&j.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!r(n[o],o,n))return!1}return!0},j.some=j.any=function(n,r,t){r=w(r,t);for(var e=!E(n)&&j.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(r(n[o],o,n))return!0}return!1},j.contains=j.includes=j.include=function(n,r,t,e){return E(n)||(n=j.values(n)),("number"!=typeof t||e)&&(t=0),j.indexOf(n,r,t)>=0},j.invoke=function(n,r){var t=h.call(arguments,2),e=j.isFunction(r);return j.map(n,function(n){var u=e?r:n[r];return null==u?u:u.apply(n,t)})},j.pluck=function(n,r){return j.map(n,j.property(r))},j.where=function(n,r){return j.filter(n,j.matcher(r))},j.findWhere=function(n,r){return j.find(n,j.matcher(r))},j.max=function(n,r,t){var e,u,i=-(1/0),o=-(1/0);if(null==r&&null!=n){n=E(n)?n:j.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else r=w(r,t),j.each(n,function(n,t,e){u=r(n,t,e),(u>o||u===-(1/0)&&i===-(1/0))&&(i=n,o=u)});return i},j.min=function(n,r,t){var e,u,i=1/0,o=1/0;if(null==r&&null!=n){n=E(n)?n:j.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else r=w(r,t),j.each(n,function(n,t,e){u=r(n,t,e),(o>u||u===1/0&&i===1/0)&&(i=n,o=u)});return i},j.shuffle=function(n){for(var r,t=E(n)?n:j.values(n),e=t.length,u=Array(e),i=0;e>i;i++)r=j.random(0,i),r!==i&&(u[i]=u[r]),u[r]=t[i];return u},j.sample=function(n,r,t){return null==r||t?(E(n)||(n=j.values(n)),n[j.random(n.length-1)]):j.shuffle(n).slice(0,Math.max(0,r))},j.sortBy=function(n,r,t){return r=w(r,t),j.pluck(j.map(n,function(n,t,e){return{value:n,index:t,criteria:r(n,t,e)}}).sort(function(n,r){var t=n.criteria,e=r.criteria;if(t!==e){if(t>e||void 0===t)return 1;if(e>t||void 0===e)return-1}return n.index-r.index}),"value")};var M=function(n){return function(r,t,e){var u={};return t=w(t,e),j.each(r,function(e,i){var o=t(e,i,r);n(u,e,o)}),u}};j.groupBy=M(function(n,r,t){j.has(n,t)?n[t].push(r):n[t]=[r]}),j.indexBy=M(function(n,r,t){n[t]=r}),j.countBy=M(function(n,r,t){j.has(n,t)?n[t]++:n[t]=1}),j.toArray=function(n){return n?j.isArray(n)?h.call(n):E(n)?j.map(n,j.identity):j.values(n):[]},j.size=function(n){return null==n?0:E(n)?n.length:j.keys(n).length},j.partition=function(n,r,t){r=w(r,t);var e=[],u=[];return j.each(n,function(n,t,i){(r(n,t,i)?e:u).push(n)}),[e,u]},j.first=j.head=j.take=function(n,r,t){return null==n?void 0:null==r||t?n[0]:j.initial(n,n.length-r)},j.initial=function(n,r,t){return h.call(n,0,Math.max(0,n.length-(null==r||t?1:r)))},j.last=function(n,r,t){return null==n?void 0:null==r||t?n[n.length-1]:j.rest(n,Math.max(0,n.length-r))},j.rest=j.tail=j.drop=function(n,r,t){return h.call(n,null==r||t?1:r)},j.compact=function(n){return j.filter(n,j.identity)};var I=function(n,r,t,e){for(var u=[],i=0,o=e||0,a=S(n);a>o;o++){var c=n[o];if(E(c)&&(j.isArray(c)||j.isArguments(c))){r||(c=I(c,r,t));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else t||(u[i++]=c)}return u};j.flatten=function(n,r){return I(n,r,!1)},j.without=function(n){return j.difference(n,h.call(arguments,1))},j.uniq=j.unique=function(n,r,t,e){j.isBoolean(r)||(e=t,t=r,r=!1),null!=t&&(t=w(t,e));for(var u=[],i=[],o=0,a=S(n);a>o;o++){var c=n[o],f=t?t(c,o,n):c;r?(o&&i===f||u.push(c),i=f):t?j.contains(i,f)||(i.push(f),u.push(c)):j.contains(u,c)||u.push(c)}return u},j.union=function(){return j.uniq(I(arguments,!0,!0))},j.intersection=function(n){for(var r=[],t=arguments.length,e=0,u=S(n);u>e;e++){var i=n[e];if(!j.contains(r,i)){for(var o=1;t>o&&j.contains(arguments[o],i);o++);o===t&&r.push(i)}}return r},j.difference=function(n){var r=I(arguments,!0,!0,1);return j.filter(n,function(n){return!j.contains(r,n)})},j.zip=function(){return j.unzip(arguments)},j.unzip=function(n){for(var r=n&&j.max(n,S).length||0,t=Array(r),e=0;r>e;e++)t[e]=j.pluck(n,e);return t},j.object=function(n,r){for(var t={},e=0,u=S(n);u>e;e++)r?t[n[e]]=r[e]:t[n[e][0]]=n[e][1];return t},j.findIndex=u(1),j.findLastIndex=u(-1),j.sortedIndex=function(n,r,t,e){t=w(t,e,1);for(var u=t(r),i=0,o=S(n);o>i;){var a=Math.floor((i+o)/2);t(n[a])<u?i=a+1:o=a}return i},j.indexOf=i(1,j.findIndex,j.sortedIndex),j.lastIndexOf=i(-1,j.findLastIndex),j.range=function(n,r,t){null==r&&(r=n||0,n=0),t=t||1;for(var e=Math.max(Math.ceil((r-n)/t),0),u=Array(e),i=0;e>i;i++,n+=t)u[i]=n;return u};var N=function(n,r,t,e,u){if(!(e instanceof r))return n.apply(t,u);var i=O(n.prototype),o=n.apply(i,u);return j.isObject(o)?o:i};j.bind=function(n,r){if(d&&n.bind===d)return d.apply(n,h.call(arguments,1));if(!j.isFunction(n))throw new TypeError("Bind must be called on a function");var t=h.call(arguments,2),e=function(){return N(n,e,r,this,t.concat(h.call(arguments)))};return e},j.partial=function(n){var r=h.call(arguments,1),t=function(){for(var e=0,u=r.length,i=Array(u),o=0;u>o;o++)i[o]=r[o]===j?arguments[e++]:r[o];for(;e<arguments.length;)i.push(arguments[e++]);return N(n,t,this,this,i)};return t},j.bindAll=function(n){var r,t,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(r=1;e>r;r++)t=arguments[r],n[t]=j.bind(n[t],n);return n},j.memoize=function(n,r){var t=function(e){var u=t.cache,i=""+(r?r.apply(this,arguments):e);return j.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return t.cache={},t},j.delay=function(n,r){var t=h.call(arguments,2);return setTimeout(function(){return n.apply(null,t)},r)},j.defer=j.partial(j.delay,j,1),j.throttle=function(n,r,t){var e,u,i,o=null,a=0;t||(t={});var c=function(){a=t.leading===!1?0:j.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=j.now();a||t.leading!==!1||(a=f);var l=r-(f-a);return e=this,u=arguments,0>=l||l>r?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||t.trailing===!1||(o=setTimeout(c,l)),i}},j.debounce=function(n,r,t){var e,u,i,o,a,c=function(){var f=j.now()-o;r>f&&f>=0?e=setTimeout(c,r-f):(e=null,t||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=j.now();var f=t&&!e;return e||(e=setTimeout(c,r)),f&&(a=n.apply(i,u),i=u=null),a}},j.wrap=function(n,r){return j.partial(r,n)},j.negate=function(n){return function(){return!n.apply(this,arguments)}},j.compose=function(){var n=arguments,r=n.length-1;return function(){for(var t=r,e=n[r].apply(this,arguments);t--;)e=n[t].call(this,e);return e}},j.after=function(n,r){return function(){return--n<1?r.apply(this,arguments):void 0}},j.before=function(n,r){var t;return function(){return--n>0&&(t=r.apply(this,arguments)),1>=n&&(r=null),t}},j.once=j.partial(j.before,2);var B=!{toString:null}.propertyIsEnumerable("toString"),T=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];j.keys=function(n){if(!j.isObject(n))return[];if(m)return m(n);var r=[];for(var t in n)j.has(n,t)&&r.push(t);return B&&o(n,r),r},j.allKeys=function(n){if(!j.isObject(n))return[];var r=[];for(var t in n)r.push(t);return B&&o(n,r),r},j.values=function(n){for(var r=j.keys(n),t=r.length,e=Array(t),u=0;t>u;u++)e[u]=n[r[u]];return e},j.mapObject=function(n,r,t){r=w(r,t);for(var e,u=j.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=r(n[e],e,n);return o},j.pairs=function(n){for(var r=j.keys(n),t=r.length,e=Array(t),u=0;t>u;u++)e[u]=[r[u],n[r[u]]];return e},j.invert=function(n){for(var r={},t=j.keys(n),e=0,u=t.length;u>e;e++)r[n[t[e]]]=t[e];return r},j.functions=j.methods=function(n){var r=[];for(var t in n)j.isFunction(n[t])&&r.push(t);return r.sort()},j.extend=A(j.allKeys),j.extendOwn=j.assign=A(j.keys),j.findKey=function(n,r,t){r=w(r,t);for(var e,u=j.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],r(n[e],e,n))return e},j.pick=function(n,r,t){var e,u,i={},o=n;if(null==o)return i;j.isFunction(r)?(u=j.allKeys(o),e=x(r,t)):(u=I(arguments,!1,!1,1),e=function(n,r,t){return r in t},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},j.omit=function(n,r,t){if(j.isFunction(r))r=j.negate(r);else{var e=j.map(I(arguments,!1,!1,1),String);r=function(n,r){return!j.contains(e,r)}}return j.pick(n,r,t)},j.defaults=A(j.allKeys,!0),j.create=function(n,r){var t=O(n);return r&&j.extendOwn(t,r),t},j.clone=function(n){return j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n},j.tap=function(n,r){return r(n),n},j.isMatch=function(n,r){var t=j.keys(r),e=t.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=t[i];if(r[o]!==u[o]||!(o in u))return!1}return!0};var R=function(n,r,t,e){if(n===r)return 0!==n||1/n===1/r;if(null==n||null==r)return n===r;n instanceof j&&(n=n._wrapped),r instanceof j&&(r=r._wrapped);var u=v.call(n);if(u!==v.call(r))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+r;case"[object Number]":return+n!==+n?+r!==+r:0===+n?1/+n===1/r:+n===+r;case"[object Date]":case"[object Boolean]":return+n===+r}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof r)return!1;var o=n.constructor,a=r.constructor;if(o!==a&&!(j.isFunction(o)&&o instanceof o&&j.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in r)return!1}t=t||[],e=e||[];for(var c=t.length;c--;)if(t[c]===n)return e[c]===r;if(t.push(n),e.push(r),i){if(c=n.length,c!==r.length)return!1;for(;c--;)if(!R(n[c],r[c],t,e))return!1}else{var f,l=j.keys(n);if(c=l.length,j.keys(r).length!==c)return!1;for(;c--;)if(f=l[c],!j.has(r,f)||!R(n[f],r[f],t,e))return!1}return t.pop(),e.pop(),!0};j.isEqual=function(n,r){return R(n,r)},j.isEmpty=function(n){return null==n?!0:E(n)&&(j.isArray(n)||j.isString(n)||j.isArguments(n))?0===n.length:0===j.keys(n).length},j.isElement=function(n){return!(!n||1!==n.nodeType)},j.isArray=y||function(n){return"[object Array]"===v.call(n)},j.isObject=function(n){var r=typeof n;return"function"===r||"object"===r&&!!n},j.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){j["is"+n]=function(r){return v.call(r)==="[object "+n+"]"}}),j.isArguments(arguments)||(j.isArguments=function(n){return j.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(j.isFunction=function(n){return"function"==typeof n||!1}),j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},j.isNaN=function(n){return j.isNumber(n)&&n!==+n},j.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===v.call(n)},j.isNull=function(n){return null===n},j.isUndefined=function(n){return void 0===n},j.has=function(n,r){return null!=n&&g.call(n,r)},j.noConflict=function(){return a._=c,this},j.identity=function(n){return n},j.constant=function(n){return function(){return n}},j.noop=function(){},j.property=k,j.propertyOf=function(n){return null==n?function(){}:function(r){return n[r]}},j.matcher=j.matches=function(n){return n=j.extendOwn({},n),function(r){return j.isMatch(r,n)}},j.times=function(n,r,t){var e=Array(Math.max(0,n));r=x(r,t,1);for(var u=0;n>u;u++)e[u]=r(u);return e},j.random=function(n,r){return null==r&&(r=n,n=0),n+Math.floor(Math.random()*(r-n+1))},j.now=Date.now||function(){return(new Date).getTime()};var q={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},K=j.invert(q),z=function(n){var r=function(r){return n[r]},t="(?:"+j.keys(n).join("|")+")",e=RegExp(t),u=RegExp(t,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,r):n}};j.escape=z(q),j.unescape=z(K),j.result=function(n,r,t){var e=null==n?void 0:n[r];return void 0===e&&(e=t),j.isFunction(e)?e.call(n):e};var D=0;j.uniqueId=function(n){var r=++D+"";return n?n+r:r},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var L=/(.)^/,P={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},C=/\\|'|\r|\n|\u2028|\u2029/g,J=function(n){return"\\"+P[n]};j.template=function(n,r,t){!r&&t&&(r=t),r=j.defaults({},r,j.templateSettings);var e=RegExp([(r.escape||L).source,(r.interpolate||L).source,(r.evaluate||L).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(r,t,e,o,a){return i+=n.slice(u,a).replace(C,J),u=a+r.length,t?i+="'+\n((__t=("+t+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),r}),i+="';\n",r.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(r.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,j)},f=r.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},j.chain=function(n){var r=j(n);return r._chain=!0,r};var U=function(n,r){return n._chain?j(r).chain():r};return j.mixin=function(n){j.each(j.functions(n),function(r){var t=j[r]=n[r];j.prototype[r]=function(){var n=[this._wrapped];return p.apply(n,arguments),U(this,t.apply(j,n))}})},j.mixin(j),j.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var r=f[n];j.prototype[n]=function(){var t=this._wrapped;return r.apply(t,arguments),"shift"!==n&&"splice"!==n||0!==t.length||delete t[0],U(this,t)}}),j.each(["concat","join","slice"],function(n){var r=f[n];j.prototype[n]=function(){return U(this,r.apply(this._wrapped,arguments))}}),j.prototype.value=function(){return this._wrapped},j.prototype.valueOf=j.prototype.toJSON=j.prototype.value,j.prototype.toString=function(){return""+this._wrapped},j});