import{k as y,q as h,s as _,t as m,o as r,x as d,C as o,f as a,B as t,g as p,aj as l,a0 as u,e as n,y as v,_ as g,G as C,c as S,b as f}from"./index-C2RHDhMo.js";import{_ as $}from"./_plugin-vue_export-helper-D454ASWf.js";const b=y({header:{type:String,default:""},footer:{type:String,default:""},bodyStyle:{type:h([String,Object,Array]),default:""},bodyClass:String,shadow:{type:String,values:["always","hover","never"],default:"always"}}),w=_({name:"ElCard"}),k=_({...w,props:b,setup(i){const s=m("card");return(e,c)=>(r(),d("div",{class:o([a(s).b(),a(s).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(r(),d("div",{key:0,class:o(a(s).e("header"))},[t(e.$slots,"header",{},()=>[p(l(e.header),1)])],2)):u("v-if",!0),n("div",{class:o([a(s).e("body"),e.bodyClass]),style:v(e.bodyStyle)},[t(e.$slots,"default")],6),e.$slots.footer||e.footer?(r(),d("div",{key:1,class:o(a(s).e("footer"))},[t(e.$slots,"footer",{},()=>[p(l(e.footer),1)])],2)):u("v-if",!0)],2))}});var B=g(k,[["__file","card.vue"]]);const N=C(B),P={class:"header"},E={class:"extra"},V={__name:"PageContainer",props:{title:{required:!0,type:String}},setup(i){return(s,e)=>{const c=N;return r(),S(c,{class:"page-container"},{header:f(()=>[n("div",P,[n("span",null,l(i.title),1),n("div",E,[t(s.$slots,"extra",{},void 0,!0)])])]),default:f(()=>[t(s.$slots,"default",{},void 0,!0)]),_:3})}}},z=$(V,[["__scopeId","data-v-a2d59362"]]);export{z as _};
