<template>
	<Page  class="page-layout"  @loaded="onLoaded" actionBarHidden="true">
		<StackLayout verticalAlignment="center" horizontalAlignment="center">
			<Image class="anime anim-fade-in" src="~/images/logo2.png" width="150" height="250" />
		</StackLayout>
</Page>

</template>
<script>
import axios from 'axios';
import * as appSettings from 'tns-core-modules/application-settings';
import * as application from "application";
import m_Login from './mcredit/Login';
import e_Login from './empower/Login';
import e_Home from './empower/Home';
import Land from './LandPage';
//import Vue from 'nativescript-vue';
//import {LoadingIndicator} from "nativescript-loading-indicator";

export default {

	data () {
		return {
		};
	},
	methods:{
		onLoaded(){
			
			var _this= this;
		setTimeout(function(){
			//_this.$router.push('/mcredit/login');
			_this.$navigateTo(Land,{
				clearHistory:true,
			})

		}, 3000);
		},
	},
	mounted(){
		//this.$router.push('/mcredit/home');
		
	}
};
</script>
<style scoped>
.page-layout {
   background-color: white;

}
.anim{
	background-color: red;
}
.anim-fade-in{
    animation-name: intro-element-intro;
    animation-duration: 1;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: linear;    
}
@keyframes intro-element-intro {
    from {
        /*opacity:0;*/
        animation-timing-function: linear;
        transform: rotate(0);
    }
    to {
        /*opacity:1;*/
        animation-timing-function: linear;
        transform: rotate(359); ;        
    }
}

</style>