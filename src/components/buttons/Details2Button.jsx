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

function Details2Button({ to, buttonText }) {
  return <Button to={to} >{buttonText}</Button>;
}

Details2Button.propTypes = {
  to: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
};

export default Details2Button;
