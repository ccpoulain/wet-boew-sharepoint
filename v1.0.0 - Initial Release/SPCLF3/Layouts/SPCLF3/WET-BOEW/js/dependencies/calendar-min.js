/*!
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.com/wet-boew/License-eng.txt / wet-boew.github.com/wet-boew/Licence-fra.txt
 */
(function(b){var a=window.pe||{fn:{}};a.fn.calendar={create:function(i,m,k,j,c,o){var g,e=b("#"+i),h,d,n,f,p,l;e.addClass("cal-container");e.removeClass("cal-container-extended");h=a.fn.calendar.getDateFromISOString(c);if(h===null){h=new Date();h.setFullYear(m-1,k,1)}d=a.fn.calendar.getDateFromISOString(o);if(d===null){d=new Date();d.setFullYear(m+1,k,1)}if(m>d.getFullYear()||(m===d.getFullYear()&&k>d.getMonth())){m=d.getFullYear();k=d.getMonth()}else{if(m<h.getFullYear()||(m===h.getFullYear()&&k<h.getMonth())){m=h.getFullYear();k=h.getMonth()}}if(e.children("div#cal-"+i+"-cnt").length>0){e.children("div#cal-"+i+"-cnt").find("ol#cal-"+i+"-weekdays, .cal-month, div#cal-"+i+"-days").remove();g=e.children("div#cal-"+i+"-cnt")}else{g=b('<div id="cal-'+i+'-cnt" class="cal-cnt"></div>');e.append(g)}if(e.children("div#cal-"+i+"-cnt").children(".cal-header").length>0){n=e.children("div#cal-"+i+"-cnt").children(".cal-header")}else{n=b('<div class="cal-header"></div>')}n.prepend('<div class="cal-month">'+pe.dic.get("%calendar-monthNames")[k]+" "+m+"</div>");if(j){f=a.fn.calendar.createMonthNav(i,m,k,h,d);if(b("#cal-"+i+"-monthnav").length<1){n.append(f)}}g.append(n);g.append(a.fn.calendar.createWeekdays(i));p=a.fn.calendar.createDays(i,m,k);l=p.children("ol.cal-day-list").children("li");g.append(p);e.trigger("calendarDisplayed",[m,k,l])},createMonthNav:function(p,m,l,h,c){var e,r,j,q,g,k,o,d,f,i;if(b("#cal-"+p+"-monthnav").length>0){e=b("#cal-"+p+"-monthnav")}else{e=b('<div id="cal-'+p+'-monthnav"></div>')}for(f=0;f<2;f+=1){k=true;o=null;d=null;switch(f){case 0:r="prevmonth";j=pe.dic.get("%calendar-previousMonth");if(l>0){q=l-1;g=m}else{q=11;g=m-1}if((q<h.getMonth()&&g<=h.getFullYear())||g<h.getFullYear()){k=false}break;case 1:if(b("#"+p).children("div#cal-"+p+"-cnt").children(".cal-header").find(".cal-goto").length<1){e.append(a.fn.calendar.createGoToForm(p,m,l,h,c))}r="nextmonth";j=pe.dic.get("%calendar-nextMonth");if(l<11){q=l+1;g=m}else{q=0;g=m+1}if((q>c.getMonth()&&g>=c.getFullYear())||g>c.getFullYear()){k=false}break}if(e.children(".cal-"+r).length>0){o=e.children(".cal-"+r)}if(k){i=j+pe.dic.get("%calendar-monthNames")[q]+" "+g;if(o){d=o.children("a").unbind();d.children("img").attr("alt",i)}else{o=b('<div class="cal-'+r+'"></div>');d=b('<a href="javascript:;" role="button"><img class="image-actual" src="'+pe.add.liblocation+"images/calendar/"+r.substr(0,1)+'.png" alt="'+i+'" /></a>');o.append(d);if(f===0){e.prepend(o)}else{e.append(o)}}d.bind("click",{calID:p,year:g,month:q,mindate:a.fn.calendar.getISOStringFromDate(h),maxdate:a.fn.calendar.getISOStringFromDate(c)},a.fn.calendar.buttonClick)}else{if(o){o.remove()}}}return e},buttonClick:function(d){var c=b(this).parent().parent(),e=b(this).parent().attr("class");a.fn.calendar.create(d.data.calID,d.data.year,d.data.month,true,d.data.mindate,d.data.maxdate);if(c.find("."+e).length<1){pe.focus(c.find(".cal-goto-link a"))}else{pe.focus(c.find("."+e+" a"))}},yearChanged:function(d){var l=parseInt(b(this).val(),10),f=d.data.minDate,c=d.data.maxDate,h=d.data.monthField,j=0,e=11,k,g;if(l===f.getFullYear()){j=f.getMonth()}if(l===c.getFullYear()){e=c.getMonth()}k=h.val();while(h.children("option").length){h.get(0).remove(0)}for(g=j;g<=e;g+=1){h.append('<option value="'+g+'"'+((g===k)?' selected="selected"':"")+">"+pe.dic.get("%calendar-monthNames")[g]+"</option>")}},createGoToForm:function(r,k,t,g,j){var f=b('<div class="cal-goto"></div>'),e=b('<form id="cal-'+r+'-goto" role="form" style="display:none;" action=""><fieldset><legend>'+pe.dic.get("%calendar-goToTitle")+"</legend></fieldset></form>"),m,q,o,h,i,n,v,p,c,s,u,d,l;e.submit(function(){a.fn.calendar.onGoTo(r,g,j);return false});m=e.children("fieldset");q=b('<div class="cal-goto-year"></div>');o=b('<select title="'+pe.dic.get("%calendar-goToYear")+'" id="cal-'+r+'-goto-year"></select>');for(h=g.getFullYear(),i=j.getFullYear();h<=i;h+=1){o.append(b('<option value="'+h+'"'+(h===k?' selected="selected"':"")+">"+h+"</option>"))}q.append(o);m.append(q);n=b('<div class="cal-goto-month"></div>');v=b('<select title="'+pe.dic.get("%calendar-goToMonth")+'" id="cal-'+r+'-goto-month"></select>');n.append(v);m.append(n);if(pe.ie===6){b(pe.dic.get("%calendar-monthNames")).each(function(w,x){v.append('<option value="'+w+'"'+((w===t)?' selected="selected"':"")+">"+x+"</option>")})}else{o.bind("change",{minDate:g,maxDate:j,monthField:v},a.fn.calendar.yearChanged);o.change()}p=b('<div class="cal-goto-button"></div>');c=b('<input type="submit" class="button button-accent" value="'+pe.dic.get("%calendar-goToButton")+'" />');p.append(c);m.append(p);s=b('<div class="cal-goto-button"></div>');u=b('<input type="button" class="button button-dark" value="'+pe.dic.get("%calendar-cancelButton")+'" />');u.click(function(){a.fn.calendar.hideGoToForm(r)});s.append(u);m.append(s);d=b('<p class="cal-goto-link" id="cal-'+r+'-goto-link"></p>');l=b('<a href="javascript:;" role="button" aria-controls="cal-'+r+'-goto" aria-expanded="false">'+pe.dic.get("%calendar-goToLink")+"</a>");l.on("click",function(){a.fn.calendar.showGoToForm(r)});d.append(l);f.append(d);f.append(e);return f},createWeekdays:function(e){var d=b('<ol id="cal-'+e+'-weekdays" class="cal-weekdays" role="presentation"></ol>'),f,c,g;for(f=0;f<7;f+=1){c=pe.dic.get("%calendar-weekDayNames")[f];g=b('<li id="cal-'+e+"-wd"+(f+1)+'" class="cal-wd'+(f+1)+'"><abbr title="'+c+'">'+c.substr(0,1)+"</abbr></li>");if(f===0||f===6){g.addClass="we"}d.append(g)}return d},createDays:function(p,m,k){var r=b('<div id="cal-'+p+'-days" class="cal-days"></div>'),q=b('<ol id="cal-'+p+"-"+k+"_"+m+'" class="cal-day-list"></ol>'),g=new Date(),c,n,f,h,d,o,i,j,e,l;g.setFullYear(m,k,1);c=g.getDay();g.setFullYear(m,k+1,0);n=g.getDate()-1;g=new Date();g.getDate();f=0;h=false;for(d=1;d<7;d+=1){for(o=0;o<7;o+=1){if((d===1&&o<c)||(f>n)){i=b('<span class="cal-empty">'+String.fromCharCode(160)+"</span>");j=r}else{f+=1;l=(f===g.getDate()&&k===g.getMonth()&&m===g.getFullYear());if(f===1){r.append(q)}if(f>n){h=true}i=b("<li></li>");e=b("<div></div>");if(pe.language==="en"){e.append('<span class="wb-invisible">'+pe.dic.get("%calendar-weekDayNames")[o]+" "+pe.dic.get("%calendar-monthNames")[k]+" </span>"+f+'<span class="wb-invisible"> '+m+((l)?pe.dic.get("%calendar-currentDay"):"")+"</span>")}else{if(pe.language==="fr"){e.append('<span class="wb-invisible">'+pe.dic.get("%calendar-weekDayNames")[o]+" </span>"+f+'<span class="wb-invisible"> '+pe.dic.get("%calendar-monthNames")[k].toLowerCase()+" "+m+((l)?pe.dic.get("%calendar-currentDay"):"")+"</span>")}}i.append(e);j=q}i.attr("id","cal-"+p+"-w"+d+"d"+(o+1)).addClass("cal-w"+d+"d"+(o+1)+" cal-index-"+f);if(o===0||o===6){i.addClass("cal-we")}if(l){i.addClass("cal-currentday")}j.append(i)}if(h){break}}return r},showGoToForm:function(c){b("#cal-"+c+"-monthnav").children(".cal-prevmonth, .cal-nextmonth").addClass("wb-invisible").children("a").attr("aria-hidden","true");var e=b("#cal-"+c+"-goto-link"),d=b("#cal-"+c+"-goto");e.stop().slideUp(0);d.stop().slideDown(0).queue(function(){pe.focus(b(this).find(":input:eq(0)"))});e.children("a").attr("aria-hidden","true").attr("aria-expanded","true");b("#"+c).addClass("cal-container-extended")},hideGoToForm:function(c){var e=b("#cal-"+c+"-goto-link"),d=b("#cal-"+c+"-goto");d.stop().slideUp(0).queue(function(){b("#cal-"+c+"-monthnav").children(".cal-prevmonth, .cal-nextmonth").removeClass("wb-invisible").children("a").attr("aria-hidden","false");b("#"+c).removeClass("cal-container-extended")});e.stop().slideDown(0).children("a").attr("aria-hidden","false").attr("aria-expanded","false")},onGoTo:function(e,g,i){var d=b("#"+e),c=d.find("fieldset"),h=parseInt(c.find(".cal-goto-month select option:selected").attr("value"),10),f=parseInt(c.find(".cal-goto-year select").attr("value"),10);if(!(h<g.getMonth()&&f<=g.getFullYear())&&!(h>i.getMonth()&&f>=i.getFullYear())){a.fn.calendar.create(e,f,h,true,a.fn.calendar.getISOStringFromDate(g),a.fn.calendar.getISOStringFromDate(i));a.fn.calendar.hideGoToForm(e);pe.focus(b("#cal-"+e+"-days").find("a:eq(0)"))}},getDateFromISOString:function(d){var c=null;if(d){if(d.match(/\d{4}-\d{2}-\d{2}/)){c=new Date();c.setFullYear(d.substr(0,4),d.substr(5,2)-1,d.substr(8,2)-1)}return c}return null},getISOStringFromDate:function(c){return c.getFullYear()+"-"+a.fn.calendar.strPad(c.getMonth()+1,2,"0")+"-"+a.fn.calendar.strPad(c.getDate()+1,2,"0")},strPad:function(d,c,e){var f=d.toString();if(!e){e="0"}while(f.length<c){f=e+f}return f},dates:{convert:function(c){return(c.constructor===Date?c:c.constructor===Array?new Date(c[0],c[1]-1,c[2]):c.constructor===Number?new Date(c):c.constructor===String?new Date(c):typeof c==="object"?new Date(c.year,c.month,c.date):NaN)},compare:function(d,c){return(isFinite(d=a.fn.calendar.dates.convert(d).valueOf())&&isFinite(c=a.fn.calendar.dates.convert(c).valueOf())?(d>c)-(d<c):NaN)},inRange:function(e,f,c){return(isFinite(e=a.fn.calendar.dates.convert(e).valueOf())&&isFinite(f=a.fn.calendar.dates.convert(f).valueOf())&&isFinite(c=a.fn.calendar.dates.convert(c).valueOf())?f<=e&&e<=c:NaN)},daysInMonth:function(c,d){return 32-new Date(c,d,32).getDate()},daysBetween:function(h,i){var g=a.fn.calendar.dates.convert(h),e=a.fn.calendar.dates.convert(i),c=0,j=1000*60,d=j*60*24,f;g.setHours(0);g.setMinutes(0);g.setSeconds(0);e.setHours(0);e.setMinutes(0);e.setSeconds(0);if(e>g){c=(e.getTimezoneOffset()-g.getTimezoneOffset())*j}else{c=(g.getTimezoneOffset()-e.getTimezoneOffset())*j}f=Math.abs(e.getTime()-g.getTime())-c;return Math.ceil(f/d)}}};window.pe=a;return a}(jQuery));