import styled from "styled-components";
import theme from "../../styles/theme";
import { MdArrowForwardIos } from "react-icons/md";
import Details2Button from "../buttons/Details2Button";

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

const BalloonCloud = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: calc(90vw / 2);
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

const Waves = styled.img`
  position: relative;
  top: -110px;
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
  width: calc(90vw / 2);

  @media (max-width: ${theme.bp.large}) {
    width: 80%;
  }
`;
const WhatIs = styled.span`
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${theme.colors.detail1[1]};
  letter-spacing: 1px;
`;
const TitleWhat = styled.h3`
  font-size: 50px;
  line-height: 60px;
  font-weight: 600;
  letter-spacing: -1px;
  padding-top: 5px;
  margin: 0;
`;
const ResumeWhat = styled.p`
  font-size: 18px;
  line-height: 30px;
  margin: 0;
  padding-bottom: 20px;
`;

const Service = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 20px;

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
  font-weight: 600;
  text-transform: uppercase;
  margin: 0;
`;
const ServiceResume = styled.p`
  font-size: 18px;
  line-height: 30px;
  padding-top: 3px;
  margin: 0;
`;

const PositionBTN = styled.div`
  height: 35px;
  display: flex;
  justify-content: flex-end;
`;

function WhatIsSection() {
  return (
    <Container>
      <BalloonCloud>
        <Balloons src='assets/home/globos.svg' alt='globos' />
        <Waves src='assets/home/onda_amarilla.svg' alt='ondas' />
      </BalloonCloud>
      <Details>
        <WhatIs>*** ¿QUÉ ES SINTÉTICA? ***</WhatIs>
        <TitleWhat>Síntesis de voces en Español Rioplatense</TitleWhat>
        <ResumeWhat>
          Sintética es un laboratorio de síntesis de voces. Nuestra pasión por
          la innovación está arraigada en el compromiso de transformar vidas.
          Impulsamos investigaciones vanguardistas, creamos productos
          revolucionarios y promovemos la inclusión en la salud. Transformamos
          voces en posibilidades.
        </ResumeWhat>

        <Service>
          <ServiceIcon
            src='../../../public/assets/home/6.svg'
            alt='text-icon'
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
              <Details2Button
                buttonText={<MdArrowForwardIos size={14} />}
                to='/'
              />
            </PositionBTN>
          </ServiceCTA>
        </Service>

        <Service>
          <ServiceIcon
            src='assets/home/5.svg'
            alt='text-icon'
          />
          <ServiceCTA>
            <ServiceTitle>Voice Cloning - Español Latinoamericano</ServiceTitle>
            <ServiceResume>
              ¿Te imaginas poder replicar cualquier voz? Con nuestro sistema
              podés hacerlo realidad. Experimenta la libertad de dar vida a tus
              proyectos con voces familiares o icónicas en español rioplatense.
            </ServiceResume>
            <PositionBTN>
              <Details2Button
                buttonText={<MdArrowForwardIos size={14} />}
                to='/'
              />
            </PositionBTN>
          </ServiceCTA>
        </Service>

        <Service>
          <ServiceIcon
            src='assets/home/7.svg'
            alt='text-icon'
          />
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
              <Details2Button
                buttonText={<MdArrowForwardIos size={14} />}
                to='/'
              />
            </PositionBTN>
          </ServiceCTA>
        </Service>

        <Service>
          <ServiceIcon
            src='assets/home/8_1.png'
            alt='text-icon'
          />
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
              <Details2Button
                buttonText={<MdArrowForwardIos size={14} />}
                to='/'
              />
            </PositionBTN>
          </ServiceCTA>
        </Service>
      </Details>
    </Container>
  );
}

export default WhatIsSection;
