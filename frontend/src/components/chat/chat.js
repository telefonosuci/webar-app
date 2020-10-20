class Chat {
  constructor() {}

  init() {
    if (navigator.getUserMedia) {
      navigator.getUserMedia(
        { audio: false, video: { width: 1280, height: 720 } },
        function (stream) {
          var video = document.querySelector("video");
          video.srcObject = stream;
          video.onloadedmetadata = function (e) {
            video.play();
          };
        },
        function (err) {
          console.log("The following error occurred: " + err.name);
        }
      );
    } else {
      console.log("getUserMedia not supported");
    }
  }
}

export const chat = new Chat();
export default {};
