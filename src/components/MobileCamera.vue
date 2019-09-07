<template>
<div id="inspire">
<div v-if="MobCamera">
  <v-container fluid class="back">
    <v-layout row justify-center align-center fill-height>
      <v-flex xs12 lg6 md6>
        <div class="camera-modal back">
          <video ref="video" class="camera-stream"/>
          <div class="camera-modal-container">
            <v-btn
              v-on:click="capture"
              class="take-picture-button take-picture-button mdl-button mdl-js-button mdl-button--fab mdl-button--colored primary"
            >
              <i class="material-icons">camera</i>
            </v-btn>
          </div>
        </div>
        
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
          style="margin-left:45%; margin-top:20%;"
        ><p style="margin-top:60px;">Checking..</p></v-progress-circular>
          </div>
        </v-flex>
      </v-flex>    
    </v-layout>
    
    <v-layout row>
      <v-flex xs12>
        <div>{{mainerror}}</div>
      </v-flex>
    </v-layout>
    
  </v-container>
  </div>

  <div v-if="show">
  <app-store v-bind:images="images"></app-store>
  </div>

  </div>
</template>

<script>
import Vue from 'vue'
import Store from "@/components/Store";
//import * as camera from "nativescript-camera";
import axios from "axios";
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
export default {
  
 
  components:{
    'app-store':Store
  },
  data() {
    return {
      mediaStream: null,
      mainerror: null,
      MobCamera: true,
      show: false,
      fail: false,
      load:false,
      images:[]
    };
  },
  methods: {
      capture() {
      
      this.load = true
      //camera.requestPermissions()
      const mediaStreamTrack = this.mediaStream.getVideoTracks()[0];
      const imageCapture = new window.ImageCapture(mediaStreamTrack);
      //console.log(imageCapture)
      return imageCapture.takePhoto().then(blob => {
      console.log(blob);
      var base64data = "";
      var reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
      base64data = reader.result;
        //console.log(base64data);
      var img = base64data.split(",");
      var data = new FormData();
      data.append("img", img[1]);
      data.append("capture", true);
      var config = {
          header: {
            "Content-Type": "multipart/form-data"
            }
          };
          axios
            .post("http://localhost/pwa-images/pwa-image.php", data, config)
            .then(response => {
              console.log(response.data);
              if(response.data.length>0){
                
                this.images = response.data
                this.MobCamera = false
                this.show = true
                
              }
              else{
                // alert("fail")
                this.fail = true
                this.load = false
                //Vue.set();
                
              }
            })
            .catch(function(error) {
              console.log(error);
              alert('Upload Failed');
            });
        };
      });
    },
    successReq() {
      alert("image saved successfully");
    },
    errorReq() {
      alert("error while saving");
    }
  },
  mounted() {
    navigator.permissions.query({name: 'camera'})
    .then((permissionObj) => {
      //console.log(permissionObj.state);
      navigator.mediaDevices
      .getUserMedia({ video: { facingMode: "enviroment" } })
      .then(mediaStream => {
        this.mediaStream = mediaStream;
        this.$refs.video.srcObject = mediaStream;
        this.$refs.video.play();
      })
      .catch(
        error =>
          //alert('getUserMedia() error:', error)
          (this.mainerror = "Error is = " + error)
        //console.error('getUserMedia() error:', error)
      );
    })
    .catch((error) => {
      alert('Got error :'+error);
    })
    
  },
  destroyed() {
    const tracks = this.mediaStream.getTracks();
    tracks.map(track => track.stop());
  }
};
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
.camera-modal {
  height: 100%;
  /* top: 0;
  left: 0; */
  background-color: white;
  z-index: 20;
}
.camera-stream {
  width: 100%;
  max-height: 100vh;
}
.camera-modal-container {
  bottom: 0;
  width: 100%;
  /* margin-bottom: 24px; */
  justify-content: center;
  align-content: center;
}
.take-picture-button {
  display: inline;
  justify-content: center;
  text-align: center;
}
</style>