(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-084a"],{"0bfb":function(e,t,n){"use strict";var r=n("cb7c");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},1870:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-row",[n("b-col",{attrs:{cols:"12",xl:"12"}},[n("transition",{attrs:{name:"slide"}},[n("b-card",{attrs:{header:e.caption}},[n("b-table",{attrs:{hover:e.hover,striped:e.striped,bordered:e.bordered,small:e.small,fixed:e.fixed,responsive:"sm",items:e.items,fields:e.fields,"current-page":e.currentPage,"per-page":e.perPage},on:{"row-clicked":e.rowClicked},scopedSlots:e._u([{key:"id",fn:function(t){return[n("strong",[e._v(e._s(t.item.id))])]}},{key:"usuario",fn:function(t){return[n("strong",[e._v(e._s(t.item.usuario))])]}},{key:"descripción",fn:function(t){return[n("strong",[e._v("Intento de autenticación fallido - "+e._s(t.item.ip))])]}},{key:"fecha",fn:function(t){return[n("strong",[e._v(e._s(e._f("listDate")(t.item.f_creacion)))])]}}])}),n("nav",[n("b-pagination",{attrs:{size:"sm","total-rows":e.getRowCount(e.items),"per-page":e.perPage,"prev-text":"Prev","next-text":"Next","hide-goto-end-buttons":""},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)],1)],1)],1)],1)},a=[],o=(n("28a5"),n("6b54"),n("6370"),n("db49")),i={name:"Alert",props:{caption:{type:String,default:"Historial de Alertas"},hover:{type:Boolean,default:!0},striped:{type:Boolean,default:!0},bordered:{type:Boolean,default:!1},small:{type:Boolean,default:!1},fixed:{type:Boolean,default:!1}},data:function(){return{items:[],fields:[{key:"usuario"},{key:"descripción"},{key:"fecha"}],currentPage:1,perPage:15,totalRows:0}},computed:{},mounted:function(){axios.defaults.headers.common["authorization"]=localStorage.getItem("token"),this.getAlerts()},methods:{getBadge:function(e){return"Active"===e?"success":"Inactive"===e?"secondary":"Pending"===e?"warning":"Banned"===e?"danger":"primary"},getRowCount:function(e){return e.length},userLink:function(e){return"users/".concat(e.toString())},rowClicked:function(e){var t=this.userLink(e.id);this.$router.push({path:t})},getUsername:function(e){return e.split(" ")[0]},getAlerts:function(){var e=this;axios.get("".concat(o["a"].API_URL,"/alerts?limit=1")).then(function(t){axios.get("".concat(o["a"].API_URL,"/alerts?limit=").concat(t.total)).then(function(t){e.items=t.data.data})})}}},c=i,s=(n("8f33"),n("2877")),u=Object(s["a"])(c,r,a,!1,null,"39e35392",null);t["default"]=u.exports},3846:function(e,t,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},4606:function(e,t,n){},6370:function(e,t,n){"use strict"},"6b54":function(e,t,n){"use strict";n("3846");var r=n("cb7c"),a=n("0bfb"),o=n("9e1e"),i="toString",c=/./[i],s=function(e){n("2aba")(RegExp.prototype,i,e,!0)};n("79e5")(function(){return"/a/b"!=c.call({source:"a",flags:"b"})})?s(function(){var e=r(this);return"/".concat(e.source,"/","flags"in e?e.flags:!o&&e instanceof RegExp?a.call(e):void 0)}):c.name!=i&&s(function(){return c.call(this)})},"8f33":function(e,t,n){"use strict";var r=n("4606"),a=n.n(r);a.a},db49:function(e,t,n){"use strict";n("cadf"),n("551c");var r={API_URL:"https://cicpc-novedades.herokuapp.com/api/v1",API_IMAGE:"https://cicpc-novedades.herokuapp.com/uploads",API_REPORT:"https://cicpc-report.herokuapp.com/api",RENDER_REPORT:"https://cicpc-report.herokuapp.com/"};t["a"]=r}}]);
//# sourceMappingURL=chunk-084a.f95b1ac0.js.map