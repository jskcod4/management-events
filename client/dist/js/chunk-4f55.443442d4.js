(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f55"],{"67c7":function(t,o,e){"use strict";e.r(o);var a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"animated fadeIn"},[e("b-row",[e("b-col",{attrs:{sm:"12"}},[e("b-card",[e("div",{attrs:{slot:"header"},slot:"header"},[e("strong",[t._v("Modificar Cronología")])]),e("b-row",[e("b-col",{attrs:{sm:"6"}},[e("b-form-group",{attrs:{description:"CC-"+t.port.clise,label:"Clise","laber-for":"clise",horizontal:!1}},[e("b-form-input",{attrs:{disabled:"COMPLETADO"===t.receptionData.estado,type:"number",id:"clise"},model:{value:t.port.clise,callback:function(o){t.$set(t.port,"clise",o)},expression:"port.clise"}})],1)],1),e("b-col",{attrs:{sm:"6"}},[e("b-form-group",{attrs:{description:"K-18-0071-"+t.port.exp,label:"Exp","laber-for":"exp",horizontal:!1}},[e("b-form-input",{attrs:{disabled:"COMPLETADO"===t.receptionData.estado,type:"number",id:"exp"},model:{value:t.port.exp,callback:function(o){t.$set(t.port,"exp",o)},expression:"port.exp"}})],1)],1)],1),e("b-row",[e("b-col",{attrs:{sm:"6"}},[e("b-form-group",{attrs:{description:"Ej: Delegación Estadal Bolívar",label:"Dependencia","laber-for":"dependencia",horizontal:!1}},[e("b-form-input",{attrs:{type:"text",id:"dependencia"},model:{value:t.port.dependencia,callback:function(o){t.$set(t.port,"dependencia",o)},expression:"port.dependencia"}})],1)],1),e("b-col",{attrs:{sm:"6"}},[e("b-form-group",{attrs:{description:"Ej: 10",label:"Memorando número","laber-for":"memo",horizontal:!1}},[e("b-form-input",{attrs:{type:"text",id:"memo"},model:{value:t.port.memo,callback:function(o){t.$set(t.port,"memo",o)},expression:"port.memo"}})],1)],1),e("b-col",{attrs:{sm:"6"}},[e("b-form-group",{attrs:{description:"Ej: 19/07/2018",label:"Fecha Memorando","laber-for":"f_memo",horizontal:!1}},[e("b-form-input",{attrs:{type:"date",id:"f_memo"},model:{value:t.port.f_memo,callback:function(o){t.$set(t.port,"f_memo",o)},expression:"port.f_memo"}})],1)],1),e("b-col",{attrs:{sm:"6"}},[e("b-form-group",{attrs:{description:"Ej: Sub Delegación",label:"Solicitado por:","laber-for":"solicitado_por",horizontal:!1}},[e("b-form-input",{attrs:{type:"text",id:"solicitado_por"},model:{value:t.port.solicitado_por,callback:function(o){t.$set(t.port,"solicitado_por",o)},expression:"port.solicitado_por"}})],1)],1),e("b-col",{attrs:{sm:"6"}},[e("b-form-group",{attrs:{description:"Ej: 19/07/2018",label:"Fecha del caso","laber-for":"f_caso",horizontal:!1}},[e("b-form-input",{attrs:{type:"date",id:"f_caso"},model:{value:t.port.f_caso,callback:function(o){t.$set(t.port,"f_caso",o)},expression:"port.f_caso"}})],1)],1),e("b-col",{attrs:{sm:"6"}},[e("b-form-group",{attrs:{description:"Ej: José Rodríguez",label:"Agraviado","laber-for":"agraviado",horizontal:!1}},[e("b-form-input",{attrs:{type:"text",id:"f_caso"},model:{value:t.port.agraviado,callback:function(o){t.$set(t.port,"agraviado",o)},expression:"port.agraviado"}})],1)],1),e("b-col",{attrs:{sm:"6"}},[e("b-form-group",{attrs:{description:"Ej: José Rodríguez",label:"Dibujante","laber-for":"dibujante",horizontal:!1}},[t.users.length?e("select",{directives:[{name:"model",rawName:"v-model",value:t.port.dibujante,expression:"port.dibujante"}],staticClass:"form-control",on:{change:function(o){var e=Array.prototype.filter.call(o.target.options,function(t){return t.selected}).map(function(t){var o="_value"in t?t._value:t.value;return o});t.$set(t.port,"dibujante",o.target.multiple?e:e[0])}}},t._l(t.users,function(o,a){return"OPERADOR_HECHOS"===o.rol?e("option",{domProps:{value:o.id}},[o.nombre&&o.apellido&&o.rol?[t._v("\n                    "+t._s(o.nombre)+" "+t._s(o.apellido)+" - "+t._s(o.rol)+" \n                  ")]:t._e()],2):t._e()})):t._e()])],1),e("b-col",{attrs:{sm:"6"}},[e("b-form-group",{attrs:{description:"Ej: José Rodríguez",label:"Fecha del R.H","laber-for":"f_rh",horizontal:!1}},[e("b-form-input",{attrs:{type:"date",id:"f_caso"},model:{value:t.port.f_rh,callback:function(o){t.$set(t.port,"f_rh",o)},expression:"port.f_rh"}})],1)],1)],1),e("b-row",[e("b-col",{attrs:{sm:"6"}},[e("b-form-group",{attrs:{description:"Ej: Sub Delegación",label:"Dependencia","laber-for":"dependencia2",horizontal:!1}},[e("b-form-input",{attrs:{type:"text",id:"f_caso"},model:{value:t.port.dependencia2,callback:function(o){t.$set(t.port,"dependencia2",o)},expression:"port.dependencia2"}})],1)],1),e("b-col",{attrs:{sm:"6"}},[e("b-form-group",{attrs:{description:"Ej: Brigada contra Robo y Hurto",label:"Solicitado por:","laber-for":"solicitado_por2",horizontal:!1}},[e("b-form-input",{attrs:{type:"text",id:"solicitado_por"},model:{value:t.port.solicitado_por2,callback:function(o){t.$set(t.port,"solicitado_por2",o)},expression:"port.solicitado_por2"}})],1)],1),e("b-col",{attrs:{sm:"6"}},[e("b-form-group",{attrs:{description:"Ej: José Rodríguez",label:"Agraviado","laber-for":"agraviado2",horizontal:!1}},[e("b-form-input",{attrs:{type:"text",id:"f_caso"},model:{value:t.port.agraviado2,callback:function(o){t.$set(t.port,"agraviado2",o)},expression:"port.agraviado2"}})],1)],1),e("b-col",{attrs:{sm:"6"}},[e("b-form-group",{attrs:{description:"",label:"Dirección S.S","laber-for":"direccion",horizontal:!1}},[e("b-form-input",{attrs:{type:"text",id:"direccion"},model:{value:t.port.direccion,callback:function(o){t.$set(t.port,"direccion",o)},expression:"port.direccion"}})],1)],1),e("b-col",{attrs:{sm:"12"}},[e("b-form-group",{attrs:{description:"",label:"Datos Aportados por:","laber-for":"origen_datos",horizontal:!1}},[e("b-form-input",{attrs:{type:"text"},model:{value:t.port.origen_datos,callback:function(o){t.$set(t.port,"origen_datos",o)},expression:"port.origen_datos"}})],1)],1)],1),e("b-row",[e("b-col",{attrs:{sm:"12"}},[e("p",[t._v("Características del Solicitado")])]),e("b-col",{attrs:{sm:"4"}},[e("b-form-group",{attrs:{description:"Ej: 18-25",label:"Edad","laber-for":"edad",horizontal:!1}},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.port.edad,expression:"port.edad"}],staticClass:"form-control",on:{change:function(o){var e=Array.prototype.filter.call(o.target.options,function(t){return t.selected}).map(function(t){var o="_value"in t?t._value:t.value;return o});t.$set(t.port,"edad",o.target.multiple?e:e[0])}}},[e("option",{attrs:{value:"18-24"}},[t._v("18-24")]),e("option",{attrs:{value:"24-28"}},[t._v("24-28")]),e("option",{attrs:{value:"28-32"}},[t._v("28-32")]),e("option",{attrs:{value:"32-45"}},[t._v("32-45")]),e("option",{attrs:{value:"45-60"}},[t._v("45-60")]),e("option",{attrs:{value:"60+"}},[t._v("60+")])])])],1),e("b-col",{attrs:{sm:"4"}},[e("b-form-group",{attrs:{description:"Ej: Trigueña",label:"Color de Piel","laber-for":"color_piel",horizontal:!1}},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.port.color_piel,expression:"port.color_piel"}],staticClass:"form-control",on:{change:function(o){var e=Array.prototype.filter.call(o.target.options,function(t){return t.selected}).map(function(t){var o="_value"in t?t._value:t.value;return o});t.$set(t.port,"color_piel",o.target.multiple?e:e[0])}}},[e("option",{attrs:{value:"AMARILLA"}},[t._v("Amarilla")]),e("option",{attrs:{value:"BLANCA"}},[t._v("Blanca")]),e("option",{attrs:{value:"MORENO"}},[t._v("Moreno")]),e("option",{attrs:{value:"NEGRA"}},[t._v("Negra")]),e("option",{attrs:{value:"ROJIZA"}},[t._v("Rojiza")]),e("option",{attrs:{value:"TRIGUEÑA"}},[t._v("Trigueña")])])])],1),e("b-col",{attrs:{sm:"4"}},[e("b-form-group",{attrs:{description:"Ej: Mediana",label:"Boca","laber-for":"boca",horizontal:!1}},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.port.boca,expression:"port.boca"}],staticClass:"form-control",on:{change:function(o){var e=Array.prototype.filter.call(o.target.options,function(t){return t.selected}).map(function(t){var o="_value"in t?t._value:t.value;return o});t.$set(t.port,"boca",o.target.multiple?e:e[0])}}},[e("option",{attrs:{value:"GRANDE"}},[t._v("Grande")]),e("option",{attrs:{value:"MEDIANA"}},[t._v("Mediana")]),e("option",{attrs:{value:"PEQUEÑA"}},[t._v("Pequeña")])])])],1),e("b-col",{attrs:{sm:"4"}},[e("b-form-group",{attrs:{description:"Ej: Gruesos",label:"Labios","laber-for":"labios",horizontal:!1}},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.port.labios,expression:"port.labios"}],staticClass:"form-control",on:{change:function(o){var e=Array.prototype.filter.call(o.target.options,function(t){return t.selected}).map(function(t){var o="_value"in t?t._value:t.value;return o});t.$set(t.port,"labios",o.target.multiple?e:e[0])}}},[e("option",{attrs:{value:"DELGADOS"}},[t._v("Delgados")]),e("option",{attrs:{value:"GRUESOS"}},[t._v("Gruesos")]),e("option",{attrs:{value:"LEPROFINOS"}},[t._v("Leprofinos")]),e("option",{attrs:{value:"INF. PROMINENTE"}},[t._v("Inf. Prominente")]),e("option",{attrs:{value:"SUP. PROMINENTE"}},[t._v("Sup. Prominente")]),e("option",{attrs:{value:"NORMALES"}},[t._v("Normales")])])])],1),e("b-col",{attrs:{sm:"4"}},[e("b-form-group",{attrs:{description:"Ej: 1.71 a 1.80",label:"Estatura","laber-for":"estatura",horizontal:!1}},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.port.estatura,expression:"port.estatura"}],staticClass:"form-control",on:{change:function(o){var e=Array.prototype.filter.call(o.target.options,function(t){return t.selected}).map(function(t){var o="_value"in t?t._value:t.value;return o});t.$set(t.port,"estatura",o.target.multiple?e:e[0])}}},[e("option",{attrs:{value:"1.55 o MENOS"}},[t._v("1.55 o Menos")]),e("option",{attrs:{value:"1.56 a 1.60"}},[t._v("1.56 a 1.60")]),e("option",{attrs:{value:"1.61 a 1.70"}},[t._v("1.61 a 1.70")]),e("option",{attrs:{value:"1.71 a 1.80"}},[t._v("1.71 a 1.80")]),e("option",{attrs:{value:"1.81 a 1.90"}},[t._v("1.81 a 1.90")]),e("option",{attrs:{value:"1.91 o MAS"}},[t._v("1.91 a Más")])])])],1),e("b-col",{attrs:{sm:"4"}},[e("b-form-group",{attrs:{description:"Ej: Negro",label:"Color de Cabello","laber-for":"color_cabello",horizontal:!1}},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.port.color_cabello,expression:"port.color_cabello"}],staticClass:"form-control",on:{change:function(o){var e=Array.prototype.filter.call(o.target.options,function(t){return t.selected}).map(function(t){var o="_value"in t?t._value:t.value;return o});t.$set(t.port,"color_cabello",o.target.multiple?e:e[0])}}},[e("option",{attrs:{value:"AMARILLO"}},[t._v("Amarillo")]),e("option",{attrs:{value:"BLANCO"}},[t._v("Blanco")]),e("option",{attrs:{value:"ENTRECANO"}},[t._v("Entrecano")]),e("option",{attrs:{value:"CASTAÑO OSCURO"}},[t._v("Castaño Oscuro")]),e("option",{attrs:{value:"NEGRO"}},[t._v("Negro")]),e("option",{attrs:{value:"ROJIZO"}},[t._v("Rojizo")]),e("option",{attrs:{value:"TEÑIDO"}},[t._v("Teñido")])])])],1),e("b-col",{attrs:{sm:"4"}},[e("b-form-group",{attrs:{description:"Ej: 91kg a 180kg",label:"Peso","laber-for":"peso",horizontal:!1}},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.port.peso,expression:"port.peso"}],staticClass:"form-control",on:{change:function(o){var e=Array.prototype.filter.call(o.target.options,function(t){return t.selected}).map(function(t){var o="_value"in t?t._value:t.value;return o});t.$set(t.port,"peso",o.target.multiple?e:e[0])}}},[e("option",{attrs:{value:"30 o MENOS"}},[t._v("30 o Menos")]),e("option",{attrs:{value:"31 a 40"}},[t._v("31 a 40")]),e("option",{attrs:{value:"41 a 60"}},[t._v("41 a 60")]),e("option",{attrs:{value:"61 a 70"}},[t._v("61 a 70")]),e("option",{attrs:{value:"71 a 90"}},[t._v("71 a 90")]),e("option",{attrs:{value:"91 a 100"}},[t._v("91 a 100")]),e("option",{attrs:{value:"101 o MAS"}},[t._v("101 o Mas")])])])],1),e("b-col",{attrs:{sm:"4"}},[e("b-form-group",{attrs:{description:"Ej: Bigote Abundante",label:"Barba-Bigote","laber-for":"barba_bigote",horizontal:!1}},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.port.barba_bigote,expression:"port.barba_bigote"}],staticClass:"form-control",on:{change:function(o){var e=Array.prototype.filter.call(o.target.options,function(t){return t.selected}).map(function(t){var o="_value"in t?t._value:t.value;return o});t.$set(t.port,"barba_bigote",o.target.multiple?e:e[0])}}},[e("option",{attrs:{value:"BARBILLA"}},[t._v("Barbilla")]),e("option",{attrs:{value:"BARBA ABUNDANTE"}},[t._v("Barba Abundante")]),e("option",{attrs:{value:"BARBA ESCASA"}},[t._v("Barba Escasa")]),e("option",{attrs:{value:"BIGOTE ABUNDANTE"}},[t._v("Bigote Abundante")]),e("option",{attrs:{value:"BIGOTE ESCASO"}},[t._v("Bigote Escaso")]),e("option",{attrs:{value:"PATILLA CORTA"}},[t._v("Patilla Corta")]),e("option",{attrs:{value:"PATILLA LARGA"}},[t._v("Patilla Larga")])])])],1),e("b-col",{attrs:{sm:"4"}},[e("b-form-group",{attrs:{description:"Ej: Grande",label:"Nariz","laber-for":"nariz",horizontal:!1}},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.port.nariz,expression:"port.nariz"}],staticClass:"form-control",on:{change:function(o){var e=Array.prototype.filter.call(o.target.options,function(t){return t.selected}).map(function(t){var o="_value"in t?t._value:t.value;return o});t.$set(t.port,"nariz",o.target.multiple?e:e[0])}}},[e("option",{attrs:{value:"GRANDE"}},[t._v("Grande")]),e("option",{attrs:{value:"PEQUEÑA"}},[t._v("Pequeña")]),e("option",{attrs:{value:"ACHATADA"}},[t._v("Achatada")]),e("option",{attrs:{value:"AGUILEÑA"}},[t._v("Aguileña")]),e("option",{attrs:{value:"PERFILADA"}},[t._v("Perfilada")]),e("option",{attrs:{value:"RESPINGADA"}},[t._v("Respingada")]),e("option",{attrs:{value:"TORCIDA"}},[t._v("Tabique Hundido")])])])],1),e("b-col",{attrs:{sm:"4"}},[e("b-form-group",{attrs:{description:"Ej: Parpados Oscuros",label:"Ojos","laber-for":"ojos",horizontal:!1}},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.port.ojos,expression:"port.ojos"}],staticClass:"form-control",on:{change:function(o){var e=Array.prototype.filter.call(o.target.options,function(t){return t.selected}).map(function(t){var o="_value"in t?t._value:t.value;return o});t.$set(t.port,"ojos",o.target.multiple?e:e[0])}}},[e("option",{attrs:{value:"ACHINADOS"}},[t._v("Achinados")]),e("option",{attrs:{value:"SALTONES"}},[t._v("Saltones")]),e("option",{attrs:{value:"GRANDES"}},[t._v("Grandes")]),e("option",{attrs:{value:"PEQUEÑOS"}},[t._v("Pequeños")]),e("option",{attrs:{value:"ARTIFICIALES"}},[t._v("Artificiales")])])])],1),e("b-col",{attrs:{sm:"4"}},[e("b-form-group",{attrs:{description:"Ej: Azules",label:"Ojos (iris)","laber-for":"ojos_iris",horizontal:!1}},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.port.ojos_iris,expression:"port.ojos_iris"}],staticClass:"form-control",on:{change:function(o){var e=Array.prototype.filter.call(o.target.options,function(t){return t.selected}).map(function(t){var o="_value"in t?t._value:t.value;return o});t.$set(t.port,"ojos_iris",o.target.multiple?e:e[0])}}},[e("option",{attrs:{value:"AZULES"}},[t._v("Azules")]),e("option",{attrs:{value:"GRISES"}},[t._v("Grises")]),e("option",{attrs:{value:"PARPADOS OSCUROS"}},[t._v("Parpados Oscuros")]),e("option",{attrs:{value:"PARDOS CLAROS"}},[t._v("Pardos Claro")]),e("option",{attrs:{value:"VERDES"}},[t._v("Verdes")])])])],1),e("b-col",{attrs:{sm:"4"}},[e("b-form-group",{attrs:{description:"Ej: Alargada",label:"Cabeza","laber-for":"Cabeza",horizontal:!1}},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.port.cabeza,expression:"port.cabeza"}],staticClass:"form-control",on:{change:function(o){var e=Array.prototype.filter.call(o.target.options,function(t){return t.selected}).map(function(t){var o="_value"in t?t._value:t.value;return o});t.$set(t.port,"cabeza",o.target.multiple?e:e[0])}}},[e("option",{attrs:{value:"ALARGADA"}},[t._v("Alargada")]),e("option",{attrs:{value:"GRANDE"}},[t._v("Grande")]),e("option",{attrs:{value:"PEQUEÑA"}},[t._v("Pequeña")]),e("option",{attrs:{value:"NORMAL"}},[t._v("Normal")])])])],1),e("b-col",{attrs:{sm:"4"}},[e("b-form-group",{attrs:{description:"Ej: Liso",label:"Tipo Cabello","laber-for":"tipo_cabello",horizontal:!1}},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.port.tipo_cabello,expression:"port.tipo_cabello"}],staticClass:"form-control",on:{change:function(o){var e=Array.prototype.filter.call(o.target.options,function(t){return t.selected}).map(function(t){var o="_value"in t?t._value:t.value;return o});t.$set(t.port,"tipo_cabello",o.target.multiple?e:e[0])}}},[e("option",{attrs:{value:"LISO"}},[t._v("Liso")]),e("option",{attrs:{value:"CRESPO"}},[t._v("Crespo")]),e("option",{attrs:{value:"AFRO"}},[t._v("Afro")]),e("option",{attrs:{value:"ONDULADO"}},[t._v("Ondulado")]),e("option",{attrs:{value:"LISO REBELDE"}},[t._v("Liso Rebelde")])])])],1)],1),e("b-row",[e("b-col",{attrs:{sm:"12"}},[e("b-form-group",{attrs:{label:"Comentario","laber-for":"comentarios",horizontal:!1}},[e("b-form-textarea",{staticClass:"form-control",attrs:{rows:"5"},model:{value:t.port.comentarios,callback:function(o){t.$set(t.port,"comentarios",o)},expression:"port.comentarios"}})],1)],1)],1)],1),e("b-card",[e("div",{attrs:{slot:"header"},slot:"header"},[e("strong",[t._v("Imágenes")])]),e("b-row",[e("b-col",{attrs:{sm:"12"}},[e("div",{staticClass:"wrapper"},[e("gallery",{attrs:{images:t.images,index:t.index},on:{close:function(o){t.index=null}}}),t._l(t.images,function(o,a){return e("div",{key:a,staticClass:"image",class:["image",t.index==a?"selected":""],style:{backgroundImage:"url("+o+")",width:"100%",height:"300px"},on:{click:function(o){t.index=a}}})})],2),e("vue-dropzone",{ref:"myVueDropzone",attrs:{id:"dropzone",options:t.dropzoneOptions},on:{"vdropzone-success":t.reloadImages,"vdropzone-sending":t.sendingEvent}})],1)],1)],1),e("b-card",[e("div",{attrs:{slot:"header"},slot:"header"},[e("strong",[t._v("Datos de Recepción")])]),t.loading?t._e():e("b-row",[e("b-col",{attrs:{sm:"6"}},[e("b-form-group",{attrs:{label:"Tipo","laber-for":"tipo_recepcion",disabled:!0,horizontal:!1}},[e("b-form-input",{staticClass:"form-control",attrs:{disabled:"",value:t.receptionData.tipo_recepcion,type:"text",id:"clise"}})],1)],1),e("b-col",{attrs:{sm:"6"}},[e("b-form-group",{attrs:{label:"Funcionario",disabled:!0,horizontal:!1}},[e("b-form-input",{staticClass:"form-control",attrs:{disabled:"",value:t.receptionData.Usuario.nombre+" "+t.receptionData.Usuario.apellido,type:"text"}})],1)],1),e("b-col",{attrs:{sm:"12"}},[e("b-form-group",{attrs:{label:"Descripción","laber-for":"Descripción",disabled:!0,horizontal:!1}},[e("b-form-textarea",{staticClass:"form-control",attrs:{disabled:"",value:t.receptionData.descripcion,rows:"5"}})],1)],1)],1)],1),e("div",{staticClass:"form-actions padding"},[t.isNew?e("b-button",{staticClass:"mr",attrs:{type:"submit",variant:"primary"},on:{click:function(o){t.storePortrait()}}},[t._v("\n          Crear\n        ")]):t._e(),t.isNew?t._e():e("b-button",{staticClass:"mr",attrs:{type:"submit",variant:"primary"},on:{click:function(o){t.updatePortrait()}}},[t._v("\n          Actualizar\n        ")]),e("b-button",{staticClass:"mr",attrs:{type:"button",variant:"secondary"},on:{click:function(o){t.$router.go(-1)}}},[t._v("\n          Cancelar\n        ")]),"EN_PROCESO"===t.receptionData.estado?e("b-button",{staticClass:"mr",attrs:{disabled:"COMPLETADO"===t.receptionData,type:"button",variant:"primary"},on:{click:function(o){t.onChangeStatus()}}},[t._v("\n          Marcar Como Procesada\n        ")]):t._e(),t._v("\n        Estado: "+t._s(t.receptionData.estado)+"\n      ")],1)],1)],1)],1)},r=[],i=(e("7f7f"),e("f751"),e("ac6a"),e("28a5"),e("92c3")),s=e.n(i),n=(e("1e3f"),e("067c")),l=e.n(n),c=e("db49"),p=e("1940"),u=e.n(p),d=(e("07a4"),e("c1df")),v=e.n(d),m={components:{vueDropzone:s.a,gallery:l.a},data:function(){return{users:[],user:{},port:{},receptionData:{},images:[],index:null,isNew:!1,loading:!0,dropzoneOptions:{url:"".concat(c["a"].API_URL,"/pictures"),dictDefaultMessage:"CARGAR IMAGEN",headers:{authorization:localStorage.getItem("token")}},options:[{text:"Completado",value:"COMPLETADO"},{text:"En Proceso",value:"EN_PROCESO"}]}},mounted:function(){var t=this;this.user=this.$store.getters.user,axios.defaults.headers.common["authorization"]=localStorage.getItem("token"),this.portraitExist().then(function(o){if(t.isEmpty(o.data.data))t.isNew=!0;else{t.isNew=!1;var e=o.data.data.clise.split("-")[1],a=o.data.data.exp.split("-")[3];t.port=o.data.data,t.port.clise=e,t.port.exp=a,t.port.f_memo=v()(t.port.f_memo).format("YYYY-MM-DD"),t.port.f_caso=v()(t.port.f_caso).format("YYYY-MM-DD"),t.port.f_rh=v()(t.port.f_rh).format("YYYY-MM-DD"),t.port.Evidencium.Imagens.forEach(function(o){var e="".concat(c["a"].API_IMAGE,"/").concat(o.nombre_archivo);t.images.push(e)})}}),this.getUsers(),this.getEvidence()},methods:{portraitExist:function(){var t=this;return new Promise(function(o,e){axios.get("".concat(c["a"].API_URL,"/evidences/").concat(t.$route.params.id,"/portraits")).then(function(t){o(t)})})},storePortrait:function(){var t=this;Object.assign(this.port,{evidencia_id:this.$route.params.id}),Object.assign(this.port,{clise:"CC-".concat(this.port.clise)}),Object.assign(this.port,{exp:"K-18-0071-".concat(this.port.exp)}),Event.$emit("loading"),axios.post("".concat(c["a"].API_URL,"/portraits"),this.port).then(function(o){Event.$emit("stopLoading"),u()({title:"Retrato modificado exitosamente",text:"",icon:"success"}),t.$router.push({name:"chronologyList"})}).catch(function(t){Event.$emit("stopLoading"),"SequelizeDatabaseError"==t.response.data.name&&u()({title:"Atención",text:"Algo ha salido mal, intentelo nuevamente",icon:"error"}),t.response.data.message&&u()({title:"Atención",text:"".concat(t.response.data.message),icon:"error"}),t.response.data.errors.forEach(function(t){u()({title:"Atención",text:"".concat(t.message),icon:"error"})})})},updatePortrait:function(){var t=this;Object.assign(this.port,{clise:"CC-".concat(this.port.clise)}),Object.assign(this.port,{exp:"K-18-0071-".concat(this.port.exp)}),Event.$emit("loading"),axios.put("".concat(c["a"].API_URL,"/portraits/").concat(this.port.id),this.port).then(function(o){Event.$emit("stopLoading"),u()({title:"Retrato modificado exitosamente",text:"",icon:"success"}),t.$router.push({name:"chronologyList"})}).catch(function(t){Event.$emit("stopLoading"),"SequelizeDatabaseError"==t.response.data.name&&u()({title:"Atención",text:"Algo ha salido mal, intentelo nuevamente",icon:"error"}),t.response.data.message&&u()({title:"Atención",text:"".concat(t.response.data.message),icon:"error"}),t.response.data.errors.forEach(function(t){u()({title:"Atención",text:"".concat(t.message),icon:"error"})})})},getUsers:function(){var t=this;axios.get("".concat(c["a"].API_URL,"/users?limit=1}")).then(function(o){axios.get("".concat(c["a"].API_URL,"/users?limit=").concat(o.total)).then(function(o){t.users=o.data.data})})},getEvidence:function(){var t=this;this.loading=!0,Event.$emit("loading"),axios.get("".concat(c["a"].API_URL,"/evidences/").concat(this.$route.params.id)).then(function(o){t.receptionData=o.data.data,t.loading=!1,Event.$emit("stopLoading")}).catch(function(t){console.dir(t),Event.$emit("stopLoading")})},isEmpty:function(t){for(var o in t)if(t.hasOwnProperty(o))return!1;return JSON.stringify(t)===JSON.stringify({})},sendingEvent:function(t,o,e){e.append("evidencia_id",this.$route.params.id),e.append("usuario_id",this.user.id)},reloadImages:function(t,o){this.images.push("".concat(c["a"].API_IMAGE,"/").concat(o.nombre_archivo))},onChangeStatus:function(){var t="COMPLETADO"==this.receptionData.estado?"EN_PROCESO":"COMPLETADO";return this.port.clise||"COMPLETADO"!=t?this.port.clise.length<5&&"COMPLETADO"==t?(u()({title:"Atención",text:"El campo clise debe contener 5 digitos",icon:"error"}),this.receptionData.estado="EN_PROCESO",""):this.port.clise.length>5&&"COMPLETADO"==t?(u()({title:"Atención",text:"El campo clise debe contener 5 digitos",icon:"error"}),this.receptionData.estado="EN_PROCESO",""):this.port.exp||"COMPLETADO"!=t?this.port.exp.length<6&&"COMPLETADO"==t?(u()({title:"Atención",text:"El campo exp debe contener 6 digitos",icon:"error"}),this.receptionData.estado="EN_PROCESO",""):this.port.exp.length>6&&"COMPLETADO"==t?(u()({title:"Atención",text:"El campo exp debe contener 6 digitos",icon:"error"}),this.receptionData.estado="EN_PROCESO",""):this.port.dibujante||"COMPLETADO"!=t?this.images.length||"COMPLETADO"!=t?this.port.solicitado_por||"COMPLETADO"!=t?this.port.exp||"COMPLETADO"!=t?(this.receptionData.estado="COMPLETADO",Event.$emit("loading"),axios.put("".concat(c["a"].API_URL,"/evidences/").concat(this.receptionData.id),{estado:t}).then(function(o){console.log("Estado actualizado a ".concat(t)),Event.$emit("stopLoading")}).catch(function(t){console.dir(t),Event.$emit("stopLoading")}),void(!0===this.isNew?this.storePortrait():this.updatePortrait())):(this.showError("exp"),this.receptionData.estado="EN_PROCESO",""):(this.showError("solicitado por"),this.receptionData.estado="EN_PROCESO",""):(this.showError("Imagenes"),this.receptionData.estado="EN_PROCESO",""):(this.showError("Dibujante"),this.receptionData.estado="EN_PROCESO",""):(this.showError("exp"),this.receptionData.estado="EN_PROCESO",""):(this.receptionData.estado="EN_PROCESO",this.showError("clise"),"")},showError:function(t){u()({title:"Atención",text:"El campo ".concat(t," es requerido"),icon:"error"})}}},b=m,f=(e("c4b2"),e("2877")),_=Object(f["a"])(b,a,r,!1,null,"1d861f34",null);o["default"]=_.exports},afc9:function(t,o,e){},c4b2:function(t,o,e){"use strict";var a=e("afc9"),r=e.n(a);r.a}}]);
//# sourceMappingURL=chunk-4f55.443442d4.js.map