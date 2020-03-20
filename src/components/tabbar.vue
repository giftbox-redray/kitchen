<template>
	<div class="tabbarWrap">
		<item title="首页" mark="home" :active="sel" @myevent="getVal">
			<img slot="normalImg" src="../../static/imgs/icon_main_home_normal.png"/>
			<img slot="activeImg" src="../../static/imgs/icon_main_home_sel.png"/>
		</item>
		<item title="课堂" mark="class" :active="sel" @myevent="getVal">
			<img slot="normalImg" src="../../static/imgs/icon_main_course_normal.png"/>
			<img slot="activeImg" src="../../static/imgs/icon_main_course_sel.png"/>
		</item>
		<item title="食话" mark="talk" :active="sel" @myevent="getVal">
			<img slot="normalImg" src="../../static/imgs/icon_main_talk_normal.png"/>
			<img slot="activeImg" src="../../static/imgs/icon_main_talk_sel.png"/>
		</item>
		<item title="收藏" mark="collect" :active="sel" @myevent="getVal">
			<img slot="normalImg" src="../../static/imgs/icon_main_collection.png"/>
			<img slot="activeImg" src="../../static/imgs/icon_main_collection_sel.png"/>
		</item>
		<item title="我的" mark="mine" :active="sel" @myevent="getVal">
			<img slot="normalImg" src="../../static/imgs/icon_main_mine_normal.png"/>
			<img slot="activeImg" src="../../static/imgs/icon_main_mine_sel.png"/>
		</item>
	</div>
</template>

<script>
	import Item from "./item"
	export default{
		name:"tabbar",
		components:{
			Item
		},
		data(){
			return {
				sel:"home"
			}
		},
		methods:{
			getVal(value){
				this.sel = value;
			}
		}
	}
</script>

<style>
	.tabbarWrap{
		position: fixed;
		bottom: 0;
		width: 100%;
		/*height: 50px;*/
		background: white;
	}
</style>