import PropTypes from "prop-types"
import { IconContainer, SelectContainer, StyledSelect } from "./CustomSelect.styles"

function CustomSelect ({ children, value, onChange }) {
  return (
    <SelectContainer value={value} onChange={onChange}>
      <StyledSelect>
        {children}
      </StyledSelect>
      <IconContainer>
        <img src="/assets/tts/arrow-down.svg" alt="" width="12px" height="12px" />
      </IconContainer>
    </SelectContainer>
  )
}

CustomSelect.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default CustomSelect