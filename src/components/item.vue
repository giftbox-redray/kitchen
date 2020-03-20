<template>
	<div>
		<div class="itemWrap" @click="fn()">
			<span v-show="!bol"><slot name="normalImg"></slot></span>
			<span v-show="bol"><slot name="activeImg"></slot></span>
			<p :class="{'active':bol}">{{title}}</p>
		</div>
	</div>
</template>

<script>
	export default{
		name:"item",
		computed:{
			bol(){
				if (this.mark==this.active) {
					return true;
				} else{
					return false;
				}
			}
		},
		props:["title","mark","active"],
		methods:{
			fn(){
				this.$emit("myevent",this.mark);
				this.$router.push("/"+this.mark);
			}
		}
	}
</script>

<style>
	.itemWrap{
		width: 20%;
		float: left;
		text-align: center;
	}
	.itemWrap img{
		width: 25px;
	}
	.itemWrap p.active{ 
		color:rgb(255,192,0);
	}
	.itemWrap p{ 
		font-size: 12px;
	}
</style>