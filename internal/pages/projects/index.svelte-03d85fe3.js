import{S as K,i as L,s as M,w as N,x as O,y as Q,q as x,o as S,B as R,k as C,e as j,t as k,Y as T,d as h,m as E,c as P,a as y,h as b,b as H,g as A,H as n,j as U,p as W,P as X,n as Z}from"../../chunks/vendor-db117ae3.js";import{P as ee}from"../../chunks/ProjectCard-7e5807d1.js";import"../../chunks/paths-4b3c6e7e.js";import"../../chunks/Tag-41363e31.js";function F(c,r,a){const s=c.slice();return s[1]=r[a],s}function G(c){let r,a;return r=new ee({props:{project:c[1]}}),{c(){N(r.$$.fragment)},l(s){O(r.$$.fragment,s)},m(s,i){Q(r,s,i),a=!0},p(s,i){const d={};i&1&&(d.project=s[1]),r.$set(d)},i(s){a||(x(r.$$.fragment,s),a=!0)},o(s){S(r.$$.fragment,s),a=!1},d(s){R(r,s)}}}function te(c){let r,a,s,i,d,p,w,q,_,m=c[0].length+"",$,D,I,f,v,u=c[0],o=[];for(let t=0;t<u.length;t+=1)o[t]=G(F(c,u,t));const J=t=>S(o[t],1,1,()=>{o[t]=null});return{c(){r=C(),a=j("div"),s=j("h1"),i=k("Projects"),d=C(),p=j("p"),w=k("Curation of projects being worked on in the Carleton Community"),q=C(),_=j("div"),$=k(m),D=k(" Project(s)"),I=C(),f=j("div");for(let t=0;t<o.length;t+=1)o[t].c();this.h()},l(t){T('[data-svelte="svelte-5oeyam"]',document.head).forEach(h),r=E(t),a=P(t,"DIV",{});var e=y(a);s=P(e,"H1",{});var g=y(s);i=b(g,"Projects"),g.forEach(h),d=E(e),p=P(e,"P",{class:!0});var Y=y(p);w=b(Y,"Curation of projects being worked on in the Carleton Community"),Y.forEach(h),q=E(e),_=P(e,"DIV",{class:!0});var V=y(_);$=b(V,m),D=b(V," Project(s)"),V.forEach(h),I=E(e),f=P(e,"DIV",{class:!0});var z=y(f);for(let B=0;B<o.length;B+=1)o[B].l(z);z.forEach(h),e.forEach(h),this.h()},h(){document.title="Projects",H(p,"class","page-description svelte-1s992is"),H(_,"class","stats svelte-1s992is"),H(f,"class","projects svelte-1s992is")},m(t,l){A(t,r,l),A(t,a,l),n(a,s),n(s,i),n(a,d),n(a,p),n(p,w),n(a,q),n(a,_),n(_,$),n(_,D),n(a,I),n(a,f);for(let e=0;e<o.length;e+=1)o[e].m(f,null);v=!0},p(t,[l]){if((!v||l&1)&&m!==(m=t[0].length+"")&&U($,m),l&1){u=t[0];let e;for(e=0;e<u.length;e+=1){const g=F(t,u,e);o[e]?(o[e].p(g,l),x(o[e],1)):(o[e]=G(g),o[e].c(),x(o[e],1),o[e].m(f,null))}for(Z(),e=u.length;e<o.length;e+=1)J(e);W()}},i(t){if(!v){for(let l=0;l<u.length;l+=1)x(o[l]);v=!0}},o(t){o=o.filter(Boolean);for(let l=0;l<o.length;l+=1)S(o[l]);v=!1},d(t){t&&h(r),t&&h(a),X(o,t)}}}function se(c,r,a){let{projects:s}=r;return c.$$set=i=>{"projects"in i&&a(0,s=i.projects)},[s]}class ne extends K{constructor(r){super();L(this,r,se,te,M,{projects:0})}}export{ne as default};