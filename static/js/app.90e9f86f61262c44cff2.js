webpackJsonp([1],{GTt1:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=a("VU/8")({name:"App"},n,!1,function(t){a("GTt1")},null,null).exports,s=a("/ocq"),l=a("c/Tr"),i=a.n(l),c=(a("A8vr"),a("+Uzz")),u=a.n(c);a("+5V6"),a("2Pud"),u.a.CSSPlugin.defaultSmoothOrigin=!0;var h={name:"HelloWorld",data:function(){return{colors:["#19A69C","#EA168C","#FBB831","#77308D"]}},computed:{timeline:function(){var t=this,e=document.getElementById("logo_wrapper"),a=document.getElementById("logo"),o=document.getElementById("logo_circle"),n=document.getElementById("logo_label"),r=new u.a.TimelineMax;return r.add("start").to(e,3,{backgroundColor:"#000",ease:u.a.Power2.easeOutIn}).fromTo(n,3,{fill:"#000",rotation:0,scale:0,transformOrigin:"50% 50%"},{fill:"#fff",rotation:360,scale:1,transformOrigin:"50% 50%",ease:u.a.Power2.easeInOut},"start").to(a,3,{scale:1,transformOrigin:"50% 50%",ease:u.a.Power2.easeInOut},"-=3"),this.colors.map(function(a,s){r.add("color"+(s+1)).to(n,.5,{scale:1.25,fill:t.colors[s],yoyo:!0,repeat:1,ease:u.a.Back.easeIn}).fromTo(o,2,{fill:"transparent",autoAlpha:0,scale:0,transformOrigin:"50% 50%"},{fill:a,scale:1,autoAlpha:1,transformOrigin:"50% 50%",ease:u.a.Power4.easeIn},"-=2").to(e,1,{backgroundColor:a,ease:u.a.Power4.easeIn},"-=0.5").staggerFromTo(i()(document.querySelectorAll("h1.motto"+(s+1)+" span")),2,{left:"50vh",autoAlpha:0},{left:0,autoAlpha:1,ease:u.a.Power2.easeInOut},.75,"color"+(s+1)+"+2"),s>0&&r.to(i()(document.querySelectorAll("h1.motto"+s+" span")),2,{autoAlpha:0,ease:u.a.Power4.easeIn},"color"+(s+1))}),r.fromTo(o,3,{fill:"#000",autoAlpha:0,scale:0,transformOrigin:"50% 50%"},{fill:"#000",scale:1,autoAlpha:1,transformOrigin:"50% 50%",ease:u.a.Power2.easeInOut}).to(e,3,{backgroundColor:"#fff",ease:u.a.Power2.easeInOut},"-=1.5").to(i()(document.querySelectorAll("h1.motto"+this.colors.length+" span")),2,{autoAlpha:0,ease:u.a.Power4.easeIn},"-=3").staggerTo(i()(document.querySelectorAll("h2.gmbh span")),1,{top:function(){return 50*Math.random()-25},rotation:function(){return 60*Math.random()-30},ease:u.a.Bounce.easeOut},.2,"+=2"),r}},methods:{play:function(){this.timeline.play()}},mounted:function(){document.getElementById("trigger")}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{attrs:{id:"logo_wrapper"},on:{click:function(e){t.play()}}},[a("svg",{staticClass:"logo",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:svg":"http://www.w3.org/2000/svg",viewBox:"0 0 1000 1000"}},[a("g",{attrs:{transform:"scale(0.5) translate(500,500)",id:"logo"}},[a("circle",{attrs:{id:"logo_circle",fill:"#010202",cx:"500",cy:"500",r:"495"}}),t._v(" "),a("path",{attrs:{id:"logo_label",fill:"#fff",d:"M143.1 555.6h-23V434.8h23v120.8zM228.8 555.6H206V434.8l80.8 71.2v-71.2h22.8v120.8l-80.8-67.3v67.3zM420.1 508.90000000000003l36-74.1h25.1l-61 120.8-61-120.8h25.1l35.8 74.1zM529.3 555.6V434.8h23v120.8h-23zM836 434.8l58.8 120.7h-23.9l-8.6-18.9h-52.4l-8.6 18.9-24 .1L836 434.8zm-.1 43.8l-17.5 38.6h35.2l-17.7-38.6zM722.1 586.6h-25.7l-15.1-26.3c-2.5.3-5.1.5-7.8.5-34.7 0-62.9-28.2-62.9-62.9s28.2-62.9 62.9-62.9 62.9 28.2 62.9 62.9c0 24.5-14 45.7-34.5 56.1l20.2 32.6zm-48.6-129c-22.2 0-40.2 18.1-40.2 40.2 0 22.2 18.1 40.2 40.2 40.2 22.2 0 40.2-18.1 40.2-40.2s-18-40.2-40.2-40.2z"}})])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4)]),t._v(" "),a("div",{attrs:{id:"trigger"}})])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticClass:"motto1"},[e("span",[this._v("DEMAND")]),e("span",[this._v("MORE")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticClass:"motto2"},[e("span",[this._v("CHANGE")]),e("span",[this._v("NOW")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticClass:"motto3"},[e("span",[this._v("KEEP")]),e("span",[this._v("PACE")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticClass:"motto4"},[e("span",[this._v("BUSINESS")]),e("span",[this._v("FIRST")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{staticClass:"gmbh"},[e("span",[this._v("G")]),e("span",[this._v("M")]),e("span",[this._v("B")]),e("span",{staticClass:"h"},[this._v("H")])])}]};var f=a("VU/8")(h,m,!1,function(t){a("YZgX")},"data-v-df8ca6c4",null).exports;o.a.use(s.a);var p=new s.a({routes:[{path:"/",name:"HelloWorld",component:f}]});o.a.config.productionTip=!1,new o.a({el:"#app",router:p,components:{App:r},template:"<App/>"})},YZgX:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.90e9f86f61262c44cff2.js.map