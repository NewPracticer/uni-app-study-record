<template>
	<swiper class="home-swiper" :current="activeIndex" @change="change">
		<swiper-item  v-for="(item,index) in tab" :key="index" class="swiper-item">
			<list-item :list= "listCacheData[index]"  :load="load[index]"  @loadmore = 'loadmore'></list-item>
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
				load:{},
				pageSize:10
			};
		},
		watch:{
			tab(newVal){
				if(newVal.length === 0) return
				this.listCacheData={}
				this.load = {}
				this.getList(this.activeIndex)
			}
		},
		created() {
			
		},
		methods:{
			loadmore(){
				if(this.load[this.activeIndex].loading==='noMore') return
				console.log('list 出发上拉')
				this.load[this.activeIndex].page++
				this.getList(this.activeIndex)
			},
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
				if(!this.load[current]){
					this.load[current] = {
						page:1,
						loading:'loading'
					}
				};
				this.$api.get_list({
					name : this.tab[current].name,
					page:this.load[current].page,
					pageSize:this.pageSize
					}).then(res=>{
					console.log(res);
					const{data} = res
					if(data.length === 0){
						let oldLoad = {}
						oldLoad.loading = 'noMore'
						oldLoad.page = this.load[current].page
						this.$set(this.load,current,oldLoad)
						//强制渲染页面
						this.$forceUpdate()
					}
					let oldList = this.listCacheData[current] || []
					oldList.push(...data)
					// this.listCacheData[current] =data
					this.$set(this.listCacheData,current,oldList)
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
