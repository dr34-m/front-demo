<template>
	<div class="login">
		登录页
	</div>
</template>

<script>
	import {getCodeImg} from '@/api/user'
	export default {
		name: 'Login',
		data() {
			return {};
		},
		created() {
			this.getCode();
		},
		methods: {
			getCode() {
				getCodeImg().then(res => {
					console.log('res', res)
				})
			}
		}
	}
</script>
<style lang="scss" scoped>
	
</style>
