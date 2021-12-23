(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51452d9e"],{"188a":function(e,s,t){},"675f":function(e,s,t){"use strict";t("9823")},7672:function(e,s,t){"use strict";t("188a")},9823:function(e,s,t){},d1f0:function(e,s,t){"use strict";var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("el-dialog",{staticClass:"password-dialog",attrs:{title:e.$t("password.password1"),visible:e.passwordVisible,top:"30vh",width:"30rem","close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(s){e.passwordVisible=s},open:e.passwordShow,close:e.passwordClose}},[t("el-form",{ref:"passwordForm",attrs:{model:e.passwordForm,rules:e.passwordRules},nativeOn:{submit:function(e){e.preventDefault()}}},[t("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[e._v(e._s(e.$t("password.password1")))]),t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{ref:"inpus",attrs:{type:"password",maxlength:22},nativeOn:{keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.enterSubmit("passwordForm")}},model:{value:e.passwordForm.password,callback:function(s){e.$set(e.passwordForm,"password",s)},expression:"passwordForm.password"}})],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:e.passwordClose}},[e._v(e._s(e.$t("password.password2")))]),t("el-button",{attrs:{type:"success",id:"passwordInfo"},on:{click:function(s){return e.dialogSubmit("passwordForm")}}},[e._v(e._s(e.$t("password.password3"))+"\n    ")])],1)],1)},r=[],n={props:{},data:function(){var e=function(e,s,t){t()};return{passwordVisible:!1,passwordForm:{password:""},passwordRules:{password:[{validator:e,trigger:["blur","change"]}]}}},created:function(){},mounted:function(){},watch:{passwordVisible:function(e){e&&setTimeout((function(){}),200)}},methods:{enterSubmit:function(e){this.passwordForm.password&&this.dialogSubmit(e)},passwordShow:function(){},passwordClose:function(){this.$refs["passwordForm"].resetFields(),this.passwordVisible=!1},showPassword:function(e){this.passwordVisible=e},dialogSubmit:function(e){var s=this;this.$refs[e].validate((function(e){if(!e)return!1;s.$emit("passwordSubmit",s.passwordForm.password),s.passwordVisible=!1}))}}},o=n,i=(t("7672"),t("2877")),d=Object(i["a"])(o,a,r,!1,null,null,null);s["a"]=d.exports},fe38:function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"address bg-gray"},[t("h3",{staticClass:"title"},[e._v(e._s(e.$t("address.address0")))]),t("div",{staticClass:"w1200 mt_20"},[t("div",{staticClass:"top_ico"},[t("i",{staticClass:"el-icon-plus click",on:{click:function(s){return e.toUrl("newAddress")}}})]),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.load,expression:"load"}],attrs:{data:e.addressList,stripe:"",border:"","element-loading-spinner":"el-icon-loading"}},[t("el-table-column",{attrs:{prop:"address",label:e.$t("address.address1"),align:"center","min-width":"200"}}),t("el-table-column",{attrs:{prop:"balance",label:e.$t("address.address2"),align:"center"}}),t("el-table-column",{attrs:{label:e.$t("address.address3"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("span",{directives:[{name:"show",rawName:"v-show",value:s.row.alias,expression:"scope.row.alias"}]},[e._v(e._s(s.row.alias))]),t("span",{directives:[{name:"show",rawName:"v-show",value:!s.row.alias,expression:"!scope.row.alias"}],on:{click:function(t){return e.addAlias(s.row)}}},[t("i",{staticClass:"el-icon-edit-outline click"})])]}}])}),t("el-table-column",{attrs:{label:e.$t("address.address5"),align:"center",width:"350"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("label",{staticClass:"click tab_bn",on:{click:function(t){return e.backAddress(s.row)}}},[e._v(e._s(e.$t("address.address7")))]),t("span",{staticClass:"tab_line"},[e._v("|")]),t("label",{staticClass:"click tab_bn",on:{click:function(t){return e.deleteAddress(s.row)}}},[e._v(e._s(e.$t("address.address8")))]),t("span",{staticClass:"tab_line"},[e._v("|")]),s.row.address===e.defaultAddress?t("el-link",{attrs:{disabled:""}},[e._v(e._s(e.$t("public.into")))]):t("label",{staticClass:"click tab_bn",on:{click:function(t){return e.selectionAddress(s.row)}}},[e._v(e._s(e.$t("public.into")))])]}}])})],1),t("div",{staticClass:"pages"},[t("div",{staticClass:"page-total"},[e._v("\n                "+e._s(e.$t("public.display"))+" "+e._s(e.pageIndex-1===0?1:(e.pageIndex-1)*e.pageSize)+"-"+e._s(e.pageIndex*e.pageSize)+"\n                "+e._s(e.$t("public.total"))+" "+e._s(e.pageTotal)+"\n            ")]),t("el-pagination",{directives:[{name:"show",rawName:"v-show",value:e.pageTotal>e.pageSize,expression:"pageTotal > pageSize"}],staticClass:"fr",attrs:{"current-page":e.pageIndex,"page-size":e.pageSize,background:"",layout:" prev, pager, next, jumper",total:e.pageTotal},on:{"current-change":e.myAddressPages}})],1)],1),t("el-dialog",{attrs:{title:"Remarks",width:"30rem",visible:e.remarkDialog,"close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(s){e.remarkDialog=s}}},[t("div",{staticClass:"address-remark bg-white"},[t("el-input",{attrs:{placeholder:e.$t("address.address9")},model:{value:e.remarkInfo,callback:function(s){e.remarkInfo="string"===typeof s?s.trim():s},expression:"remarkInfo"}}),t("div",{staticClass:"btn-next"},[t("el-button",{on:{click:function(s){e.remarkDialog=!1}}},[e._v(e._s(e.$t("address.address10")))]),t("el-button",{attrs:{type:"success"},on:{click:e.addRemark}},[e._v(e._s(e.$t("address.address11")))])],1)],1)]),t("Password",{ref:"password",on:{passwordSubmit:e.passSubmit}})],1)},r=[],n=(t("ac4d"),t("8a81"),t("5df3"),t("1c4c"),t("7f7f"),t("6b54"),t("96cf"),t("3b8d")),o=t("d1f0"),i=t("6ace"),d=t("db49"),l=t("bc3a"),c=t.n(l);function u(e,s){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=p(e))||s&&e&&"number"===typeof e.length){t&&(e=t);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o=!0,i=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return o=e.done,e},e:function(e){i=!0,n=e},f:function(){try{o||null==t.return||t.return()}finally{if(i)throw n}}}}function p(e,s){if(e){if("string"===typeof e)return f(e,s);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?f(e,s):void 0}}function f(e,s){(null==s||s>e.length)&&(s=e.length);for(var t=0,a=new Array(s);t<s;t++)a[t]=e[t];return a}var m={data:function(){return{addressList:[],pageIndex:1,pageSize:10,pageTotal:0,selectAddressInfo:"",remarkDialog:!1,remarkInfo:"",defaultAddress:"",load:!1}},components:{Password:o["a"]},created:function(){this.load=!0,this.getAddressList();var e=JSON.parse(localStorage.getItem(Object(i["e"])()));e&&e.address&&(this.defaultAddress=e.address)},mounted:function(){},methods:{getAddressList:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var s=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return d["e"].method="getAccountList",d["e"].params=[Object(i["d"])(),this.pageIndex,this.pageSize],e.next=4,c.a.post(d["d"],d["e"]).then(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var a,r,n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.data.hasOwnProperty("result"))if(s.addressList=t.data.result.list,0===s.addressList.length)s.$router.push({name:"newAddress",query:{address:""}});else{a=u(s.addressList);try{for(a.s();!(r=a.n()).done;)n=r.value,n.balance=Object(i["m"])(n.balance)}catch(d){a.e(d)}finally{a.f()}s.pageTotal=t.data.result.total,o=JSON.parse(localStorage.getItem(Object(i["e"])())),o&&o.address&&(s.defaultAddress=o.address)}else s.$message({message:s.$t("contract.contract11")+t.data.error.message,type:"error",duration:1e3});s.load=!1;case 2:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}()).catch((function(e){s.$message({message:s.$t("address.address14")+e,type:"error",duration:1e3}),s.load=!1}));case 4:case"end":return e.stop()}}),e,this)})));function s(){return e.apply(this,arguments)}return s}(),myAddressPages:function(e){this.pageIndex=e,this.getAddressList()},addAlias:function(e){0===e.balance?this.$message({message:this.$t("address.address12"),type:"error",duration:1e3}):this.toUrl("setAlias",e.address)},editPassword:function(e){this.toUrl("editPassword",e.address)},backAddress:function(e){this.selectAddressInfo=e,this.$router.push({name:"backupsAddress",query:{backAddressInfo:e}})},deleteAddress:function(e){this.selectAddressInfo=e,this.selectAddressInfo.encrypted?this.$refs.password.showPassword(!0):this.passSubmit()},selectionAddress:function(e){localStorage.setItem(Object(i["e"])(),JSON.stringify(e)),this.$router.push({name:"home"})},passSubmit:function(e){var s=this;d["e"].method="deleteAccount",d["e"].params=[Object(i["d"])(),this.selectAddressInfo.address,e],c.a.post(d["d"],d["e"]).then((function(e){if(e.data.hasOwnProperty("result")){var t=localStorage.getItem(Object(i["e"])());t&&t.address&&s.selectAddressInfo.address==t.address&&(localStorage.removeItem(Object(i["e"])()),localStorage.removeItem(s.selectAddressInfo.address)),s.getAddressList()}else s.$message({message:s.$t("address.address15")+e.data.error.message,type:"error",duration:1e3})})).catch((function(e){console.log(e)}))},editRemark:function(e){this.selectAddressInfo=e,this.remarkInfo=this.selectAddressInfo.remark,this.remarkDialog=!0},addRemark:function(){var e,s=Object(i["c"])(0),t=u(s);try{for(t.s();!(e=t.n()).done;){var a=e.value;a.address===this.selectAddressInfo.address&&(this.selectAddressInfo.remark=this.remarkInfo,a.remark=this.remarkInfo)}}catch(r){t.e(r)}finally{t.f()}localStorage.setItem(Object(i["e"])(),JSON.stringify(s)),this.remarkDialog=!1,this.selectAddressInfo=""},toUrl:function(e,s){this.$router.push({name:e,query:{address:s}})}}},w=m,h=(t("675f"),t("2877")),g=Object(h["a"])(w,a,r,!1,null,null,null);s["default"]=g.exports}}]);
//# sourceMappingURL=chunk-51452d9e.6e37906c.js.map