import styled from "styled-components";
import PropTypes from "prop-types";
import theme from "../../styles/theme";
import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";

const Button = styled(Link)`
  text-align: center;
  white-space: nowrap;
  text-transform: uppercase;
  vertical-align: middle;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  border: 0px;
  padding: 0 32px;
  font-size: 20px;
  line-height: 36px;
  color: ${theme.colors.background[1]};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.4s ease-out 0s;
  background: linear-gradient(
    to right,
    ${theme.colors.detail2[1]} 0%,
    ${theme.colors.detail2[2]} 50%,
    ${theme.colors.detail2[3]} 100%
  );
  text-decoration: none;
`;

const ButtonArrow = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
  text-align: center;
  white-space: nowrap;
  text-transform: uppercase;
  vertical-align: middle;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  border: 0px;
  padding: 0 32px;
  font-size: 20px;
  line-height: 36px;
  color: ${theme.colors.background[1]};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.4s ease-out 0s;
  background: linear-gradient(
    to right,
    ${theme.colors.detail2[1]} 0%,
    ${theme.colors.detail2[2]} 50%,
    ${theme.colors.detail2[3]} 100%
  );
  text-decoration: none;
`;

function Details2Button({ to, buttonText, rightArrow }) {
  return rightArrow ? (
    <ButtonArrow to={to}>
      {buttonText}{<MdArrowForwardIos size={20} />}
    </ButtonArrow>
  ) : (
    <Button to={to}>
      {buttonText}
    </Button>
  );
}

Details2Button.propTypes = {
  to: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  rightArrow: PropTypes.bool,
};

export default Details2Button;
