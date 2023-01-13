import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: '首页',
		meta: {
			disableLeft: true
		},
		component: () => import('@/views/index')
	},
	{
		path: '/login',
		name: '登录',
		meta: {
			disableLeft: true
		},
		component: () => import('@/views/Login')
	},
	{
		path: '/home',
		name: '工作台',
		component: () => import('@/views/home/index')
	},
	// {
	// 	path: '/project',
	// 	component: Layout,
	// 	children: [{
	// 			path: '',
	// 			component: () => import('@/views/project/index'),
	// 			name: '项目管理',
	// 			meta: {
	// 				letfName: '项目管理'
	// 			}
	// 		}, {
	// 			path: 'addProject',
	// 			component: () => import('@/views/project/addProject'),
	// 			name: '新增项目',
	// 			meta: {
	// 				disableLeft: true
	// 			}
	// 		}]
	// }
]

const router = new VueRouter({
	mode: 'hash',
	routes
})

export default router