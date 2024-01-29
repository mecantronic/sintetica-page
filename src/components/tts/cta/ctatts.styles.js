import styled from "styled-components";
import theme from "../../../styles/theme";

export const CtaContainer = styled.div`
  background: none;
  color: ${theme.colors.gray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 10px 200px 10px;
  width: 100vw;

  @media (max-width: ${theme.bp.large}) {
    background-size: 30%;
  }
`;

export const Title = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${theme.colors.raisinblack};
  font-size: 30px;
  line-height: 60px;
  font-weight: 600;
  letter-spacing: -1px;
  padding: 0 0 10px 0;
  margin: 0;
  text-transform: uppercase;

  @media (max-width: ${theme.bp.small}) {
    line-height: 44px;
    font-size: 24px;
    padding: 10px 0;
  }
  @media (max-width: ${theme.bp["x-small"]}) {
    line-height: 30px;
    font-size: 20px;
    padding: 5px 0;
  }
`;
