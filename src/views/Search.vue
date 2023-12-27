<template>
	<div id="search">
		<mt-header fixed title="搜索">
			<mt-button slot="left" icon="back" @click="goback">返回</mt-button>
		</mt-header>
		
		<mt-search v-model="value" autofocus placeholder=" 请输入您想找的商品..."
		@keyup.enter.native="search">
		</mt-search>
	</div>
</template>

<script>
	import { MessageBox } from 'mint-ui'
		export default {
			data(){
				return {
					value:''
		}
	},
	methods:{
		goback(){
			this.$router.go(-1);
		},
		search(){
			MessageBox("提示","搜索内容为："+this.value);
			}
		}
	}
</script>

<style scoped>
#search{
	position: fixed;
	width: 100%;
}
.mint-search{
	margin-top: 40px;
}
/deep/ .mint-searchbar-inner{
	border-radius: 18px;
}
/deep/ .mint-searchbar{
	background-color: #eee;
}
</style>
