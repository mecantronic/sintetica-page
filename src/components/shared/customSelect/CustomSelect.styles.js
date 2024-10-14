import styled from "styled-components";
import theme from "../../../styles/theme";
import { montserratMixin } from "../../../styles/mixins";

export const SelectContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledSelect = styled.select`
  width: 100%;
  padding: 9px 13px;
  margin: 0;
  border-radius: 0.5rem;
  border: 1.5px solid ${theme.colors.details.LavenderWeb};
  background-color: ${theme.colors.backgrounds.white};
  ${montserratMixin}
  appearance: none; /* Oculta la flecha predeterminada */
  outline: none;
  cursor: pointer;

  &:focus {
    border-color: ${theme.colors.details.tropicalIndigo};
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  pointer-events: none;
`;
