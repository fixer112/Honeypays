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

            <GridLayout columns="auto, *" class="sidedrawer-list-item  sidedrawer-list-item-active" title="Calculator">
              <Image src="~/icons/cal.png" class="sidedrawer-icon"/>
              <Label row="0" col="1" text="Calculator" class="m-l-20 sidedrawer-item" />
            </GridLayout>

            <StackLayout class="hr-light"></StackLayout>

            <GridLayout columns="auto, *" class="sidedrawer-list-item" title="Contact" @tap="onNavigationItemTap('contact')">
              <Image src="~/icons/contact.png" class="sidedrawer-icon"/>
              <Label row="0" col="1" text="Contact" class="m-l-20 sidedrawer-item" />
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
        <ScrollView>
          <StackLayout>
            <FilterableListpicker ref="list" blur="dark" hintText="Type to filter..." :source="tenure_list" @itemTapped="Tapped($event)"></FilterableListpicker>
            <StackLayout>
              <!-- <ScrollView> -->
                <StackLayout>

                  <StackLayout class="input-field" marginBottom="25">
                   <Label text="*Amount" class="" style="text-align: left;color:#000080 " />
                   <TextField class="input" keyboardType="number" autocorrect="false" autocapitalizationType="none" v-model="amount" returnKeyType="done" fontSize="18" :isEnabled="!busy"/>
                   <StackLayout class="hr-light" />
                 </StackLayout>

                 <StackLayout class="input-field" marginBottom="25">
                  <Label text="*Tenure" style="text-align: left;color:#000080" />
                  <TextField class="input" :text="tenure" editable="false" @tap="select()" fontSize="18"/>
                  <StackLayout class="hr-light" />
                </StackLayout>

                <StackLayout class="input-field" marginBottom="25">
                  <Label text="*Investment date" style="text-align: left;color:#000080" />
                  <DatePicker v-model="date" :minDate="min" height="150"/>
                  <Label :text="date"/>
                  <Label :text="new_date"/>
                  <StackLayout class="hr-light" />
                </StackLayout>

              </StackLayout>

              <!-- </ScrollView> -->
            </StackLayout>

            <StackLayout>
              <Label v-if="earning!=''" textWrap="true" style="font-weight: bold">
                <FormattedString>
                  <Span text="Return Earning is " style="font-size: 18"/>
                  <Span :text="currency(earning)" style="text-align: center;color:green" />
                </FormattedString>
              </Label>

              <Label v-if="return_date!=''" textWrap="true" style="font-weight: bold">
                <FormattedString>
                  <Span text="Return Date is " style="font-size: 18"/>
                  <Span :text="return_date" style="text-align: center;color:green" />
                </FormattedString>
              </Label>
            </StackLayout>

            <StackLayout>
              <Button text="CALCULATE" @tap="submit" class="button m-t-20" :isEnabled="!busy"/>
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
//import * as imagepicker from "nativescript-imagepicker";
import * as bghttp from "nativescript-background-http";
import * as imagesource from 'image-source';
export default {
  data () {
    return {
      earning:"",
      return_date:"",
      new_date:"",
      min:"",
      amount:"5000",
      tenure:"30",
      date:"",
      tenure_list:[
      {"title": "30"},
      {"title": "90"},
      {"title": "180"},
      {"title": "360"},
      ],

    };
  },
  methods:{

    select() {

      this.$refs.list.nativeView.show();
    },
    Tapped(args) {
      this.tenure = args.selectedItem.title;
      console.log(args.selectedItem.title);

    },
    submit(){
      if (this.amount==""||this.tenure==""||this.img=="")
      {
        return alert('All * fields are reqired');
      }
      if (this.amount < 5000) {
        return alert('Amount should be minimum of 5000');
      }

      this.cal();
        //this.get_user();
      },
      cal(){
        if (this.check_con()) {return}
          if (this.check_tym()) {return}
            var formData = new FormData();
          formData.append('amount', this.amount);
          formData.append('rate', this.tenure);
          formData.append('date', this.new_date);
          this.show();
          this.busy= true;
          axios.post('https://honeypays.com.ng/calculator.php',formData,{
            headers:{
              "Content-Type": "application/x-www-form-urlencoded",
              "Accept": "application/json",

            },
          })
          .then(response => {
            this.hide();
              this.busy = false;
              console.log(response.data);
                if (response.data.error && response.data.error!='none') {
                  return alert(response.data.error);
                }
                this.earning = response.data.earning;
                this.return_date = response.data.return_date;
          //alert(response.data.amount);
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
                              },
                              pad(n){
                                return n < 10 ? "0"+n : n;
                              },
                            },
                            watch:{
                              date(n){
                                n = new Date(n);
                                this.new_date = this.pad(n.getMonth()+1)+"/"+this.pad(n.getDate())+"/"+n.getFullYear().toString().replace('20','');
                              }
                            },
                            created(){
                              this.mentor = this.$mentor;
                              var date = new Date();
                              //var day = date.getDate() + 1;
                              //date.setDate(day);
                              this.date = this.min = date;

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