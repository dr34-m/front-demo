<template>
	<div class="content-none-data">
		{{ err }}
	</div>
</template>

<script>
	export default {
		name: 'Index',
		data() {
			return {
				err: ''
			};
		},
		created() {
			this.init();
		},
		methods: {
			init() {
				try {
					if (!this.vuex_token) {
						this.to('/login');
					} else {
						this.getInfo();
					}
				} catch (err) {
					this.err = err;
				}
			},
			getInfo() {
				// getMemInfo().then(res => {
				// 	this.$setVuex('vuex_userInfo', res.data);
				// 	this.to('/home');
				// }).catch(err => {
				// 	this.to('/login');
				// })
			},
			to(path) {
				this.$router.replace(path);
			}
		}
	}
</script>

<style>
</style>
