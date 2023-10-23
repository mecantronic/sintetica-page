import styled from "styled-components";
import theme from "../theme";

export const MaintenanceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  background-color: ${theme.colors.white};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${theme.bp.medium}) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 40vw;
  @media (max-width: ${theme.bp.medium}) {
    width: 60vw;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;

  h2 {
    font-size: 80px;
    font-weight: 400;
    line-height: 90px;
    padding-bottom: 4px;
    color: ${theme.colors.electricindigo};
  }
  span {
    font-size: 40px;
    color: ${theme.colors.raisinblack};
    padding-bottom: 19px;
  }

  @media (max-width: ${theme.bp.medium}) {
    width: 90vw;
  }
  @media (max-width: ${theme.bp["x-small"]}) {
    h2 {
      font-size: 50px;
      font-weight: 400;
      line-height: 30px;
      padding-bottom: 4px;
      color: ${theme.colors.electricindigo};
    }
    span {
      font-size: 20px;
      color: ${theme.colors.raisinblack};
      padding-bottom: 19px;
    }
  }
`;

export const BTN = styled.div`
  height: 35px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`;
