import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


export const ButtonOrLink = ({ isLink, ...props }) =>
  isLink ? <Link {...props} /> : <button {...props} />;

ButtonOrLink.propTypes = {
  isLink: PropTypes.bool,
};

