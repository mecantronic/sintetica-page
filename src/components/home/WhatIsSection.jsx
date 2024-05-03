import Details2Link from '../buttons/Details2Link';
import {
  BalloonCloud,
  Balloons,
  Banner,
  Container,
  Details,
  NameSection,
  PositionBTN,
  ResumeWhat,
  Service,
  ServiceCTA,
  ServiceIcon,
  ServiceResume,
  ServiceTitle,
  Services,
  TitleWhat,
} from '../../styles/components/home/whatIsSection.style';

function WhatIsSection() {
  return (
    <Container>
      <NameSection>¿Qué es Sintética?</NameSection>
      <Banner>
        <BalloonCloud>
          <Balloons src="assets/home/card5.svg" alt="globos" />
        </BalloonCloud>
        <Details>
          <TitleWhat>Voces en Español Rioplatense</TitleWhat>
          <ResumeWhat>
            <p>
              Sintética es un laboratorio de síntesis de voces. Nuestra pasión
              por la innovación está arraigada en el compromiso de transformar
              vidas. Impulsamos investigaciones vanguardistas, creamos productos
              revolucionarios y promovemos la inclusión en la salud.
            </p>
            <p>Transformamos voces en posibilidades.</p>
          </ResumeWhat>
        </Details>
      </Banner>
      <Services>
        <Service>
          <ServiceIcon src="assets/home/card4.svg" alt="text-icon" />
          <ServiceCTA>
            <ServiceTitle>
              Text To Speech - Español Latinoamericano
            </ServiceTitle>
            <ServiceResume>
              Nuestra tecnología te ofrece una experiencia de conversión de
              texto a discurso única. Con acentos auténticos y entonaciones
              naturales tus proyectos, presentaciones y aplicaciones serán
              sobresalientes. Sumérgete en la nueva era del habla sintética y
              dale voz a tus ideas en tu propio idioma.
            </ServiceResume>
            <PositionBTN>
              <Details2Link rightArrow={true} to="/Maintenance" />
            </PositionBTN>
          </ServiceCTA>
        </Service>

        <Service>
          <ServiceIcon
            src="assets/voiceCloning/bannerVoice.svg"
            alt="text-icon"
          />
          <ServiceCTA>
            <ServiceTitle>Voice Cloning - Español Latinoamericano</ServiceTitle>
            <ServiceResume>
              ¿Te imaginas poder replicar cualquier voz? Con nuestro sistema
              podés hacerlo realidad. Experimenta la libertad de dar vida a tus
              proyectos con voces familiares o icónicas en español rioplatense.
            </ServiceResume>
            <PositionBTN>
              <Details2Link rightArrow={true} to="/VoiceCloning" />
            </PositionBTN>
          </ServiceCTA>
        </Service>

        <Service>
          <ServiceIcon src="assets/home/card6.svg" alt="text-icon" />
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
              <Details2Link rightArrow={true} to="/Maintenance" />
            </PositionBTN>
          </ServiceCTA>
        </Service>

        <Service>
          <ServiceIcon src="assets/home/card7.svg" alt="text-icon" />
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
              <Details2Link rightArrow={true} to="/Maintenance" />
            </PositionBTN>
          </ServiceCTA>
        </Service>
      </Services>
    </Container>
  );
}

export default WhatIsSection;
