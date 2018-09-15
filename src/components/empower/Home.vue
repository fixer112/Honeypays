<template>
  <Page class="page">

            <ActionBar class="action-bar">
              <!-- <NavigationButton icon="~/icons/list.png" @tap="drawerTap"/> -->
              <NavigationButton icon="res://baseline_menu_white_24" @tap="drawerTap"/>
              <!-- <NavigationButton android.systemIcon="ic_menu_moreoverflow" @tap="drawerTap"/> -->
        <Image src="~/images/honey.png" width="200" height="40" />
        <ActionItem @tap="logout"
    ios.systemIcon="9" ios.position="left"
    android.systemIcon="ic_lock_power_off" android.position="actionBar" color="#fff"/>
            </ActionBar>
            

    <RadSideDrawer ref="drawer">
      <StackLayout ~drawerContent class="sidedrawer sidedrawer-content">
        <ScrollView>
        <StackLayout>
          
          <StackLayout class="hr-light"></StackLayout>
          
          <GridLayout columns="auto, *" class="sidedrawer-list-item sidedrawer-list-item-active" title="Home">
            <Image src="~/icons/home.png" class="sidedrawer-icon"/>
            <!-- <Label row="0" col="0" text="&#xf015;" class="fa sidedrawer-icon" /> -->
            <Label row="0" col="1" text="Home" class="m-l-20 sidedrawer-item" />
          </GridLayout>

          <StackLayout class="hr-light"></StackLayout>

          <GridLayout columns="auto, *" class="sidedrawer-list-item" title="History" @tap="onNavigationItemTap('history')">
            <Image src="~/icons/history.png" class="sidedrawer-icon"/>
            <Label row="0" col="1" text="History" class="m-l-20 sidedrawer-item"/>
          </GridLayout>

          <StackLayout class="hr-light"></StackLayout>

          <GridLayout columns="auto, *" class="sidedrawer-list-item" title="Edit" @tap="onNavigationItemTap('edit')">
            <Image src="~/icons/edit.png" class="sidedrawer-icon"/>
            <Label row="0" col="1" text="Edit" class="m-l-20 sidedrawer-item" />
          </GridLayout>

          <StackLayout class="hr-light"></StackLayout>

          <GridLayout columns="auto, *" class="sidedrawer-list-item" title="Invest" @tap="onNavigationItemTap('invest')">
            <Image src="~/icons/money.png" class="sidedrawer-icon"/>
            <Label row="0" col="1" text="Invest" class="m-l-20 sidedrawer-item" />
          </GridLayout>

          <StackLayout class="hr-light"></StackLayout>

          <GridLayout columns="auto, *" class="sidedrawer-list-item" title="Calculator" @tap="onNavigationItemTap('cal')">
              <Image src="~/icons/cal.png" class="sidedrawer-icon"/>
              <Label row="0" col="1" text="Calculator" class="m-l-20 sidedrawer-item" />
            </GridLayout>

            <StackLayout class="hr-light"></StackLayout>

          <GridLayout columns="auto, *" class="sidedrawer-list-item" title="Contact" @tap="onNavigationItemTap('contact')">
            <Image src="~/icons/contact.png" class="sidedrawer-icon"/>
            <Label row="0" col="1" text="Contact" class="m-l-20 sidedrawer-item" />
          </GridLayout>

          <StackLayout class="hr-light"></StackLayout>

          <GridLayout v-if="user.mentor!=''" columns="auto, *" class="sidedrawer-list-item" title="Referal" @tap="onNavigationItemTap('referal')">
            <Image src="~/icons/referal.png" class="sidedrawer-icon"/>
            <Label row="0" col="1" text="Referal" class="m-l-20 sidedrawer-item" />
          </GridLayout>

          <StackLayout class="hr-light"></StackLayout>

        </StackLayout>
      </ScrollView>
      </StackLayout>
      <StackLayout ~mainContent class="">
        
        <ScrollView>
        <StackLayout>

        <StackLayout class="user-header">
          <StackLayout marginBottom="10" marginTop="10">
          <Label class="stat" v-if="user.id_change == '1'" text="You have an invalid identity, please change it" color="red"/>
          <Label class="stat" v-if="user.id_change == '2'" text="Your identity is awaiting aproval." color="blue"/>
          </StackLayout>

          <Image :src="'https://empower.honeypays.com.ng'+user.identity" class="user-avatar" />

         
          <Label class="stat" color="red">
            <FormattedString>
              <Span text="Total Invested: "style="font-weight: bold"/>
              <Span :text="currency(all)" style="font-style: italic"/>
            </FormattedString>
          </Label>

          <Label class="stat" color="red">
            <FormattedString>
              <Span text="Total Paid Return: " style="font-weight: bold"/>
              <Span :text="currency(tpr)" style="font-style: italic"/>
            </FormattedString>
          </Label>
          
          <Label class="stat" color="red">
            <FormattedString>
              <Span text="Total Expected Return: " style="font-weight: bold"/>
              <Span :text="currency(ter)" style="font-style: italic"/>
            </FormattedString>
          </Label>

          <Label class="user-header-text" :text="user.name" color="white"/>
          <Label class="user-header-footnote" :text="user.email" color="white"/>
        </StackLayout>

        <StackLayout margin="5" borderRadius="10">
          <StackLayout  padding="10" height="80">
            <Label textWrap="true" text="Make a payment to Honeypays Micro Credit Investment Limited before You Invest.. KEYSTONE BANK 1006952175 SKYE BANK 4091107137" style="color: #008080" class="desc"></Label>
          </StackLayout>
        </StackLayout>

        <StackLayout margin="5" borderRadius="10">
          <StackLayout backgroundColor="#fafafa" padding="10">
            <Label text="Full Name" class="name"></Label>
            <Label :text="user.name" style="color: #c40404;text-align: right;" class="desc"></Label>
          </StackLayout>
        </StackLayout>

        <StackLayout margin="5" borderRadius="10">
          <StackLayout backgroundColor="#fafafa" padding="10">
            <Label text="Mobile Number" class="name"></Label>
            <Label :text="user.number" style="color: #c40404;text-align: right;" class="desc"></Label>
          </StackLayout>
        </StackLayout>

        <StackLayout margin="5" borderRadius="10">
          <StackLayout backgroundColor="#fafafa" padding="10">
            <Label text="Address" class="name"></Label>
            <Label :text="user.addr" style="color: #c40404;text-align: right;" class="desc"></Label>
          </StackLayout>
        </StackLayout>

        <StackLayout margin="5" borderRadius="10">
          <StackLayout backgroundColor="#fafafa" padding="10">
            <Label text="City" class="name"></Label>
            <Label :text="user.city" style="color: #c40404;text-align: right;" class="desc"></Label>
          </StackLayout>
        </StackLayout>

        <StackLayout margin="5" borderRadius="10">
          <StackLayout backgroundColor="#fafafa" padding="10">
            <Label text="State" class="name"></Label>
            <Label :text="user.state" style="color: #c40404;text-align: right;" class="desc"></Label>
          </StackLayout>
        </StackLayout>

        <StackLayout margin="5" borderRadius="10">
          <StackLayout backgroundColor="#fafafa" padding="10">
            <Label text="Account Number" class="name"></Label>
            <Label :text="user.acc_no" style="color: #c40404;text-align: right;" class="desc"></Label>
          </StackLayout>
        </StackLayout>

        <StackLayout margin="5" borderRadius="10">
          <StackLayout backgroundColor="#fafafa" padding="10">
            <Label text="Account Name" class="name"></Label>
            <Label :text="user.acc_name" style="color: #c40404;text-align: right;" class="desc"></Label>
          </StackLayout>
        </StackLayout>

        <StackLayout margin="5" borderRadius="10">
          <StackLayout backgroundColor="#fafafa" padding="10">
            <Label text="Bank Name" class="name"></Label>
            <Label :text="user.bank_name" style="color: #c40404;text-align: right;" class="desc"></Label>
          </StackLayout>
        </StackLayout>

        <StackLayout margin="5" borderRadius="10">
          <StackLayout backgroundColor="#fafafa" padding="10">
            <Label text="Refered by" class="name"></Label>
            <Label :text="user.referal" style="color: #c40404;text-align: right;" class="desc"></Label>
          </StackLayout>
        </StackLayout>

        <StackLayout v-if="user.mentor!=''" margin="5" borderRadius="10">
          <StackLayout backgroundColor="#fafafa" padding="10">
            <Label text="Mentor Number" class="name"></Label>
            <Label :text="user.mentor" style="color: #c40404;text-align: right;" class="desc"></Label>
          </StackLayout>
        </StackLayout>

      </StackLayout>
      </ScrollView>
    </StackLayout>


    </RadSideDrawer>
  </Page>
