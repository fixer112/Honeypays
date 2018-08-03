import Vue from 'nativescript-vue';

import router from './router';

import store from './store';

import './styles.scss';
import * as application from "application";
import * as connectivity from "tns-core-modules/connectivity";
import * as appSettings from 'tns-core-modules/application-settings';
import Login from './components/mcredit/Login';
import {exit} from 'nativescript-exit';
import axios from 'axios';
import { isAndroid } from 'tns-core-modules/platform'

if (isAndroid) {
  application.android.on('activityBackPressed', args => {
    console.log('back pressed');
    args.cancel = true;
    //exit();
  })
}

 if (application.android) {

            application.android.on(application.AndroidApplication.activityBackPressedEvent,
                function (arg) {

                      console.log('back');
                      return true //can go back

                });
             application.android.on(application.AndroidApplication.activityPausedEvent, function (args) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
    });

    application.android.on(application.AndroidApplication.activityResumedEvent, function (args) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
    });

        }

var suspend = 0;
var resume = 0;

application.on(application.launchEvent, (args) => {
    appSettings.setNumber("start", 0);
    appSettings.setString("murl", 'https://mcredit.honeypays.com.ng');
    appSettings.setString("eurl", 'https://empower.honeypays.com.ng');
});

application.on(application.exitEvent, (args) => {
   appSettings.setNumber("start", 0);
});

application.on(application.suspendEvent, (args) => {
      console.log('suspend');
       suspend = new Date().getTime();
    	
});

application.on(application.resumeEvent, (args) => {

        resume = new Date().getTime();
        if (suspend > 0 && (resume-suspend)/(1000*60) > 5) {
          appSettings.setString("token", '');
          console.log('timeout');
          this.$router.push('/mcredit/login');
        }
});

application.on(application.uncaughtErrorEvent, (args) => {
     exit();
});

// Uncomment the following to see NativeScript-Vue output logs
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
    if (start > 0 && (now - start)/(1000*60)>5) {
      appSettings.setNumber("start", new Date().getTime());
      alert('Session timeout, please re-login');
      //exit();
      this.$router.push('/mcredit/login');
      //return;
    }
    console.log((now - start)/(1000*60));
},
check_con(){
    switch (connectivity.getConnectionType()) {
    case connectivity.connectionType.none:
        // Denotes no Internet connection.
        console.log("No connection");
        this.busy = false;
      alert("Network Error. Please check your connection");
        break;
    case connectivity.connectionType.wifi:
        // Denotes a WiFi connection.
        console.log("WiFi connection");
        break;
    case connectivity.connectionType.mobile:
        // Denotes a mobile connection, i.e. cellular network or WAN.
        console.log("Mobile connection");
        break;
    default:
        break;
}
}
},
  mounted(){
    //delete axios.defaults.headers.common['Authorization']
  }

})


new Vue({

  router,

  store,

  mounted(){
  },
}).$start();