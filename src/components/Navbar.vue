<template>

<v-app id="inspire">
  
  <v-toolbar class="primary" dark fixed  style="height:30px;">
    
    <v-btn icon class="pb-5" v-on:click="back">
      <v-icon class="icon1 pr-4">keyboard_backspace
      </v-icon>
    </v-btn>  
    
    <v-spacer></v-spacer>
    <v-toolbar-title class="subheading font-weight-light pl-4" style="padding-bottom: 20px;
    ">RINGATIC</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon class="pb-5">
    <v-icon class="icon1 pl-5">search
    </v-icon>
    </v-btn>
    <v-btn icon class="pb-5">
      <v-icon class="icon1 pl-2">shopping_cart
    </v-icon>
    </v-btn>
  </v-toolbar>

</v-app>
</template>

<script>
export default {
methods:{
  back(){
    this.$router.go(-1)
  }
},
data() {
  return {
    drawer: false,
    links: [
      { icon: "home", text: "HomePage", route: "/main" },
      {
        icon: "linked_camera",
        text: "Mobile Camera",
        route: "/mobileCamera"
      },
      { icon: "folder_open", text: "Upload Image", route: "/gallery" }
    ]
  };
}
};
</script>

<style scoped>
.icon1{
font-size: 18px;
padding-top: 3px;
}
.icon12{
font-size: 15px;
padding-top: 3px;
}
</style>
