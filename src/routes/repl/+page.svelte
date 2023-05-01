<script lang="ts">
	import Console from '../../components/Console.svelte';
	import Controls from '../../components/Controls.svelte';
	import { currentDevice, sendCommand } from '../../util/bluetooth';

	async function onSubmitCommand(target: EventTarget & HTMLInputElement) {
		const command = target.value;
		if (!command) return;
		await sendCommand(command);
		target.value = '';
	}
</script>

<Controls />

<div id="command">
	<input
		type="text"
		placeholder="Enter command..."
		disabled={!$currentDevice}
		on:keydown={(ev) => {
			if (ev.key === 'Enter') onSubmitCommand(ev.currentTarget);
		}}
	/>
</div>

<Console />

<style lang="scss">
	#command {
		padding-left: 1em;
		padding-right: 1em;
	}
</style>
