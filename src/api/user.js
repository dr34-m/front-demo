import request from '@/utils/request'

// 登录方法
export function login(data) {
	return request({
		url: '/auth/memclient/login',
		headers: {
			isToken: false,
			isMask: false
		},
		method: 'post',
		data
	})
}

// 退出方法
export function logout() {
	return request({
		url: '/auth/memclient/logout',
		headers: {
			isMask: false
		},
		method: 'delete'
	})
}

// 获取用户信息
export function getUserInfo() {
	return request({
		url: '/member/user/getInfo',
		method: 'get'
	})
}

// 获取验证码
export function getCodeImg() {
	return request({
		url: '/code',
		headers: {
			isToken: false
		},
		method: 'get',
		timeout: 20000
	})
}
