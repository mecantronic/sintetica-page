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
  @media (max-width: ${theme.bp.medium}) {
    flex-direction: column;
  }
`;

const NameSection = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  padding: 15px 30px;
  margin: 0;
  border-radius: 25px;
  color: ${theme.colors.lavenderfloral};
  background-color: ${theme.colors.lavender};
`;

const Title = styled.h4`
font-size: 32px;
    font-weight: 700;
    color: ${theme.colors.raisinblack};
    margin: 0;
    padding: 15px 0px 70px 0px;
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
    background-color: ${theme.colors.platinum};
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
  }
  &:hover {
    img {
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }
  }

  @media (max-width: ${theme.bp.medium}) {
    //box-shadow: none;
    margin: 30px 0px;
    width: 400px;
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
