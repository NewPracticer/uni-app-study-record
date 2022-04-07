<template>
	<swiper class="home-swiper" :current="activeIndex" @change="change">
		<swiper-item  v-for="(item,index) in tab" :key="index" class="swiper-item">
			<list-item :list= "listCacheData[index]"></list-item>
		</swiper-item>
	</swiper>
</template>

<script>
	import listItem from './list-item.vue'
	
	export default {
		props:{
			tab:{
				type:Array,
				default(){
					return []
				}
			},
			activeIndex:{
				type:Number,
				default:0
			},
		},
		components:{
			listItem
		},
		data() {
			return {
				list:[],
				listCacheData:{},
			};
		},
		watch:{
			tab(newVal){
				if(newVal.length === 0) return
				this.getList(this.activeIndex)
			}
		},
		created() {
			
		},
		methods:{
			change(e){
				const{current} = e.detail
				console.log(e);
				this.$emit('change',current)
				//当数据不存在，或 长度是0的情况下，才去请求数据
				if(!this.listCacheData[current] || this.listCacheData[current].length === 0){
					this.getList(current)
				}
				
			},
			getList(current){
				this.$api.get_list({
					name : this.tab[current].name,
					}).then(res=>{
					console.log(res);
					const{data} = res
					// this.listCacheData[current] =data
					this.$set(this.listCacheData,current,data)
				})
			}
		}
	}
</script>

<style lang="scss">
	.home-swiper{
		height: 100%;
		.swiper-item{
			height: 100%;
			overflow: hidden;
		}
		.list-scroll{
			height: 100%;
		}
	}
</style>
