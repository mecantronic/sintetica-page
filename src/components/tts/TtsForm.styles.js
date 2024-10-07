import styled from "styled-components";
import theme from "../../styles/theme";
import { montserratMixin } from "../../styles/mixins";

export const StyledTtsForm = styled.form`
  background-color: ${theme.colors.backgrounds.white};
  border: 1.5px solid;
  border-color: ${theme.colors.details.LavenderWeb};
  border-radius: 12px;
  width: 100%;
  box-shadow: ${theme.boxShadow.card};

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
    font-size: 16px;
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
    ${montserratMixin};
    border: 1.5px solid;
    border-color: ${theme.colors.details.LavenderWeb};
    border-radius: 8px;
    width: 100%;
    height: 160px;
    padding: 0.5rem;
    resize: none;
    line-height: 19.6px;
  }
`;

export const StyledLeft = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.87rem;

  @media (max-width: ${theme.bp.s}) {
    padding-bottom: 1.5rem;
  }
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
  gap: 3rem;

  @media (max-width: ${theme.bp.s}) {
    gap: 2rem;
  }

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
    border: 1px solid rgba(165, 116, 255, 0.50);
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
    width: 38px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Inter;
  }

  button:hover {
    background-color: ${theme.colors.details.LavenderWeb};
  }

  input {
    width: 4rem;
    border-radius: 0.25rem;
    text-align: center;
    border: 1px solid #E5E7EB;
    font-family: Inter;
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