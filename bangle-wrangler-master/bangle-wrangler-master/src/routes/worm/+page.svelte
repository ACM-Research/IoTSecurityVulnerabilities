<script lang="ts">
	import Console from '../../components/Console.svelte';
	import Controls from '../../components/Controls.svelte';
	import { currentDevice, sendCommand } from '../../util/bluetooth';

	import wormSrc from '../../scripts/worm.js?raw';
	import wormRemoveSrc from '../../scripts/worm.remove.js?raw';

	async function uploadWorm() {
		await sendCommand(wormSrc.replace('\n', ''));
	}

	async function removeWorm() {
		await sendCommand(wormRemoveSrc);
	}
</script>

<Controls />

{#if $currentDevice}
	<div id="worm-commands">
		<button on:click={() => uploadWorm()}>Upload Worm</button>
		<button on:click={() => removeWorm()}>Remove Worm</button>
	</div>
{/if}

<Console />

<style lang="scss">
	#worm-commands {
		padding-left: 1em;
		padding-right: 1em;
		display: flex;
		gap: 1em;
	}
</style>
