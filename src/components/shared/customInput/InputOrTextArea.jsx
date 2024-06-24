import PropTypes from 'prop-types';

export const InputOrTextArea = ({ inputType, ...props }) =>
  inputType === 'textArea' ? <textarea {...props} /> : <input {...props} />;

InputOrTextArea.propTypes = {
  inputType: PropTypes.oneOf(['input', 'textArea']),
};

InputOrTextArea.defaultProps = {
  inputType: 'input',
};
