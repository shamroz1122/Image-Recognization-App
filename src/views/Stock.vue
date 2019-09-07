<template>
<div id="inspire">
    <v-container fluid pa-0>
        <v-layout row wrap fill-height>
            <v-flex xs-12 lg12 md12 sm12 mt-4>                
                <carousel :per-page="1" autoplay='true' loop='true'  width='500' height='250' autoplayDirection="forward">
                <slide data-index="0">
                    <div>
                    <v-responsive>
                        <v-img :src="require('../assets/slider_1.png')"  ></v-img>    
                    </v-responsive>
                    </div>    
                </slide>   
                <slide data-index="1">
                    <div>
                    <v-responsive>
                        <v-img :src="require('../assets/slider_1.png')"></v-img>    
                    </v-responsive>
                    </div>    
                </slide>   
                <slide data-index="2">
                    <div>
                    <v-responsive>
                        <v-img :src="require('../assets/slider_1.png')" ></v-img>    
                    </v-responsive>
                    </div>    
                </slide>   
                </carousel>             
            </v-flex>
        </v-layout>
    </v-container>

    <v-container>
        <v-layout>    
            <v-flex xs12 sm6 lg12 md12 >
                <v-card>
                <v-container  fluid grid-list-lg v-if="OrgPhotos.length>0">
                    <v-layout row wrap >
                    <v-flex xs6 lg6 md6 v-for="photo in OrgPhotos" :key="photo">
                        <v-card>
                            <v-responsive>
                        <v-img
                            v-bind:src="`http://localhost/pwa-images/${photo}`"
                            height="150px"  width="164px"
                        ></v-img>
                        </v-responsive>
                        </v-card>
                    </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>  
        </v-layout>
    </v-container>
</div>
</template>

<script>
import axios from "axios";
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
import { Carousel, Slide } from 'vue-carousel';


export default {
components: {
Carousel,
Slide
},
data () {
    return {
    drawer: null,
    OrgPhotos:[]
    }
}, 
mounted(){
    //   console.log("Store",this.images)
    axios.get('http://localhost/pwa-images/stock.php')
    .then(response => {
        
        if(response.data.length>0){
            this.OrgPhotos = response.data
            console.log(response.data)
        }
    })
  },
methods:{
    call(){
    axios.get('http://localhost/pwa-images/stock.php')
    .then(response=>{
        console.log(response.data)
        if(response.data>0){
            this.OrgPhotos = response.data
        }
    })
}
}
}
</script>

<style scoped>
#inspire{
background:  #cccccc;
}

.VueCarousel-pagination[data-v-438fd353]{
background: transparent;
height: 20px;
background: #a8844a;
}
.VueCarousel-dot.VueCarousel-dot--active{
background-color: #a8844a;
}
</style>
