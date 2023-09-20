import styled from "styled-components";
import theme from "../../styles/theme";

const Container = styled.section`
  background-color: ${theme.colors.background[1]};
  color: ${theme.colors.primary};
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  margin-top: 200px;
  @media (max-width: ${theme.bp.medium}) {
    flex-direction: column;
  }
`;

const Hero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 30vw;
  height: 400px;

  @media (max-width: ${theme.bp.large}) {
    width: 80%;
  }
  @media (max-width: ${theme.bp.small}) {
    margin-top: 100px;
  }
`;

const HeroIMG = styled.img`
  width: 600px;
  @media (max-width: ${theme.bp.large}) {
    padding-bottom: 200px;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 60vw;

  @media (max-width: ${theme.bp.large}) {
    width: 90%;
  }
`;

const TitleDetails = styled.h3`
  font-size: 60px;
  line-height: 60px;
  font-weight: 600;
  letter-spacing: -1px;
  padding-top: 5px;
  margin: 0;
  margin-bottom: 50px;
  @media (max-width: ${theme.bp["x-small"]}) {
    font-size: 40px;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 20px;

  @media (max-width: ${theme.bp["x-small"]}) {
    flex-direction: column;
    align-items: center;
  }
`;

const ItemIcon = styled.img`
  width: 150px;
  height: 150px;
`;

const ItemText = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemTitle = styled.h5`
  font-size: 20px;
  font-weight: 800;
  text-transform: uppercase;
  margin: 0;
`;
const ItemResume = styled.p`
  font-size: 18px;
  line-height: 30px;
  padding-top: 3px;
  margin: 0;
`;

function HeroSection() {
  return (
    <Container>
      <Hero>
        <HeroIMG src='assets/home/company.png' alt='hero-image' />
      </Hero>
      <Details>
        <TitleDetails>Tecnología y futuro: Nuestro compromiso</TitleDetails>
        <Item>
          <ItemIcon src='assets/home/9.svg' alt='icon' />
          <ItemText>
            <ItemTitle>Misión:</ItemTitle>
            <ItemResume>
              En Sintética nos comprometemos a desarrollar tecnologías
              vanguardistas que permitan a individuos de todas las capacidades
              comunicarse y expresarse de manera auténtica. Guiados por la ética
              y la responsabilidad social, nuestro enfoque es crear soluciones
              que no solo superen barreras, sino que también promuevan un mundo
              más accesible y empático. Creemos que cada voz es única y merece
              ser escuchada, y trabajamos incansablemente para que esa visión se
              convierta en realidad.
            </ItemResume>
          </ItemText>
        </Item>

        <Item>
          <ItemIcon src='assets/home/8.svg' alt='icon' />
          <ItemText>
            <ItemTitle>Valores:</ItemTitle>
            <ItemResume>
              Desarrollamos tecnologías de vanguardia con una profunda
              responsabilidad ética, asegurando que cada avance tecnológico
              contribuya al bienestar de la sociedad y respete los principios de
              privacidad y seguridad.
            </ItemResume>
            <ItemResume>
              Creemos en nuestro papel como agentes de cambio social.
              Colaboramos con comunidades, organizaciones y profesionales para
              ampliar el impacto positivo de nuestras soluciones en la vida
              cotidiana.
            </ItemResume>
            <ItemResume>
              Estamos comprometidos con la excelencia en todos los aspectos de
              nuestro negocio, desde la precisión técnica hasta la integridad
              ética, asegurando que nuestras acciones y tecnologías reflejen los
              más altos estándares.
            </ItemResume>
          </ItemText>
        </Item>
      </Details>
    </Container>
  );
}

export default HeroSection;
