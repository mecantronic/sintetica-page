import { useRef, useState } from "react";
import AudioSlider from "./AudioSlider";
import AudioControls from "./AudioControls";
import PropTypes from "prop-types";
import {
  AudioContainerLeft,
  Container,
} from "../../styles/components/audioPlayer/audioPlayer.style";
import DownloadButton from "../buttons/DownloadButton";

function AudioPlayer({ light, audioSrc }) {
  const [percentage, setPercentage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioRef = useRef();

  const onChange = (e) => {
    const audio = audioRef.current;
    audio.currentTime = (audio.duration / 100) * e.target.value;
    setPercentage(e.target.value);
  };

  const play = () => {
    const audio = audioRef.current;
    audio.volume = 0.1;

    if (!isPlaying) {
      setIsPlaying(true);
      audio.play();
    } else {
      setIsPlaying(false);
      audio.pause();
    }
  };

  const getCurrDuration = (e) => {
    const percent = (
      (e.currentTarget.currentTime / e.currentTarget.duration) *
      100
    ).toFixed(2);
    const time = e.currentTarget.currentTime;

    setPercentage(+percent);
    setCurrentTime(time.toFixed(2));
  };

  const onAudioEnded = () => {
    setIsPlaying(false);
  };

  return (
    <Container className="app-container" light={light}>
      <AudioContainerLeft className="app-container" light={light}>
        <AudioSlider
          percentage={percentage}
          onChange={onChange}
          light={light}
        />
        <audio
          ref={audioRef}
          onTimeUpdate={getCurrDuration}
          onLoadedData={(e) => {
            setDuration(e.currentTarget.duration.toFixed(2));
          }}
          src={audioSrc}
          onEnded={onAudioEnded}
        ></audio>
        <AudioControls
          play={play}
          isPlaying={isPlaying}
          duration={duration}
          currentTime={currentTime}
          light={light}
        />
      </AudioContainerLeft>

      <DownloadButton square={true} link="hola"/>
    </Container>
  );
}

AudioPlayer.propTypes = {
  light: PropTypes.bool,
  audioSrc: PropTypes.string,
};

export default AudioPlayer;
