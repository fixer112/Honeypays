import Vue from 'nativescript-vue';

import router from './router';

import store from './store';

import './styles.scss';
import * as application from "application";
import * as connectivity from "tns-core-modules/connectivity";
import * as appSettings from 'tns-core-modules/application-settings';
import M_Login from './components/mcredit/Login';
import E_Login from './components/empower/Login';
import E_Home from './components/empower/Home';
import E_History from './components/empower/History';
import E_Edit from './components/empower/Edit';
import E_Invest from './components/empower/Invest';
import E_Cal from './components/empower/Calculator';
import E_Contact from './components/empower/Contact';
import E_Referal from './components/empower/Referal';
import E_Refund from './components/empower/Refund';
import E_bar from './components/empower/Actionbar';
import Notify from './components/Notify';
import {exit} from 'nativescript-exit';
import axios from 'axios';
import { isAndroid } from 'tns-core-modules/platform'
import { FilterSelect } from 'nativescript-filter-select';
//import { Video } from 'nativescript-videoplayer';
import firebase from 'nativescript-plugin-firebase';
import { LocalNotifications } from "nativescript-local-notifications";
//import { CodePush, SyncStatus } from 'nativescript-code-push';
import { isIOS } from 'platform';

Vue.component('Ebar', E_bar);
Vue.registerElement('FilterSelect', () => FilterSelect);
//Vue.registerElement('VideoPlayer', () => require('nativescript-videoplayer').Video);
Vue.registerElement('CardView',() => require('nativescript-cardview').CardView);
Vue.registerElement("FilterableListpicker", () => require("nativescript-filterable-listpicker").FilterableListpicker);
Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer);
Vue.registerElement('YoutubePlayer', () => require('nativescript-youtubeplayer').YoutubePlayer);
//Vue.registerElement("exoplayer", () => require("nativescript-exoplayer").Video);

//var firebase = require("nativescript-plugin-firebase");
//var localStorage = require( "nativescript-localstorage" );
if (!appSettings.getNumber("count")) {appSettings.setNumber("count", 0)}
if (!appSettings.getNumber("unread")) {appSettings.setNumber("unread", 0)}
console.log('count: '+appSettings.getNumber("count"));
console.log('unread: '+appSettings.getNumber("unread"));


firebase.init({
  // Optionally pass in properties for database, authentication and cloud messaging,
  // see their respective docs.
   showNotifications: false,
   //showNotificationsWhenInForeground: true
  
}).then(
    function (instance) {
      console.log("firebase.init done");
    },
    function (error) {
      console.log("firebase.init error: " + error);
    }
);

firebase.addOnMessageReceivedCallback(
    function(message) {
      var count = appSettings.getNumber('count');
      var unread = appSettings.getNumber('unread');
      appSettings.setNumber('count', count+1);
      appSettings.setNumber('unread', unread+1);
      //console.log(appSettings.getNumber('count'));
      message.data.date = new Date();
      appSettings.setString(count.toString(), JSON.stringify(message));

      //console.log("ID: " + count);
      console.log("Title: " + message.title);
      console.log("Body: " + message.body);
      // if your server passed a custom property called 'foo', then do this:
      console.log("Data: " + JSON.stringify(message));

      LocalNotifications.schedule([{
    id: count,
    title: message.data.title,
    body: message.data.body
    
  }]).then(
      function() {
        console.log("Notification scheduled");

      },
      function(error) {
        console.log("scheduling error: " + error);
      }
  )

    });

LocalNotifications.addOnMessageReceivedCallback(
      function (notification) {
      
        alert({
  title: notification.title,
  message: notification.body,
});
      }
  ).then(
      function() {
        console.log("Listener added");
      }
  )
firebase.subscribeToTopic("global").then(() => console.log("Subscribed to global"));
/*if (appSettings.getString("email")) {
    var email = 'empower_'+appSettings.getString("email");
    firebase.subscribeToTopic(email).then(() => console.log("Subscribed to "+email));
    }*/
Vue.prototype.$firebase = firebase;

var suspend = 0;
var resume = 0;

application.on(application.launchEvent, (args) => {
    appSettings.setNumber("start", 0);
    appSettings.setString("default", 'mcredit');
    //axios.defaults.headers.common['version'] = '1.1.3';
});

application.on(application.exitEvent, (args) => {
   appSettings.setNumber("start", 0);
});

application.on(application.suspendEvent, (args) => {
      console.log('suspend');
       suspend = new Date().getTime();
    	
});

