<template>
    <div id="goods-detail">
        <div class="detail">
            <!-- 顶部导航栏 -->
            <mt-header title="商品详情">
                <mt-button slot="left" icon="back" @click="goback">返回
                </mt-button>
            </mt-header>
            <!-- 轮播图 -->
            <div class="banner">
                <mt-swipe :auto="2000">
                    <mt-swipe-item v-for="(item, index) in goodsDetail.img" :key="index">
                        <img :src="item">
                    </mt-swipe-item>
                </mt-swipe>
            </div>
            <div class="title">
                <div class="name">{{ goodsDetail.name }}</div>
                <div class="explain">{{ goodsDetail.explain }}</div>
                <div class="price">价格：¥:{{ goodsDetail.price }}</div>
            </div>
            <div class="contents">
                <span>商品详情</span>
                <span>评价</span>
            </div>
            <div class="info">
                <!-- 后期可以使用 v-if 或使用嵌套路由切换商品详情和评价 -->
                <img :src="noinfo">
            </div>
        </div>
        <div class="operate">
            <!-- 这两个方法暂时不实现 -->
            <div class="cart" @click="addToCart(goodsDetail)">加入购物车
            </div>
            <div class="buy" @click="toBuy(goodsDetail)">立即购买</div>
        </div>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    data() {
        return {
            noinfo: require("../assets/img/noinfo.png")
        }
    },
    methods: {
        goback() {
            this.$router.go(-1);
        },
        addToCart(goods) {
// 加购
		this.$store.commit("addToCart", goods);
// 提示
		Toast({
		message: '加购成功',
		duration: 1000
			});
		}
    },
    computed: {
        goodsDetail() {
            return this.$store.state.goodsDetail;
        }
    }
}
</script>
<style scoped>
#goods-detail {
    position: fixed;
    z-index: 2;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
}

.detail {
    position: fixed;
    top: 0;
    bottom: 50px;
    width: 100%;
    overflow-y: auto;
}

.banner {
    height: 256px;
}

.mint-swipe-item img {
    width: 100%;
    height: 256px;
}

.title {
    margin-left: 10px;
}

.title .name {
    line-height: 40px;
    font-size: 22px;
}

.title .explain {
    color: #555;
    font-size: 12px;
}

.title .price {
    font-size: 18px;
    font-weight: bold;
    line-height: 25px;
    color: #e8380d;
}

.contents {
    margin-top: 10px;
    display: flex;
    text-align: center;
    background-color: #f6f6f6;
    font-size: 12px;
}

.contents span {
    flex: 1;
    margin: 10px 0;
    line-height: 20px;
}

.contents span:not(:last-child) {
    border-right: 1px solid #aaa;
}

.info {
    padding-top: 20px;
}

.info img {
    display: block;
    width: 100%;
}

.operate {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    text-align: center;
    color: #fff;
}

.operate .cart {
    float: left;
    width: 50%;
    background-color: #1296db;
}

.operate .buy {
    float: right;
    width: 50%;
    background-color: #e8380d;
}
</style>