import ObjectiveCard from './ObjectiveCard';
import { CardsContainer, Container, IntroText } from './ourObjectives.styles';

function OurObjectives() {
  return (
    <Container>
      <IntroText>
        Queremos reducir la brecha tecnológica de las voces sintéticas en
        nuestro idioma
      </IntroText>
      <CardsContainer>
        <ObjectiveCard
          to="/VoiceCloning"
          title="Sistemas entrenados en Español Latinoamericano"
          imgSrc="assets/home/card1.svg"
          imgAlt=""
        />
        <ObjectiveCard
          to="/Maintenance"
          title="Inteligencia Artificial desarrollada desde la ética"
          imgSrc="assets/home/card2.svg"
          imgAlt=""
        />
        <ObjectiveCard
          to="/Maintenance"
          title="Herramientas de impacto social, Salud e Inclusión"
          imgSrc="assets/home/card3.svg"
          imgAlt=""
        />
      </CardsContainer>
    </Container>
  );
}

export default OurObjectives;
