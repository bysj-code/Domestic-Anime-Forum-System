(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/dongmanfenlei/add-or-update"],{"0078":function(e,n,t){},1439:function(e,n,t){"use strict";t.r(n);var r=t("32c5"),a=t.n(r);for(var u in r)"default"!==u&&function(e){t.d(n,e,(function(){return r[e]}))}(u);n["default"]=a.a},1884:function(e,n,t){"use strict";var r;t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return r}));var a=function(){var e=this,n=e.$createElement;e._self._c},u=[]},"32c5":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function u(e,n,t,r,a,u,o){try{var i=e[u](o),c=i.value}catch(s){return void t(s)}i.done?n(c):Promise.resolve(c).then(r,a)}function o(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var o=e.apply(n,t);function i(e){u(o,r,a,i,c,"next",e)}function c(e){u(o,r,a,i,c,"throw",e)}i(void 0)}))}}var i=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("efdb"))}.bind(null,t)).catch(t.oe)},c={data:function(){return{cross:"",ruleForm:{dongmanfenlei:""},user:{},ro:{dongmanfenlei:!1}}},components:{wPicker:i},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var t=this;return o(r.default.mark((function a(){var u,o,i,c;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return u=e.getStorageSync("nowTable"),a.next=3,t.$api.session(u);case 3:if(o=a.sent,t.user=o.data,t.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(t.ruleForm.refid=n.refid,t.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){a.next=13;break}return t.ruleForm.id=n.id,a.next=11,t.$api.info("dongmanfenlei",t.ruleForm.id);case 11:o=a.sent,t.ruleForm=o.data;case 13:if(t.cross=n.cross,!n.cross){a.next=25;break}i=e.getStorageSync("crossObj"),a.t0=r.default.keys(i);case 17:if((a.t1=a.t0()).done){a.next=25;break}if(c=a.t1.value,"dongmanfenlei"!=c){a.next=23;break}return t.ruleForm.dongmanfenlei=i[c],t.ro.dongmanfenlei=!0,a.abrupt("continue",17);case 23:a.next=17;break;case 25:t.styleChange();case 26:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return o(r.default.mark((function t(){var a,u,o,i,c,s,f,d,l,m;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n.ruleForm.dongmanfenlei){t.next=3;break}return n.$utils.msg("动漫分类不能为空"),t.abrupt("return");case 3:if(!n.cross){t.next=19;break}if(i=e.getStorageSync("statusColumnName"),c=e.getStorageSync("statusColumnValue"),""==i){t.next=19;break}if(s=e.getStorageSync("crossObj"),i.startsWith("[")){t.next=15;break}for(f in s)f==i&&(s[f]=c);return d=e.getStorageSync("crossTable"),t.next=13,n.$api.update("".concat(d),s);case 13:t.next=19;break;case 15:a=Number(e.getStorageSync("userid")),u=s["id"],o=e.getStorageSync("statusColumnName"),o=o.replace(/\[/,"").replace(/\]/,"");case 19:if(!u||!a){t.next=41;break}return n.ruleForm.crossuserid=a,n.ruleForm.crossrefid=u,l={page:1,limit:10,crossuserid:a,crossrefid:u},t.next=25,n.$api.list("dongmanfenlei",l);case 25:if(m=t.sent,!(m.data.total>=o)){t.next=31;break}return n.$utils.msg(e.getStorageSync("tips")),t.abrupt("return",!1);case 31:if(!n.ruleForm.id){t.next=36;break}return t.next=34,n.$api.update("dongmanfenlei",n.ruleForm);case 34:t.next=38;break;case 36:return t.next=38,n.$api.add("dongmanfenlei",n.ruleForm);case 38:n.$utils.msgBack("提交成功");case 39:t.next=49;break;case 41:if(!n.ruleForm.id){t.next=46;break}return t.next=44,n.$api.update("dongmanfenlei",n.ruleForm);case 44:t.next=48;break;case 46:return t.next=48,n.$api.add("dongmanfenlei",n.ruleForm);case 48:n.$utils.msgBack("提交成功");case 49:case"end":return t.stop()}}),t)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),r=n.getMonth()+1,a=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),r=r>9?r:"0"+r,a=a>9?a:"0"+a,"".concat(t,"-").concat(r,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,t("543d")["default"])},"8f34":function(e,n,t){"use strict";t.r(n);var r=t("1884"),a=t("1439");for(var u in a)"default"!==u&&function(e){t.d(n,e,(function(){return a[e]}))}(u);t("df76");var o,i=t("f0c5"),c=Object(i["a"])(a["default"],r["b"],r["c"],!1,null,"2533ad98",null,!1,r["a"],o);n["default"]=c.exports},d6dd:function(e,n,t){"use strict";(function(e){t("21f6");r(t("66fd"));var n=r(t("8f34"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},df76:function(e,n,t){"use strict";var r=t("0078"),a=t.n(r);a.a}},[["d6dd","common/runtime","common/vendor"]]]);