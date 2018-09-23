<template>
	<Page class="opa" ref="opa">

		<ActionBar class="action-bar">
			<!-- <NavigationButton text="Logout" android.systemIcon="ic_menu_back" @tap="$router.back()" /> -->
			<!-- <StackLayout orientation="horizontal"> -->
				<Image src="~/images/honey.png" width="200" height="40" />
				<ActionItem @tap="logout"
				ios.systemIcon="9" ios.position="left"
				android.systemIcon="ic_lock_power_off" android.position="actionBar" />
				<!-- <Label text="ativeScript" fontSize="24" verticalAlignment="center" /> -->
				<!--  </StackLayout> -->
			</ActionBar>
			<GridLayout class="page">

<!-- <StackLayout>
<ActivityIndicator color="#8A2BE2" :busy="busy" :visibility="busy ? 'visible' : 'collapse'" row="1" verticalAlignment="center" horizontalAlignment="center"></ActivityIndicator>

</StackLayout> -->


<TabView androidTabsPosition="bottom" class="tab-view">

	<TabViewItem title="Home" iconSource="res://baseline_home_white_24">

		<!-- <Label text="user" @tap="logout"/> -->
		<!-- <ScrollView> -->
			<ScrollView>
				<StackLayout>

					<StackLayout class="user-header">
						<Image :src="'https://mcredit.honeypays.com.ng/public/'+user.passport" class="user-avatar" />
						<Label class="user-header-text var" :text="user.name" />
						<Label class="user-header-footnote var" :text="user.username" />
					</StackLayout>



					<StackLayout margin="5" borderRadius="10">
						<StackLayout backgroundColor="#fafafa" padding="10">
							<Label text="Savings Balance" class="name"></Label>
							<Label textWrap="true" :text="currency(user.savings_balance)" style="color: #c40404;text-align: right;" class="desc"></Label>
						</StackLayout>
					</StackLayout>

					<StackLayout margin="5" borderRadius="10">
						<StackLayout backgroundColor="#fafafa" padding="10">
							<Label text="Loan Balance" class="name"></Label>
							<Label textWrap="true" :text="currency(user.loan_balance)" style="color: #c40404;text-align: right;" class="desc"></Label>
						</StackLayout>
					</StackLayout>

					<StackLayout margin="5" borderRadius="10">
						<StackLayout backgroundColor="#fafafa" padding="10">
							<Label text="Residetial Address" class="name"></Label>
							<Label textWrap="true" :text="user.resi_add" style="color: #c40404;text-align: right;" class="desc"></Label>
						</StackLayout>
					</StackLayout>

					<StackLayout margin="5" borderRadius="10">
						<StackLayout backgroundColor="#fafafa" padding="10">
							<Label text="Business Address" class="item-name"></Label>
							<Label textWrap="true" :text="user.busi_add" style="color: #c40404;text-align: right;" class="item-desc"></Label>
						</StackLayout>
					</StackLayout>

					<StackLayout margin="5" borderRadius="10">
						<StackLayout backgroundColor="#fafafa" padding="10">
							<Label text="Nature of business" class="item-name"></Label>
							<Label textWrap="true" :text="user.nature_add" style="color: #c40404;text-align: right;" class="item-desc"></Label>
						</StackLayout>
					</StackLayout>

					<StackLayout margin="5" borderRadius="10">
						<StackLayout backgroundColor="#fafafa" padding="10">
							<Label text="Phone Number" class="item-name"></Label>
							<Label textWrap="true" :text="user.number" style="color: #c40404;text-align: right;" class="item-desc"></Label>
						</StackLayout>
					</StackLayout>


					<v-template if="loan!='' && loan_pending !=''">
						<StackLayout margin="5" borderRadius="10">
							<StackLayout backgroundColor="#fafafa" padding="10">
								<Label text="Loan Application Date" class="item-name"></Label>
								<Label textWrap="true" :text="loan.created_at" style="color: #c40404;text-align: right;" class="item-desc"></Label>
							</StackLayout>
						</StackLayout>

						<StackLayout margin="5" borderRadius="10">
							<StackLayout backgroundColor="#fafafa" padding="10">
								<Label text="Loan Due Date" class="item-name"></Label>
								<Label textWrap="true" :text="loan.due_date" style="color: #c40404;text-align: right;" class="item-desc"></Label>
							</StackLayout>
						</StackLayout>

						<StackLayout v-if="due != ''" margin="5" borderRadius="10">
							<StackLayout backgroundColor="#fafafa" padding="10">
								<Label text="Week Due Count" class="item-name"></Label>
								<Label textWrap="true" :text="due" style="color: #c40404;text-align: right;" class="item-desc"></Label>
							</StackLayout>
						</StackLayout>

						<StackLayout margin="5" borderRadius="10">
							<StackLayout backgroundColor="#fafafa" padding="10">
								<Label text="Loan verification Remark" class="item-name"></Label>
								<Label textWrap="true" :text="loan.veri_remark" style="color: #c40404;text-align: right;" class="item-desc"></Label>
							</StackLayout>
						</StackLayout>

						<StackLayout margin="5" borderRadius="10">
							<StackLayout backgroundColor="#fafafa" padding="10">
								<Label text="Loan Category" class="item-name"></Label>
								<Label textWrap="true" :text="currency(loan.loan_category)" style="color: #c40404;text-align: right;" class="item-desc"></Label>
							</StackLayout>
						</StackLayout>
					</v-template>


					<!-- <GridLayout row="*" :visibility="busy ? 'visible' : 'collapse'"> -->
						<!-- <ActivityIndicator color="#8A2BE2" :busy="busy" :visibility="busy ? 'visible' : 'collapse'" rowSpan="1" colSpan="1" row="0" column="0"></ActivityIndicator> -->
						<!-- 	</GridLayout> -->
					</StackLayout>
				</ScrollView>
				<!-- </ScrollView> -->


			</TabViewItem>
			<TabViewItem title="History" iconSource="res://baseline_history_white_24">

				<StackLayout>



					<ListView class="list-group" for="history in historys">
						<v-template>
							<ScrollView orientation="horizontal">

								<AbsoluteLayout backgroundColor="#fafafa" class="list-group-item">
									<StackLayout left="10" top="10">
										<Label :text="history.type" class="uppercase" fontWeight="bold" :color="color(history.credit)"></Label>
										<Label :text="'Date: '+history.updated_at" fontStyle="italic" fontSize="10"></Label>
										<Label :text="'Description: '+history.description"></Label>
										<Label :text="'Recieved by: '+history.recieved_by"></Label>
									</StackLayout>

									<StackLayout left="280" top="40">
										<Label :text="currency(history.credit>0? history.credit:history.debit)" :color="color(history.credit)"></Label>
									</StackLayout>

								</AbsoluteLayout>

							</ScrollView>
						</v-template>

					</ListView>

				</StackLayout>

			</TabViewItem>
			<TabViewItem title="Withdraw" iconSource="res://baseline_money_white_24">
				<FlexboxLayout class="page">
					<StackLayout class="empower">

						<StackLayout class="input-field" marginBottom="0">
							<TextField class="input" hint="Amount" keyboardType="number" autocorrect="false" autocapitalizationType="none" returnKeyType="done" fontSize="18" v-model="amount" :isEnabled="!busy"/>
							<StackLayout class="hr-light" />
						</StackLayout>

						<!-- <StackLayout>
							<ActivityIndicator color="#8A2BE2" :busy="busy"></ActivityIndicator>
						</StackLayout> -->

						<Button text="Request Widrawal" @tap="withdraw" class="btn btn-primary" marginLeft="20" marginRight="20" :isEnabled="!busy"/>

					</StackLayout>
				</FlexboxLayout>


			</TabViewItem>
			<TabViewItem title="Guarantor" iconSource="res://baseline_person_pin_white_24">

				<ScrollView>
					<StackLayout>
						<StackLayout margin="5" borderRadius="10">
							<ScrollView orientation="horizontal">
								<StackLayout backgroundColor="#fafafa" padding="10">
									<AbsoluteLayout>
										<StackLayout top="10" left="10">
											<Image :src="'https://mcredit.honeypays.com.ng/public/'+user.kin_passport" class="thumb img-circle user-avatar"></Image>
										</StackLayout>
										<StackLayout top="10" left="120">
											<Label  text="NEXT OF KIN" paddingBottom="10" class="name"></Label>
											<Label  :text="'Name: '+user.kin_name" style="color: #c40404" class="desc" fontSize="12"></Label>
											<Label  :text="'Address: '+user.kin_add" paddingBottom="5" style="color: #c40404" class="desc" fontSize="12"></Label>
											<Label  :text="'Relationship: '+user.kin_relation" paddingBottom="5" style="color: #c40404" class="desc" fontSize="12"></Label>
											<Label  :text="'Mobile Number: '+user.kin_number" paddingBottom="5" style="color: #c40404" class="desc" fontSize="12"></Label>
											<Label  :text="'Verification remark: '+user.kin_verify" paddingBottom="5" :color="user.kin_verify =='Approved' ? 'green' : 'red'" class="desc" fontSize="12"></Label>
										</StackLayout>
									</AbsoluteLayout>
								</StackLayout>
							</ScrollView>
						</StackLayout>

						<StackLayout margin="5" borderRadius="10">
							<ScrollView orientation="horizontal">
								<StackLayout backgroundColor="#fafafa" padding="10">
									<AbsoluteLayout>
										<StackLayout top="10" left="10">
											<Image :src="'https://mcredit.honeypays.com.ng/public/'+user.gara1_passport" class="thumb img-circle user-avatar"></Image>
										</StackLayout>
										<StackLayout top="10" left="120">
											<Label  text="First Garantor" paddingBottom="10" class="name"></Label>
											<Label  :text="'Name: '+user.gara1_name" style="color: #c40404" class="desc" fontSize="12"></Label>
											<Label  :text="'Address: '+user.gara1_add" paddingBottom="5" style="color: #c40404" class="desc" fontSize="12"></Label>
											<Label  :text="'Occupation: '+user.gara1_occupation" paddingBottom="5" style="color: #c40404" class="desc" fontSize="12"></Label>
											<Label  :text="'Mobile Number: '+user.gara1_number" paddingBottom="5" style="color: #c40404" class="desc" fontSize="12"></Label>
											<Label  :text="'Verification remark: '+user.gara1_verify" paddingBottom="5" :color="user.gara1_verify =='Approved' ? 'green' : 'red'" class="desc" fontSize="12"></Label>
										</StackLayout>
									</AbsoluteLayout>
								</StackLayout>
							</ScrollView>
						</StackLayout>



						<StackLayout margin="5" borderRadius="10">
							<ScrollView orientation="horizontal">
								<StackLayout backgroundColor="#fafafa" padding="10">
									<AbsoluteLayout>
										<StackLayout top="10" left="10">
											<Image :src="'https://mcredit.honeypays.com.ng/public/'+user.gara2_passport" class="thumb img-circle user-avatar"></Image>
										</StackLayout>
										<StackLayout top="10" left="120">
											<Label  text="Second Garantor" paddingBottom="10" class="name"></Label>
											<Label  :text="'Name: '+user.gara2_name" style="color: #c40404" class="desc" fontSize="12"></Label>
											<Label  :text="'Address: '+user.gara2_add" paddingBottom="5" style="color: #c40404" class="desc" fontSize="12"></Label>
											<Label  :text="'Occupation: '+user.gara2_occupation" paddingBottom="5" style="color: #c40404" class="desc" fontSize="12"></Label>
											<Label  :text="'Mobile Number: '+user.gara2_number" paddingBottom="5" style="color: #c40404" class="desc" fontSize="12"></Label>
											<Label  :text="'Verification remark: '+user.gara2_verify" paddingBottom="5" :color="user.gara2_verify =='Approved' ? 'green' : 'red'" class="desc" fontSize="12"></Label>
										</StackLayout>
									</AbsoluteLayout>
								</StackLayout>
							</ScrollView>
						</StackLayout>
					</StackLayout>
				</ScrollView>

			</TabViewItem>
			<TabViewItem title="Password" iconSource="res://baseline_lock_white_24">
				<FlexboxLayout class="page">
					<StackLayout class="empower">

						<StackLayout class="input-field" marginBottom="15">
							<TextField class="input" hint="Old Password" secure="true" autocorrect="false" autocapitalizationType="none" returnKeyType="next" fontSize="18" v-model="old_pass" :isEnabled="!busy"/>
							<StackLayout class="hr-light" />
						</StackLayout>


						<StackLayout class="input-field" marginBottom="15">
							<TextField class="input" hint="New Password" secure="true" autocorrect="false" autocapitalizationType="none" returnKeyType="next" fontSize="18" v-model="new_pass" :isEnabled="!busy"/>
							<StackLayout class="hr-light" />
						</StackLayout>

						<!-- <StackLayout>
							<ActivityIndicator color="#8A2BE2" :busy="busy"></ActivityIndicator>
						</StackLayout> -->

						<Button text="Submit" @tap="change_pass" class="btn btn-primary" marginLeft="20" marginRight="20" :isEnabled="!busy"/>

					</StackLayout>
				</FlexboxLayout>

			</TabViewItem>

		</TabView>
	<!-- <StackLayout :visibility="busy ? 'visible' : 'collapse'"/>
	<GridLayout row="*" :visibility="busy ? 'visible' : 'collapse'">
	<ActivityIndicator color="#8A2BE2" :busy="busy" rowSpan="3"></ActivityIndicator>
