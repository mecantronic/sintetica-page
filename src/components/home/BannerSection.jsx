import styled from "styled-components";
import theme from "../../styles/theme";

const Container = styled.section`
  //background-color: ${theme.colors.background[1]};
  background: none;
  color: ${theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 80px;
  height: calc(100vh);
  width: 100vw;
`;

const Robot = styled.img`
  width: 350px;

  @media (max-width: ${theme.bp["x-small"]}) {
    width: 240px;
  }
`;

const Waves = styled.img`
  position: relative;
  top: -110px;
  width: 600px;
  margin: 0;
  padding: 0;
  @media (max-width: ${theme.bp.medium}) {
    top: -100px;
  }
  @media (max-width: ${theme.bp.small}) {
    width: 100vw;
  }
  @media (max-width: ${theme.bp["x-small"]}) {
    top: -60px;
  }
`;
const Title = styled.h1`
  position: relative;
  top: -110px;
  text-align: center;
  margin: 0;
  padding: 0 30px;
  font-size: 60px;
  @media (max-width: ${theme.bp["x-small"]}) {
    font-size: 40px;
  }
`;

function BannerSection() {
  return (
    <Container>
      <Robot src='assets/logotipo.svg' alt='logo' />
      <Waves src='assets/home/onda_amarilla.svg' alt='ondas' />
      <Title>Síntesis de voces potenciadas por AI</Title>
    </Container>
  );
}

export default BannerSection;
