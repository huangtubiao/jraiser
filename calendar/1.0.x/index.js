/*!
 * JRaiser 2 Javascript Library
 * calendar - v1.0.1 (2014-07-22T15:56:25+0800)
 * http://jraiser.org/ | Released under MIT license
 */
define("calendar/1.0.x/",["dom/1.0.x/","widget/1.0.x/","tmpl/1.0.x/",null],function(e){"use strict";var t=e("base/1.0.x/"),a=(e("dom/1.0.x/"),e("widget/1.0.x/")),n=e("tmpl/1.0.x/"),r=/^([+-])(\d+)$/,s=["sun","mon","tues","wed","thur","fri","sat"],i=t.createClass(function(e,t){this.year(e),this.month(t)},{year:function(e){return arguments.length?(e=e||(new Date).getFullYear(),void(this._year=r.test(e)?this._year+parseInt(e):parseInt(e))):this._year},month:function(e){if(!arguments.length)return this._month;e=e||(new Date).getMonth()+1;var t=r.test(e)?this._month+parseInt(e):parseInt(e),a=new Date(this._year,t-1);this._month=a.getMonth()+1,this._year=a.getFullYear()},build:function(e){e&&(t.isArray(e)||(e=[e]),e=e.map(function(e){return e=new Date(e),e.setHours(0,0,0,0),e.getTime()}));var a=new Date(this._year,this._month-1,1),n=a.getDay(),r=new Date(this._year,this._month-1,n?1-n:-6).getTime();a.setMonth(this._month),a.setDate(0),n=a.getDay();var i=new Date(this._year,this._month-1,a.getDate()+(6===n?7:6-n)).getTime();35424e5>i-r&&(i+=6048e5);var h,d,o,m={year:this._year,month:this._month,weeks:[]},y=864e5,l=new Date;for(l.setHours(0,0,0,0),l=l.getTime();i>=r;)h=new Date(r),d={year:h.getFullYear(),month:h.getMonth()+1,date:h.getDate(),weekDay:h.getDay(),timestamp:h.getTime(),states:[]},d.states.push("calendar-day-week-"+s[d.weekDay]),d.states.push(d.weekDay>0&&d.weekDay<6?"calendar-day-weekday":"calendar-day-weekend"),d.states.push(d.year<this._year||d.year===this._year&&d.month<this._month?"calendar-day-last-month":d.year>this._year||d.year===this._year&&d.month>this._month?"calendar-day-next-month":"calendar-day-current-month"),d.states.push(d.timestamp>l?"calendar-day-future":d.timestamp<l?"calendar-day-past":"calendar-day-today"),e&&e.some(function(e){return e===d.timestamp?(d.states.push("calendar-day-selected"),!0):void 0}),o&&7!==o.length||(o=[],m.weeks.push(o)),o.push(d),r+=y;return m}});return a.create(function(){},{_init:function(){},render:function(e){var t=this,a=t._options;t._model?(t._model.month(e.month),t._model.year(e.year)):t._model=new i(e.year,e.month);var r=t._model.build(e.selectedDates);a.wrapper.empty().html(n.render(a.template,{weekDayNames:a.weekDayNames,data:r})).find("td").click(function(e){e.preventDefault();var a=new Date(parseInt(this.getAttribute("data-timestamp")));t.trigger("dayselect",{selectedDate:a,dayGrid:this})}),t.trigger("render",{calendarData:r})},nextMonth:function(e){this.render({year:"+0",month:"+1",selectedDates:e})},prevMonth:function(e){this.render({year:"+0",month:"-1",selectedDates:e})},prevYear:function(e){this.render({year:"-1",month:"+0",selectedDates:e})},nextYear:function(e){this.render({year:"+1",month:"+0",selectedDates:e})},_destroy:function(e){e.wrapper.empty(),delete this._model}},{weekDayNames:"日一二三四五六".split(""),template:'<table class="calendar"><% if (weekDayNames) { %><thead><tr><% for (var i = 0; i < 7; i++) { %><th><span class="calendar-grid"><%=weekDayNames[i]%></span></th><% } %></tr></thead><% } %><tbody><% for (var i = 0, j, weeks = data.weeks; i < weeks.length; i++) { %><tr><% for (j = 0; j < weeks[i].length; j++) { %><td class="calendar-day <%=weeks[i][j].states.join(" ")%>" data-timestamp="<%=weeks[i][j].timestamp%>"><a href="#" class="calendar-grid"><%=weeks[i][j].date%></a></td><% } %></tr><% } %></tbody></table>'})});