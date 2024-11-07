var Ye=Object.defineProperty;var xe=(e,t,l)=>t in e?Ye(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l;var ge=(e,t,l)=>xe(e,typeof t!="symbol"?t+"":t,l);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function l(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=l(o);fetch(o.href,r)}})();function J(){}function qe(e){return e()}function ze(){return Object.create(null)}function ue(e){e.forEach(qe)}function Je(e){return typeof e=="function"}function et(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let pe;function He(e,t){return e===t?!0:(pe||(pe=document.createElement("a")),pe.href=t,e===pe.href)}function tt(e){return Object.keys(e).length===0}function Qe(e){return e??""}function i(e,t){e.appendChild(t)}function K(e,t,l){e.insertBefore(t,l||null)}function F(e){e.parentNode&&e.parentNode.removeChild(e)}function Y(e,t){for(let l=0;l<e.length;l+=1)e[l]&&e[l].d(t)}function u(e){return document.createElement(e)}function M(e){return document.createTextNode(e)}function E(){return M(" ")}function We(){return M("")}function H(e,t,l,n){return e.addEventListener(t,l,n),()=>e.removeEventListener(t,l,n)}function f(e,t,l){l==null?e.removeAttribute(t):e.getAttribute(t)!==l&&e.setAttribute(t,l)}function lt(e){return Array.from(e.childNodes)}function ie(e,t){t=""+t,e.data!==t&&(e.data=t)}function N(e,t){e.value=t??""}function me(e,t,l){for(let n=0;n<e.options.length;n+=1){const o=e.options[n];if(o.__value===t){o.selected=!0;return}}(!l||t!==void 0)&&(e.selectedIndex=-1)}function Se(e){const t=e.querySelector(":checked");return t&&t.__value}let fe;function ce(e){fe=e}function nt(){if(!fe)throw new Error("Function called outside component initialization");return fe}function ot(e){nt().$$.on_mount.push(e)}const se=[],Ee=[];let ae=[];const Ae=[],rt=Promise.resolve();let be=!1;function st(){be||(be=!0,rt.then(Xe))}function he(e){ae.push(e)}const ke=new Set;let re=0;function Xe(){if(re!==0)return;const e=fe;do{try{for(;re<se.length;){const t=se[re];re++,ce(t),at(t.$$)}}catch(t){throw se.length=0,re=0,t}for(ce(null),se.length=0,re=0;Ee.length;)Ee.pop()();for(let t=0;t<ae.length;t+=1){const l=ae[t];ke.has(l)||(ke.add(l),l())}ae.length=0}while(se.length);for(;Ae.length;)Ae.pop()();be=!1,ke.clear(),ce(e)}function at(e){if(e.fragment!==null){e.update(),ue(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(he)}}function it(e){const t=[],l=[];ae.forEach(n=>e.indexOf(n)===-1?t.push(n):l.push(n)),l.forEach(n=>n()),ae=t}const ct=new Set;function ft(e,t){e&&e.i&&(ct.delete(e),e.i(t))}function I(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function ht(e,t,l){const{fragment:n,after_update:o}=e.$$;n&&n.m(t,l),he(()=>{const r=e.$$.on_mount.map(qe).filter(Je);e.$$.on_destroy?e.$$.on_destroy.push(...r):ue(r),e.$$.on_mount=[]}),o.forEach(he)}function ut(e,t){const l=e.$$;l.fragment!==null&&(it(l.after_update),ue(l.on_destroy),l.fragment&&l.fragment.d(t),l.on_destroy=l.fragment=null,l.ctx=[])}function pt(e,t){e.$$.dirty[0]===-1&&(se.push(e),st(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function mt(e,t,l,n,o,r,d=null,C=[-1]){const h=fe;ce(e);const b=e.$$={fragment:null,ctx:[],props:r,update:J,not_equal:o,bound:ze(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(h?h.$$.context:[])),callbacks:ze(),dirty:C,skip_bound:!1,root:t.target||h.$$.root};d&&d(b.root);let g=!1;if(b.ctx=l?l(e,t.props||{},(w,O,...v)=>{const j=v.length?v[0]:O;return b.ctx&&o(b.ctx[w],b.ctx[w]=j)&&(!b.skip_bound&&b.bound[w]&&b.bound[w](j),g&&pt(e,w)),O}):[],b.update(),g=!0,ue(b.before_update),b.fragment=n?n(b.ctx):!1,t.target){if(t.hydrate){const w=lt(t.target);b.fragment&&b.fragment.l(w),w.forEach(F)}else b.fragment&&b.fragment.c();t.intro&&ft(e.$$.fragment),ht(e,t.target,t.anchor),Xe()}ce(h)}class dt{constructor(){ge(this,"$$");ge(this,"$$set")}$destroy(){ut(this,1),this.$destroy=J}$on(t,l){if(!Je(l))return J;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(l),()=>{const o=n.indexOf(l);o!==-1&&n.splice(o,1)}}$set(t){this.$$set&&!tt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const _t="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(_t);function Oe(e,t,l){const n=e.slice();return n[21]=t[l],n}function je(e,t,l){const n=e.slice();return n[24]=t[l],n}function Me(e,t,l){const n=e.slice();return n[27]=t[l],n}function Te(e,t,l){const n=e.slice();return n[30]=t[l],n}function Re(e,t,l){const n=e.slice();return n[27]=t[l],n}function De(e,t,l){const n=e.slice();return n[35]=t[l],n}function Ge(e,t,l){const n=e.slice();return n[35]=t[l],n}function Pe(e){let t,l,n;return{c(){t=u("button"),t.textContent="Ezt leadtam (foglalt lett)...",f(t,"class","svelte-17tr0ki")},m(o,r){K(o,t,r),l||(n=H(t,"click",e[14]),l=!0)},p:J,d(o){o&&F(t),l=!1,n()}}}function Be(e){let t,l=e[35][1]+"",n;return{c(){t=u("option"),n=M(l),t.__value=e[35][0],N(t,t.__value)},m(o,r){K(o,t,r),i(t,n)},p:J,d(o){o&&F(t)}}}function Ne(e){let t,l=e[35][0]+"",n;return{c(){t=u("option"),n=M(l),t.__value=e[35][0],N(t,t.__value)},m(o,r){K(o,t,r),i(t,n)},p:J,d(o){o&&F(t)}}}function Ie(e){let t,l,n,o;return{c(){t=u("a"),l=u("img"),o=E(),f(l,"class",Qe(e[27][1].toLocaleLowerCase())+" svelte-17tr0ki"),He(l.src,n=e[27][0])||f(l,"src",n),f(l,"alt",e[27][1]),f(t,"href",e[27][2]),f(t,"target","_blank"),f(t,"class","svelte-17tr0ki")},m(r,d){K(r,t,d),i(t,l),i(t,o)},p:J,d(r){r&&F(t)}}}function Fe(e){let t=e[30].feladat_link.toLocaleLowerCase().includes(e[27][1].toLocaleLowerCase()),l,n=t&&Ie(e);return{c(){n&&n.c(),l=We()},m(o,r){n&&n.m(o,r),K(o,l,r)},p(o,r){r[0]&1&&(t=o[30].feladat_link.toLocaleLowerCase().includes(o[27][1].toLocaleLowerCase())),t?n?n.p(o,r):(n=Ie(o),n.c(),n.m(l.parentNode,l)):n&&(n.d(1),n=null)},d(o){o&&F(l),n&&n.d(o)}}}function gt(e){let t;return{c(){t=M("Ellenőrzésre vár...")},m(l,n){K(l,t,n)},p:J,d(l){l&&F(t)}}}function kt(e){let t,l=e[6][e[30].type]+"",n;return{c(){t=u("span"),n=M(l),f(t,"class","svelte-17tr0ki")},m(o,r){K(o,t,r),i(t,n)},p(o,r){r[0]&1&&l!==(l=o[6][o[30].type]+"")&&ie(n,l)},d(o){o&&F(t)}}}function Ke(e){let t,l,n,o,r,d=e[30].feladat+"",C,h,b,g,w,O,v,j=e[30].hallgato+"",V,T,z=I(e[9]),y=[];for(let _=0;_<z.length;_+=1)y[_]=Fe(Re(e,z,_));function U(_,k){return _[30].type?kt:gt}let S=U(e),p=S(e);return{c(){t=u("tr"),l=u("td");for(let _=0;_<y.length;_+=1)y[_].c();n=E(),o=u("th"),r=u("a"),C=M(d),b=E(),g=u("td"),p.c(),w=E(),O=u("th"),v=u("a"),V=M(j),f(l,"class","imgph svelte-17tr0ki"),f(r,"target","_blank"),f(r,"href",h=e[30].feladat_link),f(r,"class","svelte-17tr0ki"),f(o,"class","svelte-17tr0ki"),f(g,"class","foly svelte-17tr0ki"),f(v,"target","_blank"),f(v,"href",T=e[30].hallgato_link),f(v,"class","svelte-17tr0ki"),f(O,"class","svelte-17tr0ki")},m(_,k){K(_,t,k),i(t,l);for(let s=0;s<y.length;s+=1)y[s]&&y[s].m(l,null);i(t,n),i(t,o),i(o,r),i(r,C),i(t,b),i(t,g),p.m(g,null),i(t,w),i(t,O),i(O,v),i(v,V)},p(_,k){if(k[0]&513){z=I(_[9]);let s;for(s=0;s<z.length;s+=1){const L=Re(_,z,s);y[s]?y[s].p(L,k):(y[s]=Fe(L),y[s].c(),y[s].m(l,null))}for(;s<y.length;s+=1)y[s].d(1);y.length=z.length}k[0]&1&&d!==(d=_[30].feladat+"")&&ie(C,d),k[0]&1&&h!==(h=_[30].feladat_link)&&f(r,"href",h),S===(S=U(_))&&p?p.p(_,k):(p.d(1),p=S(_),p&&(p.c(),p.m(g,null))),k[0]&1&&j!==(j=_[30].hallgato+"")&&ie(V,j),k[0]&1&&T!==(T=_[30].hallgato_link)&&f(v,"href",T)},d(_){_&&F(t),Y(y,_),p.d()}}}function Ve(e){let t,l,n,o;return{c(){t=u("a"),l=u("img"),o=E(),f(l,"class",Qe(e[27][1].toLocaleLowerCase())+" svelte-17tr0ki"),He(l.src,n=e[27][0])||f(l,"src",n),f(l,"alt",e[27][1]),f(t,"href",e[27][2]),f(t,"target","_blank"),f(t,"class","svelte-17tr0ki")},m(r,d){K(r,t,d),i(t,l),i(t,o)},p:J,d(r){r&&F(t)}}}function Ue(e){let t=e[21][1].fl.toLocaleLowerCase().includes(e[27][1].toLocaleLowerCase()),l,n=t&&Ve(e);return{c(){n&&n.c(),l=We()},m(o,r){n&&n.m(o,r),K(o,l,r)},p(o,r){r[0]&36&&(t=o[21][1].fl.toLocaleLowerCase().includes(o[27][1].toLocaleLowerCase())),t?n?n.p(o,r):(n=Ve(o),n.c(),n.m(l.parentNode,l)):n&&(n.d(1),n=null)},d(o){o&&F(l),n&&n.d(o)}}}function Ze(e){let t,l=e[24]+"",n,o;return{c(){t=u("a"),n=M(l),f(t,"target","_blank"),f(t,"href",o=e[7][e[24]]),f(t,"class","svelte-17tr0ki")},m(r,d){K(r,t,d),i(t,n)},p(r,d){d[0]&36&&l!==(l=r[24]+"")&&ie(n,l),d[0]&36&&o!==(o=r[7][r[24]])&&f(t,"href",o)},d(r){r&&F(t)}}}function $e(e){let t,l,n,o,r,d=e[21][0]+"",C,h,b,g,w,O,v=e[5][e[21][0]].type+"",j,V,T,z,y,U,S=I(e[9]),p=[];for(let s=0;s<S.length;s+=1)p[s]=Ue(Me(e,S,s));let _=I(e[21][1].mo),k=[];for(let s=0;s<_.length;s+=1)k[s]=Ze(je(e,_,s));return{c(){t=u("tr"),l=u("td");for(let s=0;s<p.length;s+=1)p[s].c();n=E(),o=u("th"),r=u("a"),C=M(d),b=E(),g=u("td"),w=u("span"),O=M("("),j=M(v),V=M(")"),T=M(":"),z=E(),y=u("th");for(let s=0;s<k.length;s+=1)k[s].c();U=E(),f(l,"class","imgph svelte-17tr0ki"),f(r,"target","_blank"),f(r,"href",h=e[21][1].fl),f(r,"class","svelte-17tr0ki"),f(o,"class","svelte-17tr0ki"),f(w,"class","svelte-17tr0ki"),f(g,"class","svelte-17tr0ki"),f(y,"class","svelte-17tr0ki")},m(s,L){K(s,t,L),i(t,l);for(let m=0;m<p.length;m+=1)p[m]&&p[m].m(l,null);i(t,n),i(t,o),i(o,r),i(r,C),i(t,b),i(t,g),i(g,w),i(w,O),i(w,j),i(w,V),i(g,T),i(t,z),i(t,y);for(let m=0;m<k.length;m+=1)k[m]&&k[m].m(y,null);i(t,U)},p(s,L){if(L[0]&548){S=I(s[9]);let m;for(m=0;m<S.length;m+=1){const W=Me(s,S,m);p[m]?p[m].p(W,L):(p[m]=Ue(W),p[m].c(),p[m].m(l,null))}for(;m<p.length;m+=1)p[m].d(1);p.length=S.length}if(L[0]&36&&d!==(d=s[21][0]+"")&&ie(C,d),L[0]&36&&h!==(h=s[21][1].fl)&&f(r,"href",h),L[0]&36&&v!==(v=s[5][s[21][0]].type+"")&&ie(j,v),L[0]&164){_=I(s[21][1].mo);let m;for(m=0;m<_.length;m+=1){const W=je(s,_,m);k[m]?k[m].p(W,L):(k[m]=Ze(W),k[m].c(),k[m].m(y,null))}for(;m<k.length;m+=1)k[m].d(1);k.length=_.length}},d(s){s&&F(t),Y(p,s),Y(k,s)}}}function bt(e){let t,l,n,o,r,d,C,h,b,g,w,O,v,j,V,T,z,y,U,S,p,_,k,s,L,m,W,we,Q,ve,Z,x,ye,$,ee,Le,X,de,_e,Ce,B=e[1].hallg&&e[1].feladat&&e[1].feladat_link&&Pe(e),te=I(Object.entries(e[6])),R=[];for(let c=0;c<te.length;c+=1)R[c]=Be(Ge(e,te,c));let le=I(Object.entries(e[7])),D=[];for(let c=0;c<le.length;c+=1)D[c]=Ne(De(e,le,c));let ne=I(e[0]),G=[];for(let c=0;c<ne.length;c+=1)G[c]=Ke(Te(e,ne,c));let oe=I(Object.entries(e[5]).filter(e[20])),P=[];for(let c=0;c<oe.length;c+=1)P[c]=$e(Oe(e,oe,c));return{c(){t=u("main"),l=u("h1"),l.textContent="Beadott problema hozzáadása (foglalt lett....)",n=E(),o=u("table"),r=u("tr"),d=u("td"),C=u("table"),h=u("tr"),b=u("td"),g=u("input"),w=E(),O=u("td"),v=u("input"),j=E(),V=u("tr"),T=u("td"),z=u("input"),y=E(),U=u("tr"),S=u("td"),p=u("input"),_=E(),k=u("td"),B&&B.c(),s=E(),L=u("h1"),m=M("Leadott (elkelt) feladatok:"),W=u("br"),we=E(),Q=u("input"),ve=M(` - 
  `),Z=u("select"),x=u("option"),x.textContent="Minden típus";for(let c=0;c<R.length;c+=1)R[c].c();ye=E(),$=u("select"),ee=u("option"),ee.textContent="Minden hallgató";for(let c=0;c<D.length;c+=1)D[c].c();Le=E(),X=u("table");for(let c=0;c<G.length;c+=1)G[c].c();de=E();for(let c=0;c<P.length;c+=1)P[c].c();f(l,"class","svelte-17tr0ki"),f(g,"class","hallg svelte-17tr0ki"),f(g,"type","text"),f(g,"placeholder","Hallgató neve"),f(b,"class","svelte-17tr0ki"),f(v,"class","fel svelte-17tr0ki"),f(v,"type","text"),f(v,"placeholder","Feladat címe"),f(O,"class","svelte-17tr0ki"),f(z,"class","link svelte-17tr0ki"),f(z,"type","text"),f(z,"placeholder","Feladat link"),f(T,"colspan","2"),f(T,"class","svelte-17tr0ki"),f(p,"class","link svelte-17tr0ki"),f(p,"type","text"),f(p,"placeholder","Hallhatói indexoldal link"),f(S,"colspan","2"),f(S,"class","svelte-17tr0ki"),f(d,"class","svelte-17tr0ki"),f(k,"class","button svelte-17tr0ki"),f(Q,"type","text"),f(Q,"placeholder","Szűrés"),f(Q,"class","svelte-17tr0ki"),x.__value="-",N(x,x.__value),f(Z,"class","svelte-17tr0ki"),e[3]===void 0&&he(()=>e[16].call(Z)),ee.__value="-",N(ee,ee.__value),f($,"class","svelte-17tr0ki"),e[4]===void 0&&he(()=>e[18].call($)),f(L,"class","svelte-17tr0ki")},m(c,A){K(c,t,A),i(t,l),i(t,n),i(t,o),i(o,r),i(r,d),i(d,C),i(C,h),i(h,b),i(b,g),N(g,e[1].hallg),i(h,w),i(h,O),i(O,v),N(v,e[1].feladat),i(C,j),i(C,V),i(V,T),i(T,z),N(z,e[1].feladat_link),i(C,y),i(C,U),i(U,S),i(S,p),N(p,e[1].hallgato_link),i(r,_),i(r,k),B&&B.m(k,null),i(t,s),i(t,L),i(L,m),i(L,W),i(L,we),i(L,Q),N(Q,e[2]),i(L,ve),i(L,Z),i(Z,x);for(let a=0;a<R.length;a+=1)R[a]&&R[a].m(Z,null);me(Z,e[3],!0),i(L,ye),i(L,$),i($,ee);for(let a=0;a<D.length;a+=1)D[a]&&D[a].m($,null);me($,e[4],!0),i(t,Le),i(t,X);for(let a=0;a<G.length;a+=1)G[a]&&G[a].m(X,null);i(X,de);for(let a=0;a<P.length;a+=1)P[a]&&P[a].m(X,null);_e||(Ce=[H(g,"input",e[10]),H(v,"input",e[11]),H(z,"input",e[12]),H(p,"input",e[13]),H(Q,"input",e[15]),H(Z,"change",e[16]),H(Z,"change",e[17]),H($,"change",e[18]),H($,"change",e[19])],_e=!0)},p(c,A){if(A[0]&2&&g.value!==c[1].hallg&&N(g,c[1].hallg),A[0]&2&&v.value!==c[1].feladat&&N(v,c[1].feladat),A[0]&2&&z.value!==c[1].feladat_link&&N(z,c[1].feladat_link),A[0]&2&&p.value!==c[1].hallgato_link&&N(p,c[1].hallgato_link),c[1].hallg&&c[1].feladat&&c[1].feladat_link?B?B.p(c,A):(B=Pe(c),B.c(),B.m(k,null)):B&&(B.d(1),B=null),A[0]&4&&Q.value!==c[2]&&N(Q,c[2]),A[0]&64){te=I(Object.entries(c[6]));let a;for(a=0;a<te.length;a+=1){const q=Ge(c,te,a);R[a]?R[a].p(q,A):(R[a]=Be(q),R[a].c(),R[a].m(Z,null))}for(;a<R.length;a+=1)R[a].d(1);R.length=te.length}if(A[0]&72&&me(Z,c[3]),A[0]&128){le=I(Object.entries(c[7]));let a;for(a=0;a<le.length;a+=1){const q=De(c,le,a);D[a]?D[a].p(q,A):(D[a]=Ne(q),D[a].c(),D[a].m($,null))}for(;a<D.length;a+=1)D[a].d(1);D.length=le.length}if(A[0]&144&&me($,c[4]),A[0]&577){ne=I(c[0]);let a;for(a=0;a<ne.length;a+=1){const q=Te(c,ne,a);G[a]?G[a].p(q,A):(G[a]=Ke(q),G[a].c(),G[a].m(X,de))}for(;a<G.length;a+=1)G[a].d(1);G.length=ne.length}if(A[0]&676){oe=I(Object.entries(c[5]).filter(c[20]));let a;for(a=0;a<oe.length;a+=1){const q=Oe(c,oe,a);P[a]?P[a].p(q,A):(P[a]=$e(q),P[a].c(),P[a].m(X,null))}for(;a<P.length;a+=1)P[a].d(1);P.length=oe.length}},i:J,o:J,d(c){c&&F(t),B&&B.d(),Y(R,c),Y(D,c),Y(G,c),Y(P,c),_e=!1,ue(Ce)}}}function wt(e,t,l){var n=[],o={hallg:"",feladat:"",feladat_link:""};ot(async()=>{let s=await fetch("https://szte.eu/p1.php");l(0,n=await s.json())});var r="",d,C;const h={a:"Keresés, rendezés",b:"Rekurzzióval megoldható feladatok",c:"Dinamikus programozással megoldható feladat",d:"Fa- és gráfalgoritmusos feladatok",e:"SPOJ/OKTV"},b={"Marschall Gábor":"https://github.com/CaTwoPlus/alga_I","Rafael Anita Ilona":"https://r-anita.github.io/Alga/","Dr. Nébl Anita":"https://nebl-annamaria.github.io/","Béleczki Ádám":"https://github.com/Adee81/Algoritmusok/tree/main/04_Fak_Grafok","Ádám Róbert Gábor":"https://adamrobert77.github.io/L_Algoritmusok_es_adatszerkezetek_I/","Temesvári Ráhel Anna":"https://rahelanna.github.io/Algoritmusok-es-adatszerkezetek/","Vígh-Mácsai Zsanett":"https://vigzs.github.io/Algoritmusok--s-adatszerkezetek-beadand-/","Dékány Tamás":"https://github.com/dekany01/Algoritmusok","Gyenes Lídia":"https://github.com/Lydiagyenes/alga","dr. Báthori Endre":"https://github.com/bathoriendre/algoritmusok/blob/main/TaskAndDeadlines.md","Kezes Rudolf Sámson":"https://github.com/Zorahk/alga_hazik","Urbán Ákos":"https://github.com/akosh25/algoritmusok","Sámfira Gábor":"https://github.com/Infinity42o/L-Algoritmusok-s-adatszerkezetek"};var g;const w={"Red John is Back":{type:h.c,fl:"https://www.hackerrank.com/challenges/red-john-is-back/problem",mo:["Marschall Gábor"]},"Breadth First Search: Shortest Reach":{type:h.d,fl:"https://www.hackerrank.com/challenges/bfsshortreach/problem",mo:["Ádám Róbert Gábor"]},"Max Min":{type:h.a,fl:"https://www.hackerrank.com/challenges/angry-children/problem",mo:["Dékány Tamás"]},"Fibonacci Modified":{type:h.c,fl:"https://www.hackerrank.com/challenges/fibonacci-modified/problem",mo:["Dékány Tamás"]},"Lego Blocks":{type:h.c,fl:"https://www.hackerrank.com/challenges/lego-blocks/problem",mo:["Dékány Tamás"]},Pairs:{type:h.a,fl:"https://www.hackerrank.com/challenges/pairs/problem",mo:["Rafael Anita Ilona"]},Apartments:{type:h.a,fl:"https://cses.fi/problemset/task/1084",mo:["Dr. Nébl Anita"]},"KnightL on a Chessboard":{type:h.a,fl:"https://www.hackerrank.com/challenges/knightl-on-chessboard/problem?isFullScreen=false",mo:["Béleczki Ádám"]},"Greedy Florist":{type:h.a,fl:"https://www.hackerrank.com/challenges/greedy-florist/problem",mo:["Ádám Róbert Gábor"]},"Password Cracker":{type:h.b,fl:"https://www.hackerrank.com/challenges/password-cracker/problem",mo:["Ádám Róbert Gábor"]},"Minimum Loss":{type:h.a,fl:"https://www.hackerrank.com/challenges/minimum-loss/problem",mo:["Temesvári Ráhel Anna"]},"The Coin Change Problem":{type:h.c,fl:"https://www.hackerrank.com/challenges/coin-change/problem",mo:["Temesvári Ráhel Anna"]},"Journey to the Moon":{type:h.d,fl:"https://www.hackerrank.com/challenges/journey-to-the-moon/problem",mo:["Temesvári Ráhel Anna"]},Családfa:{type:h.d,fl:"https://mester.inf.elte.hu:8181/faces/leiras.xhtml?jfwid=e14b800137b830f1fcf95ed69687:196",mo:["Vígh-Mácsai Zsanett"]},"Dice Combinations":{type:h.c,fl:"https://cses.fi/problemset/task/1633",mo:["Vígh-Mácsai Zsanett"]},"CODEM4 - Problem4":{type:h.b,fl:"https://www.spoj.com/problems/CODEM4/cstart=20",mo:["Vígh-Mácsai Zsanett"]},"Distinct Numbers":{type:h.a,fl:"https://cses.fi/problemset/task/1621",mo:["Vígh-Mácsai Zsanett"]},"Ice Cream Parlor":{type:h.a,fl:"https://www.hackerrank.com/challenges/icecream-parlor/problem",mo:["Gyenes Lídia"]},"Recursive Digit Sum":{type:h.b,fl:"https://www.hackerrank.com/challenges/recursive-digit-sum/problem",mo:["Dékány Tamás"]},"Mail Delivery":{type:h.d,fl:"https://cses.fi/problemset/task/1691",mo:["dr. Báthori Endre"]},"Edit Distance":{type:h.c,fl:"https://cses.fi/problemset/task/1639",mo:["dr. Báthori Endre"]},"Tree Traversals":{type:h.b,fl:"https://cses.fi/problemset/task/1702",mo:["dr. Báthori Endre"]},"Tasks and Deadlines":{type:h.a,fl:"https://cses.fi/problemset/task/1630",mo:["dr. Báthori Endre"]},Towers:{type:h.a,fl:"https://cses.fi/problemset/task/1073",mo:["Kezes Rudolf Sámson"]},"The Power Sum":{type:h.b,fl:"https://www.hackerrank.com/challenges/the-power-sum/problem",mo:["Kezes Rudolf Sámson"]},"Gridland Metro":{type:h.a,fl:"https://www.hackerrank.com/challenges/gridland-metro/problem",mo:["Sámfira Gábor"]},"Crossword Puzzle":{type:h.b,fl:"https://www.hackerrank.com/challenges/crossword-puzzle/problem",mo:["Sámfira Gábor"]},"Sherlock and Cost":{type:h.c,fl:"https://www.hackerrank.com/challenges/sherlock-and-cost/problem",mo:["Sámfira Gábor"]},"Even Tree":{type:h.d,fl:"https://www.hackerrank.com/challenges/even-tree/problem",mo:["Sámfira Gábor"]},"Lily's Homework":{type:h.a,fl:"https://www.hackerrank.com/challenges/lilys-homework/problem",mo:["Urbán Ákos"]},"Stone Division":{type:h.b,fl:"https://www.hackerrank.com/challenges/lilys-homework/problem",mo:["Urbán Ákos"]},"Roads and Libraries":{type:h.c,fl:"https://www.hackerrank.com/challenges/stockmax/problem",mo:["Urbán Ákos"]},"Stock Maximize":{type:h.d,fl:"https://www.hackerrank.com/challenges/torque-and-development/problem",mo:["Urbán Ákos"]}};g=w;const O=[["https://cses.fi/logo.png?1","CSES","https://cses.fi/problemset/"],["https://hrcdn.net/fcore/assets/brand/logo-new-white-green-a5cb16e0ae.svg","hackerrank","https://www.hackerrank.com/"],["https://stx1.spoj.com/gfx/2015e.png","spoj","https://www.spoj.com/"],["./mester.png","mester","https://mester.inf.elte.hu/"]];function v(){o.hallg=this.value,l(1,o)}function j(){o.feladat=this.value,l(1,o)}function V(){o.feladat_link=this.value,l(1,o)}function T(){o.hallgato_link=this.value,l(1,o)}const z=async()=>{let s=await fetch("https://szte.eu/p2.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});s=await s.json(),s.success&&(l(1,o.hallgato=o.hallg,o),delete o.hallg,n.unshift(o),l(0,n),l(1,o={hallg:"",feladat:"",feladat_link:""}))};function y(){r=this.value,l(2,r)}function U(){d=Se(this),l(3,d),l(6,h)}const S=()=>{if(d==="-"){l(5,g=w);return}l(5,g={}),Object.entries(w).filter(s=>s[1].type==h[d]).forEach(s=>l(5,g[s[0]]=s[1],g))};function p(){C=Se(this),l(4,C),l(7,b)}return[n,o,r,d,C,g,h,b,w,O,v,j,V,T,z,y,U,S,p,()=>{if(C==="-"){l(5,g=w);return}l(5,g={}),Object.entries(w).filter(s=>s[1].mo.includes(C)).forEach(s=>l(5,g[s[0]]=s[1],g))},s=>s[0].toLowerCase().includes(r.toLowerCase())]}class vt extends dt{constructor(t){super(),mt(this,t,wt,bt,et,{},null,[-1,-1])}}new vt({target:document.getElementById("app")});