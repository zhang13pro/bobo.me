import{C as k}from"./Common.43967231.js";import{P as g}from"./PageHeader.666f03fa.js";import{_ as h,d as v,a as B,H as L,i as w,o as t,b as x,w as C,f as y,h as c,e,k as o,E as u,F as _,t as i}from"./app.8e4f3964.js";const F={class:"links-wrapper"},P={class:"link-group"},$={class:"content"},b=["href"],D=["src"],E={class:"sitename"},H={class:"desc"},N=v({setup(T){const a=B(),p=L(),d=w(()=>{var r;const s=a.value.pages&&a.value.pages.links?a.value.pages.links:{};return s.title===void 0&&(s.title=(r=a.value.pageText)==null?void 0:r.links),s});return(s,r)=>(t(),x(k,null,{page:C(()=>[y(g,{"page-info":c(d)},null,8,["page-info"]),e("div",F,[(t(!0),o(_,null,u(c(p).links,(l,m)=>(t(),o("div",{key:`link-group-${m}`,class:"link-section"},[e("h2",null,i(l.title),1),e("div",P,[(t(!0),o(_,null,u(l.items,(n,f)=>(t(),o("div",{key:`link-${f}`,class:"link-item"},[e("div",$,[e("a",{href:n.url,target:"_blank",rel:"noopener noreferrer"},[e("img",{src:s.$withBase(n.img)},null,8,D),e("span",E,i(n.sitename),1),e("div",H,i(n.desc),1)],8,b)])]))),128))])]))),128))])]),_:1}))}});var j=h(N,[["__file","Links.vue"]]);export{j as default};