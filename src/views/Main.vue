<template>
<div  id="inspire">
  <v-container fluid fill-height class="back">
    <v-layout row wrap justify-center align-center>
      <v-flex lg12 md12 sm12 xs12>
                <v-img
                  :src="require('../assets/logo.png')"
                  class="my-3"
                  contain
                  height="226"
                  style="top:40px"
                ></v-img>
              </v-flex>
      <v-flex lg12 md12 sm12 xs12 text-xs-center>
        <router-link
          class="take-picture-button mdl-button mdl-js-button mdl-button--fab mdl-button--colored"
          to=""
        >
          <v-img :src="require('../assets/btn_our_stock_designs.png')" contain height="45" ></v-img>
        </router-link>
      </v-flex>

      <v-flex lg12 md12 sm12 xs12 text-xs-center>
        <router-link
          class="take-picture-button mdl-button mdl-js-button mdl-button--fab mdl-button--colored"
          to="/options"
        >
          <v-img :src="require('../assets/btn_find_your_design.png')" contain height="45" style="top:-8px;"></v-img>
        </router-link>

      </v-flex>
      <v-flex xs12 lg12 md12 sm12 text-xs-center>
        <router-link
          class="take-picture-button mdl-button mdl-js-button mdl-button--fab mdl-button--colored"
          to="/stock"
        >
            <v-img :src="require('../assets/btn_our_stock_designs.png')" contain height="45" style="top:-18px;"></v-img>
        </router-link>
      </v-flex>
        <v-flex xs12 lg12 md12 sm12 text-xs-center>
      <router-link
          class="take-picture-button mdl-button mdl-js-button mdl-button--fab mdl-button--colored"
          to=""
        >
        <v-img :src="require('../assets/btn_diamond_stock.png')" contain height="45" style="top:-28px;"></v-img>

        </router-link>
        </v-flex>
        <v-flex xs12 lg12 md12 sm12 text-xs-center>
      <router-link
          class="take-picture-button mdl-button mdl-js-button mdl-button--fab mdl-button--colored"
          to=""
        >
        <v-img :src="require('../assets/btn_check_your_ring_size.png')" contain height="45" style="top:-38px;"></v-img>

        </router-link>
        </v-flex>
    </v-layout>
  </v-container>
</div>
</template>

<script>
export default {
data () {
    return {
      drawer: null
    }
  }
}
</script>



<style scoped>
.back {
background-image: url(../assets/splash-bg.png);
background-size: cover;
height: 100vh;
}
#inspire{
background: none;
}
</style>

