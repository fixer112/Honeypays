<template>
  <Page class="page">

    <ActionBar class="action-bar">
      <NavigationButton text="Logout" android.systemIcon="ic_menu_back" @tap="$navigateBack()" />
      <Label text="About Us" style="text-align: center; font-weight: bold; color: white" />
<!-- <ActionItem @tap="logout"
ios.systemIcon="9" ios.position="left"
android.systemIcon="ic_lock_power_off" android.position="actionBar" color="#fff"/> -->
</ActionBar>
<StackLayout>
  <ScrollView>
    <StackLayout style="padding: 20">
      <HtmlView html='<div class="fl-rich-text">
  <h4><span style="font-size: 16px; color: #000000;">HONEYPAYS MICRO CREDIT is a member based microfinance institution and also a member of the apex Association of Non-Bank Microfinance Institutions of Nigeria (ANMFIN) and has always complied with all applicable laws, rules and regulations. Engaging solely in activities that are recognized under policies issued by the Central Bank of Nigeria, including the:</span></h4>
<ol>
<li>
<h4><span style="color: #000000;"><span style="font-size: 16px;"> Microfinance Policy, Regulatory and Supervisory Framework for&nbsp;&nbsp;</span>Nigeria, December 2005 (section 9.3);</span></h4>
</li>
</ol>
<ol start="2">
<li>
<h4><span style="color: #000000;"><span style="font-size: 16px;"> Revised Microfinance Policy Framework for Nigeria, April 2011&nbsp;</span>(Sections 4.3.5, 5.2, 5.3);</span></h4>
</li>
</ol>
<ol start="3">
<li>
<h4><span style="color: #000000;"><span style="font-size: 16px;"> Revised Regulatory and Supervisory Guidelines for Microfinance Banks&nbsp;</span>in Nigeria, 2012 (section 17.2).</span></h4>
</li>
</ol>
<h4><span style="font-size: 16px; color: #000000;">As a Tier 1 Microfinance Institution, HONEYPAYS MICRO CREDIT has been a standard bearer in implementing best practices in triple bottom line financial intermediation and inclusion in Nigeria and Africa.”</span></h4>
<p>&nbsp;</p>
<h4><span style="color: #000000;">Duly incorporated in Nigeria under the COMPANY AND ALLIED MATTERS ACT 1990, and registered:</span></h4>
<ol>
<li>
<h4><span style="color: #000000;">To carry on the business of investing funds of the shareholders, associates and partners of the company as well as the general public.</span></h4>
</li>
<li>
<h4><span style="color: #000000;">To engage in the business of providing micro-credit facilities and to provide financial and technical assistance and support to individuals, small scale enterprises.</span></h4>
</li>
</ol>
</div>' />
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