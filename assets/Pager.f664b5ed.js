import{_ as i,d as u,r as x,o as t,c as o,e as r,w as c,h as l,t as a,x as n,f as d}from"./app.1decb24a.js";const k={class:"pager"},m=d("br",null,null,-1),v={key:0},f=d("br",null,null,-1),h={key:0},y=u({name:"Pager",props:{data:{type:Object,required:!0}},setup(e){return(g,_)=>{const s=x("RouterLink");return t(),o("div",k,[e.data.prev?(t(),r(s,{key:0,class:"previous",to:e.data.prev.link},{default:c(()=>[l(a(e.data.prev.text),1),m,e.data.prev.title?(t(),o("span",v,a(e.data.prev.title),1)):n("",!0)]),_:1},8,["to"])):n("",!0),e.data.next?(t(),r(s,{key:1,class:"next",to:e.data.next.link},{default:c(()=>[l(a(e.data.next.text),1),f,e.data.next.title?(t(),o("span",h,a(e.data.next.title),1)):n("",!0)]),_:1},8,["to"])):n("",!0)])}}});var C=i(y,[["__file","Pager.vue"]]);export{C as P};
