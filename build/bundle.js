var app=function(){"use strict";function e(){}function t(e,t){for(const s in t)e[s]=t[s];return e}function s(e){return e()}function n(){return Object.create(null)}function l(e){e.forEach(s)}function a(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function r(t,...s){if(null==t)return e;const n=t.subscribe(...s);return n.unsubscribe?()=>n.unsubscribe():n}function c(e,t,s){e.$$.on_destroy.push(r(t,s))}function i(e,t,s,n){if(e){const l=f(e,t,s,n);return e[0](l)}}function f(e,s,n,l){return e[1]&&l?t(n.ctx.slice(),e[1](l(s))):n.ctx}function u(e,t,s,n,l,a,o){const r=function(e,t,s,n){if(e[2]&&n){const l=e[2](n(s));if(void 0===t.dirty)return l;if("object"==typeof l){const e=[],s=Math.max(t.dirty.length,l.length);for(let n=0;n<s;n+=1)e[n]=t.dirty[n]|l[n];return e}return t.dirty|l}return t.dirty}(t,n,l,a);if(r){const l=f(t,s,n,o);e.p(l,r)}}function d(e){const t={};for(const s in e)"$"!==s[0]&&(t[s]=e[s]);return t}function p(e,t){e.appendChild(t)}function b(e,t,s){e.insertBefore(t,s||null)}function v(e){e.parentNode.removeChild(e)}function h(e){return document.createElement(e)}function $(e){return document.createTextNode(e)}function m(){return $(" ")}function g(){return $("")}function x(e,t,s){null==s?e.removeAttribute(t):e.getAttribute(t)!==s&&e.setAttribute(t,s)}let y;function w(e){y=e}function k(){if(!y)throw new Error("Function called outside component initialization");return y}function L(e,t){k().$$.context.set(e,t)}function T(e){return k().$$.context.get(e)}const S=[],C=[],M=[],A=[],R=Promise.resolve();let _=!1;function B(e){M.push(e)}let E=!1;const O=new Set;function P(){if(!E){E=!0;do{for(let e=0;e<S.length;e+=1){const t=S[e];w(t),N(t.$$)}for(S.length=0;C.length;)C.pop()();for(let e=0;e<M.length;e+=1){const t=M[e];O.has(t)||(O.add(t),t())}M.length=0}while(S.length);for(;A.length;)A.pop()();_=!1,E=!1,O.clear()}}function N(e){if(null!==e.fragment){e.update(),l(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(B)}}const H=new Set;let D;function I(){D={r:0,c:[],p:D}}function F(){D.r||l(D.c),D=D.p}function U(e,t){e&&e.i&&(H.delete(e),e.i(t))}function W(e,t,s,n){if(e&&e.o){if(H.has(e))return;H.add(e),D.c.push(()=>{H.delete(e),n&&(s&&e.d(1),n())}),e.o(t)}}function j(e){return"object"==typeof e&&null!==e?e:{}}function Y(e){e&&e.c()}function z(e,t,n){const{fragment:o,on_mount:r,on_destroy:c,after_update:i}=e.$$;o&&o.m(t,n),B(()=>{const t=r.map(s).filter(a);c?c.push(...t):l(t),e.$$.on_mount=[]}),i.forEach(B)}function q(e,t){const s=e.$$;null!==s.fragment&&(l(s.on_destroy),s.fragment&&s.fragment.d(t),s.on_destroy=s.fragment=null,s.ctx=[])}function V(e,t){-1===e.$$.dirty[0]&&(S.push(e),_||(_=!0,R.then(P)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function G(t,s,a,o,r,c,i=[-1]){const f=y;w(t);const u=s.props||{},d=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:r,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:i,skip_bound:!1};let p=!1;if(d.ctx=a?a(t,u,(e,s,...n)=>{const l=n.length?n[0]:s;return d.ctx&&r(d.ctx[e],d.ctx[e]=l)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](l),p&&V(t,e)),s}):[],d.update(),p=!0,l(d.before_update),d.fragment=!!o&&o(d.ctx),s.target){if(s.hydrate){const e=function(e){return Array.from(e.childNodes)}(s.target);d.fragment&&d.fragment.l(e),e.forEach(v)}else d.fragment&&d.fragment.c();s.intro&&U(t.$$.fragment),z(t,s.target,s.anchor),P()}w(f)}class K{$destroy(){q(this,1),this.$destroy=e}$on(e,t){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(t),()=>{const e=s.indexOf(t);-1!==e&&s.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const J=[];function Q(t,s=e){let n;const l=[];function a(e){if(o(t,e)&&(t=e,n)){const e=!J.length;for(let e=0;e<l.length;e+=1){const s=l[e];s[1](),J.push(s,t)}if(e){for(let e=0;e<J.length;e+=2)J[e][0](J[e+1]);J.length=0}}}return{set:a,update:function(e){a(e(t))},subscribe:function(o,r=e){const c=[o,r];return l.push(c),1===l.length&&(n=s(a)||e),o(t),()=>{const e=l.indexOf(c);-1!==e&&l.splice(e,1),0===l.length&&(n(),n=null)}}}}function X(t,s,n){const o=!Array.isArray(t),c=o?[t]:t,i=s.length<2;return{subscribe:Q(n,t=>{let n=!1;const f=[];let u=0,d=e;const p=()=>{if(u)return;d();const n=s(o?f[0]:f,t);i?t(n):d=a(n)?n:e},b=c.map((e,t)=>r(e,e=>{f[t]=e,u&=~(1<<t),n&&p()},()=>{u|=1<<t}));return n=!0,p(),function(){l(b),d()}}).subscribe}}const Z={},ee={};function te(e){return{...e.location,state:e.history.state,key:e.history.state&&e.history.state.key||"initial"}}const se=function(e,t){const s=[];let n=te(e);return{get location(){return n},listen(t){s.push(t);const l=()=>{n=te(e),t({location:n,action:"POP"})};return e.addEventListener("popstate",l),()=>{e.removeEventListener("popstate",l);const n=s.indexOf(t);s.splice(n,1)}},navigate(t,{state:l,replace:a=!1}={}){l={...l,key:Date.now()+""};try{a?e.history.replaceState(l,null,t):e.history.pushState(l,null,t)}catch(s){e.location[a?"replace":"assign"](t)}n=te(e),s.forEach(e=>e({location:n,action:"PUSH"}))}}}(Boolean("undefined"!=typeof window&&window.document&&window.document.createElement)?window:function(e="/"){let t=0;const s=[{pathname:e,search:""}],n=[];return{get location(){return s[t]},addEventListener(e,t){},removeEventListener(e,t){},history:{get entries(){return s},get index(){return t},get state(){return n[t]},pushState(e,l,a){const[o,r=""]=a.split("?");t++,s.push({pathname:o,search:r}),n.push(e)},replaceState(e,l,a){const[o,r=""]=a.split("?");s[t]={pathname:o,search:r},n[t]=e}}}}()),ne=/^:(.+)/;function le(e){return"*"===e[0]}function ae(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function oe(e){return e.replace(/(^\/+|\/+$)/g,"")}function re(e,t){return{route:e,score:e.default?0:ae(e.path).reduce((e,t)=>(e+=4,!function(e){return""===e}(t)?!function(e){return ne.test(e)}(t)?le(t)?e-=5:e+=3:e+=2:e+=1,e),0),index:t}}function ce(e,t){let s,n;const[l]=t.split("?"),a=ae(l),o=""===a[0],r=function(e){return e.map(re).sort((e,t)=>e.score<t.score?1:e.score>t.score?-1:e.index-t.index)}(e);for(let e=0,l=r.length;e<l;e++){const l=r[e].route;let c=!1;if(l.default){n={route:l,params:{},uri:t};continue}const i=ae(l.path),f={},u=Math.max(a.length,i.length);let d=0;for(;d<u;d++){const e=i[d],t=a[d];if(void 0!==e&&le(e)){f["*"===e?"*":e.slice(1)]=a.slice(d).map(decodeURIComponent).join("/");break}if(void 0===t){c=!0;break}let s=ne.exec(e);if(s&&!o){const e=decodeURIComponent(t);f[s[1]]=e}else if(e!==t){c=!0;break}}if(!c){s={route:l,params:f,uri:"/"+a.slice(0,d).join("/")};break}}return s||n||null}function ie(e,t){return oe("/"===t?e:`${oe(e)}/${oe(t)}`)+"/"}function fe(e){let t;const s=e[6].default,n=i(s,e,e[5],null);return{c(){n&&n.c()},m(e,s){n&&n.m(e,s),t=!0},p(e,[t]){n&&n.p&&32&t&&u(n,s,e,e[5],t,null,null)},i(e){t||(U(n,e),t=!0)},o(e){W(n,e),t=!1},d(e){n&&n.d(e)}}}function ue(e,t,s){let n,l,a,{basepath:o="/"}=t,{url:r=null}=t;const i=T(Z),f=T(ee),u=Q([]);c(e,u,e=>s(10,a=e));const d=Q(null);let p=!1;const b=i||Q(r?{pathname:r}:se.location);c(e,b,e=>s(9,l=e));const v=f?f.routerBase:Q({path:o,uri:o});c(e,v,e=>s(8,n=e));const h=X([v,d],([e,t])=>{if(null===t)return e;const{path:s}=e,{route:n,uri:l}=t;return{path:n.default?s:n.path.replace(/\*.*$/,""),uri:l}});var $;i||($=()=>se.listen(e=>{b.set(e.location)}),k().$$.on_mount.push($),L(Z,b)),L(ee,{activeRoute:d,base:v,routerBase:h,registerRoute:function(e){const{path:t}=n;let{path:s}=e;if(e._path=s,e.path=ie(t,s),"undefined"==typeof window){if(p)return;const t=function(e,t){return ce([e],t)}(e,l.pathname);t&&(d.set(t),p=!0)}else u.update(t=>(t.push(e),t))},unregisterRoute:function(e){u.update(t=>{const s=t.indexOf(e);return t.splice(s,1),t})}});let{$$slots:m={},$$scope:g}=t;return e.$$set=e=>{"basepath"in e&&s(3,o=e.basepath),"url"in e&&s(4,r=e.url),"$$scope"in e&&s(5,g=e.$$scope)},e.$$.update=()=>{if(256&e.$$.dirty){const{path:e}=n;u.update(t=>(t.forEach(t=>t.path=ie(e,t._path)),t))}if(1536&e.$$.dirty){const e=ce(a,l.pathname);d.set(e)}},[u,b,v,o,r,g,m]}class de extends K{constructor(e){super(),G(this,e,ue,fe,o,{basepath:3,url:4})}}const pe=e=>({params:2&e,location:16&e}),be=e=>({params:e[1],location:e[4]});function ve(e){let t,s,n,l;const a=[$e,he],o=[];function r(e,t){return null!==e[0]?0:1}return t=r(e),s=o[t]=a[t](e),{c(){s.c(),n=g()},m(e,s){o[t].m(e,s),b(e,n,s),l=!0},p(e,l){let c=t;t=r(e),t===c?o[t].p(e,l):(I(),W(o[c],1,1,()=>{o[c]=null}),F(),s=o[t],s||(s=o[t]=a[t](e),s.c()),U(s,1),s.m(n.parentNode,n))},i(e){l||(U(s),l=!0)},o(e){W(s),l=!1},d(e){o[t].d(e),e&&v(n)}}}function he(e){let t;const s=e[10].default,n=i(s,e,e[9],be);return{c(){n&&n.c()},m(e,s){n&&n.m(e,s),t=!0},p(e,t){n&&n.p&&530&t&&u(n,s,e,e[9],t,pe,be)},i(e){t||(U(n,e),t=!0)},o(e){W(n,e),t=!1},d(e){n&&n.d(e)}}}function $e(e){let s,n,l;const a=[{location:e[4]},e[1],e[2]];var o=e[0];function r(e){let s={};for(let e=0;e<a.length;e+=1)s=t(s,a[e]);return{props:s}}return o&&(s=new o(r())),{c(){s&&Y(s.$$.fragment),n=g()},m(e,t){s&&z(s,e,t),b(e,n,t),l=!0},p(e,t){const l=22&t?function(e,t){const s={},n={},l={$$scope:1};let a=e.length;for(;a--;){const o=e[a],r=t[a];if(r){for(const e in o)e in r||(n[e]=1);for(const e in r)l[e]||(s[e]=r[e],l[e]=1);e[a]=r}else for(const e in o)l[e]=1}for(const e in n)e in s||(s[e]=void 0);return s}(a,[16&t&&{location:e[4]},2&t&&j(e[1]),4&t&&j(e[2])]):{};if(o!==(o=e[0])){if(s){I();const e=s;W(e.$$.fragment,1,0,()=>{q(e,1)}),F()}o?(s=new o(r()),Y(s.$$.fragment),U(s.$$.fragment,1),z(s,n.parentNode,n)):s=null}else o&&s.$set(l)},i(e){l||(s&&U(s.$$.fragment,e),l=!0)},o(e){s&&W(s.$$.fragment,e),l=!1},d(e){e&&v(n),s&&q(s,e)}}}function me(e){let t,s,n=null!==e[3]&&e[3].route===e[7]&&ve(e);return{c(){n&&n.c(),t=g()},m(e,l){n&&n.m(e,l),b(e,t,l),s=!0},p(e,[s]){null!==e[3]&&e[3].route===e[7]?n?(n.p(e,s),8&s&&U(n,1)):(n=ve(e),n.c(),U(n,1),n.m(t.parentNode,t)):n&&(I(),W(n,1,1,()=>{n=null}),F())},i(e){s||(U(n),s=!0)},o(e){W(n),s=!1},d(e){n&&n.d(e),e&&v(t)}}}function ge(e,s,n){let l,a,{path:o=""}=s,{component:r=null}=s;const{registerRoute:i,unregisterRoute:f,activeRoute:u}=T(ee);c(e,u,e=>n(3,l=e));const p=T(Z);c(e,p,e=>n(4,a=e));const b={path:o,default:""===o};let v={},h={};var $;i(b),"undefined"!=typeof window&&($=()=>{f(b)},k().$$.on_destroy.push($));let{$$slots:m={},$$scope:g}=s;return e.$$set=e=>{n(13,s=t(t({},s),d(e))),"path"in e&&n(8,o=e.path),"component"in e&&n(0,r=e.component),"$$scope"in e&&n(9,g=e.$$scope)},e.$$.update=()=>{8&e.$$.dirty&&l&&l.route===b&&n(1,v=l.params);{const{path:e,component:t,...l}=s;n(2,h=l)}},s=d(s),[r,v,h,l,a,u,p,b,o,g,m]}class xe extends K{constructor(e){super(),G(this,e,ge,me,o,{path:8,component:0})}}function ye(t){let s;return{c(){s=h("footer"),s.innerHTML='<aside class="svelte-1b1vl8l">© Georgian College Web Project Studio 2023\n        <br>\n        Team Marshmallow</aside> \n        <div class="svelte-1b1vl8l"><p class="svelte-1b1vl8l">Partners</p> \n            <div class="svelte-1b1vl8l"><img src="./images/CountyOfSimcoeLogo.png" class="svelte-1b1vl8l"></div> \n            <div class="svelte-1b1vl8l"><img src="./images/CCIS_Logo_Vertical.webp" class="svelte-1b1vl8l"></div></div>',x(s,"class","svelte-1b1vl8l")},m(e,t){b(e,s,t)},p:e,i:e,o:e,d(e){e&&v(s)}}}class we extends K{constructor(e){super(),G(this,e,null,ye,o,{})}}function ke(e,t,s){const n=e.slice();return n[2]=t[s],n}function Le(e){let t,s,n,l,a=e[2].linkText+"";return{c(){t=h("li"),s=h("a"),n=$(a),x(s,"href",l=e[2].href),x(t,"class","svelte-yw8770")},m(e,l){b(e,t,l),p(t,s),p(s,n)},p(e,t){1&t&&a!==(a=e[2].linkText+"")&&function(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}(n,a),1&t&&l!==(l=e[2].href)&&x(s,"href",l)},d(e){e&&v(t)}}}function Te(t){let s,n,l,a,o,r=t[0],c=[];for(let e=0;e<r.length;e+=1)c[e]=Le(ke(t,r,e));return{c(){s=h("header"),n=h("a"),n.innerHTML='<img src="./images/logo.png" class="svelte-yw8770">',l=m(),a=h("nav"),o=h("ul");for(let e=0;e<c.length;e+=1)c[e].c();x(n,"href","/"),x(n,"class","svelte-yw8770"),x(o,"class","svelte-yw8770"),x(a,"class","svelte-yw8770"),x(s,"class","svelte-yw8770")},m(e,t){b(e,s,t),p(s,n),p(s,l),p(s,a),p(a,o);for(let e=0;e<c.length;e+=1)c[e].m(o,null)},p(e,[t]){if(1&t){let s;for(r=e[0],s=0;s<r.length;s+=1){const n=ke(e,r,s);c[s]?c[s].p(n,t):(c[s]=Le(n),c[s].c(),c[s].m(o,null))}for(;s<c.length;s+=1)c[s].d(1);c.length=r.length}},i:e,o:e,d(e){e&&v(s),function(e,t){for(let s=0;s<e.length;s+=1)e[s]&&e[s].d(t)}(c,e)}}}function Se(e,t,s){let{title:n="Landing Page"}=t,{navList:l=[{href:"/login",linkText:"Log In"}]}=t;return e.$$set=e=>{"title"in e&&s(1,n=e.title),"navList"in e&&s(0,l=e.navList)},e.$$.update=()=>{2&e.$$.dirty&&(document.title=n)},[l,n]}class Ce extends K{constructor(e){super(),G(this,e,Se,Te,o,{title:1,navList:0})}}function Me(t){let s;return{c(){s=h("main"),s.innerHTML='<h1 class="svelte-1aq9xkd"><span class="svelte-1aq9xkd">Welcome to</span><br>the Affordable Housing Community Lab&#39;s<br><p class="svelte-1aq9xkd">Online Tool.</p></h1> \n    <h3 class="svelte-1aq9xkd">If you&#39;re a community member looking for renal listings information you can view the public reports <a href="#">here</a>.</h3>',x(s,"class","container")},m(e,t){b(e,s,t)},p:e,i:e,o:e,d(e){e&&v(s)}}}class Ae extends K{constructor(e){super(),G(this,e,null,Me,o,{})}}function Re(t){let s;return{c(){s=h("main"),s.innerHTML='<section class="container svelte-1hyduar"><form class="svelte-1hyduar"><label for="username" class="svelte-1hyduar">Username:</label> \n            <input type="text" id="username" class="svelte-1hyduar"> \n            <label for="password" class="svelte-1hyduar">password:</label> \n            <input type="text" id="password" class="svelte-1hyduar"> \n            <a href="rentalData" class="svelte-1hyduar">Log In</a></form> \n        <a href="forgotPassword" class="svelte-1hyduar">Forgot Password</a></section>',x(s,"class","svelte-1hyduar")},m(e,t){b(e,s,t)},p:e,i:e,o:e,d(e){e&&v(s)}}}class _e extends K{constructor(e){super(),G(this,e,null,Re,o,{})}}function Be(t){let s;return{c(){s=h("main"),s.innerHTML='<div class="svelte-16xosfb"><li class="svelte-16xosfb">Barrie</li> \n            <li class="c2r1 svelte-16xosfb"><p class="svelte-16xosfb">37</p> \n                <p class="svelte-16xosfb">($1978.34)</p></li> \n            <li class="c3r1 svelte-16xosfb"><p class="svelte-16xosfb">66</p> \n                <p class="svelte-16xosfb">($1978.34)</p></li> \n            <li class="c4r1 svelte-16xosfb"><p class="svelte-16xosfb">73</p> \n                <p class="svelte-16xosfb">($1978.34)</p></li> \n            <li class="c5r1 svelte-16xosfb"><p class="svelte-16xosfb">22</p> \n                <p class="svelte-16xosfb">($1978.34)</p></li> \n            <li class="svelte-16xosfb">Collingwood</li> \n            <li class="c2r2 svelte-16xosfb"><p class="svelte-16xosfb">22</p> \n                <p class="svelte-16xosfb">($1978.34)</p></li> \n            <li class="c3r2 svelte-16xosfb"><p class="svelte-16xosfb">18</p> \n                <p class="svelte-16xosfb">($1978.34)</p></li> \n            <li class="c4r2 svelte-16xosfb"><p class="svelte-16xosfb">32</p> \n                <p class="svelte-16xosfb">($1978.34)</p></li> \n            <li class="c5r2 svelte-16xosfb"><p class="svelte-16xosfb">37</p> \n                <p class="svelte-16xosfb">($1978.34)</p></li> \n            <li class="svelte-16xosfb">Midland</li> \n            <li class="c2r3 svelte-16xosfb"><p class="svelte-16xosfb">12</p> \n                <p class="svelte-16xosfb">($1978.34)</p></li> \n            <li class="c3r3 svelte-16xosfb"><p class="svelte-16xosfb">21</p> \n                <p class="svelte-16xosfb">($1978.34)</p></li> \n            <li class="c4r3 svelte-16xosfb"><p class="svelte-16xosfb">17</p> \n                <p class="svelte-16xosfb">($1978.34)</p></li> \n            <li class="c5r3 svelte-16xosfb"><p class="svelte-16xosfb">33</p> \n                <p class="svelte-16xosfb">($1978.34)</p></li> \n            <li class="svelte-16xosfb">Orillia</li> \n            <li class="c2r4 svelte-16xosfb"><p class="svelte-16xosfb">33</p> \n                <p class="svelte-16xosfb">($1978.34)</p></li> \n            <li class="c3r4 svelte-16xosfb"><p class="svelte-16xosfb">41</p> \n                <p class="svelte-16xosfb">($1978.34)</p></li> \n            <li class="c4r4 svelte-16xosfb"><p class="svelte-16xosfb">28</p> \n                <p class="svelte-16xosfb">($1978.34)</p></li> \n            <li class="c5r4 svelte-16xosfb"><p class="svelte-16xosfb">45</p> \n                <p class="svelte-16xosfb">($1978.34)</p></li> \n            <li class="svelte-16xosfb">Alliston</li> \n            <li class="c2r5 svelte-16xosfb"><p class="svelte-16xosfb">26</p> \n                <p class="svelte-16xosfb">($1978.34)</p></li> \n            <li class="c3r5 svelte-16xosfb"><p class="svelte-16xosfb">13</p> \n                <p class="svelte-16xosfb">($1978.34)</p></li> \n            <li class="c4r5 svelte-16xosfb"><p class="svelte-16xosfb">7</p> \n                <p class="svelte-16xosfb">($1978.34)</p></li> \n            <li class="c5r5 svelte-16xosfb"><p class="svelte-16xosfb">23</p> \n                <p class="svelte-16xosfb">($1978.34)</p></li> \n            <li class="filter black svelte-16xosfb"><div class="offWhite border3pxblack svelte-16xosfb"><div><label for="areaCheck" class="svelte-16xosfb">Area</label> \n                        <input name="areaFilter" id="areaCheck" type="radio"></div> \n                    <div><label for="municipalityCheck" class="svelte-16xosfb">Municipality</label> \n                        <input name="areaFilter" id="municipalityCheck" type="radio"></div></div> \n                <div class="offWhite border2pxblack svelte-16xosfb"><div><label for="typeCheck" class="svelte-16xosfb">Housing Type</label> \n                        <input name="typeFilter" id="typeCheck" type="radio"></div> \n                    <div><label for="sizeCheck" class="svelte-16xosfb">Unit Size</label> \n                        <input name="typeFilter" id="sizeCheck" type="radio"></div></div></li> \n            <li class="vertical svelte-16xosfb">Apartment</li> \n            <li class="vertical svelte-16xosfb">Attached SDF</li> \n            <li class="vertical svelte-16xosfb">Detached SDF</li> \n            <li class="vertical svelte-16xosfb">Shared</li></div> \n        <aside class="svelte-16xosfb"><h2 class="svelte-16xosfb">Filter By</h2> \n            <div class="svelte-16xosfb"><span id="noUnits" class="svelte-16xosfb">Number Of Units</span> \n                <label id="slider" class="switch svelte-16xosfb"><input type="checkbox" class="svelte-16xosfb"> \n                    <span class="slider round svelte-16xosfb"></span></label> \n                <span id="avgRent" class="svelte-16xosfb">Average Rent</span></div></aside>',x(s,"class","container svelte-16xosfb")},m(e,t){b(e,s,t)},p:e,i:e,o:e,d(e){e&&v(s)}}}class Ee extends K{constructor(e){super(),G(this,e,null,Be,o,{})}}function Oe(t){let s;return{c(){s=h("main"),s.innerHTML='<main><section class="buttonSection svelte-1bf29te"><button id="openModal" class="svelte-1bf29te">  ≡ filter </button> \n            <section id="modalArea" class="modalArea svelte-1bf29te"><div id="modalBg" class="modalBg svelte-1bf29te"></div> \n              <div class="modalWrapper svelte-1bf29te"><div class="modalContents svelte-1bf29te"><h1 class="svelte-1bf29te">Filter</h1> \n                    <h2 class="svelte-1bf29te">City/Town</h2> \n                    <button class="cityTown svelte-1bf29te" type="button">Alliston/Bradford</button> \n                    <button class="cityTown svelte-1bf29te" type="button">Barrie</button> \n                    <button class="cityTown svelte-1bf29te" type="button">Collingwood</button> \n                    <button class="cityTown svelte-1bf29te" type="button">Midland</button> \n                    <button class="cityTown svelte-1bf29te" type="button">Orillia</button> \n                    <h2 class="priceRange svelte-1bf29te">Price Range</h2> \n                    <div class="price svelte-1bf29te"><div class="minPrice svelte-1bf29te"><label for="minprice">Min Price: </label> \n                            <input type="text" id="minprice" size="15" value="$ " class="svelte-1bf29te"></div> \n                        <span class="svelte-1bf29te">-</span> \n                        <div class="maxPrice svelte-1bf29te"><label for="maxprice">Max Price: </label> \n                            <input type="text" id="maxprice" size="15" value="$ " class="svelte-1bf29te"></div></div> \n                    <h2 class="housingType svelte-1bf29te">Housing Type</h2> \n                    <button class="housing-tp-buttton svelte-1bf29te" type="button"><i class="fa-solid fa-house svelte-1bf29te"></i>detached</button> \n                    <button class="housing-tp-buttton svelte-1bf29te" type="button"><i class="fa-solid fa-city svelte-1bf29te"></i>attached</button> \n                    <button class="housing-tp-buttton svelte-1bf29te" type="button"><i class="fa-solid fa-house-chimney svelte-1bf29te"></i>house</button> \n                    <button class="housing-tp-buttton svelte-1bf29te" type="button"><i class="fa-solid fa-building svelte-1bf29te"></i>apartment</button> \n                    <button class="housing-tp-buttton svelte-1bf29te" type="button"><i class="fa-solid fa-stairs svelte-1bf29te"></i>basement</button> \n                    <h2 class="numberOfBedrooms svelte-1bf29te">Number of Bedrooms</h2> \n                    <input type="range" id="rangeBedrooms" min="1" max="6" step="1"> \n                    <h3>You are choosing<span id="current-value" class="svelte-1bf29te"></span>bedrooms now.</h3> \n                    <h2 class="typeOfLease svelte-1bf29te">Type of Lease</h2> \n                    <div class="lease svelte-1bf29te"><input type="checkbox" name="leaseTerm" value="shortterm" id="shortterm"> \n                        <label for="shortterm" class="leaseLabel svelte-1bf29te">Less than 6 months</label> \n                        <input type="checkbox" name="leaseTerm" value="middleterm" id="middleterm"> \n                        <label for="middleterm" class="leaseLabel svelte-1bf29te">6 months to 12 months</label> \n                        <input type="checkbox" name="leaseTerm" value="longterm" id="longterm"> \n                        <label for="longterm" class="leaseLabel svelte-1bf29te">Over 1 year</label> \n                        <input type="checkbox" name="leaseTerm" value="spring" id="sprint"> \n                        <label for="spring" class="leaseLabel svelte-1bf29te">Spring (Seasonal Rental)</label> \n                        <input type="checkbox" name="leaseTerm" value="summer" id="summer"> \n                        <label for="summer" class="leaseLabel svelte-1bf29te">Summer (Seasonal Rental)</label> \n                        <input type="checkbox" name="leaseTerm" value="fall" id="fall"> \n                        <label for="fall" class="leaseLabel svelte-1bf29te">Fall (Seasonal Rental)</label> \n                        <input type="checkbox" name="leaseTerm" value="winter" id="winter"> \n                        <label for="winter" class="leaseLabel svelte-1bf29te">Winter (Seasonal Rental)</label></div></div> \n                <div id="closeModal" class="closeModal svelte-1bf29te">×</div></div></section> \n            <div class="dropdown svelte-1bf29te"><button class="btn dropdown-toggle svelte-1bf29te" type="button" data-bs-toggle="dropdown" aria-expanded="false">Categories</button> \n                <ul class="dropdown-menu"><li><a class="dropdown-item" href="#">City/Town</a></li> \n                  <li><a class="dropdown-item" href="#">Price</a></li> \n                  <li><a class="dropdown-item" href="#">Housing Type</a></li> \n                  <li><a class="dropdown-item" href="#">Number of bedrooms</a></li> \n                  <li><a class="dropdown-item" href="#">Type of Lease</a></li></ul></div> \n            \n            <button class="exportAll svelte-1bf29te" type="button">Export All</button> \n            <button class="exportCurrent svelte-1bf29te" type="button">Export Current</button> \n            <button class="getData svelte-1bf29te" type="button">Get Data</button></section> \n        <table class="svelte-1bf29te"><tr class="svelte-1bf29te"><th class="svelte-1bf29te">Stratified Area</th> \n                <th class="svelte-1bf29te">Municipality</th> \n                <th class="svelte-1bf29te">Street #</th> \n                <th class="svelte-1bf29te">Street Name</th> \n                <th class="svelte-1bf29te">Housing Type</th> \n                <th class="svelte-1bf29te">Unit Size</th> \n                <th class="svelte-1bf29te">Secondary Suite</th> \n                <th class="svelte-1bf29te">Monthly Rent</th> \n                <th class="svelte-1bf29te">Utilities Included</th> \n                <th class="svelte-1bf29te">Landlord Type</th> \n                <th class="svelte-1bf29te">Stability</th></tr> \n            <tr class="svelte-1bf29te"><td class="icon row1 svelte-1bf29te">Alliston/Bradford</td> \n                <td class="svelte-1bf29te">Bradford West</td> \n                <td class="svelte-1bf29te">280</td> \n                <td class="svelte-1bf29te">MILLER PARK AVE</td> \n                <td class="svelte-1bf29te">House</td> \n                <td class="svelte-1bf29te">2 Bedrooms</td> \n                <td class="svelte-1bf29te">Yes</td> \n                <td class="svelte-1bf29te">$2,300</td> \n                <td class="svelte-1bf29te">Yes</td> \n                <td class="svelte-1bf29te">Private</td> \n                <td class="svelte-1bf29te">Over 1 year</td></tr> \n            <tr class="svelte-1bf29te"><td class="icon row2 svelte-1bf29te">Barrie</td> \n                <td class="svelte-1bf29te">Springwater</td> \n                <td class="svelte-1bf29te">25</td> \n                <td class="svelte-1bf29te">SWEET CICELY ST</td> \n                <td class="svelte-1bf29te">House</td> \n                <td class="svelte-1bf29te">4 Bedrooms</td> \n                <td class="svelte-1bf29te">No</td> \n                <td class="svelte-1bf29te">$2,975</td> \n                <td class="svelte-1bf29te">No</td> \n                <td class="svelte-1bf29te">Private</td> \n                <td class="svelte-1bf29te">6 months to 12 months</td></tr> \n            <tr class="svelte-1bf29te"><td class="icon row3 svelte-1bf29te">Collingwood</td> \n                <td class="svelte-1bf29te">Collingwood</td> \n                <td class="svelte-1bf29te">460</td> \n                <td class="svelte-1bf29te">ONTARIO Street Unit #603</td> \n                <td class="svelte-1bf29te">Apartment</td> \n                <td class="svelte-1bf29te">2 Bedrooms</td> \n                <td class="svelte-1bf29te">No</td> \n                <td class="svelte-1bf29te">$2,100</td> \n                <td class="svelte-1bf29te">Yes</td> \n                <td class="svelte-1bf29te">Not Stated</td> \n                <td class="svelte-1bf29te">Less than 6 months</td></tr> \n            <tr class="svelte-1bf29te"><td class="icon row4 svelte-1bf29te">Midland</td> \n                <td class="svelte-1bf29te">Midland</td> \n                <td class="svelte-1bf29te">652</td> \n                <td class="svelte-1bf29te">NORMAN CRES</td> \n                <td class="svelte-1bf29te">House</td> \n                <td class="svelte-1bf29te">4 Bedrooms</td> \n                <td class="svelte-1bf29te">Yes</td> \n                <td class="svelte-1bf29te">$2,800</td> \n                <td class="svelte-1bf29te">No</td> \n                <td class="svelte-1bf29te">Not Stated</td> \n                <td class="svelte-1bf29te">Winter (Seasonal Rental)</td></tr> \n            <tr class="svelte-1bf29te"><td class="icon row5 svelte-1bf29te">Orillia</td> \n                <td class="svelte-1bf29te">Orillia</td> \n                <td class="svelte-1bf29te">189</td> \n                <td class="svelte-1bf29te">ISABELLA DR</td> \n                <td class="svelte-1bf29te">Attached</td> \n                <td class="svelte-1bf29te">3 Bedrooms</td> \n                <td class="svelte-1bf29te">Yes</td> \n                <td class="svelte-1bf29te">$2,700</td> \n                <td class="svelte-1bf29te">Yes</td> \n                <td class="svelte-1bf29te">Private</td> \n                <td class="svelte-1bf29te">Over 1 year</td></tr></table></main>'},m(e,t){b(e,s,t)},p:e,i:e,o:e,d(e){e&&v(s)}}}class Pe extends K{constructor(e){super(),G(this,e,null,Oe,o,{})}}function Ne(t){let s,n,l;return s=new Ce({props:{title:"landingPage",navList:t[4]}}),n=new Ae({}),{c(){Y(s.$$.fragment),Y(n.$$.fragment)},m(e,t){z(s,e,t),z(n,e,t),l=!0},p:e,i(e){l||(U(s.$$.fragment,e),U(n.$$.fragment,e),l=!0)},o(e){W(s.$$.fragment,e),W(n.$$.fragment,e),l=!1},d(e){q(s,e),q(n,e)}}}function He(t){let s,n,l;return s=new Ce({props:{title:"login",navList:t[1]}}),n=new _e({}),{c(){Y(s.$$.fragment),Y(n.$$.fragment)},m(e,t){z(s,e,t),z(n,e,t),l=!0},p:e,i(e){l||(U(s.$$.fragment,e),U(n.$$.fragment,e),l=!0)},o(e){W(s.$$.fragment,e),W(n.$$.fragment,e),l=!1},d(e){q(s,e),q(n,e)}}}function De(t){let s,n,l,a;return s=new Ce({props:{title:"heatMap",navList:t[2]}}),l=new Ee({}),{c(){Y(s.$$.fragment),n=m(),Y(l.$$.fragment)},m(e,t){z(s,e,t),b(e,n,t),z(l,e,t),a=!0},p:e,i(e){a||(U(s.$$.fragment,e),U(l.$$.fragment,e),a=!0)},o(e){W(s.$$.fragment,e),W(l.$$.fragment,e),a=!1},d(e){q(s,e),e&&v(n),q(l,e)}}}function Ie(t){let s,n,l;return s=new Ce({props:{title:"rentalData",navList:t[3]}}),n=new Pe({}),{c(){Y(s.$$.fragment),Y(n.$$.fragment)},m(e,t){z(s,e,t),z(n,e,t),l=!0},p:e,i(e){l||(U(s.$$.fragment,e),U(n.$$.fragment,e),l=!0)},o(e){W(s.$$.fragment,e),W(n.$$.fragment,e),l=!1},d(e){q(s,e),q(n,e)}}}function Fe(e){let t,s,n,l,a,o,r,c,i,f;return t=new xe({props:{path:"/",$$slots:{default:[Ne]},$$scope:{ctx:e}}}),n=new xe({props:{path:"login",$$slots:{default:[He]},$$scope:{ctx:e}}}),a=new xe({props:{path:"heatMap",$$slots:{default:[De]},$$scope:{ctx:e}}}),r=new xe({props:{path:"rentalData",$$slots:{default:[Ie]},$$scope:{ctx:e}}}),i=new we({}),{c(){Y(t.$$.fragment),s=m(),Y(n.$$.fragment),l=m(),Y(a.$$.fragment),o=m(),Y(r.$$.fragment),c=m(),Y(i.$$.fragment)},m(e,u){z(t,e,u),b(e,s,u),z(n,e,u),b(e,l,u),z(a,e,u),b(e,o,u),z(r,e,u),b(e,c,u),z(i,e,u),f=!0},p(e,s){const l={};32&s&&(l.$$scope={dirty:s,ctx:e}),t.$set(l);const o={};32&s&&(o.$$scope={dirty:s,ctx:e}),n.$set(o);const c={};32&s&&(c.$$scope={dirty:s,ctx:e}),a.$set(c);const i={};32&s&&(i.$$scope={dirty:s,ctx:e}),r.$set(i)},i(e){f||(U(t.$$.fragment,e),U(n.$$.fragment,e),U(a.$$.fragment,e),U(r.$$.fragment,e),U(i.$$.fragment,e),f=!0)},o(e){W(t.$$.fragment,e),W(n.$$.fragment,e),W(a.$$.fragment,e),W(r.$$.fragment,e),W(i.$$.fragment,e),f=!1},d(e){q(t,e),e&&v(s),q(n,e),e&&v(l),q(a,e),e&&v(o),q(r,e),e&&v(c),q(i,e)}}}function Ue(e){let t,s;return t=new de({props:{url:e[0],$$slots:{default:[Fe]},$$scope:{ctx:e}}}),{c(){Y(t.$$.fragment)},m(e,n){z(t,e,n),s=!0},p(e,[s]){const n={};1&s&&(n.url=e[0]),32&s&&(n.$$scope={dirty:s,ctx:e}),t.$set(n)},i(e){s||(U(t.$$.fragment,e),s=!0)},o(e){W(t.$$.fragment,e),s=!1},d(e){q(t,e)}}}function We(e,t,s){let{url:n=""}=t;return e.$$set=e=>{"url"in e&&s(0,n=e.url)},[n,[{href:"/",linkText:"Go Back"}],[{href:"/rentalData",linkText:"View Rental Data"},{href:"/login",linkText:"Log in"}],[{href:"/heatMap",linkText:"View Heat Map"},{href:"/login",linkText:"Log in"}],[{href:"/login",linkText:"Log In"}]]}return new class extends K{constructor(e){super(),G(this,e,We,Ue,o,{url:0})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
