// import * as React from "react";
// import { APITypes, PlyrProps, usePlyr } from "plyr-react";
// import "plyr-react/plyr.css";
// import Hls from "hls.js";
// import { Options } from "plyr";

// const videoOptions = null;
// const videoSource = null;
// // const hlsSource = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";
// const hlsSource = "/stream.m3u8";

// /**
//  * This is a custom hook in TypeScript React that loads and attaches an HLS video source to a Plyr
//  * player, and sets the quality options for the player.
//  * @param {string} src - The source URL of the video that will be played.
//  * @param {Options | null} options - `options` is an object that contains optional configuration
//  * options for the Plyr player. It can include properties such as `autoplay`, `controls`, `loop`,
//  * `muted`, `seekTime`, `volume`, and more. This parameter is optional and can be `null`.
//  * @returns The `useHls` function returns an object with a single property `options`, which is of type
//  * `Options | null`. The `options` object contains information about the video quality and any other
//  * custom event listeners that may have been added.
//  */

// const useHls = (src: string, options: Options | null) => {
//   const hls = React.useRef<Hls>(new Hls());
//   const hasQuality = React.useRef<boolean>(false);
//   const [plyrOptions, setPlyrOptions] = React.useState<Options | null>(options);

//   React.useEffect(() => {
//     hasQuality.current = false;
//   }, [options]);

//   React.useEffect(() => {
//     hls.current.loadSource(src);
//     // NOTE: although it is more reactive to use the ref, but it seems that plyr wants to use the old as lazy process
//     hls.current.attachMedia(document.querySelector(".plyr-react")!);
//     /**
//      * You can all your custom event listener here
//      * For this example we iterate over the qualities and pass them to plyr player
//      * ref.current.plyr.play() ❌
//      * console.log.bind(console, 'MANIFEST_PARSED') ✅
//      * NOTE: you can only start play the audio here
//      * Uncaught (in promise) DOMException: play() failed because the user didn't interact with the document first.
//      */
//     hls.current.on(Hls.Events.MANIFEST_PARSED, () => {
//       if (hasQuality.current) return; // early quit if already set

//       const levels = hls.current.levels;
//       const quality: Options["quality"] = {
//         default: levels[levels.length - 1].height,
//         options: levels.map((level) => level.height),
//         forced: true,
//         /* `onChange` is a callback function that gets triggered when the user changes the quality of
//        the video. It takes in a `newQuality` parameter which is the new quality selected by the
//        user. */
//         onChange: (newQuality: number) => {
//           console.log("changes", newQuality);
//           levels.forEach((level, levelIndex) => {
//             if (level.height === newQuality) {
//               console.log(level);
//               hls.current.currentLevel = levelIndex;
//             }
//           });
//         },
//       };
//       setPlyrOptions({ ...plyrOptions, quality });
//       hasQuality.current = true;
//     });
//   });

//   return { options: plyrOptions };
// };

// /** `CustomPlyrInstance` is a custom React component that renders a video player using the Plyr library
// and supports HLS video streaming. It is created using the `React.forwardRef` function, which allows
// the component to receive a `ref` to the player instance as a prop. */
// const CustomPlyrInstance = React.forwardRef<
//   APITypes,
//   PlyrProps & { hlsSource: string }
// >((props, ref) => {
//   const { source, options = null, hlsSource } = props;
//   const raptorRef = usePlyr(ref, {
//     ...useHls(hlsSource, options),
//     source,
//   }) as React.MutableRefObject<HTMLVideoElement>;
//   return <video ref={raptorRef} className="plyr-react plyr" />;
// });

// /**  The `PlyrComponent` is a functional component that renders a video player using the Plyr library and
// supports HLS video streaming. If it is supported, it renders the `CustomPlyrInstance` component passing in the `ref`,
// `source`, `options`, and `hlsSource` props. If HLS is not supported, it renders a message saying so. */
// const Player = ({source}: {source: string}) => {
//   const ref = React.useRef<APITypes>(null);
//   const supported = Hls.isSupported();

//   return (
//     <div className="wrapper">
//       {supported ? (
//         /**  `<CustomPlyrInstance>` is a custom React component that renders a video player using the
//         Plyr library and supports HLS video streaming. It takes in several props: */
//         <CustomPlyrInstance
//           ref={ref}
//           source={videoSource}
//           options={videoOptions}
//           hlsSource={hlsSource}
//         />
//       ) : (
//         "HLS is not supported in your browser"
//       )}
//     </div>
//   );
// };

// export default Player;



import { useEffect, useRef } from "react";
import "plyr-react/plyr.css";
import Hls from "hls.js";
import Plyr, { APITypes, PlyrProps, PlyrInstance } from "plyr-react";

const MyComponent = ({ source }: { source: string }) => {
  const ref = useRef<APITypes>(null);
  useEffect(() => {
    const loadVideo = async () => {
      const video = document.getElementById("plyr") as HTMLVideoElement;
      var hls = new Hls();
      // hls.loadSource("https://content.jwplatform.com/manifests/vM7nH0Kl.m3u8");
      // hls.loadSource("https://www034.vipanicdn.net/streamhls/7244984011002ee29dc294666636b688/ep.1.1709545502.480.m3u8");
      hls.loadSource(source);
      hls.attachMedia(video);

      // @ts-ignore
      ref.current!.plyr.media = video;

      hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
        (ref.current!.plyr as PlyrInstance).play();
      });
    };
    loadVideo();
  });

  return (
    <section className="my-container">
    <Plyr
      id="plyr"
      options={{ volume: 0.1, seekTime: 5, keyboard: {focused: true}}}
      source={{} as PlyrProps["source"]}
      ref={ref}
      autoPlay={false}
      />
      </section>
  );
};

export default function Player({ source }: { source: string }) {
  const supported = Hls.isSupported();

  return (
    <div>
      {supported ? (
        <MyComponent source={source} />
      ) : (
        "HLS is not supported in your browser"
      )}
    </div>
  );
}