</template>

<script>
import axios from 'axios';
import Login from './Login';
import Vue from 'nativescript-vue';
  export default {
    data () {
      return {
        user:"",
        all:"",
        tpr:"",
        ter:"",

      };
    },
    methods:{
      get_user(){
            if (this.check_con()) {return}
            if (this.check_tym()) {return}
            this.show();
            this.busy= true;/*
            var token = 'LMlLXEjBehxhbYS6BnBby6nHdwyyTYAraLMnhRxxoIys5TMUXZsDxwEo4Xre';
            axios.defaults.headers.common['Authorization'] = 'Bearer '+token;*/
            axios.get('https://empower.honeypays.com.ng/cus')
            .then(response => {
              this.hide();
              this.busy= false;
              this.user = response.data.user;
              this.all = response.data.all;
              this.tpr = response.data.tpr;
              this.ter =response.data.ter;
              console.log(response.data);
              Vue.prototype.$mentor = response.data.user.mentor;
              /*this.$navigateTo(Home,{
              clearHistory:true,
              //backstackVisible:false,
            })*/
            })
            .catch((error)=>{
              this.hide();
              this.busy= false;
              console.log(error.response.data);
              this.danger('Error(s)', error);
            })
      },
      logout(){
            this.show();
            this.busy= true;
            axios.get('https://empower.honeypays.com.ng/logout')
            .then(response => {
              this.hide();
              this.busy= false;
              console.log(response.data);
              this.$navigateTo(Login,{
              clearHistory:true,
            })
            })
            .catch((error)=>{
              this.hide();
              this.busy= false;
              console.log(error.response.data);
              this.danger('Error(s)', error);
            })

      },
      drawerTap(){
        this.$refs.drawer.nativeView.toggleDrawerState();
      }
    },
    created(){
  
  this.get_user();
}
  };
