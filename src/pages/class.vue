<template>
	<div>
		<top title="首页" black=true>
			<div class="searchBox" slot="search">
				<img class="searchImg1" src="../../static/imgs/ellipse.png"/>
				<input type="text" placeholder=""/>
			</div>
			<img class="img2" slot="img2" src="../../static/imgs/home_video_n.png"/>
		</top>
	</div>
</template>

<script>
	import Top from "../components/header"
	export default{
		name:'class',
		components:{
			Top
		}
	}
</script>

<style>
</style>