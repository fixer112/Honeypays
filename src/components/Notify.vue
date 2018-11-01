<template>
  <Page class="page" @navigatingTo="reset">

    <ActionBar class="action-bar">
      <NavigationButton text="Logout" android.systemIcon="ic_menu_back" @tap="land" />
      <Label text="Notifications" style="text-align: center; font-weight: bold; color: white" />
    </ActionBar>

    <StackLayout>
          
          <Label v-if="messages.length=='0'" text="No Available Notification" style="color: black;vertical-align: center;" VerticalAlignment="center"></Label>
          <ListView class="list-group" for="(message, index) in messages">
            <v-template>
               <StackLayout>
                  <StackLayout style="padding: 10;background-color: whitesmoke">
                    <DockLayout stretchLastChild="false">
                    <Label :text="message.data.title"  textWrap="true" style="font-size: 16;font-weight: bold;" dock="left"/>
                    <Image src="~/images/new.gif" v-if="index <= unread - 1" style="height: 20;width: 20" dock="right"/>
                  </DockLayout>
                    
                    <Label :text="message.data.body"  textWrap="true" style="font-size: 14;margin-top: 5;margin-bottom: 5"/>
                    <DockLayout stretchLastChild="false">
                      <Label :text="message.data.date ? day(message.data.date) : 'No Date'" dock="left" style="font-size: 10;font-style: italic;" width=""50/>
                      <Label :text="message.data.to" dock="right" style="font-size: 10;font-style: italic;"/>
                    </DockLayout>
                  </StackLayout>
                </StackLayout>
                

              
            </v-template>

          </ListView>
          

        </StackLayout>
   
  </Page>
</template>

<script>
  import * as appSettings from 'tns-core-modules/application-settings';
  import Land from './LandPage';
export default {
  data () {
    return {
      messages:"",
      unread : appSettings.getNumber('unread'),
    };
  },
  methods:{
    land(){
      this.$navigateTo(Land,{
      //clearHistory:true,
    });
    },
    day(n){
      var date = new Date(n);
      return date.toDateString()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();

    },
    notify(){
       var x = 0;
    var message = [];
    //var con = parseInt(localStorage.getItem(x)) == null;
    while (appSettings.getString(x.toString())) {
      //console.log(appSettings.getString(x.toString()));
      message.push(JSON.parse(appSettings.getString(x.toString())));
      //console.log(message);
      x++
    }
    return message.reverse();
    },
    reset(){
      appSettings.setNumber('unread', 0);
    },
  },
  watch:{
  },
  created(){
   
    this.messages = this.notify();
    var _this = this;
    setInterval(function(){_this.unread = appSettings.getNumber('unread'); _this.messages = _this.notify();/*appSettings.setNumber('unread', 0);*/ }, 3000);
    //appSettings.setNumber('unread', 0);
  }
};
</script>

<style scoped>


</style>