/*!
 * JRaiser 2 Javascript Library
 * selectmenu - v1.1.0 (2015-08-03T16:55:27+0800)
 * http://jraiser.org/ | Released under MIT license
 */
define("selectmenu/1.1.x/",["dom/1.1.x/","widget/1.1.x/","tmpl/2.1.x/","uadetector/1.0.x/","draggable/1.1.x/","scrollbar/1.1.x/"],function(e,t,n){"use strict";var s=e("widget/1.1.x/"),i=e("tmpl/2.1.x/"),u=e("dom/1.1.x/"),l=e("scrollbar/1.1.x/"),a=new i({SELECTMENU:'<div class="ui-selectmenu"><div class="ui-selectmenu__button"><span class="ui-selectmenu__button__text"><%=defaultText%></span><span class="ui-selectmenu__button__icon"></span></div><input<% if (name) { %> name="<%=name%>"<% } %> type="hidden" /><div class="ui-selectmenu__layer" style="display: none;"><div class="ui-selectmenu__layer__inner"><ul class="ui-selectmenu__menu"></ul></div></div></div>',MENU_ITEMS:'<% data.forEach(function(d) { %><li class="ui-selectmenu__menu__item" data-value="<%=(d.value == null ? d.text : d.value)%>"><%=d.text%></li><% }); %>'});return s.create({_init:function(e){var t=this,n=t._wrapper=u(a.render("SELECTMENU",{name:e.name,defaultText:e.defaultText||""}));e.appendTo.append(n);var s;n.click(function(){s=!0}),t._onDOMEvent(u(document),"click",function(){s||t.hideLayer(),s=!1}),n.find(".ui-selectmenu__button").click(function(){t.toggleLayer()}),t._menuList=n.find(".ui-selectmenu__menu").on("click",function(e){t.hideLayer(),t.val(this.getAttribute("data-value"),e)},{delegator:".ui-selectmenu__menu__item"}),e.menuItems&&t.addMenuItems(e.menuItems),null!=e.value&&t.val(e.value)},_destroy:function(){this._wrapper.remove()},showLayer:function(){var e=this;e._layerVisible||(e._wrapper.addClass("ui-selectmenu--expanded"),e._layerVisible=!0,e._menuItems&&e._menuItems.length&&(e._wrapper.find(".ui-selectmenu__layer").css("display","block"),e._refresh()))},hideLayer:function(){this._layerVisible&&(this._wrapper.removeClass("ui-selectmenu--expanded").find(".ui-selectmenu__layer").css("display","none"),this._layerVisible=!1)},toggleLayer:function(){this._layerVisible?this.hideLayer():this.showLayer()},addMenuItems:function(e){var t=this;t._menuItems=t._menuItems||[],e&&e.length&&(t._menuItems=t._menuItems.concat(e),t._refresh()),t._menuItems.length?t._wrapper.removeClass("ui-selectmenu--empty"):t._wrapper.addClass("ui-selectmenu--empty")},_refresh:function(){for(var e=this,t=e._menuItems,n=e._value,s=t.length-1;s>=0&&String(t[s].value)!==n;s--);var i;if(-1===s?(i=e._options.defaultText,n=""):i=t[s].text,e._wrapper.find(".ui-selectmenu__button__text").text(i),e._layerVisible){if(!e._menuList.rendered){e._menuList.html(a.render("MENU_ITEMS",{data:t}));var u=e._wrapper.find(".ui-selectmenu__layer").css("height",""),r=e._menuList.outerHeight(!0);r<=u.height()&&("border-box"===u.css("box-sizing")&&(r+=u.outerHeight()-u.height()),u.css("height",r)),e._menuList.rendered=!0}e._menuList.children().eq(s).addClass("ui-selectmenu__menu__item--selected").siblings().removeClass("ui-selectmenu__menu__item--selected"),e._scrollbar?e._scrollbar.refresh():e._scrollbar=new l({scrollBody:e._menuList,mouseWheelStep:35,scrollPageOnEnd:!1})}e._value=n,e._wrapper.find("input").val(n)},val:function(e,t){var n=this,s=n._value;return arguments.length?(e=String(e),void(e!==s&&(n._value=e,n._refresh(),n._trigger("change",{sourceEvent:t,newValue:n._value,oldValue:s})))):s}})});