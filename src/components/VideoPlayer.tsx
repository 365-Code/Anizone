// "use client"
// import Hls from "hls.js";
// import Plyr from "plyr";
// import React from "react";

// const VideoPlayer = ({ source }: { source: string }) => {
//   document.addEventListener("DOMContentLoaded", () => {
//     const video = document.querySelector("video-player") as HTMLVideoElement;

//     // For more options see: https://github.com/sampotts/plyr/#options
//     // captions.update is required for captions to work with hls.js
//     const player = new Plyr(video, {
//       captions: { active: true, update: true, language: "en" },
//     });

//     if (!Hls.isSupported()) {
//       video.src = source;
//     } else {
//       // For more Hls.js options, see https://github.com/dailymotion/hls.js
//       const hls = new Hls();
//       hls.loadSource(source);
//       hls.attachMedia(video);
//       // window.hls = hls;

//       // Handle changing captions
//       player.on("languagechange", () => {
//         // Caption support is still flaky. See: https://github.com/sampotts/plyr/issues/994
//         setTimeout(() => (hls.subtitleTrack = player.currentTrack), 50);
//       });
//     }

//     // Expose player so it can be used from the console
//     // window.player = player;
//   });
  
//   return (
//     <div className="w-10">
//       <video
//         id="video-player"
//         controls
//         playsInline
//         poster="https://bitdash-a.akamaihd.net/content/sintel/poster.png"
//       ></video>
//     </div>
//   );
// };

// export default VideoPlayer;


"use client";
import Hls from "hls.js";
import Plyr from "plyr";
import React from "react";

const Player = ({ source }: { source: any }) => {
  
  const playerRef = React.useRef<HTMLVideoElement>(null);

  function playVideo() {
    if (playerRef.current) playerRef.current.play();
  }

  function pauseVideo() {
    if (playerRef.current) playerRef.current.pause();
  }

  function toggleControls() {
    if (playerRef.current)
      playerRef.current.controls = !playerRef.current.controls;
  }

  document.addEventListener("DOMContentLoaded", () => {
    const video = document.querySelector("video") as HTMLVideoElement;

    // For more options see: https://github.com/sampotts/plyr/#options
    // captions.update is required for captions to work with hls.js
    const player = new Plyr(video, {
      captions: { active: true, update: true, language: "en" },
    });

    const hls = new Hls();
    if (!Hls.isSupported()) {
      video.src = source;
    } else {
      // For more Hls.js options, see https://github.com/dailymotion/hls.js
      hls.loadSource(source);
      hls.attachMedia(video);
      // Handle changing captions
      player.on("languagechange", () => {
        // Caption support is still flaky. See: https://github.com/sampotts/plyr/issues/994
        setTimeout(() => (hls.subtitleTrack = player.currentTrack), 50);
      });
    }

    // Expose player so it can be used from the console
  });

  return (
      <div className="container">
        <video
          controls
          crossOrigin=""
          playsInline
          poster="https://bitdash-a.akamaihd.net/content/sintel/poster.png"
        ></video>
      </div>
  );
};

export default Player;
