import { useRef, useEffect } from "react";

const AudioPlayer = ({ src, autoplay }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio && autoplay) {
      audio.play();
    }
    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, [src, autoplay]);

  return <audio ref={audioRef} src={src} />;
};

export default AudioPlayer;
