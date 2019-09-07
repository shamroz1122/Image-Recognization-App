<template>
<div id="inspire">
   <div v-if="gallery"> 
    <v-container class="back" mt-3 fluid pa-0>
      <v-layout row wrap justify-center fill-height>
        <v-form>
        <!-- <v-flex xs12 >
          <input type="file" @change="onFileChanged">
        </v-flex> -->
        
        <v-flex xs12 lg12 sm12 md12>
            <input type="file" @change="onFileSelected"
              style=" position:absolute; z-index:3; cusrsor:pointer; margin-left:5%; margin-top:35%; height:110px; width:100px; margin-bottom:50%; opacity:0;"
            >
            <v-responsive>
              <v-img :src="require('../assets/icon_trans.png')" style="  margin-top:90%;width:100%;z-index:2; margin-bottom:20px;"></v-img>    
            </v-responsive>
            <span class="title white--text font-weight-thin" pt-5>Tap To Upload!</span>
          </v-flex>

          <v-flex xs12 lg12 sm12 md12>
            <div id="preview">
              <v-responsive>
              <v-img cover v-if="url" :src="url"></v-img>
              </v-responsive>
            </div>
          </v-flex>
          
          <!-- <span class="title white--text">{{ message }}</span> -->
        
        <v-flex xs12 justify-center align-center style=" text-align:center; margin-top:60%;">
        
        <v-btn class="primary font-weight-light" style="width:90%; border-radius:20px;" @click="onUpload">Upload</v-btn>
        
        </v-flex>
         <v-alert
            v-if="fail"
            :value ="true"
            type="error"
          >
            No Result Found
          </v-alert>
        <v-flex xs12 sm12 lg12 md12>
          <div v-if="load">
          <v-progress-circular
          :size="30"
          color="primary"
          indeterminate
          style="margin-left:40%;"
        ><p style="margin-top:65px;">Checking..</p></v-progress-circular>
          </div>
        </v-flex>
        </v-form>
      </v-layout>

    </v-container>
  </div>
  <div v-if="show">
    <app-store v-bind:images="images"></app-store>
  </div>

  </div>
</template>



<script>

import Store from "@/components/Store";
import axios from "axios";
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
export default {
  components:{
    'app-store':Store
  },
  data() {
    return {
      selectedFile: null,
      show:false,
      gallery:true,
      interval: {},
      images:[],
      fail: false,
      load:false,
      url:null
    
    };
  },
  methods: {
    onFileSelected(event){
     
     const selectedFile = event.target.files[0]
     this.url = URL.createObjectURL(selectedFile);
     console.log(event.target.files[0])
     this.selectedFile = event.target.files[0]
     
    },
    onUpload() {
      this.load = true
        var formData = new FormData()
        formData.append("img", this.selectedFile, this.name)
        var config = {
          header: {
            "Content-Type": "multipart/form-data"
            },
          };
          axios.post('http://localhost/pwa-images/pwa-image.php', formData, config) 
          .then(response => {
              console.log(response.data)
                if(response.data.length > 0)
                {
                  this.images = response.data
                  this.gallery = false
                  this.show = true
                }
                else{
                // alert("fail")
                //alert("Not Found")
                this.load = false
                this.fail = true
                //Vue.set();
                
              }
            })
            .catch(function(error) {
              console.log(error);
              alert('Upload Failed');
            });
        //};
    }
  },
}
</script>

<style scoped>
.back {
  background-image: url(../assets/splash-bg.png);
  background-size: cover;
  height: 100vh;
}
#inspire{
    background:  #cccccc;
}

.v-progress-circular
    {
      margin:1rem;
    }

#preview {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
}

#preview v-img {
  max-width: 70%;
  max-height: 250px;
}    
</style>
