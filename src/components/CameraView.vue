<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <div class="camera-modal">
          <video ref="video" class="camera-stream"/>
          <div class="camera-modal-container">
            <v-btn
              v-on:click="capture"
              class="take-picture-button take-picture-button mdl-button mdl-js-button mdl-button--fab mdl-button--colored primary">
              <i class="material-icons">camera</i>
            </v-btn>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      mediaStream: null,
      drawer:null
    };
  },
  methods: {
    capture() {
      const mediaStreamTrack = this.mediaStream.getVideoTracks()[0];
      const imageCapture = new window.ImageCapture(mediaStreamTrack);
      return imageCapture.takePhoto().then(blob => {
        console.log(blob);
      });
    }
  },
  mounted() {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(mediaStream => {
        this.$refs.video.srcObject = mediaStream;
        this.$refs.video.play();
      })
      .catch(error => console.error("getUserMedia() error:", error));
  },

  destroyed() {
    const tracks = this.mediaStream.getTracks();
    tracks.map(track => track.stop());
  }
};
</script>


<style scoped>
.camera-modal {
  height: 100%;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 10;
}
.camera-stream {
  width: 100%;
  max-height: 100%;
}
.camera-modal-container {
  bottom: 0;
  width: 100%;
  margin-bottom: 24px;
  justify-content: center;
  align-content: center;
}
.take-picture-button {
  display: flex;
}
</style>