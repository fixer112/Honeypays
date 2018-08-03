<template>
	<Page actionBarHidden="true">
		<FlexboxLayout class="page">
			<StackLayout class="form">
				<Image class="logo img-rounded" src="~/images/honeypays.png" width="200" height="50" />
				<Label class="header" text="MCREDIT" />

				<StackLayout class="input-field" marginBottom="25">
					<TextField class="input" hint="Account Number" keyboardType="number" autocorrect="false" autocapitalizationType="none" returnKeyType="next" fontSize="18" v-model="acc_no" :isEnabled="!busy"/>
					<StackLayout class="hr-light" />
				</StackLayout>
				<StackLayout>
					<ActivityIndicator color="#8A2BE2" :busy="busy"></ActivityIndicator>
				</StackLayout>

				<StackLayout class="input-field" marginBottom="25">
					<TextField ref="password" class="input" hint="Password" secure="true" returnKeyType="done" fontSize="18" v-model="password" :isEnabled="!busy" />
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

      	<Label text="Tap to swich to Empower" class="login-label bold" @tap="" :isEnabled="!busy"/>
      </StackLayout>
  </FlexboxLayout>
</Page>
</template>
<script>
import axios from 'axios';
import * as appSettings from 'tns-core-modules/application-settings';
import * as application from "application";
import Home from './Home';
import Vue from 'nativescript-vue';

export default {

	data () {
		return {
			acc_no: "",
			password:"",
			user:"",

		};
	},
	methods:{

		get_cus(){
  axios.get('https://mcredit.honeypays.com.ng/customer')
  .then(response => {
  	this.info = response.data;
  	this.$store.state.info = this.info; //.commit('change_info', this.info);
  	Vue.prototype.$info = response.data;
     console.log('customer loaded');
     this.$router.push('/mcredit/home');
  })
  .catch((error)=>{
  	console.log(error.response.data);
  	this.danger('Error(s)', error);
  })

},
		
		submit(){
			if (this.username =='' || this.password =='') {
				return alert('All fields are required');
			}
			this.busy= true;
			this.check_con()
			axios.post('https://mcredit.honeypays.com.ng/login', {
				password:this.password,
				username:this.acc_no,
			}).then(response => {
				this.busy= false;
				//this.user = response.data.user;
				var token = response.data.user.api_token;
				axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
				appSettings.setNumber("start", new Date().getTime());
				//this.get_cus();
				this.$router.push('/mcredit/home');
			})
			.catch((error)=>{
				this.busy= false;
				console.log(error.response.data);
				this.danger('Error(s)', error);
			})
		}
	},
	mounted(){
		//this.check_tym();
	}
};
</script>
<style scoped>
.header {
  horizontal-align: center;
  font-size: 25;
  font-weight: 600;
  margin-bottom: 70;
  text-align: center;
  color: #00bfff;
}

</style>