var fe=Object.defineProperty;var he=(e,t,l)=>t in e?fe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l;var N=(e,t,l)=>he(e,typeof t!="symbol"?t+"":t,l);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const h of s.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function l(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=l(n);fetch(n.href,s)}})();function T(){}function ae(e){return e()}function W(){return Object.create(null)}function B(e){e.forEach(ae)}function ce(e){return typeof e=="function"}function ue(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let j;function me(e,t){return e===t?!0:(j||(j=document.createElement("a")),j.href=t,e===j.href)}function de(e){return Object.keys(e).length===0}function pe(e){return e??""}function m(e,t){e.appendChild(t)}function P(e,t,l){e.insertBefore(t,l||null)}function M(e){e.parentNode&&e.parentNode.removeChild(e)}function K(e,t){for(let l=0;l<e.length;l+=1)e[l]&&e[l].d(t)}function k(e){return document.createElement(e)}function $(e){return document.createTextNode(e)}function E(){return $(" ")}function ge(){return $("")}function be(e,t,l,r){return e.addEventListener(t,l,r),()=>e.removeEventListener(t,l,r)}function d(e,t,l){l==null?e.removeAttribute(t):e.getAttribute(t)!==l&&e.setAttribute(t,l)}function ke(e){return Array.from(e.childNodes)}function V(e,t){t=""+t,e.data!==t&&(e.data=t)}function X(e,t){e.value=t??""}let F;function G(e){F=e}const C=[],Y=[];let O=[];const x=[],_e=Promise.resolve();let U=!1;function we(){U||(U=!0,_e.then(ie))}function Z(e){O.push(e)}const I=new Set;let S=0;function ie(){if(S!==0)return;const e=F;do{try{for(;S<C.length;){const t=C[S];S++,G(t),ye(t.$$)}}catch(t){throw C.length=0,S=0,t}for(G(null),C.length=0,S=0;Y.length;)Y.pop()();for(let t=0;t<O.length;t+=1){const l=O[t];I.has(l)||(I.add(l),l())}O.length=0}while(C.length);for(;x.length;)x.pop()();U=!1,I.clear(),G(e)}function ye(e){if(e.fragment!==null){e.update(),B(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Z)}}function ve(e){const t=[],l=[];O.forEach(r=>e.indexOf(r)===-1?t.push(r):l.push(r)),l.forEach(r=>r()),O=t}const $e=new Set;function Le(e,t){e&&e.i&&($e.delete(e),e.i(t))}function A(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function ze(e,t,l){const{fragment:r,after_update:n}=e.$$;r&&r.m(t,l),Z(()=>{const s=e.$$.on_mount.map(ae).filter(ce);e.$$.on_destroy?e.$$.on_destroy.push(...s):B(s),e.$$.on_mount=[]}),n.forEach(Z)}function Se(e,t){const l=e.$$;l.fragment!==null&&(ve(l.after_update),B(l.on_destroy),l.fragment&&l.fragment.d(t),l.on_destroy=l.fragment=null,l.ctx=[])}function Ce(e,t){e.$$.dirty[0]===-1&&(C.push(e),we(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ee(e,t,l,r,n,s,h=null,_=[-1]){const b=F;G(e);const i=e.$$={fragment:null,ctx:[],props:s,update:T,not_equal:n,bound:W(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(b?b.$$.context:[])),callbacks:W(),dirty:_,skip_bound:!1,root:t.target||b.$$.root};h&&h(i.root);let f=!1;if(i.ctx=l?l(e,t.props||{},(o,w,...u)=>{const y=u.length?u[0]:w;return i.ctx&&n(i.ctx[o],i.ctx[o]=y)&&(!i.skip_bound&&i.bound[o]&&i.bound[o](y),f&&Ce(e,o)),w}):[],i.update(),f=!0,B(i.before_update),i.fragment=r?r(i.ctx):!1,t.target){if(t.hydrate){const o=ke(t.target);i.fragment&&i.fragment.l(o),o.forEach(M)}else i.fragment&&i.fragment.c();t.intro&&Le(e.$$.fragment),ze(e,t.target,t.anchor),ie()}G(b)}class Ae{constructor(){N(this,"$$");N(this,"$$set")}$destroy(){Se(this,1),this.$destroy=T}$on(t,l){if(!ce(l))return T;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(l),()=>{const n=r.indexOf(l);n!==-1&&r.splice(n,1)}}$set(t){this.$$set&&!de(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Oe="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Oe);function ee(e,t,l){const r=e.slice();return r[7]=t[l],r}function te(e,t,l){const r=e.slice();return r[10]=t[l],r}function ne(e,t,l){const r=e.slice();return r[13]=t[l],r}function le(e){let t,l,r,n;return{c(){t=k("a"),l=k("img"),n=E(),d(l,"class",pe(e[13][1].toLocaleLowerCase())+" svelte-1a13nal"),me(l.src,r=e[13][0])||d(l,"src",r),d(l,"alt",e[13][1]),d(t,"href",e[13][2]),d(t,"target","_blank"),d(t,"class","svelte-1a13nal")},m(s,h){P(s,t,h),m(t,l),m(t,n)},p:T,d(s){s&&M(t)}}}function re(e){let t=e[7][1].fl.toLocaleLowerCase().includes(e[13][1].toLocaleLowerCase()),l,r=t&&le(e);return{c(){r&&r.c(),l=ge()},m(n,s){r&&r.m(n,s),P(n,l,s)},p(n,s){s&1&&(t=n[7][1].fl.toLocaleLowerCase().includes(n[13][1].toLocaleLowerCase())),t?r?r.p(n,s):(r=le(n),r.c(),r.m(l.parentNode,l)):r&&(r.d(1),r=null)},d(n){n&&M(l),r&&r.d(n)}}}function se(e){let t,l=e[10]+"",r,n;return{c(){t=k("a"),r=$(l),d(t,"target","_blank"),d(t,"href",n=e[1][e[10]]),d(t,"class","svelte-1a13nal")},m(s,h){P(s,t,h),m(t,r)},p(s,h){h&1&&l!==(l=s[10]+"")&&V(r,l),h&1&&n!==(n=s[1][s[10]])&&d(t,"href",n)},d(s){s&&M(t)}}}function oe(e){let t,l,r,n,s,h=e[7][0]+"",_,b,i,f,o,w,u=e[2][e[7][0]].type+"",y,q,J,H,R,Q,L=A(e[3]),p=[];for(let c=0;c<L.length;c+=1)p[c]=re(ne(e,L,c));let z=A(e[7][1].mo),g=[];for(let c=0;c<z.length;c+=1)g[c]=se(te(e,z,c));return{c(){t=k("tr"),l=k("td");for(let c=0;c<p.length;c+=1)p[c].c();r=E(),n=k("th"),s=k("a"),_=$(h),i=E(),f=k("td"),o=k("span"),w=$("("),y=$(u),q=$(")"),J=$(":"),H=E(),R=k("th");for(let c=0;c<g.length;c+=1)g[c].c();Q=E(),d(l,"class","imgph svelte-1a13nal"),d(s,"target","_blank"),d(s,"href",b=e[7][1].fl),d(s,"class","svelte-1a13nal"),d(n,"class","svelte-1a13nal"),d(o,"class","svelte-1a13nal"),d(f,"class","svelte-1a13nal"),d(R,"class","svelte-1a13nal")},m(c,v){P(c,t,v),m(t,l);for(let a=0;a<p.length;a+=1)p[a]&&p[a].m(l,null);m(t,r),m(t,n),m(n,s),m(s,_),m(t,i),m(t,f),m(f,o),m(o,w),m(o,y),m(o,q),m(f,J),m(t,H),m(t,R);for(let a=0;a<g.length;a+=1)g[a]&&g[a].m(R,null);m(t,Q)},p(c,v){if(v&13){L=A(c[3]);let a;for(a=0;a<L.length;a+=1){const D=ne(c,L,a);p[a]?p[a].p(D,v):(p[a]=re(D),p[a].c(),p[a].m(l,null))}for(;a<p.length;a+=1)p[a].d(1);p.length=L.length}if(v&1&&h!==(h=c[7][0]+"")&&V(_,h),v&1&&b!==(b=c[7][1].fl)&&d(s,"href",b),v&1&&u!==(u=c[2][c[7][0]].type+"")&&V(y,u),v&7){z=A(c[7][1].mo);let a;for(a=0;a<z.length;a+=1){const D=te(c,z,a);g[a]?g[a].p(D,v):(g[a]=se(D),g[a].c(),g[a].m(R,null))}for(;a<g.length;a+=1)g[a].d(1);g.length=z.length}},d(c){c&&M(t),K(p,c),K(g,c)}}}function Te(e){let t,l,r,n,s,h,_,b,i=A(Object.entries(e[2]).filter(e[5])),f=[];for(let o=0;o<i.length;o+=1)f[o]=oe(ee(e,i,o));return{c(){t=k("main"),l=k("h1"),r=$("Leadott (elkelt) feladatok - "),n=k("input"),s=E(),h=k("table");for(let o=0;o<f.length;o+=1)f[o].c();d(n,"type","text"),d(n,"placeholder","Szűrés"),d(n,"class","svelte-1a13nal"),d(l,"class","svelte-1a13nal")},m(o,w){P(o,t,w),m(t,l),m(l,r),m(l,n),X(n,e[0]),m(t,s),m(t,h);for(let u=0;u<f.length;u+=1)f[u]&&f[u].m(h,null);_||(b=be(n,"input",e[4]),_=!0)},p(o,[w]){if(w&1&&n.value!==o[0]&&X(n,o[0]),w&15){i=A(Object.entries(o[2]).filter(o[5]));let u;for(u=0;u<i.length;u+=1){const y=ee(o,i,u);f[u]?f[u].p(y,w):(f[u]=oe(y),f[u].c(),f[u].m(h,null))}for(;u<f.length;u+=1)f[u].d(1);f.length=i.length}},i:T,o:T,d(o){o&&M(t),K(f,o),_=!1,b()}}}function Me(e,t,l){var r="";const n={a:"Keresés, rendezés",b:"Rekurzzióval megoldható feladatok",c:"Dinamikus programozással megoldható feladat",d:"Fa- és gráfalgoritmusos feladatok",e:"SPOJ/OKTV"},s={"Béleczki Ádám":"https://github.com/Adee81/Algoritmusok/tree/main/04_Fak_Grafok","Ádám Róbert Gábor":"https://adamrobert77.github.io/L_Algoritmusok_es_adatszerkezetek_I/","Temesvári Ráhel Anna":"https://rahelanna.github.io/Algoritmusok-es-adatszerkezetek/","Vígh-Mácsai Zsanett":"https://vigzs.github.io/Algoritmusok--s-adatszerkezetek-beadand-/","Dékány Tamás":"https://github.com/dekany01/Algoritmusok","Gyenes Lídia":"https://github.com/Lydiagyenes/alga","dr. Báthori Endre":"https://github.com/bathoriendre/algoritmusok/blob/main/TaskAndDeadlines.md","Kezes Rudolf Sámson":"https://github.com/Zorahk/alga_hazik","Urbán Ákos":"https://github.com/akosh25/algoritmusok","Sámfira Gábor":"https://github.com/Infinity42o/L-Algoritmusok-s-adatszerkezetek"},h={"KnightL on a Chessboard":{type:n.a,fl:"https://www.hackerrank.com/challenges/knightl-on-chessboard/problem?isFullScreen=false",mo:["Béleczki Ádám"]},"Greedy Florist":{type:n.a,fl:"https://www.hackerrank.com/challenges/greedy-florist/problem",mo:["Ádám Róbert Gábor"]},"Password Cracker":{type:n.b,fl:"https://www.hackerrank.com/challenges/password-cracker/problem",mo:["Ádám Róbert Gábor"]},"Minimum Loss":{type:n.a,fl:"https://www.hackerrank.com/challenges/minimum-loss/problem",mo:["Temesvári Ráhel Anna"]},"The Coin Change Problem":{type:n.c,fl:"https://www.hackerrank.com/challenges/coin-change/problem",mo:["Temesvári Ráhel Anna"]},"Journey to the Moon":{type:n.d,fl:"https://www.hackerrank.com/challenges/journey-to-the-moon/problem",mo:["Temesvári Ráhel Anna"]},Családfa:{type:n.d,fl:"https://mester.inf.elte.hu:8181/faces/leiras.xhtml?jfwid=e14b800137b830f1fcf95ed69687:196",mo:["Vígh-Mácsai Zsanett"]},"Dice Combinations":{type:n.c,fl:"https://cses.fi/problemset/task/1633",mo:["Vígh-Mácsai Zsanett"]},"CODEM4 - Problem4":{type:n.b,fl:"https://www.spoj.com/problems/CODEM4/cstart=20",mo:["Vígh-Mácsai Zsanett"]},"Distinct Numbers":{type:n.a,fl:"https://cses.fi/problemset/task/1621",mo:["Vígh-Mácsai Zsanett"]},"Ice Cream Parlor":{type:n.a,fl:"https://www.hackerrank.com/challenges/icecream-parlor/problem",mo:["Gyenes Lídia"]},"Recursive Digit Sum":{type:n.b,fl:"https://www.hackerrank.com/challenges/recursive-digit-sum/problem",mo:["Dékány Tamás"]},"Mail Delivery":{type:n.d,fl:"https://cses.fi/problemset/task/1691",mo:["dr. Báthori Endre"]},"Edit Distance":{type:n.c,fl:"https://cses.fi/problemset/task/1639",mo:["dr. Báthori Endre"]},"Tree Traversals":{type:n.b,fl:"https://cses.fi/problemset/task/1702",mo:["dr. Báthori Endre"]},"Tasks and Deadlines":{type:n.a,fl:"https://cses.fi/problemset/task/1630",mo:["dr. Báthori Endre"]},Towers:{type:n.a,fl:"https://cses.fi/problemset/task/1073",mo:["Kezes Rudolf Sámson"]},"The Power Sum":{type:n.b,fl:"https://www.hackerrank.com/challenges/the-power-sum/problem",mo:["Kezes Rudolf Sámson"]},"Gridland Metro":{type:n.a,fl:"https://www.hackerrank.com/challenges/gridland-metro/problem",mo:["Sámfira Gábor"]},"Crossword Puzzle":{type:n.b,fl:"https://www.hackerrank.com/challenges/crossword-puzzle/problem",mo:["Sámfira Gábor"]},"Sherlock and Cost":{type:n.c,fl:"https://www.hackerrank.com/challenges/sherlock-and-cost/problem",mo:["Sámfira Gábor"]},"Even Tree":{type:n.d,fl:"https://www.hackerrank.com/challenges/even-tree/problem",mo:["Sámfira Gábor"]},"Lily's Homework":{type:n.a,fl:"https://www.hackerrank.com/challenges/lilys-homework/problem",mo:["Urbán Ákos"]},"Stone Division":{type:n.b,fl:"https://www.hackerrank.com/challenges/lilys-homework/problem",mo:["Urbán Ákos"]},"Roads and Libraries":{type:n.c,fl:"https://www.hackerrank.com/challenges/stockmax/problem",mo:["Urbán Ákos"]},"Stock Maximize":{type:n.d,fl:"https://www.hackerrank.com/challenges/torque-and-development/problem",mo:["Urbán Ákos"]}},_=[["https://cses.fi/logo.png?1","CSES","https://cses.fi/problemset/"],["https://hrcdn.net/fcore/assets/brand/logo-new-white-green-a5cb16e0ae.svg","hackerrank","https://www.hackerrank.com/"],["https://stx1.spoj.com/gfx/2015e.png","spoj","https://www.spoj.com/"],["./mester.png","mester","https://mester.inf.elte.hu/"]];function b(){r=this.value,l(0,r)}return[r,s,h,_,b,f=>f[0].toLowerCase().includes(r.toLowerCase())]}class Re extends Ae{constructor(t){super(),Ee(this,t,Me,Te,ue,{})}}new Re({target:document.getElementById("app")});
