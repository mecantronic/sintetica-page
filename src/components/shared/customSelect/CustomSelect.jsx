import PropTypes from "prop-types"
import StyledCustomSelect from "./CustomSelect.styles"

function CustomSelect ({ children, value, onChange }) {
  return (
    <StyledCustomSelect value={value} onChange={onChange}>
      {children}
    </StyledCustomSelect>
  )
}

CustomSelect.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default CustomSelect