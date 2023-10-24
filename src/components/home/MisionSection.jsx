import {
  Container,
  Details,
  Hero,
  HeroIMG,
  Item,
  ItemIcon,
  ItemResume,
  ItemText,
  ItemTitle,
  TitleDetails,
} from "../../styles/components/home/misionSection.style";

function HeroSection() {
  return (
    <Container>
      <Hero>
        <HeroIMG src="assets/home/company.png" alt="hero-image" />
      </Hero>
      <Details>
        <TitleDetails>Tecnología y futuro: Nuestro compromiso</TitleDetails>
        <Item>
          <ItemIcon src="assets/home/9.svg" alt="icon" />
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
          <ItemIcon src="assets/home/8.svg" alt="icon" />
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
