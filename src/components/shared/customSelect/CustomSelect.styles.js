import styled from "styled-components";
import theme from "../../../styles/theme";
import { montserratMixin } from "../../../styles/mixins";

const StyledCustomSelect = styled.select`
  width: 100%;
  padding: 9px 13px;
  margin: 0;
  border-radius: 15px;
  border: 2px solid ${theme.colors.grayScale[300]};
  background-color: ${theme.colors.backgrounds.white};
  ${montserratMixin}
`;

export default StyledCustomSelect