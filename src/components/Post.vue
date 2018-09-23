<template>
  <Page class="page">

    <ActionBar class="action-bar">
      <NavigationButton text="Logout" android.systemIcon="ic_menu_back" @tap="$navigateBack()" />
      <Label :text="title" style="text-align: center; font-weight: bold; color: white" />
<!-- <ActionItem @tap="logout"
ios.systemIcon="9" ios.position="left"
android.systemIcon="ic_lock_power_off" android.position="actionBar" color="#fff"/> -->
</ActionBar>
<StackLayout>
  <ScrollView>
    <StackLayout style="padding: 20">
      <!-- HtmlView :html='html' /> -->
      <Label :text="title" textWrap="true" style="text-align: center;font-size: 20;margin-bottom: 10;font-weight: bold"/>
      <WebView :src='content' />
      <HtmlView :html='link'/>
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
  props:['title','content','link'],
  methods:{

},
watch:{

},
created(){
  this.link = '<b><a href="'+this.link+'">'+this.title+'</a></b>';
  /*this.show()
axios.get('http://honeypays.com.ng/wp-json/wp/v2/posts/377')
        .then(response => {
        console.log(response.data.content.rendered)
        this.html = response.data.content.rendered;
        this.title = response.data.title.rendered;
        this.link = '<b><a href="http://honeypays.com.ng/wp-json/wp/v2/posts/377">'+this.title+'</a></b>'
        this.hide();
      })
      .catch((error)=>{
        console.log(error.response.data);
        this.hide();
      })*/

  }
};
</script>

<style scoped>
</style>