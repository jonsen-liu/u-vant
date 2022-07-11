import { createSSRApp } from 'vue'
import App from './App.vue'
import { Lazyload } from './components/Lazyload/index'
export function createApp () {
	const app = createSSRApp(App)
	app.directive('lazy-load', Lazyload)
	return {
		app
	}
}
// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App)
// 	.mount('#app')
// import { createApp as vueCreateApp } from 'vue'
// import App from './App.vue'
// // import { Lazyload } from './components/Lazyload/index'

// export function createApp () {
// 	const app = vueCreateApp(App)
// 	app.directive('focus', {
// 		// 当被绑定的元素挂载到 DOM 中时……
// 		mounted (el) {
// 			// 聚焦元素
// 			el.focus()
// 		}
// 	})
// 	return {
// 		app
// 	}
// }
