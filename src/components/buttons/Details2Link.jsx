import PropTypes from 'prop-types';
import { MdArrowForwardIos } from 'react-icons/md';
import {
  Button,
  ButtonArrow,
} from '../../styles/components/buttons/details2Link.style';

function Details2Link({ to, buttonText, rightArrow }) {
  return rightArrow ? (
    <ButtonArrow to={to}>
      {buttonText}
      {<MdArrowForwardIos size={20} />}
    </ButtonArrow>
  ) : (
    <Button to={to}>{buttonText}</Button>
  );
}

Details2Link.propTypes = {
  to: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  rightArrow: PropTypes.bool,
};

export default Details2Link;
