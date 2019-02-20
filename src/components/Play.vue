<template>
  <Page class="page">

    <ActionBar class="action-bar">
      <NavigationButton text="Logout" android.systemIcon="ic_menu_back" @tap="$navigateBack()" />
      <Label :text="post.title" style="text-align: center; font-weight: bold; color: white" />

</ActionBar>
<StackLayout style="vertical-align: middle;" height="500">
   
      <YoutubePlayer :src="yt" apiKey="AIzaSyAUm14Rg9vH_Zv9X5BeWQ8UyMMypEq4htA"/>
  </StackLayout>
</Page>
</template>

<script>
  import axios from 'axios';
  
export default {
  data () {
    return {
        yt:"",
    };
  },
  props:['post'],
  methods:{
  
},
watch:{

},
created(){
this.yt = this.post.url.replace("https://www.youtube.com/watch?v=","");
}
};
</script>

<style scoped>
</style>