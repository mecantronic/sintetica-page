import styled from "styled-components"
import theme from "../../styles/theme"
import { montserratMixin, quicksandMixin } from "../../styles/mixins"

export const StyledTtsLanguage = styled.div`
  color: ${theme.colors.black.jet};
  background-color: ${theme.colors.backgrounds.white};
  border: 1.5px solid;
  border-color: ${theme.colors.details.LavenderWeb};
  border-radius: 12px;
  padding-left: 1.5rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  box-shadow: ${theme.boxShadow.card};
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const StyledTtsHeader = styled.div`
  h3 {
    ${quicksandMixin}
    color: ${theme.colors.details.tropicalIndigo};
    font-weight: 600;
    line-height: 19.6px;
    font-size: 16px;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 16.8px;
    color: ${theme.colors.black.jet};
  }
`;

export const Options = styled.div`
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 12px;
  position: relative;

  @media (max-width: ${theme.bp.s}) {
    gap: 8px;
  }
`;

export const StyledOption = styled.button`
  background-color: ${theme.colors.backgrounds.white};
  border: 1px solid;
  border-color: ${props => props.$active ? theme.colors.details.tropicalIndigo : '#ede5fb'};
  color: ${props => props.$active ? theme.colors.black.night : '#545353'};
  padding: 0.38rem 0.75rem;
  border-radius: 8px;
  display: inline-flex;
  gap: 0.5rem;
  align-items: center;
  ${montserratMixin};

  @media (max-width: ${theme.bp.s}) {
    padding: 0.25rem 0.5rem;
    gap: 0.25rem;
  }

  .ball {
    background-color: ${props => props.$active ? theme.colors.details.mediumSlateBlue : '#f1f0f6'};
    border-radius: 50%;
    height: 1rem;
    width: 1rem;
  }
`;