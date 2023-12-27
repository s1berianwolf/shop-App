<template>
	<div id="home">
		<mt-header fixed title="首页">
			<mt-button icon="search" slot="right" @click="search"></mt-button>
		</mt-header>
		<div style="height:40px;"></div>
		<Banner></Banner>
		<Type></Type>
		<Goods></Goods>
	</div>
</template>

<script>
	import Banner from './Banner.vue'
	import Type from './Type.vue'
	import Goods from './Goods.vue'
	export default{
		methods:{
			search(){
				this.$router.push({name:"Search"});
			}
		},
		components:{
			Banner,
			Type,
			Goods
		}
	}
</script>

<style scoped>
</style>