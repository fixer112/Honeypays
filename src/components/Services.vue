<template>
  <Page class="page">

    <ActionBar class="action-bar">
      <NavigationButton text="Logout" android.systemIcon="ic_menu_back" @tap="$navigateBack()" />
      <Label text="Services" style="text-align: center; font-weight: bold; color: white" />
<!-- <ActionItem @tap="logout"
ios.systemIcon="9" ios.position="left"
android.systemIcon="ic_lock_power_off" android.position="actionBar" color="#fff"/> -->
</ActionBar>
<StackLayout>
  <ScrollView>
    <StackLayout style="padding: 20">
      <HtmlView html='<div class="entry-content">
    <h2><span style="color: #3366ff;"><strong>Savings and Loan</strong></span></h2><div class="fl-rich-text">
  <p>"In Nigeria, there are over 37 million MSMEs contributing to over 50% of Nigeria’s GDP. However, less than 5% of these businesses have access to credit in the financial system."</p>
<p>- DEVELOPMENT BANK OF NIGERIA (DBN)</p>
<h3>IN FOUR SIMPLE STEPS:</h3>
<p>1). Open a loan account (from any of our offices).<br>
2). Save up to 1/3 of the loan desired (Daily Contribution).<br>
3). We verify your guarantor.<br>
4). We give you’re the loan.</p>
<p>For more information send us a mail : loan@honeypays.com.ng</p>
</div><h2><span style="color: #3366ff;"><strong>Project Empower</strong></span></h2><div class="fl-rich-text"><p>HONEYPAYS MICRO CREDIT encourages clients to save for the future, the unexpected or the unplanned. It is equally important that they should save for the&nbsp;survival and growth&nbsp;of their business.&nbsp;HONEYPAYS MICRO CREDIT advocates a&nbsp;minimum voluntary&nbsp;daily/weekly savings installment payment&nbsp;of NGN5000.&nbsp;This savings product&nbsp;which we refer to as Project Empower yields a 1.40%, 1.96% 3.84% or&nbsp;7.7% interest credited&nbsp;to clients savings accounts and paid instantly to the bank account provided by the client at the end of the specified tenure. This product is helping&nbsp;clients to&nbsp;build their own capital over time. Members are free to withdraw their savings at any time before the interest starts accruing.</p><h3><strong><span style="color: #000000;">CHOOSE YOUR AMOUNT</span></strong></h3>
<h5><span>Very flexible entry options</span></h5>
<h5><span>With a minimum savings of N5,000.</span></h5>
<h5><span>Save on a daily/weekly basis to enter</span></h5>
<h5><span">Or do a one time payment</span></h5><h3><strong><span style="color: #000000;">INTEREST RATE</span></strong></h3>
<h5><span>1.40% FOR 5MONTHS</span></h5>
<h5><span>1.96% FOR 9MONTHS</span></h5>
<h5><span>3.84% FOR 18MONTHS</span></h5>
<h5><span>7.7% FOR 36MONTHS</span></h5><h3><span style="color: #000000;"><strong>CHOOSE YOUR TENURE</strong></span></h3>
<h5><span>5 Months (Public Holidays are not included)</span></h5>
<h5><span>9 Months (Public Holidays are not included)</span></h5>
<h5><span>18 Months (Public Holidays are not included)</span></h5>
<h5><span>36 Months (Public Holidays are not included)</span></h5>
(Principal and Interest is paid back within seven working days of maturity)

</div><h2><span style="color: #3366ff;"><strong>Forex Master Class</strong></span></h2><div class="fl-rich-text"><p>
Consistently taking profit from the Forex Market is possible. With our tried, tested and proven strategies, you too can Profit from the biggest market in the world, with an estimated daily turnover of $4 Trillion.
RESERVE YOUR SPOT NOW:
08168857027
</p></div></div><div><a href="https://honeypays.com.ng/faq/">Read FAQ here</a></div>' />
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