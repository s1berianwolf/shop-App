<template>
	<div id="banner">
		<mt-swipe :auto="2500">
			<mt-swipe-item v-for="(item,index) in pics" :key="index">
				<img :src="item.url">
			</mt-swipe-item>
		</mt-swipe>
	</div>
</template>
<script>
export default {
  name:'Banner',
  data(){
      return{
          pics:[
              {url:require('../assets/img/pic4.jpg')},
			  {url:require('../assets/img/pic5.jpg')},
			  {url:require('../assets/img/pic6.jpg')}
          ]
      }
  }
}
</script>
<style scoped>
	.mint-swipe {
		height: 180px;
	}	
	.mint-swipe img {
	width: 100%;
	height: 180px;
	}
</style>