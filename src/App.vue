<script>
// import Homepage Component
import Homepage from "./pages/Homepage.vue"

export default {
	data() {
	},
	// Use Component
	components: {
		Homepage
	}
};
</script>

<template>
<Homepage />
</template>

<style>
html {
	scroll-behavior: smooth;
}
#app {
	font-family: "Nunito Sans", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
