<script lang="ts">
	import { onDestroy } from 'svelte';
	import Console from '../../components/Console.svelte';
	import Controls from '../../components/Controls.svelte';
	import { currentDevice, sendCommand, newMessage } from '../../util/bluetooth';

	let consoleBody = '';
	let partialMessage = '';
	const messageUnsubscribe = newMessage.subscribe((value) => {
		if (!value) return;
		partialMessage += value;
		if (partialMessage.includes('=undefined')) {
			const regex = /START:(\d+)\|END:(\d+)\|/gm;
			const matches = regex.exec(partialMessage);
			if (matches != null) {
				consoleBody += `${matches[1]},${matches[2]},${Date.now()}\n`;
			} else {
				consoleBody += 'Missing\n';
			}
			partialMessage = '';
			sendMessage();
		}
	});

	onDestroy(() => {
		messageUnsubscribe();
	});

	let oldState = false;
	$: {
		if (oldState != !!$currentDevice) {
			consoleBody += `${$currentDevice ? 'Connected:' : 'Disconnected:'} ${Date.now()}\n`;
			oldState = !oldState;
			if ($currentDevice) sendMessage();
		}
	}

	async function sendMessage() {
		let message = `console.log('START:${Date.now()}|END:' + Math.floor(Date.now()) + '|');`;
		while (message.length < 1024) message += '/';
		sendCommand(message);
	}
</script>

<Controls />

<Console bind:value={consoleBody} customBody />
