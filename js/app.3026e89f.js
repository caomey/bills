(function(t){function e(e){for(var n,o,l=e[0],c=e[1],r=e[2],f=0,d=[];f<l.length;f++)o=l[f],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,r||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],n=!0,l=1;l<s.length;l++){var c=s[l];0!==i[c]&&(n=!1)}n&&(a.splice(e--,1),t=o(o.s=s[0]))}return t}var n={},i={app:0},a=[];function o(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=n,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(s,n,function(e){return t[e]}.bind(null,n));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/bills/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var r=0;r<l.length;r++)e(l[r]);var u=c;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"1ec9":function(t,e,s){"use strict";var n=s("e95a"),i=s.n(n);i.a},"1fbb":function(t,e,s){},"3aff":function(t,e,s){},4731:function(t,e,s){"use strict";var n=s("680b"),i=s.n(n);i.a},4823:function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},a=[],o=(s("3aff"),{}),l=o,c=s("2877"),r=Object(c["a"])(l,i,a,!1,null,null,null),u=r.exports,f=s("8c4f"),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"money"},[s("body",[s("Nav"),s("number-pad"),s("section",{staticClass:"types"},[s("ul",[s("li",{class:{selected:"-"===this.$store.state.types},on:{click:function(e){return t.selectType("-")}}},[t._v(" 支出 ")]),s("li",{class:{selected:"+"===this.$store.state.types},on:{click:function(e){return t.selectType("+")}}},[t._v(" 收入 ")])])]),s("section",{staticClass:"notes"},[s("span",[t._v("备注")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.notes,expression:"notes"}],attrs:{type:"text",placeholder:"请输入备注"},domProps:{value:t.notes},on:{input:function(e){e.target.composing||(t.notes=e.target.value)}}})]),s("div",{staticClass:"wrapper"},[s("section",{staticClass:"tags"},[s("div",{staticClass:"items"},t._l(t.tags,(function(e){return s("div",{key:e,class:["item",{selected:e===t.$store.state.selectedTags}],on:{click:t.selectTags}},[t._v(" "+t._s(e)+" ")])})),0),s("div",{staticClass:"addTag"},[s("button",{on:{click:t.addTags}},[t._v("添加标签")])])])])],1)])},p=[],v=s("5530"),m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"numberpad"},[s("div",{staticClass:"shownum"},[t._v(" "+t._s(t.amount)+" ")]),s("div",{staticClass:"buttons"},[s("button",{staticClass:"num",on:{click:t.inputContent}},[t._v("1")]),s("button",{staticClass:"num",on:{click:t.inputContent}},[t._v("2")]),s("button",{staticClass:"num",on:{click:t.inputContent}},[t._v("3")]),s("button",{staticClass:"del",on:{click:t.del}},[t._v("Del")]),s("button",{staticClass:"num",on:{click:t.inputContent}},[t._v("4")]),s("button",{staticClass:"num",on:{click:t.inputContent}},[t._v("5")]),s("button",{staticClass:"num",on:{click:t.inputContent}},[t._v("6")]),s("button",{staticClass:"clear",on:{click:t.clear}},[t._v("Clear")]),s("button",{staticClass:"num",on:{click:t.inputContent}},[t._v("7")]),s("button",{staticClass:"num",on:{click:t.inputContent}},[t._v("8")]),s("button",{staticClass:"num",on:{click:t.inputContent}},[t._v("9")]),s("button",{staticClass:"ok",on:{click:t.submit}},[t._v("OK")]),s("button",{staticClass:"zero",on:{click:t.inputContent}},[t._v("0")]),s("button",{staticClass:"num",on:{click:t.inputContent}},[t._v(".")])])])},g=[],b=(s("fb6a"),s("d3b7"),s("25f0"),s("2f62")),h={data:function(){return{amount:"0"}},methods:Object(v["a"])(Object(v["a"])({},Object(b["b"])(["addBills"])),{},{inputContent:function(t){var e=t.target.innerText;"0"===this.amount&&"."!==e?this.amount=e:this.amount.length<16&&(this.amount+=e)},clear:function(){this.amount="0"},del:function(){var t=this.amount;1===t.length?this.amount="0":this.amount=t.substring(0,t.length-1)},submit:function(){this.$store.state.currentAmount=parseInt(this.amount);var t={date:JSON.stringify(new Date).slice(1,11),tags:this.selectedTags,notes:this.notes,amount:this.$store.state.currentAmount,types:this.types,id:this.createId()};this.notes="",this.amount="0",this.addBills(t)},createId:function(){var t=parseInt(localStorage.getItem("billId")||"0")||0;return t++,localStorage.setItem("billId",t.toString()),t}}),computed:Object(v["a"])(Object(v["a"])({},Object(b["c"])(["bills","notes","selectedTags","types"])),{},{notes:{get:function(){return this.$store.state.notes},set:function(t){this.$store.state.notes=t}}})},y=h,_=(s("99ab"),Object(c["a"])(y,m,g,!1,null,null,null)),C=_.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",[s("div",{staticClass:"nav"},[s("router-link",{staticClass:"item",attrs:{to:"/money"}},[t._v("记账")]),s("router-link",{staticClass:"item",attrs:{to:"/bill"}},[t._v("账单")]),s("router-link",{staticClass:"item",attrs:{to:"/tags"}},[t._v("标签")])],1)])},T=[],k=(s("1ec9"),{}),j=Object(c["a"])(k,O,T,!1,null,"543f6938",null),S=j.exports,$={components:{NumberPad:C,Nav:S},data:function(){return{}},methods:Object(v["a"])(Object(v["a"])({},Object(b["b"])(["initTags","addTags"])),{},{selectTags:function(t){this.$store.state.selectedTags=t.target.innerText},selectType:function(t){"-"===t?(this.$store.state.types="-",console.log("支出")):(this.$store.state.types="+",console.log("收入"))}}),computed:Object(v["a"])(Object(v["a"])({},Object(b["c"])(["tags","notes"])),{},{notes:{get:function(){return this.$store.state.notes},set:function(t){this.$store.state.notes=t}}}),created:function(){this.initTags()}},x=$,w=(s("ce5e"),Object(c["a"])(x,d,p,!1,null,"38a06e42",null)),B=w.exports,N=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tags"},[s("section",[s("span",[t._v("点击修改标签")]),s("div",{staticClass:"items"},t._l(t.tags,(function(e){return s("div",{key:e,staticClass:"item"},[s("span",{on:{click:function(s){return t.updateTags(e)}}},[t._v(t._s(e))]),s("a",{staticClass:"icon",on:{click:function(s){return t.removeTags(e)}}})])})),0)]),s("Nav")],1)},I=[],J={components:{Nav:S},data:function(){return{}},methods:Object(v["a"])({},Object(b["b"])(["removeTags","updateTags","initTags"])),computed:Object(v["a"])({},Object(b["c"])(["tags"])),created:function(){this.initTags()}},P=J,E=(s("4731"),Object(c["a"])(P,N,I,!1,null,"4c0f938a",null)),A=E.exports,M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bill"},[s("section",[s("div",{staticClass:"types"},[s("ul",[s("li",{class:{selected:"-"===t.types},on:{click:function(e){return t.selectType("-")}}},[t._v(" 支出 ")]),s("li",{class:{selected:"+"===t.types},on:{click:function(e){return t.selectType("+")}}},[t._v(" 收入 ")])])]),s("div",{staticClass:"bills"},t._l(t.filteredBills,(function(e,n){return s("div",{key:e.index,staticClass:"billitem"},[s("div",{staticClass:"title"},[s("div",{staticClass:"date"},[t._v(t._s(n))]),s("div",{staticClass:"sum"},[t._v(t._s(t.dayAmount(n))+"￥")])]),s("div",{staticClass:"onedayitems",on:{click:t.removeBills}},t._l(e,(function(e){return s("div",{key:e.index,staticClass:"item"},[s("div",{staticClass:"content"},[s("div",{staticClass:"tag"},[t._v(t._s(e.tags))]),s("div",{staticClass:"notes"},[t._v(t._s(e.notes))])]),s("div",{staticClass:"amount"},[s("span",[t._v(t._s(t.types)+t._s(e.amount)+"￥")]),s("a",{staticClass:"icon",on:{click:function(s){return t.removeBills(e.id)}}})])])})),0)])})),0)]),s("Nav")],1)},D=[],z=(s("4de4"),s("13d5"),{components:{Nav:S},data:function(){return{}},methods:Object(v["a"])(Object(v["a"])({selectType:function(t){"-"===t?(this.types="-",console.log("支出")):(this.types="+",console.log("收入"))}},Object(b["b"])(["removeBills","initBills"])),{},{dayAmount:function(t){var e=this;console.log(111,JSON.stringify(this.bills,null,2));var s=this.bills.filter((function(s){return s.date+""===t&&s.types==e.types}));console.log(666,JSON.stringify(s,null,2));var n=s.reduce((function(t,e){return t+e.amount}),0);return n},removeBills:function(t){this.bills=this.bills.filter((function(e){return e.id!==t})),this.$store.commit("saveBills"),this.initBills()}}),computed:{types:{set:function(t){this.$store.state.types=t},get:function(){return this.$store.state.types}},bills:{set:function(t){this.$store.state.bills=t},get:function(){return this.$store.state.bills}},filteredBills:{get:function(){var t=this,e=this.bills.filter((function(e){return e.types==t.types})).reduce((function(t,e){return t[e.date]=t[e.date]||[],t[e.date].push({tags:e.tags,amount:e.amount,notes:e.notes,id:e.id}),t}),{});return console.log("filteredBills:",JSON.stringify(e,null,2)),e}}},watch:{},created:function(){this.initBills()}}),K=z,q=(s("f371"),Object(c["a"])(K,M,D,!1,null,null,null)),F=q.exports;n["a"].use(f["a"]);var G=[{path:"/",redirect:"/money"},{path:"/money",component:B},{path:"/tags",component:A},{path:"/bill",component:F}],H=new f["a"]({routes:G}),L=H;s("c975"),s("a434");n["a"].use(b["a"]);var Q=new b["a"].Store({state:{tags:[],bills:[],currentAmount:"0",notes:"",selectedTags:"",types:"-"},mutations:{initTags:function(t){null===localStorage.getItem("tags")?(t.tags=["吃饭","购物","打车","游戏充值","工资","兼职"],this.commit("saveTags")):this.commit("fetchTags")},fetchTags:function(t){t.tags=JSON.parse(localStorage.getItem("tags"))},saveTags:function(t){localStorage.setItem("tags",JSON.stringify(t.tags))},addTags:function(t){var e=prompt("请输入标签");t.tags.indexOf(e)>=0?alert("该标签已存在！"):e?(console.log("新增标签：",e),t.tags.push(e),this.commit("saveTags")):alert("标签输入为空，请重新输入！")},removeTags:function(t,e){console.log("删除标签：",e),t.tags.splice(t.tags.indexOf(e),1),this.commit("saveTags")},updateTags:function(t,e){var s=prompt("请修改标签");console.log("修改标签为：",s),t.tags.splice(t.tags.indexOf(e),1,s),this.commit("saveTags")},initBills:function(t){null!==localStorage.getItem("bills")?this.commit("fetchBills"):localStorage.setItem("bills","[]")},fetchBills:function(t){t.bills=JSON.parse(localStorage.getItem("bills"))},saveBills:function(t){localStorage.setItem("bills",JSON.stringify(t.bills))},addBills:function(t,e){t.bills.push(e),this.commit("saveBills"),alert("账单创建成功！")}}});n["a"].config.productionTip=!1,new n["a"]({router:L,store:Q,render:function(t){return t(u)}}).$mount("#app")},"680b":function(t,e,s){},"99ab":function(t,e,s){"use strict";var n=s("1fbb"),i=s.n(n);i.a},"9a84":function(t,e,s){},ce5e:function(t,e,s){"use strict";var n=s("4823"),i=s.n(n);i.a},e95a:function(t,e,s){},f371:function(t,e,s){"use strict";var n=s("9a84"),i=s.n(n);i.a}});
//# sourceMappingURL=app.3026e89f.js.map