/*!
 * jRaiser 2 Javascript Library
 * dom-event - v1.0.0 (2013-03-05T22:07:27+0800)
 * http://jraiser.org/ | Released under MIT license
 */
define("dom/1.0.x/dom-event",["base/1.0.x/","sizzle/1.8.x/","dom/1.0.x/dom-base","dom/1.0.x/dom-event-arg"],function(e,t,n){"use strict";function u(e){return s.isWindow(e)||!s.isXMLNode(e)&&(e.nodeType===1||e.nodeType===9)}function a(e){e=e.toLowerCase();var t=e.indexOf("."),n;return t!==-1&&(n=e.substr(t+1),e=e.substr(0,t)),[e,n]}function w(e,t){if(g)return;var n=this,r=(m[s.uniqueId(n)]||{})[e.type];r&&(t&&typeof t!="string"&&(t=null),e=c.fix(e),r.forEach(function(r){if(t&&r.namespace!==t)return;var s;if(r.delegator){var o=i(r.delegator,n);if(o.indexOf(e.target)===-1)return;s=e.target}else s=n;e.data=r.data;var u=r.handle?r.handle.call(s,r,e):r.handler.call(s,e);u===!1&&e.preventDefault(),e.cancelBubble===!0&&e.stopPropagation()}))}function E(e,t,n,i,s,o){var u=b[n],a=u?u.bindType:n,f=t[a];if(f){if(o.allowRepeated===!1)for(var l=f.length-1;l>=0;l--)if(f[l].handler===i&&f[l].bindType===a)return}else t[a]=[],d(e,a,s);delete o.allowRepeated,t[a].push(r.mix({handler:i,bindType:n,handle:u?u.handle:null},o,{overwrite:!1}))}function S(e,t,n,r,i,s){var o=b[n],u=o?o.bindType:n;if(u){var a=t[u];if(a){for(var f=a.length-1;f>=0;f--)n===a[f].bindType&&(r===a[f].handler||!r)&&(s==null||s===a[f].namespace)&&a.splice(f,1);a.length||(delete t[u],v(e,u,i))}}else for(var f in t)v(e,f,i)}function x(e,t,n,i,o){if(!u(e))return;o||(t=f(t));var l=s.uniqueId(e),c=m[l]=m[l]||{},h=y[l]=y[l]||function(){w.apply(e,arguments)};t.forEach(function(t){t=a(t),E(e,c,t[0],n,h,r.mix({namespace:t[1]},i))})}function T(e,t,n,i){if(!u(e))return;i||(t=f(t));var o=s.uniqueId(e),l=m[o],c=y[o];if(!l||!c)return;var h;t?(t.forEach(function(t){t=a(t),t[0]&&S(e,l,t[0],n,c,t[1])}),r.isEmptyObject(l)&&(h=!0)):(S(e,l,null,null,c),h=!0),h&&(delete m[o],delete y[o])}function L(e,t,n){if(!u(e)||!t)return;t=a(t),n=n||{};var i=c.fix(r.extend({type:t[0],isTrigger:!0},N[l[t[0]]])),s=e,o=n.bubbles!=null?n.bubbles:k[t[0]];do w.call(e,i,t[1]),e=e.parentNode;while(o&&e&&!i.isPropagationStopped());C[t[0]]&&!i.isDefaultPrevented()&&(g=!0,s[t[0]](),g=!1)}var r=e("base/1.0.x/"),i=e("sizzle/1.8.x/"),s=e("./dom-base"),o=e("./dom-event-arg"),f=s.splitBySpace,l={},c={props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),keyHook:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHook:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement touches".split(" "),filter:function(e,t){var n,i,s,o=t.button,u=t.fromElement,a=t.touches;return a&&a.length===1&&(e.pageX=a[0].pageX,e.pageY=a[0].pageY),e.pageX==null&&t.clientX!=null&&(n=e.target.ownerDocument||document,i=n.documentElement,s=n.body,e.pageX=t.clientX+(i&&i.scrollLeft||s&&s.scrollLeft||0)-(i&&i.clientLeft||s&&s.clientLeft||0),e.pageY=t.clientY+(i&&i.scrollTop||s&&s.scrollTop||0)-(i&&i.clientTop||s&&s.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?t.toElement:u),!e.which&&!r.isUndefined(o)&&(e.which=o&1?1:o&2?3:o&4?2:0),e}},fix:function(e){if(e instanceof o)return e;var t=e,n=this[l[e.type]+"Hook"],i=n&&n.props?this.props.concat(n.props):this.props;return e=r.mix(new o(e),t,{whiteList:i}),e.target||(e.target=t.srcElement||document),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,n&&n.filter?n.filter(e,t):e}},h,p;document.addEventListener?(h=function(e,t,n){e.addEventListener(t,n,!1)},p=function(e,t,n){e.removeEventListener(t,n,!1)}):document.attachEvent&&(h=function(e,t,n){e.attachEvent("on"+t,n)},p=function(e,t,n){e.detachEvent("on"+t,n)});var d=function(e,t,n){"on"+t in e&&h.apply(this,arguments)},v=function(e,t,n){"on"+t in e&&p.apply(this,arguments)},m={},g=!1,y={},b={};r.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b[t]={bindType:e,handle:function(n,r){var s=r.relatedTarget,o;if(!r||s!==this&&!i.contains(this,s))r.type=t,o=n.handler.call(this,r),r.type=e;return o}}});var N={key:{view:window,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:0,charCode:0},mouse:{view:window,screenX:0,screenY:0,clientX:0,clientY:0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,button:0},ui:{view:window}},C={focus:!0,blur:!0,click:!0,reset:!0,submit:!0},k={scroll:!0,resize:!0,select:!0,error:!0,reset:!0,submit:!0,change:!0,abort:!0};n.exports={on:x,off:T,trigger:L,shortcuts:{on:function(e,t,n){return e=f(e),e&&this.forEach(function(r){x(r,e,t,n,!0)}),this},off:function(e,t){return e=f(e),this.forEach(function(n){T(n,e,t,!0)}),this},trigger:function(e,t){return this.forEach(function(n){L(n,e,t)}),this}}};var A=n.exports.shortcuts,O=/^key/,M=/^(?:mouse|contextmenu|touch)|click/;"blur focus load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave touchstart touchmove touchend change select submit keydown keypress keyup error contextmenu".split(" ").forEach(function(e){O.test(e)?(k[e]=!0,l[e]="key"):M.test(e)&&(k[e]=!0,l[e]="mouse"),A[e]=function(t,n){return arguments.length?this.on(e,t,n):this.trigger(e)}}),O=null,M=null})