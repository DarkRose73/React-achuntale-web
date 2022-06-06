import React, { useRef, useState } from "react";

const VideoPromocional = () => {
  const videoRef = useRef();
  const [reproducir, setReproducir] = useState(true);

  const handlePlay = () => {
    const video = videoRef.current;
    if (reproducir) {
      video.pause();
    } else {
      video.play();
    }
    setReproducir(!reproducir);
  };
  return (
    <div>
      <div className="card mx-auto bg-dark contenedor-video-promocional">
        <video
          loop={true}
          ref={videoRef}
          muted={true}
          autoPlay={true}
          src={require("./images/VideoPromo.mp4")}
          className="card-img-top"
          style={{ height: "500px" }}
          onClick={() => handlePlay()}
        ></video>
      </div>
    </div>
  );
};

export default VideoPromocional;
