<template>
	<!--
	1.模板语法
	2.数据绑定
	3.条件判断 某一个或者说某一块元素是否要渲染 Y 
	4.列表渲染 数据来渲染我们的列表
	5.基础组件的使用
	6.自定义组件的使用
	7.基础api的用法
	8.条件编译
	9.页面布局
	-->
	
	<!--
	v-bind --- :
	v-on ----  @
	-->
	
	<!--v-if -->
	
	<view class="content" v-bind:class="className">
		{{title}}
		<view>这是一个一直显示的内容</view>
		<button @click="clickifelse">点击一下</button>
		<view v-if="show">我是动态内容-知识点：if-else</view>
		<!-- 列表渲染 -->
		<view v-for="(item,index) in arr">{{index + item}}</view>
		<view v-for="(item,value) in arrobject">{{value + ' : ' + item}}</view>
		<!--基础组件使用-->
		<text> text组件标签</text>
		<scroll-view class="height" scroll-y="true" @scroll="scroll">
			<view v-for="item in 100">{{item}}</view>
		</scroll-view>
		<!-- 条件编译  -->
		
	</view>
	
</template>

<script>
	export default{
		//初始化数据方法
		
		//不建议 保留上次的变量值，不会被初始化
		// data:{}
		data(){
			return{
				title:"我是一个被修改过的值",
				className:'active',
				show :false,
				arr:['uni-app','vue','html'],
				arrobject:{
					name:'Liming',
					age:18,
					type:"eat"
				},
				
			}
		},
		
		//监听页面初次渲染完成
		onReady() {
			//如果渲染速度快，会在页面进入动画完成前触发
		},
		//监听页面显示
		onShow() {
			
		},
		// 监听页面隐藏
		onHide() {
			
		},
		//监听页面卸载
		onUnload() {
			
		},
		//监听页面加载
		onLoad() {
			
			setTimeout(()=>{
				this.title = "hello uni-app"
			},2000)
			
			uni.getSystemInfo({
				success(res) {
					console.log('成功会返回',res)
				},
				fail(err){
					console.log('失败会返回',err);
				},
				complete(res){
					console.log('不管成功失败都会返回',res)
				}
			})
		},
		methods:{
			open(){
				console.log('我被点击了');
				this.title = "我被点击了"
			},
			clickifelse(){
				this.show = !this.show
			},
			scroll(e){
				console.log(e)
			}
		}
	}
</script>

<style lang="scss">
	.height{
		height: 80px;
	}
	page{
		background-color: #007AFF;
	}
	.content{
		font-size: 25px;
	}
</style>
