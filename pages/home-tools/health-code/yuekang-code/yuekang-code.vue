<template>
	<view class="container">
		<view class="header flex align-center">
			<text class="city">广州</text>	 
			<text class="triangle-down"></text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.container {
		background-color: #4393f4;
		padding: 40rpx;
	}
	
	.header {
		font-size: 35rpx;
		color:  white;
		.city {
			margin-right: 10rpx;
		}
		.triangle-down {
			margin-top: 15rpx;
			border-top-color: white;
		}
	}
</style>
