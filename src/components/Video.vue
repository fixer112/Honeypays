<template>
  <Page class="page">

    <ActionBar class="action-bar">
      <NavigationButton text="Logout" android.systemIcon="ic_menu_back" @tap="$navigateBack()" />
      <Label text="Videos Update" style="text-align: center; font-weight: bold; color: white" />
<!-- <ActionItem @tap="logout"
ios.systemIcon="9" ios.position="left"
android.systemIcon="ic_lock_power_off" android.position="actionBar" color="#fff"/> -->
</ActionBar>
<StackLayout>
        <ListView class="list-group" for="post in posts">
        <v-template>
              <CardView class="cardStyle" @tap="onItemTap(post)" margin="10" elevation="40" radius="10" shadowOffsetWidth="5" shadowColor="#000" shadowRadius="5">
                <StackLayout style="padding: 10;">
                    <StackLayout>
                    <Image :src="post.img" height="200" width="300"/>
                    </StackLayout>
                  <Label :text="post.title" textWrap="true" style="text-align: center;font-size: 14"/>
                  
                </StackLayout>
              </CardView>
        </v-template>

      </ListView>
  </StackLayout>
</Page>
</template>

<script>
  import axios from 'axios';
  import Play from './Play';
export default {
  data () {
    return {
      posts:[],
    };
  },
  methods:{
    onItemTap(post){
      //console.log(post.link);
      this.$navigateTo(Play,{context:{propsData:{post:post}}})

    }

},
watch:{

},
created(){
  if (this.check_con()) {return}
  this.show()
axios.get('https://honeypays.com.ng/video_api')
        .then(response => {
        console.log(JSON.stringify(response.data));
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