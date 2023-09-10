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
  @media (max-width: ${theme.bp.large}) {
    margin-top: 100px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: calc(90vw / 2);

  @media (max-width: ${theme.bp.large}) {
    width: 80%;
  }
`;

const Image = styled.img`
  position: relative;
  width: 600px;
  @media (max-width: ${theme.bp.large}) {
    width: 400px;
  }
  @media (max-width: ${theme.bp.small}) {
    width: 80vw;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: calc(90vw / 2);

  @media (max-width: ${theme.bp.large}) {
    width: 80%;
  }
`;

const Why = styled.span`
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${theme.colors.detail1[1]};
  letter-spacing: 1px;
`;

const TitleWhy = styled.h3`
  font-size: 50px;
  line-height: 60px;
  font-weight: 600;
  letter-spacing: -1px;
  padding-top: 5px;
  margin: 0;
`;

const ResumeWhy = styled.p`
  font-size: 18px;
  line-height: 30px;
  margin: 0;
  padding-bottom: 20px;
`;

function WhySection() {
  return (
    <Container>
      <Details>
        <Why>*** ¿Porqué lo hacemos?</Why>
        <TitleWhy>Tecnología al servicio de la salud y la inclusión</TitleWhy>
        <ResumeWhy>
          En Sintética, estamos convencidos de que la tecnología debe ser una
          fuerza impulsora para mejorar la vida de las personas en todo el
          mundo. Con ese compromiso en mente, hemos dirigido nuestros esfuerzos
          hacia una visión transformadora: empoderar a individuos de todas las
          capacidades y orígenes a través de soluciones innovadoras.
        </ResumeWhy>
        <ResumeWhy>
          En la intersección de la vanguardia tecnológica y el bienestar humano,
          la inteligencia artificial ha emergido como un faro de posibilidades.
          Creemos en la importancia de la inclusión, en la eliminación de
          barreras y en la promoción de la igualdad en todos los niveles.
        </ResumeWhy>
        <ResumeWhy>
          La clonación de voz no solo es un avance técnico, es un testimonio de
          nuestro compromiso de construir un mundo donde cada voz sea escuchada
          y respetada. Te invitamos a explorar nuestros proyectos y descubrir
          cómo la inteligencia artificial está transformando la salud de maneras
          que antes solo podíamos imaginar.
        </ResumeWhy>
      </Details>
      <ImageContainer>
        <Image src="../../../public/assets/ia-salud/logo_1.png" alt="Logo IA-salud"/>
      </ImageContainer>
    </Container>
  );
}

export default WhySection;
