var Ve=Object.defineProperty;var Ue=(e,t,l)=>t in e?Ve(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l;var ue=(e,t,l)=>Ue(e,typeof t!="symbol"?t+"":t,l);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const m of s.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&n(m)}).observe(document,{childList:!0,subtree:!0});function l(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=l(o);fetch(o.href,s)}})();function J(){}function Ie(e){return e()}function ve(){return Object.create(null)}function ae(e){e.forEach(Ie)}function Fe(e){return typeof e=="function"}function Ze(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let ie;function qe(e,t){return e===t?!0:(ie||(ie=document.createElement("a")),ie.href=t,e===ie.href)}function Je(e){return Object.keys(e).length===0}function He(e){return e??""}function c(e,t){e.appendChild(t)}function I(e,t,l){e.insertBefore(t,l||null)}function N(e){e.parentNode&&e.parentNode.removeChild(e)}function le(e,t){for(let l=0;l<e.length;l+=1)e[l]&&e[l].d(t)}function p(e){return document.createElement(e)}function P(e){return document.createTextNode(e)}function G(){return P(" ")}function Qe(){return P("")}function U(e,t,l,n){return e.addEventListener(t,l,n),()=>e.removeEventListener(t,l,n)}function h(e,t,l){l==null?e.removeAttribute(t):e.getAttribute(t)!==l&&e.setAttribute(t,l)}function We(e){return Array.from(e.childNodes)}function re(e,t){t=""+t,e.data!==t&&(e.data=t)}function M(e,t){e.value=t??""}function fe(e,t,l){for(let n=0;n<e.options.length;n+=1){const o=e.options[n];if(o.__value===t){o.selected=!0;return}}(!l||t!==void 0)&&(e.selectedIndex=-1)}function ze(e){const t=e.querySelector(":checked");return t&&t.__value}let oe;function ne(e){oe=e}function Xe(){if(!oe)throw new Error("Function called outside component initialization");return oe}function Ye(e){Xe().$$.on_mount.push(e)}const ee=[],Ce=[];let te=[];const Ee=[],$e=Promise.resolve();let me=!1;function xe(){me||(me=!0,$e.then(Ke))}function se(e){te.push(e)}const pe=new Set;let x=0;function Ke(){if(x!==0)return;const e=oe;do{try{for(;x<ee.length;){const t=ee[x];x++,ne(t),et(t.$$)}}catch(t){throw ee.length=0,x=0,t}for(ne(null),ee.length=0,x=0;Ce.length;)Ce.pop()();for(let t=0;t<te.length;t+=1){const l=te[t];pe.has(l)||(pe.add(l),l())}te.length=0}while(ee.length);for(;Ee.length;)Ee.pop()();me=!1,pe.clear(),ne(e)}function et(e){if(e.fragment!==null){e.update(),ae(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(se)}}function tt(e){const t=[],l=[];te.forEach(n=>e.indexOf(n)===-1?t.push(n):l.push(n)),l.forEach(n=>n()),te=t}const lt=new Set;function nt(e,t){e&&e.i&&(lt.delete(e),e.i(t))}function Z(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function ot(e,t,l){const{fragment:n,after_update:o}=e.$$;n&&n.m(t,l),se(()=>{const s=e.$$.on_mount.map(Ie).filter(Fe);e.$$.on_destroy?e.$$.on_destroy.push(...s):ae(s),e.$$.on_mount=[]}),o.forEach(se)}function st(e,t){const l=e.$$;l.fragment!==null&&(tt(l.after_update),ae(l.on_destroy),l.fragment&&l.fragment.d(t),l.on_destroy=l.fragment=null,l.ctx=[])}function at(e,t){e.$$.dirty[0]===-1&&(ee.push(e),xe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function rt(e,t,l,n,o,s,m=null,g=[-1]){const a=oe;ne(e);const _=e.$$={fragment:null,ctx:[],props:s,update:J,not_equal:o,bound:ve(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:ve(),dirty:g,skip_bound:!1,root:t.target||a.$$.root};m&&m(_.root);let d=!1;if(_.ctx=l?l(e,t.props||{},(k,L,...z)=>{const T=z.length?z[0]:L;return _.ctx&&o(_.ctx[k],_.ctx[k]=T)&&(!_.skip_bound&&_.bound[k]&&_.bound[k](T),d&&at(e,k)),L}):[],_.update(),d=!0,ae(_.before_update),_.fragment=n?n(_.ctx):!1,t.target){if(t.hydrate){const k=We(t.target);_.fragment&&_.fragment.l(k),k.forEach(N)}else _.fragment&&_.fragment.c();t.intro&&nt(e.$$.fragment),ot(e,t.target,t.anchor),Ke()}ne(a)}class ct{constructor(){ue(this,"$$");ue(this,"$$set")}$destroy(){st(this,1),this.$destroy=J}$on(t,l){if(!Fe(l))return J;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(l),()=>{const o=n.indexOf(l);o!==-1&&n.splice(o,1)}}$set(t){this.$$set&&!Je(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const it="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(it);function Le(e,t,l){const n=e.slice();return n[21]=t[l],n}function Se(e,t,l){const n=e.slice();return n[24]=t[l],n}function Ae(e,t,l){const n=e.slice();return n[27]=t[l],n}function Oe(e,t,l){const n=e.slice();return n[30]=t[l],n}function je(e,t,l){const n=e.slice();return n[30]=t[l],n}function Me(e){let t,l,n;return{c(){t=p("button"),t.textContent="Ezt leadtam (foglalt lett)...",h(t,"class","svelte-1l4oe1f")},m(o,s){I(o,t,s),l||(n=U(t,"click",e[14]),l=!0)},p:J,d(o){o&&N(t),l=!1,n()}}}function Te(e){let t,l=e[30][1]+"",n;return{c(){t=p("option"),n=P(l),t.__value=e[30][0],M(t,t.__value)},m(o,s){I(o,t,s),c(t,n)},p:J,d(o){o&&N(t)}}}function Re(e){let t,l=e[30][0]+"",n,o;return{c(){t=p("option"),n=P(l),t.__value=o=e[30][0],M(t,t.__value)},m(s,m){I(s,t,m),c(t,n)},p(s,m){m[0]&32&&l!==(l=s[30][0]+"")&&re(n,l),m[0]&32&&o!==(o=s[30][0])&&(t.__value=o,M(t,t.__value))},d(s){s&&N(t)}}}function De(e){let t,l,n,o;return{c(){t=p("a"),l=p("img"),o=G(),h(l,"class",He(e[27][1].toLocaleLowerCase())+" svelte-1l4oe1f"),qe(l.src,n=e[27][0])||h(l,"src",n),h(l,"alt",e[27][1]),h(t,"href",e[27][2]),h(t,"target","_blank"),h(t,"class","svelte-1l4oe1f")},m(s,m){I(s,t,m),c(t,l),c(t,o)},p:J,d(s){s&&N(t)}}}function Ge(e){let t=e[21][1].fl.toLocaleLowerCase().includes(e[27][1].toLocaleLowerCase()),l,n=t&&De(e);return{c(){n&&n.c(),l=Qe()},m(o,s){n&&n.m(o,s),I(o,l,s)},p(o,s){s[0]&68&&(t=o[21][1].fl.toLocaleLowerCase().includes(o[27][1].toLocaleLowerCase())),t?n?n.p(o,s):(n=De(o),n.c(),n.m(l.parentNode,l)):n&&(n.d(1),n=null)},d(o){o&&N(l),n&&n.d(o)}}}function ft(e){let t,l,n=e[6][e[21][0]].type+"",o,s,m;return{c(){t=p("span"),l=P("("),o=P(n),s=P(")"),m=P(":"),h(t,"class","done svelte-1l4oe1f")},m(g,a){I(g,t,a),c(t,l),c(t,o),c(t,s),I(g,m,a)},p(g,a){a[0]&68&&n!==(n=g[6][g[21][0]].type+"")&&re(o,n)},d(g){g&&(N(t),N(m))}}}function ht(e){let t,l=e[6][e[21][0]].type+"",n;return{c(){t=p("span"),n=P(l),h(t,"class","h svelte-1l4oe1f")},m(o,s){I(o,t,s),c(t,n)},p(o,s){s[0]&68&&l!==(l=o[6][o[21][0]].type+"")&&re(n,l)},d(o){o&&N(t)}}}function ut(e){let t;return{c(){t=p("span"),t.textContent="ellenőrzés alatt...",h(t,"class","x svelte-1l4oe1f")},m(l,n){I(l,t,n)},p:J,d(l){l&&N(t)}}}function Pe(e){let t,l=e[24]+"",n,o;return{c(){t=p("a"),n=P(l),h(t,"target","_blank"),h(t,"href",o=e[5][e[24]]),h(t,"class","svelte-1l4oe1f")},m(s,m){I(s,t,m),c(t,n)},p(s,m){m[0]&68&&l!==(l=s[24]+"")&&re(n,l),m[0]&100&&o!==(o=s[5][s[24]])&&h(t,"href",o)},d(s){s&&N(t)}}}function Ne(e){let t,l,n,o,s,m=e[21][0]+"",g,a,_,d,k,L,z,T=Z(e[9]),y=[];for(let f=0;f<T.length;f+=1)y[f]=Ge(Ae(e,T,f));function V(f,R){return f[6][f[21][0]].type=="- Ellenőrzés alatt -"?ut:f[6][f[21][0]].type=="- Nincs beadva a CooSpace-en! -"?ht:ft}let C=V(e),S=C(e),B=Z(e[21][1].mo),w=[];for(let f=0;f<B.length;f+=1)w[f]=Pe(Se(e,B,f));return{c(){t=p("tr"),l=p("td");for(let f=0;f<y.length;f+=1)y[f].c();n=G(),o=p("th"),s=p("a"),g=P(m),_=G(),d=p("td"),S.c(),k=G(),L=p("th");for(let f=0;f<w.length;f+=1)w[f].c();z=G(),h(l,"class","imgph svelte-1l4oe1f"),h(s,"target","_blank"),h(s,"href",a=e[21][1].fl),h(s,"class","svelte-1l4oe1f"),h(o,"class","svelte-1l4oe1f"),h(d,"class","svelte-1l4oe1f"),h(L,"class","svelte-1l4oe1f")},m(f,R){I(f,t,R),c(t,l);for(let u=0;u<y.length;u+=1)y[u]&&y[u].m(l,null);c(t,n),c(t,o),c(o,s),c(s,g),c(t,_),c(t,d),S.m(d,null),c(t,k),c(t,L);for(let u=0;u<w.length;u+=1)w[u]&&w[u].m(L,null);c(t,z)},p(f,R){if(R[0]&580){T=Z(f[9]);let u;for(u=0;u<T.length;u+=1){const b=Ae(f,T,u);y[u]?y[u].p(b,R):(y[u]=Ge(b),y[u].c(),y[u].m(l,null))}for(;u<y.length;u+=1)y[u].d(1);y.length=T.length}if(R[0]&68&&m!==(m=f[21][0]+"")&&re(g,m),R[0]&68&&a!==(a=f[21][1].fl)&&h(s,"href",a),C===(C=V(f))&&S?S.p(f,R):(S.d(1),S=C(f),S&&(S.c(),S.m(d,null))),R[0]&100){B=Z(f[21][1].mo);let u;for(u=0;u<B.length;u+=1){const b=Se(f,B,u);w[u]?w[u].p(b,R):(w[u]=Pe(b),w[u].c(),w[u].m(L,null))}for(;u<w.length;u+=1)w[u].d(1);w.length=B.length}},d(f){f&&N(t),le(y,f),S.d(),le(w,f)}}}function pt(e){let t,l,n,o,s,m,g,a,_,d,k,L,z,T,y,V,C,S,B,w,f,R,u,b,v,de,_e,ge,q,be,F,Q,ke,K,W,we,ce,he,ye,D=e[1].hallg&&e[1].feladat&&e[1].feladat_link&&Me(e),X=Z(Object.entries(e[8])),A=[];for(let r=0;r<X.length;r+=1)A[r]=Te(je(e,X,r));let Y=Z(Object.entries(e[5])),O=[];for(let r=0;r<Y.length;r+=1)O[r]=Re(Oe(e,Y,r));let $=Z(Object.entries(e[6]).filter(e[20]).sort(Be)),j=[];for(let r=0;r<$.length;r+=1)j[r]=Ne(Le(e,$,r));return{c(){t=p("main"),l=p("h1"),l.textContent="Beadott problema hozzáadása (foglalt lett....)",n=G(),o=p("table"),s=p("tr"),m=p("td"),g=p("table"),a=p("tr"),_=p("td"),d=p("input"),k=G(),L=p("td"),z=p("input"),T=G(),y=p("tr"),V=p("td"),C=p("input"),S=G(),B=p("tr"),w=p("td"),f=p("input"),R=G(),u=p("td"),D&&D.c(),b=G(),v=p("h1"),de=P("Leadott (elkelt) feladatok:"),_e=p("br"),ge=G(),q=p("input"),be=P(` - 
  `),F=p("select"),Q=p("option"),Q.textContent="Minden típus";for(let r=0;r<A.length;r+=1)A[r].c();ke=G(),K=p("select"),W=p("option"),W.textContent="Minden hallgató";for(let r=0;r<O.length;r+=1)O[r].c();we=G(),ce=p("table");for(let r=0;r<j.length;r+=1)j[r].c();h(l,"class","svelte-1l4oe1f"),h(d,"class","hallg svelte-1l4oe1f"),h(d,"type","text"),h(d,"placeholder","Hallgató neve"),h(_,"class","svelte-1l4oe1f"),h(z,"class","fel svelte-1l4oe1f"),h(z,"type","text"),h(z,"placeholder","Feladat címe"),h(L,"class","svelte-1l4oe1f"),h(C,"class","link svelte-1l4oe1f"),h(C,"type","text"),h(C,"placeholder","Feladat link"),h(V,"colspan","2"),h(V,"class","svelte-1l4oe1f"),h(f,"class","link svelte-1l4oe1f"),h(f,"type","text"),h(f,"placeholder","Hallhatói indexoldal link"),h(w,"colspan","2"),h(w,"class","svelte-1l4oe1f"),h(m,"class","svelte-1l4oe1f"),h(u,"class","button svelte-1l4oe1f"),h(q,"type","text"),h(q,"placeholder","Szűrés"),h(q,"class","svelte-1l4oe1f"),Q.__value="-",M(Q,Q.__value),h(F,"class","svelte-1l4oe1f"),e[3]===void 0&&se(()=>e[16].call(F)),W.__value="-",M(W,W.__value),h(K,"class","svelte-1l4oe1f"),e[4]===void 0&&se(()=>e[18].call(K)),h(v,"class","svelte-1l4oe1f")},m(r,E){I(r,t,E),c(t,l),c(t,n),c(t,o),c(o,s),c(s,m),c(m,g),c(g,a),c(a,_),c(_,d),M(d,e[1].hallg),c(a,k),c(a,L),c(L,z),M(z,e[1].feladat),c(g,T),c(g,y),c(y,V),c(V,C),M(C,e[1].feladat_link),c(g,S),c(g,B),c(B,w),c(w,f),M(f,e[1].hallgato_link),c(s,R),c(s,u),D&&D.m(u,null),c(t,b),c(t,v),c(v,de),c(v,_e),c(v,ge),c(v,q),M(q,e[2]),c(v,be),c(v,F),c(F,Q);for(let i=0;i<A.length;i+=1)A[i]&&A[i].m(F,null);fe(F,e[3],!0),c(v,ke),c(v,K),c(K,W);for(let i=0;i<O.length;i+=1)O[i]&&O[i].m(K,null);fe(K,e[4],!0),c(t,we),c(t,ce);for(let i=0;i<j.length;i+=1)j[i]&&j[i].m(ce,null);he||(ye=[U(d,"input",e[10]),U(z,"input",e[11]),U(C,"input",e[12]),U(f,"input",e[13]),U(q,"input",e[15]),U(F,"change",e[16]),U(F,"change",e[17]),U(K,"change",e[18]),U(K,"change",e[19])],he=!0)},p(r,E){if(E[0]&2&&d.value!==r[1].hallg&&M(d,r[1].hallg),E[0]&2&&z.value!==r[1].feladat&&M(z,r[1].feladat),E[0]&2&&C.value!==r[1].feladat_link&&M(C,r[1].feladat_link),E[0]&2&&f.value!==r[1].hallgato_link&&M(f,r[1].hallgato_link),r[1].hallg&&r[1].feladat&&r[1].feladat_link?D?D.p(r,E):(D=Me(r),D.c(),D.m(u,null)):D&&(D.d(1),D=null),E[0]&4&&q.value!==r[2]&&M(q,r[2]),E[0]&256){X=Z(Object.entries(r[8]));let i;for(i=0;i<X.length;i+=1){const H=je(r,X,i);A[i]?A[i].p(H,E):(A[i]=Te(H),A[i].c(),A[i].m(F,null))}for(;i<A.length;i+=1)A[i].d(1);A.length=X.length}if(E[0]&264&&fe(F,r[3]),E[0]&32){Y=Z(Object.entries(r[5]));let i;for(i=0;i<Y.length;i+=1){const H=Oe(r,Y,i);O[i]?O[i].p(H,E):(O[i]=Re(H),O[i].c(),O[i].m(K,null))}for(;i<O.length;i+=1)O[i].d(1);O.length=Y.length}if(E[0]&48&&fe(K,r[4]),E[0]&612){$=Z(Object.entries(r[6]).filter(r[20]).sort(Be));let i;for(i=0;i<$.length;i+=1){const H=Le(r,$,i);j[i]?j[i].p(H,E):(j[i]=Ne(H),j[i].c(),j[i].m(ce,null))}for(;i<j.length;i+=1)j[i].d(1);j.length=$.length}},i:J,o:J,d(r){r&&N(t),D&&D.d(),le(A,r),le(O,r),le(j,r),he=!1,ae(ye)}}}const Be=(e,t)=>e[1].type==t[1].type?0:e[1].type<t[1].type?-1:1;function mt(e,t,l){var n=[],o={hallg:"",feladat:"",feladat_link:""},s="",m,g;const a={x:"- Ellenőrzés alatt -",a:"Keresés, rendezés",b:"Rekurzzióval megoldható feladatok",c:"Dinamikus programozással megoldható feladat",d:"Fa- és gráfalgoritmusos feladatok",e:"SPOJ/OKTV",h:"- Nincs beadva a CooSpace-en! -"},_={"Marschall Gábor":"https://github.com/CaTwoPlus/alga_I","Rafael Anita Ilona":"https://r-anita.github.io/Alga/","Dr. Nébl Anita":"https://nebl-annamaria.github.io/","Béleczki Ádám":"https://github.com/Adee81/Algoritmusok/tree/main/04_Fak_Grafok","Ádám Róbert Gábor":"https://adamrobert77.github.io/L_Algoritmusok_es_adatszerkezetek_I/","Temesvári Ráhel Anna":"https://rahelanna.github.io/Algoritmusok-es-adatszerkezetek/","Vígh-Mácsai Zsanett":"https://vigzs.github.io/Algoritmusok--s-adatszerkezetek-beadand-/","Dékány Tamás":"https://github.com/dekany01/Algoritmusok","Gyenes Lídia":"https://github.com/Lydiagyenes/alga","dr. Báthori Endre":"https://github.com/bathoriendre/algoritmusok/blob/main/TaskAndDeadlines.md","Kezes Rudolf Sámson":"https://github.com/Zorahk/alga_hazik","Urbán Ákos":"https://github.com/akosh25/algoritmusok","Sámfira Gábor":"https://github.com/Infinity42o/L-Algoritmusok-s-adatszerkezetek"};var d;const k={"Red John is Back":{type:a.c,fl:"https://www.hackerrank.com/challenges/red-john-is-back/problem",mo:["Marschall Gábor"]},"Breadth First Search: Shortest Reach":{type:a.d,fl:"https://www.hackerrank.com/challenges/bfsshortreach/problem",mo:["Ádám Róbert Gábor"]},"Max Min":{type:a.a,fl:"https://www.hackerrank.com/challenges/angry-children/problem",mo:["Dékány Tamás"]},"Fibonacci Modified":{type:a.a,fl:"https://www.hackerrank.com/challenges/fibonacci-modified/problem",mo:["Dékány Tamás"]},"Lego Blocks":{type:a.c,fl:"https://www.hackerrank.com/challenges/lego-blocks/problem",mo:["Dékány Tamás"]},Pairs:{type:a.a,fl:"https://www.hackerrank.com/challenges/pairs/problem",mo:["Rafael Anita Ilona"]},Apartments:{type:a.a,fl:"https://cses.fi/problemset/task/1084",mo:["Dr. Nébl Anita"]},"KnightL on a Chessboard":{type:a.a,fl:"https://www.hackerrank.com/challenges/knightl-on-chessboard/problem?isFullScreen=false",mo:["Béleczki Ádám"]},"Greedy Florist":{type:a.a,fl:"https://www.hackerrank.com/challenges/greedy-florist/problem",mo:["Ádám Róbert Gábor"]},"Password Cracker":{type:a.b,fl:"https://www.hackerrank.com/challenges/password-cracker/problem",mo:["Ádám Róbert Gábor"]},"Minimum Loss":{type:a.a,fl:"https://www.hackerrank.com/challenges/minimum-loss/problem",mo:["Temesvári Ráhel Anna"]},"The Coin Change Problem":{type:a.c,fl:"https://www.hackerrank.com/challenges/coin-change/problem",mo:["Temesvári Ráhel Anna"]},"Journey to the Moon":{type:a.d,fl:"https://www.hackerrank.com/challenges/journey-to-the-moon/problem",mo:["Temesvári Ráhel Anna"]},Családfa:{type:a.d,fl:"https://mester.inf.elte.hu:8181/faces/leiras.xhtml?jfwid=e14b800137b830f1fcf95ed69687:196",mo:["Vígh-Mácsai Zsanett"]},"Dice Combinations":{type:a.c,fl:"https://cses.fi/problemset/task/1633",mo:["Vígh-Mácsai Zsanett"]},"CODEM4 - Problem4":{type:a.b,fl:"https://www.spoj.com/problems/CODEM4/cstart=20",mo:["Vígh-Mácsai Zsanett"]},"Distinct Numbers":{type:a.a,fl:"https://cses.fi/problemset/task/1621",mo:["Vígh-Mácsai Zsanett"]},"Ice Cream Parlor":{type:a.a,fl:"https://www.hackerrank.com/challenges/icecream-parlor/problem",mo:["Gyenes Lídia"]},"Recursive Digit Sum":{type:a.b,fl:"https://www.hackerrank.com/challenges/recursive-digit-sum/problem",mo:["Dékány Tamás"]},"Mail Delivery":{type:a.d,fl:"https://cses.fi/problemset/task/1691",mo:["dr. Báthori Endre"]},"Edit Distance":{type:a.c,fl:"https://cses.fi/problemset/task/1639",mo:["dr. Báthori Endre"]},"Tree Traversals":{type:a.b,fl:"https://cses.fi/problemset/task/1702",mo:["dr. Báthori Endre"]},"Tasks and Deadlines":{type:a.a,fl:"https://cses.fi/problemset/task/1630",mo:["dr. Báthori Endre"]},Towers:{type:a.a,fl:"https://cses.fi/problemset/task/1073",mo:["Kezes Rudolf Sámson"]},"The Power Sum":{type:a.b,fl:"https://www.hackerrank.com/challenges/the-power-sum/problem",mo:["Kezes Rudolf Sámson"]},"Gridland Metro":{type:a.a,fl:"https://www.hackerrank.com/challenges/gridland-metro/problem",mo:["Sámfira Gábor"]},"Crossword Puzzle":{type:a.b,fl:"https://www.hackerrank.com/challenges/crossword-puzzle/problem",mo:["Sámfira Gábor"]},"Sherlock and Cost":{type:a.c,fl:"https://www.hackerrank.com/challenges/sherlock-and-cost/problem",mo:["Sámfira Gábor"]},"Even Tree":{type:a.d,fl:"https://www.hackerrank.com/challenges/even-tree/problem",mo:["Sámfira Gábor"]},"Lily's Homework":{type:a.a,fl:"https://www.hackerrank.com/challenges/lilys-homework/problem",mo:["Urbán Ákos"]},"Stone Division":{type:a.b,fl:"https://www.hackerrank.com/challenges/lilys-homework/problem",mo:["Urbán Ákos"]},"Roads and Libraries":{type:a.c,fl:"https://www.hackerrank.com/challenges/stockmax/problem",mo:["Urbán Ákos"]},"Stock Maximize":{type:a.d,fl:"https://www.hackerrank.com/challenges/torque-and-development/problem",mo:["Urbán Ákos"]}};d=k;const L=[["https://cses.fi/logo.png?1","CSES","https://cses.fi/problemset/"],["https://hrcdn.net/fcore/assets/brand/logo-new-white-green-a5cb16e0ae.svg","hackerrank","https://www.hackerrank.com/"],["https://stx1.spoj.com/gfx/2015e.png","spoj","https://www.spoj.com/"],["./mester.png","mester","https://mester.inf.elte.hu/"]];Ye(async()=>{let b=await fetch("https://szte.eu/p1.php");l(0,n=await b.json()),n.forEach(v=>{l(7,k[v.feladat]={type:a[v.type]||"- Ellenőrzés alatt -",fl:v.feladat_link,mo:[v.hallgato]},k),l(5,_[v.hallgato]=v.hallgato_link,_)}),l(6,d=k)});function z(){o.hallg=this.value,l(1,o)}function T(){o.feladat=this.value,l(1,o)}function y(){o.feladat_link=this.value,l(1,o)}function V(){o.hallgato_link=this.value,l(1,o)}const C=async()=>{let b=await fetch("https://szte.eu/p2.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});b=await b.json(),b.success&&(l(1,o.hallgato=o.hallg,o),delete o.hallg,n.unshift(o),l(0,n),l(1,o={hallg:"",feladat:"",feladat_link:""}))};function S(){s=this.value,l(2,s)}function B(){m=ze(this),l(3,m),l(8,a)}const w=()=>{if(m==="-"){l(6,d=k);return}l(6,d={}),Object.entries(k).filter(b=>b[1].type==a[m]).forEach(b=>l(6,d[b[0]]=b[1],d)),l(4,g="-")};function f(){g=ze(this),l(4,g),l(5,_)}return[n,o,s,m,g,_,d,k,a,L,z,T,y,V,C,S,B,w,f,()=>{if(g==="-"){l(6,d=k);return}l(6,d={}),Object.entries(k).filter(b=>b[1].mo.includes(g)).forEach(b=>l(6,d[b[0]]=b[1],d)),l(3,m="-")},b=>b[0].toLowerCase().includes(s.toLowerCase())]}class dt extends ct{constructor(t){super(),rt(this,t,mt,pt,Ze,{},null,[-1,-1])}}new dt({target:document.getElementById("app")});
