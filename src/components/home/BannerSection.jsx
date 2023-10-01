import styled from "styled-components";
import theme from "../../styles/theme";
import Details2Button from "../buttons/Details2Button";

const Container = styled.section`
  background-color: ${theme.colors.white};
  //color: ${theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 80px;
  min-height: calc(100vh - 80px);
  width: 100vw;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 40vw;
`;

const Robot = styled.img`
  width: 400px;
  @media (max-width: ${theme.bp["x-small"]}) {
    width: 240px;
  }
`;

const TextLogo = styled.div`
  h1 {
    text-align: center;
    margin: 0;
    font-size: 128px;
    color: ${theme.colors.raisinblack};
  }
  p {
    text-align: center;
    margin: 0;
    font-size: 32px;
    font-weight: 700;
    color: ${theme.colors.cinnabar};
    text-transform: uppercase;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 30px 30px;
  width: 50vw;
`;

const Title = styled.h4`
  text-align: center;
  margin: 0;
  font-size: 32px;
  font-weight: 600;
  color: ${theme.colors.raisinblack};
`;
const Resume = styled.p`
  text-align: center;
  margin: 0;
  font-size: 24px;
  font-weight: 500;
  color: ${theme.colors.gray};
  padding: 30px 0px;
`;
const BTN = styled.div`
  height: 35px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

function BannerSection() {
  return (
    <Container>
      <Left>
        <Robot src="assets/logotipo.svg" alt="logo" />
        <TextLogo>
          <h1>Sintética</h1>
          <p>Laboratorio de voces</p>
        </TextLogo>
      </Left>
      <Right>
        <Title>Síntesis de voces potenciadas por AI</Title>
        <Resume>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Resume>
        <BTN><Details2Button buttonText="Contactanos" to="/NotFound" /></BTN>
      </Right>
    </Container>
  );
}

export default BannerSection;
