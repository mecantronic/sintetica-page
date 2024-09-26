import styled from "styled-components";
import theme from "../../styles/theme";

export const StyledTtsForm = styled.form`
  background-color: ${theme.colors.backgrounds.white};
  border: 1.5px solid;
  border-color: ${theme.colors.details.LavenderWeb};
  border-radius: 12px;
  width: 100%;
  box-shadow: 0px 8px 12px 0px #00000026;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, auto);
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  @media (max-width: ${theme.bp.s}) {
    display: flex;
    flex-direction: column;
  }

  h3 {
    color: ${theme.colors.details.tropicalIndigo};
    font-weight: 600;
    line-height: 19.6px;
  }
`;

export const StyledHeader = styled.div`
  grid-area: 1 / 1 / 2 / 3;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.5rem 1.5rem 1.5rem 1rem;

  textarea {
    background-color: ${theme.colors.backgrounds.white};
    font-family: 'Montserrat', sans-serif;
    border: 1.5px solid;
    border-color: ${theme.colors.details.LavenderWeb};
    border-radius: 8px;
    width: 100%;
    height: 160px;
    padding: 0.5rem;
    resize: none;
  }
`;

export const StyledLeft = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.87rem;
`;

export const StyledRight = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  padding: 0 1.5rem 1.5rem 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.87rem;
`;

export const StyledFooter = styled.div`
  grid-area: 3 / 1 / 4 / 3;
  padding: 0.75rem 1.5rem 1.5rem 1.5rem;

  display: flex;
  gap: 0.75rem;

  button {
    width: 100%;
  }
`;

export const StyledButtons = styled.div`
  display: flex;
  gap: 1rem;
  height: 38px;

  button {
    background-color: ${theme.colors.backgrounds.white};
    border: 1.5px solid;
    border-color: ${theme.colors.details.LavenderWeb};
    border-radius: 8px;
    padding: 0.5rem 1rem;
    width: 38px;
  }

  button:hover {
    background-color: ${theme.colors.details.LavenderWeb};
  }

  input {
    width: 4rem;
    text-align: center;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
`;