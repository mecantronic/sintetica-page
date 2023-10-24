import PropTypes from "prop-types";
import { Button } from "../../styles/components/buttons/details2Button.style";

function Details2Button({ buttonText, handleClick }) {
  return (
    <Button>
      <button onClick={handleClick}>{buttonText}</button>
    </Button>
  );
}

Details2Button.propTypes = {
  buttonText: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Details2Button;
