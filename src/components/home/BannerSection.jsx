import styled from "styled-components";
import theme from "../../styles/theme";

const Container = styled.section`
  background-color: ${theme.colors.background[1]};
  color: ${theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  height: calc(100vh - 50px);
  width: 100vw;

  img {
    height: 400px;

    @media (max-width: ${theme.bp["x-small"]}) {
      height: 250px;
    }
  }
`;

const Title = styled.h1`
  text-align: center;
  padding: 0 30px;
  font-size: 60px;
  @media (max-width: ${theme.bp["x-small"]}) {
    font-size: 40px;
  }
`;

function BannerSection() {
  return (
    <Container>
      <img src='assets/logotipo.svg' alt='' />
      <Title>Síntesis de voces potenciadas por AI</Title>
    </Container>
  );
}

export default BannerSection;
