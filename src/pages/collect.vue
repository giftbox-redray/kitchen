<template>
	<div>
		<top>
			<span slot="header">菜谱</span>
			<span slot="header">课程</span>
			<img class="img2" slot="img2" src="../../static/imgs/ellipse.png"/>
		</top>
	</div>
</template>

<script>
	import Top from "../components/header"
	export default{
		name:'collect',
		components:{
			Top
		}
	}
</script>

<style>
</style>