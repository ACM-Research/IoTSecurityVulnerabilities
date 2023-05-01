<script lang="ts">
	import { connect, disconnect, currentDevice } from '../util/bluetooth';

	async function onConnectButton() {
		await connect();
	}

	async function onDisconnectButton() {
		await disconnect();
	}
</script>

<div>
	<button on:click={() => history.back()} id="back"> Back</button>
	{#if !$currentDevice}
		<button on:click={() => onConnectButton()}> Connect </button>
	{:else}
		<button on:click={() => onDisconnectButton()} class="outline"> Disconnect </button>
	{/if}
</div>

<style lang="scss">
	div {
		padding: 1em;
		padding-bottom: 0;
		display: flex;
		gap: 1em;

		#back {
			width: 6em;
		}
	}
</style>
