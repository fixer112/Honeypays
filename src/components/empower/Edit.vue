<template>
  <Page class="page">

    <ActionBar class="action-bar">
      <NavigationButton icon="res://baseline_menu_white_24" @tap="drawerTap"/>
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

            <GridLayout columns="auto, *" class="sidedrawer-list-item sidedrawer-list-item-active" title="Edit">
              <Image src="~/icons/edit.png" class="sidedrawer-icon"/>
              <Label row="0" col="1" text="Edit" class="m-l-20 sidedrawer-item" />
            </GridLayout>

            <StackLayout class="hr-light"></StackLayout>

            <GridLayout columns="auto, *" class="sidedrawer-list-item" title="Invest" @tap="onNavigationItemTap('invest')">
              <Image src="~/icons/money.png" class="sidedrawer-icon"/>
              <Label row="0" col="1" text="Invest" class="m-l-20 sidedrawer-item" />
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
      <StackLayout ~mainContent class="empower">
        <StackLayout>
          <FilterableListpicker ref="list" blur="dark" hintText="Type to filter..." :source="list" @itemTapped="Tapped($event)"></FilterableListpicker>
        <StackLayout height="400" margin="30">
          <ScrollView>
            <StackLayout>

              <StackLayout class="input-field" marginBottom="25">
               <Label text="*Full Name" class="" style="text-align: left;color:#000080 " />
                <TextField class="input" autocorrect="false" autocapitalizationType="none" v-model="name" returnKeyType="next" fontSize="18" :isEnabled="!busy"/>
                <StackLayout class="hr-light" />
              </StackLayout>


              <StackLayout class="input-field" marginBottom="25">
                <Label text="Email" style="text-align: left;color:#000080" />
                <TextField class="input" keyboardType="email" autocorrect="false" autocapitalizationType="none" :text="email" returnKeyType="next" fontSize="18" :isEnabled="false"/>
                <StackLayout class="hr-light" />
              </StackLayout>

              <StackLayout class="input-field" marginBottom="25">
                <Label text="Password" style="text-align: left;color:#000080" />
                <TextField ref="password" hint="Edit only if neccesary" class="input" secure="true" v-model="password" returnKeyType="next" fontSize="18" :isEnabled="!busy"/>
                <StackLayout class="hr-light" />
              </StackLayout>

              <StackLayout class="input-field" marginBottom="25">
                <Label text="Confirm password" style="text-align: left;color:#000080" />
                <TextField ref="confirmPassword" hint="Edit only if neccesary" class="input" secure="true" v-model="password_confirmation" returnKeyType="done" fontSize="18" :isEnabled="!busy"/>
                <StackLayout class="hr-light" />
              </StackLayout>

              <StackLayout class="input-field" marginBottom="25">
                <Label text="Mentor" style="text-align: left;color:#000080" />
                <TextField class="input" keyboardType="number" autocorrect="false" autocapitalizationType="none" :text="mentor" returnKeyType="done" fontSize="18" isEnabled="false"/>
                <StackLayout class="hr-light" />
              </StackLayout>

              <StackLayout class="input-field" marginBottom="25">
                <Label text="Mobile Number" style="text-align: left;color:#000080" />
                <TextField class="input" keyboardType="number" autocorrect="false" autocapitalizationType="none" :hint="number" returnKeyType="done" fontSize="18" :isEnabled="!busy" ref="number"/>
                <StackLayout class="hr-light" />
              </StackLayout>

              <StackLayout class="input-field" marginBottom="25">
                <Label text="*Account Number" style="text-align: left;color:#000080" />
                <TextField class="input" keyboardType="number" autocorrect="false" autocapitalizationType="none" v-model="acc_no" returnKeyType="done" fontSize="18" :isEnabled="!busy"/>
                <StackLayout class="hr-light" />
              </StackLayout>

              <StackLayout class="input-field" marginBottom="25">
                <Label text="*Account Name" style="text-align: left;color:#000080" />
                <TextField class="input" autocorrect="false" autocapitalizationType="none" v-model="acc_name" returnKeyType="next" fontSize="18" :isEnabled="!busy"/>
                <StackLayout class="hr-light" />
              </StackLayout>


              <StackLayout class="input-field" marginBottom="25">
                <Label text="*Bank Name" style="text-align: left;color:#000080" />
                <TextField class="input" :text="bank_name" editable="false" @tap="select('bank')" fontSize="18"/>
                <StackLayout class="hr-light" />
              </StackLayout>

              <StackLayout class="input-field" marginBottom="25">
                <Label text="*Address" style="text-align: left;color:#000080" />
                <TextField class="input" autocorrect="false" autocapitalizationType="none" v-model="addr" returnKeyType="next" fontSize="18" :isEnabled="!busy"/>
                <StackLayout class="hr-light" />
              </StackLayout>

              <StackLayout class="input-field" marginBottom="25">
                <Label text="*City" style="text-align: left;color:#000080" />
                <TextField class="input" autocorrect="false" autocapitalizationType="none" v-model="city" returnKeyType="next" fontSize="18" :isEnabled="!busy"/>
                <StackLayout class="hr-light" />
              </StackLayout>

              <StackLayout class="input-field" marginBottom="25">
                <Label text="*State" style="text-align: left;color:#000080" />
                <TextField class="input" autocorrect="false" autocapitalizationType="none" v-model="state" returnKeyType="done" fontSize="18" :isEnabled="!busy"/>
                <StackLayout class="hr-light" />
              </StackLayout>

              <!-- mode id -->
              <StackLayout class="input-field" marginBottom="25">
                <Label text="*Mode of identity" style="text-align: left;color:#000080" />
                <TextField class="input" :text="mode_id" editable="false" @tap="select('mode')" fontSize="18"/>
                <StackLayout class="hr-light" />
                <!-- <FilterableListpicker ref="mode" blur="dark" hintText="Type to filter..." :source="mode_list" @itemTapped="modeTapped($event)"></FilterableListpicker> -->
              </StackLayout>

              <StackLayout class="input-field" marginBottom="25">
                <Image class="log" :src="img" style="width: 150; height: 100" ref="img" v-show="img!=''"/>
                <TextField class="input" textWrap="true" :hint="identity" editable="false" @tap="image" fontSize="18"/>
                <StackLayout class="hr-light" />
              </StackLayout>

              <!--  accept -->
              
            </StackLayout>

          </ScrollView>
        </StackLayout>

        

        <StackLayout>
          <Button text="UPDATE" @tap="submit" class="button m-t-20" :isEnabled="!busy"/>
        </StackLayout>
      </StackLayout>

      </StackLayout>


    </RadSideDrawer>
  </Page>