</script>

<style scoped>
.user-avatar {
    border-color: #000080;
}
.stat{
  text-align: center;
}
.user-header {
  background-color: black;
  height: 290;
}
.ab-icon {
    color: white;
}

.page-content .page-placeholder {
    color: #D7D7D7;
    font-size: 20;
    vertical-align: center;
    horizontal-align: center;
}
.page-content .page-icon {
    font-size: 72;
    vertical-align: top;
    horizontal-align: center;
    color: #D7D7D7;
    margin-top: 20%;
}

.page-content {
    background-color: white;
}

.hr-light {
    background-color: #41464c;
}

.sidedrawer {
    background-color: #282c30;
}

.sidedrawer-header {
    background-color: #282c30;
    height: 190;
}

.sidedrawer-avatar {
    border-radius: 50%;
    width: 100;
    height: 100;
    border-width: 4;
    border-color: #48b1ec;
}

.sidedrawer-header-text {
    color: white;
    font-size: 24;
    font-weight: bold;
    margin-top: 10;
    text-align: center;
}

.sidedrawer-header-footnote {
    color: white;
    text-align: center;
    font-size: 16;
}

.sidedrawer-icon {
    font-size: 20;
    /*border-radius: 50%;
    border-width: 3;
    border-color: #393b3f;*/
    width: 20;
    height: 20;
    /*background-color: #393b3f;*/
    vertical-align: center;
    color: white;
    text-align: center;
}

.sidedrawer-list-item {
    color: #fff;
    padding-left: 30;
    font-size: 18;
    font-weight: bold;
    height: 60;
}

.sidedrawer-item {
    vertical-align: center;
    color: #fff;
}

.sidedrawer-list-item-active {
    /*background-color: #a6a450;*/
    background-color: black;
}

</style>