import PropTypes from "prop-types";
import { Button } from "../../styles/components/buttons/details2Button.style";

function Details2Button({ buttonText, handleClick, square }) {
  return (
    <Button square={square}>
      <button onClick={handleClick}>{buttonText}</button>
    </Button>
  );
}

Details2Button.propTypes = {
  buttonText: PropTypes.string,
  handleClick: PropTypes.func,
  square: PropTypes.bool,
};

export default Details2Button;
