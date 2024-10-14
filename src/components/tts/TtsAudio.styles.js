import styled from "styled-components"
import theme from "../../styles/theme";
import { montserratMixin } from "../../styles/mixins";

const StyledTtsAudio = styled.div`
  background-color: ${theme.colors.backgrounds.white};
  border: 1.5px solid;
  border-color: ${theme.colors.details.LavenderWeb};
  border-radius: 12px;
  min-height: 112px;
  overflow: hidden;
  position: relative;
  width: 100%;
  padding-left: 1.5rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  box-shadow: ${theme.boxShadow.card};

  div {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-width: 0 1.5px 1.5px 0;
    border-style: solid;
    border-color: ${theme.colors.details.LavenderWeb};
    border-radius:  0 0 8px;
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
    ${montserratMixin}

    img {
      width: 0.75rem;
      height: 0.75rem;
    }
    span {
      font-size: 14px;
      font-weight: 400;
      line-height: 19.6px;
    }
  }

  picture {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 1.75rem;
      height: 1.75rem;
    }
  }
`;

export default StyledTtsAudio