<template>
    <div id="inspire">
        <v-container fluid pa-0>
            <v-layout row wrap fill-height>
                <v-flex xs-12 lg12 md12 sm12 mt-4>                
                   <carousel :per-page="1" autoplay="true" loop="true"  width='500' height='250' autoplayDirection="forward">
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
        
        <v-container class="white cont">
          
            <v-layout row wrap>
                <v-flex xs12 lg12 md12 sm12>
                <p class="title primary--text">Related Images:</p>
                </v-flex>
            </v-layout>
        </v-container>

        <v-container>
            <v-layout>
                 <div v-if="OrgImages.length>0">
                <v-flex xs12 sm6 lg12 md12 >
                    <v-card>
                    <v-container  fluid grid-list-lg>
                        <v-layout row wrap >
                   
                        <v-flex
                        v-for="image in OrgImages" :key="image"
                            xs6
                            lg4
                            md4>         
                            <v-card>
                                <v-responsive>
                            <v-img
                                v-bind:src="`http://localhost/pwa-images/${image}`"
                                height="150px"  width="164px"
                            ></v-img>
                            </v-responsive>
                            </v-card>
                       </v-flex>
                       </v-layout>
                    </v-container>
                    </v-card>
                </v-flex>
                </div>
                 <div v-else>
                        <v-flex xs12 lg12 md12 sm12>
                        <p class="title primary--text">No Result Found!!</p>
                            </v-flex>
                        </div>
                </v-layout>
        </v-container>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';


  export default {
    props:{
        images:{
            type:Array,
            default:[]
        },
    },
    
    components: {
        Carousel,
        Slide
  },
  mounted(){
    //   console.log("Store",this.images)
      this.OrgImages = this.images
  },
    data () {
      return {
        OrgImages:[],
        drawer: null
      }
    }
  }
</script>

<style scoped>
#inspire{
    background:  #cccccc;
}

.VueCarousel-pagination[data-v-438fd353]{

background: #a8844a;
}
.VueCarousel-dot.VueCarousel-dot--active{
    background-color: #a8844a;
}
</style>
