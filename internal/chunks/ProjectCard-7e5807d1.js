import{S as _e,i as me,s as ge,e as h,c as _,b as d,K as pe,g as Q,M as R,d as u,w as re,x as ie,y as oe,q as E,o as w,B as ne,t as q,a as m,h as A,H as n,n as $e,p as be,P as ke,k as C,m as M,j as O,Z as De}from"./vendor-db117ae3.js";import{b as se}from"./paths-4b3c6e7e.js";import{A as Ee,C as Ie,T as je}from"./Tag-41363e31.js";function ve(s,e,l){const t=s.slice();return t[4]=e[l],t}function Ve(s){let e,l,t;return{c(){e=h("img"),this.h()},l(a){e=_(a,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){d(e,"class","logo svelte-5hsads"),pe(e.src,l=s[3])||d(e,"src",l),d(e,"alt",t=s[1].title+"'s Logo")},m(a,f){Q(a,e,f)},p:R,d(a){a&&u(e)}}}function Ce(s){let e,l;return e=new Ee({props:{active:s[1].active}}),{c(){re(e.$$.fragment)},l(t){ie(e.$$.fragment,t)},m(t,a){oe(e,t,a),l=!0},p:R,i(t){l||(E(e.$$.fragment,t),l=!0)},o(t){w(e.$$.fragment,t),l=!1},d(t){ne(e,t)}}}function Me(s){let e,l;return e=new Ie({}),{c(){re(e.$$.fragment)},l(t){ie(e.$$.fragment,t)},m(t,a){oe(e,t,a),l=!0},i(t){l||(E(e.$$.fragment,t),l=!0)},o(t){w(e.$$.fragment,t),l=!1},d(t){ne(e,t)}}}function we(s){let e,l,t;return{c(){e=h("div"),l=q("Since: "),t=q(s[2]),this.h()},l(a){e=_(a,"DIV",{class:!0});var f=m(e);l=A(f,"Since: "),t=A(f,s[2]),f.forEach(u),this.h()},h(){d(e,"class","date svelte-5hsads")},m(a,f){Q(a,e,f),n(e,l),n(e,t)},p:R,d(a){a&&u(e)}}}function Pe(s){let e,l,t=s[1].tags,a=[];for(let r=0;r<t.length;r+=1)a[r]=he(ve(s,t,r));const f=r=>w(a[r],1,1,()=>{a[r]=null});return{c(){e=h("div");for(let r=0;r<a.length;r+=1)a[r].c();this.h()},l(r){e=_(r,"DIV",{class:!0});var o=m(e);for(let i=0;i<a.length;i+=1)a[i].l(o);o.forEach(u),this.h()},h(){d(e,"class","tags svelte-5hsads")},m(r,o){Q(r,e,o);for(let i=0;i<a.length;i+=1)a[i].m(e,null);l=!0},p(r,o){if(o&2){t=r[1].tags;let i;for(i=0;i<t.length;i+=1){const P=ve(r,t,i);a[i]?(a[i].p(P,o),E(a[i],1)):(a[i]=he(P),a[i].c(),E(a[i],1),a[i].m(e,null))}for($e(),i=t.length;i<a.length;i+=1)f(i);be()}},i(r){if(!l){for(let o=0;o<t.length;o+=1)E(a[o]);l=!0}},o(r){a=a.filter(Boolean);for(let o=0;o<a.length;o+=1)w(a[o]);l=!1},d(r){r&&u(e),ke(a,r)}}}function he(s){let e,l;return e=new je({props:{label:s[4]}}),{c(){re(e.$$.fragment)},l(t){ie(e.$$.fragment,t)},m(t,a){oe(e,t,a),l=!0},p:R,i(t){l||(E(e.$$.fragment,t),l=!0)},o(t){w(e.$$.fragment,t),l=!1},d(t){ne(e,t)}}}function Se(s){let e,l,t,a,f,r,o,i=s[0].metadata.title+"",P,U,I,X,x,S,B=s[0].metadata.description+"",H,ee,T,F=s[0].metadata.title+"",K,te,Y,G=s[0].metadata.description+"",L,ae,j,le,W,b,k=s[3]&&Ve(s),g=s[1].active&&Ce(s),$=s[1].lookingForCollaborators&&Me(),D=s[2]&&we(s),p=s[1].tags&&s[1].tags.length&&Pe(s);return{c(){e=h("a"),l=h("div"),t=h("div"),k&&k.c(),a=C(),f=h("div"),r=h("div"),o=h("div"),P=q(i),U=C(),I=h("div"),g&&g.c(),X=C(),$&&$.c(),x=C(),S=h("div"),H=q(B),ee=C(),T=h("div"),K=q(F),te=C(),Y=h("div"),L=q(G),ae=C(),j=h("div"),D&&D.c(),le=C(),p&&p.c(),this.h()},l(c){e=_(c,"A",{"sveltekit:prefetch":!0,href:!0});var v=m(e);l=_(v,"DIV",{class:!0});var V=m(l);t=_(V,"DIV",{class:!0});var Z=m(t);k&&k.l(Z),a=M(Z),f=_(Z,"DIV",{class:!0});var y=m(f);r=_(y,"DIV",{class:!0});var z=m(r);o=_(z,"DIV",{class:!0});var ce=m(o);P=A(ce,i),ce.forEach(u),U=M(z),I=_(z,"DIV",{class:!0});var J=m(I);g&&g.l(J),X=M(J),$&&$.l(J),J.forEach(u),z.forEach(u),x=M(y),S=_(y,"DIV",{class:!0});var fe=m(S);H=A(fe,B),fe.forEach(u),y.forEach(u),Z.forEach(u),ee=M(V),T=_(V,"DIV",{class:!0});var de=m(T);K=A(de,F),de.forEach(u),te=M(V),Y=_(V,"DIV",{class:!0});var ue=m(Y);L=A(ue,G),ue.forEach(u),ae=M(V),j=_(V,"DIV",{class:!0});var N=m(j);D&&D.l(N),le=M(N),p&&p.l(N),N.forEach(u),V.forEach(u),v.forEach(u),this.h()},h(){d(o,"class","title l-screen svelte-5hsads"),d(I,"class","activity-tags svelte-5hsads"),d(r,"class","title-line svelte-5hsads"),d(S,"class","description l-screen svelte-5hsads"),d(f,"class","content svelte-5hsads"),d(t,"class","header svelte-5hsads"),d(T,"class","title s-screen svelte-5hsads"),d(Y,"class","description s-screen svelte-5hsads"),d(j,"class","footer svelte-5hsads"),d(l,"class","container svelte-5hsads"),d(e,"sveltekit:prefetch",""),d(e,"href",W=`${se}/projects/${s[0].slug}`)},m(c,v){Q(c,e,v),n(e,l),n(l,t),k&&k.m(t,null),n(t,a),n(t,f),n(f,r),n(r,o),n(o,P),n(r,U),n(r,I),g&&g.m(I,null),n(I,X),$&&$.m(I,null),n(f,x),n(f,S),n(S,H),n(l,ee),n(l,T),n(T,K),n(l,te),n(l,Y),n(Y,L),n(l,ae),n(l,j),D&&D.m(j,null),n(j,le),p&&p.m(j,null),b=!0},p(c,[v]){c[3]&&k.p(c,v),(!b||v&1)&&i!==(i=c[0].metadata.title+"")&&O(P,i),c[1].active&&g.p(c,v),(!b||v&1)&&B!==(B=c[0].metadata.description+"")&&O(H,B),(!b||v&1)&&F!==(F=c[0].metadata.title+"")&&O(K,F),(!b||v&1)&&G!==(G=c[0].metadata.description+"")&&O(L,G),c[2]&&D.p(c,v),c[1].tags&&c[1].tags.length&&p.p(c,v),(!b||v&1&&W!==(W=`${se}/projects/${c[0].slug}`))&&d(e,"href",W)},i(c){b||(E(g),E($),E(p),b=!0)},o(c){w(g),w($),w(p),b=!1},d(c){c&&u(e),k&&k.d(),g&&g.d(),$&&$.d(),D&&D.d(),p&&p.d()}}}function Te(s,e,l){let{project:t}=e,a=t.metadata,f=a.startDate&&De(a.startDate).format("MMMM YYYY"),r=a.logo.startsWith("http")?a.logo:`${se}/images/projects/${a.logo}`;return s.$$set=o=>{"project"in o&&l(0,t=o.project)},[t,a,f,r]}class Be extends _e{constructor(e){super();me(this,e,Te,Se,ge,{project:0})}}export{Be as P};