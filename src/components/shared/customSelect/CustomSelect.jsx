import PropTypes from "prop-types"
import StyledCustomSelect from "./CustomSelect.styles"

function CustomSelect ({ children, ...props }) {
  return (
    <StyledCustomSelect {...props}>
      {children}
    </StyledCustomSelect>
  )
}

CustomSelect.propTypes = {
  children: PropTypes.element
}

export default CustomSelect