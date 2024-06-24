import PropTypes from 'prop-types';
import { Input } from './customInput.styles';

function CustomInput({
  inputType,
  contentType,
  placeHolder,
  id,
  name,
  value,
  onChange,
  cols,
  rows,
}) {
  return (
    <Input
      inputType={inputType}
      type={contentType}
      placeholder={placeHolder}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      cols={cols}
      rows={rows}
    />
  );
}

CustomInput.propTypes = {
  inputType: PropTypes.oneOf(['input', 'textArea']),
  contentType: PropTypes.string,
  placeHolder: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  cols: PropTypes.string,
  rows: PropTypes.string,
};

CustomInput.defaultProps = {
  contentType: 'text',
  inputType: 'input',
};

export default CustomInput;
