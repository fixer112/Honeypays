<template>
	<Page actionBarHidden="true">
		<FlexboxLayout class="page">
			<StackLayout class="form">
				<Image class="logo img-rounded" src="~/images/honeypays.png" width="200" height="50" />
				<Label class="header" text="MCREDIT" />

				<StackLayout class="input-field" marginBottom="25">
					<TextField class="input" hint="Account Number" keyboardType="number" autocorrect="false" autocapitalizationType="none" returnKeyType="next" fontSize="18" v-model="acc_no"/>
					<StackLayout class="hr-light" />
				</StackLayout>
				<StackLayout>
  <ActivityIndicator color="blue" :busy="busy"></ActivityIndicator>
</StackLayout>

				<StackLayout class="input-field" marginBottom="25">
					<TextField ref="password" class="input" hint="Password" secure="true" returnKeyType="done" fontSize="18" v-model="password" />
					<StackLayout class="hr-light" />
				</StackLayout>

				<Button text="Log In" @tap="submit" class="btn btn-primary m-t-20" />
				<!-- <Label text="Forgot your password?" class="login-label" @tap="test" /> -->
			</StackLayout>

        <!-- <Label class="login-label sign-up-label" @tap="test">
          <FormattedString>
            <Span text="Don’t have an account?" />
            <Span text=" Sign up" class="bold" />
          </FormattedString>
      </Label> -->

      <StackLayout class="sign-up-label">
      	<Label text="Tap to swich to Empower" class="login-label bold" @tap="submit" />
      </StackLayout>
  </FlexboxLayout>
</Page>
</template>
<script>
	import axios from 'axios';
	export default {
		data () {
			return {
				acc_no: "",
				password:"",

			};
		},
		methods:{
			test(){
				alert('Account Number:'+this.acc_no+'\nPassword:'+this.password);
			},
			submit(){
				this.busy= true;
				axios.post('https://mcredit.honeypays.com.ng/login', {
					password:this.password,
					username:this.acc_no,
				}).then(response => {
					this.busy= false;
					const appSettings = require("application-settings");
					appSettings.setString("token", response.data.user.api_token);
					const token = appSettings.getString("token");
					console.log(token);
				})
				.catch((error)=>{
					this.busy= false;
					console.log(error.response.data);
					this.danger('Error(s)', error);
				})
			}
		}
	};
</script>
<style>

</style>