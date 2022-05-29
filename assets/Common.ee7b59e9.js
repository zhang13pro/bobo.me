var $e=Object.defineProperty,ye=Object.defineProperties;var Se=Object.getOwnPropertyDescriptors;var oe=Object.getOwnPropertySymbols;var Te=Object.prototype.hasOwnProperty,Ie=Object.prototype.propertyIsEnumerable;var re=(r,e,t)=>e in r?$e(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,le=(r,e)=>{for(var t in e||(e={}))Te.call(e,t)&&re(r,t,e[t]);if(oe)for(var t of oe(e))Ie.call(e,t)&&re(r,t,e[t]);return r},ie=(r,e)=>ye(r,Se(e));import{j as S,b as M,k as Le,_ as L,d as x,o as s,c as p,f as d,i as a,l as xe,r as O,m as P,v as R,g as f,n as Ce,p as U,q as ce,t as H,s as de,x as C,y as E,e as N,w as D,z as I,T as Ne,A as ve,B as T,C as X,D as pe,F as q,E as j,G as z,H as J,I as Y,J as ge,u as me,K as Be,L as Ve,M as Me,N as Oe,h as De,O as he,P as Ee}from"./app.1decb24a.js";const ue=r=>decodeURI(r).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),Pe=(r,e)=>{if(e.hash===r)return!0;const t=ue(e.path),l=ue(r);return t===l},be=(r,e)=>r.link&&Pe(r.link,e)?!0:r.children?r.children.some(t=>be(t,e)):!1,Re=()=>{const r=M(),e=Le();return S(()=>e.value.frontmatter.layout==="Post"&&e.value.frontmatter.catalog!==!1&&(r.value.catalog||e.value.frontmatter.catalog)&&e.value.headers.length>0)},He={class:"footer"},Fe=["innerHTML"],Ae=x({name:"Footer",setup(r){const t=M().value.footer;return(l,o)=>(s(),p("footer",He,[d("span",{innerHTML:a(t)},null,8,Fe)]))}});var qe=L(Ae,[["__file","Footer.vue"]]);const We=["title"],Ke=x({name:"ToggleDarkModeButton",setup(r){const e=["light","dark","auto"],t=M(),{currentMode:l}=xe(),o=()=>{const _=(e.indexOf(l.value)+1)%e.length;l.value=e[_]};return(m,_)=>{const h=O("VIcon");return s(),p("div",{class:"toggle-dark-button",title:a(t).toggleDarkMode,onClick:o},[P(f(h,{name:"fa-sun"},null,512),[[R,a(l)==="light"]]),P(f(h,{name:"fa-moon"},null,512),[[R,a(l)==="dark"]]),P(f(h,{name:"fa-magic"},null,512),[[R,a(l)==="auto"]])],8,We)}}});var ze=L(Ke,[["__file","ToggleDarkModeButton.vue"]]);const je=["title"],Ye=x({name:"ToggleSidebarButton",emits:["toggle"],setup(r){const e=M();return(t,l)=>{const o=O("VIcon");return s(),p("div",{class:"toggle-sidebar-button",title:a(e).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:l[0]||(l[0]=m=>t.$emit("toggle"))},[f(o,{name:"bi-layout-sidebar-inset"})],8,je)}}});var Ge=L(Ye,[["__file","ToggleSidebarButton.vue"]]);const Ue={class:"menu-btn-wrapper"},Xe={class:"menu-btn-icon"},Je=d("span",null,null,-1),Qe=d("span",null,null,-1),Ze=d("span",null,null,-1),et=[Je,Qe,Ze],tt={class:"menu-progress"},nt={class:"menu-btn-child-wrapper"},at=x({name:"Menu",emits:["toggle-sidebar","toggle-catalog"],setup(r){const e=Ce({isMenuOpen:!1,isTextVisible:!1,isBtnIconVisible:!0,menuText:"0",borderLen:"0% 314.15926%"});U(()=>{window.addEventListener("scroll",t)}),ce(()=>{window.removeEventListener("scroll",t)});const t=()=>{const u=window.pageYOffset,i=_(),w=document.documentElement.clientHeight;let n=u/(i-w)*100;n>100&&(n=100),isNaN(n)||Math.round(n)<=0?(n=0,e.isTextVisible=!1,e.isBtnIconVisible=!0):(e.isTextVisible=!0,e.menuText=Math.round(n)+"%",e.isBtnIconVisible=!1),e.borderLen=3.1415926*(n||0)+"% 314.15926%"},l=()=>{e.isMenuOpen=!e.isMenuOpen},o=()=>{window.scrollTo({top:0,behavior:"smooth"})},m=()=>{window.scrollTo({top:_(),behavior:"smooth"})},_=()=>{const u=document.querySelector(".theme-container");return u?u.offsetHeight:0},h=Re();return(u,i)=>{const w=O("VIcon");return s(),p("div",{class:E(["menu-btn-container",{open:e.isMenuOpen}])},[d("div",Ue,[d("div",{class:"menu-btn",onClick:l},[P(d("div",Xe,et,512),[[R,e.isBtnIconVisible]]),P(d("div",{class:"menu-text"},H(e.menuText),513),[[R,e.isTextVisible]]),(s(),p("svg",tt,[d("circle",{class:"menu-border",cx:"50%",cy:"50%",r:"48%",style:de({"stroke-dasharray":e.borderLen})},null,4)]))]),d("div",nt,[f(ze,{class:"menu-btn-child"}),d("div",{class:"menu-btn-child",onClick:m},[f(w,{name:"fa-chevron-down",scale:"1.5"})]),d("div",{class:"menu-btn-child",onClick:o},[f(w,{name:"fa-chevron-up"})]),a(h)?(s(),p("div",{key:0,class:"menu-btn-child menu-toc-btn",onClick:i[0]||(i[0]=n=>u.$emit("toggle-catalog"))},[f(w,{name:"fa-list-ul"})])):C("",!0),f(Ge,{class:"menu-btn-child menu-btn-sidebar",onToggle:i[1]||(i[1]=n=>u.$emit("toggle-sidebar"))})])])],2)}}});var st=L(at,[["__file","Menu.vue"]]);const ot=x({name:"DropdownTransition",setup(r){const e=l=>{l.style.height=l.scrollHeight+"px"},t=l=>{l.style.height=""};return(l,o)=>(s(),N(Ne,{name:"dropdown",onEnter:e,onAfterEnter:t,onBeforeLeave:e},{default:D(()=>[I(l.$slots,"default")]),_:3}))}});var fe=L(ot,[["__file","DropdownTransition.vue"]]);const rt=["aria-label"],lt={class:"title"},it={key:0,class:"nav-icon"},ut=d("span",{class:"arrow down"},null,-1),ct=["aria-label"],dt={class:"title"},vt={key:0,class:"nav-icon"},pt={class:"navbar-dropdown"},gt={class:"navbar-dropdown-subtitle"},mt={key:1},ht={class:"navbar-navbar-dropdown-subitem-wrapper"},bt=x({name:"NavbarDropdown",props:{item:{type:Object,required:!0}},setup(r){const e=r,{item:t}=ve(e),l=S(()=>t.value.ariaLabel||t.value.text),o=T(!1),m=X();pe(()=>m.path,()=>{o.value=!1});const _=u=>{u.detail===0?o.value=!o.value:o.value=!1},h=(u,i)=>i[i.length-1]===u;return(u,i)=>{const w=O("VIcon");return s(),p("div",{class:E(["navbar-dropdown-wrapper",{open:o.value}])},[d("button",{class:"navbar-dropdown-title",type:"button","aria-label":a(l),onClick:_},[d("span",lt,[a(t).icon?(s(),p("span",it,[f(w,{name:a(t).icon},null,8,["name"])])):C("",!0),d("span",null,H(a(t).text),1)]),ut],8,rt),d("button",{class:"navbar-dropdown-title-mobile",type:"button","aria-label":a(l),onClick:i[0]||(i[0]=n=>o.value=!o.value)},[d("span",dt,[a(t).icon?(s(),p("span",vt,[f(w,{name:a(t).icon},null,8,["name"])])):C("",!0),d("span",null,H(a(t).text),1)]),d("span",{class:E(["arrow",o.value?"down":"right"])},null,2)],8,ct),f(fe,null,{default:D(()=>[P(d("ul",pt,[(s(!0),p(q,null,j(a(t).children,n=>(s(),p("li",{key:n.text,class:"navbar-dropdown-item"},[n.children?(s(),p(q,{key:0},[d("h4",gt,[n.link?(s(),N(z,{key:0,item:n,onFocusout:k=>h(n,a(t).children)&&n.children.length===0&&(o.value=!1)},null,8,["item","onFocusout"])):(s(),p("span",mt,H(n.text),1))]),d("ul",ht,[(s(!0),p(q,null,j(n.children,k=>(s(),p("li",{key:k.link,class:"navbar-dropdown-subitem"},[f(z,{item:k,onFocusout:$=>h(k,n.children)&&h(n,a(t).children)&&(o.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(s(),N(z,{key:1,item:n,onFocusout:k=>h(n,a(t).children)&&(o.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[R,o.value]])]),_:1})],2)}}});var ft=L(bt,[["__file","NavbarDropdown.vue"]]);const _t={key:0,class:"navbar-items"},kt={key:0,class:"navbar-item"},wt={key:0,class:"nav-icon"},$t=x({name:"NavbarItems",emits:["toggle-search"],setup(r){const e=()=>{const n=Y(),k=me(),$=Be(),g=M();return S(()=>{var c,v;const B=Object.keys($.value.locales);if(B.length<2)return[];const F=n.currentRoute.value.path,A=n.currentRoute.value.fullPath;return[{text:(c=g.value.selectLanguageText)!=null?c:"unknown language",ariaLabel:(v=g.value.selectLanguageAriaLabel)!=null?v:"unknown language",icon:g.value.langIcon,children:B.map(y=>{var Q,Z,ee,te,ne,ae;const V=(Z=(Q=$.value.locales)==null?void 0:Q[y])!=null?Z:{},W=(te=(ee=g.value.locales)==null?void 0:ee[y])!=null?te:{},K=`${V.lang}`,ke=(ne=W.selectLanguageName)!=null?ne:K;let G;if(K===$.value.lang)G=A;else{const se=F.replace(k.value,y);n.getRoutes().some(we=>we.path===se)?G=se:G=(ae=W.home)!=null?ae:y}return{text:ke,link:G}})}]})},t=n=>Ve(n)?Me(n):n.children?ie(le({},n),{children:n.children.map(t)}):n,o=(()=>{const n=M();return S(()=>(n.value.navbar||[]).map(t))})(),m=e(),_=S(()=>[...o.value,...u.value?m.value:[]]),h=J(),u=S(()=>{const k=Y().currentRoute.value.path;return h.value.layout===void 0&&k.indexOf("/page/")===-1&&ge.value.path!==""}),i=M(),w=S(()=>i.value.search&&h.value.search!==!1);return(n,k)=>{const $=O("VIcon");return a(_).length?(s(),p("nav",_t,[(s(!0),p(q,null,j(a(_),g=>(s(),p("div",{key:g.text,class:"navbar-item"},[g.children?(s(),N(ft,{key:0,item:g},null,8,["item"])):(s(),N(z,{key:1,item:g},null,8,["item"]))]))),128)),a(w)?(s(),p("div",kt,[d("a",{style:{cursor:"pointer"},onClick:k[0]||(k[0]=g=>n.$emit("toggle-search"))},[a(i).searchIcon?(s(),p("span",wt,[f($,{name:a(i).searchIcon},null,8,["name"])])):C("",!0),d("span",null,H(a(i).searchText),1)])])):C("",!0)])):C("",!0)}}});var _e=L($t,[["__file","NavbarItems.vue"]]);const yt={class:"site-name"},St=x({name:"Navbar",props:{isSidebar:{type:Boolean,required:!0}},emits:["toggle-search"],setup(r){me();const e=M(),t=J(),l=Y(),o=T(null),m=T(null),_=S(()=>e.value.home||"/"),h=S(()=>e.value.navbarTitle),u=T(0),i=S(()=>u.value?{maxWidth:u.value+"px"}:{}),w=T(0),n=T(!1),k=T(!1),$=T(!0),g=()=>{const b=window.pageYOffset;b<w.value?b>0&&n.value?k.value=!0:(k.value=!1,n.value=!1):(k.value=!1,o.value&&b>o.value.offsetHeight&&(n.value=!0)),w.value=b},B=()=>{let b=!1;t.value.layout==="HomePage"&&(b=!0),t.value.layout==="Post"&&t.value.useHeaderImage&&(b=!0),t.value.layout==="Tags"&&e.value.pages&&e.value.pages.tags&&e.value.pages.tags.bgImage&&(b=!0),t.value.layout==="Links"&&e.value.pages&&e.value.pages.links&&e.value.pages.links.bgImage&&(b=!0),$.value=b};let F;U(()=>{const c=A(o.value,"paddingLeft")+A(o.value,"paddingRight"),v=()=>{var y;window.innerWidth<=719||!o.value?u.value=0:u.value=o.value.offsetWidth-c-(((y=m.value)==null?void 0:y.offsetWidth)||0)};v(),window.addEventListener("resize",v,!1),window.addEventListener("orientationchange",v,!1),B(),F=l.afterEach(()=>{B()}),window.addEventListener("scroll",g)}),ce(()=>{window.removeEventListener("scroll",g),F()});function A(b,c){var V,W,K;const v=(K=(W=(V=b==null?void 0:b.ownerDocument)==null?void 0:V.defaultView)==null?void 0:W.getComputedStyle(b,null))==null?void 0:K[c],y=Number.parseInt(v,10);return Number.isNaN(y)?0:y}return(b,c)=>{const v=O("RouterLink"),y=O("NavbarSearch");return s(),p("header",{ref_key:"navbar",ref:o,class:E(["navbar",{"is-fixed":n.value||r.isSidebar,"is-visible":k.value||r.isSidebar,invert:$.value}])},[d("span",{ref_key:"navbarBrand",ref:m},[f(v,{to:a(_)},{default:D(()=>[d("span",yt,H(a(h)),1)]),_:1},8,["to"])],512),d("div",{class:"navbar-items-wrapper",style:de(a(i))},[I(b.$slots,"before"),f(_e,{class:"can-hide",onToggleSearch:c[0]||(c[0]=V=>b.$emit("toggle-search"))}),I(b.$slots,"after"),f(y)],4)],2)}}});var Tt=L(St,[["__file","Navbar.vue"]]);const It={class:"sidebar-item-children"},Lt=x({name:"SidebarItem",props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(r){const e=r,{item:t,depth:l}=ve(e),o=X(),m=Y(),_=S(()=>be(t.value,o)),h=S(()=>({"sidebar-item":!0,"sidebar-heading":l.value===0,active:_.value,collapsible:t.value.collapsible})),u=T(!0),i=T(void 0);return t.value.collapsible&&(u.value=_.value,i.value=()=>{u.value=!u.value},m.afterEach(()=>{u.value=_.value})),(w,n)=>{var $;const k=O("SidebarItem",!0);return s(),p("li",null,[a(t).link?(s(),N(z,{key:0,class:E(a(h)),item:a(t)},null,8,["class","item"])):(s(),p("p",{key:1,tabindex:"0",class:E(a(h)),onClick:n[0]||(n[0]=(...g)=>i.value&&i.value(...g)),onKeydown:n[1]||(n[1]=Oe((...g)=>i.value&&i.value(...g),["enter"]))},[De(H(a(t).text)+" ",1),a(t).collapsible?(s(),p("span",{key:0,class:E(["arrow",u.value?"down":"right"])},null,2)):C("",!0)],34)),($=a(t).children)!=null&&$.length?(s(),N(fe,{key:2},{default:D(()=>[P(d("ul",It,[(s(!0),p(q,null,j(a(t).children,g=>(s(),N(k,{key:`${a(l)}${g.text}${g.link}`,item:g,depth:a(l)+1},null,8,["item","depth"]))),128))],512),[[R,u.value]])]),_:1})):C("",!0)])}}});var xt=L(Lt,[["__file","SidebarItem.vue"]]);const Ct={key:0,class:"sidebar-items"},Nt=x({name:"SidebarItems",setup(r){const e=X(),t=he();return U(()=>{pe(()=>e.hash,l=>{const o=document.querySelector(".sidebar");if(!o)return;const m=document.querySelector(`.sidebar a.sidebar-item[href="${e.path}${l}"]`);if(!m)return;const{top:_,height:h}=o.getBoundingClientRect(),{top:u,height:i}=m.getBoundingClientRect();u<_?m.scrollIntoView(!0):u+i>_+h&&m.scrollIntoView(!1)})}),(l,o)=>a(t).length?(s(),p("ul",Ct,[(s(!0),p(q,null,j(a(t),m=>(s(),N(xt,{key:m.link||m.text,item:m},null,8,["item"]))),128))])):C("",!0)}});var Bt=L(Nt,[["__file","SidebarItems.vue"]]);const Vt={class:"sidebar"},Mt=x({name:"Sidebar",emits:["toggle-search"],setup(r){return(e,t)=>(s(),p("aside",Vt,[f(_e,{onToggleSearch:t[0]||(t[0]=l=>e.$emit("toggle-search"))}),I(e.$slots,"top"),f(Bt),I(e.$slots,"bottom")]))}});var Ot=L(Mt,[["__file","Sidebar.vue"]]);const Dt={class:"page-content"},Et=x({name:"Common",setup(r){const e=J(),t=M(),l=Y(),o=S(()=>e.value.navbar!==!1&&t.value.navbar!==!1),m=S(()=>ge.value.path===""),_=he(),h=S(()=>_.value.length>0&&!m.value),u=T(!1),i=c=>{u.value=typeof c=="boolean"?c:!u.value},w={x:0,y:0},n=c=>{w.x=c.changedTouches[0].clientX,w.y=c.changedTouches[0].clientY},k=c=>{const v=c.changedTouches[0].clientX-w.x,y=c.changedTouches[0].clientY-w.y;Math.abs(v)>Math.abs(y)&&Math.abs(v)>40&&(v>0&&w.x<=80?i(!0):i(!1))},$=T(!1),g=c=>{$.value=typeof c=="boolean"?c:!$.value;const v=document.querySelector("html");$.value?v==null||v.classList.add("fixed"):v==null||v.classList.remove("fixed"),$.value&&setTimeout(function(){document.querySelector(".search-page input").focus()},400)},B=T(!1),F=c=>{B.value=typeof c=="boolean"?c:!B.value},A=S(()=>[{"no-navbar":!o.value,"no-sidebar":!h.value,"sidebar-open":u.value,"catalog-open":B.value,"search-open":$.value},e.value.pageClass]);let b;return U(()=>{b=l.afterEach(()=>{i(!1),g(!1)})}),Ee(()=>{b()}),(c,v)=>{const y=O("GungnirSearchPage");return s(),p("div",{class:E(["theme-container",a(A)]),onTouchstart:n,onTouchend:k},[I(c.$slots,"navbar",{},()=>[a(o)?(s(),N(Tt,{key:0,"is-sidebar":a(h),onToggleSearch:v[0]||(v[0]=V=>g(!0))},{before:D(()=>[I(c.$slots,"navbar-before")]),after:D(()=>[I(c.$slots,"navbar-after")]),_:3},8,["is-sidebar"])):C("",!0)]),d("div",{class:"sidebar-mask",onClick:v[1]||(v[1]=V=>i(!1))}),I(c.$slots,"sidebar",{},()=>[f(Ot,{onToggleSearch:v[2]||(v[2]=V=>g(!0))},{top:D(()=>[I(c.$slots,"sidebar-top")]),bottom:D(()=>[I(c.$slots,"sidebar-bottom")]),_:3})]),d("div",Dt,[I(c.$slots,"page")]),f(y,{onToggleSearch:v[3]||(v[3]=V=>g(!1))}),f(st,{onToggleSidebar:i,onToggleCatalog:F}),a(h)?C("",!0):(s(),N(qe,{key:0}))],34)}}});var Ht=L(Et,[["__file","Common.vue"]]);export{Ht as C,Re as u};
