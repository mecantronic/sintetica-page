import PropTypes from 'prop-types';
import { Button } from '../../styles/components/buttons/details2Button.style';

function Details2Button({ buttonText, handleClick, square, small }) {
  const smallStr = small.toString();

  return (
    <Button $square={square} $small={smallStr}>
      <button onClick={handleClick}>{buttonText}</button>
    </Button>
  );
}

Details2Button.propTypes = {
  buttonText: PropTypes.string,
  handleClick: PropTypes.func,
  square: PropTypes.bool,
  small: PropTypes.bool,
};

Details2Button.defaultProps = {
  small: false,
};

export default Details2Button;
