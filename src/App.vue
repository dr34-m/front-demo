<template>
	<div id="app" class="app-all-main">
		<div v-loading="vuex_loading">
			<router-view />
		</div>
	</div>
</template>
<script>
	export default {
		name: "App",
		data() {
			return {};
		},
		created() {},
		methods: {}
	};
</script>
<style lang="scss">
	body {
		margin: 0;
	}

	#app {
		width: 100%;
		height: 100vh;
	}
</style>
