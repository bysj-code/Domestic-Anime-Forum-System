(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/forum-add-or-update/forum-add-or-update"],{"1c1b":function(n,e,t){"use strict";var a=t("2cfa"),r=t.n(a);r.a},"2cfa":function(n,e,t){},"3ae2":function(n,e,t){"use strict";var a;t.d(e,"b",(function(){return r})),t.d(e,"c",(function(){return u})),t.d(e,"a",(function(){return a}));var r=function(){var n=this,e=n.$createElement;n._self._c},u=[]},"55c3":function(n,e,t){"use strict";t.r(e);var a=t("d2ab"),r=t.n(a);for(var u in a)"default"!==u&&function(n){t.d(e,n,(function(){return a[n]}))}(u);e["default"]=r.a},a859:function(n,e,t){"use strict";t.r(e);var a=t("3ae2"),r=t("55c3");for(var u in r)"default"!==u&&function(n){t.d(e,n,(function(){return r[n]}))}(u);t("1c1b");var o,i=t("f0c5"),c=Object(i["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);e["default"]=c.exports},d2ab:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(t("a34a"));function r(n){return n&&n.__esModule?n:{default:n}}function u(n,e,t,a,r,u,o){try{var i=n[u](o),c=i.value}catch(f){return void t(f)}i.done?e(c):Promise.resolve(c).then(a,r)}function o(n){return function(){var e=this,t=arguments;return new Promise((function(a,r){var o=n.apply(e,t);function i(n){u(o,a,r,i,c,"next",n)}function c(n){u(o,a,r,i,c,"throw",n)}i(void 0)}))}}var i={data:function(){return{forum:{content:"",id:"",title:"",isdone:"开放",parentid:0},index:0,options:["开放","关闭"],username:"",user:{}}},onLoad:function(e){var t=this;return o(a.default.mark((function r(){var u,o,i;return a.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return u=n.getStorageSync("nowTable"),a.next=3,t.$api.session(u);case 3:if(o=a.sent,t.user=o.data,"yonghu"==u&&(t.username=t.user.yonghuzhanghao),!e.id){a.next=12;break}return t.id=e.id,a.next=10,t.$api.info("forum",t.id);case 10:i=a.sent,t.forum=i.data;case 12:t.styleChange();case 13:case"end":return a.stop()}}),r)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},onSubmitTap:function(){var n=this;return o(a.default.mark((function e(){return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n.forum.username=n.username,!n.id){e.next=6;break}return e.next=4,n.$api.update("forum",n.forum);case 4:e.next=8;break;case 6:return e.next=8,n.$api.save("forum",n.forum);case 8:n.$utils.msgBack("操作成功");case 9:case"end":return e.stop()}}),e)})))()},setIsDoneTap:function(n){this.index=n.target.value,this.forum.isdone=this.options[this.index]}}};e.default=i}).call(this,t("543d")["default"])},ffff:function(n,e,t){"use strict";(function(n){t("21f6");a(t("66fd"));var e=a(t("a859"));function a(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])}},[["ffff","common/runtime","common/vendor"]]]);