import styled from "styled-components";
import theme from "../../styles/theme";
import { Link } from "react-router-dom";

const Container = styled.section`
  background-color: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;

  background-image: url("assets/backgrounds/Background3.svg");
  background-size: 40%;
  background-repeat: repeat;
  background-position: bottom;

  @media (max-width: ${theme.bp.medium}) {
    flex-direction: column;
  }
  @media (max-width: ${theme.bp.small}) {
    margin-top: 80px;
  }
  @media (max-width: ${theme.bp["x-small"]}) {
    margin-top: 100px;
  }
`;

const NameSection = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  padding: 15px 30px;
  margin: 0;
  border-radius: 25px;
  color: ${theme.colors.lavenderfloral};
  background-color: ${theme.colors.lavender};
`;

const Title = styled.h4`
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  color: ${theme.colors.raisinblack};
  margin: 0;
  padding: 15px 0px 70px 0px;
  @media (max-width: ${theme.bp.small}) {
    font-size: 28px;
  }
  @media (max-width: ${theme.bp["x-small"]}) {
    font-size: 24px;
  }
`;

const Technologies = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  gap: 40px;
  @media (max-width: ${theme.bp.medium}) {
    flex-direction: column;
  }
`;

const Technology = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: 450px;
  width: 300px;
  background-color: ${theme.colors.white};
  border-radius: 10px;
  box-shadow: 0px 10px 10px 2px rgba(0, 0, 0, 0.15);

  &.selected {
    background-color: ${theme.colors.white};
  }

  img {
    width: 250px;
    padding-bottom: 50px;
  }

  h3 {
    font-size: 18px;
    font-weight: 600;
    color: ${theme.colors.gray};
    margin: 0;
    text-transform: uppercase;
  }
  &:hover {
    img {
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }
  }

  @media (max-width: ${theme.bp.medium}) {
    margin: 30px 0px;
    width: 400px;
  }

  @media (max-width: ${theme.bp["x-small"]}) {
    margin: 30px 0px;
    width: 300px;
    height: 400px;
    h3{
      font-size: 16px;
    }
  }
`;

function TechnologySection() {
  return (
    <Container>
      <NameSection>Integraciónes</NameSection>
      <Title>Nisi porta lorem mollis aliquam ut porttitor leo</Title>
      <Technologies>
        <Technology to="/VoiceCloning">
          <img src="assets/home/2.svg" alt="icon" />
          <h3>Sistemas entrenados en</h3>
          <h3>Español Latinoamericano</h3>
        </Technology>
        <Technology to="/NotFound" className="selected">
          <img src="assets/home/3.svg" alt="icon" />
          <h3>Inteligencia Artificial</h3>
          <h3>desarrollada desde la ética</h3>
        </Technology>
        <Technology to="/IA">
          <img src="assets/home/4.svg" alt="icon" />
          <h3>Herramientas de impacto social</h3>
          <h3>Salud e Inclusión</h3>
        </Technology>
      </Technologies>
    </Container>
  );
}

export default TechnologySection;
