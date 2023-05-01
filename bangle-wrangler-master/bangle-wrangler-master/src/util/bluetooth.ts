import { writable, get } from 'svelte/store';

// From https://github.com/makerdiary/web-device-cli/blob/master/js/app.js
const bleNusServiceUUID = '6e400001-b5a3-f393-e0a9-e50e24dcca9e';
const bleNusCharRXUUID = '6e400002-b5a3-f393-e0a9-e50e24dcca9e';
const bleNusCharTXUUID = '6e400003-b5a3-f393-e0a9-e50e24dcca9e';
const MTU = 20;

export interface DeviceInfo {
	txChar: BluetoothRemoteGATTCharacteristic;
	rxChar: BluetoothRemoteGATTCharacteristic;
	service: BluetoothRemoteGATTService;
	device: BluetoothDevice;
}

export const newMessage = writable<string>();
export const currentDevice = writable<DeviceInfo | null>();

export async function connect(): Promise<DeviceInfo> {
	const device = await navigator.bluetooth.requestDevice({
		optionalServices: [bleNusServiceUUID],
		filters: [{ namePrefix: 'Bangle' }]
	});

	const gatt = await device.gatt?.connect();
	if (!gatt) throw new Error('Missing GATT server.');
	const service = await gatt.getPrimaryService(bleNusServiceUUID);
	const rxChar = await service.getCharacteristic(bleNusCharRXUUID);
	const txChar = await service.getCharacteristic(bleNusCharTXUUID);

	await txChar.startNotifications();

	txChar.addEventListener('characteristicvaluechanged', (ev) => {
		const target = ev.target as BluetoothRemoteGATTCharacteristic;
		const value = target.value;
		if (!value) return;

		let str = '';
		for (let i = 0; i < value.byteLength; i++) str += String.fromCharCode(value.getUint8(i));
		newMessage.set(str);
	});

	const deviceInfo = {
		service,
		txChar,
		rxChar,
		device
	};

	currentDevice.set(deviceInfo);
	device.addEventListener('gattserverdisconnected', () => {
		currentDevice.set(null);
	});

	return deviceInfo;
}

export async function disconnect() {
	const deviceInfo = get(currentDevice);
	if (deviceInfo) {
		await deviceInfo.device.gatt?.disconnect();
		currentDevice.set(null);
	}
}

export async function sendCommand(str: string): Promise<void> {
	const deviceInfo = get(currentDevice);
	if (!deviceInfo) throw new Error('No device to send commands to!');

	if (!str.endsWith('\n')) str += '\n';
	const buff = new Uint8Array(str.length);
	for (let i = 0; i < str.length; i++) buff[i] = str.charCodeAt(i);

	for (let i = 0; i < buff.length; i += MTU) {
		const chunk = buff.slice(i, i + MTU);
		await deviceInfo.rxChar.writeValue(chunk);
	}
}
