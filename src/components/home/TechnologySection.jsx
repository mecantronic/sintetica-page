import styled from "styled-components";
import theme from "../../styles/theme";
import { Link } from "react-router-dom";

const Container = styled.section`
  background-color: ${theme.colors.background[1]};
  color: ${theme.colors.primary};
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
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
  height: 400px;
  width: 400px;
  box-shadow: 0px 5px 5px 5px rgba(0, 0, 0, 0.04);

  img {
    width: 250px;
  }

  h3 {
    font-size: 24px;
    font-weight: 600;
    color: ${theme.colors.primary};
    margin: 0;
  }
  &:hover {
    img {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
  }

  @media (max-width: ${theme.bp.medium}) {
    box-shadow: none;
    height: 300px;
  width: 400px;
    }
`;

function TechnologySection() {
  return (
    <Container>
      <Technology to='/VoiceCloning'>
        <img src='assets/home/2.svg' alt='icon' />
        <h3>Sistemas entrenados en</h3>
        <h3>Español Latinoamericano</h3>
      </Technology>
      <Technology to='/NotFound'>
        <img src='assets/home/3.svg' alt='icon' />
        <h3>Inteligencia Artificial</h3>
        <h3>desarrollada desde la ética</h3>
      </Technology>
      <Technology to='/IA'>
        <img src='assets/home/4.svg' alt='icon' />
        <h3>Herramientas de impacto social</h3>
        <h3>Salud e Inclusión</h3>
      </Technology>
    </Container>
  );
}

export default TechnologySection;
