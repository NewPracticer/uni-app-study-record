<script>
	// 应用生命周期  app.vue
	// 页面生命周期
	// 组件生命周期
	// beforecreate created mounted destoryed
	export default {
		// 应用初始化完成出发一次,全局只触发一次
		onLaunch: function() {
			console.log('App Launch')
			// 用户登录 
			// 项目初始化
		},
		//应用启动时,或者从后台进入前台会触发
		onShow: function() {
			console.log('App Show')
		},
		//应用从前台进入后台触发
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
