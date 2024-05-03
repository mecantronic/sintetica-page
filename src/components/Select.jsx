import PropTypes from 'prop-types';
import {
  SelectContainer,
  StyledSelect,
} from '../styles/components/select.style';

const Select = ({ label, options, value, onChange }) => {
  return (
    <SelectContainer>
      {label && <label>{label}</label>}
      <StyledSelect value={value} onChange={onChange}>
        <option key="1000" value="Seleccionar..." disabled>
          Seleccionar
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </SelectContainer>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Select;
