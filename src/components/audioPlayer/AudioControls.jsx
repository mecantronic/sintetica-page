import PropTypes from "prop-types";
import { RiPauseMiniLine, RiPlayMiniLine } from "react-icons/ri";
import { BTNContainer, Container, Timer } from "../../styles/components/audioPlayer/audioControl.style";


function AudioControls({ play, isPlaying, duration, currentTime, light }) {
  function secondsToHms(seconds) {
    if (!seconds) return "00m 00s";

    let duration = seconds;
    let hours = duration / 3600;
    duration = duration % 3600;

    let min = parseInt(duration / 60);
    duration = duration % 60;

    let sec = parseInt(duration);

    if (sec < 10) {
      sec = `0${sec}`;
    }
    if (min < 10) {
      min = `0${min}`;
    }

    if (parseInt(hours, 10) > 0) {
      return `${parseInt(hours, 10)}h ${min}m ${sec}s`;
    } else if (min == 0) {
      return `00m ${sec}s`;
    } else {
      return `${min}m ${sec}s`;
    }
  }

  return (
    <Container className="control-panel">
      <Timer className="timer" light={light}>{secondsToHms(currentTime)}</Timer>
      <BTNContainer className="btn-container" light={light}>
        {isPlaying ? (
          <RiPauseMiniLine onClick={play} style={{ cursor: "pointer" }} />
        ) : (
          <RiPlayMiniLine onClick={play} style={{ cursor: "pointer" }} />
        )}
      </BTNContainer>
      <Timer className="timer" light={light} >{secondsToHms(duration)}</Timer>
    </Container>
  );
}

AudioControls.propTypes = {
  isPlaying: PropTypes.bool,
  duration: PropTypes.number,
  currentTime: PropTypes.number,
  play: PropTypes.func,
  light: PropTypes.bool,
};

export default AudioControls;
