(function(){"use strict";var e={3573:function(e,t,n){var a=n(9242),o=n(3396);const s=(0,o._)("h2",{class:"language"},"Cha amon tzeli / Ramza",-1),l=(0,o._)("h2",{class:"language"},"vaakšar / iiša",-1);function i(e,t,n,a,i,r){const p=(0,o.up)("ProbingRamzaSpec"),u=(0,o.up)("FontContainer");return(0,o.wg)(),(0,o.iD)(o.HY,null,[s,(0,o.Wm)(u,{font:"Cha-amon-tzeli--ProbingRamza","font-name":"Probing Ramza","lang-name":"cya amon tzeli","system-name":"ramza","default-text":"Chümierien cya umoilugau li uzla moktë ditzel, gaz olmaar dwa altë. uzla moktë lour gilewk li nomaya."},{default:(0,o.w5)((()=>[(0,o.Wm)(p)])),_:1}),l],64)}const r={class:"font-container"},p={class:"font-container--dialog-backend"},u={key:0,class:"font-container--dialog"},m={class:"font-container--dialog--spec"};function c(e,t,n,s,l,i){const c=(0,o.up)("FontHeader"),d=(0,o.up)("FontSampleInput");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("section",r,[(0,o.Wm)(c,{font:n.font,"font-name":n.fontName,"lang-name":n.langName,"system-name":n.systemName,"is-expanded":!1,expand:i.expand},null,8,["font","font-name","lang-name","system-name","expand"]),(0,o.Wm)(d,{font:n.font,"default-font-size":n.fontSize,"font-size":l.fontSizeValue,"onUpdate:fontSize":t[0]||(t[0]=e=>l.fontSizeValue=e),text:l.textValue,"onUpdate:text":t[1]||(t[1]=e=>l.textValue=e)},null,8,["font","default-font-size","font-size","text"])]),(0,o.wy)((0,o._)("div",p,[(0,o.Wm)(a.uT,{name:"bounce",onAfterLeave:i.onAfterLeave},{default:(0,o.w5)((()=>[l.isExpanded?((0,o.wg)(),(0,o.iD)("section",u,[(0,o.Wm)(c,{font:n.font,"font-name":n.fontName,"lang-name":n.langName,"system-name":n.systemName,"is-expanded":!0,expand:i.expand},null,8,["font","font-name","lang-name","system-name","expand"]),(0,o.Wm)(d,{font:n.font,"default-font-size":n.fontSize,"font-size":l.fontSizeValue,"onUpdate:fontSize":t[2]||(t[2]=e=>l.fontSizeValue=e),text:l.textValue,"onUpdate:text":t[3]||(t[3]=e=>l.textValue=e)},null,8,["font","default-font-size","font-size","text"]),(0,o._)("div",m,[(0,o.WI)(e.$slots,"default")])])):(0,o.kq)("",!0)])),_:3},8,["onAfterLeave"])],512),[[a.F8,l.isExpandedBackend]])],64)}var d=n(7139);const f={class:"input"},g={class:"input--size--container"},h=["disabled"];function y(e,t,n,s,l,i){return(0,o.wg)(),(0,o.iD)("div",f,[(0,o._)("div",null,[(0,o.wy)((0,o._)("input",{type:"text",class:"input--original","onUpdate:modelValue":t[0]||(t[0]=e=>i.textValue=e)},null,512),[[a.nr,i.textValue]]),(0,o._)("label",g,[(0,o.Uk)("Font size: "),(0,o.wy)((0,o._)("input",{type:"number",class:"input--size","onUpdate:modelValue":t[1]||(t[1]=e=>i.fontSizeValue=e)},null,512),[[a.nr,i.fontSizeValue]])]),(0,o._)("button",{type:"button",class:"input--size--reset",onClick:t[2]||(t[2]=(...e)=>i.resetFontSize&&i.resetFontSize(...e)),disabled:i.fontSizeValue==n.defaultFontSize},"Reset",8,h)]),(0,o._)("div",null,[(0,o.wy)((0,o._)("input",{type:"text",class:(0,d.C_)(["input--web-font",n.font]),"onUpdate:modelValue":t[3]||(t[3]=e=>i.textValue=e),style:(0,d.j5)({"font-size":`${i.fontSizeValue}px`})},null,6),[[a.nr,i.textValue]])])])}var z={name:"FontSampleInput",props:{font:String,text:String,fontSize:Number,defaultFontSize:Number},emits:["update:text","update:fontSize"],computed:{textValue:{get(){return this.text},set(e){this.$emit("update:text",e)}},fontSizeValue:{get(){return this.fontSize},set(e){this.$emit("update:fontSize",e)}}},methods:{resetFontSize(){this.fontSizeValue=this.$props.defaultFontSize}}},b=n(89);const w=(0,b.Z)(z,[["render",y],["__scopeId","data-v-6eb0676a"]]);var x=w;const v={class:"font-header"},_={class:"font-name"},S={key:0},W={key:1};function k(e,t,n,a,s,l){return(0,o.wg)(),(0,o.iD)("div",v,[(0,o._)("h2",null,[(0,o._)("span",_,(0,d.zw)(n.fontName),1),n.langName?((0,o.wg)(),(0,o.iD)("span",{key:0,class:(0,d.C_)(n.font)},(0,d.zw)(n.langName),3)):(0,o.kq)("",!0),n.systemName?((0,o.wg)(),(0,o.iD)("span",{key:1,class:(0,d.C_)(n.font)},(0,d.zw)(n.systemName),3)):(0,o.kq)("",!0),(0,o._)("button",{type:"button",class:"action-button",onClick:t[0]||(t[0]=(...e)=>l.expandContainer&&l.expandContainer(...e))},[n.isExpanded?((0,o.wg)(),(0,o.iD)("span",S,"Close")):((0,o.wg)(),(0,o.iD)("span",W,"Show details"))])])])}var C={name:"FontHeader",props:{fontName:String,font:String,langName:String,systemName:String,isExpanded:Boolean,expand:Function},methods:{expandContainer(){this.expand(!this.isExpanded)}}};const N=(0,b.Z)(C,[["render",k],["__scopeId","data-v-426c5956"]]);var V=N,F={name:"FontContainer",components:{FontHeader:V,FontSampleInput:x},props:{font:String,fontName:String,langName:String,systemName:String,defaultText:String,fontSize:{type:Number,default:36}},data(){return{isExpanded:!1,isExpandedBackend:!1,textValue:this.$props.defaultText,fontSizeValue:this.$props.fontSize}},methods:{expand(e){e&&(this.isExpandedBackend=!0),this.isExpanded=e},onAfterLeave(){this.isExpandedBackend=!1}}};const D=(0,b.Z)(F,[["render",c]]);var U=D;const T=(0,o._)("pre",null,"    src: url('https://miraprobemv.github.io/web-fonts/fonts/Cha-amon-tzeli/ProbingRamza.woff2') format('woff2');",-1);function P(e,t,n,a,s,l){const i=(0,o.up)("GlyphBox"),r=(0,o.up)("GlyphList"),p=(0,o.up)("FontSpec");return(0,o.wg)(),(0,o.j4)(p,{"sample-class-name":"Cha-amon-tzeli--ProbingRamza"},{"character-list":(0,o.w5)((()=>[(0,o.Wm)(r,null,{default:(0,o.w5)((()=>[(0,o.Wm)(i,{glyph:"a"}),(0,o.Wm)(i,{glyph:"ä"}),(0,o.Wm)(i,{glyph:"b"}),(0,o.Wm)(i,{glyph:"v"}),(0,o.Wm)(i,{glyph:"g"}),(0,o.Wm)(i,{glyph:"d"}),(0,o.Wm)(i,{glyph:"dy"}),(0,o.Wm)(i,{glyph:"e"}),(0,o.Wm)(i,{glyph:"h"}),(0,o.Wm)(i,{glyph:"u"}),(0,o.Wm)(i,{glyph:"ü"}),(0,o.Wm)(i,{glyph:"w"}),(0,o.Wm)(i,{glyph:"z"}),(0,o.Wm)(i,{glyph:"zh"}),(0,o.Wm)(i,{glyph:"ch"}),(0,o.Wm)(i,{glyph:"dz"}),(0,o.Wm)(i,{glyph:"ë"}),(0,o.Wm)(i,{glyph:"i"}),(0,o.Wm)(i,{glyph:"y"}),(0,o.Wm)(i,{glyph:"k"}),(0,o.Wm)(i,{glyph:"l"}),(0,o.Wm)(i,{glyph:"m"}),(0,o.Wm)(i,{glyph:"n"}),(0,o.Wm)(i,{glyph:"s"}),(0,o.Wm)(i,{glyph:"o"}),(0,o.Wm)(i,{glyph:"ö"}),(0,o.Wm)(i,{glyph:"p"}),(0,o.Wm)(i,{glyph:"f"}),(0,o.Wm)(i,{glyph:"t"}),(0,o.Wm)(i,{glyph:"ts"}),(0,o.Wm)(i,{glyph:"ty"}),(0,o.Wm)(i,{glyph:"c"}),(0,o.Wm)(i,{glyph:"r"}),(0,o.Wm)(i,{glyph:"cy"}),(0,o.Wm)(i,{glyph:"t"})])),_:1})])),usage:(0,o.w5)((()=>[T])),_:1})}const E={class:"font-spec"},$={class:"tabs-menu"},I={class:"tabs-content"};function O(e,t,n,a,s,l){const i=(0,o.up)("SshPre");return(0,o.wg)(),(0,o.iD)("section",E,[(0,o._)("ul",$,[(0,o._)("li",{class:(0,d.C_)(["tabs-menu--tab-item",{_active:"character-list"===s.currentTab}]),onClick:t[0]||(t[0]=e=>s.currentTab="character-list")},"Character List",2),e.$slots.writingSystem?((0,o.wg)(),(0,o.iD)("li",{key:0,class:(0,d.C_)(["tabs-menu--tab-item",{_active:"writing-system"===s.currentTab}]),onClick:t[1]||(t[1]=e=>s.currentTab="writing-system")},"Writing System",2)):(0,o.kq)("",!0),e.$slots.usage?((0,o.wg)(),(0,o.iD)("li",{key:1,class:(0,d.C_)(["tabs-menu--tab-item",{_active:"usage"===s.currentTab}]),onClick:t[2]||(t[2]=e=>s.currentTab="usage")},"Usage",2)):(0,o.kq)("",!0)]),(0,o._)("div",I,["character-list"===s.currentTab?(0,o.WI)(e.$slots,"character-list",{key:0}):(0,o.kq)("",!0),"usage"===s.currentTab?((0,o.wg)(),(0,o.iD)(o.HY,{key:1},[(0,o._)("pre",null,[(0,o.Wm)(i,{language:"css",label:"example.css"},{default:(0,o.w5)((()=>[(0,o.Uk)("@font-face {\n    font-family: '"+(0,d.zw)(n.sampleClassName)+"';\n",1),(0,o.WI)(e.$slots,"usage"),(0,o.Uk)("\n}\n\n."+(0,d.zw)(n.sampleClassName)+" {\n    font-family: '"+(0,d.zw)(n.sampleClassName)+"';\n}",1)])),_:3})]),(0,o._)("pre",null,[(0,o.Wm)(i,{language:"css",label:"example.html"},{default:(0,o.w5)((()=>[(0,o.Uk)('<p class="'+(0,d.zw)(n.sampleClassName)+'">Your text here.</p>',1)])),_:1})])],64)):(0,o.kq)("",!0)])])}var R=n(2360),B={name:"FontSpec",components:{SshPre:R.Z},props:{sampleClassName:String},data(){return{currentTab:"character-list"}},methods:{expandContainer(){this.expand(!this.isExpanded)}}};const Z=(0,b.Z)(B,[["render",O]]);var j=Z;const q=e=>((0,o.dD)("data-v-65b59dee"),e=e(),(0,o.Cn)(),e),H={class:"glyph-box"},L={class:"mapping-char"},G={class:"char-upper"},Y={class:"char-lower"},A={class:"mapped-char Cha-amon-tzeli--ProbingRamza"},M={class:"char-upper"},J={class:"mapped-char Cha-amon-tzeli--ProbingRamza"},K=q((()=>(0,o._)("div",{class:"glyph-box--dummy"},null,-1)));function Q(e,t,n,a,s,l){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",H,[(0,o._)("div",L,[(0,o._)("span",G,(0,d.zw)(n.glyph),1),(0,o.Uk)("/"),(0,o._)("span",Y,(0,d.zw)(n.glyph),1)]),(0,o._)("div",A,[(0,o._)("span",M,(0,d.zw)(n.glyph),1),(0,o.Uk)(" "+(0,d.zw)(n.glyph),1)]),(0,o._)("div",J,[(0,o.Uk)((0,d.zw)(n.glyph)+"_ _"+(0,d.zw)(n.glyph)+"_ _"+(0,d.zw)(n.glyph)+" ",1),n.descender?((0,o.wg)(),(0,o.iD)(o.HY,{key:0},[(0,o.Uk)("~"+(0,d.zw)(n.glyph)+"~ ~"+(0,d.zw)(n.glyph),1)],64)):(0,o.kq)("",!0)])]),K],64)}var X={name:"GlyphBox",components:{},props:{glyph:String,descender:Boolean}};const ee=(0,b.Z)(X,[["render",Q],["__scopeId","data-v-65b59dee"]]);var te=ee;const ne={class:"glyph-list--container"},ae={class:"glyph-list"};function oe(e,t,n,a,s,l){return(0,o.wg)(),(0,o.iD)("div",ne,[(0,o._)("div",ae,[(0,o.WI)(e.$slots,"default",{},void 0,!0)])])}var se={name:"GlyphList",components:{},props:{}};const le=(0,b.Z)(se,[["render",oe],["__scopeId","data-v-9b8d845c"]]);var ie=le,re={name:"ProbingRamzaSpec",components:{FontSpec:j,GlyphList:ie,GlyphBox:te}};const pe=(0,b.Z)(re,[["render",P]]);var ue=pe,me={name:"App",components:{FontContainer:U,ProbingRamzaSpec:ue}};const ce=(0,b.Z)(me,[["render",i]]);var de=ce;(0,a.ri)(de).mount("#app")}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var s=t[a]={exports:{}};return e[a].call(s.exports,s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,s){if(!a){var l=1/0;for(u=0;u<e.length;u++){a=e[u][0],o=e[u][1],s=e[u][2];for(var i=!0,r=0;r<a.length;r++)(!1&s||l>=s)&&Object.keys(n.O).every((function(e){return n.O[e](a[r])}))?a.splice(r--,1):(i=!1,s<l&&(l=s));if(i){e.splice(u--,1);var p=o();void 0!==p&&(t=p)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[a,o,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,s,l=a[0],i=a[1],r=a[2],p=0;if(l.some((function(t){return 0!==e[t]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(r)var u=r(n)}for(t&&t(a);p<l.length;p++)s=l[p],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(u)},a=self["webpackChunkweb_font"]=self["webpackChunkweb_font"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(3573)}));a=n.O(a)})();
//# sourceMappingURL=app.95630a41.js.map