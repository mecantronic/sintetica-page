import {
  Container,
  NameSection,
  Technologies,
  Technology,
  Title,
} from "../../styles/components/home/technologySection.style";

function TechnologySection() {
  return (
    <Container>
      <NameSection>Nuestros objetivos</NameSection>
      <Title>
        Queremos reducir la brecha tecnológica de las voces sintéticas en
        nuestro idioma
      </Title>
      <Technologies>
        <Technology to="/VoiceCloning">
          <img src="assets/home/card1.svg" alt="icon" />
          <h3>Sistemas entrenados en</h3>
          <h3>Español Latinoamericano</h3>
        </Technology>
        <Technology to="/Maintenance" className="selected">
          <img src="assets/home/card2.svg" alt="icon" />
          <h3>Inteligencia Artificial</h3>
          <h3>desarrollada desde la ética</h3>
        </Technology>
        <Technology to="/Maintenance">
          <img src="assets/home/card3.svg" alt="icon" />
          <h3>Herramientas de impacto social</h3>
          <h3>Salud e Inclusión</h3>
        </Technology>
      </Technologies>
    </Container>
  );
}

export default TechnologySection;
