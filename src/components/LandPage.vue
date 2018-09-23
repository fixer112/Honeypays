<template>
  <Page actionBarHidden="true" class="page">
  <GridLayout rows="*,60">
<StackLayout style="vertical-align: middle;margin-bottom: 10" row="0">
  
  <GridLayout columns="*, *, *" rows="100,100" class="content">
    <StackLayout row="0" col="0" class="mar" @tap="news">
    <StackLayout class="circle">
      <Image class="img" src="~/icons/land/news.png"/>
      <Label text="News Update" class="text"/>
    </StackLayout>
    </StackLayout>

    <StackLayout row="0" col="1" class="mar" @tap="cal">
    <StackLayout class="circle">
      <Image class="img" src="~/icons/land/calculator.png"/>
      <Label text="Calculator" class="text"/>
    </StackLayout>
    </StackLayout>


    <StackLayout row="0" col="2" class="mar" @tap="contact">
    <StackLayout class="circle">
      <Image class="img" src="~/icons/land/contact.png"/>
      <Label text="Contact Us" class="text"/>
    </StackLayout>
    </StackLayout>



    <StackLayout row="1" col="0"class="mar" @tap="legal">
    <StackLayout class="circle">
      <Image class="img" src="~/icons/land/law.png"/>
      <Label text="Legal" class="text"/>
    </StackLayout>
    </StackLayout>

    <StackLayout row="1" col="1" class="mar" @tap="service">
    <StackLayout class="circle">
      <Image class="img" src="~/icons/land/service.png"/>
      <Label text="Services" class="text"/>
    </StackLayout>
    </StackLayout>


    <StackLayout row="1" col="2" class="mar" @tap="about">
    <StackLayout class="circle">
      <Image class="img" src="~/icons/land/about.png"/>
      <Label text="About Us" class="text"/>
    </StackLayout>
    </StackLayout>


  </GridLayout>
</StackLayout>

<StackLayout row="1" class="login" @tap="login">
  <Label text="Sign up or Login" class="button"/>
</StackLayout>
</GridLayout>
</Page>
</template>

<script>
  import Login from './mcredit/Login';
  import Cal from './Calculator';
  import Contact from './Contact';
  import Legal from './Legal';
  import Service from './Services';
  import About from './About';

export default {
  data () {
    return {

    };
  },
  methods:{
  news(){
    alert("Coming Soon");
  },
  login(){
    this.$navigateTo(Login,{
      //clearHistory:true,
    })
  },
   cal(){
    this.$navigateTo(Cal,{
      //clearHistory:true,
    })
  },
   contact(){
    this.$navigateTo(Contact,{
      //clearHistory:true,
    })
  },
  legal(){
    this.$navigateTo(Legal,{
      //clearHistory:true,
    })
  },
  service(){
    this.$navigateTo(Service,{
      //clearHistory:true,
    })
  },
  about(){
    this.$navigateTo(About,{
      //clearHistory:true,
    })
  },
},
watch:{

},
created(){


  }
};
</script>

<style scoped>
.button{
  color: white;
  font-weight: bold;
  font-size: 14;
  text-align: center;
}
.content{
  margin-left: 40;
  margin-right: 40;
}
.text{
  font-size: 10;
  text-align: center;
  margin-top: 10;
}
.mar{
  /*margin-left: 5;
  margin-right: 5;*/
  margin-bottom: 20;
}
.circle{
  width: 80;
  height: 150;
  background-color: white;
  border-radius: 50;
  vertical-align: middle;
  padding-right: 10;
  padding-left: 10;
 /* box-shadow: 5 10 5 black;*/
  /*margin-left: 5;
  margin-right: 5;
  margin-top: 20;*/
}
.img{
  /*background-color: blue;*/
  width: 20;
  height: 20;
}
.login{
  background-color: #000080;
  padding-bottom: 20;
  padding-top: 20;
 /* margin-left: -10;
  margin-right: -10;*/
}
.page{
  /*vertical-align: middle;*/
  background-color: whitesmoke;
  background-image: ~/images/land.jpeg;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

}

</style>