import styled from "styled-components";
import theme from "../../styles/theme";
import Details2Button from "../buttons/Details2Button";

const Container = styled.section`
  //background-color: ${theme.colors.background[1]};
  background: none;
  color: ${theme.colors.electricindigo};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;

  background-image: url('assets/backgrounds/Background3.svg');
  background-size: 40%;
  background-repeat: repeat;
  background-position:   bottom;


  @media (max-width: ${theme.bp.medium}) {
    flex-direction: column;
  }
  @media (max-width: ${theme.bp.small}) {
    margin-top: 100px;
  }
`;

const Banner = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;
const BalloonCloud = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 30vw;
  height: 400px;
  @media (max-width: ${theme.bp.large}) {
    width: 80%;
  }
`;

const Balloons = styled.img`
  position: relative;
  width: 600px;
  @media (max-width: ${theme.bp.small}) {
    width: 100vw;
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
/* const WhatIs = styled.span`
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${theme.colors.detail1[1]};
  letter-spacing: 1px;
`; */
const TitleWhat = styled.h3`
  font-size: 50px;
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
const ResumeWhat = styled.p`
padding: 0 20px;
  text-align: left;
  font-size: 18px;
  line-height: 30px;
  color: ${theme.colors.gray};
  margin: 0;
  padding: 0;
  padding: 20px 0px;
`;

const Services = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

const Service = styled.div`
  display: flex;
  flex-direction: row;
  width: 60vw;
  
  padding-bottom: 20px;
  margin: 20px 0px;
  border: 2px solid ${theme.colors.platinum};
  background-color: ${theme.colors.seasalt};
  border-radius: 20px;
  padding: 15px;
  padding-top: 40px;

  @media (max-width: ${theme.bp["x-small"]}) {
    flex-direction: column;
    align-items: center;
  }
`;
const ServiceIcon = styled.img`
  width: 150px;
  height: 150px;
`;

const ServiceCTA = styled.div`
  display: flex;
  flex-direction: column;
`;

const ServiceTitle = styled.h5`
  font-size: 20px;
  font-weight: 700;
  color: ${theme.colors.raisinblack};
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 10px;
`;
const ServiceResume = styled.p`
  font-size: 16px;
  line-height: 30px;
  color: ${theme.colors.gray};
  padding-top: 3px;
  margin: 0;
`;

const PositionBTN = styled.div`
  height: 35px;
  display: flex;
  justify-content: flex-end;
  padding-top: 50px;
`;

function WhatIsSection() {
  return (
    <Container>
      <NameSection>¿QUÉ ES SINTÉTICA?</NameSection>
      <Banner>
        <BalloonCloud>
          <Balloons src="assets/home/globos.svg" alt="globos" />
        </BalloonCloud>
        <Details>
          <TitleWhat>Síntesis de voces en Español Rioplatense</TitleWhat>
          <ResumeWhat>
            Sintética es un laboratorio de síntesis de voces. Nuestra pasión por
            la innovación está arraigada en el compromiso de transformar vidas.
            Impulsamos investigaciones vanguardistas, creamos productos
            revolucionarios y promovemos la inclusión en la salud. Transformamos
            voces en posibilidades.
          </ResumeWhat>
        </Details>
      </Banner>
      <Services>
        <Service>
          <ServiceIcon
            src="../../../public/assets/home/6.svg"
            alt="text-icon"
          />
          <ServiceCTA>
            <ServiceTitle>Tex To Speech - Español Latinoamericano</ServiceTitle>
            <ServiceResume>
              Nuestra tecnología te ofrece una experiencia de conversión a texto
              única. Con acentos auténticos y entonaciones naturales tus
              proyectos, presentaciones y aplicaciones serán sobresalientes.
              Sumérgete en la nueva era del habla sintética y dale voz a tus
              ideas en tu propio idioma.
            </ServiceResume>
            <PositionBTN>
              <Details2Button rightArrow={true} to="/NotFound" />
            </PositionBTN>
          </ServiceCTA>
        </Service>

        <Service>
          <ServiceIcon src="assets/home/5.svg" alt="text-icon" />
          <ServiceCTA>
            <ServiceTitle>Voice Cloning - Español Latinoamericano</ServiceTitle>
            <ServiceResume>
              ¿Te imaginas poder replicar cualquier voz? Con nuestro sistema
              podés hacerlo realidad. Experimenta la libertad de dar vida a tus
              proyectos con voces familiares o icónicas en español rioplatense.
            </ServiceResume>
            <PositionBTN>
              <Details2Button rightArrow={true} to="/VoiceCloning" />
            </PositionBTN>
          </ServiceCTA>
        </Service>

        <Service>
          <ServiceIcon src="assets/home/7.svg" alt="text-icon" />
          <ServiceCTA>
            <ServiceTitle>
              AI al servicio de la salud y la inclusión
            </ServiceTitle>
            <ServiceResume>
              Nuestra clonación de voz es la herramienta que cambiará vidas,
              brindando independencia a través del habla sintética
              personalizada. Explora cómo estamos redefiniendo la comunicación
              inclusiva.
            </ServiceResume>
            <PositionBTN>
              <Details2Button rightArrow={true} to="/IA" />
            </PositionBTN>
          </ServiceCTA>
        </Service>

        <Service>
          <ServiceIcon src="assets/home/8_1.png" alt="text-icon" />
          <ServiceCTA>
            <ServiceTitle>Toolkit para voces</ServiceTitle>
            <ServiceResume>
              Nuestro toolkit te brinda el control completo sobre tus archivos
              de audio, desde el inicio hasta el final. ¿Necesitas dividir
              automáticamente pistas largas? Hecho. ¿No cuentas con
              transcripciones? No hay problema. ¿Buscas validar transcripciones
              con precisión? Te cubrimos. ¿Quieres crear datasets en diferentes
              idiomas? Lo hacemos posible.
            </ServiceResume>
            <PositionBTN>
              <Details2Button rightArrow={true} to="/NotFound" />
            </PositionBTN>
          </ServiceCTA>
        </Service>
      </Services>
    </Container>
  );
}

export default WhatIsSection;
