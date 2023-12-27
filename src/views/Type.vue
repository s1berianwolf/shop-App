<template>
	<div id="type">
		<ul class="type-list">
			<li v-for="(item, index) in typeList" :key="index">
				<a :href="item.link">
					<img class="type-img" :src="item.url" />
						<span class="type-name">{{ item.name }}</span>
				</a>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	data() {
		return {
			typeList: [
				{ "name": "女装", "url": require("../assets/img/nz.jpg"), "link": "#" },
				{ "name": "短裤", "url": require("../assets/img/dk.jpg"), "link": "#" },
				{ "name": "裙子", "url": require("../assets/img/qz.jpg"), "link": "#" },
				{ "name": "西装", "url": require("../assets/img/xiz.jpg"), "link": "#" },
				{ "name": "T 恤", "url": require("../assets/img/ts.jpg"), "link": "#" },
				{ "name": "眼镜", "url": require("../assets/img/yj.jpg"), "link": "#" },
				{ "name": "袜子", "url": require("../assets/img/wazi.jpg"), "link": "#" },
				{ "name": "鞋子", "url": require("../assets/img/xz.jpg"), "link": "#" },
				{ "name": "内衣", "url": require("../assets/img/ny.jpg"), "link": "#" },
				{ "name": "全部", "url": require("../assets/img/qb.jpg"), "link": "#" }
			]
		}
	}
}
</script>
<style scoped>
#type {
	height: 145px;
	background-color: #f3f3f3;
	margin-top: 2px;
}
.type-list li {
	float: left;
	padding: 6px 0;
	width: 20%;
	text-align: center;
	list-style-type: none;
}
.type-list li a {
	display: flex;
	flex-direction: column;
	align-items: center;
	text-decoration: none;
}
.type-img {
	display: inline-block;
	width: 40px;
	height: 40px;
}
.type-name {
	font-size: 12px;
	color:#555;
}
</style>