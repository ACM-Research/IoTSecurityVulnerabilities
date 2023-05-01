<script lang="ts">
	import { newMessage } from '../util/bluetooth';

	export let value = '>';
	export let customBody = false;
	if (!customBody) {
		newMessage.subscribe((msg) => {
			if (msg) value += msg;
		});
	}
</script>

<div>
	<textarea readonly bind:value />
</div>

<style lang="scss">
	div {
		padding-left: 1em;
		padding-right: 1em;
		height: 60vh;

		textarea {
			height: 100%;
		}
	}
</style>