</template>

<script>
import axios from 'axios';
import Login from './Login';
import * as imagepicker from "nativescript-imagepicker";
import * as bghttp from "nativescript-background-http";
import * as imagesource from 'image-source';
export default {
  data () {
    return {
      user:"",
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
      {"title": "VOTERS ID"}
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
      send_img:false,

    };
  },
  methods:{
    
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
      submit(){
        if (this.name==""||this.acc_no==""||this.acc_name==""||this.bank_name==""||this.addr==""||this.city==""||this.state==""||this.mode_id=="")
          {
            return alert('All * fields are reqired');
          }
        if (this.password !='') {
          if (this.password_confirmation =='') {
            return alert('Password confirmation is required');
          }
        }
        if (this.check_con()) {return}
        if (this.check_tym()) {return}
        this.edit();
        //this.get_user();
      },
      edit(){
      
        var session = bghttp.session("image-upload");
        var request = {  
          url: "https://empower.honeypays.com.ng/cus/edit",
          method: "POST",
          headers: {
            "Content-Type": "application/octet-stream",
            "Accept": "application/json",
            "Authorization": axios.defaults.headers.common['Authorization'],
          },
        };

        var params = [
        {name:'name', value:this.name},
        //{name:'email', value:this.email},
        //{name:'mentor', value:this.mentor},
        {name:'acc_no', value:this.acc_no},
        {name:'acc_name', value:this.acc_name},
        {name:'bank_name', value:this.bank_name},
        {name:'addr', value:this.addr},
        {name:'city', value:this.city},
        //{name:'number', value:this.number},
        {name:'state', value:this.state},
        {name:'mode_id', value:this.mode_id},
        {name:'accept', value:this.accept},
        ];
        if (this.$refs.number.nativeView.text !='') {
          params.push({name:'number', value:this.$refs.number.nativeView.text});
        }
        if (this.password != '') {
          params.push(
            {name:'password', value:this.password},
            {name:'password_confirmation', value:this.password_confirmation})
        }
        if (this.send_img) {
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
            this.send_img = false;
          }
        },
        

        image(){
          this.img ="";
          this.send_img = false;
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
                this.send_img = true;

              }else if (ios && ios.mediaType === PHAssetMediaType.Image) {

                _this.img = selected.ios.toString();
              }

            });
              //this.img = selection;
              //this.identity= selection[0];

              //console.log(selection[0]);
            }).catch(function (e) {
              // process error
              console.log('error:'+e);
            });

          },
          get_user(){
            if (this.check_con()) {return}
              if (this.check_tym()) {return}
                this.show();
            this.busy= true;
            axios.get('https://empower.honeypays.com.ng/cus')
            .then(response => {
              this.hide();
              this.busy= false;
              this.user = response.data.user;
              this.name = response.data.user.name;
              this.email = response.data.user.email;
              this.mentor = response.data.user.referal;
              this.acc_no = response.data.user.acc_no;
              this.acc_name = response.data.user.acc_name;
              this.bank_name = response.data.user.bank_name;
              this.addr = response.data.user.addr;
              this.city = response.data.user.city;
              this.number = response.data.user.number;
              this.state = response.data.user.state;
              this.mode_id = response.data.user.mode_id;
              this.img = 'https://empower.honeypays.com.ng'+response.data.user.identity;
              console.log(this.img);
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