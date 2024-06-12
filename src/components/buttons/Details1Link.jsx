import PropTypes from 'prop-types';
import { Button } from '../../styles/components/buttons/details1Link.style';

function Details1Link({ to, buttonText }) {
  return <Button to={to}>{buttonText}</Button>;
}

Details1Link.propTypes = {
  to: PropTypes.string,
  buttonText: PropTypes.string,
};


export default Details1Link;
