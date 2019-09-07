<template>
  <div id="app">
    <v-app id="inspire">
      <Navbar/>

      <v-content>
        <router-view></router-view>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";


export default {
  name: "App",
  components: {
    Navbar
  },
  data() {
    return {
      drawer:null
    };
  }
};
</script>

<style>
.application--wrap {
  flex-direction: row;
}
</style>
