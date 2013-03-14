/*!
 * jRaiser 2 Javascript Library
 * paginator - v1.0.0 (2013-03-14T16:58:14+0800)
 * http://jraiser.org/ | Released under MIT license
 */
define("paginator/1.0.x/",["widget/1.0.x/","tmpl/1.0.x/"],function(e,t,n){"use strict";var r=e("widget/1.0.x/"),i=e("tmpl/1.0.x/");return r.create(function(e){},{_init:function(e){var t=this,n=e.wrapper;if(!n)return;n.empty().html(i.render(e.template,{currentPage:e.currentPage,totalPages:e.totalPages,pageNumbers:t._build(),nextText:e.nextText,prevText:e.prevText})),n.find("a").click(function(e){e.preventDefault(),t.trigger("click",{page:parseInt(this.getAttribute("data-page"))||1})})},_destroy:function(e){e.wrapper&&e.wrapper.empty()},_build:function(){var e=this._options,t=e.totalPages;if(t<1)return;var n=e.numberOfPagesToShow,r=parseInt((n-1)/2),i=e.currentPage||1,s=[],o=i-r,u=i+r,a=o-1,f=t-u;f<0&&a>0?(u=t,o=Math.max(1,o+f)):f>0&&a<0?(o=1,u=Math.min(t,u-a)):f<0&&a<0&&(o=1,u=t),u-o+1<n&&(u<t?u++:o>1&&o--);for(var l=o;l<=u;l++)s.push({page:l,current:l==i});var c=o-1;return c&&(c>2?s.unshift({page:"..."}):c>1&&s.unshift({page:2,current:!1}),s.unshift({page:1,current:!1})),c=t-u,c&&(c>2?s.push({page:"..."}):c>1&&s.push({page:u+1,current:!1}),s.push({page:t,current:!1})),s}},{currentPage:1,numberOfPagesToShow:7,prevText:"上一页",nextText:"下一页",template:'<ol class="paginator"><% if (currentPage > 1) { %><li class="paginator-item paginator-prev"><a href="#" data-page="<%=(currentPage - 1)%>"><%=prevText%></a></li><% } else { %><li class="paginator-item paginator-prev-disabled"><span><%=prevText%></span></li><% } %><% pageNumbers.forEach(function(obj) { %><% if (obj.current) { %><li class="paginator-item paginator-number paginator-current"><span><%=obj.page%></span></li><% } else if (obj.page === "...") { %><li class="paginator-item paginator-ellipsis"><span><%=obj.page%></span></li><% } else { %><li class="paginator-item paginator-number"><a href="#" data-page="<%=obj.page%>"><%=obj.page%></a></li><% } %><% }); %><% if (currentPage < totalPages) { %><li class="paginator-item paginator-next"><a href="#" data-page="<%=(currentPage + 1)%>"><%=nextText%></a></li><% } else { %><li class="paginator-item paginator-next-disabled"><span><%=nextText%></span></li><% } %></ol>'})})