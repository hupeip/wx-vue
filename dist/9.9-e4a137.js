webpackJsonp([9],{52:function(t,e,i){var o,n;i(250),o=i(139),n=i(208),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},59:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var i=this[e];i[2]?t.push("@media "+i[2]+"{"+i[1]+"}"):t.push(i[1])}return t.join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},n=0;n<this.length;n++){var s=this[n][0];"number"==typeof s&&(o[s]=!0)}for(n=0;n<e.length;n++){var c=e[n];"number"==typeof c[0]&&o[c[0]]||(i&&!c[2]?c[2]=i:i&&(c[2]="("+c[2]+") and ("+i+")"),t.push(c))}},t}},60:function(t,e,i){function o(t,e){for(var i=0;i<t.length;i++){var o=t[i],n=u[o.id];if(n){n.refs++;for(var s=0;s<n.parts.length;s++)n.parts[s](o.parts[s]);for(;s<o.parts.length;s++)n.parts.push(r(o.parts[s],e))}else{for(var c=[],s=0;s<o.parts.length;s++)c.push(r(o.parts[s],e));u[o.id]={id:o.id,refs:1,parts:c}}}}function n(t){for(var e=[],i={},o=0;o<t.length;o++){var n=t[o],s=n[0],c=n[1],a=n[2],r=n[3],d={css:c,media:a,sourceMap:r};i[s]?i[s].parts.push(d):e.push(i[s]={id:s,parts:[d]})}return e}function s(t,e){var i=A(),o=h[h.length-1];if("top"===t.insertAt)o?o.nextSibling?i.insertBefore(e,o.nextSibling):i.appendChild(e):i.insertBefore(e,i.firstChild),h.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");i.appendChild(e)}}function c(t){t.parentNode.removeChild(t);var e=h.indexOf(t);e>=0&&h.splice(e,1)}function a(t){var e=document.createElement("style");return e.type="text/css",s(t,e),e}function r(t,e){var i,o,n;if(e.singleton){var s=g++;i=p||(p=a(e)),o=d.bind(null,i,s,!1),n=d.bind(null,i,s,!0)}else i=a(e),o=l.bind(null,i),n=function(){c(i)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else n()}}function d(t,e,i,o){var n=i?"":o.css;if(t.styleSheet)t.styleSheet.cssText=m(e,n);else{var s=document.createTextNode(n),c=t.childNodes;c[e]&&t.removeChild(c[e]),c.length?t.insertBefore(s,c[e]):t.appendChild(s)}}function l(t,e){var i=e.css,o=e.media,n=e.sourceMap;if(o&&t.setAttribute("media",o),n&&(i+="\n/*# sourceURL="+n.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var u={},f=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},v=f(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),A=f(function(){return document.head||document.getElementsByTagName("head")[0]}),p=null,g=0,h=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=v()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var i=n(t);return o(i,e),function(t){for(var s=[],c=0;c<i.length;c++){var a=i[c],r=u[a.id];r.refs--,s.push(r)}if(t){var d=n(t);o(d,e)}for(var c=0;c<s.length;c++){var r=s[c];if(0===r.refs){for(var l=0;l<r.parts.length;l++)r.parts[l]();delete u[r.id]}}}};var m=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},61:function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e["default"]=t,e}Object.defineProperty(e,"__esModule",{value:!0}),e.hideLoad=e.showLoad=e.exchange=e.limit=e.sure=e.alertOK=e.bomb=e.updateInfo=e.getJobContent=e.showAllInterList=e.updateInterStatus=e.enter=e.addWxTalent=e.checkWxTalent=void 0;var s=i(1),c=n(s),a=i(8),r=o(a),d=(e.checkWxTalent=function(t,e){var i=t.dispatch;t.state;r["default"].checkWxTalent(e).then(function(t){13==t.data.code?router.go("/presign"):i(c.CHECKWXTALENT,t.data)},function(t){console.log("error")})},e.addWxTalent=function(t,e){var i=t.dispatch;t.state;r["default"].addWxTalent(e).then(function(t){0==t.data.code?router.go("/detail?id="+e.jobId):i(c.ADDWXTALENT,t.data.code)},function(t){console.log("error")})},e.enter=function(t){var e=t.dispatch;t.state;e(c.ENTER)},e.updateInterStatus=function(t,e,i){var o=t.dispatch;t.state;console.log(i),r["default"].updateInterStatus({face_id:e.face_id,status:e.status}).then(function(t){return 0==t.data.code&&5==e.status&&1==i.type?void router.go({name:"b_resume",query:{job_id:i.job_id}}):0==t.data.code&&2==i.type?void router.go("/b_jobs/offer/tbd"):void o(c.UPDATEINTERSTATUS,t.data,i)},function(t){console.log("error")})},e.showAllInterList=function(t){var e=t.dispatch,i=t.state;d({dispatch:e,state:i}),r["default"].showAllInterList().then(function(t){0==t.data.code&&e(c.SHOWALLINTERLIST,t.data),l({dispatch:e,state:i})},function(t){console.log("error"),l({dispatch:e,state:i})})},e.getJobContent=function(t,e){var i=t.dispatch,o=t.state;d({dispatch:i,state:o}),r["default"].getJobContent(e).then(function(t){0==t.data.code&&i(c.GETJOBCONTENT,t.data),l({dispatch:i,state:o})},function(t){console.log("error"),l({dispatch:i,state:o})})},e.updateInfo=function(t,e,i){var o=t.dispatch;t.state;o(c.CHANGE,e,i)},e.bomb=function(t,e){var i=t.dispatch;t.state;i(c.BOMB,e)},e.alertOK=function(t){var e=t.dispatch;t.state;e(c.ALERTOK)},e.sure=function(t,e){t.dispatch,t.state},e.limit=function(t){var e=t.dispatch;t.state;e(c.LIMIT)},e.exchange=function(t,e){var i=t.dispatch;t.state;i(c.EXCHANGE,e)},e.showLoad=function(t){var e=t.dispatch;e(c.SHOWLOAD)}),l=e.hideLoad=function(t){var e=t.dispatch;e(c.HIDELOAD)}},62:function(t,e){"use strict";function i(t,e){var i=365,o=new Date;o.setTime(o.getTime()+24*i*60*60*1e3),document.cookie=t+"="+escape(e)+";expires="+o.toGMTString()+";path=/"}function o(t,e){document.cookie=t+"="+escape(e)+";path=/"}function n(t){var e,i=new RegExp("(^| )"+t+"=([^;]*)(;|$)");return(e=document.cookie.match(i))?unescape(e[2]):null}function s(t){var e=new Date;e.setTime(e.getTime()-1);var i=n(t);null!=i&&(document.cookie=t+"="+i+";expires="+e.toGMTString()+";path=/")}Object.defineProperty(e,"__esModule",{value:!0}),e.setCookie=i,e.setCookieClose=o,e.getCookie=n,e.delCookie=s},63:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={}},64:function(t,e,i){e=t.exports=i(59)(),e.push([t.id,".m-loading[_v-bcc193e2]{top:0;position:fixed;z-index:10;width:100%;height:100%;background-color:#f5f5f5;text-align:center}.m-loading img[_v-bcc193e2]{position:absolute;top:45%;margin-top:-15px}",""])},65:function(t,e){t.exports="data:image/gif;base64,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"},66:function(t,e,i){t.exports=' <div class=m-loading _v-bcc193e2=""> <img src='+i(65)+' height=30 width=30 alt="" _v-bcc193e2=""> </div> '},67:function(t,e,i){var o,n;i(68),o=i(63),n=i(66),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},68:function(t,e,i){var o=i(64);"string"==typeof o&&(o=[[t.id,o,""]]);i(60)(o,{});o.locals&&(t.exports=o.locals)},69:function(t,e,i){"use strict";function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e["default"]=t,e}function n(t){c.getCookie("openid")||(window.location.href=t);var e=c.getCookie("openid");return e}Object.defineProperty(e,"__esModule",{value:!0}),e.getPersonOpenid=n;var s=i(62),c=o(s)},102:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{item:{type:Object,"default":function(){return{}}},hide:{type:Number,"default":0}},methods:{detail:function(t){0==t?router.go({name:"detail",query:{id:this.item.id,job_name:encodeURIComponent(this.item.job_name)}}):router.go({name:"detail",query:{id:this.item.id,job_name:encodeURIComponent(this.item.job_name),activityid:!0}})}}}},103:function(t,e,i){e=t.exports=i(59)(),e.push([t.id,"li[_v-3c70b37c]{margin-bottom:.1rem}.welfare[_v-3c70b37c]{margin-left:.7rem}.ellips[_v-3c70b37c]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",""])},107:function(t,e){t.exports=' <li @click=detail(hide) class="f-bg-color-withe f-padding13" _v-3c70b37c=""> <div class="s-fc-black f-oh" _v-3c70b37c=""> <div class="fl icon" _v-3c70b37c=""><i class=company _v-3c70b37c=""></i></div> <div class=right _v-3c70b37c="">{{item.company_name}}</div> </div> <div class="s-fc-black f-oh" _v-3c70b37c=""> <div class="fl icon" _v-3c70b37c=""><i class=station _v-3c70b37c=""></i></div> <div class=right _v-3c70b37c="">{{item.job_name}}</div> </div> <div class="s-fc-black f-oh" _v-3c70b37c=""> <div class="fl icon" _v-3c70b37c=""><i class=money _v-3c70b37c=""></i> </div><div class=right _v-3c70b37c="">{{item.salary}}</div> </div> <div class="" v-if="hide==0" _v-3c70b37c=""> <div class="fl f-color_gray" _v-3c70b37c="">福利待遇：</div> <div class="welfare ellips" _v-3c70b37c="">{{item.benefit}}</div> </div> <div class="" v-if="hide==1" _v-3c70b37c=""> <div class="fl f-color_gray" _v-3c70b37c="">福利待遇：</div> <div class=welfare _v-3c70b37c="">{{item.benefit.substring(0,30)}}<span v-if="item.benefit.length > 30" _v-3c70b37c="">...</span></div> </div> <div v-if="hide==0" _v-3c70b37c=""> <div class="fl f-color_gray" _v-3c70b37c="">截止时间：</div> <div class="" _v-3c70b37c="">{{item.end_time}}</div> </div> <div v-if="hide==0" _v-3c70b37c=""> <div class=f-color_green v-if="item.status==0 || item.status==null" _v-3c70b37c="">当前已有{{item.InterviewNum}}人在排队</div> <div class=f-color_green v-if="item.status==1 &amp;&amp; item.count>0" _v-3c70b37c="">您前面还有{{item.count}}人等待面试</div> <div class=f-color_green v-if="item.status==1 &amp;&amp; item.count==0" _v-3c70b37c="">您的面试马上就要开始了,请做好准备</div> <div class=f-color_green v-if="item.status==6" _v-3c70b37c="">对不起，由于您的经验不足，企业暂不安排面试</div> <div class=f-color_green v-if="item.status==5" _v-3c70b37c="">由于您没能及时到场面试，已经取消排队</div> <div class=f-color_green v-if="item.status==2" _v-3c70b37c="">面试通过</div> <div class=f-color_green v-if="item.status==3" _v-3c70b37c="">未通过面试，已纳入公司人才库</div> <div class=f-color_green v-if="item.status==4" _v-3c70b37c="">面试完成</div> <div class=f-color_green v-if="item.status==100" _v-3c70b37c="">正在面试中...</div> <div class=f-color_green v-if="item.status==200" _v-3c70b37c="">叫号中...</div> </div> </li> '},111:function(t,e,i){var o,n;i(112),o=i(102),n=i(107),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},112:function(t,e,i){var o=i(103);"string"==typeof o&&(o=[[t.id,o,""]]);i(60)(o,{});o.locals&&(t.exports=o.locals)},139:function(t,e,i){"use strict";function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e["default"]=t,e}function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(111),c=n(s),a=i(67),r=n(a),d=i(61),l=i(62),u=(o(l),i(9)),f=i(8),v=n(f),A=i(69);e["default"]={data:function(){return{page:1,num:0,openid:"",result:"",code:0,hide:0}},vuex:{actions:{showLoad:d.showLoad,hideLoad:d.hideLoad},getters:{loading:function(t){var e=t.loading;return e.state}}},route:{data:function(t){var e=t.to.query.activityid;e?(this.getJobList({activityId:e}),this.hide=1):(this.openid=(0,A.getPersonOpenid)("http://www.elitez.cn/get_openid/"),this.showJobList({openId:this.openid,page:1}),this.hide=0)}},ready:function(){document.title="岗位列表";var t=encodeURIComponent(location.href.split("#")[0]),e={title:"今日速聘8.25日现场热招岗位，24小时急速入职等你来",desc:"百度平台推广、贵金属投资经纪人…高底薪！高提成！高福利！",pic:"http://www.elitez.cn/wx/src/asset/img/logo.jpg",url:window.location.href};(0,u.sharewx)({url:t},e)},methods:{more:function(){this.page++,this.showJobList({openId:this.openid,page:this.page})},showJobList:function(t){var e=this;this.showLoad(),v["default"].showJobList(t).then(function(t){e.code=t.data.code,0==t.data.code&&(e.result=t.data.result),e.hideLoad()},function(t){console.log("error"),e.hideLoad()})},getJobList:function(t){var e=this;this.showLoad(),v["default"].getJobList(t).then(function(t){0==t.data.code&&(e.result=t.data.result),e.hideLoad()},function(t){console.log("error"),e.hideLoad()})}},components:{item:c["default"],loading:r["default"]}}},156:function(t,e,i){e=t.exports=i(59)(),e.push([t.id,".noactive[_v-2865c366]{text-align:center;margin-top:20%}.more[_v-2865c366]{text-align:center;height:.4rem;line-height:.4rem}.tips[_v-2865c366]{background-color:#8c8c8d;color:#fff;padding:.05rem .1rem;margin-bottom:.1rem}",""])},208:function(t,e){t.exports=' <div class="" _v-2865c366=""> <div class=noactive v-if="code==1" _v-2865c366=""> <div _v-2865c366="">当前还没有现场招聘活动</div> <div _v-2865c366="">请留意公众号相关信息</div> </div> <div class=f-mgbottom45 v-if="code!=1" _v-2865c366=""> <loading v-if=loading _v-2865c366=""></loading> <div class=job _v-2865c366=""> <div class="f-bg-color-gary tips" v-if="hide==0" _v-2865c366="">Trips: 每人同时段只可投递2个岗位，当您完成一次面试之后，将可进行其他岗位的再投递</div> <ul class="" _v-2865c366=""> <template v-for="item in result.jobs"> <item :item=item :hide=hide _v-2865c366=""></item> </template> </ul> <div class=more @click=more v-if="result.pageNum > page" _v-2865c366="">点击查看更多</div> </div> </div> </div> '},250:function(t,e,i){var o=i(156);"string"==typeof o&&(o=[[t.id,o,""]]);i(60)(o,{});o.locals&&(t.exports=o.locals)}});