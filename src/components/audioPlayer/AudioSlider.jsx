import styled from "styled-components";
import theme from "../../styles/theme";
import { useRef, useState } from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";

const Container = styled.div`
  --progress-bar-height: 4px;
  --thumb-width: 10px;
  --thumb-height: 10px;

  position: relative;
  width: 100%;

  &::before {
    content: "";
    background-color: ${(props) =>
      props.light ? theme.colors.gray : theme.colors.white};
    width: 99%;
    height: calc(var(--progress-bar-height) - 1px);
    display: block;
    position: absolute;
    border-radius: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }
`;
const ProgressBarCover = styled.div`
  background-color: ${(props) =>
    props.light ? theme.colors.electricindigo : theme.colors.lavenderfloral};
  width: 0%;
  height: var(--progress-bar-height);
  display: block;
  position: absolute;
  border-radius: 4px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  user-select: none;
  pointer-events: none;
`;

const Thumb = styled.div`
  width: var(--thumb-width);
  height: var(--thumb-height);
  box-shadow: ${(props) =>
    props.light
      ? theme.colors.lavenderfloral
      : "0px 0px 5px rgba(0, 0, 0, 0.753)"};
  z-index: 3;
  background: ${(props) =>
    props.light ? theme.colors.gray : theme.colors.white};
  position: absolute;
  border-radius: 50%;
  top: 50%;
  transform: translate(0%, -50%);
  pointer-events: none; /* Remove pointer events on thumb so user can click on the actual thumb beaneath it!  */
  user-select: none;
`;

const Range = styled.input`
  height: 10px;
  width: 100%;
  cursor: pointer;
  opacity: 0;
  margin: 0 auto;
`;

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
