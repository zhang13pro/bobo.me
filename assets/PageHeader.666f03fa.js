import{_ as u,d as i,A as d,H as p,i as _,Q as b,o as t,k as s,h as a,s as r,x as o,e as f,t as n,y as h}from"./app.8e4f3964.js";const k={class:"title"},y={key:1,class:"subtitle"},I=i({props:{pageInfo:{type:Object,default:()=>({})}},setup(l){const c=l,{pageInfo:e}=d(c),g=p(),m=_(()=>e.value.bgImage?{backgroundImage:`url(${b(e.value.bgImage.path)})`}:{});return(v,x)=>(t(),s("div",{class:h(["page-header",{"use-image":a(e).bgImage}]),style:r(a(m))},[a(e).bgImage&&a(e).bgImage.mask?(t(),s("div",{key:0,class:"header-mask",style:r({background:a(e).bgImage.mask})},null,4)):o("",!0),f("h1",k,n(a(e).title||a(g).title),1),a(e).subtitle?(t(),s("h3",y,n(a(e).subtitle),1)):o("",!0)],6))}});var P=u(I,[["__file","PageHeader.vue"]]);export{P};
