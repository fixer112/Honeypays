<template>
  <Page class="page">

            <ActionBar class="action-bar">
              <NavigationButton android.systemIcon="ic_menu_back" @tap="$modal.close" />
        <Label text="Proof" style="text-align: center; font-weight: bold; color: white" />
        <ActionItem @tap="logout"
    ios.systemIcon="9" ios.position="left"
    android.systemIcon="ic_lock_power_off" android.position="actionBar" color="#fff"/>
            </ActionBar>
            <StackLayout>
            <Image :src="'https://empower.honeypays.com.ng'+img" width="500" height="500" class=""/>
            <Label :text="'https://empower.honeypays.com.ng'+img" textWrap="true" class="name"></Label>
          </StackLayout>
  </Page>
</template>

<script>
import axios from 'axios';
import Login from './Login';
  export default {
    data () {
      return {

      };
    },
    props:['img'],
    methods:{
      logout(){
            this.show();
            this.busy= true;
            axios.get('https://empower.honeypays.com.ng/logout')
            .then(response => {
              this.hide();
              this.busy= false;
              console.log(response.data);
              this.$navigateTo(Login,{
              clearHistory:true,
            })
            })
            .catch((error)=>{
              this.hide();
              this.busy= false;
              console.log(error.response.data);
              this.danger('Error(s)', error);
            })

      },
      
    },
    created(){

  this.check_tym();
}
  };
</script>

<style scoped>
.img{

}

</style>