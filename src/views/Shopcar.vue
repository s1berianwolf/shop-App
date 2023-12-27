<template>
    <div id="shopcar">
        <!-- 顶部导航栏 -->
        <mt-header title="购物车">
            <mt-button slot="left" icon="back" @click="goback">返回</mt-button>
        </mt-header>
        <div class="main">
            <p class="remind" v-if="shopCart.length === 0">
                <img :src="emptycart" />
            </p>
            <ul class="goods-list" v-if="shopCart.length > 0">
                <li v-for="(item, index) in shopCart" :key="item.id">
                    <span @click.stop="changeSelected(index)" class="choose-icon">
                        <icon :name="item.selected ? 'check-circle' : 'circle'" scale="1.4"></icon>
                    </span>
                    <img :src="item.img[0]" />
                    <div class="name">{{ item.name }}</div>
                    <div class="price">
                        <div class="single">单价:¥{{ item.price }}</div>
                        <div class="all">合计:¥{{ item.price * item.num }}</div>

                    </div>
                    <div class="add">
                        <span @click.stop="changeCartNum(index, -1)">
                            <icon name="minus" scale=".8"></icon>
                        </span>
                        <span class="num">{{ item.num }}</span>
                        <span @click.stop="changeCartNum(index, 1)">
                            <icon name="plus" scale=".8"></icon>
                        </span>
                    </div>
                    <div class="remove" @click.stop="removeFromCart(index)">删除
                    </div>
                </li>
            </ul>
        </div>
        <div class="total">
            <span class="choose-icon" @click.stop="changeSelectedAll">
                <icon :name="isSelectedAll && shopCart.length > 0 ? 'check-circle' :
                    'circle'" scale="1.4"></icon>
            </span>
            <div class="content">
                合计
                 <span class="price">¥ {{ totalPrice }}</span>
                 <span class="order" @click.stop="buy">结算</span>
            </div>
        </div>
    </div>
</template>
<script>
import { MessageBox } from 'mint-ui';
export default {
    data() {
        return {
            emptycart: require("@/assets/img/1.jpg")
        }
    },
    methods: {
        // 返回
        goback() {
            this.$router.go(-1);
        },
        // 提交改变选中状态
        changeSelected(index) {
            this.$store.commit("changeSelected", index);
        },
        // 提交删除商品
        removeFromCart(index) {
            // 提示
            MessageBox.confirm('确定删除该商品吗?').then(action => {
                this.$store.commit("removeFromCart", index);
            });
        },
        // 提交改变数量
        changeCartNum(index, changeNum) {
            if (this.shopCart[index].num == 1 && changeNum == -1) {
                // 如果数量为 1 且减少数量，则删除
                this.removeFromCart(index);
            } else {
                // 修改
                this.$store.commit("changeCartNum", { index, changeNum });
            }
        },
        // 提交改变全选状态
        changeSelectedAll() {
            this.$store.commit("changeSelectedAll");
        }
    },
    computed: {
        // 获取购物车
        shopCart() {
            return this.$store.state.shopCart;
        },
        // 获取是否全选
        isSelectedAll() {
            return this.$store.getters.isSelectAll;
        },
        // 获取选中商品总价
        totalPrice() {
            return this.$store.getters.totalPrice;
        }
    }
}
</script>
<style scoped>
#shopcar {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    z-index: 3;
    background-color: #fff;
}

.main {
    position: fixed;
    width: 100%;
    overflow-y: auto;
}

.remind img {
    display: block;
    width: 100%;
}

.goods-list li {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid #ddd;
    margin-top: 2px;
}

.goods-list li .choose-icon {
    padding: 0 6px;
    color: #1296db;
}

.goods-list li img {
    margin: 4px 10px;
    width: 40px;
    height: 41px;
    border-radius: 50%;
}

.goods-list li .name {
    width: 80px;
    font-size: 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.goods-list li .price {
    font-size: 10px;
    margin-left: 10px;
    color: #e8380d;
}

.single {
    margin-top: 8px;
    line-height: 20px;
}

.all {
    line-height: 20px;
}

.add {
    position: absolute;
    top: 50%;
    right: 60px;
    transform: translateY(-50%);
}

.add span {
    float: left;
}

.add span .fa-icon {
    padding: 2px;
    color: #fff;
    background-color: #1296db;
    border-radius: 50%;
}

.add span.none .fa-icon {
    background-color: #1296db;
}

.add span.num {
    margin: 0 6px;
    line-height: 20px;
    font-size: 14px;
}

.remove {
    position: absolute;
    top: 0;
    bottom: -1px;
    right: 0;
    width: 50px;
    line-height: 50px;
    text-align: center;
    color: #fff;
    background-color: #e8380d;
}

.total {
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    border-top: 1px solid #ddd;
}

.total .choose-icon {
    padding: 0 6px;
    color: #1296db;
}

.total .content {
    margin-left: 10px;
    width: 100%;
    line-height: 40px;
}

.total .content .price {
    margin-left: 10px;
    font-size: 14px;
    color: #e8380d;
}

.total .content .order {
    float: right;
    width: 50%;
    font-size: 14px;
    text-align: center;
    color: #fff;
    background-color: #e8380d;
}</style>