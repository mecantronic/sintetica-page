import styled from "styled-components";
import theme from "../../styles/theme";

const Container = styled.section`
  background-color: ${theme.colors.background[1]};
  color: ${theme.colors.primary};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding-top: 50px;
`;

const Title = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${theme.colors.detail1[1]};
  letter-spacing: 1px;
`;

const VocesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 50px 0px;
`;

const Item = styled.a`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 330px;
  padding: 15px;
  background-color: ${theme.colors.background[3]};
  border-radius: 15px;
`;

const Image = styled.img`
  width: 320px;
  height: 380px;
`;

function NewsSection() {
  return (
    <Container>
      <Title>*** Prensa ***</Title>
      <VocesContainer>
        <Item href='https://www.tiempoar.com.ar/informacion-general/rivas-voz-inteligencia-artificial/'>
          <Image src='../../../public/assets/ia-salud/nota1.png' alt='Nota' />
        </Item>
        <Item href='https://www.telam.com.ar/notas/202306/631037-jorge-rivas-inteligencia-artificial-voz-original.html/'>
          <Image src='../../../public/assets/ia-salud/nota2.png' alt='Nota' />
        </Item>
      </VocesContainer>
    </Container>
  );
}

export default NewsSection;
