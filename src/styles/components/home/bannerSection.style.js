import styled from "styled-components";
import theme from "../../theme";

export const Container = styled.section`
  background-color: ${theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 80px;
  min-height: calc(100vh - 80px);
  width: 100vw;

  @media (max-width: ${theme.bp.medium}) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 50vw;

  @media (max-width: ${theme.bp.medium}) {
    width: 100vw;
  }
`;

export const Robot = styled.img`
  width: 300px;
  @media (max-width: ${theme.bp.small}) {
    width: 240px;
  }
  @media (max-width: ${theme.bp["x-small"]}) {
    width: 200px;
  }
`;

export const TextLogo = styled.div`
  h1 {
    text-align: center;
    margin: 0;
    font-size: 95px;
    color: ${theme.colors.raisinblack};
  }
  p {
    text-align: center;
    margin: 0;
    font-size: 26px;
    font-weight: 700;
    color: ${theme.colors.electricindigo};
    text-transform: uppercase;
  }

  @media (max-width: ${theme.bp.small}) {
    h1 {
      font-size: 80px;
    }
    p {
      font-size: 22px;
    }
  }
  @media (max-width: ${theme.bp["x-small"]}) {
    h1 {
      font-size: 65px;
    }
    p {
      font-size: 18px;
    }
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0px 30px 30px 30px;
  width: 50vw;
  height: 60vh;

  background-image: url("assets/backgrounds/Background1.svg");
  background-size: 103%;
  background-repeat: no-repeat;
  background-position: right;

  @media (max-width: ${theme.bp.medium}) {
    width: 100vw;
    background-size: 98%;
    height: 40vh;
  }

  @media (max-width: ${theme.bp["x-small"]}) {
    background-size: 130%;
  }
`;

export const Title = styled.h4`
  text-align: center;
  margin: 0;
  font-size: 32px;
  font-weight: 600;
  color: ${theme.colors.raisinblack};

  @media (max-width: ${theme.bp.large}) {
    font-size: 28px;
  }
  @media (max-width: ${theme.bp.medium}) {
    font-size: 32px;
  }
  @media (max-width: ${theme.bp.small}) {
    font-size: 28px;
  }

  @media (max-width: ${theme.bp["x-small"]}) {
    font-size: 20px;
  }
`;
export const Resume = styled.p`
  text-align: left;
  margin: 0;
  font-size: 24px;
  font-weight: 500;
  color: ${theme.colors.platinum};
  padding: 30px 0px 30px 130px;
  justify-content: flex-end;

  @media (max-width: ${theme.bp.large}) {
    padding: 10px 20px 10px 130px;
    font-size: 20px;
  }

  @media (max-width: ${theme.bp.medium}) {
    font-size: 22px;
    padding: 30px 20px 30px 190px;
  }
  @media (max-width: ${theme.bp.small}) {
    font-size: 22px;
  }

  @media (max-width: ${theme.bp["x-small"]}) {
    padding: 20px 20px 20px 20px;
    font-size: 20px;
  }
`;
export const BTN = styled.div`
  height: 35px;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${theme.bp.medium}) {
    margin-right: 50px;
  }
`;
