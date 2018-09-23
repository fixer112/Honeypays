<template>
  <Page class="page">

    <ActionBar class="action-bar">
      <NavigationButton text="Logout" android.systemIcon="ic_menu_back" @tap="$navigateBack()" />
      <Label text="News Update" style="text-align: center; font-weight: bold; color: white" />
<!-- <ActionItem @tap="logout"
ios.systemIcon="9" ios.position="left"
android.systemIcon="ic_lock_power_off" android.position="actionBar" color="#fff"/> -->
</ActionBar>
<StackLayout>
        <ListView class="list-group" for="post in posts">
        <v-template>
              <CardView class="cardStyle" margin="10" elevation="40" radius="10" shadowOffsetWidth="5" shadowColor="#000" shadowRadius="5">
                <StackLayout style="padding: 10;" @tap="onItemTap(post)">
                  <Label :text="post.title.rendered" textWrap="true" style="text-align: center;font-size: 14"/>
                  <HtmlView :html='post.excerpt.rendered' style="margin-top: 10"/>
                </StackLayout>
              </CardView>
        </v-template>

      </ListView>
  </StackLayout>
</Page>
</template>

<script>
  import axios from 'axios';
  import Post from './Post';
//import * as imagepicker from "nativescript-imagepicker";
//import * as bghttp from "nativescript-background-http";
//import * as imagesource from 'image-source';
export default {
  data () {
    return {
      posts:[],
    };
  },
  methods:{
    onItemTap(post){
      console.log(post.link);
      this.$navigateTo(Post,{context:{propsData:{link:post.link,title:post.title.rendered,content:post.content.rendered}}})

    }

},
watch:{

},
created(){
  this.show()
axios.get('http://honeypays.com.ng/wp-json/wp/v2/posts')
        .then(response => {
        //console.log(JSON.stringify(response.data));
        this.posts = response.data;
        this.hide();
      })
      .catch((error)=>{
        console.log(error.response.data);
        this.hide();
      })

  }
};
</script>

<style scoped>
.cardStyle {
    background-color: whitesmoke;
}
.page{
  background-color: white;
}
</style>