<template>
	<Page actionBarHidden="true" class="head">
		<FlexboxLayout ref="page" class="">
			<StackLayout class="form">
				<Image class="logo img-rounded" src="~/images/honeypays.png"/>
				<Label class="header" text="MCREDIT" />

				<StackLayout class="input-field" marginBottom="25">
					<TextField class="input" hint="Account Number" keyboardType="number" autocorrect="false" autocapitalizationType="none" returnKeyType="next" fontSize="18" v-model="acc_no" :isEnabled="!busy"  paddingTop="10" paddingBottom="10"/>
					<StackLayout class="hr-light" />
				</StackLayout>
				<!-- <StackLayout>
					<ActivityIndicator color="#8A2BE2" :busy="busy"></ActivityIndicator>
				</StackLayout> -->

				<StackLayout class="input-field" marginBottom="25">
					<TextField ref="password" class="input" hint="Password" secure="true" returnKeyType="done" fontSize="18" v-model="password" :isEnabled="!busy" paddingTop="10" paddingBottom="10"/>
					<StackLayout class="hr-light" />
				</StackLayout>

				<Button text="Log In" @tap="submit" class="btn btn-primary m-t-20" :isEnabled="!busy"/>
				<!-- <Label text="Forgot your password?" class="login-label" @tap="test" /> -->
			</StackLayout>

        <!-- <Label class="login-label sign-up-label" @tap="test">
          <FormattedString>
            <Span text="Don’t have an account?" />
            <Span text=" Sign up" class="bold" />
          </FormattedString>
      </Label> -->

      <StackLayout class="sign-up-label">

      	<Label text="Tap to swich to Empower" class="login-label bold" @tap="empower" :isEnabled="!busy"/>
      </StackLayout>
  </FlexboxLayout>
</Page>
</template>
<script>
import axios from 'axios';
import * as appSettings from 'tns-core-modules/application-settings';
import * as application from "application";
import E_Login from '../empower/Login';
import Home from './Home';
import Vue from 'nativescript-vue';
//import {LoadingIndicator} from "nativescript-loading-indicator";

export default {

	data () {
		return {
			acc_no: "",
			password:"",
			user:"",

		};
	},
	methods:{
		empower(){
			this.$navigateTo(E_Login,{
				clearHistory:true,
				//backstackVisible:false,
			})
		},

		get_cus(){
		this.show('Loading customer data....');
  axios.get('https://mcredit.honeypays.com.ng/customer')
  .then(response => {
  	this.info = response.data;
  	var info = this.info.toJSON();
  	//this.$store.state.info = this.info; //.commit('change_info', this.info);
  			Vue.prototype.$info = response.data;
  			console.log('cus loaded');
     console.log(info.user);
     this.hide();
     //this.$router.push('/mcredit/home');
  })
  .catch((error)=>{
  	this.hide();
  	console.log(error.response.data);
  	this.danger('Error(s)', error);
  })

},
		
		submit(){
		
			if (this.username =='' || this.password =='') {
				return alert('All fields are required');
			}
			if (this.check_con()) {return}
			this.show();
			this.busy= true;
			axios.post('https://mcredit.honeypays.com.ng/login', {
				password:this.password,
				username:this.acc_no,
			}).then(response => {
				this.hide();
				this.busy= false;
				var token = response.data.user.api_token;
				axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
				appSettings.setNumber("start", new Date().getTime());
				this.$navigateTo(Home,{
				clearHistory:true,
				//backstackVisible:false,
			});
			})
			.catch((error)=>{
				this.hide();
				this.busy= false;
				console.log(error.response.data);
				this.danger('Error(s)', error);
			})
		}
	},
	mounted(){

		this.$refs.page.nativeView.class = "page anim-fade-in";
		//console.log(this.$refs.password.nativeView.addClass = 'test');
		//console.log(this.$refs.password.nativeView.class);
	}
};
</script>
<style scoped>

.input {
  font-size: 18;
  placeholder-color: #3f4040;
}
.input-field{
}
.header {
  horizontal-align: center;
  font-size: 25;
  font-weight: 600;
  margin-bottom: 70;
  text-align: center;
  color: #00bfff;
}

.head{
			/*	background-image: ~/images/mcredit_bg.jpg;
				background-repeat: no-repeat;
				background-position: center;
				background-size: cover;*/
}

.anim-fade-in{
				background-image: ~/images/mcredit_bg.jpg;
				background-repeat: no-repeat;
				background-position: center;
				background-size: cover;
				/*opacity: 0.2;*/
				/*background-color: transparent;*/
    animation-name: intro-element-intro;
    animation-duration: 2;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);    
}
@keyframes intro-element-intro {
    0% {
        opacity:0;
        transform: translate(0, 1000);
        animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
    }
    100% {
        opacity:1;
        animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1); 
        transform: translate(0, 0) ;        
    }
}

</style>