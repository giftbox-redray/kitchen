<template>
	<div>
		<top>
			<img class="img1" slot="img1" src="../../static/imgs/cook_camera_highlight.png"/>
			<span slot="header">广场</span>
			<span slot="header">关注</span>
			<img class="img2" slot="img2" src="../../static/imgs/home_message.png"/>
		</top>
	</div>
</template>

<script>
	import Top from "../components/header"
	export default{
		name:'talk',
		components:{
			Top
		}
	}
</script>

<style>
</style>