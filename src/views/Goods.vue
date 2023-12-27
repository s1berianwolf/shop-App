<template>
	<div id="goods">
		<div class="goods-item" v-for="(item1, index1) in goodsList" :key="index1">
			<h4>
				{{ item1.type }}
			</h4>
			<ul class="clearfix">
				<li v-for="(item2, index2) in item1.products" :key="index2" @click="goodsDetail(item2)">
					<img :src="item2.img[0]" />
					<span class="price">¥{{ item2.price }}</span>
					<span class="name">{{ item2.name }}</span>
					<span class="shop-car" @click.stop="addToCart(item2)">
						<icon name="cart-plus" scale="1.2"></icon>
					</span>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
	data() {
		return {
			goodsList: [
				{
					"type": "女装",
					"products": [
						{ "id": 1, "name": "气质长裙", "price": 599, "img":
[require("../assets/img/1.jpg"), require("../assets/img/2.jpg")], "explain": "春秋装2020 年新款大码女装胖 mm 洋气贵夫人妈妈连衣裙秋冬气质长裙" },
						{ "id": 2, "name": "礼服旗袍", "price": 699, "img":
[require("../assets/img/1.jpg"), require("../assets/img/2.jpg")], "explain": "春秋年会礼服旗袍改良款婚礼妈妈喜宴装中年婆婆女长袖连衣裙高贵" }
					]
				},
				{
					"type": "T 恤",
					"products": [
						{ "id": 3, "name": "短袖 T 恤", "price": 119, "img":
[require("../assets/img/3.jpg"), require("../assets/img/4.jpg")] },
						{ "id": 4, "name": "情侣装", "price": 299, "img":
[require("../assets/img/3.jpg"), require("../assets/img/4.jpg")] }
					]
				},
				{
					"type": "鞋子",
					"products": [
						{ "id": 5, "name": "老爹鞋", "price": 189, "img":
[require("../assets/img/5.jpg"), require("../assets/img/4.jpg")], "explain": "2020年新款秋季休闲运动鞋小白鞋女鞋子秋冬爆款百搭 ins 潮老爹鞋" },
						{ "id": 6, "name": "运动鞋", "price": 219, "img":
[require("../assets/img/5.jpg"), require("../assets/img/4.jpg")] }
					]
				}
			]
		}
	},
	methods: {
		goodsDetail(goods) {
// 提交详情
		this.$store.commit("setGoodsDetail", goods);
// 跳转到详情页
		this.$router.push({ name: "GoodsDetail" });
	},
// 添加至购物车
		addToCart(goods) {
// 加购
		this.$store.commit("addToCart", goods);
// 提示
		Toast({
		message: '加购成功',
		duration: 1000
			});
		}
		
	}
}
</script>
<style scoped>
#goods {
	background-color: #f6f6f6;
}
h4 {
	padding: 0 10px;
	line-height: 36px;
	font-size: 14px;
	background-color: #fff;
}
h4:before {
	content: "";
	display: inline-block;
	margin-right: 6px;
	width: 4px;
	height: 12px;
	background-color: #e8380d;
}
ul {
	border-top: 1px solid #ddd;
	border-bottom: 1px solid #ddd;
}
li {
	position: relative;
	float: left;
	margin: 0 1px;
	display: flex;
	flex-direction: column;
	width: 49%;
	border-right: 1px solid #ddd;
}
.goods-item:last-child {
	margin-bottom: 55px;
}
img {
	margin: 10px 0;
	width: 100%;
	height: 100%;
}
.price {
	padding-left: 10px;
	font-size: 14px;
	color: #e8380d;
}
.name {
	padding-left: 10px;
}
.shop-car {
	position: absolute;
	right: 10px;
	bottom: 4px;
	color: #1296db;
	cursor: pointer;
	color: #F06431
}
.clearfix:after {
	content: '';
	display: block;
	clear: both;
}
.clearfix {
	zoom: 1;
}
</style>