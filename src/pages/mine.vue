<template>
	<div>
		<top orange=true>
			<img class="img3" slot="img1" src="../../static/imgs/home_message.png"/>
			<img class="img2" slot="img2" src="../../static/imgs/icon_setting.png"/>
		</top>
	</div>
</template>

<script>
	import Top from "../components/header"
	export default{
		name:'mine',
		components:{
			Top
		}
	}
</script>

<style>
</style>