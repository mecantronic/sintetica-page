import styled from "styled-components";
import PropTypes from "prop-types";
import theme from "../../styles/theme";

const Button = styled.div`
  button {
    text-align: center;
    white-space: nowrap;
    text-transform: uppercase;
    vertical-align: middle;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    border: 0px;
    padding: 0 32px;
    font-size: 14px;
    font-weight: 700;
    line-height: 36px;
    color: ${theme.colors.white};
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.4s ease-out 0s;
    background: linear-gradient(
      to right,
      ${theme.colors.electricindigo} 0%,
      ${theme.colors.lavenderfloral} 100%
    );
    text-decoration: none;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      bottom: 0px;
      left: 0px;
      width: 0px;
      height: 100%;
      background: rgba(255, 255, 255, 0.3);
      transition: all 1s ease;
    }
    &:hover:before {
      width: 100%;
    }
  }
`;

function Details2Button({ buttonText, handleClick }) {
  return (
    <Button>
      <button onClick={handleClick}>{buttonText}</button>
    </Button>
  );
}

Details2Button.propTypes = {
  buttonText: PropTypes.string,
  handleClick: PropTypes.node,
};

export default Details2Button;
