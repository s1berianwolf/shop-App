import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
const router = new VueRouter({
	mode:"history",
	routes:[
		{
			name:"Home",
			path:"/",
			component:()=>import('@/views/Home.vue')
		},
		{
			name:"Category",
			path:"/category",
			component:()=>import('@/views/Category.vue')
		},
		{
			name:"Shopcar",
			path:"/shopcar",
			component:()=>import('@/views/Shopcar.vue')
		},
		{
			name:"My",
			path:"/my",
			component:()=>import('@/views/My.vue')
		},
		{
			name:"Search",
			path:"/search",
			component:()=>import('@/views/Search.vue')
		},
		{
			name:"GoodsDetail",
			path:"/goodsdetail",
			component:()=>import('@/views/GoodsDetail.vue')
		}
	]
})
export default router;