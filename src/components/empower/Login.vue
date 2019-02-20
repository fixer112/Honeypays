<template>
	<Page actionBarHidden="true" class="head">
		<FlexboxLayout ref="page" class="">
			<!-- <StackLayout> -->
				<!-- <ScrollView scrollBarIndicatorVisible="false"> -->
					<StackLayout class="form">

							<FilterableListpicker ref="list" blur="dark" hintText="Type to filter..." :source="list" @itemTapped="Tapped($event)"></FilterableListpicker>
						<StackLayout>
							<Image class="logo" src="~/images/honeypays.png" />
							<Label class="header" text="EMPOWER" />
						</StackLayout>
						<StackLayout>
							<ScrollView>


							<StackLayout :height="height">
								<ScrollView>
									<StackLayout>

										<StackLayout v-show="!isLoggingIn" class="input-field" marginBottom="25">
											<TextField class="input" hint="*Full Name" autocorrect="false" autocapitalizationType="none" v-model="name" returnKeyType="next" fontSize="18" :isEnabled="!busy"/>
											<StackLayout class="hr-light" />
										</StackLayout>


										<StackLayout class="input-field" marginBottom="25">
											<TextField class="input" hint="*Email" keyboardType="email" autocorrect="false" autocapitalizationType="none" v-model="email" returnKeyType="next" @returnPress="focusPassword" fontSize="18" :isEnabled="!busy"/>
											<StackLayout class="hr-light" />
										</StackLayout>

										<StackLayout class="input-field" marginBottom="25">
											<TextField ref="password" class="input" hint="*Password" secure="true" v-model="password" :returnKeyType="isLoggingIn ? 'done' : 'next'" @returnPress="focusConfirmPassword" fontSize="18" :isEnabled="!busy"/>
											<StackLayout class="hr-light" />
										</StackLayout>

										<StackLayout v-show="!isLoggingIn" class="input-field" marginBottom="25">
											<TextField ref="confirmPassword" class="input" hint="*Confirm password" secure="true" v-model="password_confirmation" returnKeyType="done" fontSize="18" :isEnabled="!busy"/>
											<StackLayout class="hr-light" />
										</StackLayout>

										<StackLayout v-show="!isLoggingIn" class="input-field" marginBottom="25">
											<TextField class="input" hint="Mentor dafault 08172303502" keyboardType="number" autocorrect="false" autocapitalizationType="none" v-model="mentor" returnKeyType="done" fontSize="16" :isEnabled="!busy"/>
											<StackLayout class="hr-light" />
										</StackLayout>

										<StackLayout v-show="!isLoggingIn" class="input-field" marginBottom="25">
											<TextField class="input" hint="*Mobile Number" keyboardType="number" autocorrect="false" autocapitalizationType="none" v-model="number" returnKeyType="done" fontSize="18" :isEnabled="!busy"/>
											<StackLayout class="hr-light" />
										</StackLayout>

										<StackLayout v-show="!isLoggingIn" class="input-field" marginBottom="25">
											<TextField class="input" hint="*Account Number" keyboardType="number" autocorrect="false" autocapitalizationType="none" v-model="acc_no" returnKeyType="done" fontSize="18" :isEnabled="!busy"/>
											<StackLayout class="hr-light" />
										</StackLayout>

										<StackLayout v-show="!isLoggingIn" class="input-field" marginBottom="25">
											<TextField class="input" hint="*Account Name" autocorrect="false" autocapitalizationType="none" v-model="acc_name" returnKeyType="next" fontSize="18" :isEnabled="!busy"/>
											<StackLayout class="hr-light" />
										</StackLayout>


										<StackLayout v-show="!isLoggingIn" class="input-field" marginBottom="25">
											<TextField class="input" hint="*Bank Name" :text="bank_name" editable="false" @tap="select('bank')" fontSize="18"/>
											<StackLayout class="hr-light" />
										</StackLayout>

										<StackLayout v-show="!isLoggingIn" class="input-field" marginBottom="25">
											<TextField class="input" hint="*Address" autocorrect="false" autocapitalizationType="none" v-model="addr" returnKeyType="next" fontSize="18" :isEnabled="!busy"/>
											<StackLayout class="hr-light" />
										</StackLayout>

										<StackLayout v-show="!isLoggingIn" class="input-field" marginBottom="25">
											<TextField class="input" hint="*City" autocorrect="false" autocapitalizationType="none" v-model="city" returnKeyType="next" fontSize="18" :isEnabled="!busy"/>
											<StackLayout class="hr-light" />
										</StackLayout>

										<StackLayout v-show="!isLoggingIn" class="input-field" marginBottom="25">
											<TextField class="input" hint="*State" autocorrect="false" autocapitalizationType="none" v-model="state" returnKeyType="done" fontSize="18" :isEnabled="!busy"/>
											<StackLayout class="hr-light" />
										</StackLayout>

										<!-- mode id -->
										<StackLayout v-show="!isLoggingIn" class="input-field" marginBottom="25">
											<TextField class="input" hint="*Mode of identity" :text="mode_id" editable="false" @tap="select('mode')" fontSize="18"/>
											<StackLayout class="hr-light" />
											<!-- <FilterableListpicker ref="mode" blur="dark" hintText="Type to filter..." :source="mode_list" @itemTapped="modeTapped($event)"></FilterableListpicker> -->
										</StackLayout>

										<StackLayout v-show="!isLoggingIn" class="input-field" marginBottom="5">
											<Image class="log" :src="img" style="width: 150; height: 100" ref="img" v-show="img!=''"/>
											<TextField class="input" :hint="identity" editable="false" @tap="image" fontSize="18"/>
											<StackLayout class="hr-light" />
										</StackLayout>

										<!--  accept -->

									</StackLayout>

								</ScrollView>
							</StackLayout>
						</ScrollView>
      	 			</StackLayout>
      	

      	

      	<!-- <StackLayout> -->
      		<!-- <StackLayout> -->

      			<Button :text="isLoggingIn ? 'Log In' : 'Sign Up'" @tap="submit" class="btn btn-primary m-t-5" :isEnabled="!busy"/>

      			<Label v-show="isLoggingIn" text="Forgot your password?" class="login-label" @tap="forgotPassword" :isEnabled="!busy"/>
      		<!-- </StackLayout> -->


      		<!-- <StackLayout> -->
      			<Label class="login-label sign-up-label" @tap="toggleForm" :isEnabled="!busy" >
      				<FormattedString>
      					<Span :text="isLoggingIn ? 'Don’t have an account? ' : 'Back to Login'" />
      					<Span :text="isLoggingIn ? 'Sign up' : ''" class="bold" />
      				</FormattedString>
      			</Label>
      		<!-- </StackLayout> -->



      		<!-- <StackLayout class="sign-up-label" marginTop="30"> -->

      			<Label text="Tap to swich to Mcredit" class="login-label bold" @tap="mcredit" :isEnabled="!busy"/>
      		<!-- </StackLayout> -->

      	<!-- </StackLayout> -->

      </StackLayout>
      <!-- </ScrollView> -->
      <!-- </StackLayout> -->


  </FlexboxLayout>
