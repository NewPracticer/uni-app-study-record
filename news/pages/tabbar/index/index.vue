<template>
	<view class="home">
		<navbar></navbar>
		<tab :list = "tabList" :tabIndex="tabIndex"  @tab = "tab"></tab>
		<view class="home-list">
			<list :tab="tabList" :activeIndex = "activeIndex" @change = "change"></list>
		</view>
	</view>
</template>

<script>
	import navbar from '@/components/navbar/navbar.vue'
	export default {
		components:{
			navbar
		},
		data() {
			return {
				title: 'Hello',
				tabList:[],
				tabIndex:0,
				activeIndex:0
			}
		},
		onLoad() {
			uni.$on('labelChange',(res)=>{
				this.tabList = []
				this.tabIndex = 0
				this.activeIndex = 0
				this.getLabel()
			})
			console.log("tab的onload方法"),
			this.getLabel()
		},
		methods: {
			tab({data,index}){
				console.log(data,index)
				this.activeIndex = index
			},
			getLabel(){
				// 调用云函数方法
				this.$api.get_label().then((res) => {
					const {data} = res
					console.log('标签 ',data);
					data.unshift({
						name:'全部'
					})
					this.tabList = data
				})
			},
			change(current){
				console.log("当前current的值",current);
				this.tabIndex = current;
				this.activeIndex = current
			}
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
		display: flex;
	}
	.home {
		display: flex;
		flex-direction: column;
		flex: 1;
		border: 1px red solid;
		overflow: hidden;
		.home-list{
			flex: 1;
			box-sizing:border-box;
		}
	}

	
</style>
