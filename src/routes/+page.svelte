<script lang="ts">
	import { base } from '$app/paths';
</script>

<header class="container">
	<h1>What do you want to do?</h1>
	<a href="{base}/repl" role="button">Access REPL</a>
	<a href="{base}/ping" role="button">Ping Test</a>
	<a href="{base}/worm" role="button">Worm</a>
</header>

<main class="container">
	<p>
		This is a demonstration tool for connecting and controlling a
		<a href="https://www.espruino.com/Bangle.js2" target="_blank">Bangle.js 2</a>
		via the Web Bluetooth API.
		<br />
		Only <b>Chrome version 70+</b> on <b>Windows</b> or <b>MacOS</b> is supported.
	</p>
	<p>
		Created as a part of <b>ACM Research Spring 2023</b> at the
		<b>University of Texas at Dallas</b><br />
		by Rishit Viral, Samuel Preston, Ben Kye, Naja-Lee Habboush, Daniel Nguyen, and Soumika Seelam.
	</p>
	<p>
		Read about our research <a href="{base}/researchposter.pdf" target="_blank">here</a>.
	</p>
</main>

<style>
	.container {
		margin-top: 4em;
	}
</style>
