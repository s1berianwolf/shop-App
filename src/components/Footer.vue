<template>
	<div id="footer">
		<mt-tabbar v-model="selected" fixed>
			<mt-tab-item id="home">
				<img slot="icon" src="../assets/img/logo.png">
				首页
			</mt-tab-item>
			<mt-tab-item id="category">
				<img slot="icon" src="../assets/img/logo.png">
				分类
			</mt-tab-item>
			<mt-tab-item id="shopcar">
				<img slot="icon" src="../assets/img/logo.png">
				购物车
			</mt-tab-item>
			<mt-tab-item id="my">
				<img slot="icon" src="../assets/img/logo.png">
				我的
			</mt-tab-item>
		</mt-tabbar>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				selected:'home'
			}
		},
		
	watch:{
		selected(){
			if(this.selected == 'home'){
				this.$router.push({name:"Home"});
			}else if(this.selected == 'category'){
				this.$router.push({name:"Category"});
			}else if(this.selected == 'shopcar'){
				this.$router.push({name:"Shopcar"});
			}else if(this.selected == 'my'){
				this.$router.push({name:"My"});
			}
		}
	}
}
</script>

<style scoped>
</style>