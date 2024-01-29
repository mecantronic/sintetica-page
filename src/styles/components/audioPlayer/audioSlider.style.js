import styled from "styled-components";
import theme from "../../theme";

export const Container = styled.div`
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
export const ProgressBarCover = styled.div`
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

export const Thumb = styled.div`
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

export const Range = styled.input`
  height: 10px;
  width: 100%;
  cursor: pointer;
  opacity: 0;
  margin: 0 auto;
`;
