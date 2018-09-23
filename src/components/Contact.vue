<template>
  <Page class="page">

    <ActionBar class="action-bar">
      <NavigationButton text="Logout" android.systemIcon="ic_menu_back" @tap="$navigateBack()" />
      <Label text="Contact Us" style="text-align: center; font-weight: bold; color: white" />
<!-- <ActionItem @tap="logout"
ios.systemIcon="9" ios.position="left"
android.systemIcon="ic_lock_power_off" android.position="actionBar" color="#fff"/> -->
</ActionBar>
<StackLayout style="vertical-align: middle;">
  <ScrollView>
    <StackLayout style="padding: 20;">
      <HtmlView html='<div><p>THASIOUS HOUSE<br>NO 120, OKOTA ROAD(AGO PALACE ROUND-ABOUT), OKOTA, LAGOS.<br><b>08168857027</b></p><p><a href="https://honeypays.com.ng/contact-us/">Contact Us</a></p></div>' />
      </StackLayout>
    </ScrollView>
  </StackLayout>
</Page>
</template>

<script>
  import axios from 'axios';
//import * as imagepicker from "nativescript-imagepicker";
//import * as bghttp from "nativescript-background-http";
//import * as imagesource from 'image-source';
export default {
  data () {
    return {

    };
  },
  methods:{

},
watch:{

},
created(){


  }
};
</script>

<style scoped>
</style>