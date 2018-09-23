<template>
  <Page class="page">

    <ActionBar class="action-bar">
      <NavigationButton icon="res://baseline_menu_white_24" @tap="drawerTap"/>
      <Label text="Refund" style="text-align: center; font-weight: bold; color: white" />
      <ActionItem @tap="logout"
      ios.systemIcon="9" ios.position="left"
      android.systemIcon="ic_lock_power_off" android.position="actionBar" color="#fff"/>
    </ActionBar>


    <RadSideDrawer ref="drawer">
      <StackLayout ~drawerContent class="sidedrawer sidedrawer-content">
        <ScrollView>
          <StackLayout>

            <StackLayout class="hr-light"></StackLayout>

            <GridLayout columns="auto, *" class="sidedrawer-list-item" title="Home" @tap="onNavigationItemTap('home')">
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

            <GridLayout columns="auto, *" class="sidedrawer-list-item sidedrawer-list-item-active" title="Refund">
              <Image src="~/icons/refund.png" class="sidedrawer-icon"/>
              <Label row="0" col="1" text="Refund" class="m-l-20 sidedrawer-item" />
            </GridLayout>

            <StackLayout class="hr-light"></StackLayout>

            <GridLayout v-if="mentor!=''" columns="auto, *" class="sidedrawer-list-item" title="Referal" @tap="onNavigationItemTap('referal')">
              <Image src="~/icons/referal.png" class="sidedrawer-icon"/>
              <Label row="0" col="1" text="Referal" class="m-l-20 sidedrawer-item" />
            </GridLayout>

            <StackLayout class="hr-light"></StackLayout>

          </StackLayout>
        </ScrollView>
      </StackLayout>
      <StackLayout ~mainContent class="empower">
        <StackLayout>

              <StackLayout class="input-field" marginBottom="25">
               <Label text="*Subject" class="" style="text-align: left;color:#000080 " />
                <TextField class="input" autocorrect="false" autocapitalizationType="none" v-model="subject" returnKeyType="next" fontSize="18" :isEnabled="!busy"/>
                <StackLayout class="hr-light" />
              </StackLayout>

              <StackLayout class="input-field" marginBottom="25">
               <Label text="*Message" class="" style="text-align: left;color:#000080 " />
                <TextView class="input" autocorrect="false" autocapitalizationType="none" v-model="message" returnKeyType="done" fontSize="18" :isEnabled="!busy"/>
                <StackLayout class="hr-light" />
              </StackLayout>
              
            </StackLayout>

              <StackLayout>
                <Button text="SUBMIT" @tap="submit" class="button m-t-20" :isEnabled="!busy"/>
              </StackLayout>

            </StackLayout>

    </RadSideDrawer>
  </Page>
</template>

<script>
import axios from 'axios';
import Login from './Login';
import Land from '../LandPage';
import * as imagepicker from "nativescript-imagepicker";
import * as bghttp from "nativescript-background-http";
import * as imagesource from 'image-source';
export default {
  data () {
    return {
      mentor:"",
      subject:"",
      message:"",

    };
  },
  methods:{
      submit(){
        if (this.subject==""||this.message=="")
          {
            return alert('All * fields are reqired');
          }

          if (this.check_con()) {return}
          if (this.check_tym()) {return}
          this.show();
          this.busy= true;
          axios.post('https://empower.honeypays.com.ng/cus/contact',{
            message:this.message,
            subject:this.subject,
            to:"refund@honeypays.com.ng"
          })
          .then(response => {
            this.hide();
            this.busy= false;
            console.log(response);
            alert(response.data.message);
            this.message = "";
            this.subject = "";
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
              this.$navigateTo(Land,{
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
         this.mentor = this.$mentor;
        }
      };
      </script>

      <style scoped>
      .input {
        font-size: 18;
        placeholder-color: #333;
      }
      .button{
        margin-right: 50;
        margin-left: 50;
        background-color: #000080;
        color: white;
        border-radius: 5;
        margin-top: 15;
      }
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