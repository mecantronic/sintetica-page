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
background: rgba(255, 255, 255, 0.3);    transition: all 1s ease;
}
&:hover:before {
  width: 100%;
}
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
border-radius: 20px; /* Agregamos el border radius aquí */
&:hover:before {
  width: 100%;
}
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
