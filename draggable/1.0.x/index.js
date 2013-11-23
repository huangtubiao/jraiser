/*!
 * jRaiser 2 Javascript Library
 * draggable - v1.0.0 (2013-11-23T10:58:26+0800)
 * http://jraiser.org/ | Released under MIT license
 */
define("draggable/1.0.x/",["widget/1.0.x/","dom/1.0.x/",null],function(e,t,n){"use strict";var r=e("base/1.0.x/"),i=e("widget/1.0.x/"),s=e("dom/1.0.x/"),o=s(window),u=s(document),a,f,l;return"ontouchstart"in document?(a="touchstart",f="touchend",l="touchmove"):(a="mousedown",f="mouseup",l="mousemove"),i.create(function(e){var t=this;t._wrapper=e.wrapper,t._dragTrigger=t._wrapper.find(".draggable-trigger"),t._dragTrigger.length||(t._dragTrigger=t._wrapper)},{_init:function(e){var t=this;t.drag=function(e){var n=t._startPos;if(!n||e.pageX==null||e.pageY==null)return;var i={left:e.pageX-n.left,top:e.pageY-n.top};t._isFixedPosition&&(i.left-=s(window).scrollLeft(),i.top-=s(window).scrollTop());var o=t._boundary;if(o){var u=t._wrapperSize,a,f;t._isFixedPosition?a=r.extend({},i):(a=t._wrapper.offset(),a.left+=i.left-t._oldPos.left,a.top+=i.top-t._oldPos.top,f=t._wrapper.offsetParent().offset()),a.right=a.left+u.width,a.bottom=a.top+u.height,f=f||{top:0,left:0},o.right!=null&&a.right>o.right&&(i.left=o.right-u.width-f.left),o.left!=null&&a.left<o.left&&(i.left=o.left-f.left),o.bottom!=null&&a.bottom>o.bottom&&(i.top=o.bottom-u.height-f.top),o.top!=null&&a.top<o.top&&(i.top=o.top-f.top)}t._wrapper.css(i),t._oldPos=i,t.trigger("drag",r.mix({position:i},e,{overwrite:!1}))},t.end=function(e){if(!t._startPos||e.pageX==null||e.pageY==null)return;t._wrapper.each(function(e){e.releaseCapture&&e.releaseCapture()}),u.off(l,t.drag),f&&u.off(f,t.end),o.off("blur",t.end),delete t._startPos,delete t._oldPos,delete t._wrapperSize,delete t._boundary,delete t._isFixedPosition,t.trigger("dragend",e)},t.start=function(e){if(t._startPos||e.pageX==null||e.pageY==null||t.trigger("dragstart",e).isDefaultPrevented())return;e.preventDefault();var n=t._wrapper,r=n.position(),i=n.css("position");i!=="fixed"&&i!=="absolute"&&(i="absolute",n.css("position",i)),t._isFixedPosition=i==="fixed",t._startPos={left:e.pageX-r.left,top:e.pageY-r.top},t._oldPos=r;var s=t._options.boundary;if(s){if(s==="window"){var a=document.documentElement;t._boundary=t._isFixedPosition?{left:0,top:0,right:a.clientWidth,bottom:a.clientHeight}:{left:0,top:0,right:Math.max(a.scrollWidth,a.clientWidth),bottom:Math.max(a.scrollHeight,a.clientHeight)}}else if(s==="parent"&&!t._isFixedPosition){var c=t._wrapper.offsetParent();c.length&&(t._boundary={left:c.offset().left,right:c.offset().left+c.innerWidth(),top:c.offset().top,bottom:c.offset().top+c.innerHeight()})}else typeof s.offset=="function"?(t._boundary=s.offset(),t._boundary.right=t._boundary.left+s.innerWidth(),t._boundary.bottom=t._boundary.top+s.innerHeight()):t._boundary=s;t._wrapperSize={width:t._wrapper.outerWidth(),height:t._wrapper.outerHeight()}}n.each(function(e){e.setCapture&&e.setCapture()}),u.on(l,t.drag),f&&u.on(f,t.end),o.on("blur",t.end)},t._dragTrigger.on(a,t.start)},_destroy:function(e){var t=this;t._startPos&&t.end(),t._dragTrigger.off(a,t.start),delete t.drag,delete t.end,delete t.start}})})