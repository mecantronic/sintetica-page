import styled from "styled-components";
import PropTypes from "prop-types";
import theme from "../../styles/theme";
import { Link } from "react-router-dom";

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
  background: ${theme.colors.onyx};
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

function Details1Button({ to, buttonText }) {
  return <Button to={to} >{buttonText}</Button>;
}

Details1Button.propTypes = {
  to: PropTypes.string,
  buttonText: PropTypes.string,
};

export default Details1Button;
