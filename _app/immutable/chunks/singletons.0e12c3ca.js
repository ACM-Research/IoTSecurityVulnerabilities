import{w as u}from"./index.a4ce4d7b.js";var _;const b=((_=globalThis.__sveltekit_t6raeu)==null?void 0:_.base)??"/IoTSecurityVulnerabilities";var g;const v=((g=globalThis.__sveltekit_t6raeu)==null?void 0:g.assets)??b,k="1682995614109",w="sveltekit:snapshot",y="sveltekit:scroll",A="sveltekit:index",f={tap:1,hover:2,viewport:3,eager:4,off:-1};function I(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function R(){return{x:pageXOffset,y:pageYOffset}}function i(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const d={...f,"":f.hover};function h(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function S(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=h(e)}}function x(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,l=!n||!!o||E(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),r=(n==null?void 0:n.origin)===location.origin&&e.hasAttribute("download");return{url:n,external:l,target:o,download:r}}function O(e){let t=null,n=null,o=null,l=null,r=null,a=null,s=e;for(;s&&s!==document.documentElement;)o===null&&(o=i(s,"preload-code")),l===null&&(l=i(s,"preload-data")),t===null&&(t=i(s,"keepfocus")),n===null&&(n=i(s,"noscroll")),r===null&&(r=i(s,"reload")),a===null&&(a=i(s,"replacestate")),s=h(s);return{preload_code:d[o??"off"],preload_data:d[l??"off"],keep_focus:t==="off"?!1:t===""?!0:null,noscroll:n==="off"?!1:n===""?!0:null,reload:r==="off"?!1:r===""?!0:null,replace_state:a==="off"?!1:a===""?!0:null}}function p(e){const t=u(e);let n=!0;function o(){n=!0,t.update(a=>a)}function l(a){n=!1,t.set(a)}function r(a){let s;return t.subscribe(c=>{(s===void 0||n&&c!==s)&&a(s=c)})}return{notify:o,set:l,subscribe:r}}function m(){const{set:e,subscribe:t}=u(!1);let n;async function o(){clearTimeout(n);try{const l=await fetch(`${v}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!l.ok)return!1;const a=(await l.json()).version!==k;return a&&(e(!0),clearTimeout(n)),a}catch{return!1}}return{subscribe:t,check:o}}function E(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}function U(e){e.client}const L={url:p({}),page:p({}),navigating:u(null),updated:m()};export{A as I,f as P,y as S,w as a,x as b,O as c,R as d,b as e,S as f,I as g,U as h,E as i,L as s};
