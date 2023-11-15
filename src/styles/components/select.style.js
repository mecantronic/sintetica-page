import styled from "styled-components";
import theme from "../theme";

export const SelectContainer = styled.div`
color: ${theme.colors.onyx};
  display: flex;
  width: 100%;
  flex-direction: column;

  font-size: 12px;
  gap: 4px;
`;

export const StyledSelect = styled.select`
  background-color: ${theme.colors.white};
  color: ${theme.colors.gray};
  width: 100%;
  padding: 4px;
  border: 2px solid ${theme.colors.platinum};
  border-radius: 4px;

`;
