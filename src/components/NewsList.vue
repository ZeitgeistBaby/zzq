<template>
  <section>
		<div class="listview">
			
			<div class="loading" v-if="loading">
				<span>Loading...</span>
			</div>
			<div class="error-box" v-if="erro" >
				<span>网路不给力了^_^....</span>
			</div>
			<ul>
				<!-- <li v-for="item in newsData"> -->
				<li v-for="item in newsList">
					<a href="javascript:;">{{item.content}}</a>
				</li>
			</ul>
		</div>
	</section>
</template>
<script>
	export default{
		//----------------------
		// 子组件接收父组件数据
		// props:['newsData']
		//----------------------

		data(){
			return {
				newsList:[],
				loading:true,
				erro:false
			}
		},
		created(){
			this.fretchData()
		},
		methods:{
			fretchData(){
				this.$http.jsonp('https://bird.ioliu.cn/joke/rand',{
					params:{
						type:'text'
					},
					jsonp:'callback'
				}).then(res => {
					this.loading=false
					this.newsList=res.data.data
					console.log(res.data)
				},err =>{
					// alert(err)
					this.erro=true
					console.log(err.status)
				})
			}
		}
		
	}
</script>
<style scoped>
	.loading{
		height: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.error-box{
		color:red;
		font-size:16px;
		text-align: center;
		padding:20px 0;

	}
</style>
