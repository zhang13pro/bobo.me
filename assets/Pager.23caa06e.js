import{_ as i,d as u,r as x,o as e,k as o,b as r,w as l,g as c,t as a,x as n,e as d}from"./app.8e4f3964.js";const k={class:"pager"},v=d("br",null,null,-1),m={key:0},f=d("br",null,null,-1),h={key:0},y=u({props:{data:{type:Object,required:!0}},setup(t){return(g,_)=>{const s=x("RouterLink");return e(),o("div",k,[t.data.next?(e(),r(s,{key:0,class:"next",to:t.data.next.link},{default:l(()=>[c(a(t.data.next.text),1),v,t.data.next.title?(e(),o("span",m,a(t.data.next.title),1)):n("",!0)]),_:1},8,["to"])):n("",!0),t.data.prev?(e(),r(s,{key:1,class:"previous",to:t.data.prev.link},{default:l(()=>[c(a(t.data.prev.text),1),f,t.data.prev.title?(e(),o("span",h,a(t.data.prev.title),1)):n("",!0)]),_:1},8,["to"])):n("",!0)])}}});var B=i(y,[["__file","Pager.vue"]]);export{B as P};
