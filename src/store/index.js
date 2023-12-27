import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		goodsDetail: {},
		shopCart: []

	},
	mutations: {
		setGoodsDetail(state, goods) {
			this.state.goodsDetail = goods;
		},
		addToCart(state, goods) {
			var shopCart = state.shopCart;
			var flag = true;
			for (var i = 0; i < shopCart.length; i++) {
				if (shopCart[i].id == goods.id) {
					shopCart[i].num++;
					flag = false;
					break;
				}
			}
			if (flag) {
				Vue.set(goods, 'num', 1);
				Vue.set(goods, 'selected', false);
				shopCart.push(goods);
			}
		},
		changeSelected(state, index) {
			state.shopCart[index].selected = !state.shopCart[index].selected;
		},
		removeFromCart(state, index) {
			state.shopCart.splice(index, 1);
		},
		changeCartNum(state, playload) {
			var index = playload.index;
			var changeNum = playload.changeNum;
			state.shopCart[index].num += changeNum;
		},
		changeSelectedAll(state) {
			var flag = this.getters.isSelectAll;
			for (var i = 0; i < state.shopCart.length; i++) {
				state.shopCart[i].selected = !flag;
			}
		}

	},
	getters: {
		isSelectAll(state) {
			for (var i = 0; i < state.shopCart.length; i++) {
				if (!state.shopCart[i].selected) {
					return false;
				}
			}
			return true;
		},
		totalprice(state) {
			var sum = 0;
			for (var i = 0; i < state.shopCart.length; i++) {
				if (state.shopCart[i].selected) {
					sum += state.shopCart[i].price * state.shopCart[i].num;
				}
			}
			return sum;
		}
	}


})
export default store