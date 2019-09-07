    <template>
    <div id="inspire">
    <v-container fluid fill-height class="back">
      <v-layout row wrap justify-center align-center>
            <v-flex lg12 md12 xs12 sm12>
            <v-img
              :src="require('../assets/ic_camera.png')"
              class="my-2"
              contain
              height="250"
              style="top:30px"
            ></v-img>
          </v-flex>
          <!-- <p style="color:#fff">sadsada<{{"Wind"+root}}/p> -->
      <template v-if=" root === 'Netscape'">
      <v-flex xs12 sm12 lg12 md12 text-xs-center >
        <router-link
          class="take-picture-button mdl-button mdl-js-button mdl-button--fab mdl-button--colored"
          to="/gallery">
          <v-img :src="require('../assets/btn_takephoto.png')" contain height="48" style="top:-58px"></v-img>
        </router-link>
      </v-flex>
      </template>
        <template v-else>
        <v-flex xs12 sm12 lg12 md12 text-xs-center >
        <router-link
          class="take-picture-button mdl-button mdl-js-button mdl-button--fab mdl-button--colored"
          to="/MobileCamera">
          <v-img :src="require('../assets/btn_takephoto.png')" contain height="48" style="top:-18px"></v-img>
        </router-link>
      </v-flex>
      <v-flex xs12 sm12 lg12 md12 text-xs-center>
        <router-link
          class="take-picture-button mdl-button mdl-js-button mdl-button--fab mdl-button--colored"
          to="/gallery">
          <v-img :src="require('../assets/btn_gallery.png')" contain height="48" style="top:-70px" ></v-img>
        </router-link>
      </v-flex>
      </template>
    </v-layout>
    </v-container>
    </div>
    </template>

    <script>
    export default {

    data () {
    return {
    drawer: null, 
    root: navigator.userAgent.split(')').reverse()[0].match(/(?!Gecko|Version|[A-Za-z]+?Web[Kk]it)[A-Z][a-z]+/g)[0]
    }
    
    },
    methods:{
      
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

