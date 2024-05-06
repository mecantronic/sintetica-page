import PropTypes from 'prop-types';
import { Button } from '../../styles/components/buttons/details1Button.style';

function Details1Button({ buttonText, handleClick }) {
  return (
    <Button>
      <button onClick={handleClick}>{buttonText}</button>
    </Button>
  );
}

Details1Button.propTypes = {
  buttonText: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Details1Button;
