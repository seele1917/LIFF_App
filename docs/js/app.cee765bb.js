(function(e){function t(t){for(var r,a,s=t[0],u=t[1],c=t[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function s(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"29a687ec"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"b376685a"}[e]+".css",o=u.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],l=c.getAttribute("data-href");if(l===r||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],p.parentNode.removeChild(p),n(i)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/LIFF_App/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("div",{staticClass:"d-flex align-center"},[n("v-avatar",{attrs:{size:"40px"}},[n("img",{attrs:{src:e.picture}})]),n("h3",{staticClass:"ml-3"},[e._v(e._s(e.name))])],1)]),n("v-content",[n("router-view",{attrs:{userId:e.userId}})],1)],1)},o=[],i=(n("b0c0"),{name:"App",data:function(){return{userId:null,name:null,picture:null}},created:function(){var e=this;liff.init({liffId:"1654022080-7DwzQZwY"}).then((function(){console.log("LIFF initialization successed"),liff.getProfile().then((function(t){e.userId=t.userId,e.name=t.displayName,e.picture=t.pictureUrl}))})).catch((function(e){console.log("LIFF initialization failed",e)}))}}),s=i,u=n("2877"),c=n("6544"),l=n.n(c),d=n("7496"),p=n("40dc"),f=n("8212"),h=n("a75b"),m=Object(u["a"])(s,a,o,!1,null,null,null),v=m.exports;l()(m,{VApp:d["a"],VAppBar:p["a"],VAvatar:f["a"],VContent:h["a"]});n("d3b7");var b=n("8c4f"),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("v-container",{attrs:{"grid-list-xs":""}},[n("v-list",{attrs:{"two-line":"",subheader:""}},[n("v-subheader",{staticClass:"d-flex justify-space-between"},[n("h3",[e._v("一覧")]),n("v-btn",{attrs:{color:"red",fab:"","x-small":"",dark:""},on:{click:e.register}},[n("v-icon",[e._v("mdi-plus")])],1)],1),e._l(e.searches,(function(t){return[n("v-divider",{key:t.search_id}),n("v-list-item",{key:t.search_id},[n("v-list-item-content",{on:{click:function(n){return e.update(t.search_id)}}},[n("v-list-item-title",{domProps:{textContent:e._s(t.search_word)}}),n("v-list-item-subtitle",{domProps:{textContent:e._s(t.search_id)}})],1),n("v-list-item-action",[e._v(" 通知 "),n("v-switch",{attrs:{"input-value":2!=t.notice},on:{change:function(n){return e.changeNotice(n,t.search_id)}}})],1)],1)]})),n("v-divider")],2)],1)],1)},y=[],_={name:"Homes",data:function(){return{info:null,searches:null}},props:{userId:String},methods:{update:function(e){this.$router.push({name:"About",params:{searchId:e,isUpdate:!0}})},register:function(){this.$router.push({name:"About",params:{isUpdate:!1}})},changeNotice:function(e,t){var n={user_id:this.userId,search_id:t,notice:e?0:2};this.$axios.post("/search/update",n)}},watch:{userId:{immediate:!0,handler:function(){var e=this;this.$axios.get("/searches/"+this.userId).then((function(t){console.log(t),e.searches=t.data.searches}))}}}},w=_,I=n("8336"),x=n("a523"),C=n("ce7e"),j=n("132d"),V=n("8860"),A=n("da13"),L=n("1800"),k=n("5d23"),O=n("e0c7"),P=n("b73d"),S=Object(u["a"])(w,g,y,!1,null,null,null),E=S.exports;l()(S,{VBtn:I["a"],VContainer:x["a"],VDivider:C["a"],VIcon:j["a"],VList:V["a"],VListItem:A["a"],VListItemAction:L["a"],VListItemContent:k["a"],VListItemSubtitle:k["b"],VListItemTitle:k["c"],VSubheader:O["a"],VSwitch:P["a"]}),r["a"].use(b["a"]);var T=[{path:"/",name:"Home",component:E},{path:"/about",name:"About",props:!0,component:function(){return n.e("about").then(n.bind(null,"f820"))}}],N=new b["a"]({mode:"history",routes:T}),$=N,F=n("f309");r["a"].use(F["a"]);var z=new F["a"]({}),B=n("7338"),U=n.n(B);r["a"].config.productionTip=!1,r["a"].prototype.$axios=U.a,U.a.defaults.baseURL="https://sj8r3633nc.execute-api.us-east-1.amazonaws.com/dev",U.a.defaults.headers.post["Content-Type"]="application/json;charset=utf-8",new r["a"]({router:$,vuetify:z,render:function(e){return e(v)}}).$mount("#app")}});
//# sourceMappingURL=app.cee765bb.js.map