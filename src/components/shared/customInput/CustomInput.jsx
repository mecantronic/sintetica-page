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
  readOnly,
  required,
  maxLength
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
      readOnly={readOnly}
      required={required}
      maxLength={maxLength}
    />
  );
}

CustomInput.propTypes = {
  inputType: PropTypes.oneOf(['input', 'textArea']),
  contentType: PropTypes.string,
  placeHolder: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  cols: PropTypes.string,
  rows: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  maxLength: PropTypes.number
};

CustomInput.defaultProps = {
  contentType: 'text',
  inputType: 'input',
  readOnly: false,
  required: false
};

export default CustomInput;
