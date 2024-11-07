var Ze=Object.defineProperty;var qe=(e,t,l)=>t in e?Ze(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l;var de=(e,t,l)=>qe(e,typeof t!="symbol"?t+"":t,l);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function l(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=l(n);fetch(n.href,s)}})();function H(){}function Ue(e){return e()}function ze(){return Object.create(null)}function ie(e){e.forEach(Ue)}function Ke(e){return typeof e=="function"}function Je(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let fe;function He(e,t){return e===t?!0:(fe||(fe=document.createElement("a")),fe.href=t,e===fe.href)}function Qe(e){return Object.keys(e).length===0}function We(e){return e??""}function i(e,t){e.appendChild(t)}function N(e,t,l){e.insertBefore(t,l||null)}function P(e){e.parentNode&&e.parentNode.removeChild(e)}function oe(e,t){for(let l=0;l<e.length;l+=1)e[l]&&e[l].d(t)}function p(e){return document.createElement(e)}function G(e){return document.createTextNode(e)}function D(){return G(" ")}function Xe(){return G("")}function U(e,t,l,o){return e.addEventListener(t,l,o),()=>e.removeEventListener(t,l,o)}function u(e,t,l){l==null?e.removeAttribute(t):e.getAttribute(t)!==l&&e.setAttribute(t,l)}function Ye(e){return Array.from(e.childNodes)}function ne(e,t){t=""+t,e.data!==t&&(e.data=t)}function M(e,t){e.value=t??""}function ue(e,t,l){for(let o=0;o<e.options.length;o+=1){const n=e.options[o];if(n.__value===t){n.selected=!0;return}}(!l||t!==void 0)&&(e.selectedIndex=-1)}function Ce(e){const t=e.querySelector(":checked");return t&&t.__value}let re;function se(e){re=e}function $e(){if(!re)throw new Error("Function called outside component initialization");return re}function xe(e){$e().$$.on_mount.push(e)}const te=[],Le=[];let le=[];const Ee=[],et=Promise.resolve();let _e=!1;function tt(){_e||(_e=!0,et.then(Ve))}function ae(e){le.push(e)}const me=new Set;let ee=0;function Ve(){if(ee!==0)return;const e=re;do{try{for(;ee<te.length;){const t=te[ee];ee++,se(t),lt(t.$$)}}catch(t){throw te.length=0,ee=0,t}for(se(null),te.length=0,ee=0;Le.length;)Le.pop()();for(let t=0;t<le.length;t+=1){const l=le[t];me.has(l)||(me.add(l),l())}le.length=0}while(te.length);for(;Ee.length;)Ee.pop()();_e=!1,me.clear(),se(e)}function lt(e){if(e.fragment!==null){e.update(),ie(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ae)}}function nt(e){const t=[],l=[];le.forEach(o=>e.indexOf(o)===-1?t.push(o):l.push(o)),l.forEach(o=>o()),le=t}const ot=new Set;function st(e,t){e&&e.i&&(ot.delete(e),e.i(t))}function Z(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function rt(e,t,l){const{fragment:o,after_update:n}=e.$$;o&&o.m(t,l),ae(()=>{const s=e.$$.on_mount.map(Ue).filter(Ke);e.$$.on_destroy?e.$$.on_destroy.push(...s):ie(s),e.$$.on_mount=[]}),n.forEach(ae)}function at(e,t){const l=e.$$;l.fragment!==null&&(nt(l.after_update),ie(l.on_destroy),l.fragment&&l.fragment.d(t),l.on_destroy=l.fragment=null,l.ctx=[])}function it(e,t){e.$$.dirty[0]===-1&&(te.push(e),tt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ct(e,t,l,o,n,s,d=null,k=[-1]){const a=re;se(e);const m=e.$$={fragment:null,ctx:[],props:s,update:H,not_equal:n,bound:ze(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:ze(),dirty:k,skip_bound:!1,root:t.target||a.$$.root};d&&d(m.root);let _=!1;if(m.ctx=l?l(e,t.props||{},(b,L,...v)=>{const T=v.length?v[0]:L;return m.ctx&&n(m.ctx[b],m.ctx[b]=T)&&(!m.skip_bound&&m.bound[b]&&m.bound[b](T),_&&it(e,b)),L}):[],m.update(),_=!0,ie(m.before_update),m.fragment=o?o(m.ctx):!1,t.target){if(t.hydrate){const b=Ye(t.target);m.fragment&&m.fragment.l(b),b.forEach(P)}else m.fragment&&m.fragment.c();t.intro&&st(e.$$.fragment),rt(e,t.target,t.anchor),Ve()}se(a)}class ft{constructor(){de(this,"$$");de(this,"$$set")}$destroy(){at(this,1),this.$destroy=H}$on(t,l){if(!Ke(l))return H;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(l),()=>{const n=o.indexOf(l);n!==-1&&o.splice(n,1)}}$set(t){this.$$set&&!Qe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ut="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ut);function Se(e,t,l){const o=e.slice();return o[23]=t[l],o}function Oe(e,t,l){const o=e.slice();return o[26]=t[l],o}function Ae(e,t,l){const o=e.slice();return o[29]=t[l],o}function je(e,t,l){const o=e.slice();return o[32]=t[l],o}function Me(e,t,l){const o=e.slice();return o[32]=t[l],o}function Te(e){let t,l,o;return{c(){t=p("button"),t.textContent="Ezt leadtam (foglalt lett)...",u(t,"class","svelte-3ngsou")},m(n,s){N(n,t,s),l||(o=U(t,"click",e[15]),l=!0)},p:H,d(n){n&&P(t),l=!1,o()}}}function Re(e){let t,l=e[32][1]+"",o;return{c(){t=p("option"),o=G(l),t.__value=e[32][0],M(t,t.__value)},m(n,s){N(n,t,s),i(t,o)},p:H,d(n){n&&P(t)}}}function De(e){let t,l=e[32][0]+"",o,n;return{c(){t=p("option"),o=G(l),t.__value=n=e[32][0],M(t,t.__value)},m(s,d){N(s,t,d),i(t,o)},p(s,d){d[0]&16&&l!==(l=s[32][0]+"")&&ne(o,l),d[0]&16&&n!==(n=s[32][0])&&(t.__value=n,M(t,t.__value))},d(s){s&&P(t)}}}function Ge(e){let t,l,o,n;return{c(){t=p("a"),l=p("img"),n=D(),u(l,"class",We(e[29][1].toLocaleLowerCase())+" svelte-3ngsou"),He(l.src,o=e[29][0])||u(l,"src",o),u(l,"alt",e[29][1]),u(t,"href",e[29][2]),u(t,"target","_blank"),u(t,"class","svelte-3ngsou")},m(s,d){N(s,t,d),i(t,l),i(t,n)},p:H,d(s){s&&P(t)}}}function Pe(e){let t=e[23][1].fl.toLocaleLowerCase().includes(e[29][1].toLocaleLowerCase()),l,o=t&&Ge(e);return{c(){o&&o.c(),l=Xe()},m(n,s){o&&o.m(n,s),N(n,l,s)},p(n,s){s[0]&34&&(t=n[23][1].fl.toLocaleLowerCase().includes(n[29][1].toLocaleLowerCase())),t?o?o.p(n,s):(o=Ge(n),o.c(),o.m(l.parentNode,l)):o&&(o.d(1),o=null)},d(n){n&&P(l),o&&o.d(n)}}}function ht(e){let t,l,o=e[5][e[23][0]].type+"",n,s,d;return{c(){t=p("span"),l=G("("),n=G(o),s=G(")"),d=G(":"),u(t,"class","done svelte-3ngsou")},m(k,a){N(k,t,a),i(t,l),i(t,n),i(t,s),N(k,d,a)},p(k,a){a[0]&34&&o!==(o=k[5][k[23][0]].type+"")&&ne(n,o)},d(k){k&&(P(t),P(d))}}}function pt(e){let t,l=e[5][e[23][0]].type+"",o;return{c(){t=p("span"),o=G(l),u(t,"class","utk svelte-3ngsou")},m(n,s){N(n,t,s),i(t,o)},p(n,s){s[0]&34&&l!==(l=n[5][n[23][0]].type+"")&&ne(o,l)},d(n){n&&P(t)}}}function dt(e){let t,l=e[5][e[23][0]].type+"",o;return{c(){t=p("span"),o=G(l),u(t,"class","h svelte-3ngsou")},m(n,s){N(n,t,s),i(t,o)},p(n,s){s[0]&34&&l!==(l=n[5][n[23][0]].type+"")&&ne(o,l)},d(n){n&&P(t)}}}function mt(e){let t;return{c(){t=p("span"),t.textContent="ellenőrzés alatt...",u(t,"class","x svelte-3ngsou")},m(l,o){N(l,t,o)},p:H,d(l){l&&P(t)}}}function Ne(e){let t,l=e[26]+"",o,n;return{c(){t=p("a"),o=G(l),u(t,"target","_blank"),u(t,"href",n=e[4][e[26]]),u(t,"class","svelte-3ngsou")},m(s,d){N(s,t,d),i(t,o)},p(s,d){d[0]&34&&l!==(l=s[26]+"")&&ne(o,l),d[0]&50&&n!==(n=s[4][s[26]])&&u(t,"href",n)},d(s){s&&P(t)}}}function Be(e){let t,l,o,n,s,d=e[23][0]+"",k,a,m,_,b,L,v,T=Z(e[8]),y=[];for(let f=0;f<T.length;f+=1)y[f]=Pe(Ae(e,T,f));function K(f,S){return f[5][f[23][0]].type=="- Ellenőrzés alatt -"?mt:f[5][f[23][0]].type=="- Nincs beadva a CooSpace-en! -"?dt:f[5][f[23][0]].type=="- Feladat ütközés! -"?pt:ht}let C=K(e),E=C(e),B=Z(e[23][1].mo),w=[];for(let f=0;f<B.length;f+=1)w[f]=Ne(Oe(e,B,f));return{c(){t=p("tr"),l=p("td");for(let f=0;f<y.length;f+=1)y[f].c();o=D(),n=p("th"),s=p("a"),k=G(d),m=D(),_=p("td"),E.c(),b=D(),L=p("th");for(let f=0;f<w.length;f+=1)w[f].c();v=D(),u(l,"class","imgph svelte-3ngsou"),u(s,"target","_blank"),u(s,"href",a=e[23][1].fl),u(s,"class","svelte-3ngsou"),u(n,"class","svelte-3ngsou"),u(_,"class","svelte-3ngsou"),u(L,"class","svelte-3ngsou")},m(f,S){N(f,t,S),i(t,l);for(let h=0;h<y.length;h+=1)y[h]&&y[h].m(l,null);i(t,o),i(t,n),i(n,s),i(s,k),i(t,m),i(t,_),E.m(_,null),i(t,b),i(t,L);for(let h=0;h<w.length;h+=1)w[h]&&w[h].m(L,null);i(t,v)},p(f,S){if(S[0]&290){T=Z(f[8]);let h;for(h=0;h<T.length;h+=1){const V=Ae(f,T,h);y[h]?y[h].p(V,S):(y[h]=Pe(V),y[h].c(),y[h].m(l,null))}for(;h<y.length;h+=1)y[h].d(1);y.length=T.length}if(S[0]&34&&d!==(d=f[23][0]+"")&&ne(k,d),S[0]&34&&a!==(a=f[23][1].fl)&&u(s,"href",a),C===(C=K(f))&&E?E.p(f,S):(E.d(1),E=C(f),E&&(E.c(),E.m(_,null))),S[0]&50){B=Z(f[23][1].mo);let h;for(h=0;h<B.length;h+=1){const V=Oe(f,B,h);w[h]?w[h].p(V,S):(w[h]=Ne(V),w[h].c(),w[h].m(L,null))}for(;h<w.length;h+=1)w[h].d(1);w.length=B.length}},d(f){f&&P(t),oe(y,f),E.d(),oe(w,f)}}}function _t(e){let t,l,o,n,s,d,k,a,m,_,b,L,v,T,y,K,C,E,B,w,f,S,h,V=e[0].hallg&&e[0].feladat&&e[0].feladat_link&&Object.entries(e[5]).filter(e[9]).length==0,he,g,q,ge,ke,J,be,F,W,we,I,X,ye,ce,pe,ve,R=V&&Te(e),Y=Z(Object.entries(e[7])),O=[];for(let r=0;r<Y.length;r+=1)O[r]=Re(Me(e,Y,r));let $=Z(Object.entries(e[4]).sort(Fe)),A=[];for(let r=0;r<$.length;r+=1)A[r]=De(je(e,$,r));let x=Z(Object.entries(e[5]).filter(e[21]).sort(Ie)),j=[];for(let r=0;r<x.length;r+=1)j[r]=Be(Se(e,x,r));return{c(){t=p("main"),l=p("h1"),l.textContent="Beadott problema hozzáadása (foglalt lett....)",o=D(),n=p("table"),s=p("tr"),d=p("td"),k=p("table"),a=p("tr"),m=p("td"),_=p("input"),b=D(),L=p("td"),v=p("input"),T=D(),y=p("tr"),K=p("td"),C=p("input"),E=D(),B=p("tr"),w=p("td"),f=p("input"),S=D(),h=p("td"),R&&R.c(),he=D(),g=p("h1"),q=G("Leadott (elkelt) feladatok:"),ge=p("br"),ke=D(),J=p("input"),be=G(` - 
  `),F=p("select"),W=p("option"),W.textContent="Minden típus";for(let r=0;r<O.length;r+=1)O[r].c();we=D(),I=p("select"),X=p("option"),X.textContent="Minden hallgató";for(let r=0;r<A.length;r+=1)A[r].c();ye=D(),ce=p("table");for(let r=0;r<j.length;r+=1)j[r].c();u(l,"class","svelte-3ngsou"),u(_,"class","hallg svelte-3ngsou"),u(_,"type","text"),u(_,"placeholder","Hallgató neve"),u(m,"class","svelte-3ngsou"),u(v,"class","fel svelte-3ngsou"),u(v,"type","text"),u(v,"placeholder","Feladat címe"),u(L,"class","svelte-3ngsou"),u(C,"class","link svelte-3ngsou"),u(C,"type","text"),u(C,"placeholder","Feladat link"),u(K,"colspan","2"),u(K,"class","svelte-3ngsou"),u(f,"class","link svelte-3ngsou"),u(f,"type","text"),u(f,"placeholder","Hallhatói indexoldal link"),u(w,"colspan","2"),u(w,"class","svelte-3ngsou"),u(d,"class","svelte-3ngsou"),u(h,"class","button svelte-3ngsou"),u(J,"type","text"),u(J,"placeholder","Szűrés"),u(J,"class","svelte-3ngsou"),W.__value="-",M(W,W.__value),u(F,"class","svelte-3ngsou"),e[2]===void 0&&ae(()=>e[17].call(F)),X.__value="-",M(X,X.__value),u(I,"class","svelte-3ngsou"),e[3]===void 0&&ae(()=>e[19].call(I)),u(g,"class","svelte-3ngsou")},m(r,z){N(r,t,z),i(t,l),i(t,o),i(t,n),i(n,s),i(s,d),i(d,k),i(k,a),i(a,m),i(m,_),M(_,e[0].hallg),i(a,b),i(a,L),i(L,v),M(v,e[0].feladat),i(k,T),i(k,y),i(y,K),i(K,C),M(C,e[0].feladat_link),i(k,E),i(k,B),i(B,w),i(w,f),M(f,e[0].hallgato_link),i(s,S),i(s,h),R&&R.m(h,null),i(t,he),i(t,g),i(g,q),i(g,ge),i(g,ke),i(g,J),M(J,e[1]),i(g,be),i(g,F),i(F,W);for(let c=0;c<O.length;c+=1)O[c]&&O[c].m(F,null);ue(F,e[2],!0),i(g,we),i(g,I),i(I,X);for(let c=0;c<A.length;c+=1)A[c]&&A[c].m(I,null);ue(I,e[3],!0),i(t,ye),i(t,ce);for(let c=0;c<j.length;c+=1)j[c]&&j[c].m(ce,null);pe||(ve=[U(_,"input",e[10]),U(v,"input",e[11]),U(v,"input",e[12]),U(C,"input",e[13]),U(f,"input",e[14]),U(J,"input",e[16]),U(F,"change",e[17]),U(F,"change",e[18]),U(I,"change",e[19]),U(I,"change",e[20])],pe=!0)},p(r,z){if(z[0]&1&&_.value!==r[0].hallg&&M(_,r[0].hallg),z[0]&1&&v.value!==r[0].feladat&&M(v,r[0].feladat),z[0]&1&&C.value!==r[0].feladat_link&&M(C,r[0].feladat_link),z[0]&1&&f.value!==r[0].hallgato_link&&M(f,r[0].hallgato_link),z[0]&35&&(V=r[0].hallg&&r[0].feladat&&r[0].feladat_link&&Object.entries(r[5]).filter(r[9]).length==0),V?R?R.p(r,z):(R=Te(r),R.c(),R.m(h,null)):R&&(R.d(1),R=null),z[0]&2&&J.value!==r[1]&&M(J,r[1]),z[0]&128){Y=Z(Object.entries(r[7]));let c;for(c=0;c<Y.length;c+=1){const Q=Me(r,Y,c);O[c]?O[c].p(Q,z):(O[c]=Re(Q),O[c].c(),O[c].m(F,null))}for(;c<O.length;c+=1)O[c].d(1);O.length=Y.length}if(z[0]&132&&ue(F,r[2]),z[0]&16){$=Z(Object.entries(r[4]).sort(Fe));let c;for(c=0;c<$.length;c+=1){const Q=je(r,$,c);A[c]?A[c].p(Q,z):(A[c]=De(Q),A[c].c(),A[c].m(I,null))}for(;c<A.length;c+=1)A[c].d(1);A.length=$.length}if(z[0]&24&&ue(I,r[3]),z[0]&306){x=Z(Object.entries(r[5]).filter(r[21]).sort(Ie));let c;for(c=0;c<x.length;c+=1){const Q=Se(r,x,c);j[c]?j[c].p(Q,z):(j[c]=Be(Q),j[c].c(),j[c].m(ce,null))}for(;c<j.length;c+=1)j[c].d(1);j.length=x.length}},i:H,o:H,d(r){r&&P(t),R&&R.d(),oe(O,r),oe(A,r),oe(j,r),pe=!1,ie(ve)}}}const Fe=(e,t)=>(e=e[0].toUpperCase(),t=t[0].toUpperCase(),e[0]=="Á"?-1:e==t?0:e<t?-1:1),Ie=(e,t)=>e[1].type==t[1].type?0:e[1].type<t[1].type?-1:1;function gt(e,t,l){var o=[],n={hallg:"",feladat:"",feladat_link:""},s="",d,k;const a={x:"- Ellenőrzés alatt -",a:"Keresés, rendezés",b:"Rekurzzióval megoldható feladatok",c:"Dinamikus programozással megoldható feladat",d:"Fa- és gráfalgoritmusos feladatok",e:"SPOJ/OKTV",h:"- Nincs beadva a CooSpace-en! -",u:"- Feladat ütközés! -"},m={"Marschall Gábor":"https://github.com/CaTwoPlus/alga_I","Rafael Anita Ilona":"https://r-anita.github.io/Alga/","Dr. Nébl Anita":"https://nebl-annamaria.github.io/","Béleczki Ádám":"https://github.com/Adee81/Algoritmusok/tree/main/04_Fak_Grafok","Ádám Róbert Gábor":"https://adamrobert77.github.io/L_Algoritmusok_es_adatszerkezetek_I/","Temesvári Ráhel Anna":"https://rahelanna.github.io/Algoritmusok-es-adatszerkezetek/","Vígh-Mácsai Zsanett":"https://vigzs.github.io/Algoritmusok--s-adatszerkezetek-beadand-/","Dékány Tamás":"https://github.com/dekany01/Algoritmusok","Gyenes Lídia":"https://github.com/Lydiagyenes/alga","dr. Báthori Endre":"https://github.com/bathoriendre/algoritmusok/blob/main/TaskAndDeadlines.md","Kezes Rudolf Sámson":"https://github.com/Zorahk/alga_hazik","Urbán Ákos":"https://github.com/akosh25/algoritmusok","Sámfira Gábor":"https://github.com/Infinity42o/L-Algoritmusok-s-adatszerkezetek"};var _;const b={"Red John is Back":{type:a.c,fl:"https://www.hackerrank.com/challenges/red-john-is-back/problem",mo:["Marschall Gábor"]},"Breadth First Search: Shortest Reach":{type:a.d,fl:"https://www.hackerrank.com/challenges/bfsshortreach/problem",mo:["Ádám Róbert Gábor"]},"Max Min":{type:a.a,fl:"https://www.hackerrank.com/challenges/angry-children/problem",mo:["Dékány Tamás"]},"Fibonacci Modified":{type:a.a,fl:"https://www.hackerrank.com/challenges/fibonacci-modified/problem",mo:["Dékány Tamás"]},"Lego Blocks":{type:a.c,fl:"https://www.hackerrank.com/challenges/lego-blocks/problem",mo:["Dékány Tamás"]},Pairs:{type:a.a,fl:"https://www.hackerrank.com/challenges/pairs/problem",mo:["Rafael Anita Ilona"]},Apartments:{type:a.a,fl:"https://cses.fi/problemset/task/1084",mo:["Dr. Nébl Anita"]},"KnightL on a Chessboard":{type:a.a,fl:"https://www.hackerrank.com/challenges/knightl-on-chessboard/problem?isFullScreen=false",mo:["Béleczki Ádám"]},"Greedy Florist":{type:a.a,fl:"https://www.hackerrank.com/challenges/greedy-florist/problem",mo:["Ádám Róbert Gábor"]},"Password Cracker":{type:a.b,fl:"https://www.hackerrank.com/challenges/password-cracker/problem",mo:["Ádám Róbert Gábor"]},"Minimum Loss":{type:a.a,fl:"https://www.hackerrank.com/challenges/minimum-loss/problem",mo:["Temesvári Ráhel Anna"]},"The Coin Change Problem":{type:a.c,fl:"https://www.hackerrank.com/challenges/coin-change/problem",mo:["Temesvári Ráhel Anna"]},"Journey to the Moon":{type:a.d,fl:"https://www.hackerrank.com/challenges/journey-to-the-moon/problem",mo:["Temesvári Ráhel Anna"]},Családfa:{type:a.d,fl:"https://mester.inf.elte.hu:8181/faces/leiras.xhtml?jfwid=e14b800137b830f1fcf95ed69687:196",mo:["Vígh-Mácsai Zsanett"]},"Dice Combinations":{type:a.c,fl:"https://cses.fi/problemset/task/1633",mo:["Vígh-Mácsai Zsanett"]},"CODEM4 - Problem4":{type:a.b,fl:"https://www.spoj.com/problems/CODEM4/cstart=20",mo:["Vígh-Mácsai Zsanett"]},"Distinct Numbers":{type:a.a,fl:"https://cses.fi/problemset/task/1621",mo:["Vígh-Mácsai Zsanett"]},"Ice Cream Parlor":{type:a.a,fl:"https://www.hackerrank.com/challenges/icecream-parlor/problem",mo:["Gyenes Lídia"]},"Recursive Digit Sum":{type:a.b,fl:"https://www.hackerrank.com/challenges/recursive-digit-sum/problem",mo:["Dékány Tamás"]},"Mail Delivery":{type:a.d,fl:"https://cses.fi/problemset/task/1691",mo:["dr. Báthori Endre"]},"Edit Distance":{type:a.c,fl:"https://cses.fi/problemset/task/1639",mo:["dr. Báthori Endre"]},"Tree Traversals":{type:a.b,fl:"https://cses.fi/problemset/task/1702",mo:["dr. Báthori Endre"]},"Tasks and Deadlines":{type:a.a,fl:"https://cses.fi/problemset/task/1630",mo:["dr. Báthori Endre"]},Towers:{type:a.a,fl:"https://cses.fi/problemset/task/1073",mo:["Kezes Rudolf Sámson"]},"The Power Sum":{type:a.b,fl:"https://www.hackerrank.com/challenges/the-power-sum/problem",mo:["Kezes Rudolf Sámson"]},"Gridland Metro":{type:a.a,fl:"https://www.hackerrank.com/challenges/gridland-metro/problem",mo:["Sámfira Gábor"]},"Crossword Puzzle":{type:a.b,fl:"https://www.hackerrank.com/challenges/crossword-puzzle/problem",mo:["Sámfira Gábor"]},"Sherlock and Cost":{type:a.c,fl:"https://www.hackerrank.com/challenges/sherlock-and-cost/problem",mo:["Sámfira Gábor"]},"Even Tree":{type:a.d,fl:"https://www.hackerrank.com/challenges/even-tree/problem",mo:["Sámfira Gábor"]},"Lily's Homework":{type:a.a,fl:"https://www.hackerrank.com/challenges/lilys-homework/problem",mo:["Urbán Ákos"]},"Stone Division":{type:a.b,fl:"https://www.hackerrank.com/challenges/lilys-homework/problem",mo:["Urbán Ákos"]},"Roads and Libraries":{type:a.c,fl:"https://www.hackerrank.com/challenges/stockmax/problem",mo:["Urbán Ákos"]},"Stock Maximize":{type:a.d,fl:"https://www.hackerrank.com/challenges/torque-and-development/problem",mo:["Urbán Ákos"]}};_=b;const L=[["https://cses.fi/logo.png?1","CSES","https://cses.fi/problemset/"],["https://hrcdn.net/fcore/assets/brand/logo-new-white-green-a5cb16e0ae.svg","hackerrank","https://www.hackerrank.com/"],["https://stx1.spoj.com/gfx/2015e.png","spoj","https://www.spoj.com/"],["./mester.png","mester","https://mester.inf.elte.hu/"]];xe(async()=>{o=await(await fetch("https://szte.eu/p1.php")).json(),o.forEach(q=>{l(6,b[q.feladat]={type:a[q.type]||"- Ellenőrzés alatt -",fl:q.feladat_link,mo:[q.hallgato]},b),l(4,m[q.hallgato]=q.hallgato_link,m)}),l(5,_=b)});const v=g=>g[0].toLowerCase().includes(s.toLowerCase());function T(){n.hallg=this.value,l(0,n)}function y(){n.feladat=this.value,l(0,n)}const K=()=>{l(1,s=n.feladat)};function C(){n.feladat_link=this.value,l(0,n)}function E(){n.hallgato_link=this.value,l(0,n)}const B=async()=>{let g=await fetch("https://szte.eu/p2.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});g=await g.json(),g.success&&(l(6,b[n.feladat]={type:a[n.type]||"- Ellenőrzés alatt -",fl:n.feladat_link,mo:[n.hallg]},b),l(4,m[n.hallgato]=n.hallgato_link,m),l(0,n.feladat="",n),l(0,n.feladat_link="",n),l(5,_=b))};function w(){s=this.value,l(1,s)}function f(){d=Ce(this),l(2,d),l(7,a)}const S=()=>{if(d==="-"){l(5,_=b);return}l(5,_={}),Object.entries(b).filter(g=>g[1].type==a[d]).forEach(g=>l(5,_[g[0]]=g[1],_)),l(3,k="-")};function h(){k=Ce(this),l(3,k),l(4,m)}return[n,s,d,k,m,_,b,a,L,v,T,y,K,C,E,B,w,f,S,h,()=>{if(k==="-"){l(5,_=b);return}l(5,_={}),Object.entries(b).filter(g=>g[1].mo.includes(k)).forEach(g=>l(5,_[g[0]]=g[1],_)),l(2,d="-")},g=>g[0].toLowerCase().includes(s.toLowerCase())]}class kt extends ft{constructor(t){super(),ct(this,t,gt,_t,Je,{},null,[-1,-1])}}new kt({target:document.getElementById("app")});