</Page>
</template>
<script>
	import axios from 'axios';
	import * as appSettings from 'tns-core-modules/application-settings';
	import * as application from "application";
	import M_Login from '../mcredit/Login';
	import E_Home from './Home';
	import Vue from 'nativescript-vue';
	import * as imagepicker from "nativescript-imagepicker";
	import * as bghttp from "nativescript-background-http";
	import * as imagesource from 'image-source';


	export default {

		data () {
			return {
				height:'auto',
				isLoggingIn:true,
				name:"",
				email:"",
				password:"",
				password_confirmation:"",
				mentor:"",
				number:"",
				acc_no:"",
				acc_name:"",
				bank_name:"",
				bank_list:[
				{"title": "Access Bank"},
				{"title": "Citibank"},
				{"title": "Diamond Bank"},
				{"title": "Ecobank Nigeria"},
				{"title": "Fidelity Bank Nigeria"},
				{"title": "First Bank of Nigeria"},
				{"title": "First City Monument Bank"},
				{"title": "Guaranty Trust Bank"},
				{"title": "Heritage Bank plc"},
				{"title": "Keystone Bank Limited"},
				{"title": "Providus Bank Plc"},
				{"title": "Skye Bank"},
				{"title": "Stanbic IBTC Bank Nigeria Limited"},
				{"title": "Standard Chartered Bank"},
				{"title": "Sterling Bank"},
				{"title": "Suntrust Bank Nigeria Limited"},
				{"title": "Union Bank of Nigeria"},
				{"title": "United Bank for Africa"},
				{"title": "Unity Bank plc"},
				{"title": "Wema Bank"},
				{"title": "Zenith Bank"}
				],
				mode_list:[
				{"title": "INTERNATIONAL PASSPORT"},
				{"title": "DRIVERS LICENSE"},
				{"title": "NATIONAL ID"},
				{"title": "VOTERS ID"},
				{"title": "BVN PRINTOUT"}
				],
				list:[],
				addr:"",
				city:"",
				state:"",
				mode_id:"",
				accept:'1',

				identity:"Tap to choose Identity(optional)",
				img:"",
				type:"",

			};
		},
		methods:{
			reset(){
				/*this.name = this.email = this.password = this.password_confirmation = mentor = this.number = this.acc_name = this.acc_no = this.bank_name = this.addr = this.city = this.state = this.mode_id = this.img = this.type = "";*/
			},
			select(type) {
		//this.list = [];
		if (type == 'bank') {
			this.list = this.bank_list;

		}else if (type=='mode') {
			this.list = this.mode_list;
		}
		this.type = type;
		this.$refs.list.nativeView.show();
	},
	Tapped(args) {
	//var t = JSON.stringify(args.selectedItem);
	console.log(args.selectedItem.title);
	if (this.type == 'bank') {
		this.bank_name = args.selectedItem.title;
	}else if (this.type == 'mode') {
		this.mode_id = args.selectedItem.title;
	}
},
passReset(email){
	this.show();
	this.busy= true;
	if (this.check_con()) {return}
	axios.post('https://empower.honeypays.com.ng/password/email', {
		email:email,
	}).then(response => {
		this.hide();
		this.busy= false;
		alert('Click the link sent to your email to reset your password');
	})
	.catch((error)=>{
		this.hide();
		this.busy= false;
		console.log(error.response.data);
		this.danger('Error(s)', error);
	})

},
forgotPassword() {
	prompt({
		title: "Forgot Password",
		message: "Enter the email address you used to register to reset your password.",
		inputType: "email",
		defaultText: "",
		okButtonText: "Ok",
		cancelButtonText: "Cancel"
	}).then((data) => {
		if (data.result) {
			var email = data.text.trim();
			//console.log(data.text.trim());
			this.passReset(email);
			
        }
    });
},
focusPassword() {
	this.$refs.password.nativeView.focus();
},
focusConfirmPassword() {
	if (!this.isLoggingIn) {
		this.$refs.confirmPassword.nativeView.focus();
	}
},
toggleForm(){
	this.isLoggingIn = !this.isLoggingIn;
	if (this.isLoggingIn) {
		this.height = 'auto';
	}else{
		this.height = '200';
	}
},
mcredit(){
	this.$navigateTo(M_Login,{
		clearHistory:true,
				//backstackVisible:false,
			})
},

submit(){
	if (this.check_con()) {return}
	var _this = this;
	if (this.isLoggingIn) {
		this.login();
	}else {
		if (this.name==""||this.email==""||this.password==""||this.password_confirmation==""||this.number==""||this.acc_no==""||this.acc_name==""||this.bank_name==""||this.addr==""||this.city==""||this.state==""||this.mode_id=="")
			{
				return alert('All * fields are reqired');
			}
		confirm('By clicking OK, you have read and understood the agreement and hereby consent to it. I also understand that 20% will be deducted from my total earning as IRM (Investment and Risk Management) fee.\n https://honeypays.com.ng/legal')
		.then(result=>{
			console.log(result);
			if (result) {
			//console.log('work');
			// if (_this.img!='') {
			// 	_this.reg();
			// }else{
			// 	_this.register();
			// }
			this.reg();
			
			}
		});
				//this.register();
			}
		},
		image(){
	this.img ="";
	var context = imagepicker.create({ mode: "single" });
	var _this = this;
	context
	.authorize()
	.then(function() {
		return context.present();
	})
	.then(function(selection) {
		selection.forEach(function(selected) {
			const ios = selected.ios;
			const android = selected.android;
			if (android) {
				_this.img = selected.android.toString();

			}else if (ios && ios.mediaType === PHAssetMediaType.Image) {

				_this.img = selected.ios.toString();
			}
	        	//console.log(selected.android.toString());
	        	/*
	        	const img = imagesource.fromFile(_this.img);
	        	const base = img.toBase64String("png");
	        	_this.base = selected;*/
	        	//console.log(_this.$refs.img);
	        	//alert(_this.base);
	        	/*selected.getImage().then(function(image)){
	        		console.log(image);
	        	}*/
	        });
	        //this.img = selection;
	        //this.identity= selection[0];

	        //console.log(selection[0]);
	    }).catch(function (e) {
	        // process error
	        console.log('error:'+e);
	    });

	},
	login(){
	//console.log('login');
	if (this.email==""||this.password=="") {
		return alert('All fields required');
	}
	this.show();
			this.busy= true;
			axios.post('https://empower.honeypays.com.ng/login', {
				email:this.email,
				password:this.password,
				version:"1.1.6",
			}).then(response => {
				this.hide();
				this.busy= false;
				//console.log(response.data);
				var token = response.data.user.api_token;
				axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
				appSettings.setNumber("start", new Date().getTime());
				appSettings.setString("email", this.email);

				var email = 'empower_'+this.email.replace('@','%');
    			this.$firebase.subscribeToTopic(email).then(() => console.log("Subscribed to "+email));
    			//console.log(email);
				this.$navigateTo(E_Home,{
				clearHistory:true,
				//backstackVisible:false,
			})
			})
			.catch((error)=>{
				this.hide();
				this.busy= false;
				console.log(error.response.data);
				this.danger('Error(s)', error);
			})
	/*this.$navigateTo(E_Home,{
		//clearHistory:true,
	})*/

},
reg(){

	if (this.mentor == "") {
		this.mentor = "08172303502";
	}
	var session = bghttp.session("image-upload");
	var request = {  
		url: "https://empower.honeypays.com.ng/register",
		method: "GET",  
		headers: {
			"Content-Type": "application/octet-stream",
			"Accept": "application/json",
		},
	};

	var params = [
	{name:'name', value:this.name},
	{name:'email', value:this.email},
	{name:'password', value:this.password},
	{name:'password_confirmation', value:this.password_confirmation},
	{name:'mentor', value:this.mentor},
	{name:'acc_no', value:this.acc_no},
	{name:'acc_name', value:this.acc_name},
	{name:'bank_name', value:this.bank_name},
	{name:'addr', value:this.addr},
	{name:'city', value:this.city},
	{name:'number', value:this.number},
	{name:'state', value:this.state},
	{name:'mode_id', value:this.mode_id},
	{name:'accept', value:this.accept},
	];
	if (this.img!='') {
		params.push({name:'identity', filename: this.img, mimeType: 'image/jpeg'});
	}
	var task = session.multipartUpload(params, request);
		//task = session.uploadFile(filePath, request);
	    task.on("responded", this.logEvent);
	   task.on("error", this.logEvent);
	   task.on("progress", this.logEvent);
	   task.on("complete", this.logEvent);
	},
	logEvent(e){
	console.log(e.eventName);
	if (e.eventName=='responded') {
		var res = JSON.parse(e.data);
		console.log('server response is:' + res);
		this.isLoggingIn = true;
		//this.reset();
		alert(res.message);
	}else if(e.eventName=='error'){
		this.busy = false;
		this.hide();
		var error = JSON.parse(e.response.getBodyAsString());
		console.log(error);
	  	this.errs(error);
	  }else if (e.eventName=='progress') {
	  	this.busy = true;
	  	this.show();
	  }else if (e.eventName=='complete') {
	  	this.busy = false;
	  	this.hide();
	  }
	},
	
},
mounted(){
	if (appSettings.getString("email")) {
			this.email = appSettings.getString("email");
		}
		console.log(appSettings.getString("email"));
	this.$refs.page.nativeView.class = "page anim-fade-in";
}
};
</script>
<style scoped>

.form{
	background: #D9ffffff;
	border-radius: 10;
	/*overflow: hidden;*/
	padding-left: 30;
	padding-right: 30;
	margin-top: 30;
	margin-bottom:30;
	/*padding-bottom: 30;*/
	vertical-align: middle;
}
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
	margin-bottom: 10;
	text-align: center;
	color: #000080;
}
.btn {
	color: #000080;
}

.btn-primary {
	background-color: #000080;
}

.btn-primary {
	border-color: #000080;
}

.btn-primary {
	color: #ffffff;
}

.btn-outline {
	border-color: #000080;
}
.head{
			/*	background-image: ~/images/mcredit_bg.jpg;
				background-repeat: no-repeat;
				background-position: center;
				background-size: cover;*/
			}

			.anim-fade-in{
				background-image: ~/images/empower_bg.jpg;
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
					transform: translate(0, -1000);
					animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
				}
				100% {
					opacity:1;
					animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1); 
					transform: translate(0, 0) ;        
				}
			}

		</style>