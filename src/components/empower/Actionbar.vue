<template>
      	<ActionBar class="action-bar">
              <NavigationButton android.systemIcon="ic_menu_back" @tap="drawerTap" />
        <Image src="~/images/honey.png" width="200" height="40" />
        <ActionItem @tap="logout"
    ios.systemIcon="9" ios.position="left"
    android.systemIcon="ic_lock_power_off" android.position="actionBar" />
            </ActionBar>
</template>

<script>
  export default {
    data () {
      return {
      };
    },
    methods:{
    	logout(){

    	},
    	 drawerTap(){
        this.$refs.drawer.nativeView.toggleDrawerState();
      }
    },
  };
</script>

<style scoped>
.action-bar {
background-color: #000080;
}
</style>