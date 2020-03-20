<template>
	<div>
		<div :class="{'topWrap':true,'gray':gray,'black':black,'orange':orange}">
			<slot name="img1"></slot>
			<slot name="header"></slot>
			<slot name="search"></slot>
			<slot name="img2"></slot>
			<slot name="img3"></slot>
		</div>
	</div>
</template>

<script>
	export default{
		name:"top",
		props:["title1","title2","gray","black","orange"]
	}
</script>

<style>
	.topWrap{
		width: 100%;
	    height: 50px;
		/*border: 1px solid red;*/
		text-align: center;
		line-height: 50px;
		position: relative;
		background: whiite;
	}
	.topWrap .img1{
		width: 20px;
		position: absolute;
		left: 1rem;
		top: 1rem;
	}
	.topWrap .img2{
		width: 20px;
		position: absolute;
		right: 1rem;
		top: 1rem;
	}
	.topWrap .img3{
		width: 20px;
		position: absolute;
		right: 3rem;
		top: 1rem;
	}
	/*header slot 样式*/
			.topWrap .searchBox{
				width: 80%;
				height: 35px;
				background: white;
				border-radius: 5px;
				position: absolute;
				top:8px;
				left: 20px;
			}
			.topWrap .searchBox input{
				position: absolute;
				width: 90%;
				height: 35px;
				top:0px;
				left: 30px;
				border: none;
			}
			
			.topWrap .searchBox .searchImg1{
				position: absolute;
				left: 0;
				width: 22px;
				top:7px;
				left: 5px;
			}
			.topWrap .searchBox .searchImg2{
				position: absolute;
				right: 0;
				width: 22px;
				top:7px;
				right: 5px;
			}
			.gray{
				background: rgb(247,247,247);
			}
			.black{
				background: rgb(78,78,78);
			}
			.orange{
				background: rgb(255,192,0);
			}
</style>