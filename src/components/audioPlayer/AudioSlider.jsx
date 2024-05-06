import { useRef, useState } from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  ProgressBarCover,
  Range,
  Thumb,
} from '../../styles/components/audioPlayer/audioSlider.style';

function AudioSlider({ percentage = 0, onChange, light }) {
  const [position, setPosition] = useState(0);
  const [marginLeft, setMarginLeft] = useState(0);
  const [progressBarWidth, setProgressBarWidth] = useState(0);

  const rangeRef = useRef();
  const thumbRef = useRef();

  useEffect(() => {
    const rangeWidth = rangeRef.current.getBoundingClientRect().width;
    const thumbWidth = thumbRef.current.getBoundingClientRect().width;
    const centerThumb = (thumbWidth / 100) * percentage * -1;
    const centerProgressBar =
      thumbWidth +
      (rangeWidth / 100) * percentage -
      (thumbWidth / 100) * percentage;
    setPosition(percentage);
    setMarginLeft(centerThumb);
    setProgressBarWidth(centerProgressBar);
  }, [percentage]);

  return (
    <Container className="slider-container" light={light}>
      <ProgressBarCover
        className="progress-bar-cover"
        style={{
          width: `${progressBarWidth}px`,
        }}
        light={light}
      ></ProgressBarCover>
      <Thumb
        className="thumb"
        ref={thumbRef}
        style={{
          left: `${position}%`,
          marginLeft: `${marginLeft}px`,
        }}
        light={light}
      ></Thumb>
      <Range
        type="range"
        value={position}
        ref={rangeRef}
        step="0.01"
        className="range"
        onChange={onChange}
      />
    </Container>
  );
}

AudioSlider.propTypes = {
  percentage: PropTypes.number,
  onChange: PropTypes.func,
  light: PropTypes.bool,
};

export default AudioSlider;