application.on(application.resumeEvent, (args) => {
  /*const syncKey = '3g5snZMZnz5eVdmXm6ZDgUvHGV2y11939548-490b-43d7-a9e4-de386f904956';
  if (isAndroid) {
    CodePush.sync({ deploymentKey: syncKey });
  }*/
          
        resume = new Date().getTime();
        if (suspend > 0 && (resume-suspend)/(1000*60) > 10) {
          appSettings.setString("token", '');
          console.log('timeout');
          alert('Timeout, please re-login')
            this.$navigateTo(M_Login,{
            clearHistory:true,
          })
        }
});

application.on(application.uncaughtErrorEvent, (args) => {
     exit();
});

// Uncomment the following to see NativeScript-Vue output logs
var LoadingIndicator = require("nativescript-loading-indicator").LoadingIndicator;
var loader = new LoadingIndicator();

Vue.config.silent = false;
Vue.mixin({
 data() {
    return {
      err: "",
      info:"",
      default:"mcredit",
      busy:false,
      back:false,

    }
},

methods:{
  get_date(d){
    return new Date(d);
  },
  onNavigationItemTap(nav){
    if (this.check_con()) {return}
    if (this.check_tym()) {return}
    
    console.log(nav);
    var GO = E_Home;
    switch (nav) {
      case 'home':
      GO = E_Home;
        break;
      case 'history':
      GO = E_History;
        break;
      case 'edit':
      GO = E_Edit;
      break;
      case 'invest':
      GO = E_Invest;
      break;
      case 'contact':
      GO = E_Contact;
      break;
      case 'referal':
      GO = E_Referal;
      break;
      case 'cal':
      GO = E_Cal;
      break;
      case 'refund':
      GO = E_Refund;
      break;
    }

      this.$navigateTo(GO,{
      //clearHistory:true,
    })

  },
  currency(value){

    return 'N'+parseFloat(value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  },
  show(msg='loading....'){
    
    loader.show({message:msg});
  },
  hide(){
    loader.hide();
  },
not_back(){
      //if (application.android) {
    
  
    application.android.on(application.AndroidApplication.activityBackPressedEvent, function (args) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
        // Set args.cancel = true to cancel back navigation and do something custom.
    });
  },
errs(error){
        var err = "";
                Object.keys(error.errors).forEach( function(key) {
          // statements
          Object.keys(error.errors[key]).forEach( function(e) {
              err+=error.errors[key][e]+'\n';
          }, this);
        }, this);
          const alertOptions = {
            title: 'error(s)',
            message: err,
            okButtonText: "OK",
          };
          alert(alertOptions);
          err="";
      
},
danger(title, error){
	if (error.response.data.errors) {
          Object.keys(error.response.data.errors).forEach( function(key) {
    // statements
    Object.keys(error.response.data.errors[key]).forEach( function(e) {
      	this.err+=error.response.data.errors[key][e]+'\n';
    }, this);
  }, this);
        }
        const alertOptions = {
        	title: title,
        	message: this.err,
        	okButtonText: "OK",
        };
        alert(alertOptions);
        //console.log(this.err);
        this.err="";
},

logout(){
  this.busy= true;
  this.check_con()
      axios.post('https://mcredit.honeypays.com.ng/logout').then(response => {
        this.busy= false;
        appSettings.setNumber("start", 0);
        this.$router.push('/mcredit/home');
      })
      .catch((error)=>{
        this.busy= false;
        console.log(error.response.data);
        this.danger('Error(s)', error);
      })
},
check_tym(){
    var start = appSettings.getNumber("start");
    var now = new Date().getTime();
    if (start > 0 && (now - start)/(1000*60) > 10) {
      appSettings.setNumber("start", 0);
      alert('Session timeout, please re-login');
        this.$navigateTo(M_Login,{
        clearHistory:true,
      })
        return true;
    }else{return false}
    console.log((now - start)/(1000*60));
    //return false;
},
check_con(){
  var t;
    switch (connectivity.getConnectionType()) {
    case connectivity.connectionType.none:
        // Denotes no Internet connection.
        console.log("No connection");
        this.busy = false;
       alert("Network Error. Please check your connection");
        t = true;
        break;
    case connectivity.connectionType.wifi:
        // Denotes a WiFi connection.
        console.log("WiFi connection");
        t = false;
        break;
    case connectivity.connectionType.mobile:
        // Denotes a mobile connection, i.e. cellular network or WAN.
        console.log("Mobile connection");
        t = false
        break;
    default:
        t = false;
        break;
}
  console.log(t);
  return t;
}
},
  mounted(){
    //if (isAndroid) {
  application.android.on('activityBackPressed', args => {
    console.log('back pressed');
    args.cancel = true;
    ///exit();
  })
}
 // }

})


new Vue({

  router,

  store,

  mounted(){
  },
}).$start();