</GridLayout> -->

</GridLayout>
</Page>
</template>
<script>
	import axios from 'axios';
	import * as appSettings from 'tns-core-modules/application-settings';
	import * as app from 'tns-core-modules/application';
	import { isAndroid } from 'tns-core-modules/platform';
	import Login from './Login';
	import Land from '../LandPage';

	export default {

		data () {
			return {
				loan:"",
				historys:"",
				pending:"",
				loan_pending:"",
				user:"",
				amount:"",
				due:"",
				info:[],
				old_pass:"",
				new_pass:"",


			};
		},
/*props:{
info:Object,
},*/
methods:{
/*loan_chk(){
if (loan!='' && loan.veri_remark) {

}
},*/
onFrameLoaded () {
	console.log('frameloaded');
	app.android.on('activityBackPressed', args => {
		console.log('back pressed')
	})
},

change_pass(){
	if (this.old_pass == '' || this.new_pass =='') {
		return alert('All fields are required');
	}
	if (this.check_con()) {return}
	if (this.check_tym()) {return}
	this.busy= true;
	this.show();

	axios.put('https://mcredit.honeypays.com.ng/customer/changepass',{
		old_password:this.old_pass,
		new_password:this.new_pass,
	})
	.then(response => {
		this.hide();
		this.busy= false;
		console.log(response.data);
		this.old_pass ="";
		this.new_pass = "";
		alert(response.data.message);
})
.catch((error)=>{
	this.hide();
	this.busy= false;
	console.log(error.response.data);
	this.danger('Error(s)', error);
})
},
withdraw(){
	if (this.amount <= 0 || this.amount =='') {
		return alert('Amount must be greater than 0');
	}
	if (this.check_con()) {return}
	if (this.check_tym()) {return}
	this.busy= true;
	this.show();
	axios.post('https://mcredit.honeypays.com.ng/customer/withdraw',{
		amount:this.amount,
	})
	.then(response => {
		this.hide();
		this.busy= false;
		console.log('withdraw successfull');
		this.amount = '';
		alert(response.data.message);
})
.catch((error)=>{
	this.hide();
	this.busy= false;
	console.log(error.response.data);
	this.danger('Error(s)', error);
})
},
logout(){
	this.busy= true;
	this.show();
axios.post('https://mcredit.honeypays.com.ng/logout')
.then(response => {
	this.busy= false;
	this.hide();
	appSettings.setNumber("start", 0);
	console.log('logged out');
		this.$navigateTo(Land,{
		clearHistory:true,
		//backstackVisible:false,
	});
})
.catch((error)=>{
	this.busy= false;
	this.hide();
	console.log(error.response.data);
	this.danger('Error(s)', error);
})
},
color(value){
	value = value > 0 ? 'green':'red';
	return value;
},
currency(value){

	return 'N'+parseFloat(value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
},

},
created(){
	if (this.check_con()) {return}
	if (this.check_tym()) {return}
	this.show();
	//this.$refs.opa.nativeView.class = "opa";
/*var token = '0gIFl64pbBCIKtScsly5Mcx0m3fnFGtM2Y2CuRtoTviwP6mO5akJOQokXKqt';
axios.defaults.headers.common['Authorization'] = 'Bearer '+token;*/
axios.get('https://mcredit.honeypays.com.ng/customer')
.then(response => {
	this.info = response.data;
	this.loan = response.data.loan;
	this.user = response.data.user;
	this.due = response.data.due;
	this.historys =  response.data.historys;
	this.loan_pending = response.data.loan_pending;
	this.hide();
	//this.$refs.opa.nativeView.class= "";
//alert('loaded');



//console.log('customer loaded');
//console.log(response.data);

})
.catch((error)=>{
	this.hide();
	console.log(error.response.data);
	this.danger('Error(s)', error);
//alert('not loaded');
})
}
};
</script>
<style scoped>
.action-bar {
	background-color: #00bfff;
}

.anim-in{    
/*	background-image: ~/images/mcredit_bg.jpg;
background-repeat: no-repeat;
background-position: center;
background-size: cover;*/
animation-name: intro-element-intro;
animation-duration: 2;
animation-fill-mode: forwards;
animation-iteration-count: 1;
animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);    
}
@keyframes intro-element-intro {
	0% {
		opacity:0;
		transform: translate(1000, 500);
		animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
	}
	100% {
		opacity:1;
		animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1); 
		transform: translate(0, 0) ;        
	}
}


</style>