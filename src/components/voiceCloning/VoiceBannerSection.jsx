import styled from "styled-components";
import theme from "../../styles/theme";
import Details2Button from "../buttons/Details2Button";

const Container = styled.section`
  background-color: ${theme.colors.white};
  color: ${theme.colors.electricindigo};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  @media (max-width: ${theme.bp.large}) {
    height: auto;
    padding-top: 100px;
  }
  @media (max-width: ${theme.bp.small}) {
    padding-top: 50px;
  }
`;

const Graphic = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: calc(90vw / 2);

  @media (max-width: ${theme.bp.large}) {
    width: auto;
  }
`;

const HeroIMG = styled.img`
  width: 600px;
  @media (max-width: ${theme.bp.large}) {
    width: 600px;
  }
  @media (max-width: ${theme.bp.medium}) {
    width: 450px;
  }
  @media (max-width: ${theme.bp.small}) {
    width: 300px;
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

const TitleDetails = styled.h3`
  font-size: 60px;
  line-height: 60px;
  font-weight: 600;
  letter-spacing: -1px;
  color: ${theme.colors.raisinblack};
  padding-top: 5px;
  margin: 0;
  @media (max-width: ${theme.bp["x-small"]}) {
    font-size: 40px;
  }
`;
const ResumeDetails = styled.p`
  font-size: 18px;
  line-height: 30px;
  margin: 0;
  padding-bottom: 20px;
  padding-top: 20px;
  color: ${theme.colors.gray};
`;

const Right = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

function VoiceBanner() {
  return (
    <Container>
      <Graphic>
        <HeroIMG src='assets/voiceCloning/logo.png' />
      </Graphic>
      <Details>
        <TitleDetails>Inteligencia Artificial para alzar tu voz</TitleDetails>
        <ResumeDetails>
          Crea una copia digital de tu voz con nuestros sistemas de inteligencia
          artificial para clonar voces. Desarrollamos modelos de IA
          personalizados para capturar tu voz y darte la experiencia más
          realista en tu propio idioma.
        </ResumeDetails>
        <Right>
          <Details2Button to='' buttonText='Cloná tu voz ' rightArrow={true} />
        </Right>
      </Details>
    </Container>
  );
}

export default VoiceBanner;
